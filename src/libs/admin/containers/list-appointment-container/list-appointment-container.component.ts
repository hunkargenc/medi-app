import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, filter, switchMap, takeWhile } from 'rxjs/operators';
import { ListAppointmentService } from '../../services/list-appointment-services/list-appointment.service';
import { MatTableDataSource } from '@angular/material/table';
//import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog'
import { AppointmentFormContainerComponent } from 'src/libs/main-module/containers/appointment-form-container/appointment-form-container.component';
import { CreateDialogComponent } from '../../components/create-dialog/create-dialog.component';
import { AppointmentFormService } from 'src/libs/main-module/services/appointment-form-services/appointment-form.service';
import { AngularFireDatabase } from '@angular/fire/database';
//import { CreateDialogComponent } from '../../components/create-dialog/create-dialog.component';
//import {MatTableDataSource} from '@angular/material/table';

// import { userInfo } from 'os';

export interface Appointments {
  fullName: string;
  email: string;
  mobile: string;
  city: string;
  sex: string;
  job: string;
  appointmentDate: string;
  isSure: boolean;
}

// const appointments: Appointments[] = [
//   fullName: this.fullName
// ];
@Component({
  selector: 'app-list-appointment-container',
  templateUrl: './list-appointment-container.component.html',
  styleUrls: ['./list-appointment-container.component.scss'],
})
export class ListAppointmentContainerComponent implements OnInit {

  appointments = []

  appointmentForm = this.formBuilder.group({
    fullName: this.formBuilder.control(null, [Validators.required]),
    email: this.formBuilder.control(null, [Validators.email]),
    mobile: this.formBuilder.control(null, [Validators.required, Validators.minLength(8)]),
    city: this.formBuilder.control(null),
    sex: this.formBuilder.control(null),
    job: this.formBuilder.control(null),
    appointmentDate: this.formBuilder.control(null, [Validators.required]),
    isSure: this.formBuilder.control(null, [Validators.required]),
  })

  subscriptions: Subscription = new Subscription();

  dataSource: MatTableDataSource<any>;
  // dataSource: MatSort<any>;

  displayedColumn: string[] = [
    'fullName',
    'email',
    'mobile',
    'city',
    'sex',
    'job',
    'appointmentDate',
    'actions',
  ];

  filteredProfiles;

  nameFormControl = new FormControl(null);

  getAppointmentsSubject = new Subject();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
  }
  searchKey: string;

  navItems = [
    {
      name: 'Anasayfa',
      routerLink: '/admin/admin-dashboard',
    },
    {
      name: 'Randevu Talepleri',
      routerLink: '/admin/list-appointment',
    },
    // {
    //   name: "CSS",
    //   routerLink: "css"
    // },
    // {
    //   name: "Details",
    //   routerLink: "technical"
    // }
  ];


  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private appointmentsDbService: ListAppointmentService,
    public dialog: MatDialog,
    private appointmentFormService: AppointmentFormService,
    private formBuilder: FormBuilder, private db: AngularFireDatabase
  ) {}

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['admin/login']);
    });
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.appointmentsDbService.getAppointments().subscribe((appointments) => {
        this.appointments = appointments;
        //this.isLoading = false;
        this.dataSource = new MatTableDataSource(appointments);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      })
    );

    this.filteredProfiles = this.nameFormControl.valueChanges.pipe(
      filter((value) => typeof value == 'string'),
      debounceTime(400),
      switchMap((str) => {
        return this.appointmentsDbService.getProfileByNameStartWithStr(str);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getAppointments(appointment) {
    console.log(appointment);
    this.getAppointmentsSubject.next(
      appointment.getAppointments().subscribe((appointments) => {
        this.appointments = appointments;
        //this.isLoading = false;
        this.dataSource = new MatTableDataSource(appointments);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      })
    );
  }

  displayFn(appointment) {
    return appointment && appointment.fullName ? appointment.fullName : '';
  }

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter(){
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  goToAppointment= function () {
    this.router.navigateByUrl('/appointment-form');
  };

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '1000px',
      data: {component: ListAppointmentContainerComponent}
    });
    dialogRef.afterClosed().subscribe((appointments) => {
      this.appointments = appointments;
    });
  }

  openUpdateDialog(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '1000px',
      data: {component: ListAppointmentContainerComponent}
    });
    dialogRef.afterClosed().subscribe((appointments) => {
      this.appointments = appointments;
    });
  }

  onDelete($key){
    if(confirm('Randevuyu silmek istediğinize emin misiniz?')){
      console.log($key)
      this.appointmentsDbService.deleteAppointments($key);
      //this.notificationService.warn('Başarıyla silindi.');
    }
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  // handleUpdateClicked() {
  //   this.router.navigateByUrl('/appointment-form');
  //   this.appointmentFormService.updateAppointment(this.appointmentForm.value);
  // }
  
}


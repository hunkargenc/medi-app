import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, filter, switchMap, takeWhile } from 'rxjs/operators';
import { ListAppointmentService } from '../../services/list-appointment-services/list-appointment.service';
import { MatTableDataSource } from '@angular/material/table';
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
@Component({
  selector: 'app-list-appointment-container',
  templateUrl: './list-appointment-container.component.html',
  styleUrls: ['./list-appointment-container.component.scss'],
})
export class ListAppointmentContainerComponent implements OnInit {

  displayedColumns: string[] = ['fullName', 'email', 'mobile', 'city', 'sex', 'job', 'appointmentDate', 'isSure'];
  dataSource;
  
  appointments = [];

  // filteredAppointments;

  nameFormControl = new FormControl(null);

  // getAppointmentssSubject = new Subject();

  subscriptions: Subscription = new Subscription();

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
    private appointmentsDbService: ListAppointmentService
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
        this.dataSource = new MatTableDataSource(appointments);
      })
    );

    // this.filteredAppointments = this.nameFormControl.valueChanges.pipe(
    //   filter(value => typeof(value) == "string"),
    //   debounceTime(400),
    //   switchMap((str) => {
    //     return this.appointmentsDbService.getProfileByNameStartWithStr(str);
    //   })
    // );

    // getAppointments(appointment) {
    //   console.log(deger);
    //   this.getAppointmentssSubject.next(deger.userId);
    // }

  }
}

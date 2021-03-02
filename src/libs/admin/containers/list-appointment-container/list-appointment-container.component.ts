import { Component, OnInit, OnDestroy } from '@angular/core';
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
  displayedColumns = [
    'fullName',
    'email',
    'mobile',
    'city',
    'sex',
    'job',
    'appointmentDate',
    'isSure',
  ];
  dataSource;

  appointments = [];

  subscriptions: Subscription = new Subscription();

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredAppointments = this.listFilter
      ? this.doFilter(this.listFilter)
      : this.appointments;
  }

  filteredAppointments: Appointments[] = [];

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
  ) {
    this.filteredAppointments = this.appointments;
    this.listFilter = '';
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['admin/login']);
    });
  }

  doFilter(filterBy: string): Appointments[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.appointments.filter((appointment: Appointments) =>
        appointment.fullName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.appointmentsDbService.getAppointments().subscribe((appointments) => {
        this.appointments = appointments;
        this.dataSource = new MatTableDataSource(appointments);
      })
    );
  }
}

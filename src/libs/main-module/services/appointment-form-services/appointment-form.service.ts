import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AppointmentFormService {

  constructor(public auth: AngularFireAuth, private firestore: AngularFirestore, private router: Router ) { }

  // createAppointment(value){
  //   return this.firestore.collection('appointments').add({
  //     fullName: value.fullName,
  //     email: value.email,
  //     mobile: value.mobile,
  //     city: value.city,
  //     sex: value.sex,
  //     job: value.job,
  //     appointmentDate: value.appointmentDate,
  //     isSure: value.isSure,
  //   });
  // }

  addAppointment(appointmentInfo) {
    this.firestore.collection("appointments").add({
          ...appointmentInfo,
          //job: job.value,
          //date: new Date().getTime()
    })
    alert('Randevu talebiniz oluşturuldu. En kısa sürede sizinle iletişime geçilecektir.')
    setTimeout(() => {
      this.router.navigate(['/home']);
   }, 2000);
  }
}

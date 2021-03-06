import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
//import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ListAppointmentService {
  
  appointmentList = []
  // listData = []

  constructor(private firestore: AngularFirestore, private firebase: AngularFireDatabase, private router: Router ) { }
  
  getAppointments() {
    // WARNING: Do not use in production!
    // This returns the whole collection causing too many document reads.
    return this.firestore.collection("appointments", ref=>ref
    .orderBy('appointmentDate','asc')
    ).valueChanges().pipe(filter(value=>!!value));
  }

  getProfileByNameStartWithStr(str) {
    return this.firestore.collection("appointments", ref => ref
      .where('fullName', '>=', str)
      .where(
        'fullName',
        '<',
        str.replace(/.$/, (c) => String.fromCharCode(c.charCodeAt(0) + 1))
      )
      .limit(6)).valueChanges();
  }

  addAdminAppointment(appointmentInfo) {
    this.firestore.collection("appointments").add({
          ...appointmentInfo,
          //job: job.value,
          //appointmentDate: appointmentDate
    })
  //   setTimeout(() => {
  //     this.router.navigate(['admin/list-appointment']);
  //  }, 2000);
   alert('Randevu oluşturuldu.')
  }

  deleteAppointments(key: string){
    console.log(key)
    this.firestore.collection('appointments').doc(key).delete()
    .then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }


}

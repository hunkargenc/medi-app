import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
//import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ListAppointmentService {
  
  // appointmentList = []

  constructor(private firestore: AngularFirestore) { }
  
  getAppointments() {
    // WARNING: Do not use in production!
    // This returns the whole collection causing too many document reads.
    return this.firestore.collection("appointments", ref=>ref
    .orderBy('appointmentDate','asc')
    ).valueChanges().pipe(filter(value=>!!value));
  }

  // getAppointmentsFromUser(fullName) {
  //   return this.firestore.collection("appointments", (ref) => ref.where("fullName", "==", fullName).orderBy("appointmentDate", "asc")).valueChanges().pipe(
  //     filter(value=>!!value)
  //   );
  // }

  // getAppointmentByNameStartWithStr(str) {
  //   return this.firestore.collection("appointments", ref => ref
  //     .where('fullName', '>=', str)
  //     .where(
  //       'fullName',
  //       '<',
  //       str.replace(/.$/, (c) => String.fromCharCode(c.charCodeAt(0) + 1))
  //     )
  //     .limit(6)).valueChanges();
  // }

}

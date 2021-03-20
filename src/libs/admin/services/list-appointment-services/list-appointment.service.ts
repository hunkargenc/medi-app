import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ListAppointmentService {
  
  constructor(private firestore: AngularFirestore, private firebase: AngularFireDatabase, private router: Router ) { }
  
  getAppointments() {
    // WARNING: Do not use in production!
    // This returns the whole collection causing too many document reads.
    return this.firestore.collection("appointments", ref=>ref
    .orderBy('appointmentDate','asc')
    ).valueChanges({ idField: 'propertyId' }).pipe(filter(value=>!!value));
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
    })
   alert('Randevu oluşturuldu.')
   window.location.reload();
  }

  updateAppointment(data) {
    return this.firestore
      .collection("appointments")
      .doc(data)
      .set({ completed: true }, { merge: true });
  }

  deleteAppointment(data){
    this.firestore.collection("appointments").doc(data.propertyId).delete()
    .then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }
}

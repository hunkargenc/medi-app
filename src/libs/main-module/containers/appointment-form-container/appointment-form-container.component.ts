import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AngularFireDatabase } from  '@angular/fire/database'; 
import { AppointmentFormService } from '../../services/appointment-form-services/appointment-form.service';

@Component({
  selector: 'app-appointment-form-container',
  templateUrl: './appointment-form-container.component.html',
  styleUrls: ['./appointment-form-container.component.scss']
})
export class AppointmentFormContainerComponent implements OnInit {
  
  appointments = []

  appointmentForm = this.formBuilder.group({
    fullName: this.formBuilder.control(null, [Validators.required]),
    email: this.formBuilder.control(null, [Validators.email]),
    mobile: this.formBuilder.control(null, [Validators.required, Validators.minLength(8)]),
    city: this.formBuilder.control(null),
    sex: this.formBuilder.control(null),
    job: this.formBuilder.control(null),
    appointmentDate: this.formBuilder.control(null, [Validators.required]).toString(),
    isSure: this.formBuilder.control(null, [Validators.required]),
  })

  subscriptions: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder, private db: AngularFireDatabase, private service: AppointmentFormService) { }

  jobs = [
    {id:3, value: 'Öğrenci'},
    {id:2, value: 'Özel Sektör'},
    {id:1, value: 'Kamu Çalışanı'},
  ]

  handleAddClicked() {
    this.service.addAppointment(this.appointmentForm.value);
  }

  ngOnInit(): void {
    
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
//import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { HttpClientModule } from '@angular/common/http';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminContainerComponent } from './containers/admin-container/admin-container.component';
import { AdminDashboardContainerComponent } from './containers/admin-dashboard-container/admin-dashboard-container.component';
import { ListAppointmentContainerComponent } from './containers/list-appointment-container/list-appointment-container.component';
import { ListAppointmentService } from './services/list-appointment-services/list-appointment.service';

@NgModule({
  declarations: [
    AdminContainerComponent,
    AdminDashboardContainerComponent,
    ListAppointmentContainerComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    //AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    MatTableModule,
    MatAutocompleteModule,
    MatCardModule,
    //FormsModule,
    //StoreModule.forRoot({}, {}),
    //EffectsModule.forRoot([]),
    //!environment.production ? StoreDevtoolsModule.instrument() : []
    //BrowserModule,
    //BrowserAnimationsModule,
    //HttpClientModule
    

  ],
  providers: [ListAppointmentService],
})
export class AdminModule {}

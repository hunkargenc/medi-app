import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';


import { MainModuleRoutingModule } from './main-module-routing.module';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppointmentFormContainerComponent } from './containers/appointment-form-container/appointment-form-container.component';
import { MatNativeDateModule } from '@angular/material/core';
import { AppointmentFormService } from './services/appointment-form-services/appointment-form.service';

@NgModule({
  declarations: [
    HomeContainerComponent,
    NavbarComponent,
    FooterComponent,
    AppointmentFormContainerComponent,
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatNativeDateModule,
    
  ],
  providers: [
    AppointmentFormService
  ],
})
export class MainModuleModule {}

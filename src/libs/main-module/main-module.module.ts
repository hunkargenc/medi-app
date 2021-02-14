import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppointmentFormContainerComponent } from './containers/appointment-form-container/appointment-form-container.component';

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
    MatFormFieldModule,
  ],
})
export class MainModuleModule {}

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminContainerComponent } from './containers/admin-container/admin-container.component';
import { AdminDashboardContainerComponent } from './containers/admin-dashboard-container/admin-dashboard-container.component';
import { ListAppointmentContainerComponent } from './containers/list-appointment-container/list-appointment-container.component';
import { ListAppointmentService } from './services/list-appointment-services/list-appointment.service';
import { CreateDialogComponent } from './components/create-dialog/create-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppointmentFormContainerComponent } from '../main-module/containers/appointment-form-container/appointment-form-container.component';
import { UpdateDialogComponent } from './components/update-dialog/update-dialog.component';

@NgModule({
  declarations: [
    AdminContainerComponent,
    AdminDashboardContainerComponent,
    ListAppointmentContainerComponent,
    CreateDialogComponent,
    UpdateDialogComponent,
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
    ReactiveFormsModule,
    MatTableModule,
    MatAutocompleteModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatDialogModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
  exports: [],
  
  providers: [ListAppointmentService],
  entryComponents: [AppointmentFormContainerComponent],
  
})
export class AdminModule {
  
}

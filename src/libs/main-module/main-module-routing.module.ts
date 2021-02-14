import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentFormContainerComponent } from './containers/appointment-form-container/appointment-form-container.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'appointment-form', component: AppointmentFormContainerComponent },
  { path: 'home', component: HomeContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainModuleRoutingModule {}

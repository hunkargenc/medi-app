import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { canActivate } from '@angular/fire/auth-guard';
import { AdminContainerComponent } from './containers/admin-container/admin-container.component';
import { AdminDashboardContainerComponent } from './containers/admin-dashboard-container/admin-dashboard-container.component';
import { ListAppointmentContainerComponent } from './containers/list-appointment-container/list-appointment-container.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['admin/login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['admin/admin-dashboard']);
const redirectLoggedInToAppointments = () => redirectLoggedInTo(['admin/list-appointment']);

// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'login' },
//   { path: 'login', component: AdminContainerComponent },
//   { path: 'admin-dashboard', component: AdminDashboardContainerComponent },
// ];

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: AdminContainerComponent,
    ...canActivate(redirectLoggedInToDashboard)
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardContainerComponent,
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'list-appointment',
    component: ListAppointmentContainerComponent,
    ...canActivate(redirectUnauthorizedToLogin)
  },
  // {
  //   path: 'admin-dashboard',
  //   loadChildren: () => import('../libs/modules/admin/admin-dashboard').then(m => m.AdminDashboardContainerComponent),
  //   ...canActivate(redirectUnauthorizedToLogin)
  // },
  // {
  //   path: 'posts',
  //   loadChildren: () => import('../libs/modules/posts/posts.module').then(m => m.PostsModule),
  //   ...canActivate(redirectUnauthorizedToLogin)
  // },
  // {
  //   path: 'css',
  //   loadChildren: () => import('../libs/modules/css-example/css-example.module').then(m => m.CssExampleModule),
  //   ...canActivate(redirectUnauthorizedToLogin)
  // },
  // {
  //   path: 'technical',
  //   loadChildren: () => import('../libs/modules/technical-details/technical-details.module').then(m => m.TechnicalDetailsModule),
  //   ...canActivate(redirectUnauthorizedToLogin)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

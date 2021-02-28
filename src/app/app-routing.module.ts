import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../libs/main-module/main-module.module').then(
        (m) => m.MainModuleModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
    import('../libs/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'admin-dashboard',
    loadChildren: () =>
    import('../libs/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'list-appointment',
    loadChildren: () =>
    import('../libs/admin/admin.module').then((m) => m.AdminModule),
  },
  // {
  //   path: 'admin',
  //   pathMatch: 'full',
  //   component: AdminContainerComponent,
  //   ...canActivate(redirectLoggedInToProfile)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

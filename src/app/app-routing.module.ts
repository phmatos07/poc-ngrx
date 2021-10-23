import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./crud/create/create.module').then(m => m.CreateModule)
  },
  {
    path: 'read',
    loadChildren: () => import('./crud/read/read.module').then(m => m.ReadModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./crud/update/update.module').then(m => m.UpdateModule)
  },
  {
    path: 'delete',
    loadChildren: () => import('./crud/delete/delete.module').then(m => m.DeleteModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

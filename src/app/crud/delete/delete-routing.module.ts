import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete.component';

const routes: Routes = [
  {
    path: '',
    component: DeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DeleteRoutingModule { }

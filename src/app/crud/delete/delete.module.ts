import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeleteRoutingModule } from './delete-routing.module';
import { DeleteComponent } from './delete.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DeleteRoutingModule
  ],
  exports: [DeleteComponent],
  declarations: [DeleteComponent],
})
export class DeleteModule { }

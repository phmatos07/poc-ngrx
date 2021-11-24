import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { DeleteRoutingModule } from './delete-routing.module';
import { DeleteComponent } from './delete.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DeleteRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [DeleteComponent],
  declarations: [DeleteComponent],
})
export class DeleteModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { DialogModule } from './../../feature-view/dialog/dialog.module';
import { DeleteRoutingModule } from './delete-routing.module';
import { DeleteComponent } from './delete.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    DeleteRoutingModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    DialogModule
  ],
  exports: [DeleteComponent],
  declarations: [DeleteComponent],
})
export class DeleteModule { }

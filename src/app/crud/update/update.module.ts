import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpdateRoutingModule } from './update-routing.module';
import { UpdateComponent } from './update.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UpdateRoutingModule
  ],
  exports: [UpdateComponent],
  declarations: [UpdateComponent]
})
export class UpdateModule { }

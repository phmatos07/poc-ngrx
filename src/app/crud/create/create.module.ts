import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CreateRoutingModule
  ],
  exports: [CreateComponent],
  declarations: [CreateComponent]
})
export class CreateModule { }

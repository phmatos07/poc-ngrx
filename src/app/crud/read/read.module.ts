import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ReadRoutingModule } from './read-routing.module';
import { ReadComponent } from './read.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReadRoutingModule,
    MatCardModule
  ],
  exports: [ReadComponent],
  declarations: [ReadComponent]
})
export class ReadModule { }

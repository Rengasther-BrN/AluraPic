import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeadComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeadComponent
  ]
})
export class HeadModule { }

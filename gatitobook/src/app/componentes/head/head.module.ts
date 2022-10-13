import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'src/app/componentes/menu/menu.module';



@NgModule({
  declarations: [
    HeadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuModule
  ],
  exports: [
    HeadComponent
  ]
})
export class HeadModule { }

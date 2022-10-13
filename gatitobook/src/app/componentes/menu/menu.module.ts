import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { AnimaisModule } from 'src/app/animais/animais.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    AnimaisModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }

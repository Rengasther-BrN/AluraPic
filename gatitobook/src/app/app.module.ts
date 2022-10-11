import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RodapeModule } from './componentes/rodape/rodape.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadModule } from './head/head/head.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RodapeModule,
    HeadModule        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

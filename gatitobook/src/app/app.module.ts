import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeadModule } from './componentes/head/head.module';
import { RodapeModule } from './componentes/rodape/rodape.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RodapeModule,
    HeadModule,
    AutenticacaoModule       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

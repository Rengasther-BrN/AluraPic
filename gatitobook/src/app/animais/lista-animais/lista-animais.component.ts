import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pipe, switchMap } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Animais } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {
  
  animais!: Animais
  
  constructor( private activatedRoute: ActivatedRoute ) {}

  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.animais = this.activatedRoute.snapshot.data['animais']
    })
  }
}

  
    /*
    this.usuarioService.retornaUsuario().subscribe((usuario) => {
      const userName = usuario.name ?? ''  Caso o userName for do tipo undefined ou null coloque vazio '' 
      this.animaisService.listaDoUsuario(userName).subscribe((animais) => {
        this.animais = animais
      })
    }) */

    /*       Retirado para o uso do RESOLVER
    this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? ''
        return this.animaisService.listaDoUsuario(userName)
      })      
    )}
    */  

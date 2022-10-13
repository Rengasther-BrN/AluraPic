import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, switchMap, take } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Animais } from '../animais';
import { AnimaisService } from '../animais.service';

@Injectable({
  providedIn: 'root'
})
export class ListaAnimaisResolver implements Resolve<Animais> {

  constructor(
    private animaisServices: AnimaisService, 
    private usuarioServices: UsuarioService 
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Animais> {
    return this.usuarioServices.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? ''
        return this.animaisServices.listaDoUsuario(userName)
      }),
      take(1)
    )
  }
}

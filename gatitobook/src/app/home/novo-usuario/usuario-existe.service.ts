import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';
import { NovoUsuarioService } from './novo-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {
  static usuarioJaExiste(): import("@angular/forms").ValidatorFn {
    throw new Error('Method not implemented.');
  }

  constructor(private novoUsuarioService: NovoUsuarioService) { }

  usuarioJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) => 
          this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
        ),
        map(
          (usuarioExiste) => 
            usuarioExiste ? {usuarioExistente: true} : null 
        ) ,
        first()
      )
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  
  user$ = this.usuarioService.retornaUsuario()

  constructor( private usuarioService: UsuarioService, private router: Router) { }

  logout() {
    this.usuarioService.logout()
    this.router.navigate([''])
  }
  
  
}

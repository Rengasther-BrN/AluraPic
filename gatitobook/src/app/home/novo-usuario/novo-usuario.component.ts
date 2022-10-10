import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm! : FormGroup
 
  constructor(
    private formBuilder: FormBuilder, 
    private novoUsuarioService : NovoUsuarioService, 
    private usuarioExistenteService: UsuarioExisteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = new FormGroup({
      email: new FormControl ('', [Validators.required, Validators.email]),
      fullName: new FormControl ('', [Validators.required, Validators.minLength(5)]),
      userName: new FormControl ('', [Validators.required]),
      password: new FormControl ('', [Validators.required])
    })
  }

  /* Construção do Objeto */
  get email() {
    return this.novoUsuarioForm.get('email')!
  }

  get fullName() {
    return this.novoUsuarioForm.get('fullName')!
  }

  get userName() {
    return this.novoUsuarioForm.get('userName')!
  }

  get password() {
    return this.novoUsuarioForm.get('password')!
  }  

 
  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(() => {
        this.router.navigate([''])      
      },
      (error) => {
        console.log(error)
      }
      ) 
    }
            
  }

}
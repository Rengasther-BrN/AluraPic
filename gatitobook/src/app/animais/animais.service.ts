import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../autenticacao/token.service';
import { Animais, Animal } from './animais';

const API = environment.apiURL
const NOT_MODIFIED = '304'

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {



  constructor(private http: HttpClient, private tokenService: TokenService ) { }

  listaDoUsuario(nomeDoUsuario:string): Observable<Animais> {
    //const token = this.tokenService.retornaToken()                              AGORA O INTERCEPTION FAZ ISSO
    //const headers = new HttpHeaders().append('x-access-token', token)
    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`)
    //, {
    //  headers: headers
    //})
  }

  buscaPorId(id: number): Observable<Animal> {
    //const token = this.tokenService.retornaToken()                              AGORA O INTERCEPTION FAZ ISS
    //const headers = new HttpHeaders().append('x-access-token', token)
    return this.http.get<Animal>(`${API}/photos/${id}`)
    //, {headers})
  }

  excluirAnimal(id:number): Observable<Animal>{
    return this.http.delete<Animal>(`${API}/photos/${id}`)
  }
  
  curtir(id: number): Observable<boolean> {
    return this.http
    .post(`${API}/photos/${id}/like`, {}, {observe: 'response'})
    .pipe(
      map(() => true),
      catchError((error) => {
        return error.status === NOT_MODIFIED ? of (false) : throwError(() => new Error(error))
      })
    )
  }

  upload(descricao: string, permiteComentario: boolean, arquivo : File) {
    const formData = new FormData()
    formData.append('description', descricao)
    formData.append('allowComments', permiteComentario ? 'true' : 'false')
    formData.append('imageFile', arquivo)

    return this.http.post(`${API}/photos/upload`, formData, {
      observe: 'events',
      reportProgress: true
    })
  }

}

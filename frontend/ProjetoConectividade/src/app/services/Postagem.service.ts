import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../models/Comentario';
import { Postagem } from '../models/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  getPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`http://localhost:8000/postagens`);
  }

  getPostagem(id: string): Observable<Postagem> {
    return this.http.get<Postagem>(`http://localhost:8000/postagem/${id}`);
  }

  postComentario(comentario: Comentario): Observable<Postagem> {
    return this.http.post<Postagem>(`http://localhost:8000/novo-comentario`, comentario);
  }
}



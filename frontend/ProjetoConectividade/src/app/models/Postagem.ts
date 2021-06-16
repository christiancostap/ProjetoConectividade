import { Comentario } from "./Comentario";
import { Conclusao } from "./Conclusao";
import { Desenvolvimento } from "./Desenvolvimento";

export class Postagem {

  constructor(_id?: string, titulo?: string, subtitulo?: string, introducao?: string, desenvolvimento?: Desenvolvimento, conclusao?: Conclusao, comentarios?: Comentario[], autor?: string) {
    this._id = _id;
    this.titulo = titulo;
    this.subtitulo = subtitulo;
    this.introducao = introducao;
    this.desenvolvimento = desenvolvimento;
    this.conclusao = conclusao;
    this.comentarios = comentarios;
    this.autor = autor;
  }


  _id?: string;
  titulo?: string;
  subtitulo?: string;
  introducao?: string;
  desenvolvimento?: Desenvolvimento;
  conclusao?: Conclusao;
  comentarios?: Comentario[];
  autor?: string;
}

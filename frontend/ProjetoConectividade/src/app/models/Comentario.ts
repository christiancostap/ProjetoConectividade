export class Comentario {

  constructor(nome?: string, texto?: string, idPostagem?: string){
    this.idPostagem = idPostagem;
    this.nome = nome;
    this.texto = texto;
  }

  idPostagem?: string;
  nome?: string;
  texto?: string;
}

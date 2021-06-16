import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/models/Comentario';
import { Postagem } from 'src/app/models/Postagem';
import { PostagemService } from 'src/app/services/Postagem.service';

@Component({
  selector: 'app-PostagemDetalhes',
  templateUrl: './PostagemDetalhes.component.html',
  styleUrls: ['./PostagemDetalhes.component.css']
})
export class PostagemDetalhesComponent implements OnInit {
  postagem: Postagem;
  routeId: string;
  comentarioForm: FormGroup;

  constructor(private postagemService: PostagemService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.routeId = ''
    this.postagem = new Postagem();
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null){
      this.routeId = id
    }
    this.comentarioForm = this.fb.group({
      nome: [''],
      texto: [''],
    });
   }

  ngOnInit() {
    this.postagemService.getPostagem(this.routeId).subscribe(res => {
      this.postagem = res;
    })
  }

  addComentario() {
    const comentario = new Comentario();
    comentario.idPostagem = this.postagem._id;
    comentario.nome = this.comentarioForm.get('nome').value;
    comentario.texto = this.comentarioForm.get('texto').value;
    this.postagemService.postComentario(comentario).subscribe(res => {
    window.location.reload();
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Postagem } from 'src/app/models/Postagem';
import { PostagemService } from 'src/app/services/Postagem.service';

@Component({
  selector: 'app-Postagem',
  templateUrl: './Postagem.component.html',
  styleUrls: ['./Postagem.component.css']
})
export class PostagemComponent implements OnInit {
  postagemList: Postagem[];
  constructor(private postagemService: PostagemService) {
    this.postagemList = new Array<Postagem>();
   }

  ngOnInit() {
    this.postagemService.getPostagens().subscribe(res => {
      this.postagemList = res;
    })
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostagemComponent } from './components/Postagem/Postagem.component';
import { PostagemDetalhesComponent } from './components/Postagem/PostagemDetalhes/PostagemDetalhes.component';

const routes: Routes = [
  {path: 'home', component: PostagemComponent},
  {path: '', component: PostagemComponent},
  {path: 'postagem/:id', component: PostagemDetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

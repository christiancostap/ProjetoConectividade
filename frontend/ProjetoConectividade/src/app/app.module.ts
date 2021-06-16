import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostagemComponent } from './components/Postagem/Postagem.component';
import { PostagemDetalhesComponent } from './components/Postagem/PostagemDetalhes/PostagemDetalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    PostagemComponent,
    PostagemDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

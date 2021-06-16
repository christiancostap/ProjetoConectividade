import express from 'express'
import mongoose from 'mongoose'
import postagensModel from './postagensModel.js'
import cors from 'cors'


mongoose.connect(
    `mongodb+srv://sharedUserUNA:2Ro44CTNlAZbB7RU@cluster0.przra.mongodb.net/ConectividadeBlog?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  ).catch((err) => console.log('Erro ao tentar conectar: ' + err))


const app = express()
app.use(express.json())
app.use(cors())


app.get('/postagens', async (req, res) => {
  try {
    const postagens = await postagensModel.find();
    res.send(postagens);
  } catch (error) {
    res.status(500).send(error);
  }
})

app.get('/postagem/:idPostagem', async (req, res) => {
  //res.send(params.idPostagem)
  try {

    const id = req.params.idPostagem
    const postagem = await postagensModel.findById(id)
    res.send(postagem);
  } catch (error) {
    res.status(500).send(error);
  }
})

app.post('/nova-postagem', async (req, res) =>{
  try {
    const postagem = new postagensModel(req.body);
    await postagem.save();
    res.send(postagem);
  } catch (error) {
    res.status(500).send(error);
  }
})

app.post('/novo-comentario', async (req, res) =>{
  try {
    console.log(req.body)
    const idPostagem = req.body.idPostagem
    const comentario = {
      nome: req.body.nome,
      texto: req.body.texto
    }
    const postagem = await postagensModel.findById(idPostagem)
    postagem.comentarios.push(comentario)
    await postagem.save(postagem)
    res.send(postagem);
  } catch (error) {
    res.status(500).send(error);
  }
})

app.delete('/deletar-postagem', async (req, res) => {
  try {
    const id = req.body.id
    await postagensModel.findByIdAndDelete(id)
    const postagensRestantes = await postagensModel.find()
    res.send(postagensRestantes)
  } catch (error) {
    res.status(500).send(error);
  }
})

app.listen(8000, () => console.log('API iniciada'))
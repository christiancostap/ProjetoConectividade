import mongoose from "mongoose"

const postagensSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  subtitulo: {
    type: String,
    required: true,
  },
  introducao: {
    type: String,
    required: true
  },
  desenvolvimento: {
    titulo: String,
    corpo: String
  },
  conclusao: {
    titulo: String, 
    corpo: String,
  },
  comentarios: [{
    nome: String, texto: String
  }],
  autor: {
    type: String, 
    required: true}
})

mongoose.model('postagens', postagensSchema)

const postagensModel = mongoose.model('postagens')

export default postagensModel
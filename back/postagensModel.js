import mongoose from "mongoose"

const postagensSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  texto: {
    type: String,
    required: true,
  },
  // comentarios: {
  //   type: [{
  //   nome: String, 
  //   texto: String
  //   }],
  //   default: []
  // }
  comentarios: [{nome: String, texto: String}]
})

mongoose.model('postagens', postagensSchema)

const postagensModel = mongoose.model('postagens')

export default postagensModel
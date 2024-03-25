import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

function validaCampoNumberSemString(valor){
  if(typeof valor !== "number" || /[a-zA-Z]/.test(valor)){
    return false;
  }
  return true;
}

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String, 
      required: [true, "O título do livro é obrigatório"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "autores", 
      required: [true, "O Autor é obrigatório"],
      autopopulate: { select: "nome" } // vai popular apenas com o nome do autor.
      // se usado somente o "true" popularia com todos os campos de autor.
    },
    editora: {
      type: String, 
      required: [true, "A editora é obrigatório"],
      // enum: {
      //   values: ["Casa do Código", "Alura"],
      //   message: "A editora fornecida não é um valor permitido"
      // } serve para aceitar apena esses valores especificos
    },
    numeroPaginas: {
      type: Number,
      validate: [
        {
          validator: (valor) => {
            return valor >= 10 && valor <= 5000;
          },
          message: "O numero de páginas deve estar estre 10 e 5000. Valor fornecido: {VALUE}."
        },
        {
          validator:  validaCampoNumberSemString,
          message: "Esse campo não permite letras."
          
        }
      ]
      
    }
  }
);

livroSchema.plugin(autopopulate);
const livros= mongoose.model("livros", livroSchema);

export default livros;
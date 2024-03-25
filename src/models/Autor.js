import mongoose from "mongoose";

// função para evitar numeros em um campo somente de strings
function validaStringsSemNumeros(valor){
  if(typeof valor !== "string" || /\d/.test(valor)){
    return false;
  }
  return true;
}

const autorSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {
      type: String, 
      required: [true, "O nome do(a) autor(a) é obrigatório."]
    },
    nacionalidade: {
      type: String,
      validate: {
        validator: validaStringsSemNumeros,
        message: "O Campo não deve conter números."
      }
    }
  },
  {
    versionKey: false
  }
);

const autores = mongoose.model("autores", autorSchema);

export default autores;
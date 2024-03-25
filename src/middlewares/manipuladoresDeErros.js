import mongoose from "mongoose";
import ErroBase from "../errors/erroBase.js";
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js";
import ErroValidacao from "../errors/ErroValidacao.js";

// função que o middleware utiliza para tratar os erros interceptados pela aplicação
// serve para captar o erro e direcionar para a classe especifica
// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next){

  if(erro instanceof mongoose.Error.CastError){
    new RequisicaoIncorreta().enviarResposta(res);
  }else if(erro instanceof mongoose.Error.ValidationError){
    new ErroValidacao(erro).enviarResposta(res);
  }else if(erro instanceof ErroBase){
    erro.enviarResposta(res);
  } else{
    new ErroBase().enviarResposta(res);
  }

}

export default manipuladorDeErros;
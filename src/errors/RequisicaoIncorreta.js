import ErroBase from "./erroBase.js";

// trata os erros de requisição, recebendo mensagem de erro ou utilizando uma padrão
// passa a mensagem de erro e o status para a classe ErroBase poder enviar ao front
class RequisicaoIncorreta extends ErroBase{
  constructor(mensagem="Um ou mais dados fornecidos estão incorretos."){
    super(mensagem, 400);
  }
}

export default RequisicaoIncorreta;

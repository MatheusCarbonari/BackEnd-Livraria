import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

// trata os erros de validação, recebendo mensagem de erro, do objeto erro(obtido na middleware que capturou o erro)
// e juntando todas os erros de validação para depois
// passar a mensagem de erro e o status para a classe RequisicaoIncorreta poder enviar a classe ErroBase
class ErroValidacao extends RequisicaoIncorreta{
  constructor(erro){
    const mensagemErro = Object.values(erro.errors).map(erro => erro.message).join("; ");

    super(`Os seguintes erros foram encontrados: ${mensagemErro}`);
  }
}

export default ErroValidacao;

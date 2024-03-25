// classe base para tratar erros
// somente a partor dela que enviamos a mensagem para o front(de forma simples e legivel)
class ErroBase extends Error {
  constructor(mensagem = "Erro interno do servidor", status= 500){
    super();
    this.message = mensagem;
    this.status = status;
  }

  enviarResposta(res){
    res.status(this.status).send({
      mensagem: this.message,
      status: this.status
    });
  }

}

export default ErroBase;

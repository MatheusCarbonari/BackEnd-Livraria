import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladoresDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

// salva a conexão na const
const db = await conectaNaDataBase();

// conecta ao banco de dados
db.on("error", (erro) => {
  console.error("erro de conexão", erro);
});
db.once("open", () => {
  console.log("Conexão com o DB realizada com sucesso");
});

// salva na variavel todas as funções express
const app = express();
// middleware nativo express que converte os dados de uma requisição para o formato json
app.use(express.json());
// manda a variavel com todas as funções para serem usadas nas rotas
routes(app);

// capturar e manipular o erro 404
app.use(manipulador404);

// o 'use' garante que todas as requisições vão passar pelo middleware(intercepta as requisições)
// eslint-disable-next-line no-unused-vars
app.use(manipuladorDeErros);

export default app;
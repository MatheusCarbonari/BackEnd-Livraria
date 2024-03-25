### API Livraria
Esta é uma API de Livraria desenvolvida em Node.js utilizando o framework Express e o banco de dados MongoDB.

## Requisitos
# Node.js
# MongoDB
# Express

## Intalação

# 1 - Clone o Repositório:
git clone https://github.com/seu_usuario/seu_projeto.git

# 2 - Instale as dependências:
cd seu_projeto
npm install

# 3 - Configure as variáveis de ambiente criando um arquivo .env na raiz do projeto e preenchendo as seguintes variáveis:
PORT=3000
MONGODB_URI=sua_url_de_conexão_mongodb

# 4 - Inicie o servidor:
npm start

### Endpoints

## Livros
# GET /livros: Retorna todos os livros.
# GET /livros/:id: Retorna um livro específico pelo ID.
# GET /livros/busca: Retorna os resultados de buscas pelo nome, autor ou editora.
# POST /livros: Cria um novo livro.
# PUT /livros/:id: Atualiza um livro existente pelo ID.
# DELETE /livros/:id: Remove um livro pelo ID.

## Autores
# GET /autores: Retorna todos os autores.
# GET /autores/:id: Retorna um autor específico pelo ID.
# POST /autores: Cria um novo autor.
# PUT /autores/:id: Atualiza um autor existente pelo ID.
# DELETE /autores/:id: Remove um autor pelo ID.

### Contribuindo
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests com melhorias.

### Licença
Este projeto está licenciado sob a Licença MIT.
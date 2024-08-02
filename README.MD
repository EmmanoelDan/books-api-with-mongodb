# API Node.js com MongoDB

## Descrição

Este projeto é uma API construída com Node.js e MongoDB. A API permite criar, ler, atualizar e deletar (CRUD) registros em um banco de dados MongoDB.

## Requisitos

- Node.js
- MongoDB (local ou Atlas)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    cd nome-do-repositorio
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente:
    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
    ```
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/nome-do-banco
    ```

4. Inicie a aplicação:
    ```bash
    npm start
    ```

## Endpoints

### Criação de Book

- **URL:** `/book-api/v1/books`
- **Método:** `POST`
- **Corpo da Requisição:**
    ```json
    {
      "title": "Exemplo de titulo",
      "author": "Exemplo de author",
      "publicationYear": 2024,
      "genre": "Exemplo de Genero"
    }
    ```

### Leitura de Books

- **URL:** `/book-api/v1/books`
- **Método:** `GET`
- **Resposta de Sucesso:**
    ```json
    [
      {
        "_id": "60d0fe4f5311236168a109ca",
        "title": "Exemplo de titulo",
        "author": "Exemplo de author",
        "publicationYear": 2024,
        "genre": "Exemplo de Genero"
      }
    ]
    ```

### Atualização de Book

- **URL:** `/book-api/v1/books/:id`
- **Método:** `PUT`
- **Corpo da Requisição:**
    ```json
    {
      "title": "Exemplo de titulo",
      "author": "Exemplo de author",
      "publicationYear": 2024,
      "genre": "Exemplo de Genero"
    }
    ```

### Deleção de Book

- **URL:** `/book-api/v1/books/:id`
- **Método:** `DELETE`
- **Resposta de Sucesso:**
    ```json
    {
      "message": "User deleted successfully"
    }
    ```

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Dotenv

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
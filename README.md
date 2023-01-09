# Compass-API
API com express e MongoDB - Operações de CRUD

<a href="./LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>

<img src="https://s3.amazonaws.com/gupy5/production/companies/417/career/35254/images/2021-11-05_19-02_logo.png" alt="img" align="right" width="150px">

Compass API é uma aplicação backend construída durante a 4ª semana do programa de bolsas Compass UOL/Natura Node.js

A aplicação consiste em realizar operações de CRUD, onde os dados são coletados através do body.json em ferramentas como Postman ou Insomnia, e depois são armazenados em um banco de dados.

### Tecnologias Utilizadas

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=flat&logo=insomnia&logoColor=5849BE) 
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white)

# Starting

Para acessar o projeto, você deve clonar este repositório em seu computador e abri-lo em um editor de código-fonte de sua preferência. Neste exemplo, será usado o [Vscode](https://code.visualstudio.com/).

### Clone
    sudo git clone https://github.com/HebertZachi/Compass-API.git

# Pré-Requisitos

Após abrir o arquivo em seu editor de código-fonte, você precisará instalar as dependências do projeto que estão listadas em package.json através do terminal.

Para isso, você precisa ter [node.js](https://nodejs.org/en/) instalado em seu computador.

Por padrão, o node.js instala o NPM como gerenciador de pacotes para que seja possível instalar e importar pacotes dentro do seu código-fonte.

Neste caso, o gerenciador de pacotes que será utilizado é o NPM, caso esteja utilizando outro gerenciador de pacotes como o `yarn`, procure na documentação o comando equivalente a esta operação.

### Instalação
    sudo npm install

<br>

Agora que todas as dependências foram instaladas é possível iniciar o código através do node. Porém, por se tratar de um ambiente de desenvolvimento, recomenda-se a utilização do nodemon, que possibilita a atualização do código em tempo real, o que faz com que qualquer alteração tenha efeito imediato. Existe um script para iniciar o arquivo de código-fonte principal por meio do nodemon em `package.json`.

Para fazer isso, use o seguinte comando no seu terminal:

### Iniciar o Servidor 
    npm start
 
Agora que o ambiente está funcionando é possível enviar requisições ao servidor através do [Insomnia](https://insomnia.rest/download) ou [Postman](https://www.postman.com/)

<br>

# HTTP Request

Para enviar requisições através de rotas como GET, POST, PATCH ou DELETE, deve-se utilizar a seguinte url:

### Rota
    http://localhost:3000/api/v1/users/

No caso de solicitações POST e DELETE, o parâmetro ID deve ser passado no final.

### Parametro id 1
    http://localhost:3000/api/v1/users/1

Com isso você poderá usar todos os métodos HTTP para manipular o banco de dados.

<br>

# Modelo JSON

O Schema definido para criar um novo objeto no banco de dados `MongoDB` deve seguir o seguinte modelo:

    {
     "name": "Hebert",
     "age": 23,
     "work": "Desenvolvedor Full Stack"
    }

Se você estiver usando a versão mais antiga da API, precisará criar uma chave para o ID.

<h1 align="center">Construção de uma api em deno</h1>

O projeto "Construção de uma api em deno" é um exemplo de como construir uma API usando o runtime Deno e o banco de dados MongoDB. O projeto mostra como criar uma aplicação web rápida, segura e escalável que permite acessar e manipular os dados de uma maneira eficiente. O objetivo do projeto é fornecer um guia passo a passo para desenvolvedores interessados em aprender como criar APIs usando o Deno e o MongoDB.

 **Pré-requisito**

Para executar esse projeto, você precisará instalar os seguintes programas:

<blockquote>

- Deno - Uma nova plataforma para rodar aplicações javascript/typescript no servidor

- Docker - Um sistema de containers que facilita a criação e execução de aplicações

- Makefile - Um sistema de automatização de tarefas

- Shell script - Um script em shell para automatizar o processo de execução do projeto
  
</blockquote>



## Instalação

Para instalar e executar esse projeto, siga os seguintes passos:

1. Instale o Deno e o Docker em sua máquina, seguindo as instruções em seus respectivos sites.

2. Clone este repositório em sua máquina local usando o comando git clone https://github.com/KayoRonald/deno-mongodb.git

3. Entre na pasta do projeto com o comando `cd deno-mongodb`

4. Execute o comando `chmod +x ./run.sh` para dar permissão de execução ao script shell
   
5. Execute o comando `./run.sh` para iniciar a api

### Execução sem shell script

Se você não quiser usar o shell script para iniciar a api, você pode executá-la manualmente usando o seguinte comando na pasta `cd app`:

```bash
~/Deno-MongoDb$ cd app
~/Deno-MongoDb/app$ dir
config  infra  server.ts
```
<hr />

```bash
deno run --lock=lock.json --lock-write --allow-all server.ts
```

## Uso do banco de dados

Para subir o banco de dados mongodb, use o comando `make up` ou `docker-compose up -d` na raiz do projeto. Para parar o banco de dados, use o comando `make down` ou `docker-compose down`.

## Rotas
A api implementa as seguintes rotas na raiz `/`:

<blockquote>
  
- `GET`: Recupera todos os dados do banco de dados
- `POST`: Insere um novo dado no banco de dados
- `PUT`: Atualiza um dado existente no banco de dados
- `DELETE`: Remove um dado existente do banco de dados
  
</blockquote>

<div align="center">
  <img src="https://miro.medium.com/max/256/1*5VMoieIVSID_Vl7rpejr2Q.png" width="100" title="Deno"/>
  <img src="https://miro.medium.com/max/256/1*tYwniVWMqcytJ1AQ6zud7A.png" width="100" alt="TypeScript" title="TypeScript" />
  <img src="https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png" width="100" alt="MongoDb" title="MongoDb" />
</div>
# Landing Page API

Esta API tem o papel de capturar os dados dos visitantes e enviar um email para este usuário. Para gerenciar o envio de emails aos usuários, foi implementado uma fila (queue), fazendo o processamento deste job em background. Sendo desenvolvida com Typescript, Mongo e Redis, todo o ambiente se encontra em um container Docker no repositório

## Guia de instalação:

Copie o arquivo .env.exemple e renomeie para .env

Set as varáiveis de ambiente

- Defina o usuário e a senha para o MongoDB

```
MONGO_USER=
MONGO_PASSWORD=
```

- Configure de acordo com o seu servidor de email (para uso em localhost recomendo o _mailtrap.io_)

```
MAIL_HOST=
MAIL_PORT=
MAIL_REQUIRE_TLS=
MAIL_USER=
MAIL_PASSWORD=
```

- Defina as informações de quem está enviando o email

```
MAIL_FROM_NAME=
MAIL_FROM_EMAIL=
```

Execute os comandos

- Instale as dependências e build o projeto

```
yarn install && yarn build
```

- Subir o container

```
docker-compose up
```


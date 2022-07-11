# Desafio Nginx com Node - Full Cycle

Esse desafio segue a seguinte premissa:

> A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.
>
> O retorno da aplicação node.js para o nginx deverá ser:
> 
> ```
> <h1>Full Cycle Rocks!</h1>
> ```
> 
> - Lista de nomes cadastrada no banco de dados.
> 
> Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.


## Solução

Temos a seguinte estrutura do projeto:

```
.
├── docker-compose.yaml
├── Dockerfile
├── nginx
│   ├── conf
│   └── Dockerfile
├── package.json
├── package-lock.json
├── schema.sql
└── src
    ├── index.js
    └── service.js
```

- **docker-compose.yaml**: Arquivo que configura os serviços do projeto para serem executados no ambiente de desenvolvimento
- **Dockerfile**: Arquivo docker do backend node
- **nginx**: Pasta com o seu Dockerfile e arquivos de configuração do Nginx
- **package.json** e **package-lock.json**: Arquivos de dependência do projeto
- **schema.sql**: Script com as queries DDL das tabelas do banco. Ele é utilizado no docker-compose como entrypoint, conforme orientado na [documentação da imagem](https://hub.docker.com/_/mysql/)
- **src**: Pasta aonde centraliza o código-fonte do sistema
    - **index.js**: Entrypoint e endpoints da aplicação  
    - **service.js**: Módulo que centraliza a lógica da aplicação

### Execução


```bash
docker-compose up -d
```

Com esse comando, é feito os seguintes passos:

1. Gera a imagem das imagens do Nginx e da Aplicação
2. Inicializa o contâiner do banco de dados
3. Executa o script `schema.sql`, criando a tabela `people`
4. Inicializa o contâiner da aplicação
5. Inicializa o contâiner do proxy reverso Nginx

O docker-compose está preparado para levantar todos os componentes do sistema, de forma que cada um aguarda sua total inicialização por meio do [dockerize](https://github.com/jwilder/dockerize).
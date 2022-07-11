# Desafio Docker - Full Cycle

Esse repositório centraliza os desafios do módulo Docker do curso Full Cycle.

## Desafio 1: Golang

O objetivo é criar uma imagem menor que 2MB e que ao criar um container com ela, será escrito na saída padrão a frase "Code.education Rocks!".

Além disso, essa imagem precisa ser enviado ao dockerhub para que possa ser acessado a imagem da seguinte forma:

```bash
docker run gilsondev/codeeducation
```

A solução para desse desafio você encontra [aqui](./golang)
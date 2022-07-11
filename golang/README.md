# Desafio 1

O objetivo é criar uma imagem menor que 2MB e que ao criar um container com ela, será escrito na saída padrão a frase "Code.education Rocks!".

Temos a seguinte estrutura:

```
golang
├── Dockerfile
└── hello.go
```

- **Dockefile**: Arquivo em que tem todos os procedimentos para fazer build do script e gerar a imagem de produção
- **hello.go**: Código-fonte que exibe na saída padrão a mensagem desejada

Para gerar a imagem:

```bash
cd golang
docker build -t gilsondev/codeeducation .
```
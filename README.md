# Desafio 2 Docker - Full Cycle

## 🚀 Challenge
Neste desafio, você irá colocar em prática o que aprendemos em relação à utilização do Nginx como um proxy reverso. A ideia principal é que, quando um usuário acessar o Nginx, ele faça uma chamada para nossa aplicação Node.js. Essa aplicação, por sua vez, adicionará um registro em nosso banco de dados MySQL, cadastrando um nome na tabela "people".

O retorno da aplicação Node.js para o Nginx deverá ser:

```html
<h1>Full Cycle Rocks!</h1>
<ul>
  <!-- Lista de nomes cadastrados no banco de dados -->
</ul>
```

A linguagem de programação para este desafio é Node.js, utilizando JavaScript.

---

#### 🧭 Run challenge
```bash
$ git clone https://github.com/brunosllz/node-challenge-full-cycle.git
$ cd node-challenge-full-cycle
$ docker compose up -d
```

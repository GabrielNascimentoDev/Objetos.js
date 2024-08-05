const estudantes = require("./estudantes.json");

function buscaInformacao(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscaInformacao(estudantes, "nome", "Oralle")

console.log(estudanteEncontrado);

const emailEstudante = buscaInformacao(estudantes, "email", "olippini0@deviantart.com")

console.log(emailEstudante);

const telefoneEstudante = buscaInformacao(estudantes, "telefone", "7919437785")

console.log(telefoneEstudante);


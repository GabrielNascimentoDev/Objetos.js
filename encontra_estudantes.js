const estudantes = require("./estudantes.json")

function buscaInformacao(lista, chave, valor){
    return lista.find((estudante) => estudante[chave] === valor)
    if(!buscaInformacao){
        console.log("estudante nao encontrado");
    }
}

const estudanteEncontrado = buscaInformacao(estudantes, "nome", "Gabriel");
console.log(estudanteEncontrado);
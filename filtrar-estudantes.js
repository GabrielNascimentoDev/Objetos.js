const estudantes = require("./estudantes.json")

function filtraPorPropiedade(lista, propriedade){
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade)
    })
}

const listaEnderecoIncompletos = filtraPorPropiedade(estudantes, "cep")

console.log(listaEnderecoIncompletos);
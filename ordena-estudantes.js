const estudantes = require("./estudante.json");

function ordenaEstudantes(lista, propriedade){
    return lista.sort((a, b)=> {
        if (a[propriedade] < b[propriedade]) -1;
        if (a[propriedade] > b[propriedade])  1;
        return 0;
    })
}

const listaOrdenada = ordenaEstudantes(estudantes, "nome");

console.log(listaOrdenada);
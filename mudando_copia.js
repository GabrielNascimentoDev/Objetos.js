
function copiarObjetoJson(objeto) {
    return JSON.parse(JSON.stringify(objeto));
}

const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
};

const pessoaModificada = copiarObjetoJson(pessoaOriginal);

pessoaModificada.idade = 31;

console.log("Objeto Original (Pessoa):");
console.log(pessoaOriginal);

console.log("Objeto Modificado (Pessoa):");
console.log(pessoaModificada)
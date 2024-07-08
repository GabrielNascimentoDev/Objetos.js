const estudante = require("./estudante.json");

//CONVERTENDO EM STRING
const stringEstudante = JSON.stringify(estudante);

//CONVERTENDO EM OBJETO NOVAMENTE
const objEstudante = JSON.parse(stringEstudante)

console.log(objEstudante);
console.log(typeof objEstudante);

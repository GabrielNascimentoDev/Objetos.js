const animais = require("./animais.json");

const objAnimais = JSON.parse(animais);

const novoAnimal = {
    "id": 819,
    "nome": "passaro",
    "tipo": "ovipero",
    "habitat": "Planeta"
};

objAnimais.push(novoAnimal);

//console.log(objAnimais);
const animalParaModificar = objetoAnimais.animais.find(animal => animal.id === 2);
if (animalParaModificar) {
    animalParaModificar.habitat = "Oceano Antártico";
}

// Remove um animal do array de animais
const indiceAnimalRemover = objetoAnimais.animais.findIndex(animal => animal.id === 1);
if (indiceAnimalRemover !== -1) {
    objetoAnimais.animais.splice(indiceAnimalRemover, 1);
}

const animaisEmString = JSON.stringify(objAnimais);

console.log(animaisEmString);
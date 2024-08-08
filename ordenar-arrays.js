const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

function ordenarAnimais(comparacao){
    return animais.sort((a, b) =>{
        if (a["idade"] < b["idade"]) -1;
        if (a["idade"] > b["idade"])  1;
        return 0
    })
}

const animaisOrdenados = ordenarAnimais("idade")

console.log(animaisOrdenados);
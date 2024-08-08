const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]

function encontraObjetosPorId(id){
    return departamentos.find(funcionario => funcionario.id === id);
}

const encontraFuncionarios = encontraObjetosPorId(201)

console.log("funcionario encontrado (ID 201):");
console.log(encontraFuncionarios);

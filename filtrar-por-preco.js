const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]

function filtrarPorPreco(maxPreco) {
    const produtosFiltrados =  listaProdutos.filter(produto => produto.preco <= maxPreco);
    return produtosFiltrados.sort((a, b) => a.preco - b.preco);
}

const produtosAte40 = filtrarPorPreco(40.00)
console.log("Produtos com preço até 50.00 (ordenados por preço crescente):");
console.log(produtosAte40)
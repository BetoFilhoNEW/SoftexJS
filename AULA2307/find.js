// find() permite que vc encontre o primeiro elemento em um array que satisfaz uma condição.

const produtos = [
    { id: 1, nome: "Camisa" },
    { id: 2, nome: "Calça" },
    { id: 1, nome: "Sandálias" },

];

function findProductByID(id) {
    const produtoEncontrado = produtos.find((produto) => produto.id === id)
    if (!produtoEncontrado) {
        return "Produto não encontrado"
    }
    return produtoEncontrado
    
    
}

console.log(findProductByID(6))
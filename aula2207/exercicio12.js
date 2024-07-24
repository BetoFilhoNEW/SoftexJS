
function agruparPorFaixaEtaria(pessoas) {
    const faixasEtarias = {
        criança: [],
        adolescente: [],
        adulto: [],
        idoso: []
    };

    pessoas.forEach(pessoa => {
        if (pessoa.idade <= 12) {
            faixasEtarias.criança.push(pessoa.nome);
        } else if (pessoa.idade <= 17) {
            faixasEtarias.adolescente.push(pessoa.nome);
        } else if (pessoa.idade <= 64) {
            faixasEtarias.adulto.push(pessoa.nome);
        } else {
            faixasEtarias.idoso.push(pessoa.nome);
        }
    });

    return faixasEtarias;
}

const pessoas = [
    { nome: 'Ana', idade: 10 },
    { nome: 'João', idade: 15 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Carlos', idade: 70 },
    { nome: 'Beatriz', idade: 17 },
    { nome: 'Pedro', idade: 50 },
    { nome: 'Júlia', idade: 7 },
    { nome: 'Fernanda', idade: 65 }
];

console.log(agruparPorFaixaEtaria(pessoas));
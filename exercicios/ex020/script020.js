 let personagem = {
    nome: 'Elza',
    telefone: 555.555,
    estado: 'Bahia',

    corDoOlhos: ['preto', 'castanhos'],

    caracteristicas: {
        altura: 1.70,
        peso: 60.52,
        idade: 46,
        
    }
}

// 1. exemplo
personagem.nome = 'Luci';
console.log(personagem.nome);

// 2. exemplo
personagem.caracteristicas.idade += 10;
console.log(` Idade: ${personagem.caracteristicas.idade }` );

// 3. Exemplo alterando o array
personagem.corDoOlhos.push('verde');
console.log(personagem.corDoOlhos);

//-----------------------------------------------------

let clientes = {
    nome: 'Robson',
    idade: 22,

    carros: [
        { modelo: 'Fiat', cor: 'Vermelho' },
        { modelo: 'Renault', cor: 'verde' }
    ]
}


console.log(clientes.carros[0]. modelo);


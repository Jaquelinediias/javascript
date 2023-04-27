/*
let pessoa = {
    nome: 'Jaqueline',
    sobrenome: 'Dias',
    idade: 27,
    dadosComplementares: function() {
        return `Aluna: ${this.nome} ${this.sobrenome}`;
    }
}
*/

// FUNÇÃO ANONIMA, NÃO TEM PAI.E NÃO VAI TER ACESSO AO THIS
let pessoa = {
    nome: 'Jaqueline',
    sobrenome: 'Dias',
    idade: 27,
    dadosComplementares: () => {
        return `Aluna: ${this.nome} ${this.sobrenome}`;
    }
}


console.log(pessoa.dadosComplementares());

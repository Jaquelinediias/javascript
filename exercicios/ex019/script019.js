let nome = 'Bento';
let nomes = ['Joaquim',' Pedro','Jõao'];

// CRIANDO UM OBJETO {}
let dadosPerssoais = {
    nome: 'Bento',
    estado: 'Bahia',
    idade: 27,

    escalasemanal: ['Terça', 'Quinta'],

    dadosProfissionais: {
      profissao: 'Ator',
      empresa: 'Mercado Livre',
      endereço: 'Lauro de Freitas',
      cargo: 'Desenvolverdor Pleno',
    }
}

// FORMAS DE EXIBIÇÃO DO OBJETO//
console.log(dadosPerssoais.nome);
//--------------------------------------
console.log(`${dadosPerssoais.nome} tem ${dadosPerssoais.
idade} anos.`);
//-----------------------------------------

console.log(` E Trabalha no ${dadosPerssoais.dadosProfissionais.empresa}`);
//-------------------------------------------

console.log(dadosPerssoais.escalasemanal[1]);
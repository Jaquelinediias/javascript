// Criando Uma Função://
/*
function gravidade(){
    console.log('A gravidade do planeta é:');
    console.log(9.8);
}
// Como Usa uma Função//
gravidade();
*/

// PASSANDO PARÊMENTROS EM FUNÇÕES.//
/*
function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`); // template string
}
nomeCompleto("Jaqueline", "Conceição Dias");
nomeCompleto("Robson", "Silva")
*/

//------------RETORNO DA FUNÇÃO----------------
function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`;
}
let completo = nomeCompleto("Jaqueline", "Dias");
console.log("completo: " + completo);



//--------FUNÇÃO COM RETORNO CONDICIONAL----\\

function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 65;
let verificacao = maiorDeIdade(idade);

if (verificacao) {
    console.log('É MAIOR de idade');
} else {
    console.log('É MENOR de idade');
}

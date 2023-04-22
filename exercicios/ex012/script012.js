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
//------------------------------------------------
//------------------------------------------------

//EXERCICIO DE FUNÇÕES.

/*calcule a porcentagem entre 2 números.
Exemploo: 25% de 40 é 10
Fórmula da porcentagem: (y / x) * 100
Uso da Função:
*/

function calcPct(n1, n2) {
    let pct = (n2 / n1) * 100;
    return pct;
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);

//-----------------------------------------------------
//-----------------------------------------------------
     //EXERCÍCIO DE FUNÇÕES 02.
/*
CALCULE O PRECO DO IMÓVEL
- M2 = 3.000
- SE TIVER 1 QUARTO, O M2 É 1X
- SE TIVER 2 QUARTOS, O M2 É 1.2X
-SE TIVER 3 QUARTOS, O M2 É 1.5X
USO DA FUNÇÃO:
*/

function calcularImovel(metragem, quartos){
    let m2 = 3000;
    let preco = 0;

    switch (quartos) {
        case 1:
        default:
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * (m2 * 1.2);
            break;
        case 3:
            preco = metragem * (m2 * 1.5);
            break; 
    }
    return preco;
}

let metragem = 123;
let quartos = 5;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);

//-----------------------------------------
    /*Exercicio 03*/
//-----------------------------------------
/*
CRIE UMA FUNÇÃO QUE VALIDE USUÁRIO E SENHA.
USUÁRIO CORRETO: Playbozinho
SENHA CORRETA: 123
*/

function validar ( usuario, senha ){
   if(usuario === 'Playboizinho' && senha === '123'){
       return true;
   } else {
     return false;
   }
}
let usuario = "Thor Deus do Trovão";
let senha = '123';
let validacao = validar(usuario, senha);
if(validacao) {
    console.log('Acesso permitido.')
} else {
    console.log('Acessa NEGADO!');
}


 
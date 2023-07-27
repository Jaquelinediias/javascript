/* Spread
let numeros = [1,2,3,4];

let outros =[...numeros,5,6,7,8]
console.log(outros)
*/

/*
let info = {
    nome: 'Marcos',
    sobrenome: "Souza",
    idade: 21,
}

let novaInfo = {
   ...info,
   cidade: 'Salvador',
   Estado: 'Bahia',
   Bairro: 'Cajazeiras 8'
}
console.log(novaInfo);
*/
/*
function adicionaInfo(info){
   let novasInfo = {
      ...info,
      status: 0,
      token:'dijhtundiia01',
      data_cadastro: '01/08/96'

   }

   return novasInfo;
}

console.log(adicionaInfo({nome:'Luana', sobrenome: 'Vianna'}))
*/

    //OPERADOR REST

/*function adicionar(...numeros){
   console.log(numeros)
}
adicionar(89,5,24,58,59)


function adicionar(...nomes){
   console.log(nomes)
}
adicionar('Marcos','Souza','Elza')

*/

   //Exercício Juntando o Spread e o Rest


/* function adicionar(nomes, ...novosNomes) {
   let novoConjuto = [
      ...nomes,
      ...novosNomes
   ];
   return novoConjuto
}
let nomes = ['Luana','Lais'];
let outros = adicionar(nomes, "Antonio", "Maria","José");
console.log(outros);
*/


function documentos(escolar, ...pessoal){
   let documentoTotal =[
       ...escolar,
       ...pessoal
   ]
   return documentoTotal

}
let documentoNovos = ['Rg', 'Cpf', 'Rcn'];

let nomeDafunção = documentos(documentoNovos, 'foto 3x4', 'ddd');

console.log(nomeDafunção)



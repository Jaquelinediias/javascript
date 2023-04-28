 // 1. EXEMPLO

/*
for(let n = 0; n < 10; n++){
  console.log('Boa noite' + n)
}
*/

// 2. EXEMPLO
/*
let cores = ['vermelho', 'Rosa', 'Branco', 'Preto'];
cores.push('verde');
*/

/*
for( let n = 0; n < cores.length; n++ ) {
    console.log(cores[n])
}
*/

// 3. EXEMPLO/ mais simplificada.

/*
for(let i in cores) {
    console.log(cores[i]);
}
*/

// 4. EXEMPLO 

let cores = [
    {nome:'Roxo', qt: 10},
    {nome: 'Verde', qt: 5},
    {nome: 'Rosa', qt: 8},
]

for( let cor of cores){
    console.log(`${cor.nome} - ${cor.qt}`);
}


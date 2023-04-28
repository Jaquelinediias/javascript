/* While = enquanto, ou seja eu vou fazer uma condição enquanto for true, for satisfatoria ele vai executar determinado codigo, então quando aquela condição para de ser satisfatória ele para de executar aquele codigo.
*/

// 1. Um processo mais desmembrado.
/*
let numero = 0;
while(numero < 10){
    console.log(`O número da vez é ${numero}`);
    numero++;
}

// 2 . Um processo mais Junto.

for( let numero = 0; numero <= 10; numero++) {
     console.log(`O número da vez é ${numero}`);
}
*/

// Exercício de loops

// 1. Faça um Loop que mostre todas as frutas
let fruits = ['Maça', 'Banana', 'Uva'];
for( let x in fruits ) {
    console.log(fruits[x]);
}


let carros = ['BMW', 'Volvo','Audi'];
for( let a in carros) {
    console.log(carros[a]);
}

let bolos = ['Chocolate','Laranja','Morango'];
for(let sabores of bolos) {
    console.log(sabores)
}

// 2 . Conte de 1 até 100 através do um While.
let n = 1;
while(n <= 100) {
    console.log(n);
     n++;
}

let x = 1;
while(x <= 200){
    console.log(x);
    x++
}
//---------------------------------------------




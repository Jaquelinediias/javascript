/*function add(){   //função que adciona ao o variável
    let count =0;
    count++;
}
add();
add();
console.log(count);
*/
//-------------------------------------------------//
/*
let count =0;  //Variável de Scopo Globol

function add(){   
    count++;
}
add();
add();
console.log(count);
*/
//----------------------------------------------

 // Variável de Escopo local ou PRIVADA
 // Quando crio uma variável dentro de uma função.

 let count = 0;

function add() {
    let count = 0;
    count++;
}

add();
add();
console.log(count);


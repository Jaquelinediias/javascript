/*let  telefone = '108';
console.log(telefone.padEnd(9, 'x' + '*') ); // final da string

console.log(telefone.padStart(9, 'x' + '*') ); // começo da string
*/

let cartao = '251.548.846-88';
let lastDigitis = cartao.slice(-4);


let cartaoMaquiado = lastDigitis.padStart(17, '*' + 'x')

console.log('Este é o seu cartão? ' +cartaoMaquiado)


let placaDoCarro = 'j20d458'
let digitisCarro = placaDoCarro.slice(-2);

let placaEscondida = digitisCarro.padStart(7, '*' + 'x')

console.log('Essa placa ' + placaEscondida, 'pertence ao seu carro?')
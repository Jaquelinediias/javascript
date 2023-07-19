//let d = new Date(2023, 7, 1, 17, 50, 2);
let d = new Date('2020-01-01 15:48:10');

console.log(d.toString())

console.log(d.toUTCString())

// Manipulação de Datas.

let time = new Date()

let novoValor = time

//getSeconds() Pega os segundos

//getMinutes pega os minutos.

//getHours() Pega a hora.

//getDate() a data do dia.

//getDay() Pega o Dia da semana

//getMonth() Pegar o Mês.

//getFullYear() Pega o ano.

//console.log(novoValor);


   // MANIPULAÇÃO DE DATAS

let j = new Date()

j.setFullYear(2025) // Troca o Ano.

j.setDate(j.getDate() + 60) // manipula datas.

j.setHours(j.getHours() + 15) // manipula horas.

//setMonth(7) troca o mês.

//setFullYear(2022)  seta o ano, para qualquer que seja.

let valor = j;

console.log(valor)
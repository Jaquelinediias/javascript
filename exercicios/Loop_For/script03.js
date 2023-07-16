// for loop
// for loop array

// Lista do nuúmero 1 até 50

let texto = ''
// Cria-se uma variável auxiliar primeiro.
// Cria uma condição.
// incrementação

for (let i = 1; i <= 10; i++){
       texto = texto + i + '<br/>';
}
document.querySelector('.campo').innerHTML = texto;

     // FOR LOOP EM ARRAYS

let escola = ['Lápis', 'Mochila', 'Caderno', 'Apontador','Caneta']

let html = '<ul>'

for(let i in escola){
    html+= '<li>'+ escola[i] +'</li>'
}
html += '</ul>'

document.querySelector('.campo').innerHTML = html;
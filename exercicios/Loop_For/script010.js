/*var c = 1
while(c <= 200){
   console.log('tudo na paz?')
   c++
}
*/

/*
var c = 1;
let html = ''

for(var c = 1; c <= 2; c++){
   html+= "Numero:" +c+ "<br/>"
}
document.getElementById("ativo").innerHTML = html;
*/


// foor loop
// 1 cria variável auxiliares.
// 2 cria um condição seja satisfeita.
//3 incrementação
/*let texto = '';
for(let c = 0; c < 50; c++){
    texto = texto + c + "<br/>";
}
document.getElementById('ativo'). innerHTML = texto;
*/

// For Loo Array

let carros = ['Palio', 'Fiat', 'Fusca', 'bicicleta'];
let html = '<ol>';

for(let i in carros ){
    html+= '<li>'+ carros[i] + '</li>';
}
html +='</ol>'
document.getElementById('ativo').innerHTML = html;


for(let i = 0; i <= 10; i++){
   if(i % 2 !== 0){
    console.log(i)
   }
}


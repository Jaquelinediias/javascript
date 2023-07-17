
// enquanto essa condição for satisfátoria iremos roda esse codigo


let html = ''

 let c = 0;
while(c < 10) {
  html += "Número: "+c+"<br/>";
  c++
}


for( let c = 0; c < 10; c++) {
  html += "Número: " +c+ "<br/>";
}

document.querySelector('.exemplo').innerHTML = html;


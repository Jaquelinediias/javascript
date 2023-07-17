let html = ''
// enquanto essa condição for satisfátoria iremos roda esse codigo

 let c = 0;
while(c < 10) {
  html+= "Número:"  +c+ "<br/>";
  c++
}

document.querySelector('.demo').innerHTML = html;
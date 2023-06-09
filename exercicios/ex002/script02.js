 function blue(){
    limpar()
    document.getElementById("troca").classList.add('blue')
    document.querySelector("p").innerHTML = "Azul"
 }
 function red(){
    limpar()
    document.getElementById("troca").classList.add('red')
    document.querySelector("p").innerHTML = "vermelho"
 }
 function green(){
    limpar()
    document.getElementById("troca").classList.add('green')
    document.querySelector("p").innerHTML = "verde"
 }

 function limpar(){
    document.getElementById("troca").classList.remove('blue')
    document.getElementById("troca").classList.remove('red')
    document.getElementById("troca").classList.remove('green')
 }

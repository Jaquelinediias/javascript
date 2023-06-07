 const troca = document.querySelector(".troca");
 var listaDeCores = ['blue', 'red', 'green'];
 var index = 0;
 
function clicou(color) {
    troca.style.color = color; 
    document.querySelector("p").innerHTML = "Senhoras(o)"

    if(index +1 == listaDeCores.length){
        index = 0;
    }else{
        index = index + 1;
    }
    
    troca.textContent = listaDeCores[index]

}
let timer;

function iniciar(){
    timer = setInterval(showTime, 1000);
}
function finalizar(){
   clearInterval(timer)
}


function showTime(){
    let d = new Date();

    let h = d.getHours();
    let m = d.getMinutes();
    let s= d.getSeconds();

    // Junta todas as funções em um texto.

    let txt = h+':'+m+':'+s;
    document.querySelector('.time').innerHTML= txt;
}

// Cria uma função que ira roda a função em x segundos.

//let timer = setInterval(showTime, 1000);



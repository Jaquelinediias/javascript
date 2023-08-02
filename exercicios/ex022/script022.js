// PROMISSES
// Verificar se uma requisição deu certo ou não, e retorna uma funçao de resposta sobre o ocorrido.

 function pegarTemperatura(){
    return new Promise((resolve, reject) => {
        console.log("pegando temperatura...");


        setTimeout(function(){
            resolve('45 na sombra')
        }, 2000);
    })
 }


// USANDO A PROMISE.
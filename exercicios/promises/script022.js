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
console.log('ANTES')

let temp = pegarTemperatura();

console.log("DURANTE")

temp.then(function(resultado) {
    console.log("Temperatura: " +resultado);

});
temp.catch(function(error) {
    console.log("Deu erro!");
});

console.log("Depois");


//PROMISES ELAS RETIRNARÃO UMA RESPOSTA DE SUCESSO OU FALHA APÓS A EXECUÇÃO DE OPERAÇÕES ASSÍNCRONAS.
let lista = [10, 20, 30, 55]
let lista2 = [];

lista2 = lista.find(function(item){
    if(item === 16){
        return true
    } else{
        return false
    }
})

/*
lista2 = lista.findIndex(function(item){ 
     return(item === 55) ? true : false;
});
*/
let res = lista2;

console.log(res)

//O método find() retorna o valor do primeiro elemento que passa no teste. O método find executa a função callback uma vez para cada elemento presente no array até que encontre um onde callback retorne o valor true. Se o elemento é encontrado, find retorna imediatamente o valor deste elemento. Caso contrário, find retorna undefined .

//O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.
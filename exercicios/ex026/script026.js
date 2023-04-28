/*
let fruits = ['Banana','Uva','Laranja','pêra'];
let bigfruits = fruits.filter((item) => {
    if(item.length > 4 ){
        return true;
    } else{
        return false;
    }
} );
console.log(bigfruits);
*/

/*
// 2.  EXEMPLO
let fruits = ['Banana','Uva','Laranja','pêra'];

let bigfruits = fruits.filter((item) => {
   return item.length > 4;
} );
console.log(bigfruits);
*/

let fruits = ['Banana','Uva','Laranja','pêra'];
fruits.every((value) => {
    if (value.length > 3) {
        return true;
    } else {
        return false;
    }
})

// Simplificada//
let vendas = fruits.every((value) => {
    return value.length > 3;
});

if(vendas){
    console.log('Todos são maior que 3');
} else {
    console.log('Não são todos maior que 3');
}


let objetos = ["celular",'Radio','Bola'];
if(objetos.includes('Tv')) {
    console.log('Tem uma Tv sim!');
} else{
 console.log('Não tem uma Tv... ');
}







// Filter: filter() chama a função callback fornecida, uma vez para cada elemento do array, e constrói um novo array com todos os valores para os quais o callback retornou o valor true ou um valor que seja convertido para.k


// Every : Só retorna True quando todas as condições são satisfeita//

// Some: Quando uma condição só é satisfeita.

// includes:  determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false .

let info = [ 'Marcos Perreira ', 'Santos', '@marcos'];

let[nomeCompleto, , b] = info;

console.log(nomeCompleto, b)

   

    // Criando e descontruindo um Array

 let[ idade, id='dj8282' ] = [28, 'dj5252']

console.log(idade, id)

// Descontruindo Array dentro de uma função.

/*function criar() {
    let a = [1, 2, 3];
    return a;
}
let numeros = criar();

let [a,d,c] = numeros;

console.log(a,d,c);
*/

// Exemplo 2

function criar() {
    let a = [1, 2, 3];
    return a;
}

let [a,d,c] = criar();

console.log(a,d,c);


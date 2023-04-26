 let ingrendientes = [
    'Leite',
    'Farinha',
    'Ovo',
    'Manteiga',
    'Chocolate'
 ];
 /*
  função pop vai remove o ultimo item da minhas lista no array */
 ingrendientes.pop();

/* Função para remove o primeiro item da lista array*/
 ingrendientes.shift();

/* Para adiciona mais um itém no array*/
 ingrendientes.push('Canela');

 console.log(ingrendientes);
console.log(`Total de ingredientes: ${ingrendientes.length}`);
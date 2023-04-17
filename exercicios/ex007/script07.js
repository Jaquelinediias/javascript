  /* Condicionais Independentes*/
/*
let idade = 85;

if(idade < 18){
    console.log('Você é uma criança.');
}

if(idade >= 18 && idade <= 60) {
    console.log("Você é um adulto");
}

if(idade >= 60){
    console.log('Você é um Idoso (a).');
}
*/
  
  // Exemplo de Condicionais Dependentes.
  
let idade = 95;

if(idade < 18){
    console.log('Você é uma criança.');
} else if (idade >= 18 && idade <= 60) {
    console.log("Você é um adulto");
} else if (idade >= 60) {
    console.log('Você é um Idoso (a).');
}


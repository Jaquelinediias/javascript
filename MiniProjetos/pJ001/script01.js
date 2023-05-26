let caracteres = new feiticeiro('Paçoca');
let monstro = new cavaleiro();

const cenario = new Cenario(
  caracteres,
  monstro,
  document.querySelector('#caracteres'),
  document.querySelector('#monstro')
);

cenario.start();
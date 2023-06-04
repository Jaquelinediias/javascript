let log = new Log(document.querySelector('.registro'));

let caracteres = new feiticeiro('Paçoca');
let monstro = new grandemonstro();

const cenario = new Cenario(
  caracteres,
  monstro,
  document.querySelector('#caracteres'),
  document.querySelector('#monstro'),
  log

);

cenario.start();
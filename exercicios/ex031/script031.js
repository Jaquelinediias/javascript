
/*function acesso(){
   const input = document.querySelector('input');

   if(input.hasAttribute('placeholder')){
    console.log("Tem Placeholder SIM.")
   } else{
    console.log("Não tem Placeholder")
   }
  

}
*/
//-----------------------------------------------------

function acesso(){
   const input = document.querySelector('input');
   const botao = document.querySelector('.tok')

   
   if(input.getAttribute('type') === 'text') {
      input.setAttribute('type', 'password');
      botao.innerText = "Mostrar Senha";
   } else {
      input.setAttribute('type', 'text');
      botao.innerText = "Ocultar Senha";
   }

}
/*GetAttibute: retorna o valor de um argumento específico do elemento. Se o atributo não existir, o valor retornado será null ou "" (string vazia).*/


/*hasAttribute:  vai retorna um boolen*/

//setAttribute(): Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico.



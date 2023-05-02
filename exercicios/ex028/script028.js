/*function clicou(){
   const teste = document.querySelector('#teste');
   console.log(teste.children[0].children);
}
*/
//Children: A propriedade children no JavaScript retorna uma coleção com todos os elementos filhos do elemento HTML pelo qual foi chamado.

function clicou(){
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');
    
    //ul.innerHTML = "<li>Jogos novos</li>" html interno.

 /* Adicionando valor a uma variável, adicionando um contéudo novo  
    ul.innerHTML = ul.innerHTML + "<li>Jogos Novos</li>"
*/

   ul.children[0].innerHTML = "<mark>Skate</mark>!"
      console.log(ul.innerHTML);

      console.log(ul.outerHTML);
 }


/*innerText: Quando usamos o innerText , diferentemente do innerHTML , irá retornar apenas o texto, ignorando todas as tags HTML de dentro do elemento, porém innerText “entende” o CSS do elemento, então retornará apenas textos visíveis.
*/

/*outerHTML: O que é outerHTML?
O atributo outerHTML da estrutura DOM(Document object model) obtem um fragmento serializado de código HTML descrevendo o elemento incluindo seus descendentes. É possível substituir o elemento em questão com nós obtidos através da análise de uma string.
*/


/*
 //innerHTML: Quando usar innerHTML?
Utilizado na manipulação do DOM, o innerHTML retorna todo o texto e o html que existem no elemento. Ele retorna todo o html existente, retornando também às tags, e não somente o texto.
*/
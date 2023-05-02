function clicou (){
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');


    let newLi =document.createElement("li");
    newLi.innerText = "Mochila";



   ul.prepend(newLi);


   
   ul.innerHTML += "<li>Novo Item</li>"

//--------------------------------------------------

   // ul.children[0].innerHTML += " (Segunda Feira)";


//--------------------------------------------------------
    //let newLi =document.createElement("li");
    //newLi.innerText = "Item adicionado";

    //ul.appendChild(newLi);
  /*appendChild(): é um dos métodos fundamentais da    programação para a web usando o DOM. O método appendChild() insere um novo nó na estrutura do DOM de um documento, e é a segunda parte do processo criar-e-adicionar tão importante na construção de páginas web programaticamente.*/  


//---------------------------------------------------------
   ul.children[0].append("(Feriado)");
   /* APPEND: append() O método append() da Interface FormData adiciona um novo valor dentro de uma chave existente dentro do objeto FormData ou adiciona a chave caso ainda não exista. O append só funciona pra texto. é quando eu adiciona um conteúdo ao conteudo que já tem dentro desse elemento*/
}


//innerHTML eu posso usar tanto para saber o que tem dentro, quanto para modificar/altera um valor.

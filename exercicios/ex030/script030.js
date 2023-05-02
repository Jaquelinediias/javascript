// ADCIONANDO COISAS AO REDOR DO ELEMENTO ou Antes ou Depois.
//AFter = Depois
// Before = Antes

/*
function acesso(){
    const add = document.querySelector('#add');
    const ul = add.querySelector('ul');
    
    const newButton = document.createElement('button');
    newButton.innerHTML = "Botão";
    
    ul.before(newButton); 
}
*/

// Para adiciona mais uma lista depois da lista.

function acesso(){
    const add = document.querySelector('#add');
    const ul = add.querySelector('ul');

    let newUl = document.createElement('ul');

    for(let i = 0; i< 5; i++) {

        let newLi = document.createElement('li');

        newLi.innerHTML = "Tabela de preço" + (i + 1);

        newUl.append(newLi);
    }
     
    ul.after(newUl);
   
}
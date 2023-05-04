// ELEMENTOS
const input = document.querySelector('input');
const lista = document.querySelector('ul');

// FUNÇÕES
function handleKeyUp(e){
    if(e.key === 'Enter'){
        // Adciona elemento Li na lista
       const newLi = document.createElement('li');
       newLi.innerHTML = input.value;
       lista.appendChild(newLi);
       // Limpar o Campo de texto
       input.value = '';
       
    }
}
// EVENTOS
input.addEventListener('keyup', handleKeyUp);




/*
const input = document.querySelector('input');
const lista = document.querySelector('ul');

function adcion(e) {
    if (e.key === 'Enter') {
        extrali = document.createElement('li');
        lista.appendChild(extrali);
        extrali.innerText = input.value;
        input.value = '';
    }
}

input.addEventListener('keypress', adcion);
*/
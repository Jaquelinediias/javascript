/*function acesso(){
    const button = document.querySelector('button');

    if(button.classList.contains('azul')){
        button.classList.remove('azul');
        button.classList.add('red');
    } else {
        button.classList.add('azul');
        button.classList.remove('red');
    }
}
*/

// OUTRA FUNÇÃO QUE SIMPLIFICA A FUNÇÃO ACIMA.


function acesso(){
    const button = document.querySelector('button');


    if (button.classList.contains('azul')) {
        button.classList.replace('azul', 'verde');
    } else {
        button.classList.replace('verde', 'azul');
    }
}

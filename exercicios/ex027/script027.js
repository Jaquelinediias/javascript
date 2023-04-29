
// 1. PRIMEIRA DEFINIÇÃO DE EVENTO DE CLIQUE
//<button class="acesso" onclick="click()">Clique aqui</button>
function click() {
    console.log("click no botão");
}

// 2. DEFINIÇÃO DO EVENTO DE CLIQUE ATRAVÉS DO PRÓPRIO JAVASCRIPT
/*let botao = document.querySelector('.acesso');
botao.addEventListener("click", click);
*/

//OPÇÃO.03
/*let botao = document.querySelector('.acesso');
botao.addEventListener("click", function(){
    click();
});
*/

//OPÇÃO.04
/*let botao = document.querySelector('.acesso');
botao.addEventListener("click", ()=> {
         click();
});
*/
// OPÇÃO.05
let botao = document.querySelector('.acesso').addEventListener("click", ()=> {
    click();
});


//addEventListener: É escutador, agente está criando um escutador de eventos. é a maneira de registrar uma espera de evento como especificada no W3C DOM. Seus benefícios são os seguintes: Permite mais de um manipulador por evento.
/* como a web funciona(Requisição e Resposta)?
Request = Requisção
--> Cabeçalhos / Header
--> Corpo / Body


Response = Respota 
devolver reposta.
*/

/* Como Funciona uma API*
Api = Comuicação de um software = celular, geladeira, etc.


JSON = Javascript Object Notation
*/

///Callback? função que criopara ser executada no  futuro

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        console.log(`Status:${response.status}`)
        return response.json();
    })
    .then((json) => {
        alert(`Clicou no primeiro post:${json[0].title}`)
    })
    .catch((error) => {
        alert("Algo está errado.")
    })
    .finally(() =>{
        alert("Tudo OK, acesse a página")

    })
   
}

document.querySelector('#botao').addEventListener('click', clicou)


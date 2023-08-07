/*function loadPost() {
    document.getElementById("post").innerHTML = 'Carregando...'
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(resultado){
       return resultado.json();
    })
    .then(function(json){
        document.getElementById("post").innerHTML = json.length+' posts';

    })
    .catch(function(erro){
        console.log("Está fora do ar!" + erro)
    })
}
*/


// MINI BLOG
//quando eu clica no botão ele vai aparece um texto

function loadPost() {
    document.getElementById("post").innerHTML = 'Carregando...'
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(resultado){

       return resultado.json();
    })
    .then(function(json){
        montarBlog(json)

    })
    .catch(function(erro){
        console.log("Está fora do ar!" + erro)
    })
}

function montarBlog(lista) {
    let html = '';

    for(let i=0; i<lista.length;i++){
        html += '<h3>'+lista[i].title+'</h3>'
        html += lista[i].body+'<br/>';
        html += '<hr/>';
    }
    document.getElementById("post").innerHTML = html;
}

//Ao fazermos uma requisição por meio de um fetch, devemos ter obrigatoriamente.
//Res: O link da API que iremos consumir


//Para exibirmos os resultados de uma requisição de API utilizando o fetch, devemos.
//RES: Transforma o resultado em  um JSON  por meio de then.
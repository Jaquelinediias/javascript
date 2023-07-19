let timer;

function rodar(){
    timer = setTimeout(function(){
        document.querySelector('.demo').innerHTML = 'Gooolll...'
    }, 2000)

}
function parar(){
    clearTimeout(timer)
    document.querySelector('.demo').innerHTML = 'Parou a função'
}

//O método clearTimeout() do escopo WindowOrWorkerGlobalScope cancela um timeout previamente estabelecido pela função setTimeout() (en-US).

//O método setTimeout permite executar um código após um tempo estipulado, que pode ser definido em milissegundos. O método executará o código apenas uma vez.
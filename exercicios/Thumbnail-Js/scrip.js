/*function mostrar() {
    let imagem = document.getElementById("imagem").files[0]

    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.width = 200;
    img.style.borderRadius= "100%";
    img.style.boxShadow='0 0 30px gray ' ;


    document.getElementById("area").appendChild(img);
}
*/

//THUMBNAILS COM FILEREADER

function mostrar() {
    let reader = new FileReader();
    let imagem = document.getElementById("imagem").files[0]

    reader.onloadend = function(){
        let img = document.createElement('img');
        img.src = this.result;

        img.width = 200;
        

        document.getElementById("area").appendChild(img);

    }

    reader.readAsDataURL(imagem);

}
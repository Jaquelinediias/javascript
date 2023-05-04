function soltou(e) {
    console.log('Aperta tecla' + e.code);
    console.log('SHIFT ?' + e.shiftKey);
    console.log('--');

}
const input = document.querySelector('input');
input.addEventListener('keyup', soltou);

/*KeyPress, KeyDown e KeyUp são eventos acionados pelo teclado. O KeyDown acontece primeiro (quando a tecla esta abaixando). O KeyPress acontece segundo (quando o texto for digitado). O KeyUp acontece depois da tecla digitada (quando a tecla estiver subindo e quando a entrada de texto está completo)
*/


 /*
 function square(x) {
    return x * x;
 }
 console.log(square(5))
 */

// função que vai somar a raiz quadrada de dois números diferentes//
 // exemplo 01
/*
function square(x) {
    return x * x;
}
 
 function addSquares(a, b) {
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}
console.log(addSquares(5, 2));
*/

 //    EXEMPLO 02 //
/*
 function addSquares(a, b) {
    function square(x) {
        return x * x;
    }

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}
console.log(addSquares(5, 2));
*/

function addSquares(a, b) {
    const square = (x) => x * x;

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}
console.log(addSquares(5, 2));
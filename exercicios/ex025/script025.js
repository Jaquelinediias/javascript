// 1. Demostração
// Para ordena em ordem alfabetica.
/*
let fruits = ['Figo', 'Damasco','Banana','Acerola'];
fruits.sort();
fruits.reverse(); // Vai inveter toda a ordem do array.

console.log(fruits);
*/

// 2. Exemplo

let cars = [
    {brand: 'Fiat', year: 2022 },
    {brand: 'Audi', year: 2019 },
    {brand:'BmW', year: 2023 },
    {brand:'Renault', year: 2018 }
]
/*
cars.sort(( t, h) => {
    if(t.year > h.year){
        return 1;
    } else if (t.year < h.year) {
        return -1;
    } else {
        return 0;
    }
});
*/
// Maneira simplificada
cars.sort((t,h) => {
    return t.year - h.year;
})

console.log(cars);
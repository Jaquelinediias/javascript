 // Sem utiliza programação funcional//
 /*let person = {
    name: 'Livia',
    lastName:'Silveira',
    age: 35
}
*/

//

/*function createCarros (marca, cor, ano) {
    return{
        marca,
        cor,
        ano,
        getfullCar(){
            return `${this.cor} ${this.ano}`

        }
    }
}
let marcasDeCarros = createCarros("Ford", "Vermelho","2022");
console.log(marcasDeCarros.getfullCar())
*/

/*let encontroFds = createEncontro("Lais","Cinema", 15);

function createEncontro(nome, local, horario){
    return{
        nome,
        local,
        horario,

        getFullDate(){
            return `Eu e a ${this.nome} iremos ao ${this.local} as ${this.horario}`
        }
    }
}
console.log(encontroFds.getFullDate());
 */


// CONSTRUTOR

let person1 = {
    name: "Brisa",
    lastName:"Dias",
    age: 45,
    getFullName(){
        return`${this.name} ${this.age}`
    },
    start() {
        console.log("Que comecem os jogos.")
    }
   
}


person1.start();
console.log(person1.getFullName())

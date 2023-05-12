 // Sem utiliza programação funcional//
 /*let person = {
    name: 'Livia',
    lastName:'Silveira',
    age: 35
}
*/

// Usando programação Funcional.
function createPerson(name, lastName, age) {
     return {
        name,
        lastName,
        age,
        getFullName() {
         
            return `${this.name} ${this.lastName}`;
        }

     }
    
}

let person1 = createPerson('Laura', 'Duarte', 52);
let person2 = createPerson('Duda','Silveira', 50)

console.log(person1.getFullName());
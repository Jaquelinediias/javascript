
 /*/ Uma factory é uma fabrica de cria coisas. 
 function createPerson(name, lastName, age){   //criar pessoa
     return{
        name,
        lastName,
        age,

        getfullName() {
            return `${this.name} ${this.lastName}`;
        }
     }
 }
let person1 = createPerson('Jaqueline', 'Lacerda', 35);
let person2 = createPerson('Eva','Conceição', 15);

console.log(person1.getfullName());
*/




// CONSTRUTOR

/*let person1 = {
    name: "Brisa",
    lastName:"silva",
    age: 45,
    getFullName(){
        return`${this.name} ${this.age}`
    },
    start() {
        console.log('deu start ')
        
    }
    
}
person1.start();
console.log(person1.getFullName())
*/

// FUNCIONAL HERANÇA:

const defaultUser = { //objeto padrão]
    name: '',
    email: '',
    level: 1,
    date: 08,
}
 
let user1 = {
    ...defaultUser,
    name: 'Rosi',
    email: 'jaquelinedias@.gmail.com'
}
console.log(user1);

let adm1 = {
    ...defaultUser,
    name: 'Adm chapadão',
    email: 'adm@.com.br',
   
}

console.log(adm1)


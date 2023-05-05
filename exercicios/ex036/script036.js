/*class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let u1 = new Person("Elza", 46);
let u2 = new Person("Robson", 21);
let u3 = new Person("Erick", 25);

console.log(u2.age)
*/


/*class Person {

    age = 0;

    constructor(name, age) {
        this.name = name;
    }
} 

let u1 = new Person("Rodrigo", 28)
let u2 = new Person ("Brisa", 35)
let u3 = new Person ("Luiza", 30)

u1.age = 28;
u2.age = 35;
u3.age = 30;

console.log(`u1 = ${u1.name} tem ${u1.age} anos`)
console.log(`u2 = ${u2.name} tem ${u2.age} anos`)
console.log(`u3 = ${u3.name} tem ${u3.age} anos`)
*/




/* class Person {
    constructor(name, profession ){
        this.name = name;
        this.profession = profession;
    }
 }

 let p1 = new Person("Bento", "Musico")
 let p2 = new Person ("Joaquim", "Professor")
 let p3 = new Person ("Laura", "Escritora")

 console.log(p3.name, p3.profession)
*/

class Person {

   profession = '';

    constructor(name){
        this.name = name;
    }
 }

 let p1 = new Person("Bento");
 let p2 = new Person ("Joaquim");
 let p3 = new Person ("Laura");
 
 p1.profession = 'Motorista'
 p2.profession = 'Piloto'
 p3.profession = 'Delegada'
 

console.log(`p1 = Nome: ${p1.name}, profissão: ${p1.profession} `)
console.log(`p2 = Nome: ${p2.name}, profissão: ${p2.profession} `)
console.log(`p3 = Nome: ${p3.name}, profissão: ${p3.profession} `)


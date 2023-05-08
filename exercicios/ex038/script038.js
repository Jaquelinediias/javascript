class Person {
    age = 0;
    constructor(name) {
        this.name = name;
    }

    helloHi() {
        console.log(`${this.name} é uma estudante e diz Oi`)
    }
}

class Student extends Person {
    constructor(name, id){
        super(name);
        this.id = id;
    }

}

let p1 = new Student("Laura", 5846);
p1.age = 18;

p1.helloHi();

/////////////////////////////////////////////////////////////////////////////////////////////////

class Person {
    age = 0;
 
    constructor(name) {
     this.name = name;
    }
    sayHi(){
     console.log(`${p1.name} Diz Oi`)
    }
 }
 
 class Student extends Person{
 
    constructor(name, id) {
     super(name);
     this.id = id;
    }
    sayHello(){
     console.log(`${p1.age} tem anos`)
    }
 }
 
 let p1 = new Student("Robson", 555);
 //Para seta a idade do estudante.
 p1.age = 22;
 
 p1.sayHello()
 p1.sayHi()
 /*
 console.log(`${p1.name} tem ${p1.age} anos. Número da Matricula é: #${p1.id}`)
 */
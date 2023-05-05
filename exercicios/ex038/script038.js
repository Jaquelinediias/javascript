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
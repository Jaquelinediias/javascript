 /*class Person {
    age = 0;
    steps = 0;

    constructor(name){
       this.name = name;
    }
// CRIANDO A FUNÇÃO DA UM PASSO.
    takeAStep(){
        this.steps++;
    }
    steAge(newAge) {
        if(typeof newAge === 'number'){
            this.age = newAge;
        }
       
    }
 }

 let p1 = new Person ("Gabriel");
 let p2 = new Person ("Tais");
 let p3 = new Person("Laura");

 p1.steAge(20);
 console.log(`${p1.name} tem ${p1.age} anos`);
 */


/// Exemplo com a função de um botão.
/* 
 class Person {
    steps = 0;

 constructor(name) {
    this.nome = name;    
 }
 makeStep() {
    this.steps++;
 }

}

let p1 = new Person("BRUNO");
let p2 = new Person ("Tais");
let p3 = new Person("Laura");

// p1.makeStep();

function btn() {

 p3.makeStep();

 console.log(`O nome é ${p3.nome} e voce deu: ${p3.steps} 
 passos`);

let btn = document.querySelector('button');

btn.style.backgroundColor = '#F77C9F';

btn.style.width = '100px';

btn.style.height = '50px';

btn.style.borderRadius = '20px'
btn.style.color = '#ffff'
}
document.querySelector('button').addEventListener('click',()=> {
    btn();
   });
   
*/

 // Classes: Getter e Setter


 class Person {
    _age = 0;
    steps = 0;

    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    takeAStep() {
        this.steps++;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get age() {
        return this._age;
    }
    set age(x) {
        if(typeof x === 'number'){
            this._age = x;
        }
      
    }
  
 }
let p1 = new Person("Bruna", "Dias");

p1.age = 31;
console.log(`${p1.fullName} tem ${p1.age} anos`);




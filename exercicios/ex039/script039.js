 class Person {

   static hands = 2;
   age = 0;
   
   constructor (name) {
      this.name = name;
   }
   sayHello(){
      console.log(`Olá, eu sou ${this.name} e eu tenho ${Person.hands} mãos`)
   }
 }
 let p2 = new Person ("Robson");
 let p1 = new Person("Erick");
 p1.sayHello();
 p2.sayHello();


 
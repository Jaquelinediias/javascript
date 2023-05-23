const defaultCharacter = {
    name: '',
    life: 1,
    maxlife: 1,
    attack: 0,
    defense:0
}


/* 
 PESSOANAGENS PADRÕES
conts defaultCharacter = {
    life: 0,
    name:',
    maxlife:'',
    attack: 0,

}

conts createKnight = (name) => {
    return {
        ...defaultCharacter,
        name:"", 
        life:'',
        maxlife:"",
        attack: 8,

    }
}
const createSorcerer = (name) =>{
    return{
        ...defaultCharacter,
        name:'',
        file:120,
        maxlife:100,
        attack:10,
        defensa:9,
    }
}
const createLittleMonster = () => {
    return {
        ...defaultCharacter,
        nome: 'BigbigMonster',
        life:100,
        maxlife:100,
        attck:8,
        defense:5,
    }
}

*/
const createKnight = (name) => {
    return {
       ...defaultCharacter,
       name: 'Affrodite',
       life: 100,
       maxlife: 100,
       attack: 20,
       defense: 8,
    }
}

const createSorcerer = (name) => {
    return {
       ...defaultCharacter,
       name: 'Meduza',
       life: 100,
       maxlife: 100,
       attack: 10,
       defense: 5
    }
}

function createLittleMonster() {
    return {
        ...defaultCharacter,
        name: 'Larica Monster',
        life:40,
        maxLife:40,
        attack: 4,
        defense:10
    }
}

function createBigMonster(){
    return{
        ...defaultCharacter,
        nome:'Thc',
        life:110,
        maxLife: 110,
        attack: 15,
        defense:10,
    }
}
//Criando o cenario de luta
const stage = {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El:null,

    start(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;

        this.fighter1El.querySelector('.attaButton').addEvenListener('click', () => this.doAttack(this.fighter1, this.fighter2));

        this.fighter2El.querySelector('.attaButton').addEvenListener('click', () => this.doAttack(this.fighter2, this.fighter1));

        this.updat();
    },
    update() {
        // Atualiza as infromações

        //fighter1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`

        //fighter2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`
    },
    

    doAttack(attacking, attacked) {

    }


}
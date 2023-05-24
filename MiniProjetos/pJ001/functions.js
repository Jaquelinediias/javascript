const defaultCharater = {
   name:'',
   life: 1,
   maxlife:1,
   attack:0,
   defense: 0,

}
const createKnight = (name) => {
    return{
        ...defaultCharater,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8,
    }
}

const createSorcerer =(name) => {
    return {
        ...defaultCharater,
        name,
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3,

    }
}

const createLitterMonster = () => {
    return {
        ...defaultCharater,
        name:'Pequeno monstro',
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 3,

    }
}
const createBigMonster = () => {
    return{
        ...defaultCharater,
        name:'Grande monstro',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6,

    }
}

const stage = {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,
    start(fighter1, fighter2, fighter1El, fighter2El,) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;


        this.fighter1El.querySelector('.fight').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        this.fighter2El.querySelector('.fight').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))



        this.update();
    },
    update(){
       this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
       this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
    },

    doAttack(attacking, attacked) {

    }


}




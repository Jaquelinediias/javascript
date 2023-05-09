//Knight ou Sorcerer - Guerreira 
// LittleMonter

class Character {
    
    _life = 1;
    maxlife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life(){
        return this._life;
    }
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxlife = this.life;
    }
}

class witch extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 15;
        this.defense = 3;
        this.maxlife = this.life;
    }
}

class LittleMonter extends Character {
    constructor() {
        super ('Little Monster');
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxlife = this.life;
    }
}

class BigMonster extends Character {
    constructor() {
        super('Big Monster');
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxlife = this.life;
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El ){
       this.fighter1 = fighter1;
       this.fighter2 = fighter2;
       this.fighter1El = fighter1El;
       this.fighter2El = fighter2El;
    }
    
    start() {
        // Todo: Evento do Botão de atacar.
        this.update();
        this.fighter1El.querySelector('.attaButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));

        this.fighter2El.querySelector('.attaButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
        
    }

    update() {
        // fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;

        let f1Pct = (this.fighter1.life / this.fighter1.maxlife) * 100;
        this.fighter1El.querySelector('.lifebar .bar').style.width = `${f1Pct}%`;


        // fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`;


        let f2Pct = (this.fighter2.life / this.fighter2.maxlife) * 100;
        this.fighter2El.querySelector('.lifebar .bar').style.width = `${f2Pct}%`;

    }

    doAttack(attacking, attacked){
        console.log(`${attacking.name} está atacando ${attacked.name}`)
        
        this.update();
    }

}


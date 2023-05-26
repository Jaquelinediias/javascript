
class Personagem {
     
    _vida = 1;
    vidaMaxima = 1;
    ataque = 0;
    defesa = 0;

    constructor(nome) {
       this.name = nome;
    }

    get vida() {
        return this._vida;
    }
    set vida(novaVida) {
        this._vida = novaVida < 0 ? 0 : novaVida;
    }
}

class cavaleiro extends Personagem {
    constructor(nome) {
        super('Cuscuz');
        this.vida = 100;
        this.ataque = 10;
        this.defesa = 8;
        this.vidaMaxima = this.vida;
    }
}

class feiticeiro extends Personagem{
    constructor(nome) {
        super(nome)
        this.vida = 80;
        this.ataque = 15;
        this.defesa = 3;
        this.vidaMaxima = this.vida;
    }
}

class monstrinho extends Personagem {
    constructor(nome) {
        super(nome)
        this.vida = 40;
        this.ataque = 5;
        this.defesa = 4;
        this.vidaMaxima = this.vida;
    }
}
class grandemonstro extends Personagem {
    constructor(nome) {
        super(nome)
        this.vida = 110;
        this.ataque = 15;
        this.defesa = 4;
        this.vidaMaxima = this.vida;
    }
}


class Cenario {
    constructor(lutador1, lutador2, lutador1El, lutador2El){
         this.lutador1 = lutador1;
         this.lutador2 = lutador2;
         this.lutador1El = lutador1El;
         this.lutador2El = lutador2El;
    }

    start() {
        this.atualizar();

        this.lutador1El.querySelector('.botao'),('click', () => this.atacar(this.lutador1, this.lutador2));

        this.lutador1El.querySelector('.botao'),('click', () => this.atacar(this.lutador2, this.lutador1))
    }

    atualizar() {
       // lutador 1
       this.lutador1El.querySelector('.nome').innerHTML = `${this.lutador1.name} - ${this.lutador1.vida} Hp`

       let porcetagem = (this.lutador1.vida / this.lutador1.vidaMaxima) * 100;
       this.lutador1El.querySelector('.barra').style.width = `${porcetagem}%`;


       //lutador 2
       this.lutador2El.querySelector('.nome').innerHTML = `${this.lutador2.name} - ${this.lutador2.vida} Hp`


       let porcetagem2 = (this.lutador2.vida / this.lutador2.vidaMaxima) * 100;
       this.lutador2El.querySelector('.barra').style.width = `${porcetagem}%`;
    }

    atacar(ataque, atacante) {
        console.log(`${ataque.name} está atacando ${atacante.nome}`);

    }
}


























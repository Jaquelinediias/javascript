
class Personagem {
     
    _vida = 1;
    vidaMaxima = 1;
    ataque = 0;
    defesa = 0;

    constructor(name) {
       this.name = name;
    }

    get vida() {
        return this._vida;
    }
    set vida(novaVida) {
        this._vida = novaVida < 0 ? 0 : novaVida;
    }
}

class cavaleiro extends Personagem {
    constructor(name) {
        super('Cuscuz');
        this.vida = 100;
        this.ataque = 10;
        this.defesa = 8;
        this.vidaMaxima = this.vida;
    }
}

class feiticeiro extends Personagem{
    constructor(name) {
        super("Zeus")
        this.vida = 80;
        this.ataque = 15;
        this.defesa = 3;
        this.vidaMaxima = this.vida;
    }
}

class monstrinho extends Personagem {
    constructor(name) {
        super("Pequenino")
        this.vida = 40;
        this.ataque = 5;
        this.defesa = 4;
        this.vidaMaxima = this.vida;
    }
}
class grandemonstro extends Personagem {
    constructor(name) {
        super("GrandeMonstro")
        this.vida = 110;
        this.ataque = 15;
        this.defesa = 4;
        this.vidaMaxima = this.vida;
    }
}


class Cenario {
    constructor(lutador1, lutador2, lutador1El, lutador2El, logobjetos){
         this.lutador1 = lutador1;
         this.lutador2 = lutador2;
         this.lutador1El = lutador1El;
         this.lutador2El = lutador2El;
         this.log = logobjetos;

    }

    start() {
        this.atualizar();

        this.lutador1El.querySelector('.botao').addEventListener('click', () => this.atacar(this.lutador1, this.lutador2));

        this.lutador2El.querySelector('.botao').addEventListener('click', () => this.atacar(this.lutador2, this.lutador1))
    }
k
    atualizar() {
       // lutador 1
       this.lutador1El.querySelector('.nome').innerHTML = `${this.lutador1.name} - ${this.lutador1.vida.toFixed(1)} Hp`

       let porcetagem = (this.lutador1.vida / this.lutador1.vidaMaxima) * 100;
       this.lutador1El.querySelector('.barra').style.width = `${porcetagem}%`;


       //lutador 2
       this.lutador2El.querySelector('.nome').innerHTML = `${this.lutador2.name} - ${this.lutador2.vida.toFixed(1)} Hp`


       let porcetagem2 = (this.lutador2.vida / this.lutador2.vidaMaxima) * 100;
       this.lutador2El.querySelector('.barra').style.width = `${porcetagem}%`;
    }

    atacar(atacante, atacado) {
        if(atacante.life <= 0 || atacado.life <= 0) {
            this.log.adicionarmensagem('O adversario está MORTO.');
            return;
        }

        let fatordeAtaque = (Math.random() *2).toFixed(2);
        let fatordeDefesa = (Math.random() *2).toFixed(2);
    

        let ataquereal = atacante.ataque * fatordeAtaque;
        let defesareal = atacado.defesa * fatordeDefesa;


        if(ataquereal > defesareal) {
            atacado.vida -= ataquereal;
            this.log.adicionarmensagem(`${atacante.name} causou ${ataquereal.toFixed(2)} de dano em ${atacado.name}`)

        } else{
           this.log.adicionarmensagem`${atacado.name} conseguiu DEFENDER...`
        }
       


        this.atualizar();
    }
}
class log{
    lista = [];

    constructor(listaEl) {
       this.listaEl = listaEl;
    }

    adicionarmensagem(msg) {
        this.lista.push(msg);

    }
    
    renderizar(){
        this.listaEl.innerHTML = '';
        for(let i in this.lista) {
            this.listaEl.innerHTML += `<li>${this.lista[i]}</li>`
        }
    }
}


























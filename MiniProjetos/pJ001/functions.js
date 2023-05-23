const defaultCharacter = {
    name: '',
    life: 1,
    maxlife: 1,
    attack: 0,
    defense:0
}


/* conts defaultCharacter = {
    name:',
    maxlife:'',


}

conts createKnight = (name) => {
    return {
        ...defaultCharacter,
        name:"",
        maxlife:"",
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
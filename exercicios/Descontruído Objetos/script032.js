 /*let pessoa = {
    nome: 'Marcos',
    sobrenome:'Dos Santos',
    social:{
        facebook: 'MarcosSantos',
        instagram: '@marcos'
    },
    nomeCcompleto: function(){
        return`${this.nome} ${this.sobrenome}`
    }
 }

 // Processo de descontrução//


 /*let idade = pessoa.idade;
 let nome = pessoa.nome;
 let instagram = pessoa.social.instagram;
 console.log(idade, nome,instagram)
*/

/*let{nome, sobrenome, idade = 30 } = pessoa;
console.log(nome, sobrenome, idade)
*/


       // DESCONTRUINDO OBJETO 1/2
/*let pessoa = {
    nome: 'Marcos',
    sobrenome:'Dos Santos',
    idade: 59,
    social:{
       facebook: 'MarcosSantos',
       instagram:{
        url: '@Dezzy',
        seguidores: 1000
       }
      

    },
    nomeCcompleto: function(){
    return`${this.nome} ${this.sobrenome}`
    }
};

let{ nome, idade, social:{instagram:{url:instagram, seguidores}} } = pessoa

console.log(nome,idade,instagram, seguidores)


/*let{ nome, idade, social:{instagram} } = pessoa
console.log(nome,idade,instagram)

/*let{facebook, instagram} = pessoa.social;
console.log(facebook,instagram)
*/
    

       //Descontruindo objeto em uma  função.//

let pessoa = {
    nome: 'Marcos',
    idade: 59,
    social:{
        facebook: 'MarcosSantos',
        instagram:{
            url: '@Dezzy',
            seguidores: 1000
        }
    },
};

/*function pegarNomeCompleto(obj) {
    
    return obj.nome+' '+obj.sobrenome;
}
*/

/*function pegarNomeCompleto(obj) {
    let nome = obj.nome;
    let sobrenome = obj.sobrenome;
    return `${nome} ${sobrenome}`;
}
*/

      // descontruindo objeto no proprio paramentro.
    function pegarNomeCompleto({nome, sobrenome = 'Dias', social:{instagram:{url:instagram}}}) {
        return `${nome} ${sobrenome}(Siga em ${instagram})`;
    }
console.log(pegarNomeCompleto(pessoa))


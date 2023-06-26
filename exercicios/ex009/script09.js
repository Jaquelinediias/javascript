let dia = 8;
let diaNome = '';

switch(dia){
    case 2:
        diaNome ='Viagem para Bahia';
        break;
    case 3:
        diaNome ='Voltas as Aulas'
        break;
    case 8:
        diaNome ='Férias'
        break;
    default:
       diaNome = 'Sem programação na agenda'
}
document.getElementById('dia').innerText= "Hoje é: "+diaNome;

/*switch(dia){
    case 1:
        diaNome = 'Segunda-Feira';
        break;

    case 2:
        diaNome = 'Terça-Feira';
        break;

    case 3:
        diaNome = 'Quarta-Feira';
        break
       
    case 4:
        diaNome = 'Quinta-Feira'
        break;
       
    case 5:
        diaNome = 'Sexta-Feira'
        break;
       
    case 6:
        diaNome = 'Sábado'
        break;
       
    case 7:
        diaNome = 'Domingo'
        break;
       
}
*/
// recurso default
/*
switch(dia){
    case 6:
    case 7:
        diaNome = 'Final de Semana';
        break;
    default:
        diaNome = 'Dia de Semana';
        break;
}
document.getElementById('dia').innerText= "Hoje é: "+diaNome;
*/


let pessoa = {nome: 'Marcos',sobrenome: 'Souza',idade: 20, Caracteristicas:['Gentil', 'Atencioso'],estetica:{peso: 52,altura: 1.65 }}


console.log(pessoa.Caracteristicas)


//O formato JSON é utilizado para estruturar dados em formato de texto e permitir a troca de dados entre aplicações de forma simples, leve e rápida. Por isso é tão importante saber como é estruturado e as principais diferenças com o modelo XML.


/*
JSON, que significa JavaScript Object Notation, é uma formatação utilizada para estruturar dados em formato de texto e transmiti-los de um sistema para outro, como em aplicações cliente-servidor ou em aplicativos móveis. Uma maneira de utilização é por meio de requisições AJAX, em que a aplicação recupera os dados armazenados no servidor de hospedagem sem a necessidade de recarregar a página.

*/



//O JSON.parse()método estático analisa uma string JSON, construindo o valor ou objeto JavaScript descrito pela string. Uma função reviver opcional pode ser fornecida para executar uma transformação no objeto resultante antes de ser retornado.

let planilha = JSON.parse('{"nome": "Jaqueline", "idade": 28}');

console.log(planilha)

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// Expected output: 42

console.log(obj.result);
// Expected output: true


/*Um uso comum de JSON é trocar dados de/para um servidor web.
Ao enviar dados para um servidor web, os dados devem ser uma string.
Converta um objeto JavaScript em uma string com JSON.stringify()
*/

const obj1 = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj1);

console.log(myJSON)

// EXEMPLO 2

let myJson = { nome: "Rennan", idade: 23, cidade: "Salvador"}
let resutJson = JSON.stringify(myJson);

console.log(resutJson)
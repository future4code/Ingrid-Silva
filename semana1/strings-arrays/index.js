// ------------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ---------------

// ------------- EXERCÍCIO 1 ---------------

// 'a. undefined';
// 'b. null';
// 'c. 11';
// 'd. 3';
// 'e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]';
// 'f. 9';

// ------------- EXERCÍCIO 2 ---------------

//"SUBI NUM ÔNIBUS EM MIRROCOS", 27;

// ------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO ---------------

// ------------- EXERCÍCIO 1 ---------------

const name = prompt("Qual o seu nome?")
const userEmail = prompt("Qual o seu e-mail?")

console.log(`O e-mail ${userEmail} foi cadastrado com sucesso. Seja bem-vinda(o), ${name}!`)

// ------------- EXERCÍCIO 2 ---------------

const favoriteFood = ['batata', 'morango', 'pepino', 'chimarrão', 'lasanha'];

console.log(favoriteFood);

console.log(`Essas são as minhas comidas preferidas:
${favoriteFood[0]}
${favoriteFood[1]}
${favoriteFood[2]}
${favoriteFood[3]}
${favoriteFood[4]}`)

const userFood = prompt("Qual é a sua comida favorita?")
favoriteFood[1] = userFood;

console.log(favoriteFood);

// ------------- EXERCÍCIO 3 ---------------

const listaDeTarefas = [];

const question1 = prompt("Digite uma tarefa que você precisa fazer no dia");
const question2 = prompt("Digite outra tarefa que você precisa fazer no dia");
const question3 = prompt("Digite outra tarefa que você precisa fazer no dia");

listaDeTarefas.push(question1);
listaDeTarefas.push(question2);
listaDeTarefas.push(question3);

console.log(listaDeTarefas);

const question4 = prompt("Digite o índice de uma tarefa que você já realizou: 0, 1 ou 2");
listaDeTarefas.splice(question4, 1);

console.log(listaDeTarefas)


// ------------- DESAFIOS ---------------

// ------------- DESAFIO 1 ---------------

const userFrase = prompt("Digite uma frase:");

console.log(userFrase.split(' '));

// ------------- DESAFIO 2 ---------------

const frutinhas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

const searchAbacaxi = frutinhas.findIndex((fruta) => fruta === "Abacaxi")

console.log(`Indíce da fruta Abacaxi: ${searchAbacaxi}
Tamanho do array de frutas: ${frutinhas.length}`);
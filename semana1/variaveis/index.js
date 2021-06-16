// EXERCÍCIO 1: primeiramente será impresso o valor de b (10). Já no segundo console.log será impresso o valor de a e b, sendo (10, 5) 
// EXERCÍCIO 2: Os valores impressos serão: 10, 10, 10  
// EXERCÍCIO 3: "let p" poderia ser renomeada para: horasTrabalhadasNoDia e "let t" poderia ser renomeada para valorRecebidoPorDia

// --------------------------------------------------------------------------------

// EXERCÍCIO 1

let name;
let age;

console.log(typeof name, typeof age);

// Foi impresso o tipo undefined porque é o valor padrão quando não definidos um valor previamente.
name = prompt("Qual o seu nome?");
age = prompt("e a sua idade?");

console.log(name, age);
console.log(typeof name, typeof age)
// Agora os dois valores são strings, pois são digitados textos.

console.log(`Olá ${name}, você tem ${age} anos`)

// EXERCÍCIO 2

const question1 = "Hoje está calor?";
const answer1 = prompt(question1);

const question2 = "Hoje está frio?"
const answer2 = prompt(question2);

const question3 = "Você gosta de livros?"
const answer3 = prompt(question3)


console.log(`${question1} ${answer1}. ${question2} ${answer2}. ${question3} ${answer3}`)

// EXERCÍCIO 3 

let a = 10;
let b = 25;
const tempA = a;

a = b;
b = tempA;

console.log(a, b)

// DESAFIO 

const valor1 = Number(prompt("Digite um número"));
const valor2 = Number(prompt("Digite outro número"));

const x = valor1 + valor2;
const y = valor1 * valor2;

console.log(`O primeiro número somado ao segundo número resulta em: ${x}.\nO primeiro número multiplicado pelo segundo número resulta em: ${y}`);
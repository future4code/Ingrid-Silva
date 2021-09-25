//------------------- EXERCÍCIOS DE INTERPRETAÇÃO -------------------

// --------------- EXERCÍCIO 1 ----------------

// "a. " false
// "b. " false
// "c. " true
// "d. " boolean

// --------------- EXERCÍCIO 2 ------------------

// Será impresso os dois números digitados concatenados, ao invés de somados.

//---------------- EXERCÍCIO 3 --------------------

// Para solucionar, deve ser transformado em "number" os dois prompts, dessa forma: Number(prompt("Digite um numero!"))

// ---------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO ---------------

// ------------------ EXERCÍCIO 1 -------------------

const age = Number(prompt("Qual é a sua idade?"));
const ageBestFriend = Number(
  prompt("Qual é a idade do seu melhor amigo ou amiga?")
);

const agesCompare = age > ageBestFriend;

console.log(
  "Sua idade é maior do que a do seu melhor amigo/amiga?",
  agesCompare
);
console.log("Diferença de idades:", age - ageBestFriend);

// // ------------------ EXERCÍCIO 2 ---------------------

const evenNumber = Number(prompt("Insira um número par"));

console.log(evenNumber % 2 === 0 );

// // Ao inserir números pares, o módulo será sempre 0;

// // Ao inserir números ímpares, o módulo será sempre 1;

// // ------------------ EXERCÍCIO 3 ---------------------

const userAge = Number(prompt("Quantos anos você tem?"));

console.log("Idade em meses:", userAge * 12);
console.log("Idade em dias:", userAge * 365);
console.log("Idade em horas:", userAge * 24 * 365);

// // ------------------ EXERCÍCIO 4 ---------------------

const firstNumber = Number(prompt("Digite um número"));
const secondNumber = Number(prompt("Digite outro número"));

console.log(
  "O primeiro numero é maior que segundo?",
  firstNumber > secondNumber
);
console.log(
  "O primeiro numero é igual ao segundo?",
  firstNumber === secondNumber
);
console.log(
  "O primeiro numero é divísivel pelo segundo?",
  firstNumber % secondNumber == 0
);
console.log(
  "O segundo numero é divísivel pelo primeiro?",
  secondNumber % firstNumber == 0
);

// ------------------ DESAFIO: EXERCÍCIO 1 ---------------------

console.log((77 - 32) * (5 / 9) + 273.15, "K");

console.log(80 * (9 / 5) + 32, "°F");

console.log(30 * (9 / 5) + 32, "°F", (30 - 32) * (5 / 9) + 273.15, "K");

const valueCelsius = Number(prompt("Digite uma temperatura em graus Celsius"));
console.log(valueCelsius * (9 / 5) + 32, "°F", valueCelsius + 273.15, "K");

// ------------------ DESAFIO: EXERCÍCIO 2 ---------------------

const valorQuilowattHora = 0.05;

const consumo = Number(prompt("Qual foi o consumo em quilowatt-hora?"));
const desconto = Number(prompt("Qual é a porcentagem de desconto?"));

const total = consumo * valorQuilowattHora;
const porcentagemDesconto = (100 - desconto) / 100;

console.log(total * porcentagemDesconto);

// ------------------ DESAFIO: EXERCÍCIO 3 ---------------------

const valorLB= Number(prompt("Digite um valor em LB"));
console.log(valorLB, "lb", "equivalem a", valorLB / 2.205, "kg");

const valorOz= Number(prompt("Digite um valor em OZ"));
console.log(valorOz, "oz", "equivalem a", valorOz / 35.274, "kg");

const miles = Number(prompt("Digite um valor em milhas"));
console.log(miles, "mi", "equivalem a", miles * 1609, "m");

const ft = Number(prompt("Digite um valor em pés"));
console.log(ft, "ft", "equivalem a",  ft / 3.281, "m");

const galao = Number(prompt("Digite um valor em galão"));
console.log(galao, "galão", "equivalem a", galao * 3.785, "litros")

const xicara = Number(prompt("Digite um valor em xícaras"));
console.log(xicara, "xícara", "equivalem a", xicara / 3.52, "litros")
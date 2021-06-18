// ------------------ EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ----------

// ------------------ EXERCÍCIO 1 ----------

// a) Será impresso no console primeiro: 10 e no segundo: 50;
// b) Não seria impresso nada.

// ------------------ EXERCÍCIO 2 ----------

// a) É uma funão que recebe um texto e retorna esse mesmo texto em letras minúsculas e verifica se inclui a palavra "cenoura", retornando somente um valor booleano;
// b) Saída I: true; Saída II: true; Saída III: true;

// ------------------ EXERCÍCIOS DE ESCRITA DE CÓDIGO ----------

// ------------------ EXERCÍCIO 1 ----------

// a)

function minhasInfos() {
  console.log(
    "Eu sou Ingrid, tenho 25 anos, moro em Porto Alegre e sou estudante"
  );
}

minhasInfos();

// b)

function infosUser(nome, idade, cidade, profissão) {
  return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`;
}

console.log(infosUser("Ingrid", "25", "Porto Alegre", "estudante"));

// ------------------ EXERCÍCIO 2 ----------

// a)

function soma(valor1, valor2) {
  return valor1 + valor2;
}

console.log(soma(15, 20));

// b)

function trueOrFalse(value1, value2) {
  return value1 >= value2;
}

console.log(trueOrFalse(65, 20));

// c)

function isEven(num) {
  return num % 2 == 0;
}

console.log(isEven(11));

// d)

function textLength(texto) {
  console.log(`O tamanho do texto inserido é: ${texto.length}`);
  console.log(texto.toUpperCase());
}

textLength("Meu nome é Ingrid");

// ------------------ EXERCÍCIO 3 ----------

const userNumber1 = Number(prompt("Digite um número"));
const userNumber2 = Number(prompt("Digite outro número"));

function sum(numberA, numberB) {
  return numberA + numberB;
}

function subtract(numberA, numberB) {
  return numberA - numberB;
}

function multiply(numberA, numberB) {
  return numberA * numberB;
}

function divide(numberA, numberB) {
  return numberA / numberB;
}

console.log(`Números inseridos: ${userNumber1} e ${userNumber2}
Soma: ${sum(userNumber1, userNumber2)}
Diferença: ${subtract(userNumber1, userNumber2)}
Multiplicação: ${multiply(userNumber1, userNumber2)}
Divisão: ${divide(userNumber1, userNumber2)}`);

// ------------------ DESAFIO 1 ----------

// a)

const funcaoRecebeParametro = (parametro) => {
  console.log(parametro);
};

// funcaoRecebeParametro("OLá pessoas");

// b)

const funcaoDoisParametros = (parametro1, parametro2) => {
  const soma = parametro1 + parametro2;
  funcaoRecebeParametro(soma);
};

funcaoDoisParametros(2, 3);

// ------------------ DESAFIO 2 ----------

function pitagoras(cat1, cat2) {
    const somaDosCatetos = (cat1 * cat1) + (cat2 * cat2); 
    return Math.sqrt(somaDosCatetos); 
}

console.log(pitagoras(3, 3));
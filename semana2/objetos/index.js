// Exercícios de interpretação de código

// Exercício 1

// a) Matheus Nachtergaele, Virginia Cavendish, {canal: "Globo", horario: "14h"}

// Exercício 2

// // a) {
// 	nome: "Juca",
// 	idade: 3,
// 	raca: "SRD"
// }

//  {
// 	nome: "Juba",
// 	idade: 3,
// 	raca: "SRD"
// }

//  {
// 	nome: "Jubo",
// 	idade: 3,
// 	raca: "SRD"
// }

// b) O spread operator serve para copiar todo o objeto;

// Exercício 3

// a) false, undefined
// b) Foi impresso "false" porque o valor atribuído a "backender" é false.
// E "undefined" foi impresso porque a chave altura não foi definida.

// Exercícios de escrita de código

// Exercício 1

// a)

const person = {
  name: "Eduardo",
  nicknames: ["Du", "Dudu", "Edu"],
};

function showObject(object) {
  console.log(
    `Eu sou ${object.name}, mas pode me chamar de: ${object.nicknames[0]}, ${object.nicknames[1]} ou ${object.nicknames[2]}`
  );
}

showObject(person);

// b)

const newObject = {
  ...person,
  nicknames: ["Querido", "Lindo", "Perfeito"],
};

showObject(newObject);

// Exercício 2

// a)

const pessoa = {
  nome: "Ingrid",
  idade: 25,
  profissao: "Pedagoga",
};

const pessoa2 = {
  nome: "João",
  idade: 26,
  profissao: "Cozinheiro",
};

// b)

function showArray(objeto) {
  return [
    objeto.nome,
    objeto.nome.length,
    objeto.idade,
    objeto.profissao,
    objeto.profissao.length,
  ];
}

console.log(showArray(pessoa));
console.log(showArray(pessoa2));

// Exercício 3

// a)

const carrinho = [];

// b)

const fruta1 = {
  nome: "banana",
  disponibilidade: true,
};

const fruta2 = {
  nome: "uva",
  disponibilidade: true,
};

const fruta3 = {
  nome: "morango",
  disponibilidade: true,
};

// c)

function addFruta(objeto) {
  return carrinho.push(objeto);
}

addFruta(fruta1);
addFruta(fruta2);
addFruta(fruta3);

console.log(carrinho);

// Desafios

// 1)

function userQuestions() {
  const name = prompt("Qual é o seu nome?");
  const age = prompt("Qual é a sua idade?");
  const profession = prompt("Qual é a sua profissão?");

  const infos = { name: name, age: age, profession: profession };

  console.log(typeof infos);

  return infos;
}

console.log(userQuestions());

// 2)

const filme1 = {
  anoLancamento: 1995,
  nomeFIlme: "Toy Story",
};

const filme2 = {
  anoLancamento: 2001,
  nomeFIlme: "Monstros SA",
};

function recebeFilmes(objeto1, objeto2) {
  const filme1MaisVelho = objeto1.anoLancamento < objeto2.anoLancamento;
  const filmesMesmoIdade = objeto1.anoLancamento === objeto2.anoLancamento;

  const primeiraLinha = `O primeiro filme foi lançado antes do segundo? ${filme1MaisVelho}`;
  const segundaLinha = `O primeiro filme foi lançado no mesmo ano do segundo? ${filmesMesmoIdade}`;

  return `${primeiraLinha}\n${segundaLinha}`;
}

console.log(recebeFilmes(filme1, filme2));

// 3)

function controleDeFrutas(fruta) {
  return {
    ...fruta,
    disponibilidade: !fruta.disponibilidade,
  };
}

console.log(controleDeFrutas(fruta1));

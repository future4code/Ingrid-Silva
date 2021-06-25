// Exercícios de interpretação de código

//Exercício 1

// a) Será impresso cada item do objeto 'usuarios', com seu respectivo index e o array completo.

//Exercício 2

// a) Será impresso um novo array com os valores de 'nome', 'apelido' e os índices do objeto 'usuarios';

// Exercício 3

//  a) Será impresso um novo array com os valores de 'nome', 'apelido' e os índices do objeto 'usuarios', exceto o item com o apelido "Chijo";

// Exercícios de escrita de código

// Exercício 1

const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

// a)

const nomesDogs = pets.map((pet) => {
  return pet.nome;
});

// console.log(nomesDogs);

// b)

const dogSalsicha = pets.filter((pet) => {
  return pet.raca === "Salsicha";
});

// console.log(dogSalsicha);

// c)

const poodles = pets.filter((pet) => pet.raca === "Poodle");
const mensagemPoodle = poodles.map(
  (pet) => `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`
);

// console.log(mensagemPoodle);

// Exercício 2

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

// a)

const nomeItem = produtos.map((produto) => produto.nome);

console.log(nomeItem);

// b)

const itemDesconto = produtos.map((produto) => ({
  nome: produto.nome,
  preco: produto.preco * 0.95,
}));

console.log(itemDesconto);

// c)

const bebidas = produtos.filter((produto) => produto.categoria === "Bebidas");

console.log(bebidas);

// d)

const produtosYpe = produtos.filter((produto) => produto.nome.includes("Ypê"));
console.log(produtosYpe);

// e)

const produtoFrase = produtosYpe.map(
  (produto) => `Compre ${produto.nome} por ${produto.preco}`
);

console.log(produtoFrase);

// Desafio 1

const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];

// a)

const pokemonOrdemAlfabetica = pokemons.map((pokemon) => pokemon.nome).sort();

console.log(pokemonOrdemAlfabetica);

// b)

const pokemonTipos = pokemons
  .map((pokemon) => pokemon.tipo)
  .filter((value, index, array) => index === array.lastIndexOf(value));

console.log(pokemonTipos);

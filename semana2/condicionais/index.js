// Exercícios de interpretação de código

// Exercício 1

// a) Esse código receve um número do usuário, através do prompt e
// testa se o número é par.

// b) Essa mensagem é impressa para os números pares, ou seja, números em que o resto da divisão é igual a zero.

// c) Essa mensagem é impressa para os números ímpares, ou seja, número em que o resto da divisão por 2 é diferente de zero.

// Exercício 2

// a) Esse código serve para exibir a fruta escolhida atravé do prompt, com o seu respectivo preço.
// Caso seja escolhida uma fruta que não está listada no switch, o preço impresso será o de default.

// b) Será impresso 'O preço da fruta Maçã é R$ 2.25'

// c) Será impresso 'O preço da fruta Pêra é R$ 5'

// Exercício 3

// a) A primeira linha está solicitando um número ao usuário, através do prompt, e armazenando esse valor fornecido em uma variável do tipo const.

// b) Ao digitar 10, será impresso: "Esse número passou no teste" e oerro de que a variável "mensagem" não foi definida.
//Ao digitar -10, não vai aparecer nada além do erro de que a variável mensagem não foi definida.

// c) O erro será referente a variável mensagem, visto que ela só foi definida dentro do bloco if, portanto não pode ser acessada fora dele.

// Exercícios de escrita de código

// Exercício 1

const verificaIdade = () => {
  const idadeRecebida = Number(prompt("Qual é a sua idade?"));

  if (idadeRecebida >= 18) {
    console.log("Você pode dirigir");
  } else {
    console.log("Você não pode dirigir");
  }
};

verificaIdade();

// Exercício 2

const verificaTurno = () => {
  const turnoRecebido = prompt(
    "Digite o turno em você estuda: M (matutino) ou V (Vespertino) ou N (Noturno)"
  ).toLowerCase();

  if (turnoRecebido === "m") {
    console.log("Bom dia!");
  } else if (turnoRecebido === "v") {
    console.log("Boa tarde!");
  } else if (turnoRecebido === "n") {
    console.log("Boa noite!");
  }
};

verificaTurno();

// Exercício 3

const verificaTurnoSwitch = () => {
  const turnoRecebido = prompt(
    "Digite o turno em você estuda: M (matutino) ou V (Vespertino) ou N (Noturno)"
  ).toLowerCase();

  switch (turnoRecebido) {
    case "m":
      console.log("Bom dia!");
      break;

    case "v":
      console.log("Boa tarde!");
      break;

    case "n":
      console.log("Boa noite!");
      break;
  }
};

verificaTurnoSwitch();

// Exercício 4

const verificaFilmeEPreco = () => {
  const generoDoFilme = prompt(
    "Qual gênero de filme você quer assistir?"
  ).toLowerCase();
  const precoIngresso = Number(prompt("Qual é o preço do ingresso?"));

  if (generoDoFilme === "fantasia" && precoIngresso < 15) {
    console.log("Bom filme!");
  } else {
    console.log("Escolha outro filme :(");
  }
};

verificaFilmeEPreco();

// Desafio 1

const verificaFilmeEPrecoElanche = () => {
  const generoDoFilme = prompt(
    "Qual gênero de filme você quer assistir?"
  ).toLowerCase();
  const precoIngresso = Number(prompt("Qual é o preço do ingresso?"));
  const lanche = prompt("Qual lanche você vai comprar?");

  if (generoDoFilme === "fantasia" && precoIngresso < 15) {
    console.log("Bom filme!", `Aproveite o seu ${lanche}`);
  } else {
    console.log("Escolha outro filme :(");
  }
};

verificaFilmeEPrecoElanche();

// Desafio 2

const cotacaoDolar = 4.1;

const formataValor = (valor, tipo) => {
  const moeda = tipo === "in" ? "U$" : "R$";
  const total = tipo === "in" ? valor / cotacaoDolar : valor;

  return `${moeda} ${total}`;
};

const valoresEtapaSF = {
  1: 1320,
  2: 880,
  3: 550,
  4: 220,
};

const valoresEtapaDT = {
  1: 660,
  2: 440,
  3: 330,
  4: 170,
};

const valoresEtapaFI = {
  1: 1980,
  2: 1320,
  3: 880,
  4: 330,
};

const tipos = {
  in: "Internacional",
  do: "Doméstico",
};

const etapas = {
  sf: "Semifinal",
  fi: "Final",
  dt: "Decisão de terceiro lugar",
};

const vendaIngressos = () => {
  const nomeCompleto = prompt("Digite o seu nome completo");
  const tipoJogo = prompt(
    "Qual o tipo de jogo que você vai assistir? Digite IN = Internacional ou DO = Doméstico"
  ).toLowerCase();
  const etapaJogo = prompt(
    "Digite qual é a etapa do jogo que você vai assistir. Digite SF = semifinal ou DT = decisão de terceiro lugar ou FI = final"
  ).toLowerCase();
  const categoria = Number(prompt("Digite a categoria: (1, 2, 3 ou 4)"));
  const quantidadeIngressos = Number(
    prompt("Digite a quantidade de ingressos:")
  );

  let valorIngresso = 0;

  switch (etapaJogo) {
    case "sf": {
      valorIngresso = valoresEtapaSF[categoria];
      break;
    }
    case "dt": {
      valorIngresso = valoresEtapaDT[categoria];
      break;
    }
    case "fi": {
      valorIngresso = valoresEtapaFI[categoria];
      break;
    }
  }

  console.log(`---Dados da compra--- 
  Nome do cliente:  ${nomeCompleto} 
  Tipo do jogo:   ${tipos[tipoJogo]} 
  Etapa do jogo:   ${etapas[etapaJogo]} 
  Categoria:   ${categoria} 
  Quantidade de Ingressos:   ${quantidadeIngressos} ingressos 
  ---Valores--- 
  Valor do ingresso:  ${formataValor(valorIngresso, tipoJogo)}
  Valor total:   ${formataValor(
    quantidadeIngressos * valorIngresso,
    tipoJogo
  )}`);
};

vendaIngressos();

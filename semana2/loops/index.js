// Exercícios de interpretação de código

// Exercício 1

// Esse código está rodando um laço de repetição onde a variável valor vai
// ser incrementada com a variável i.
// O resultado impresso será 10.

// Exercício 2

// a)  19, 21, 23, 25, 27, 30

// b) Poderia ser utilizado o numero[i];

// Exercício 3

//*
//**
//***
//****

// Exercícios de escrita de código

// Exercício 1

const verificaBichosEstimação = () => {
  let bichosArr = [];

  const quantidadeBichosUsuario = Number(
    prompt("Quantos bichos de estimação você tem?")
  );

  if (quantidadeBichosUsuario === 0) {
    console.log("Que pena! Você pode adotar um pet!");
  } else {
    while (bichosArr.length < quantidadeBichosUsuario) {
      const nomeBicho = prompt("Digite o nome do seu bicho de estimação");
      bichosArr.push(nomeBicho);
    }

    console.log(bichosArr);
  }
};

// verificaBichosEstimação();

// Exercício 2

const arrayOriginal = [3, 4, 5, 6, 7];

const imprimeValor = () => {
  for (numero of arrayOriginal) {
    console.log(numero);
  }
};

// imprimeValor();

const valorDividido = () => {
  for (numero of arrayOriginal) {
    console.log(numero / 10);
  }
};

// valorDividido();

const verificaNumPar = () => {
  let arrNumPar = [];

  for (numero of arrayOriginal) {
    if (numero % 2 === 0) {
      arrNumPar.push(numero);
    }
  }
  console.log(arrNumPar);
};

// verificaNumPar();

const arrStrings = () => {
  const resultado = [];

  for (let i = 0; i < arrayOriginal.length; i++) {
    const arr = `O elemento do index ${i} é: ${arrayOriginal[i]}`;
    resultado.push(arr);
  }

  console.log(resultado);
};

// arrStrings();

const verificaMaiorEMenor = () => {
  let maiorNum = undefined;
  let menorNum = undefined;

  for (let i = 0; i < arrayOriginal[i]; i++) {
    const numero = arrayOriginal[i];

    if (maiorNum === undefined || numero > maiorNum) maiorNum = numero;

    if (menorNum === undefined || numero < menorNum) menorNum = numero;
  }
  console.log(`O maior número é ${maiorNum} e o menor é ${menorNum}`);
};

// verificaMaiorEMenor();

// Desafio 1

const adivinhaONumero = () => {
  const numPlayer1 = Number(prompt("Escolha um número"));
  let numPlayer2;
  let tentativas = 0;

  console.log("Vamos jogar!");

  do {
    numPlayer2 = Number(prompt("Adivinhe o número escolhido!"));
    tentativas++;

    if (numPlayer2 < numPlayer1) {
      console.log(`Errou. O número escolhido é maior!`);
    } else if (numPlayer2 > numPlayer1) {
      console.log(`Errou. O número escolhido é menor!`);
    }

    console.log(`O número chutado foi: ${numPlayer2}`);
  } while (numPlayer1 !== numPlayer2);

  console.log("Acertou!");
  console.log(`O número de tentativas foi: ${tentativas}`);
};

// adivinhaONumero();

// Desafio 2

const adivinhaNumeroSozinho = () => {
  const numAleatorio = Math.floor(Math.random() * 100 + 1);
  let tentativas = 0;
  let numPlayer;
  let inputUsuario;

  do {
    inputUsuario = prompt("Adivinhe o número escolhido!");

    if (inputUsuario === null) return;

    numPlayer = Number(inputUsuario);
    tentativas++;

    if (numPlayer < numAleatorio) {
      console.log(`Errou. O número escolhido é maior!`);
    } else if (numPlayer > numAleatorio) {
      console.log(`Errou. O número escolhido é menor!`);
    }
    console.log(`O número chutado foi: ${numPlayer}`);
  } while (numPlayer !== numAleatorio && inputUsuario !== null);

  if (numPlayer === numAleatorio) {
    console.log("Acertou!");
    console.log(`O número de tentativas foi: ${tentativas}`);
  }
};

adivinhaNumeroSozinho();

// Como eu já conhecia o math.floor(), consegui fazer a alteração com facilidade.
// O mais difícil foi o primeiro desafio, onde tive que pensar na lógica pela 1ª vez.

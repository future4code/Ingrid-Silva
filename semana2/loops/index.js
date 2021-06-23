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
    do {
      const nomesBichosUsuario = prompt(
        "Digite o nome do seu bicho de estimação"
      );
      bichosArr.push(nomesBichosUsuario);
    } while (bichosArr.length < quantidadeBichosUsuario);
  }
  console.log(bichosArr);
};

// verificaBichosEstimação();

// Exercício 2

const arrayOriginal = [3, 4, 5, 6, 7];

const imprimeValor = () => {
  for (numero of arrayOriginal) {
    console.log(numero);
  }
};

imprimeValor();

const valorDividido = () => {
  for (numero of arrayOriginal) {
    console.log(numero / 10);
  }
};

valorDividido();

const verificaNumPar = () => {
  let arrNumPar = [];

  for (numero of arrayOriginal) {
    if (numero % 2 === 0) {
      arrNumPar.push(numero);
    }
  }
  console.log(arrNumPar);
};

verificaNumPar();

const arrStrings = () => {
  for (let i = 0; i <= arrayOriginal.length - 1; i++) {
    console.log(`O elemento do index ${i} é: ${arrayOriginal[i]}`);
  }
};
arrStrings();

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

verificaMaiorEMenor();

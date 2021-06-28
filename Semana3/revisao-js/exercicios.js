// EXERCÍCIO 01
function inverteArray(array) {
  const arrayInvertido = [];

  for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertido.push(array[i]);
  }

  return arrayInvertido;
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const numerosPares = array.filter((num) => num % 2 === 0);
  const numerosParesElevadosAoQuadrado = numerosPares.map((num) => num ** 2);

  return numerosParesElevadosAoQuadrado;
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const numerosPares = array.filter((num) => num % 2 === 0);

  return numerosPares;
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  return Math.max(...array);
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length;
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const respostas = [false, false, true, true, true];
  return respostas;
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const pares = [];

  for (let i = 0; i < n * 2; i++) {
    if (i % 2 === 0) {
      pares.push(i);
    }
  }

  return pares;
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a !== b && a !== c && b !== c) {
    return "Escaleno";
  } else if (a === b && a === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maiorNumero;
  let menorNumero;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;

  const diferenca = maiorNumero - menorNumero;

  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca,
  };
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  // for(num of array) {
  //   const index = array[i]
  //   if(num[i] > num)
  // }

  let segundoMaiorNumero;
  let segundoMenorNumero;

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] > array[i - 1]) {
      let;
    }
  }
}

// EXERCÍCIO 11
function ordenaArray(array) {}

// EXERCÍCIO 12
function filmeFavorito() {
  const nome = "O Diabo Veste Prada";
  const ano = 2006;
  const diretor = "David Frankel";
  const atores = [
    "Meryl Streep",
    "Anne Hathaway",
    "Emily Blunt",
    "Stanley Tucci",
  ];

  return {
    nome: nome,
    ano: ano,
    diretor: diretor,
    atores: atores,
  };
}

// EXERCÍCIO 13
function imprimeChamada() {
  const Astrodev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
  };

  return `Venha assistir ao filme ${Astrodev.nome}, de ${Astrodev.ano}, dirigido por ${Astrodev.diretor} e estrelado por ${Astrodev.atores[0]}, ${Astrodev.atores[1]}, ${Astrodev.atores[2]}, ${Astrodev.atores[3]}.`;
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {}

// EXERCÍCIO 17C
function verificaParidade(array) {}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {}

// EXERCÍCIO 20
function calculaSaldo(contas) {}

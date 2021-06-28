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
  let len = array.length;
  let trocado;

  do {
    trocado = false;

    for (let i = 0; i < len; i++) {
      if (array[i] > array[i + 1]) {
        let tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
        trocado = true;
      }
    }
  } while (trocado);

  const segundoMaiorNumero = array[array.length - 2];
  const segundoMenorNumero = array[1];

  return [segundoMaiorNumero, segundoMenorNumero];
}

// EXERCÍCIO 11
function ordenaArray(array) {
  let len = array.length;
  let trocado;

  do {
    trocado = false;

    for (let i = 0; i < len; i++) {
      if (array[i] > array[i + 1]) {
        let tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
        trocado = true;
      }
    }
  } while (trocado);

  return array;
}

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
function criaRetangulo(lado1, lado2) {
  return {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2,
  };
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  return {
    nome: "ANÔNIMO",
    idade: pessoa.idade,
    email: pessoa.email,
    endereco: pessoa.endereco,
  };
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const maioresDeIdade = arrayDePessoas.filter((pessoa) => {
    if (pessoa.idade >= 18) {
      return { nome: arrayDePessoas.nome, idade: arrayDePessoas.idade };
    }
  });
  return maioresDeIdade;
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const maioresDeIdade = arrayDePessoas.filter((pessoa) => {
    if (pessoa.idade < 18) {
      return { nome: arrayDePessoas.nome, idade: arrayDePessoas.idade };
    }
  });
  return maioresDeIdade;
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  return array.map((num) => num * 2);
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const numString = array.map((num) => (num * 2).toString());
  return numString;
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const numerosParidade = array.map((num) => {
    const paridade = num % 2 === 0 ? "par" : "ímpar";

    return `${num} é ${paridade}`;
  });

  return numerosParidade;
}

// EXERCÍCIO 18A
const verificaPermissaoMontanhaRussa = (pessoa) =>
  pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5;

function retornaPessoasAutorizadas(pessoas) {
  const arrayPessoasAutorizadas = pessoas.filter(
    verificaPermissaoMontanhaRussa
  );

  return arrayPessoasAutorizadas;
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const arrayPessoasNaoAutorizadas = pessoas.filter(
    (pessoa) => !verificaPermissaoMontanhaRussa(pessoa)
  );

  return arrayPessoasNaoAutorizadas;
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  let len = consultasNome.length;
  let trocado;

  do {
    trocado = false;

    for (let i = 0; i < len; i++) {
      const atual = consultasNome[i];
      const proximo = consultasNome[i + 1];

      if (proximo && atual.nome.localeCompare(proximo.nome) === 1) {
        let tmp = consultasNome[i];
        consultasNome[i] = consultasNome[i + 1];
        consultasNome[i + 1] = tmp;
        trocado = true;
      }
    }
  } while (trocado);

  return consultasNome;
}

// EXERCÍCIO 19B
function criaObjetoData(consulta) {
  const data = consulta.dataDaConsulta.split("/");
  return new Date(data[2], data[1], data[0]);
}

function ordenaPorData(consultasData) {
  let len = consultasData.length;
  let trocado;

  do {
    trocado = false;

    for (let i = 0; i < len; i++) {
      const atual = consultasData[i];
      const proximo = consultasData[i + 1];

      if (!proximo) continue;

      const data1 = criaObjetoData(atual);
      const data2 = criaObjetoData(proximo);

      if (data1 > data2) {
        let tmp = consultasData[i];
        consultasData[i] = consultasData[i + 1];
        consultasData[i + 1] = tmp;
        trocado = true;
      }
    }
  } while (trocado);

  return consultasData;
}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  for (conta of contas) {
    const somaCompras = conta.compras.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

    conta.saldoTotal = conta.saldoTotal - somaCompras;
  }

  return contas;
}

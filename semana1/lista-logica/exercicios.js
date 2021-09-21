// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura"));
  const largura = Number(prompt("Digite a largura"));

  console.log(altura * largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual"));
  const anoDeNascimento = Number(prompt("Digite o seu ano de nascimento"));

  console.log(anoAtual - anoDeNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual é o seu nome?");
  const idade = prompt("Qual é a sua idade?");
  const email = prompt("Qual é o seu email?");

  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Qual é a sua primeira cor favorita?");
  const cor2 = prompt("Qual é a sua segunda cor favorita?");
  const cor3 = prompt("Qual é a sua terceira cor favorita?");

  console.log([cor1, cor2, cor3]);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length == string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const temp = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = temp;

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const lowerCaseString1 = string1.toLowerCase();
  const lowerCaseString2 = string2.toLowerCase();

  return lowerCaseString1 == lowerCaseString2;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Digite o ano atual"));
  const anoDeNascimento = Number(prompt("Digite o seu ano de nascimento"));
  const anoCarteira = Number(
    prompt("Digite o ano em que sua carteira foi emitida")
  );

  const idadeDoUsuario = anoAtual - anoDeNascimento;
  const ultimaRenovacao = anoAtual - anoCarteira;

  if (idadeDoUsuario <= 20) {
    console.log(ultimaRenovacao >= 5); // 5 em 5 anos
  } else if (idadeDoUsuario > 20 && idadeDoUsuario <= 50) {
    console.log(ultimaRenovacao >= 10); // 10 em 10 anos
  } else {
    console.log(ultimaRenovacao >= 15); // 15 em 15 anos
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const condicao1 = ano % 400 === 0;
  const condicao2 = ano % 4 === 0 && !(ano % 100 === 0 && !condicao1);

  return condicao1 || condicao2;
}
// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você tem mais de 18 anos?").toLowerCase();
  const escolaridade = prompt("Você tem ensino médio completo?").toLowerCase();
  const disponibilidade = prompt(
    "Você possui disponibilidade exclusiva durante os horários do curso?"
  ).toLowerCase();

  console.log([idade, escolaridade, disponibilidade].every((q) => q === "sim"));
}

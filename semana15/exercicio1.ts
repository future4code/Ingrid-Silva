const minhaString: string = "oi";

// Ao atribuir um valor diferente de string,
// é apontado um erro de tipagem.

const meuNumero: number | string = 1;

const meuObjeto: { nome: string; idade: number; corFavorita: string } = {
  nome: "Ingrid",
  idade: 25,
  corFavorita: "Rosa",
};

enum CoresArcoIris {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarela",
  VERDE = "Verde",
  AZUL = "Azul",
  VIOLETA = "Violeta",
}

type Pessoa = {
  nome: string;
  idade: number;
  corFavorita: CoresArcoIris;
};

const pessoa1: Pessoa = {
  nome: "Ingrid",
  idade: 25,
  corFavorita: CoresArcoIris.AZUL,
};

const pessoa2: Pessoa = {
  nome: "Ingrid2",
  idade: 25,
  corFavorita: CoresArcoIris.AZUL,
};

const pessoa3: Pessoa = {
  nome: "Ingrid3",
  idade: 25,
  corFavorita: CoresArcoIris.AZUL,
};

console.log("teste");

const calc = (a: number, b: number): void => {
  const soma = a + b;
  const sub = a - b;
  const mult = a * b;

  const verificaMaior = (a: number, b: number) => {
    if (a > b) return a;
    else return b;
  };
  const maior = verificaMaior(a, b);

  console.log(soma, sub, sub, mult, maior);
};

calc(10, 20);
calc(20, 30);

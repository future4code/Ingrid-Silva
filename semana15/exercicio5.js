console.log("teste");
var calc = function (a, b) {
    var soma = a + b;
    var sub = a - b;
    var mult = a * b;
    var verificaMaior = function (a, b) {
        if (a > b)
            return a;
        else
            return b;
    };
    var maior = verificaMaior(a, b);
    console.log(soma, sub, sub, mult, maior);
};
calc(10, 20);
calc(20, 30);

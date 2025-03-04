function saudacao(nome) {
    return `Bom dia ${nome}!`
}

const variavel = saudacao("Henrique");
console.log(variavel);


function soma(x, y) {
    const resultado = x + y
    return resultado
}

console.log(soma(2, 2));

// função anonima
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));

// arrow funtion
const raiz2 = (n) => n ** 0.5;
console.log(raiz2(16));

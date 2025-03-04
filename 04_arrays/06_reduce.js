// reduz um array em um único elemento
//some todos os números (reduce)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador
    //console.log(acumulador, valor, indice, array);
}, 0)

console.log(total);

// retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 60},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 105},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63}
];

const pessoaMaisVelha =  pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(pessoaMaisVelha);

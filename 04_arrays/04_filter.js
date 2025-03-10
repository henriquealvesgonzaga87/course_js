// -> filter vai sempre retornar um array com a mesma quantidade do array original ou menos

// retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter((valor, indice, array) => {
    //console.log(valor, indice, array)
    return valor > 10;
});
//console.log(numerosFiltrados);


// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a letra a

const pessoas = [
    {nome: 'Luiz', idade: 60},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisde50Anos = pessoas.filter(obj => obj.idade > 50);
const nomesTerminadosEmLetraA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande);
console.log(pessoasComMaisde50Anos);
console.log(nomesTerminadosEmLetraA);

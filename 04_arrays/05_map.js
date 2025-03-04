//dobre os números
// map vai ter sempre o tamanho do array original
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(function(valor){
    return valor * 2
    //console.log(valor, indice, array);
});

console.log(numerosEmDobro);

//para cada elemento
// retorne apenas uma string com o nome da pessoa
// remova apenas a chave "nome" do objeto
// adiciona uma id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 60},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];
const nome = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}));
const objetoComIndice = pessoas.map(function(obj, indice){
    return {id: indice, ...obj};
});

console.log(nome);
console.log(idades);
console.log(objetoComIndice);

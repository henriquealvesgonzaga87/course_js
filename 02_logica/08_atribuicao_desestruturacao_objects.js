const pessoa = {
    nome: 'Henrique',
    sobrenome: 'Gonzaga',
    idade: 37,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const {nome: teste, sobrenome, idade, endereco: {rua, numero}} = pessoa;
console.log(teste, sobrenome, idade, rua, numero);
const nome = 'Henrique';
const sobrenome = 'Gonzaga';
const idade = 37;


function soma(x, y){
    return x + y;
}


export {nome as nome2, sobrenome, idade, soma};


export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

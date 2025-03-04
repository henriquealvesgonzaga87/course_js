const pessoa1 = {
    nome: "Henrique",
    sobrenome: "Gonzaga",
    idade: 37
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa2 = criaPessoa("Maria", "Gonzaga", 34);
console.log(pessoa2)

const pessoa3 = {
    nome: "Joao",
    sobrenome: "Silva",
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi`);
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }

};

pessoa3.fala()
pessoa3.incrementaIdade()
pessoa3.fala()

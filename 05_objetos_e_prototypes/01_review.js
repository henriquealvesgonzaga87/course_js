const pessoa1 = new Object();
pessoa1.nome = "Henrique";
pessoa1.sobrenome = "Gonzaga";
pessoa1.idade = 37;
pessoa1.falarNome = function(){
    return (`${this.nome} está falando seu nome`);
};
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());

for(let chave in pessoa1){
    console.log(chave, pessoa1[chave]);
}

// factory functions / constructor functions -> para criar moldes para os objetos

function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const pessoa2 = criaPessoa('Henrique', 'Gonzaga');
console.log(pessoa2.nomeCompleto);


function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Henrique', 'Gonzaga');
console.log(p1);

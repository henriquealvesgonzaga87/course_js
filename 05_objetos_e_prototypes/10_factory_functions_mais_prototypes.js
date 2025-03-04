const falar = {
    falar(){
        console.log(`${this.nome} está falando.`);
    }
};

const comer = {
    comer(){
        console.log(`${this.nome} está comendo.`);
    }
};

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo.`);
    }
};

// const pessoaPrototype = {...falar, ...comer, ...beber};
const pessoaPrototype = Object.assign({}, falar, comer, beber);


function CriaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

p1 = CriaPessoa('Henrique', 'Gonzaga');
console.log(p1);
p1.falar();
p1.comer();
p1.beber();

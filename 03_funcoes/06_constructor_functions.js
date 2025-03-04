function Pessoa(nome, sobrenome){
    // atributos ou metodos privados
    const ID = 123456;
    const metodoInterno = function(){

    };

    // atributos ou metodos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.nomeCompleto = function(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

const p1 = new Pessoa('Henrique', 'Gonzaga');

console.log(p1);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto());

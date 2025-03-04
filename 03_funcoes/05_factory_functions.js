function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        //getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto){
            return `${this.nome} está ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        //getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Henrique', 'Gonzaga', 1.87, 100);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.imc);
console.log(p1.fala('falando sobre JS'));
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);
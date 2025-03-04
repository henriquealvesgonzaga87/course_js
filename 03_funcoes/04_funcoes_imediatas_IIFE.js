(function (idade, peso, altura){
    
    const sobrenome = 'Gonzaga';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Henrique'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(37, 100, 1.87);

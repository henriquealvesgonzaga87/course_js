function  funcao(){
    let total = 0;
    for(argumento of arguments){
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);

function soma(a, b = 0, c = 4){
    //b = b || 0;
    console.log(a + b + c);
}
soma(2);

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}

conta('*', 1, 20, 30, 40, 50);

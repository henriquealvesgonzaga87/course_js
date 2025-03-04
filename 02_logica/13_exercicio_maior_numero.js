function maiorNumero(num1, num2){
    if (num1 > num2){
        return num1
    }

    return num2;
}

let num1 = 1;
let num2 = 2;

const verificaNumero = maiorNumero(num1, num2);

console.log(verificaNumero);

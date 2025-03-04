const frutas = ['Pera', 'Maçã', 'Uva'];

for (let fruta in frutas) {
    console.log(frutas[fruta]);
}

const pessoa = {
    nome: "Henrique",
    sobrenome: "Gonzaga",
    idade: 37
}

console.log("-------------------");

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }



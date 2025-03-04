const nomes = ['Henrique', 'Maria', 'Bruno'];

for (let i in nomes){
    console.log(nomes[i]);
}

console.log('###');

for (let valor of nomes){
    console.log(valor);
}

console.log('###');

nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
})

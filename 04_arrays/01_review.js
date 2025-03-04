const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = [...nomes] // faz cuma copia

const removido = novo.pop();

console.log(nomes);
console.log(novo, removido);
console.log(nomes.length, novo.length);

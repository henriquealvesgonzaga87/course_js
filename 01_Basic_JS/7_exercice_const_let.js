const nome = "Henrique";
const sobrenome = "Gonzaga";
const idade = 37;
const peso = 95;
const alturaEmM = 1.87;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / alturaEmM**2;
anoNascimento = 2025 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM}m de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);
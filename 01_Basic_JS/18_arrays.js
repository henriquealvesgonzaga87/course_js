const alunos = ["Luiz", "Maria", "Joao"];
console.log(alunos);
console.log(alunos[0]);

alunos[0] = "Eduardo";
console.log(alunos);

alunos[3] = "Luiza";
console.log(alunos);

alunos[alunos.length] = "Henrique";
console.log(alunos);

alunos.push("Jose");
console.log(alunos);

alunos.unshift("Fabio"); // adiciona no indice 0
console.log(alunos);

alunos.pop();
console.log(alunos);

alunos.shift(); // remove o primeiro elemento
console.log(alunos);

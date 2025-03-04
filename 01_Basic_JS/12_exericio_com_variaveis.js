let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let varaux = varA;

varA = varB;
varB = varC;
varC = varaux;

console.log(varA, varB, varC);
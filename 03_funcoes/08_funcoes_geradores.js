function* geradora1(){
    //codigo qualquer ...
    yield 'valor1';

    //cdigo qualquer ...
    yield 'valor2';

    //codigo qualquer ...
    yield 'valor3';
}

const g1 = geradora1();
for (let valor of g1){
    console.log(valor);
}

function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++
    }
}
const g2 = geradora2();
console.log(g2.next().value);

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}

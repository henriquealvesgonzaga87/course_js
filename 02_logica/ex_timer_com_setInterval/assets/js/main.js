function relogio(){
    function criaHoraDosSegundos(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    
    let segundos = 0;
    let timer;
    
    function iniciaRelogio(){
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000)
    }
    
    document.addEventListener('click', function(e){
        const el = e.target;
        
        if(el.classList.contains('zerar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    
        if(el.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
    
        if(el.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
    });
}

relogio();

// const relogio = document.querySelector('.relogio');
// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const zerar = document.querySelector('.zerar');

// iniciar.addEventListener('click', function(event){
//     relogio.classList.remove('pausado');
//     iniciaRelogio();
// });

// pausar.addEventListener('click', function(event){
//     relogio.classList.add('pausado');
//     clearInterval(timer);
// });

// zerar.addEventListener('click', function(event){
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00';
//     segundos = 0;
// });

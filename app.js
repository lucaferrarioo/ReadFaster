const wordctx = document.querySelector('.word');

let file;
let chapter;
let defaultSleep = 1000;
let userSleep;
let i = 0;
let title;

const fileInput = document.querySelector('#selectBook');

file = ['ciao', 'se', 'stai', 'leggendo', 'vuol', 'dire', 'che', 'funziona', ':)'];

(function loop() {
    wordctx.innerHTML = file[i]; //inserisco l'item dell'array dalla prima posizione
    if (++i < file.length)  //aumento la i e se esiste un item dell'array con quell'indice fa ripartire il loop
    {    
        setTimeout(loop, defaultSleep);
    }
})();

function openDialog(){
    let input = document.createElement('input');
    input.type = 'file';
}

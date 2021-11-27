const wordctx = document.querySelector('.word');

let file;
let chapter;
let defaultSleep = 200;
let userSleep;
let i = 0;
let title;
let book;

let getFile = document.getElementById('files');
let start = document.querySelector('#startBtn');

wordctx.innerHTML = "Select a book clicking on the icon,<br> then press the below button";
file = getFile.files[0];

start.addEventListener('click', function(){
    if(getFile.value != ""){
        let reader = new FileReader();
        
        reader.addEventListener("load", () => {
            // this will then display a text file
            book = reader.result;
        }, false);

        book = "È un mondo difficile, E vita intensa, Felicità a momenti, E futuro incerto. Il fuoco e l'acqua, Con certa calma Serata di vento."

        console.log(book);
        chapter = book.split(' ');
    }
    else{
        alert('Insert File');
    }
    
    loop();
})

function loop() {
    wordctx.innerHTML = chapter[i]; //inserisco l'item dell'array dalla prima posizione
    if (++i < chapter.length)  //aumento la i e se esiste un item dell'array con quell'indice fa ripartire il loop
    {    
        setTimeout(loop, defaultSleep);
    }
};


//GSAP

let cursor = document.querySelector('.cursor');

gsap.set(cursor ,{xPercent: -50, yPercent: -50});

window.addEventListener('mousemove', e => {
    gsap.to(cursor, 0.1, {x: e.clientX, y: e.clientY});
})
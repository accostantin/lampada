let lamp = document.getElementById('lamp')
let btnOn = document.getElementById('on')
let btnOff = document.getElementById('off')

btnOn.addEventListener('click', () => {
    lamp.src = "./img/ligada.png";
});

btnOff.addEventListener('click', () => {
    lamp.src = "./img/desligada.png";
});
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 7000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 7000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

function ajustarNomeCientifico() {
    const nomesCientificos = document.querySelectorAll('.nome-cientifico');
    nomesCientificos.forEach(nome => {
        if (window.innerWidth <= 768) {
            const texto = nome.textContent;
            const semAno = texto.replace(/, \d{4}\)/, ')'); // Remove o ano
            const semDescobridor = semAno.replace(/\s\w+\)$/, ')'); // Remove o nome do descobridor
            const semParenteses = semDescobridor.replace(/[()]/g, ''); // Remove os parênteses
            nome.textContent = semParenteses;
        }
    });
}

window.addEventListener('resize', ajustarNomeCientifico);
window.addEventListener('load', ajustarNomeCientifico);

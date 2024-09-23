function toggleSidebar() {
    const sidebar = document.querySelector('#barra-lateral');
    if (sidebar) {
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        } else {
            sidebar.classList.add('active');
        }
    }
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const barra_navegacao = document.querySelector('#barra-navegacao');
    const carroseldeimagens = document.querySelector('#carroseldeimagens');
    const menu = document.querySelector('#menu-icon');

    const itens_stickys = [header, barra_navegacao, carroseldeimagens, menu];
    
    const threshold = window.innerHeight * 0.21; // 21vh em pixels

    window.addEventListener('scroll', () => {
        if (window.scrollY > threshold) {
            itens_stickys.forEach(i => {
                if (i) i.classList.add('sticky');
            });
        } else if (window.scrollY <= window.innerHeight * 0.21) {
            itens_stickys.forEach(i => {
                if (i) i.classList.remove('sticky');
            });
        }
    });
});

function esconderElementos() {
    const elementos_desktop = document.querySelectorAll('.esconderNoDesktop');
    elementos_desktop.forEach(elemento => {
        const isSticky = elemento.classList.contains('sticky');
        if (window.innerWidth > 1000 && !isSticky) {
            elemento.style.position = 'absolute';
            elemento.style.left = '-999px';
            elemento.style.top = '-999px';
        } else {
            elemento.style.position = '';
            elemento.style.left = '';
            elemento.style.top = '';
        }
    });

    const elementos_mobile = document.querySelectorAll('.esconderNoMobile');
    elementos_mobile.forEach(elemento => {
        const isSticky = elemento.classList.contains('sticky');
        if (window.innerWidth < 1000 && !isSticky) {
            elemento.style.position = 'absolute';
            elemento.style.left = '-999px';
            elemento.style.top = '-999px';
        } else {
            elemento.style.position = '';
            elemento.style.left = '';
            elemento.style.top = '';
        }
    });
}

// Chama a função ao carregar a página e ao redimensionar a janela
window.addEventListener('load', esconderElementos);
window.addEventListener('resize', esconderElementos);
window.addEventListener('scroll', esconderElementos);

document.addEventListener("DOMContentLoaded", function() {
    // Obtém o nome da página atual
    const path = window.location.pathname.split("/").pop();
    console.log("Nome da página atual (path):", path);  // Debug: Exibe o nome da página atual

    // Seleciona todos os links da barra de navegação
    const links = document.querySelectorAll('nav a');
    console.log("Número de links encontrados:", links.length);  // Debug: Exibe o número de links encontrados

    // Percorre cada link e compara com a página atual
    links.forEach(link => {
        const href = link.getAttribute('href').split("/").pop();
        console.log("Link href:", href);  // Debug: Exibe o href de cada link

        // Verifica se o href corresponde ao nome da página atual
        if (href !== "#" && href === path) {
            console.log("Página correspondente encontrada:", href);  // Debug: Exibe qual link corresponde à página atual
            link.classList.add('atual');  // Adiciona a classe 'active' ao link correspondente
        }
    });
});

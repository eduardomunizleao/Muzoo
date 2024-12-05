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
    const menu = document.querySelector('#menu-icon');
    
    const threshold = window.innerHeight * 0.18; // 21vh em pixels

    window.addEventListener('scroll', () => {
        if (window.scrollY > threshold) {
           menu.classList.add('sticky');
        } else if (window.scrollY <= (window.innerHeight * 0.8)) {
            menu.classList.remove('sticky');
        }
    });
});


function esconderElementos() {
    const elementos_mobile = document.querySelectorAll('.esconderNoMobile');
    elementos_mobile.forEach(elemento => {
        const isSticky = elemento.classList.contains('sticky');
        if (window.innerWidth < 600 && !isSticky) {
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

document.addEventListener("DOMContentLoaded", function() {
    // Obtém o nome da página atual
    const path = window.location.pathname.split("/").pop();

    // Seleciona todos os links da barra de navegação
    const links = document.querySelectorAll('#barra-lateral a');

    let currentLink = null;

    // Identifica o link da página atual
    links.forEach(link => {
        const href = link.getAttribute('href').split("/").pop();

        if (href === path) {
            link.classList.add('atual'); // Adiciona a classe 'atual' ao link correspondente
            link.setAttribute('data-current', 'true'); // Marca o link como o atual
            currentLink = link; // Armazena uma referência ao link atual
        }
    });

    // Adiciona eventos de hover aos links
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // Remove temporariamente o estilo do link atual
            if (currentLink) {
                currentLink.classList.remove('atual');
            }
            // Aplica o estilo ao link em hover
            link.classList.add('atual');
        });

        link.addEventListener('mouseleave', () => {
            // Remove o estilo do link hover
            link.classList.remove('atual');
            // Restaura o estilo ao link da página atual
            if (currentLink) {
                currentLink.classList.add('atual');
            }
        });
    });
});

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
            link.classList.add('exibida');  // Adiciona a classe 'active' ao link correspondente
        }
    });
});


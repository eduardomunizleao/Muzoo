document.addEventListener('DOMContentLoaded', function() {
    // Dados das espécies
    const especies = [
        {
            nome: "Lobo-guará",
            descricao: "O Guardião do Cerrado, Uma Espécie Rara e Magnífica em Perigo de Extinção",
            imagem: "../media/imagens/animal-especifico/mamiferos/Chrysocyon brachyurus/loboguaravidareal.jpg",
            href: "pagina-animais/mamiferos/lobo-guara.html",
            icone: "fas fa-paw"
        },
        {
            nome: "Tucano-açu",
            descricao: "A Bela Ave do Cerrado, Conhecida por Sua Colorida Plumagem e Bico Imponente",
            imagem: "../media/imagens/animal-especifico/aves/Ramphastos toco/tucano-quadrado.jpg",
            href: "pagina-animais/aves/tucano.html",
            icone: "fas fa-crow"
        },
        {
            nome: "Sapo-cururu",
            descricao: "O Habitante das Águas Doce, Conhecido por Seu Som Inconfundível e Grande Tamanho",
            imagem: "../media/imagens/animal-especifico/anfibios/Rhinella sp/sapo-cururu.jpeg",
            href: "pagina-animais/anfibios/sapo-cururu.html",
            icone: "fas fa-frog"
        },
        {
            nome: "Lontra",
            descricao: "O Mestre das Águas, Ágil e Inteligente, Uma Espécie Fascinante e Protegida",
            imagem: "../media/imagens/animal-especifico/mamiferos/Lontra longicaudis/Lontra longicaudis.jpg",
            href: "pagina-animais/mamiferos/lontra.html",
            icone: "fa-solid fa-otter"
        },
        {
            nome: "Tilápia-do-Nilo",
            descricao: "Uma das Espécies de Peixe Mais Conhecidas do Mundo, Importante para a Pesca Comercial",
            imagem: "../media/imagens/animal-especifico/peixes/Oreochromis niloticus/tilapia_do_nilo.jpg",
            href: "pagina-animais/peixes/tilapia-do-nilo.html",
            icone: "fas fa-fish"
        },
        {
            nome: "Beija-flor-tesoura",
            descricao: "O Pequeno Aviador do Cerrado, Conhecido pela Sua Agilidade e Bico Longo",
            imagem: "../media/imagens/animal-especifico/aves/eupetomena macroura/beija-flor.jpg",
            href: "pagina-animais/aves/beija-flor.html",
            icone: "fa-solid fa-dove"
        }
    ];

    // Dados dos testemunhos
    const testemunhos = [
        {
            nome: "Maria Silva",
            texto: "Uma experiência incrível! Aprendi muito sobre a importância da conservação.",
            data: "10/03/2024",
            icone: "fas fa-user-graduate"
        },
        {
            nome: "João Santos",
            texto: "As exposições são fascinantes e muito bem organizadas.",
            data: "15/03/2024",
            icone: "fas fa-user-tie"
        }
    ];

    // Dados dos mitos e verdades
    const mitosVerdades = [
        {
            titulo: "Mito",
            texto: "A taxidermia machuca os animais",
            explicacao: "A taxidermia só é realizada em animais que já morreram por causas naturais.",
            icone: "fas fa-times"
        },
        {
            titulo: "Verdade",
            texto: "A taxidermia ajuda na pesquisa científica",
            explicacao: "Os espécimes preservados são fundamentais para estudos científicos.",
            icone: "fas fa-check"
        }
    ];

    // Função para criar cards de espécies
    function criarGaleriaEspecies() {
        const galeria = document.getElementById('galeriaEspecies');
        especies.forEach(especie => {
            const card = document.createElement('div');
            card.className = 'especieCard';
            card.innerHTML = `<a href="${especie.href}">
                <i class="${especie.icone} iconeDestaque"></i>
                <img src="${especie.imagem}" alt="${especie.nome}">
                <h3>${especie.nome}</h3>
                <p>${especie.descricao}</p></a>
            `;
            galeria.appendChild(card);
        });
    }

    // Função para criar carrossel de testemunhos
    function criarCarrosselTestemunhos() {
        const carrossel = document.getElementById('carrosselTestemunhos');
        testemunhos.forEach(testemunho => {
            const card = document.createElement('div');
            card.className = 'testemunhoCard';
            card.innerHTML = `
                <i class="${testemunho.icone} iconeDestaque"></i>
                <p>${testemunho.texto}</p>
                <h4>${testemunho.nome}</h4>
                <span>${testemunho.data}</span>
            `;
            carrossel.appendChild(card);
        });
    }

    // Função para criar seção de mitos e verdades
    function criarMitosVerdades() {
        const container = document.getElementById('mitosVerdades');
        mitosVerdades.forEach(item => {
            const card = document.createElement('div');
            card.className = 'mitoVerdadeCard';
            card.innerHTML = `
                <i class="${item.icone} iconeDestaque"></i>
                <h3>${item.titulo}</h3>
                <h4>${item.texto}</h4>
                <p>${item.explicacao}</p>
            `;
            container.appendChild(card);
        });
    }

    // Inicializar todas as seções
    criarGaleriaEspecies();
    criarCarrosselTestemunhos();
    criarMitosVerdades();

    // Controles do carrossel
    let slideAtual = 0;
    const slides = document.querySelectorAll('.testemunhoCard');
    const btnAnterior = document.getElementById('anterior');
    const btnProximo = document.getElementById('proximo');

    function atualizarCarrossel() {
        slides.forEach((slide, index) => {
            if (index === slideAtual) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    btnAnterior.addEventListener('click', () => {
        slideAtual = (slideAtual - 1 + slides.length) % slides.length;
        atualizarCarrossel();
    });

    btnProximo.addEventListener('click', () => {
        slideAtual = (slideAtual + 1) % slides.length;
        atualizarCarrossel();
    });

    // Inicializar carrossel
    atualizarCarrossel();
});
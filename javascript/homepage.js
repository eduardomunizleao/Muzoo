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

    // Dados dos mitos e verdades
    const mitosVerdades = [
        {
            titulo: "Verdade",
            texto: "A taxidermia ajuda na pesquisa científica",
            explicacao: "Os espécimes preservados são fundamentais para estudos científicos.",
            icone: "fas fa-check"
        },
        {
            titulo: "Verdade",
            texto: "A taxidermia é uma forma de arte",
            explicacao: "A taxidermia requer habilidades artísticas e técnicas para preservar a aparência natural dos animais.",
            icone: "fas fa-check"
        },
        {
            titulo: "Verdade",
            texto: "A taxidermia pode ajudar na educação",
            explicacao: "Espécimes taxidermizados são usados em museus e instituições educacionais para ensinar sobre a vida selvagem.",
            icone: "fas fa-check"
        },
        {
            titulo: "Mito",
            texto: "A taxidermia machuca os animais",
            explicacao: "A taxidermia só é realizada em animais que já morreram por causas naturais.",
            icone: "fas fa-times"
        },
        {
            titulo: "Mito",
            texto: "Taxidermistas usam animais em extinção",
            explicacao: "A taxidermia é regulada por leis que proíbem o uso de espécies ameaçadas.",
            icone: "fas fa-times"
        },
        {
            titulo: "Mito",
            texto: "Taxidermia é apenas para animais grandes",
            explicacao: "Qualquer animal, grande ou pequeno, pode ser preservado através da taxidermia.",
            icone: "fas fa-times"
        }
    ];

    // Função para criar cards de espécies
    function criarGaleriaEspecies() {
        const galeria = document.getElementById('galeriaEspecies');
        const galeriapai = document.getElementById('especies');
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
        const botao = document.createElement('a');
        botao.className = 'linkAnimais';
        botao.href = 'animais.html';
        botao.innerHTML = `
        <i class="fa-regular fa-eye"></i> Ver mais
        `;
        galeriapai.appendChild(botao);
    }
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
    criarMitosVerdades();
});
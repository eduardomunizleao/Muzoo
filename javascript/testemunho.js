const testemunhos = [
    {
        texto: "O serviço superou minhas expectativas. Estou verdadeiramente impressionada com os resultados!",
        nome: "Maria Silva",
        data: "15 de Março, 2024",
        estrelas: 5 // 5 estrelas
    },
    {
        texto: "Experiência excepcional do início ao fim. Altamente recomendado!",
        nome: "João Santos",
        data: "10 de Março, 2024",
        estrelas: 4 // 4 estrelas
    },
    {
        texto: "Equipe profissional, eficiente e incrivelmente prestativa.",
        nome: "Ana Oliveira",
        data: "5 de Março, 2024",
        estrelas: 5 // 5 estrelas
    }
];

class CarrosselTestemunhos {
    constructor() {
        this.slidesContainer = document.getElementById('slidesContainer');
        this.indicadoresContainer = document.getElementById('indicadores');
        this.btnAnterior = document.getElementById('btnAnterior');
        this.btnProximo = document.getElementById('btnProximo');
        this.slideAtual = 0;
        this.totalSlides = testemunhos.length;
        
        this.inicializar();
    }

    inicializar() {
        this.criarSlides();
        this.criarIndicadores();
        this.atualizarCarrossel();
        this.iniciarEventos();
        this.iniciarAutoPlay();
    }

    criarSlides() {
        testemunhos.forEach((testemunho, index) => {
            const slide = document.createElement('div');
            slide.className = 'testemunhoCard';
            
            // Gerar ícones de estrelas
            const estrelasHTML = Array.from({ length: 5 }, (_, i) => {
                return `<i class="fas fa-star ${i < testemunho.estrelas ? 'estrelaAtiva' : 'estrelaInativa'}"></i>`;
            }).join('');
    
            slide.innerHTML = `
                <div class="conteudoTestemunho">
                    <div class="avaliacaoTestemunho">
                        <span>${testemunho.estrelas} Estrela${testemunho.estrelas > 1 ? 's' : ''}</span>
                    </div>
                    <div class="iconeTestemunho">
                        ${estrelasHTML}
                    </div>
                    <p class="textoTestemunho">${testemunho.texto}</p>
                    <div class="autorTestemunho">
                        <h4 class="nomeAutor">${testemunho.nome}</h4>
                        <span class="dataTestemunho">${testemunho.data}</span>
                    </div>
                </div>
            `;
            this.slidesContainer.appendChild(slide);
        });
    }

    criarIndicadores() {
        for (let i = 0; i < this.totalSlides; i++) {
            const indicador = document.createElement('span');
            indicador.className = 'indicador';
            indicador.addEventListener('click', () => this.irParaSlide(i));
            this.indicadoresContainer.appendChild(indicador);
        }
    }

    atualizarCarrossel() {
        const slides = this.slidesContainer.querySelectorAll('.testemunhoCard');
        const indicadores = this.indicadoresContainer.querySelectorAll('.indicador');

        slides.forEach((slide, index) => {
            if (index === this.slideAtual) {
                slide.classList.add('ativo');
            } else {
                slide.classList.remove('ativo');
            }
        });

        indicadores.forEach((indicador, index) => {
            if (index === this.slideAtual) {
                indicador.classList.add('ativo');
            } else {
                indicador.classList.remove('ativo');
            }
        });
    }

    proximoSlide() {
        this.slideAtual = (this.slideAtual + 1) % this.totalSlides;
        this.atualizarCarrossel();
    }

    slideAnterior() {
        this.slideAtual = (this.slideAtual - 1 + this.totalSlides) % this.totalSlides;
        this.atualizarCarrossel();
    }

    irParaSlide(index) {
        this.slideAtual = index;
        this.atualizarCarrossel();
        this.resetarAutoPlay();
    }

    iniciarEventos() {
        this.btnProximo.addEventListener('click', () => {
            this.proximoSlide();
            this.resetarAutoPlay();
        });

        this.btnAnterior.addEventListener('click', () => {
            this.slideAnterior();
            this.resetarAutoPlay();
        });
    }

    iniciarAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.proximoSlide(), 5000);
    }

    resetarAutoPlay() {
        clearInterval(this.autoPlayInterval);
        this.iniciarAutoPlay();
    }
}

// Inicializar o carrossel quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new CarrosselTestemunhos();
});
document.addEventListener('DOMContentLoaded', () => {
    const informacoesClasses = {
        mamiferos: {
            titulo: 'Mamíferos',
            descricao: `
                <h3>Características Principais:</h3>
                <ul>
                    <li>Presença de glândulas mamárias</li>
                    <li>Corpo coberto por pelos</li>
                    <li>Endotermia (sangue quente)</li>
                    <li>Viviparidade na maioria das espécies</li>
                </ul>
                <h3>Exemplos Notáveis:</h3>
                <ul>
                    <li>Leões - Reis da savana africana</li>
                    <li>Baleias Azuis - Maior animal que já existiu</li>
                    <li>Morcegos - Únicos mamíferos com voo verdadeiro</li>
                </ul>
            `
        },
        aves: {
            titulo: 'Aves',
            descricao: `
                <h3>Características Principais:</h3>
                <ul>
                    <li>Corpo coberto por penas</li>
                    <li>Bico córneo</li>
                    <li>Ossos pneumáticos</li>
                    <li>Endotermia</li>
                </ul>
                <h3>Exemplos Notáveis:</h3>
                <ul>
                    <li>Condor Andino - Maior ave voadora</li>
                    <li>Beija-flor - Menor ave do mundo</li>
                    <li>Pinguim Imperador - Ave adaptada ao frio extremo</li>
                </ul>
            `
        },
        peixes: {
            titulo: 'Peixes',
            descricao: `
                <h3>Características Principais:</h3>
                <ul>
                    <li>Respiração branquial</li>
                    <li>Nadadeiras</li>
                    <li>Linha lateral</li>
                    <li>Ectotermia</li>
                </ul>
                <h3>Exemplos Notáveis:</h3>
                <ul>
                    <li>Tubarão Branco - Predador apex dos oceanos</li>
                    <li>Peixe-lua - Maior peixe ósseo</li>
                    <li>Cavalo-marinho - Único peixe que nada na vertical</li>
                </ul>
            `
        },
        anfibios: {
            titulo: 'Anfíbios',
            descricao: `
                <h3>Características Principais:</h3>
                <ul>
                    <li>Pele permeável e úmida</li>
                    <li>Metamorfose</li>
                    <li>Vida dupla (aquática/terrestre)</li>
                    <li>Ectotermia</li>
                </ul>
                <h3>Exemplos Notáveis:</h3>
                <ul>
                    <li>Sapo-cururu - Maior sapo da América do Sul</li>
                    <li>Salamandra-gigante - Maior anfíbio do mundo</li>
                    <li>Perereca - Especialista em escalada</li>
                </ul>
            `
        },
        repteis: {
            titulo: 'Répteis',
            descricao: `
                <h3>Características Principais:</h3>
                <ul>
                    <li>Pele coberta por escamas</li>
                    <li>Ectotermia</li>
                    <li>Ovos com casca</li>
                    <li>Pulmões bem desenvolvidos</li>
                </ul>
                <h3>Exemplos Notáveis:</h3>
                <ul>
                    <li>Tartaruga-gigante - Pode viver mais de 100 anos</li>
                    <li>Cobra-real - Maior serpente venenosa</li>
                    <li>Dragão-de-komodo - Maior lagarto do mundo</li>
                </ul>
            `
        }
    };

    const modal = document.getElementById('modalDetalhes');
    const tituloModal = document.getElementById('tituloModal');
    const conteudoDetalhado = document.getElementById('conteudoDetalhado');
    const fecharModal = document.getElementById('fecharModal');

    document.querySelectorAll('button.botaoExplorar').forEach(botao => {
        botao.addEventListener('click', () => {
            const classe = botao.getAttribute('data-classe');
            const info = informacoesClasses[classe];
            
            tituloModal.textContent = info.titulo;
            conteudoDetalhado.innerHTML = info.descricao;
            modal.style.display = 'block';

            // Adiciona animação de entrada
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.opacity = '1';
                modal.style.transition = 'opacity 0.3s ease-in-out';
            }, 10);
        });
    });

    fecharModal.addEventListener('click', () => {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cartoesAnimais = document.querySelectorAll('div.cartaoAnimal');
    const descricaoSaibaMais = document.querySelector('p#descricaoSaibaMais');
    const tituloSaibaMais = document.querySelector('h2#tituloSaibaMais');
    const secaoSaibaMais = document.querySelector('section#secaoSaibaMais');

    const informacoesCategorias = {
        mamiferos: {
            titulo: 'Mamíferos Fascinantes',
            descricao: 'Explore nossa extraordinária coleção de mamíferos preservados, desde pequenos roedores até grandes felinos. Cada espécime conta uma história única sobre a evolução e adaptação destes incríveis animais.'
        },
        aves: {
            titulo: 'Mundo das Aves',
            descricao: 'Descubra a diversidade das aves em nossa coleção, apresentando espécimes raros e exóticos. Observe de perto as características únicas que permitem o voo e os padrões de plumagem deslumbrantes.'
        },
        peixes: {
            titulo: 'Vida Aquática',
            descricao: 'Mergulhe no mundo dos peixes e conheça espécies de água doce e salgada em nossa exposição. Nossa coleção apresenta a incrível diversidade de formas e adaptações que evoluíram nas águas do planeta.'
        },
        anfibios: {
            titulo: 'Anfíbios Únicos',
            descricao: 'Conheça nossa coleção de anfíbios e suas adaptações extraordinárias para vida na água e terra. Descubra como estes fascinantes animais desenvolveram características que os permitem prosperar em diferentes ambientes.'
        },
        repteis: {
            titulo: 'Reino dos Répteis',
            descricao: 'Explore nossa coleção de répteis e descubra as características únicas destes fascinantes animais. De escamas a carapaças, cada espécime demonstra a incrível diversidade deste grupo ancestral.'
        }
    };

    cartoesAnimais.forEach(cartao => {
        cartao.addEventListener('click', () => {
            const categoria = cartao.dataset.categoria;
            const info = informacoesCategorias[categoria];
            
            // Adiciona classe para iniciar animação
            secaoSaibaMais.classList.add('atualizando');
            
            // Animação de fade out
            tituloSaibaMais.style.opacity = '0';
            descricaoSaibaMais.style.opacity = '0';
            
            setTimeout(() => {
                tituloSaibaMais.textContent = info.titulo;
                descricaoSaibaMais.textContent = info.descricao;
                
                // Animação de fade in
                tituloSaibaMais.style.opacity = '1';
                descricaoSaibaMais.style.opacity = '1';
                
                // Remove classe após animação
                setTimeout(() => {
                    secaoSaibaMais.classList.remove('atualizando');
                }, 300);
            }, 300);
        });

        // Adiciona efeito de hover com sombra
        cartao.addEventListener('mouseenter', () => {
            cartao.style.transform = 'translateY(-10px)';
        });

        cartao.addEventListener('mouseleave', () => {
            cartao.style.transform = 'translateY(0)';
        });
    });
});
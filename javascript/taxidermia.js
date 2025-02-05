const timelineData = [
  {
      era: "Antigo Egito (3000 a.C.)",
      description: "Os egípcios desenvolveram as primeiras técnicas de preservação animal, principalmente para rituais religiosos e oferendas aos deuses. Muitos animais sagrados eram mumificados usando técnicas similares às usadas em humanos."
  },
  {
      era: "Grécia e Roma Antigas (500 a.C. - 500 d.C.)",
      description: "Embora menos documentada, a preservação de partes de animais, como peles e ossos, era utilizada em práticas artísticas e religiosas."
  },
  {
      era: "Idade Média (500-1500 d.C.)",
      description: "A taxidermia evolui como forma de preservar troféus de caça. Nobres e caçadores começam a desenvolver técnicas mais sofisticadas para preservar suas conquistas, exibindo-as em salões e castelos."
  },
  {
      era: "Renascimento (1500-1700)",
      description: "Com o avanço da ciência e da exploração, a taxidermia ganhou importância como ferramenta científica. Naturalistas e exploradores começaram a preservar espécimes para estudo e exibição em gabinetes de curiosidades."
  },
  {
      era: "Século XVIII (1700-1800)",
      description: "A taxidermia tornou-se uma disciplina reconhecida, com técnicas mais refinadas desenvolvidas para fins científicos e educacionais. Museus de história natural começaram a exibir animais preservados."
  },
  {
      era: "Era Vitoriana (1837-1901)",
      description: "A taxidermia atingiu o auge da popularidade na Era Vitoriana, com uma combinação de ciência, arte e decoração. Animais montados tornaram-se itens de moda em lares e museus."
  },
  {
      era: "Século XX (1900-2000)",
      description: "Com o avanço da conservação e das preocupações ambientais, a taxidermia passou a focar na educação e preservação da biodiversidade. Técnicas mais éticas e realistas foram desenvolvidas."
  },
  {
      era: "Século XXI (2000-presente)",
      description: "A taxidermia moderna combina arte, ciência e ética, com foco em práticas sustentáveis. Artistas contemporâneos utilizam a taxidermia como forma de expressão, enquanto museus continuam a usá-la para educação ambiental."
  }
];

function createTimelineItems() {
  const timelineContainer = document.getElementById('timeline-items');
  
  timelineData.forEach(item => {
      const timelineItem = document.createElement('div');
      timelineItem.className = 'timeline-item';
      
      const timelineDot = document.createElement('div');
      timelineDot.className = 'timeline-dot';
      
      const timelineContent = document.createElement('div');
      timelineContent.className = 'timeline-content';
      
      const era = document.createElement('h3');
      era.className = 'timeline-era';
      era.textContent = item.era;
      
      const description = document.createElement('p');
      description.className = 'timeline-description';
      description.textContent = item.description;
      
      timelineContent.appendChild(era);
      timelineContent.appendChild(description);
      
      timelineItem.appendChild(timelineDot);
      timelineItem.appendChild(timelineContent);
      
      timelineContainer.appendChild(timelineItem);
  });
}

document.addEventListener('DOMContentLoaded', createTimelineItems);

// Fun Facts Data
const curiosidades = [
  {
      numero: "01",
      titulo: "Gigante Preservado",
      texto: "O maior animal taxidermizado é um elefante-africano de 4 metros de altura no Smithsonian Museum, pesando 8 toneladas. O processo levou 16 meses para ser concluído!"
  },
  {
      numero: "02",
      titulo: "Supervivente do Titanic",
      texto: "O único animal taxidermizado que sobreviveu ao naufrágio do Titanic é um papagaio-da-carolina, agora exposto no Maritime Museum of the Atlantic."
  },
  {
      numero: "03",
      titulo: "Taxidermia Radical",
      texto: "Artistas modernos criam 'rogue taxidermy' - animais mitológicos como unicórnios e dragões, usando partes reais de diferentes espécies."
  },
  {
      numero: "04",
      titulo: "Recorde de Longevidade",
      texto: "O alce taxidermizado mais antigo (1696) está no Castelo de Gripsholm, Suécia - ainda mantém seus pelos originais após 328 anos!"
  },
  {
      numero: "05",
      titulo: "Técnica Extrema para Peixes",
      texto: "Para preservar peixes abissais que se desintegram na superfície, taxidermistas usam resinas especiais injetadas diretamente no corpo do animal ainda no navio."
  },
  {
      numero: "06",
      titulo: "Faraó das Aves",
      texto: "O pássaro Huia da Nova Zelândia, extinto em 1907, tem skins taxidermizadas valendo até US$ 50.000 no mercado negro de colecionadores."
  },
  {
      numero: "07",
      titulo: "Múmia Moderna",
      texto: "O cachorro de estimação de Walt Disney, Lady, foi taxidermizado em 1937 e serviu de modelo para animações clássicas da Disney."
  },
  {
      numero: "08",
      titulo: "Operação Secreta",
      texto: "Museus usam micro-câmeras endoscópicas para taxidermizar animais ocos (como polvos) sem incisões visíveis."
  }
];

document.addEventListener('DOMContentLoaded', function() {
  const itensGaleria = [
      {
          etapa: 'Etapa 1',
          imagem: '../media/imagens/taxidermia/preparacao.jpeg',
          descricao: 'Preparação Inicial'
      },
      {
          etapa: 'Etapa 2',
          imagem: '../media/imagens/taxidermia/preenchimento.jpeg',
          descricao: 'Processo de Preservação'
      },
      {
          etapa: 'Etapa 3',
          imagem: '../media/imagens/taxidermia/acabamento.jpeg',
          descricao: 'Resultado Final'
      }
  ];

  const galeriaContainer = document.getElementById('galeriaImagens');

  itensGaleria.forEach(item => {
      const itemGaleria = document.createElement('div');
      itemGaleria.className = 'itemGaleria';

      itemGaleria.innerHTML = `
          <div class="containerImagem">
              <img class="imagemGaleria" 
                   src="${item.imagem}" 
                   alt="${item.descricao}">
              <div class="overlayGaleria">
                  <div class="textoOverlay">${item.descricao}</div>
              </div>
          </div>
          <div class="protuberanciaEtapa">
              <span class="textoEtapa">${item.etapa}</span>
          </div>
      `;

      galeriaContainer.appendChild(itemGaleria);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const processos = [
      { id: 'preparacao', titulo: '1. Preparação' },
      { id: 'preservacao', titulo: '2. Preservação' },
      { id: 'estrutura', titulo: '3. Estrutura' },
      { id: 'montagem', titulo: '4. Montagem' },
      { id: 'acabamento', titulo: '5. Acabamento' },
      { id: 'tecnicas', titulo: '6. Técnicas' },
      { id: 'orgaos', titulo: '7. Órgãos' },
      { id: 'manutencao', titulo: '8. Manutenção' },
      { id: 'inovacoes', titulo: '9. Inovações' },
      { id: 'aspectos', titulo: '10. Aspectos Legais' }
  ];

  const listaProcessos = document.getElementById('listaProcessos');
  
  // Criar navegação
  processos.forEach(processo => {
      const li = document.createElement('li');
      li.className = 'itemProcesso';
      li.dataset.processo = processo.id;
      li.textContent = processo.titulo;
      li.addEventListener('click', () => mostrarProcesso(processo.id));
      listaProcessos.appendChild(li);
  });

  function mostrarProcesso(id) {
      // Atualizar navegação
      document.querySelectorAll('.itemProcesso').forEach(item => {
          item.classList.remove('ativo');
      });
      document.querySelector(`[data-processo="${id}"]`).classList.add('ativo');

      // Atualizar conteúdo
      document.querySelectorAll('.processo').forEach(processo => {
          processo.classList.remove('ativo');
      });
      document.getElementById(id).classList.add('ativo');
  }

  // Mostrar primeiro processo por padrão
  mostrarProcesso('preparacao');
});



// Populate Fun Facts

function criarCuriosidades() {
  const gridCuriosidades = document.getElementById('gridCuriosidades');
  
  curiosidades.forEach(curiosidade => {
      const itemCuriosidade = document.createElement('div');
      itemCuriosidade.className = 'itemCuriosidade';
      
      const icone = document.createElement('div');
      icone.className = 'iconeCuriosidade';
      
      const numeroSpan = document.createElement('span');
      numeroSpan.textContent = curiosidade.numero;
      icone.appendChild(numeroSpan);
      
      const titulo = document.createElement('h2');
      titulo.className = 'tituloCuriosidade';
      titulo.textContent = curiosidade.titulo;
      
      const texto = document.createElement('p');
      texto.className = 'textoCuriosidade';
      texto.textContent = curiosidade.texto;
      
      itemCuriosidade.appendChild(icone);
      itemCuriosidade.appendChild(titulo);
      itemCuriosidade.appendChild(texto);
      
      gridCuriosidades.appendChild(itemCuriosidade);
  });
}

// Inicializar as curiosidades quando a página carregar
document.addEventListener('DOMContentLoaded', criarCuriosidades);


// Timeline Data
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


// Techniques Data
const techniquesData = [
  {
    title: "Preparação Inicial",
    steps: [
      "Documentação detalhada do espécime",
      "Medições e fotografias",
      "Avaliação do estado de conservação",
      "Planejamento da pose final"
    ]
  },
  {
    title: "Preservação da Pele",
    steps: [
      "Remoção cuidadosa da pele",
      "Limpeza e tratamento",
      "Aplicação de conservantes",
      "Curtimento específico"
    ]
  },
  {
    title: "Modelagem",
    steps: [
      "Criação de molde anatômico",
      "Escultura da forma corporal",
      "Ajustes de proporção",
      "Detalhamento muscular"
    ]
  },
  {
    title: "Montagem Final",
    steps: [
      "Posicionamento da pele",
      "Ajustes de expressão",
      "Acabamentos detalhados",
      "Controle de qualidade"
    ]
  }
];

// Fun Facts Data
const factsData = [
  "O maior animal taxidermizado é uma baleia azul de 28 metros exibida no Museu de História Natural de Londres.",
  "A taxidermia moderna utiliza tecnologias como escaneamento e impressão 3D para recriar partes danificadas com precisão.",
  "O dodô, ave extinta no século XVII, é conhecido hoje principalmente através de espécimes taxidermizados.",
  "Museus como o Smithsonian mantêm milhões de espécimes preservados para pesquisa científica.",
  "A técnica mais antiga de taxidermia conhecida foi encontrada no Egito, datando de mais de 4.000 anos.",
  "Alguns museus mantêm coleções de animais taxidermizados que já estão extintos, como o tigre-da-tasmânia."
];

// Gallery Data
const galleryData = [
  {
    url: "https://images.unsplash.com/photo-1582487809094-520150fdb872?auto=format&fit=crop&q=80",
    title: "Preparação Inicial",
    description: "Documentação e planejamento"
  },
  {
    url: "https://images.unsplash.com/photo-1590419690008-905895e8fe0d?auto=format&fit=crop&q=80",
    title: "Processo de Preservação",
    description: "Tratamento e conservação"
  },
  {
    url: "https://images.unsplash.com/photo-1582487809094-520150fdb872?auto=format&fit=crop&q=80",
    title: "Resultado Final",
    description: "Montagem e acabamento"
  }
];

// Populate Timeline
const timelineContainer = document.getElementById('linha-do-tempo');
timelineData.forEach(period => {
  const periodElement = document.createElement('div');
  periodElement.className = 'linha-do-tempo-item';
  periodElement.innerHTML = `
    <h3>${period.era}</h3>
    <p>${period.description}</p>
  `;
  timelineContainer.appendChild(periodElement);
});

// Populate Techniques
const techniquesContainer = document.getElementById('tecnicas');
techniquesData.forEach(technique => {
  const techniqueElement = document.createElement('div');
  techniqueElement.className = 'card';
  techniqueElement.innerHTML = `
    <h3>${technique.title}</h3>
    <ul>
      ${technique.steps.map(step => `<li>${step}</li>`).join('')}
    </ul>
  `;
  techniquesContainer.appendChild(techniqueElement);
});

// Populate Fun Facts
const factsContainer = document.getElementById('curiosidades');
factsData.forEach(fact => {
  const factElement = document.createElement('div');
  factElement.className = 'curiosidade';
  factElement.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icone"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
    <p>${fact}</p>
  `;
  factsContainer.appendChild(factElement);
});

// Populate Gallery
const galleryContainer = document.getElementById('galeria');
galleryData.forEach(image => {
  const imageElement = document.createElement('div');
  imageElement.className = 'galeria-item';
  imageElement.innerHTML = `
    <img src="${image.url}" alt="${image.title}">
    <div class="galeria-overlay">
      <h3>${image.title}</h3>
      <p>${image.description}</p>
    </div>
  `;
  galleryContainer.appendChild(imageElement);
});
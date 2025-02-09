// Dados do FAQ
const faqDados = [
    {
        pergunta: "Qual o valor da entrada?",
        resposta: "O valor da entrada é combinado diretamente com o cliente, seja ele uma pessoa física, uma pessoa jurídica ou uma instituição de ensino. Entre em contato conosco para discutir as opções e condições específicas para sua visita."
    },
    {
        pergunta: "É permitido tirar fotos?",
        resposta: "Sim, é permitido fotografar tranquilamente."
    },
    {
        pergunta: "Preciso agendar com antecedência?",
        resposta: "Sim, recomendamos o agendamento com pelo menos 48 horas de antecedência para garantir sua visita."
    },
    {
        pergunta: "Tem estacionamento?",
        resposta: "Sim, contamos com estacionamento gratuito para visitantes."
    },
    {
        pergunta: "Posso levar comida?",
        resposta: "Sim, é permitido consumir alimentos dentro do museu."
    }
];

// Função para criar o FAQ
function criarFaq() {
    const listaFaq = document.getElementById('listaFaq');
    
    faqDados.forEach(item => {
        // Criar elementos
        const divPergunta = document.createElement('div');
        divPergunta.className = 'perguntaFaq';
        
        const botao = document.createElement('button');
        botao.textContent = item.pergunta;
        
        const divResposta = document.createElement('div');
        divResposta.className = 'respostaFaq';
        divResposta.textContent = item.resposta;
        
        // Adicionar evento de clique
        botao.addEventListener('click', () => {
            botao.classList.toggle('ativo');
            divResposta.classList.toggle('ativa');
        });
        
        // Montar estrutura
        divPergunta.appendChild(botao);
        divPergunta.appendChild(divResposta);
        listaFaq.appendChild(divPergunta);
    });
}

// Função para validar o formulário
function validarFormulario(evento) {
    evento.preventDefault();
    
    // Obter valores dos campos
    const nome = document.getElementById('campoNome').value;
    const email = document.getElementById('campoEmail').value;
    const telefone = document.getElementById('campoTelefone').value;
    const data = document.getElementById('campoData').value;
    
    // Validações básicas
    if (!nome || !email || !telefone || !data) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Validar formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }
    
    // Validar data
    const dataEscolhida = new Date(data);
    const hoje = new Date();
    if (dataEscolhida < hoje) {
        alert('Por favor, escolha uma data futura para sua visita.');
        return;
    }
    
    // Se tudo estiver ok, enviar o formulário
    alert('Solicitação enviada com sucesso! Entraremos em contato em breve.');
    evento.target.reset();
}

// Inicializar quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Criar FAQ
    criarFaq();
    
    // Adicionar validação ao formulário
    const formulario = document.getElementById('formularioAgendamento');
    formulario.addEventListener('submit', validarFormulario);
    
    // Máscara para telefone
    const campoTelefone = document.getElementById('campoTelefone');
    campoTelefone.addEventListener('input', (e) => {
        let valor = e.target.value.replace(/\D/g, '');
        if (valor.length > 11) valor = valor.slice(0, 11);
        
        if (valor.length > 2) {
            valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
        }
        if (valor.length > 9) {
            valor = `${valor.slice(0, 9)}-${valor.slice(9)}`;
        }
        
        e.target.value = valor;
    });
    
    // Definir data mínima para agendamento
    const campoData = document.getElementById('campoData');
    const hoje = new Date();
    const amanha = new Date(hoje);
    amanha.setDate(amanha.getDate() + 1);
    campoData.min = amanha.toISOString().split('T')[0];
});
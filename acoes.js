//TUDO FICA AQUI E VAI PRA DIV, TEM QUE FAZER O MAPEAMENTO E AS RESPOSTAS DAS PERGUNTAS

//criar o id do quiz para ser usado no html

const quizEl = document.getElementById("Quiz");
const perguntas = [
    { texto: "Você gosta de ficar sem camisa?", map: { Sim: 'Jacob', Não: 'Bella', Talvez: 'Edward' } },
    { texto: "Você gosta de suco de tomate?", map: { Sim: 'Edward', Não: 'Jacob', Talvez: 'Bella' } },
    { texto: "Você gosta de brilho e purpurina?", map: { Sim: 'Edward', Não: 'Jacob', Talvez: 'Bella' } },
    { texto: "Gosta de biologia?", map: { Sim: 'Bella', Não: 'Jacob', Talvez: 'Edward' } },
    { texto: "Gosta de estar sempre ao ar livre?", map: { Sim: 'Jacob', Não: 'Bella', Talvez: 'Edward' } },
    { texto: "Você se considera talarico?", map: { Sim: 'Jacob', Não: 'Edward', Talvez: 'Bella' } },
    { texto: "Gosta de plantar cacto?", map: { Sim: 'Bella', Não: 'Edward', Talvez: 'Jacob' } },
    { texto: "Se considera uma pessoa insegura?", map: { Sim: 'Bella', Não: 'Jacob', Talvez: 'Edward' } },
    { texto: "Você se sente diferente às vezes?", map: { Sim: 'Jacob', Não: 'Bella', Talvez: 'Edward' } },
    { texto: "Aprecia a literatura clássica?", map: { Sim: 'Edward', Não: 'Jacob', Talvez: 'Bella' } },
    { texto: "Pretende se manter casto até o casamento?", map: { Sim: 'Edward', Não: 'Bella', Talvez: 'Jacob' } },
    { texto: "Seu passatempo é caçar animais?", map: { Sim: 'Edward', Não: 'Bella', Talvez: 'Jacob' } },
];

let atual = 0; // Índice da pergunta atual
const votos = { Edward: 0, Bella: 0, Jacob: 0 }; // Objeto para contar os votos

function mostrarQuestionario() {
    const q = perguntas[atual];
    quizEl.innerHTML = `
        <h2>${q.texto}</h2>
        <button onclick="responder('Sim')">Sim</button>
        <button onclick="responder('Não')">Não</button>
        <button onclick="responder('Talvez')">Talvez</button>
    `;
}

// Corrigindo o nome da função para corresponder ao onclick no HTML
function responder(resposta) {
    const personagem = perguntas[atual].map[resposta];
    votos[personagem]++;
    atual++;

    if (atual < perguntas.length) {
        mostrarQuestionario();
    } else {
        visualizarResultado();
    }
}

function visualizarResultado() {
    let vencedor = "";
    let maior = -1;

    for (let nome in votos) {
        if (votos[nome] > maior) {
            maior = votos[nome];
            vencedor = nome;
        }
    }
    const imagens = {
        Edward: "edward.jpg",
        Bella: "bella.jpg",
        Jacob: "jacob.jpg"
    };

    quizEl.innerHTML = `
        <h2>Você é ${vencedor} do triângulo amoroso de Crepúsculo!</h2>
        <img src="${imagens[vencedor]}" alt="${vencedor}" style="width: 300px; border-radius: 10px;"/>
    `;
}

// Inicializar o quiz quando a página carregar
mostrarQuestionario();
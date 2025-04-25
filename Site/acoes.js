const quizEl = document.getElementById("Quiz");
const contadorEl = document.getElementById("contador");

const perguntas = [
  { texto: "Você é uma pessoa que tem a preferência de ficar<br>sem a parte de cima de suas vestimentas?", map: { Sim: 'Jacob', Não: 'Bella', Talvez: 'Edward' } },
  { texto: "Você é uma pessoa que é apreciador nato<br>de um delicioso suco de tomate?", map: { Sim: 'Edward', Não: 'Jacob', Talvez: 'Bella' } },
  { texto: "Você é alguém que tem um brilho tal qual uma purpurina?", map: { Sim: 'Edward', Não: 'Jacob', Talvez: 'Bella' } },
  { texto: "Você é alguém que gosta/gostava da<br>matéria de biologia na escola?", map: { Sim: 'Bella', Não: 'Jacob', Talvez: 'Edward' } },
  { texto: "Quando você tem um tempo sobrando,<br>gosta de longos passeios ao ar livre?", map: { Sim: 'Jacob', Não: 'Bella', Talvez: 'Edward' } },
  { texto: "Quando um amigo seu te apresenta a namorada dele,<br>você apresenta fortes tendencias a talarica-lo?", map: { Sim: 'Jacob', Não: 'Edward', Talvez: 'Bella' } },
  { texto: "Se você tivesse uma floricultura,<br>seu passa tempo favorito seria plantar cactos?", map: { Sim: 'Bella', Não: 'Edward', Talvez: 'Jacob' } },
  { texto: "Você infelizmente se considera uma pessoa insegura?", map: { Sim: 'Bella', Não: 'Jacob', Talvez: 'Edward' } },
  { texto: "Você se sente uma pessoa diferente das pessoas normais?", map: { Sim: 'Jacob', Não: 'Bella', Talvez: 'Edward' } },
  { texto: "Você é um grande apreciador de literaturas clássicas?", map: { Sim: 'Edward', Não: 'Jacob', Talvez: 'Bella' } },
  { texto: "Como você é uma pessoa muito santa,<br>você pensa em se manter casta/o até o seu casamento?", map: { Sim: 'Edward', Não: 'Bella', Talvez: 'Jacob' } },
  { texto: "Se o Ibama não existisse, o seu passa tempo<br>favorito bem provavelmente seria caçar animais?", map: { Sim: 'Edward', Não: 'Bella', Talvez: 'Jacob' } }
];

let atual = 0;
const votos = { Edward: 0, Bella: 0, Jacob: 0 };

function mostrarQuestionario() {
  if (atual < perguntas.length) {
    const q = perguntas[atual];
    quizEl.innerHTML = `
      <h3>${q.texto}</h3>
      <div class="botoes">
        <button onclick="responder('Sim')">✅ SIM ✅</button>
        <button onclick="responder('Talvez')">❓ TALVEZ ❓</button>
        <button onclick="responder('Não')">❎ NÃO ❎</button>
      </div>
    `;
    contadorEl.textContent = `${atual + 1}/${perguntas.length}`;
  } else {
    visualizarResultado();
  }
}

function responder(resposta) {
  const personagem = perguntas[atual].map[resposta];
  votos[personagem]++;
  atual++;
  mostrarQuestionario();
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

  // Salva o resultado no localStorage
  localStorage.setItem("personagemFinal", vencedor);

  // Redireciona para a página de resultado
  window.location.href = "Resultado.html";
  }

  const imagens = {
    Edward: "edward.jpg",
    Bella: "bella.jpg",
    Jacob: "jacob.jpg"
  };

mostrarQuestionario();

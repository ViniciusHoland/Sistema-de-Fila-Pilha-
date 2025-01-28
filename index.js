const apiBaseUrl = 'http://localhost:3000';


const botaoAdicionar = document.getElementById('adicionar')
const listaAtendentes = document.getElementById("lista-atendentes")

// Função para carregar registros do servidor
async function carregarRegistros() {
  const response = await fetch(`${apiBaseUrl}/registros`);
  const data = await response.json();
  listaAtendentes.innerHTML = ''; // Limpa a lista
  data.forEach((registro) => adicionarNaLista(registro.nome, registro.horario));
}

// Função para adicionar registro no servidor
async function adicionarRegistro(nome, horario) {
  await fetch(`${apiBaseUrl}/registros`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, horario }),
  });
  await carregarRegistros(); // Atualiza a lista
}

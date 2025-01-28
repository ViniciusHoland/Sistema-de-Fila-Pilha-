const apiBaseUrl = 'http://localhost:3000';


const botaoAdicionar = document.getElementById('adicionar')
const botaoDelete= document.getElementById('deletar')
const listaAtendentes = document.getElementById("lista-atendentes")

document.addEventListener('DOMContentLoaded', () => {
  carregarRegistros(); // Chama a função para carregar os dados
});



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

async function deletar() {
  await fetch(`${apiBaseUrl}/registros`, {
    method: 'Delete',
    headers: { 'Content-Type': 'application/json' }
  });
  await carregarRegistros(); // Atualiza a lista
}


function adicionarNaLista(nome,horario){

  const atendenteItem = document.createElement('div')
  atendenteItem.classList.add('atendente-item')

  atendenteItem.innerHTML = `
      <span>${nome}</span>
      <span class="hora">${horario}</span>
  `

  //adiciona no topo da lista
  listaAtendentes.prepend(atendenteItem)

}

botaoAdicionar.addEventListener('click', () => {

  const inputNome = document.getElementById('nome')
  const nomeAtendente = inputNome.value.trim()

  if(!nomeAtendente){
      alert('Por favor, insira nome do atendente')
      return
  }

  const dateAtual = new Date()
  const horaAtual = dateAtual.toLocaleTimeString('pt-br',{
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
  })

  adicionarRegistro(nomeAtendente, horaAtual)

  inputNome.value = ''

})

botaoDelete.addEventListener('click', () => {

      deletar()

})



const botaoAdicionar = document.getElementById('adicionar')
const listaAtendentes = document.getElementById("lista-atendentes")
const STORAGE_KEY = 'registroAtendentes'
const DATA_ATUAL_KEY = 'dataAtual'

function carregarRegistros(){
    const registroSalvos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    const dataSalva = localStorage.getItem(DATA_ATUAL_KEY)
    const dataAtual = new Date()
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

    const atendenteItem = document.createElement('div')
    atendenteItem.classList.add('atendente-item')

    atendenteItem.innerHTML = `
        <span>${nomeAtendente}</span>
        <span class="hora">${horaAtual}</span>
    `

    listaAtendentes.prepend(atendenteItem)

    inputNome.value = ''

})
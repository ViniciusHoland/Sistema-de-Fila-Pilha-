


const botaoAdicionar = document.getElementById('adicionar')
const listaAtendentes = document.getElementById("lista-atendentes")
const STORAGE_KEY = 'registroAtendentes'
const DATA_ATUAL_KEY = 'dataAtual'

function carregarRegistros(){
    const registroSalvos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    const dataSalva = localStorage.getItem(DATA_ATUAL_KEY)
    const dataAtual = new Date().toLocaleDateString()


    if(dataSalva !== dataAtual){
        localStorage.removeItem(STORAGE_KEY)
        localStorage.setItem(DATA_ATUAL_KEY,dataAtual)
        return []
    }

    registroSalvos.forEach((registro ) => adicionarNaLista(registro.nome, registro.horario))
    return registroSalvos


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

function salvarRegistros(registros){
    localStorage.setItem(STORAGE_KEY,JSON.stringify(registros))
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

    adicionarNaLista(nomeAtendente, horaAtual)

    registros.push({nome: nomeAtendente, horario: horaAtual})
    salvarRegistros(registros)

    inputNome.value = ''

})

let registros = carregarRegistros()
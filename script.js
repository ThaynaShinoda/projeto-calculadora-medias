const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado"> Aprovado </span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = Number(prompt("Digite a nota mínima: "))

let linhas = ''
form.addEventListener('submit', function(e) {
    e.preventDefault(); //Remove comportamento do formulário de quando ser submetido atualizar a tela

    adicionaLinha()

    atualizaTabela()
    
    atualizaMediaFinal()
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    //Verifica se o nome da atividade já está INCLUSO na array
    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(Number(inputNotaAtividade.value))

        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado: imgReprovado}</td>`
        linha += '</tr>'

        linhas += linha
    }
    

    

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function calculaMediaFinal() {
    let somaNotas = 0
    for(let c = 0; c < notas.length; c++) {
        somaNotas += notas[c]
    }
    return somaNotas / notas.length
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado:spanReprovado
    
}

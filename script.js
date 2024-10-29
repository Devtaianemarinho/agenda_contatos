let form = document.getElementById('form-agenda')
let nomes = []
let telefones = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

  adicionaLinha()
  atualizaTabela()

    
})

function adicionaLinha(){
    let inputNomeAgenda = document.getElementById('nome-agenda')
    let inputNumeroTelefone = document.getElementById('numero-telefone')

    let nomeformatado = capitalizeFirstLetter(inputNomeAgenda.value)

    if(nomes.includes(nomeformatado)){
      alert(`O nome ${nomeformatado} já foi inserido`)
      return
    }else{
      nomes.push(nomeformatado)
      telefones.push(inputNumeroTelefone.value)

      let linha = '<tr>'
      linha += `<td> ${nomeformatado} </td>`
      linha += `<td> ${inputNumeroTelefone.value} </td>`
      linha += '</tr>'

      linhas += linha
    }

    inputNomeAgenda.value =''
    inputNumeroTelefone.value =''
}

function capitalizeFirstLetter(name){
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

function atualizaTabela(){
  let corpoTabela = document.querySelector('tbody')
  corpoTabela.innerHTML = linhas
}



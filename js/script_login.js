const botao_login = document.querySelector("#botao_login")
// Seleciona todos os campos obrigatórios
const campos_required = document.querySelectorAll("input[required]")

campos_required.forEach(function (campo) {
  campo.addEventListener("input", function () {
    campo.style.border = ""
    return
  })
})
// Adiciona um ouvinte de evento de clique no botão
botao_login.addEventListener("click", function () {
  //event.preventDefault()
  // Verifica se algum campo obrigatório não foi preenchido
  let preenchido = true
  campos_required.forEach(function (campo) {
    if (campo.value.trim() === "") {
      campo.style.border = "2px solid red"
      preenchido = false
    }
  })
  // Se algum campo obrigatório não foi preenchido, exibe um alerta
  if (!preenchido) {
    alert("Por favor, preencha todos os campos obrigatórios.")
    return
  } else {
    campos_required.forEach(function (campo) {
      campo.style.border = ""
    })
    botao_login.disabled = false
    document.querySelector("#mensagem_ok").insertAdjacentHTML(
      "afterend",
      `<div class="card_ok">
      <span>
        LOGIN REALIZADO COM SUCESSO!  
      </span>
      </div>`
    )
    let mensagem = document.querySelector(".card_ok")
    setTimeout(() => {
      mensagem.style.display = "none"
      //campos input vaõa limpar depois dos segundos
      campos_required.forEach(function (campo) {
        campo.value = ""
        return
      })
    }, 6000)
  }
})

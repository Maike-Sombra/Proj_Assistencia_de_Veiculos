// Recupera o valor selecionado do select na URL
const url_params = new URLSearchParams(window.location.search)
const tipo_servico = url_params.get("tipo_servico")

// seleciona a opção com o valor do tipo de serviço
const select_servico = document.querySelector("#tipo_servico")
select_servico.value = tipo_servico

// Seleciona o botão de agendar
const botao_agendar = document.querySelector(".botao_agendar")
// Seleciona todos os campos obrigatórios
const campos_required = document.querySelectorAll("input[required]")
const select_required = document.querySelector("#tipo_servico")
const campos = document.querySelectorAll("input")
campos_required.forEach(function (campo) {
  campo.addEventListener("input", function () {
    campo.style.border = ""
    return
  })
})
select_required.addEventListener("change", function () {
  select_required.style.border = ""
})

// Adiciona um ouvinte de evento de clique no botão
botao_agendar.addEventListener("click", function () {
  event.preventDefault()
  // Verifica se algum campo obrigatório não foi preenchido
  let preenchido = true
  campos_required.forEach(function (campo) {
    if (campo.value.trim() === "") {
      campo.style.border = "2px solid red"
      preenchido = false
    }
  })

  if (select_required.value === "") {
    select_required.style.border = "2px solid red"
    preenchido = false
  }

  // Se algum campo obrigatório não foi preenchido, exibe um alerta
  if (!preenchido) {
    alert("Por favor, preencha todos os campos obrigatórios.")
    return
  } else {
    campos_required.forEach(function (campo) {
      campo.style.border = ""
    })
    select_required.style.border = ""

    botao_agendar.disabled = false
    document.querySelector("#mensagem_ok").insertAdjacentHTML(
      "afterend",
      `<div class="card_ok">
      <span>
        AGENDAMENTO REALIZADO COM SUCESSO!</br></br>
        Foram enviadas para o e-mail informado todas as
        informações do AGENDAMENTO de acordo com o tipo de serviço escolhido.
      </span>
      </div>`
    )
    let mensagem = document.querySelector(".card_ok")
    setTimeout(() => {
      //depois de 3 min os inputs ficarão vazios e o card de mensagem desaparecerá
      mensagem.style.display = "none"
      campos.forEach(function (campo) {
        campo.value = ""
        return
      })
    }, 180000)
  }
})

/* */

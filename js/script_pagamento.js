const valores_servicos = {
  manutencao_preventiva: " R$ 400,00",
  reparo_de_pecas: " R$ 800,00",
  alinhamento_e_balanceamento: " R$ 150,00",
  troca_de_oleo: " R$ 150,00",
  funilaria: " R$ 1.000,00",
  diagnostico_eletronico: " R$ 100,00",
  instalacao_acessorios: " R$ 300,00",
}
const select_servico = document.getElementById("tipo_servico")
const valor_input = document.getElementById("valor")
//funcao para carregar o valor de acordo com o serviço selecionado
function carrega_valor() {
  const tipo_servico_selected = select_servico.value
  const valor = valores_servicos[tipo_servico_selected]
  valor_input.value = valor
}
// se mudar a opcao o valor do tipo de serviço muda
select_servico.addEventListener("change", carrega_valor)

// Recupera o valor selecionado do select na URL
const url_params = new URLSearchParams(window.location.search)
const tipo_servico = url_params.get("tipo_servico")
//quando inicializado a pagina o valor do servico escolhido vai ser carregado
select_servico.value = tipo_servico
carrega_valor()

// Seleciona o botão de pagar
const botao_pagar = document.querySelector(".botao_pagar")
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
botao_pagar.addEventListener("click", function () {
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

    botao_pagar.disabled = false
    document.querySelector("#mensagem_ok").insertAdjacentHTML(
      "afterend",
      `<div class="card_ok">
      <span>
        INÍCIO DO PAGAMENTO REALIZADO COM SUCESSO!</br></br>
        Foram enviadas para o e-mail informado todas as
        informações de acordo com o tipo de pagamento escolhido.
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

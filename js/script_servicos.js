const valores_servicos = {
  manutencao_preventiva: " R$ 400,00",
  reparo_de_pecas: " R$ 800,00",
  alinhamento_e_balanceamento: " R$ 150,00",
  troca_de_oleo: " R$ 150,00",
  funilaria: " R$ 1.000,00",
  diagnostico_eletronico: " R$ 100,00",
  instalacao_acessorios: " R$ 300,00",
}
// evento para o botão "botao_pagar" e para o "botao_agendar" quando clicado já na section de um serviço, esse serviço ser selecionado automaticamente no select na página "pagamento.html" ou "agendamento.html"

// Seleciona todos os botões de pagamento
const botoes_pagar = document.querySelectorAll(".botao_pagar")
// Adiciona um evento para cada botão de pagamento  ,
botoes_pagar.forEach(function (botao_pagar) {
  botao_pagar.addEventListener("click", function () {
    //pega o tipo de servico selecionado no select
    const select_servico =
      botao_pagar.parentElement.querySelector("#tipo_servico").value
    //cria uma url e redireciona com o tipo de serviço selecionado
    const url_pagamento = `pagamento.html?tipo_servico=${select_servico}`
    window.location.href = url_pagamento
  })
})

// Seleciona todos os botões de agendamento
const botoes_agendar = document.querySelectorAll(".botao_agendar")
// Adiciona um event listener a cada botão de agendamento
botoes_agendar.forEach(function (botao_agendar) {
  botao_agendar.addEventListener("click", function () {
    //pega o tipo de servico selecionado no select
    const select_servico2 =
      botao_agendar.parentElement.querySelector("#tipo_servico").value
    //cria uma url e redireciona com o tipo de serviço selecionado
    const url_agendamento = `agendamento.html?tipo_servico=${select_servico2}`
    window.location.href = url_agendamento
  })
})
// quando um servico for selecionado no index.html a section na pagina servicos.html ela ficar em destaque por alguns segundos
window.addEventListener("load", function () {
  var id = this.window.location.hash.substr(1)
  if (id && this.document.getElementById(id)) {
    this.document.getElementById(id).classList.add("servico_hover")
    this.setTimeout(function () {
      this.document.getElementById(id).classList.remove("servico_hover")
    }, 4000)
  }
})
/* */

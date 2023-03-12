//USO DA API
// Seleciona os elementos HTML do formulário
const cep = document.getElementById("CEP")
const logradouro = document.getElementById("logradouro")
const bairro = document.getElementById("bairro")
const cidade = document.getElementById("cidade")
const estado = document.getElementById("estado")
const botao_buscar_cep = document.getElementById("buscar_cep")

// limpar os campos do formulário
function limpa_campo() {
  logradouro.value = ""
  bairro.value = ""
  cidade.value = ""
  estado.value = ""
}

// busca os dados do CEP e preenche os campos do formulário
async function buscar_CEP() {
  try {
    // limpa os campos do formulário antes de preenchê-los
    limpa_campo()

    // Faz a requisição HTTP GET para a API da ViaCEP
    const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)

    // se a resposta foi bem sucedida
    if (response.ok) {
      // converte a resposta em um objeto JSON
      const dados_api = await response.json()

      // preenche os campos do formulário com os dados do CEP
      logradouro.value = dados_api.logradouro
      bairro.value = dados_api.bairro
      cidade.value = dados_api.localidade
      estado.value = dados_api.uf
    }
  } catch (error) {
    // Se ocorrer um erro na requisição, exibe uma mensagem de erro ao usuário
    alert(
      "Não foi possível buscar os dados do CEP. Por favor, verifique o número do CEP e tente novamente. Mas se este é seu CEP preencha os restante dos campos sem alterar o CEP."
    )
  }
}

cep.addEventListener("change", limpa_campo)
botao_buscar_cep.addEventListener("click", buscar_CEP)
/*--------------------------------------------------------------------------------- */
// Seleciona o botão de agendar
const botao_cadastro = document.querySelector("#botao_cadastro")
// Seleciona todos os campos obrigatórios
const campos_required = document.querySelectorAll("input[required]")
const campos = document.querySelectorAll("input")
campos_required.forEach(function (campo) {
  campo.addEventListener("input", function () {
    campo.style.border = ""
    return
  })
})
// Adiciona um ouvinte de evento de clique no botão
botao_cadastro.addEventListener("click", function () {
  event.preventDefault()
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
    botao_cadastro.disabled = false
    document.querySelector("#mensagem_ok").insertAdjacentHTML(
      "afterend",
      `<div class="card_ok">
      <span>
        CADASTRO REALIZADO COM SUCESSO!</br></br>
        Foi enviado para o e-mail informado um link para confirmação de cadastro.
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
/*-------------------------------------------------------------------------- */
//quando clicar no sim o conteúdo é exibido, quando clicado no não o conteúdo é oculto
const seguro_sim = document.getElementById("seguro_sim")
const seguro_nao = document.getElementById("seguro_nao")
const seguro_div = document.getElementById("seguro_div")

function mostrar_seguro_div() {
  seguro_div.style.display = "flex"
}

function ocultar_seguro_div() {
  seguro_div.style.display = "none"
}

seguro_sim.addEventListener("change", mostrar_seguro_div)
seguro_nao.addEventListener("change", ocultar_seguro_div)

/*
function valida_cep(cep){
  const cep_formato = /^[0-9]{8}$/
  return cep_formato.test(cep)
}

*/

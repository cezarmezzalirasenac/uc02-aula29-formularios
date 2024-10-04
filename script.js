const formulario = document.getElementById("form");

const btnCadastrar = document.getElementById("btnCadastrar")

const inputNome = document.getElementById("name")
const inputEmail = document.getElementById("email")
const inputSenha = document.getElementById("password")

// função que trata o evento onClick do botão cadastrar
function cadastrar(event) {
  event.preventDefault()
  
  const nome = inputNome.value
  const email = inputEmail.value
  const senha = inputSenha.value

  console.log({
    nome: nome,
    email: email,
    senha: senha
  })
}

const cadastrarAnonimo = (event) => {
  console.log(event)
}

btnCadastrar.addEventListener('click', cadastrar)

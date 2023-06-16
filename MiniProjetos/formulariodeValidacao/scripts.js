/*
Primeiro cria as váriaveis que vão recebe os Id dos inputs
para pegar os id utilizaremos os document....
depoois de seleciona 1 por 1 seguiremos para a crição das funções
*/
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

// Não lembro o que significa esse codigo 
form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  // codigo para chamar a função
  checkInputs();
});
/* nessa  parte aqui onde iremos cria a função e nos iremos pega os nomes de cada input. no caso é o nome de id que colocamos na hora de usa o atributo.
no caso o valor do id. 
exemplo entre parênteses 
 <input type="text" (id="username")/>
*/
function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;
/*
Depois que criamos a função  iremos fazer as condições para que funcione. por exemplo se na caixa do usurio estiver vazia sem o nome, nos iremos criar um cogido que emitira uma msg ou um alerta escrita uma msg de nome obrigatorio

exemplo
if (nome de usuárioValor {
    setErrorFor(username, "O nome de usuário é obrigatório");

*/
  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    // E a terceira condição e pra confrima que tudo ocorreu bem.
    setSuccessFor(email);
  }

  // Iremos seguir fazendo outras condicões com cada nome de id até completa o ultimo.

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }
  // Aqui temos outra condição com a sequencia de value
  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }
 // variável que vai pegar a class das Divs 
 // exemplo: <div class="form-control">
  const formControls = form.querySelectorAll(".form-control");

  // não sei pra que serve esse código.
  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

// função criada para os erros 
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
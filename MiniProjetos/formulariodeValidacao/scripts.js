const form = document.querySelector("#form");
const userName = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTexta = document.querySelector("#message");

// função de validação/ o evento vai ser o submit.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // verifica se o nome está vazio.
  if(userName.value === "") {
    alert("Por favor, preencha o seu nome");
    return;
  }
  // Se o email está preenchido e se está válido.
  if(emailInput.value ==="" || !isEmailValid(emailInput.value)) {
    alert("E-mail obrigatório");
    return;
  }

  // Verifica se a senha está preenchida
  if(!validatePassword(passwordInput.value, 8)){
    alert("A senha precisa ter 8 caractere");
    return;
  }
  // Verificar se a situação foi selecionada
  if(jobSelect.value ===""){
    alert("Por favor selecione sua situação");
    return;
  }
  // Verifica se a mensagem está preenchida
  if(messageTexta.value ==""){
    alert("Por favor preencha o campo da messagem.");
    return;
  }
  //se todos os campos estiverem corretamente preenchido, envie o formulário.
  form.submit();
});

// Função que vai válida o E-mail.
function isEmailValid(email){

  // Cria uma regex para validar o email;
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  );
  if(emailRegex.test(email)) {
    
    return true;
  }
  return false;
}

// Função que valida a senha
function validatePassword(password, minDigits){
  if(password.length >= minDigits){
    //Senha válida.
    return true
  }
  //Senha inválida
  return false
}




//função pro botao venha conferir criar
//função pro formulario



function Enviar(){
var form = document.forms[0];
var email = form.email.value;
var mensagem = form.message.value;
var reg = /\S+@\S+\.\S+/;
var substringEmail = email.substring(0,email.indexOf("@"));

if (email =="" ){
  alert('Erro no envio, insira um email')
  return;
}
if (mensagem == ""){
  alert('Erro no envio, insira uma mensagem')
  return;
}
if (email != "") {      
    alert(`Obrigado pelo contato, ${substringEmail} a sua mensagem foi encaminhada com sucesso`);
    alert('Acompanhe a nossa página em nossas redes sociais!');
    return;
}
else if (email != reg) {  
   alert("Email inválido");
   return reg;
}

}    







/*

const button = document.getElementsByClassName("button");
button.addEventListener('click', updateButton);

function updateButton() {
  if (button.value === '') {
    button.value = '';
   
  } else {
    button.value = 'Start machine';
    paragraph.textContent = 'The machine is stopped.';
  }
}*/


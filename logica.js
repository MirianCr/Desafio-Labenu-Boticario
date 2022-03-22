//função pro botao venha conferir criar
//função pro formulario

// var form = document.forms[0];
// var email = form.email.value;
// var mensagem = form.message.value;
// var reg = /\S+@\S+\.\S+/;
// // var substringEmail = email.substring(0, email.indexOf("@"));


// function Enviar() {
//     var form = document.forms[0];
//     var email = form.email.value;
//     var mensagem = form.message.value;
//     var reg = /\S+@\S+\.\S+/;
//     var substringEmail = email.substring(0, email.indexOf("@"));
// }

// if (email =="" ){
//   alert('Erro no envio, insira um email')
//   return;
// }else if (email !== reg) {  
//   console.log('JULIOOOOO', reg);
//   alert("Email inválido");
//   return reg;
// }

function verifica() {
    const substringEmail = document.querySelector('#email').value
    if (document.forms[0].email.value === ""
        || document.forms[0].email.value.indexOf('@') === -1
        || document.forms[0].email.value.indexOf('.') === -1) {
        alert("Por favor, informe um E-MAIL válido!");
        return false;
    }
    if(document.forms[0].email.value.length === 0) {
        alert('Por favor, informe o seu EMAIL.');
        document.frmEnvia.email.focus();
        return;
    }
    if(document.forms[0].message.value.length === 0) {
        alert('Por favor, escreva sua mensagem!');
        return;
    }
    const dominio = document.forms[0].email.value.substring(substringEmail.indexOf("@") + 1);
    const substring = document.forms[0].email.value.substring(0, substringEmail.indexOf("@"));
    if(substring.length >= 1
        && substring.length <= 32
        && dominio.length >= 1
        && dominio.length <= 16) {
        const letraMaiuscula = substring[0].toUpperCase() + substring.substr(1);
        return alert(`Obrigado pelo contato, ${letraMaiuscula}!`);
    } else {
        alert('Tamanho maximo excedido!')
    }
    return true;
}

//
// if (mensagem === ""){
//   alert('Erro no envio, insira uma mensagem')
// }
//
// if (email !== "") {
//     alert(`Obrigado pelo contato, ${substringEmail} a sua mensagem foi encaminhada com sucesso`);
//     alert('Acompanhe a nossa página em nossas redes sociais!');
//
// }


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


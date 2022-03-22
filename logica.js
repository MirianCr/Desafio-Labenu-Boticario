
///função pro formulario

function verifica () {
  const substringEmail = document.querySelector('#email').value; //para pegar apenas user 
  var formularioEmail = document.forms[0]; //inicio forms campo email
  const dominio = formularioEmail.email.value.substring(substringEmail.indexOf("@") + 1); //pega depois do @
  const substring = formularioEmail.email.value.substring(0, substringEmail.indexOf("@")); //pega antes do @

  //email invalido
    if (formularioEmail.email.value === "" 
        || formularioEmail.email.value.indexOf('@') === -1
        || formularioEmail.email.value.indexOf('.') === -1) {
        alert("Por favor, informe um E-MAIL válido!");
        return false;
    }
  //email vazio
    if(formularioEmail.email.value.length === 0) { 
        alert('Por favor, informe o seu EMAIL.');
        document.frmEnvia.email.focus();
        return;
  //mensagem vazia
    }
    if(formularioEmail.message.value.length === 0) { 
        alert('Por favor, escreva sua mensagem!');
        return;
    } 

//user: 1 a 32 caracteres, incluindo letras maiúsculas e minúsculas, numerais e ponto final.
//domain: 1 a 16 caracteres, incluindo letras minúsculas e numerais.

    if(substring.length >= 1
        && substring.length <= 32
        && dominio.length >= 1
        && dominio.length <= 16) {
        const letraMaiuscula = substring[0].toUpperCase( ) + substring.substr(1);//comecar alert letra maiuscula

        return alert(`
          A F4Life agradece o seu contato, ${letraMaiuscula}!

          Retornaremos o mais breve possível!

          Acompanhe também nossas redes sociais!`);
        
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
//   console.log('deu certo!', reg);
//   alert("Email inválido");
//   return reg;
// }




function getRadioValor(name) {
  var pegaName = document.getElementsByName(name);

  for (var i = 0; i < pegaName.length; i++) {
    if (pegaName[i].checked) {
      var valor = pegaName[i].value;
      return valor;
    }
  }
}

function processarDados() {
  var frontEnd = 0;
  var backEnd = 0;
  var fullStackEngineer = 0;
  var securityEngineer = 0;
  var dataScientist = 0;
  var devOpsEngineer = 0;
  var mobileAppDeveloper = 0;
  var gameDevelopment = 0;
  var indeciso = 0;

  //pergunta 1
  if (getRadioValor('pergunta1') == 'op1') {
    frontEnd += 3;
    mobileAppDeveloper += 3;
  }
  else if (getRadioValor('pergunta1') == 'op2') {
    fullStackEngineer += 2;
    mobileAppDeveloper += 2;
    gameDevelopment += 2;
  }
  else if (getRadioValor('pergunta1') == 'op3') {
    backEnd += 1;
    securityEngineer += 1;
    dataScientist += 1;
    devOpsEngineer = 1;
  }
  else if (getRadioValor('pergunta1') == 'op4') {
    indeciso += 1;
  }

  //pergunta 2 
  if (getRadioValor('pergunta2') == 'op1') {
    gameDevelopment += 3;
  }
  else if (getRadioValor('pergunta2') == 'op2') {
    frontEnd += 2;
    fullStackEngineer += 2;
    mobileAppDeveloper += 2;
    backEnd += 2;
  }
  else if (getRadioValor('pergunta2') == 'op3') {
    securityEngineer += 1;
    dataScientist += 1;
    devOpsEngineer += 1;
  }
  else if (getRadioValor('pergunta1') == 'op4') {
    indeciso += 2
  }

  //pergunta 3
  if (getRadioValor('pergunta3') == 'op1') {
    devOpsEngineer += 3;
  }
  else if (getRadioValor('pergunta3') == 'op2') {
    frontEnd += 2;
    backEnd += 2;
    fullStackEngineer += 2;
    gameDevelopment += 2;
    mobileAppDeveloper += 2;
  }
  else if (getRadioValor('pergunta3') == 'op3') {
    securityEngineer += 1;
    dataScientist += 1;
  }
  else if (getRadioValor('pergunta1') == 'op4') {
    indeciso += 2;
  }

  //pergunta 4
  if (getRadioValor('pergunta4') == 'op1') {
    mobileAppDeveloper += 3;
  }
  else if (getRadioValor('pergunta4') == 'op2') {
    frontEnd += 2;
    backEnd += 2;
    fullStackEngineer += 2;
    gameDevelopment += 2;
  }
  else if (getRadioValor('pergunta4') == 'op3') {
    securityEngineer += 1;
    dataScientist += 1;
    devOpsEngineer += 1;
  }
  else if (getRadioValor('pergunta1') == 'op4') {
    indeciso += 2;
  }

  //pergunta 5
  if (getRadioValor('pergunta5') == 'op1') {
    frontEnd += 3;
    fullStackEngineer += 2;
  }
  else if (getRadioValor('pergunta5') == 'op2') {
    backEnd += 3;
    fullStackEngineer += 2;
  }
  else if (getRadioValor('pergunta5') == 'op3') {
    gameDevelopment += 3;
    backEnd += 2;
    fullStackEngineer += 2;
  }
  else if (getRadioValor('pergunta5') == 'op4') {
    gameDevelopment += 3;
  }
  else if (getRadioValor('pergunta5') == 'op5') {
    backEnd += 3;
  }
  else if (getRadioValor('pergunta5') == 'op6') {
    devOpsEngineer = +3;
  }
  else if (getRadioValor('pergunta5') == 'op7') {
    mobileAppDeveloper += 3;
    fullStackEngineer += 2;
  }
  else if (getRadioValor('pergunta5') == 'op8') {
    securityEngineer += 3;
    dataScientist += 3;
  }
  else if (getRadioValor('pergunta5') == 'op9') {
    mobileAppDeveloper += 3;
  }
  else if (getRadioValor('pergunta5') == 'op10') {
    dataScientist = +3;
  }
  else if (getRadioValor('pergunta5') == 'o11') {
    mobileAppDeveloper += 3;
  }
  else if (getRadioValor('pergunta5') == 'op12') {
    indeciso += 2;
  }

  //pergunta 6
  if (getRadioValor('pergunta6') == 'op1') {
    dataScientist += 3;
  }
  else if (getRadioValor('pergunta6') == 'op2') {
    devOpsEngineer += 2;
    fullStackEngineer += 2;
    backEnd += 2;
  }
  else if (getRadioValor('pergunta6') == 'op3') {
    frontEnd += 1;
    gameDevelopment += 1;
    mobileAppDeveloper += 1;
    securityEngineer += 1;
  }
  else if (getRadioValor('pergunta1') == 'op4') {
    indeciso += 2;
  }

  //pergunta 7
  if (getRadioValor('pergunta7') == 'op1') {
    fullStackEngineer -= 1;
    mobileAppDeveloper -= 1;
  }
  else if (getRadioValor('pergunta7') == 'op2') {
    frontEnd -= 1;
    gameDevelopment -= 1;
  }
  else if (getRadioValor('pergunta7') == 'op3') {
    backEnd -= 1;
  }
  else if (getRadioValor('pergunta7') == 'op4') {
    securityEngineer -= 1;
  }
  else if (getRadioValor('pergunta7') == 'op5') {
    dataScientist -= 1;
  }
  else if (getRadioValor('pergunta7') == 'op6') {
    devOpsEngineer -= 1;
  }
  else if (getRadioValor('pergunta7') == 'op7') {
    indeciso += 2;
  }

  //pergunta 8
  if (getRadioValor('pergunta8') == 'op1') {
    securityEngineer += 3;
  }
  else if (getRadioValor('pergunta8') == 'op2') {
    backEnd += 2;
    fullStackEngineer += 2;
    mobileAppDeveloper += 2;
    devOpsEngineer += 2;
  }
  else if (getRadioValor('pergunta8') == 'op3') {
    frontEnd += 1;
    dataScientist += 1;
    gameDevelopment += 1;
  }
  else if (getRadioValor('pergunta8') == 'op4') {
    indeciso += 2;
  }

  //pergunta 9
  if (getRadioValor('pergunta9') == 'op1') {
    backEnd += 3;
    devOpsEngineer += 3;
    dataScientist += 3;
  }
  else if (getRadioValor('pergunta9') == 'op2') {
    fullStackEngineer += 2;
    mobileAppDeveloper += 2;
    gameDevelopment += 2;
  }
  else if (getRadioValor('pergunta9') == 'op3') {
    frontEnd += 1;
    securityEngineer += 1;
  }
  else if (getRadioValor('pergunta9') == 'op4') {
    indeciso += 2;
  }

  //pergunta 10
  if (getRadioValor('pergunta10') == 'op1') {
    fullStackEngineer += 3;
    backEnd += 3;
  }
  else if (getRadioValor('pergunta10') == 'op2') {
    devOpsEngineer += 2;
    mobileAppDeveloper += 2;
    securityEngineer += 2;
  }
  else if (getRadioValor('pergunta10') == 'op3') {
    frontEnd += 1;
    gameDevelopment += 1;
    dataScientist += 1;
  }
  else if (getRadioValor('pergunta10') == 'op4') {
    indeciso += 2;
  }


  //FAZER UM ALGORITMO PARA VERIFICAR A PONTUCAO 

  //TESTE
  // alert(`
  //   TESTE

  //   pontuação da variavel frontend: ${frontEnd}
  //   pontuação da variavel backEnd: ${backEnd}
  //   pontuação da variavel fullStackEngineer: ${fullStackEngineer}
  //   pontuação da variavel gameDevelopment: ${gameDevelopment}
  //   pontuação da variavel mobileAppDeveloper: ${mobileAppDeveloper}
  //   pontuação da variavel devOpsEngineer: ${devOpsEngineer}
  //   pontuação da variavel securityEngineer: ${securityEngineer}
  //   pontuação da variavel dataScientist: ${dataScientist}
  //   pontuação da variavel indeciso: ${indeciso}
  // `);


  // DAQUI PRA BAIXO VERIFICA A VARIAVEL QUE PONTUOU MAIS


  // objeto
  var maiorPontuacao = { resultado: 0 };

  // objeto
  const carreiras = {
    frontEnd: frontEnd,
    backEnd: backEnd,
    fullStackEngineer: fullStackEngineer,
    securityEngineer: securityEngineer,
    dataScientist: dataScientist,
    devOpsEngineer, devOpsEngineer,
    mobileAppDeveloper: mobileAppDeveloper,
    gameDevelopment: gameDevelopment,
    indeciso: indeciso
  };

  // nomeCarreira VAI ARMAZENAR APENAS O NOME DE UMA PROPRIEDADE DO OBJETO CARREIRAS
  var nomeCarreira = '';

  // PRECISAMOS ARRUMAR PRA SABER O QUE FAZER SE HOUVER VARIÁVEL COM A MESMA PONTUAÇÃO
  for (var prop in carreiras) {
    if (carreiras[prop] > maiorPontuacao.resultado) {
      maiorPontuacao.resultado = carreiras[prop];
      nomeCarreira = prop;
    }
  }

  /*  
     IDEIA PARA CONTINUAR O CODIGO
  
     SE A VARIAVEL nomeCarreira FOR IGUAL A string frontEnd ENTÃO ABRIR A PAGINA front-end.html
     SE A VARIAVEL nomeCarreira FOR IGUAL A string backEnd ENTÃO ABRIR A PAGINA backend.html
     SE A VARIAVEL nomeCarreira FOR IGUAL A string fullStackEngineer ENTÃO ABRIR A PAGINA full-stack.html
     SE A VARIAVEL nomeCarreira FOR IGUAL A string securityEngineer ENTÃO ABRIR A PAGINA security-engineer.html
     ...
  */

  alert(`
    Carreira: ${nomeCarreira} 
    Pontuação: ${maiorPontuacao.resultado}
  `);

  switch (nomeCarreira) {
    case 'frontEnd':
      window.location = "_resultado-quiz/front-end.html";
      alert(nomeCarreira);
      break;
    case 'backEnd':
      window.location = "_resultado-quiz/backend.html";
      alert(nomeCarreira);
      break;
    case 'fullStackEngineer':
      window.location = "_resultado-quiz/full-stack.html";
      alert(nomeCarreira);
      break;
    case 'securityEngineer':
      window.location = "_resultado-quiz/security-engineer.html";
      alert(nomeCarreira);
      break;
    case 'dataScientist':
      window.location = "_resultado-quiz/data-scientist.html";
      alert(nomeCarreira);
      break;
    case 'devOpsEngineer':
      window.location = "_resultado-quiz/devOps.html";
      alert(nomeCarreira);
      break;
    case 'mobileAppDeveloper':
      window.location = "_resultado-quiz/mobile-app-developer.html";
      alert(nomeCarreira);
      break;
    case 'gameDevelopment':
      window.location.replace("https://quizdev.bia25dadalto.repl.co/_resultado-quiz/game-development.html");
      alert(nomeCarreira);
      break;
    case 'indeciso':
      window.location = "/_resultado-quiz/indeciso.html";
      alert(nomeCarreira);
      break;
    default:
      break;
  } // fim switch 

  //redirecionar(nomeCarreira);

} // fim processarDados()

//$(location).attr('href', '_resultado-quiz/data-scientist.html');
//$(location).attr('href', '_resultado-quiz/backend.html');

/*function redirecionar(nomesCarreira)
{
  switch (nomesCarreira) {
    case 'frontEnd':
      window.location = "_resultado-quiz/front-end.html";
      break;
    case 'backEnd':
      window.location = "_resultado-quiz/backend.html";
      break;
    case 'fullStackEngineer':
      window.location = "_resultado-quiz/full-stack.html";
      break;
    case 'securityEngineer':
      window.location = "_resultado-quiz/security-engineer.html";
      break;
    case 'dataScientist':
      window.location = "_resultado-quiz/data-scientist.html";
      break;
    case 'devOpsEngineer':
      window.location = "_resultado-quiz/devOps.html";
      break;
    case 'mobileAppDeveloper':
      window.location = "_resultado-quiz/mobile-app-developer.html";
      break;
    case 'gameDevelopment':
      window.location = "_resultado-quiz/game-development.html";
      break;
    case 'indeciso':
      
      break;

    default:
      break;
  } // fim switch
}
*/
//alert('Bem Vindo');

/*function MostrarValor() {
  alert('O valor selecionado é ' + getRadioValor('pergunta'));
}*/






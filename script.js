let inputNome = document.querySelector(".input-nome");
let buttonStart = document.querySelector(".button-comecar");
let nomePersonagem = document.querySelector(".nome-personagem");
let buttonComecar = document.querySelector(".game-comecar");
let numberInput = document.querySelector(".number");
let resultadoNumeros = document.querySelector(".resultado-numeros");
let tentativasJogo = document.querySelector(".resultado-tentativas");





// função para mostrar nome do jogador
const nome = () => {
  nomePersonagem.innerHTML = `<b>${inputNome.value}</b>`;
  inputNome.disabled = true;
  selecionarValor();
}

// Função que seleciona o valor escolhido
let resultado;
function selecionarValor() {
  let select = document.querySelector(".intervalo");
  let value = select.options[select.selectedIndex].value;

  switch (value) {
    case "opcao1":
      resultado = gerarNumeroS.opcao1();
      break;
    case "opcao2":
      resultado = gerarNumeroS.opcao2();
      console.log(resultado);
      break;
    case "opcao3":
      resultado = gerarNumeroS.opcao3();
      break;

    default:
      break;
  }
  select.disabled = true;
}

// Intervalo escolhido pelo jogador
const gerarNumeroS = {
  opcao1: () => {
    let min = 1;
    let max = 10;
    let numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroSecreto;
  },
  opcao2: () => {
    let min = 1;
    let max = 100;
    let numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroSecreto;
  },
  opcao3: () => {
    let min = 1;
    let max = 200;
    let numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroSecreto;
  }
};

// Função número maior ou menor
function fimdeJogo(situacao) {
  switch (situacao) {
    case "Acertou":
      resultadoNumeros.innerHTML = "<b>Parabéns, você conseguiu adivinhar!</b>";
      resultadoNumeros.classList.add("acertou");
      break;
    case 'Numero maior':
      resultadoNumeros.innerHTML = "<b>O número que você escolheu é maior!!</b>";
      break;
    case 'Numero menor':
      resultadoNumeros.innerHTML = "<b>O número que você escolheu é menor!</b>";
      break;
    case 'Errou':
      resultadoNumeros.innerHTML = "<b>Você errou!</b>";
      resultadoNumeros.classList.add("errou");
      break;

    default:
      break;
  }
}

// Monstrando os Resultados
let tentativas = 3;
function play() {
  tentativasJogo.innerHTML = tentativas;

  if (numberInput.value == resultado) {
    situacao = "Acertou";
    fimdeJogo(situacao);
    buttonComecar.style.display = "none";
  }
  else if (numberInput.value > resultado) {
    situacao = "Numero maior";
    tentativas -= 1;
    fimdeJogo(situacao);
  }
  else if (numberInput.value < resultado) {
    situacao = "Numero menor";
    tentativas -= 1;
    fimdeJogo(situacao);
  }
  numberInput.value = "";
  tentativasJogo.innerHTML = `Você ainda tem ${tentativas} tentativas!`;
  
  if (tentativas == 0) {
    situacao = "Errou";
    tentativasJogo.innerHTML = `Você errou o número era <b>${resultado}!</b>`;
    fimdeJogo(situacao);
    buttonComecar.style.display = "none";
  }
}

//Desabilitar botão caso não escreva nada
function disabledButton() {
  if (inputNome.value.length == 0) {
    buttonStart.disabled = true;
    buttonStart.style.backgroundColor = "#7c7f82";
  }
  else {
    buttonStart.disabled = false;
    buttonStart.style.backgroundColor = "#1180E6";
  }
  if (numberInput.value.length == 0) {
    buttonComecar.disabled = true;
    buttonComecar.style.backgroundColor = "#7c7f82";
  }
  else {
    buttonComecar.disabled = false;
    buttonComecar.style.backgroundColor = "#f2890d";
  }
}

 function refresh() {
   window.parent.location = window.parent.location.href;}

numberInput.addEventListener("input", disabledButton)
inputNome.addEventListener("input", disabledButton);
buttonStart.addEventListener("click", nome);
buttonComecar.addEventListener("click", play);







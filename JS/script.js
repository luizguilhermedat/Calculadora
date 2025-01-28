// Seleciona o campo de exibição e os botões
const display = document.querySelector(".input");
const buttons = document.querySelectorAll("button");

// Caracteres especiais que representam operadores
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// Função para calcular o resultado
const calculate = (btnValue) => {
  // Se o botão for "=", realiza o cálculo
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100")); // Trata porcentagem
  }
  // Limpa o display quando "AC" é pressionado
  else if (btnValue === "AC") {
    output = "";
  }
  // Apaga o último caractere quando "DEL" é pressionado
  else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  }
  // Adiciona o valor ao output, evitando operadores inválidos
  else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  // Atualiza o valor no campo de exibição
  display.value = output;
};

// Adiciona evento de clique a todos os botões
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const btnValue = e.target.dataset.value; // Obtém o valor do botão
    if (btnValue) calculate(btnValue); // Garante que btnValue seja válido
  });
});

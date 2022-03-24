const button = document.getElementById("submit");
function reverseButton(event) {
  event.preventDefault();
}
window.onload = function () {
  button.addEventListener("click", reverseButton);
};

function clearButton() {
  const tudo = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  for (let index = 0; index < tudo.length; index += 1) {
    const posicao = tudo[index];
    posicao.value = "";
    posicao.checked = false;
  }
  textArea = "";
}
window.onload = function () {
  const clear = document.getElementById("limpar");
  clear.addEventListener("clik", clearButton);
  button.addEventListener("click", reverseButton);
};

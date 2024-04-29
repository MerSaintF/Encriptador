const secKey = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const inputText = document.querySelector(".texto--input");
const outputText = document.querySelector(".texto--output");
const btnEncriptar = document.querySelector(".btn--1");
const btnDesencriptar = document.querySelector(".btn--2");
const btnCopiar = document.querySelector(".btn--3");

inputText.addEventListener("input", function () {
  outputText.value = "";
});

btnEncriptar.addEventListener("click", function () {
  const texto = inputText.value;
  encriptar(texto);
});

btnCopiar.addEventListener("click", function () {
  console.log(outputText.value);
  navigator.clipboard.writeText(outputText.value);
});

const encriptar = function (text) {
  text = text.toLowerCase();
  let textEnc = text.split("").map(function (letter) {
    return letter in secKey ? secKey[letter] : letter;
  });
  textEnc = textEnc.join("");
  outputText.value = textEnc;
};

btnDesencriptar.addEventListener("click", function () {
  const texto = inputText.value;
  desencriptar(texto);
});

const desencriptar = function (text) {
  let textDesenc = text.toLowerCase();
  for (const [key, value] of Object.entries(secKey)) {
    textDesenc = textDesenc.replaceAll(value, key);
  }
  outputText.value = textDesenc;
};

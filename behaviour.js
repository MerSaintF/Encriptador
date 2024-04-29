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
const divOutputsTrue = document.querySelector(".output--true");
const divOutputsFalse = document.querySelector(".output--false");

divOutputsTrue.classList.add("invisible");

const validInputMessage = function (state) {
  if (!state) {
    divOutputsFalse.classList.remove("invisible");
    divOutputsTrue.classList.add("invisible");
  } else {
    divOutputsFalse.classList.add("invisible");
    divOutputsTrue.classList.remove("invisible");
  }
};

const validarInput = function (inputText) {
  validInputMessage(Boolean(inputText));
  return Boolean(inputText);
};

inputText.addEventListener("input", function(){
  validInputMessage(false)
});

btnEncriptar.addEventListener("click", function () {
  const texto = inputText.value;
  if (validarInput(texto)) {
    encriptar(texto);
  }
});

btnDesencriptar.addEventListener("click", function () {
  const texto = inputText.value;
  if (validarInput(texto)) {
    desencriptar(texto);
  }
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

const desencriptar = function (text) {
  let textDesenc = text.toLowerCase();
  for (const [key, value] of Object.entries(secKey)) {
    textDesenc = textDesenc.replaceAll(value, key);
  }
  outputText.value = textDesenc;
};

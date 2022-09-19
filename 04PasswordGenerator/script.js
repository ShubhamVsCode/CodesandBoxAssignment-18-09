const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

const randomNumber = "0123456789";
const randomLower = "abcdefghijklmnopqrstuvxyz";
const randomUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const randomSpecial = "~!@#$%^&*()_+=-";

const getRandom = () => {
  return Math.floor(Math.random() * 10);
};

console.log(getRandom());

clipboardEl.addEventListener("click", () => {});

generateEl.addEventListener("click", () => {});

function generatePassword(lower, upper, number, symbol, length) {}

function getRandomLower() {}

function getRandomUpper() {}

function getRandomNumber() {}

function getRandomSymbol() {}

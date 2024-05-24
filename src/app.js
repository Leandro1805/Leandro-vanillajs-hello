let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function elementoRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generarExcusa() {
  let excuse =
    elementoRandom(who) +
    " " +
    elementoRandom(action) +
    " " +
    elementoRandom(what) +
    " " +
    elementoRandom(when);

  return excuse;
}

window.onload = function() {
  document.getElementById("excuse").innerHTML = generarExcusa();
};

// tady je místo pro náš program

function result() {
  document.querySelector("#vysledek").innerHTML = secti(4, 5)
}

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
 let square = document.querySelector(".ctverecek");

function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!")
  square.textContent = 'Gratulace, právě jsi spustila tuto funkci!'
}

function green() {
  square.style.backgroundColor = 'green';
}


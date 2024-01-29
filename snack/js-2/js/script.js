const first = Number(prompt("Inserisci il primo numero"));

const second = Number(prompt("Inserisci il secondo numero"));

const third = Number(prompt("Inserisci il terzo numero"));

document.getElementById("first").innerHTML = first;

document.getElementById("second").innerHTML = second;

document.getElementById("third").innerHTML = third;

document.getElementById("media").innerHTML = ((first + second + third) /3).toFixed(2);
const celcius = prompt("Inserisci i gradi Celcius da convertire in Fahrenheit");

const convf = (celcius * 9/5) + 32;

document.getElementById("convf").innerHTML = convf;

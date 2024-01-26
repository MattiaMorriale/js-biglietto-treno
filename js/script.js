const km = Number(prompt("Quanti chilometri vuoi percorrere?"));

document.getElementById("km").innerHTML = km;

const age = Number(prompt("Quanti anni hai?"));

document.getElementById("age").innerHTML = age;

const prezzo = 0.21;

const pfinale = prezzo * km;

document.getElementById("pfinale").innerHTML = pfinale.toFixed(2);

if ( age < 18 ) {

    document.getElementById("pfinale").innerHTML = pfinale - ( pfinale * 20 / 100 ).toFixed(2);

} else if ( age > 64 ) {

    document.getElementById("pfinale").innerHTML = pfinale - ( pfinale * 40 / 100 ).toFixed(2);

}

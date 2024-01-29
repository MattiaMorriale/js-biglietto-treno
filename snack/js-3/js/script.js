const chose = prompt("Chose: (1) Rock, (2) Paper, (3) Scissor.");

document.getElementById("chose").innerHTML = chose;

const computer = Math.floor(Math.random() * 3+1);

document.getElementById("computer").innerHTML = computer;

if (chose == computer) {

    document.getElementById("risultato").innerHTML = ("Pareggio");

} else if
    ((chose == 1 && computer == 3) ||
     (chose == 2 && computer == 1) ||
     (chose == 3 && computer == 2)){
    
    document.getElementById("risultato").innerHTML = ("Hai Vinto")

} else {

    document.getElementById("risultato").innerHTML = ("Hai Perso")

}
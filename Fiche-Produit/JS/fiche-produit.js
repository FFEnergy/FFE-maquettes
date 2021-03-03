var leinput = document.getElementById('nombreEolienne')
var valeur = document.getElementById('nombreEolienne').value

function AjouterValeur() {
    valeur = document.getElementById('nombreEolienne').value
    valeur++;
    leinput.value = valeur;
}

function EnleverValeur() {
    valeur = document.getElementById('nombreEolienne').value
    if (valeur > 0) {
        valeur--;
    }else {
        valeur = 0;
    }
    
    leinput.value = valeur;
}
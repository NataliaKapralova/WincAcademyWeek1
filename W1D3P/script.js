
let name = prompt ('Hey, welkom! Wat is je naam?')
alert("Hallo" + ' ' + name + '!')


let min = 1;
let max = 25;
let tries = 5;
let answer = Math.floor(Math.random() * (max - min + 1)) + min;
let guess = '';
let message = 'Raad jij het nummer tussen  ' + min + ' and ' + max + '?' ;

while (tries > 0) {
    guess = prompt(message, guess); 
    

    if (guess == null) {
        alert('Het spel is gestopt');
        break;
        } 
        else if (isFinite(guess) && guess != '') {
        guess = + guess; 
        } 
        if   (guess < answer) {
            alert('Helaas, dat is te laag');
        }
        else if (guess > answer ) {
            alert('Helaas, dat is te hoog.');
        }
        else if (guess > max) {
            alert('Kies een getal lager dan' + max + '.');
        }
        else if (guess < min) {
            alert('Kies een getal hoger dan' + min + '.');
        }
        else  {
            alert('Yes!' + user + 'Het is gelukt' );
            break;
        }
    
     tries = tries - 1; 

     if (tries == 0) {

  alert('Helaas, ' + name + '. Je zetten zijn op, het antwoord is ' + answer + '.');
}} 
    
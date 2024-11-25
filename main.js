let soloResults = []

function rollDice() {

    let randomNumber = Math.floor(Math.random()*6) +1;
    let randomDiceImage = "dice" + randomNumber + ".png";
    let randomDiceImageScr ="img/" + randomDiceImage;
    let imgSolo = document.getElementById("imgSolo");
    imgSolo.setAttribute("src", randomDiceImageScr);
    document.getElementById("result").innerHTML = "You rolled: " + randomNumber;
    
    soloResults.push(randomNumber);
    
    let resultList = document.getElementById("resultList").innerHTML = "Your roll history: " + soloResults;
    
    
      
}
 
function rollDice2() {
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomNumber2 = Math.floor(Math.random()*6)+1;

    var randomDiceImageScr1 = "img/" + "dice" + randomNumber1 + ".png";
    var randomDiceImageScr2 = "img/dice" + randomNumber2 + ".png";

    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");

    img1.setAttribute("src",randomDiceImageScr1);
    img2.setAttribute("src",randomDiceImageScr2);

    if (randomNumber1 > randomNumber2) {
        document.getElementById("compete").innerHTML = "Player 1 wins!";
    }
    
        
    
    else if (randomNumber1 < randomNumber2) {
            document.getElementById("compete").innerHTML = "Player 2 wins!";
    }
    else {
        document.getElementById("compete").innerHTML = "It's a draw!"
    }
}


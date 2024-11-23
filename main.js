let randomNumber = Math.floor(Math.random)*6 +1;
let randomDiceImage = "dice" + randomNumber + ".png";
let randomDiceImageScr ="img/" + randomDiceImage;
let imgSolo = document.getElementById("imgSolo");
imgSolo.setAttribute("src", randomDiceImageScr)
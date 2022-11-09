//to change the first dice image
var num1 = Math.floor(Math.random()*6)+1

var randomDiceImage = "dice"+num1+".png" //to get a random dice number from 1-6

var randomImageSrc = "images/"+ randomDiceImage //this will be used to change the dice to a random dice among the dice in the images folder

var pic1 = document.querySelectorAll("img")[0] //to select the first image so we can change it

pic1.setAttribute("src", randomImageSrc) //this line will change the dice image to a randomly slected dice image from the image folder

//to change the second dice image
var num2 = Math.floor(Math.random()*6)+1

var randomDiceImage = "dice"+num2+".png" //to get a random dice number from 1-6

var randomImageSrc = "images/"+ randomDiceImage //this will be used to change the dice to a random dice among the dice in the images folder

var pic2 = document.querySelectorAll("img")[1] //to select the second image so we can change it

pic2.setAttribute("src", randomImageSrc) //this line will change the second dice image to a randomly slected dice image from the image folder

//to award the winner
if (num1>num2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!🎉"
} else if (num2>num1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🎉"
} else {
    document.querySelector("h1").innerHTML = "Draw Game.🤝🏿" 
} 
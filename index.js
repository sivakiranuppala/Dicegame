var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "images/dice"+randomNumber1+".png";
var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src",randomImage1);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="images/dice"+randomNumber2+".png";
var Image2 = document.querySelectorAll("img")[1];
Image2.setAttribute("src",randomImage2);
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="player1 won the game";
    document.querySelector("h1").style.color="red";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="player2 won the game";
    document.querySelector("h1").style.color="green";
}
else{
    document.querySelector("h1").innerHTML="Game has been draw";
    document.querySelector("h1").style.color="white";
}
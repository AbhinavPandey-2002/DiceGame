//alert("he");
var randomNumber1=Math.ceil((Math.random()*10)%6);
var randomNumber2=Math.ceil((Math.random()*10)%6);
//console.log(randomNumber1);
var pqr="images/dice"+randomNumber1+".png";
var uvw="images/dice"+randomNumber2+".png";
//console.log(pqr);
var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];
image1.setAttribute("src", pqr);
image2.setAttribute("src", uvw);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";

}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
     document.querySelector("h1").innerHTML="Draw!";
}
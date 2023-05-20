var n = Math.random();
n = n*6;
n = Math.floor(n + 1);
console.log(n);

var m = Math.random();
m = m*6;
m = Math.floor(m + 1);
console.log(m);

var randomImage1 = "images/dice"+n+".png";
var randomImage2 = "images/dice"+m+".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);
if(n>m)
{
      document.querySelector(" h1").innerHTML="Player 1 wins";
}
else if(m>n)
{
      document.querySelector(" h1").innerHTML="Player 2 wins";
}
else
{
      document.querySelector("h1").innerHTML="Draw";
}
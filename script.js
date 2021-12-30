//click on like //
const btn1 = document.querySelector(".ch");
btn1.addEventListener("click", heartFun);
const heartSpan = document.querySelector(".heart");
let span1 = 0;

//click on retweet//

const btn2 = document.querySelector(".cr");
btn2.addEventListener("click", retweetFun);
const retweetSpan = document.querySelector(".retweet");
let span2 = 0;

//function for like//
function heartFun() {
  span1++;
  heartSpan.textContent = span1;
}

//function for reweet//

function retweetFun() {
  span2++;
  retweetSpan.textContent = span2;
}
//share btn//
function myFunction() {
  document.querySelector("#mainDrop2").classList.toggle("hidden");
}
//kebab btn//
function mFunction() {
  document.querySelector("#mainDrop1").classList.toggle("hidden");
}

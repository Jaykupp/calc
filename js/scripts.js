var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btnAdd = document.getElementById("add");
var btnSub = document.getElementById("subtract");


function setNum(){
  document.getElementById("current").innerHTML = this.innerHTML;
}

var myTotal=0;

function add(){
  myTotal = myTotal + Number(document.getElementById("current").innerHTML);
  document.getElementById("total").innerHTML = myTotal;
}

function subtract(){
  myTotal = myTotal - Number(document.getElementById("current").innerHTML);
  document.getElementById("total").innerHTML = myTotal;
}

btn1.addEventListener("click", setNum);
btn2.addEventListener("click", setNum);
btn3.addEventListener("click", setNum);
btnAdd.addEventListener("click", add);
btnSub.addEventListener("click", subtract);

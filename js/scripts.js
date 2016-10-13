var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btnAdd = document.getElementById("add");
var btnSub = document.getElementById("subtract");
var btnEq = document.getElementById("equals");
var total = document.getElementById("total");

var myNum = "";
var myTotal = [];

function setNum(){
  if(myTotal[1]=="="){
    myNum = "";
    myTotal[1]="";
  }
  myNum = myNum + this.innerHTML;
  total.innerHTML = myNum;
}

function add(){
  equals();
  myTotal = [Number(myNum), "+"];
  myNum = "";
}

function subtract(){
  equals();
  myTotal = [Number(myNum), "-"];
  myNum = "";
}

function equals(){
  if (myTotal[1]=="+")
  {
    myTotal = [myTotal[0] + Number(myNum), ""];
    total.innerHTML = myTotal[0];
    myNum = myTotal[0];
  }
  if (myTotal[1]=="-")
  {
    myTotal = [myTotal[0] - Number(myNum), ""];
    total.innerHTML = myTotal[0];
    myNum = myTotal[0];
  }
  myTotal[1]="=";
}

btn1.addEventListener("click", setNum);
btn2.addEventListener("click", setNum);
btn3.addEventListener("click", setNum);
btn4.addEventListener("click", setNum);
btn5.addEventListener("click", setNum);
btn6.addEventListener("click", setNum);
btn7.addEventListener("click", setNum);
btn8.addEventListener("click", setNum);
btn9.addEventListener("click", setNum);
btnAdd.addEventListener("click", add);
btnSub.addEventListener("click", subtract);
btnEq.addEventListener("click", equals);

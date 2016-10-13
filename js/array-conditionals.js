// array values must be inside square brackets
var myVar = ["five",6, "7"];
var myMessage = ["This is great", "This is 6", "7, yo"]

if (myVar[2]==7) {
  console.log(myMessage[2]);
}

if (myVar[0]=="five") {
  console.log(myMessage[0]);
}

var myArr = [5,"-"];

if (myArr[1]=="+"){
  myArr[0] = myArr[0] + 10;
  console.log(myArr[0]);
}

if (myArr[1]=="-"){
  myArr[0] = myArr[0] - 2;
  console.log(myArr[0]);
}

console.log("sup");

var range = document.getElementById("range");
var number = document.getElementById("number");





//I found this solution on stack overflow. Why use "input" instead of "chage">

range.addEventListener("input", function (rangeValue){
  number.value=rangeValue.target.value;
});



number.addEventListener("input", function (numberValue){
  number.value=numberValue.target.value;
});
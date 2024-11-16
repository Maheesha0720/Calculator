
function Calc() {
  let output = document.getElementById("output");
  let number1 = Number(document.getElementById("number1").value);
  let number2 = Number(document.getElementById("number2").value);
  let operater=document.getElementById("op").value;
 
 switch(operater){
  case "+":
   
    output.innerHTML=number1+number2;
    console.log(number1+number2);
    break;

    case "-":
    output.innerHTML=number1-number2;
    console.log(number1-number2);
    break;

    case "/":
    output.innerHTML=number1/number2;
    console.log(number1/number2);
    break;

    case "*":
    output.innerHTML=number1*number2;
    console.log(number1*number2);
    break;


    case "x":
    output.innerHTML=number1*number2;
    console.log(number1*number2);
    break;
 }
}

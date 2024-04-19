#! /usr/bin/env/node

import inquirer from "inquirer";
//Asking Question from Users through Inquirer
let answer = await inquirer.prompt([
    {message:"Enter First Number",type:"number",name:"firstNumber"},
   {message:"Enter second Number",type:"number",name:"secondNumber"},
   {
    message:"select one of the operator to perform operations",
    type:"list",
    name:"operator",
    choices:["Addition","Subtraction","Multiplication","Division"],
   },
]);
//conditional statements If-Else
if(answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber)
}
else if(answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber)
}
else if(answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber)
}
else if(answer.operator === "Division"){
    console.log(answer.firstNumber /answer.secondNumber)
}
else{
console.log("Invalide Input")
}
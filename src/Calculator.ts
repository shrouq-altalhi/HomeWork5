// import * as r from "readline-sync";
import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";
function math(): void {
  const firststr: string = question(`Enter First Number: `);
  const operator: string = question(`Enter Operator: `);
  const secondstr: string = question(`Enter Second Number: `);
  const firstnum = isNum(firststr);
  const op = isOperator(operator);
  const secondnum = isNum(secondstr);
  const validInput: boolean =
    isNum(firststr) && isOperator(operator) && isNum(secondstr);
  if (validInput) {
    // console.log("is valid ");
    const firstnum: number = parseInt(firststr);
    const secondnum: number = parseInt(secondstr);
    const result = calculate(firstnum, operator as Operator, secondnum);
  } else {
    console.log(`invalid input `);
    math();
  }
  //   console.log(firstnum, op, secondnum);
}

function calculate(firstnum: number, operator: Operator, secondnum: number) {
  switch (operator) {
    case "+":
      return firstnum + secondnum;
    case "-":
      return firstnum - secondnum;
    case "*":
      return firstnum * secondnum;
    case "/":
      return firstnum / secondnum;
  }
}

math();

function isOperator(operator: string): boolean {
  switch (operator) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
    default:
      return false;
  }
}

function isNum(str: string): boolean {
  const num = parseInt(str);
  const isNum: boolean = !isNaN(num);
  return isNum;
}

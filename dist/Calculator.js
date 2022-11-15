"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as r from "readline-sync";
const readline_sync_1 = require("readline-sync");
function math() {
    const firststr = (0, readline_sync_1.question)(`Enter First Number: `);
    const operator = (0, readline_sync_1.question)(`Enter Operator: `);
    const secondstr = (0, readline_sync_1.question)(`Enter Second Number: `);
    const firstnum = isNum(firststr);
    const op = isOperator(operator);
    const secondnum = isNum(secondstr);
    const validInput = isNum(firststr) && isOperator(operator) && isNum(secondstr);
    if (validInput) {
        // console.log("is valid ");
        const firstnum = parseInt(firststr);
        const secondnum = parseInt(secondstr);
        const result = calculate(firstnum, operator, secondnum);
    }
    else {
        console.log(`invalid input `);
        math();
    }
    //   console.log(firstnum, op, secondnum);
}
function calculate(firstnum, operator, secondnum) {
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
function isOperator(operator) {
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
function isNum(str) {
    const num = parseInt(str);
    const isNum = !isNaN(num);
    return isNum;
}

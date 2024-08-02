"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// use fs to read from a text file ✅
// create cpy (copy) inc (increase) dec (decrease) jnz (jump)
// split it by line so we can get all of the operations
// split the operations into each part command/input
//let instead of var because var gets hoisted to the top
var registers = {
    "a": 0,
    "b": 0,
    "c": 0,
    "d": 0
};
var inputData = fs.readFileSync('copy.txt', 'utf8');
// console.log(inputData);
var readCommands = inputData.split(/\r?\n/);
//console.log(readCommands);
//es6 syntax
//work on these functions
var copy = function (x, y) {
    console.log("register ".concat(y, " before: ").concat(registers[y]));
    registers[y] = x;
    console.log("register ".concat(y, " after: ").concat(registers[y]));
    // console.log(y);
    // console.log(x);
};
// const increase = (x: string) => {
//     registers[x]++;
// }
// const decrease = (x: string) => {
//     registers[x]--;
// }
// const jump = (x?: string, y?: string) => {
// }
var executeText = function () {
    readCommands.forEach(function (command) {
        var pieces = command.split(' ');
        //console.log(pieces);
        switch (pieces[0]) {
            case 'cpy':
                copy(pieces[1], pieces[2]);
                break;
            // case 'inc':
            //     increase();
            //     break;
            // case 'dec':
            //     decrease();
            //     break;
            // case 'jnz':
            //     jump();
            //     break;
            default:
        }
    });
};
//https://adventofcode.com/2016/day/12
executeText();

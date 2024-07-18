"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// use fs to read from a text file ✅
// create cpy (copy) inc (increase) dec (decrease) jnz (jump)
// split it by line so we can get all of the operations
// split the operations into each part command/input
//let instead of var because var gets hoisted to the top
var registerA = 0;
var registerB = 0;
var registerC = 0;
var registerD = 0;
var inputData = fs.readFileSync('input.txt', 'utf8');
// console.log(inputData);
function cpy(x, y) {
    if (x == 'a') {
        registerA[x];
    }
}
function inc(x) {
    if (x == 'a') {
        registerA++;
    }
    if (x == 'b') {
        registerB++;
    }
    if (x == 'c') {
        registerC++;
    }
    if (x == 'd') {
        registerD++;
    }
}
function dec(x) {
    if (x == 'a') {
        registerA--;
    }
    if (x == 'b') {
        registerB--;
    }
    if (x == 'c') {
        registerC--;
    }
    if (x == 'd') {
        registerD--;
    }
}
var readCommands = inputData.split(/\r?\n/);
//console.log(readCommands);
//es6 syntax
var executeText = function () {
    readCommands.forEach(function (command) {
        var pieces = command.split(' ');
        console.log(pieces);
    });
};
executeText();

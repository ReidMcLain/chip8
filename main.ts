import * as fs from 'fs';

// use fs to read from a text file ✅
// create cpy (copy) inc (increase) dec (decrease) jnz (jump)
// split it by line so we can get all of the operations
// split the operations into each part command/input

//let instead of var because var gets hoisted to the top

let registers: { [key: string]: number }
    =
{
    "a": 0,
    "b": 0,
    "c": 0,
    "d": 0
}

let PC = 0;

const inputData = fs.readFileSync('input.txt', 'utf8');

// console.log(inputData);

const readCommands = inputData.split(/\r?\n/);


// console.log(readCommands);

// es6 syntax

//work on these functions
const copy = (x: string, y: string) => {
    // console.log(`register ${y} before: ${registers[y]}`);
    if ((/[a-zA-Z]/).test(x)) {
        registers[y] = registers[x];
        // console.log((/[a-zA-Z]/).test(x));
    } else {
        registers[y] = Number(x);
    }
    // console.log(`register ${y} after: ${registers[y]}`);
    // console.log(y);
    // console.log(x);
    // console.log(typeof registers[y]);
}



const increase = (x: string) => {
    // console.log(`register ${x} before: ${registers[x]}`);
    registers[x]++;
    // console.log(`register ${x} after: ${registers[x]}`);
}

const decrease = (x: string) => {
    // console.log(`register ${x} before: ${registers[x]}`);
    registers[x]--;
    // console.log(`register ${x} before: ${registers[x]}`);
}

const jump = (x: string, y: string) => {
    let conditional;

    //This checks if x is a string or a number
    if ((/[a-zA-Z]/).test(x)) {
    //If Register x does not equal zero
        conditional = registers[x] !== 0;
    } 
    else 
    {   
        //If x is passed in as a number and not equal to zero
        conditional = Number(x) !== 0;
    }

    if (conditional)
    {
        // console.log(readCommands[PC]);
        PC += Number(y);
        PC--;
        // console.log(readCommands[PC]);
    }
}

const executeText = () => {
    while (PC < readCommands.length) {

        const pieces = readCommands[PC].split(' ');
        // console.log(pieces);

        switch (pieces[0]) {
            case 'cpy':
                copy(pieces[1], pieces[2]);
                break;
            case 'inc':
                increase(pieces[1]);
                break;
            case 'dec':
                decrease(pieces[1]);
                break;
            case 'jnz':
                jump(pieces[1], pieces[2]);
                break;
            default:
        }
        PC++;
    }
    console.log(registers);
}
    //https://adventofcode.com/2016/day/12
    
    executeText();
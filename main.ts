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

const inputData = fs.readFileSync('copy.txt', 'utf8');

// console.log(inputData);

const readCommands = inputData.split(/\r?\n/);

//console.log(readCommands);

//es6 syntax

//work on these functions
const copy = (x: string, y: string) => {
    console.log(`register ${y} before: ${registers[y]}`);
    registers[y] = x;
    console.log(`register ${y} after: ${registers[y]}`);
    // console.log(y);
    // console.log(x);
}

 

// const increase = (x: string) => {
//     registers[x]++;
// }

// const decrease = (x: string) => {
//     registers[x]--;
// }

// const jump = (x?: string, y?: string) => {

// }

const executeText = () => {
    readCommands.forEach(command => {
        const pieces = command.split(' ');
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
    }
    )
}

//https://adventofcode.com/2016/day/12

executeText();
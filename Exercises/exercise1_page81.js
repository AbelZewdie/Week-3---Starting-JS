//conversion_tests.js

// Description: This script tests various numeric
// conversion techniques
// Author: Jordan Q. Newprogrammer

let a = "   101.1   ";

let pi_a = parseInt(a);
let pf_a = parseFloat(a);
let n_a = Number(a);
let u_a = +a; //Unary operator '+'

console.log(`"${a}"`, pi_a, pf_a, n_a, u_a);  //`"${a}"` to show as it is.


//COPY PASTE A TO B

let b = "55";

let pi_b = parseInt(b);
let pf_b = parseFloat(b);
let n_b = Number(b);
let u_b = +b; //Unary operator '+'

console.log(`"${b}"`, pi_b, pf_b, n_b, u_b);  //`"${a}"` to show as it is.



//COPY PASTE B TO C

let c = "402 Steven";

let pi_c = parseInt(c);
let pf_c = parseFloat(c);
let n_c = Number(c);
let u_c = +c; //Unary operator '+'

console.log(`"${c}"`, pi_c, pf_c, n_c, u_c);  //`"${a}"` to show as it is.


//COPY PASTE C TO D


let d = "Number 5 ";

let pi_d = parseInt(d);
let pf_d = parseFloat(d);
let n_d = Number(d);
let u_d = +d; //Unary operator '+'

console.log(`"${d}"`, pi_d, pf_d, n_d, u_d);  //`"${a}"` to show as it is.

console.log(typeof u_d) // NaN is type of a number.
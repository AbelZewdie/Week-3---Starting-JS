let amount = "33";
let tax = amount * 0.08; //8% sales tax
let taxPay = ""; //a Boolean variable


if (tax == 0){
  taxPay = false;
}else if(tax > 0){
  taxPay = true;
}

console.log("The tax payable is going to be", taxPay)
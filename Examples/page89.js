//Exercise, If script

//INPUTS
payRate = 25;
hoursWorked = 40;

//OUTPUT
let reason = "";
let grossPay = payRate * hoursWorked; //DEFAULT

// grossPay = 250;
// reason = "Under 40 hours";

//CONSTANTS
const LIMIT = 40;
const overTimeMultiplier = 1.5;
//EVALUATE EXPRESSION
const isOver = hoursWorked > LIMIT;
const isUnder = hoursWorked < LIMIT;

//MAKE A DECISION
if(hoursWorked > LIMIT){
reason = "IS OVER LIMIT"
const overtimeHours = hoursWorked - LIMIT;
const basePay = LIMIT * payRate;
const bonusRate = overTimeMultiplier * payRate;
const extraPay = overtimeHours * bonusRate;
grossPay = basePay + extraPay;
}else if(isUnder){
  reason ="is under limit"
}else{//EXACT
reason = "IS EXACTLY AT LIMIT"}

//FINAL OUTPUT
console.log("GROSS PAY:", grossPay, "REASON:", reason, LIMIT);


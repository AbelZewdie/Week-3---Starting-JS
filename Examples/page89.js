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
const STANDARD_HOURS = 40;       
const overTimeMultiplier = 1.5;
//EVALUATE EXPRESSION
const isOver = hoursWorked > STANDARD_HOURS;
const isUnder = hoursWorked < STANDARD_HOURS;

//MAKE A DECISION
if(hoursWorked > STANDARD_HOURS){
reason = "IS OVER LIMIT"
const overtimeHours = hoursWorked - STANDARD_HOURS;
const basePay = STANDARD_HOURS * payRate;
const bonusRate = overTimeMultiplier * payRate;
const extraPay = overtimeHours * bonusRate;
grossPay = basePay + extraPay;
}else if(isUnder){
  reason ="is under limit"
}else{//EXACT
reason = "IS EXACTLY AT LIMIT"}

//FINAL OUTPUT
console.log("GROSS PAY:", grossPay, "REASON:", reason, STANDARD_HOURS);


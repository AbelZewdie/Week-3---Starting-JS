let hoursEarned = 30;
let classification;

if(hoursEarned < 30){
  classification = "Freshman";
}else if(hoursEarned < 60){
  classification = "Sophomore"
}else if(hoursEarned < 90){
  classification = "Junior";
}else{
  classification = "Senior";
}

console.log(classification)


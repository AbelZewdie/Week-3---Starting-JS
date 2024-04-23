
const age = 55;
let can_vote = undefined;

if(age >= 18 && age <= 100){ //if true   (We can use || to make it or)
  can_vote = true;
}else{ //if not true
  can_vote = false;
}

console.log(can_vote);
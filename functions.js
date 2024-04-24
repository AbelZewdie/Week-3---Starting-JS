
function greet(){
  console.log("Howdy!!!")
}

greet();

function greet2(username){
  console.log("Howdy " + username + "!!!")
}

greet2("Abel")
greet2("Doyo")

function greet3(username){
  return "Howdy " + username + "!!!";
}

result = greet3("Bob");
console.log(result)

function greet4(username){
  text = "Howdy " + username + "!!!";
  console.log(text)
}

greet4("Jojo");

function getState(){
  return "Oregon";
}
function getAddress(){
  return "Columbia City, " + getState();
}

console.log(getState())
console.log(getAddress())
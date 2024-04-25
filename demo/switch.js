



price = 10
size = "ትንሽ"

// switch (size) {

//   case "tiny":
//   case "small": 
//   price -= 2; 
//   break;
// case "extra large":
// case 'large': 
// price += 2; 
// break;
// default: 
// break;
// }


if(size == "ትንሽ"){
  price -=2;
}else if(size =="በጣም ትንሽ"){
  price -=2;
}else if(size =="ትልቅ"){
  price +=2;
}else if(size == "ብጣም ትልቅ"){
  price +=2; 
}


// if(size == "tiny" || size == "small"){
//   price -= 2;
// }else if(size == "large" || size == "extra large"){
//   price += 2;
// }










console.log(price);




price = 10
size = "tiny"

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


if(size == "tiny"){
  price -=2;
}else if(size =="small"){
  price -=2;
}else if(size =="large"){
  price +=2;
}else if(size == "extra large"){
  price +=2; 
}


// if(size == "tiny" || size == "small"){
//   price -= 2;
// }else if(size == "large" || size == "extra large"){
//   price += 2;
// }










console.log(price);
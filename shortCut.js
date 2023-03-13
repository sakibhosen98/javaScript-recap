// 'almal', 5, true, []
// '', 0, false, null, undefind

// check any truethy
let myVar = 775;
if(myVar){
  myVar = myVar * 100;
}
else{
  myVar = 0;
}

let myMOney = 50;
// you check negative of falsy anything
if(!myMOney){

}

const money = 800;
let food;
if(money > 100){
  food = 'biriani';
}
else{
  food = 'cha biscuit';
}

// ternary

let food1 = money>100 ? 'biryani' : 'cha biscuit';

// console.log(food1)

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';

// console.log(drink);


// number to string conversion:
const num1 = 52;
console.log(num1)
const numStr = num1 + '';
console.log(numStr)

// string to number
const input = '560';
const inputNum = +input; // var er number er age + diye number e convert kora jay
// console.log(inputNum)


// 
let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be execute
isActive || hideUser();

// toggle boolean (meaning ta ultaiya dey yes thakle no, no thakle yes)
isActive = !isActive;
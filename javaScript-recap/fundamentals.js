// 1. How to declare a variable using let and const

const fatherName = 'Anrold';
let season = 'rainy';
season = 'winter';


// 2. conditions:
//  6 basic conditions >, < , ===, !==, <=, >=
// multiple conditions: && , ||

if(fatherName === 'Anrold' || season === 'rainy'){
  console.log()
}
else if(fatherName === 'Anrold'){

}
else{

}

// 3. Array:
// index,
// length, push,

const numbers = [23, 90, 45, 87, 45];
numbers[0] = 55;


// 4. Loops:

for(let i = 0; i < numbers.length; i++){
  const number = numbers[i];
  console.log(number)
}


// 5. function:
function multiple(num1, num2){
  const result = num1 * num2;
  return result;
}

const output = multiple(23, 44);


// 6. Object:
// 3 ways to access property by name-
const student = {
  name: 'Shakib khan',
  age: 32,
  movies: ['king khan', 'Dhakar mastan']
}
const myVariable = 'age';

console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable

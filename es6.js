const numbers = [23, 90, 45, 87, 45];
const student = {
  name: 'Shakib khan',
  age: 32,
  movies: ['king khan', 'Dhakar mastan']
}

// 1. Template string:
const about = `My Name is : ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]} `;

// 2. Arrow function: 
const getFiftyFive = () => 55;  // 55 return korbe.
const addSixtyFive = num => num + 65; // num er sathe 65 add kore return korbe.
const isEven = x => x % 2 == 0;  // even number return korbe.
const addThree = (x,y,z) => x+y+z;
const multiLine = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
}

// 3. Spread operator:
const newNumbers = [...numbers];
const currentNumbers = [...numbers, 55];
numbers.push(88);
numbers.push(88);
// create a new array from an older array and add an element:
console.log(numbers)
console.log(newNumbers)
console.log(currentNumbers)
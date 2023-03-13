// JSON => stringfy and parse

const student = {
  name: 'Shakib khan',
  age: 32,
  movies: ['king khan', 'Dhakar mastan']
}


const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj)


// 2. fetch:

fetch('url')
.then(res => res.json())
.then(data => console.log(data));



// object keyw and values
const keys = Object.keys(student);
const values = Object.values(student);

// for 
const numbers = [23, 33, 55, 66, 99];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in


// add or remove from an array:
const products = [
  {name: 'loptop', price: 3200, brand: 'lenovo', color: 'silver'},
  {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
  {name: 'watch', price: 2500, brand: 'casio', color: 'yellow'},
  {name: 'sunglass', price: 6200, brand: 'ribon', color: 'black'},
  {name: 'camera', price: 3000, brand: 'canon', color: 'gray'}
];

const newProduct = {name: 'webcam', price: 700, brand: 'lal'};

// copy products array and then add newProduct
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone.
const remaining = products.filter(product => product.name !== 'phone')
// !== 'phone' mane hocche jeta phone na oi gulo se nibe baki.

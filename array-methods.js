const products = [
  {name: 'loptop', price: 3200, brand: 'lenovo', color: 'silver'},
  {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
  {name: 'watch', price: 2500, brand: 'casio', color: 'yellow'},
  {name: 'sunglass', price: 6200, brand: 'ribon', color: 'black'},
  {name: 'camera', price: 3000, brand: 'canon', color: 'gray'}
];

// 1. map():
const brands = products.map(product => product.brand); // array object theke sudu band gulo k map() kore nite pari ei vabe.
// console.log(brands)
const prices = products.map(product => product.price);
// console.log(prices)

// 2. forEach():
products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))

products.forEach(product => {
  // multi line use kora jabe.
})


// 3. filter():
const cheapPrice = products.filter(product => product.price <= 5000);
// console.log(cheapPrice)


const specificName = products.filter(product => product.name.includes('n'));
// console.log(specificName)
const specificName2 = products.filter(product => product.color.includes('y'));
// console.log(specificName2)
// includes('y') diye color er value er moddhe kono value thakle seta k dibe.

// 4. find:
const special = products.find(product => product.name.includes('n'));
console.log(special)
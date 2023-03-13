const person = {
  name: 'lal nil holud mia',
  profession: 'traffic surgeon',
  age: 30,
  'son-name': 'sany',
  25: 'summar',
  address: 'shahbag'
}

//dot notation
const prof1 = person.profession;

// bracket notation
const pro2 = person['profession'];
const pName = 'profession';
const pro3 = person[pName];
// console.log(pro2)
// console.log(pro3)

const season = person[25];
// console.log(season)

const sName = person['son-name'];
console.log(sName)
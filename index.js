//BD1 - Assignments
const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let person = {
  firstName: 'Rajdhan',
  lastName: 'Patel',
  gender: 'male',
  age: 30,
  isMember: true,
};

app.get('/person', (req, res) => {
  res.json(person);
});

function getfullname(person) {
  return person.firstName + ' ' + person.lastName;
}
app.get('/person/fullname', (req, res) => {
  let fullname = getfullname(person);
  res.json({
    fullName: fullname,
  });
});

function getGender(person) {
  return person.firstName + ' ' + person.gender;
}

app.get('/person/firstname-gender', (req, res) => {
  let nameWithGender1 = getGender(person);
  res.json({ nameWithGender: nameWithGender1 });
});

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterEven(num) {
  return num % 2 === 0;
}

app.get('/even-numbers', (req, res) => {
  let ansArr = number.filter((arrayEle) => filterEven(arrayEle));
  res.json(ansArr);
});

let words = ['apple', 'banaan', 'cherry', 'ape', 'ab', 'leo'];

function filterWordGreaterThan5(word) {
  return word.length >= 5;
}

app.get('/long-word', (req, res) => {
  let ansArr = words.filter((getSingleWord) =>
    filterWordGreaterThan5(getSingleWord)
  );
  res.json(ansArr);
});

let products = [
  { name: 'Laptop', price: 50000, category: 'Electronics' },
  { name: 'Mobile', price: 20000, category: 'Electronics' },
  { name: 'Shirt', price: 15000, category: 'Apparel' },
  { name: 'Mixtue Grinder', price: 4000, category: 'Home Appliances' },
];

function productByCat(singleSingleObj, category) {
  return singleSingleObj.category === category;
}

app.get('/products/category/:category', (req, res) => {
  let category = req.params.category;
  let resArray = products.filter((singleSingleObj) =>
    productByCat(singleSingleObj, category)
  );
  res.json(resArray);
});

let cars = [
  { make: 'Maruti', model: 'Swift', mileage: 15000 },
  { make: 'Maruti', model: 'Swift', mileage: 15000 },
  { make: 'Hyundai', model: 'i20', mileage: 25000 },
  { make: 'Tata', model: 'Nexon', mileage: 30000 },
];

// get Car which have mileage less than the specified mileage

function findByMileage(oneObj, getMileage) {
  return oneObj.mileage < getMileage;
}

app.get('/cars/mileage/:mileage', (req, res) => {
  let getMileage = req.params.mileage;
  let resArr = cars.filter((oneObj) => findByMileage(oneObj, getMileage));
  res.json(resArr);
});

let ages = [33, 34, 23, 54, 63, 65];
//sort ages on asc and desc order

function sortByAsc(age1, age2) {
  return age1 - age2;
}
app.get('/ages/sort-asc', (req, res) => {
  //sort method will change the original arr so first make a copy and perform on copy
  let copy = [];
  copy = [...ages];
  copy.sort(sortByAsc); // dont need to pass arg in sortByAsc() bcoz it will automatic take two arg
  res.json(copy);
});

function sortByDesc(age1, age2) {
  return age2 - age1;
}
app.get('/ages/sort-desc', (req, res) => {
  //sort method will change the original arr so first make a copy and perform on copy
  let copy = [];
  copy = [...ages];
  copy.sort(sortByDesc); // dont need to pass arg in sortByAsc() bcoz it will automatic take two arg
  res.json(copy);
});

let students = [
  { name: 'Amit', rollNo: 102, marks: 45 },
  { name: 'Ravi', rollNo: 103, marks: 40 },
  { name: 'Sumit', rollNo: 104, marks: 48 },
];

//sort in asc order of the marks
function sortByMarkAsc(s1, s2) {
  return s1.marks - s2.marks;
}
app.get('/students/sort-by-mark-asc', (req, res) => {
  //let copy = [...students];//this will work for arr only
  let copy = students.slice(); // this will work for obj
  console.log(copy);
  copy.sort(sortByMarkAsc);
  res.json(copy);
});

function sortByMarkDesc(s1, s2) {
  return s2.marks - s1.marks;
}
app.get('/students/sort-by-mark-desc', (req, res) => {
  let copy = [...students]; /
  //let copy = students.slice(); // this will also work

  copy.sort(sortByMarkDesc);
  res.json(copy);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

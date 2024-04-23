//REST SPREAD OPERATOR PRACTICE EXERCISE

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }
const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

// findMin

const findMin = (...args) => Math.min(...args);

console.log(findMin(1, 4, 12, -3)); // -3
console.log(findMin(1, -1)); // -1
console.log(findMin(3, 1)); // 1

// mergObjects

const mergeObjects = (obj1, obj2, obj3) => ({ ...obj1, ...obj2, ...obj3 });

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4, e: 5 })); // {a:1, b:2, c:3, d:4}

// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...nums) => [
  ...arr,
  ...nums.map((num) => num * 2),
];

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); // [1,2,3,8,8]
console.log(doubleAndReturnArgs([2], 10, 4)); // [2, 20, 8]

// =====SLICE AND DICE======

/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {

// }

const removeRandom = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {}
const extend = (array1, array2) => {
  return [...array1, ...array2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {}

const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

/** Return a new object with a key removed. */

// function removeKey(obj, key) {}

const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return;
};

/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {}

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */

// function update(obj, key, val) {}

const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

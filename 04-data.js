// 1.  Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
// Your code here.
function range(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}
// console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2.  Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
// Your code here
function sum(numsArr) {
  return numsArr.reduce((acumulator, currentVal) => acumulator + currentVal);
}
// console.log(sum(range(1, 10)));
// → 55

// 3.  As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
// Your code here.
function range(start, end, step = 1) {
  let arr = [];
  if (step < 0) {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
}
// console.log(range(1,10,2))
// [1,3,5,7,9]
// console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

// For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
// Your code here.
function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
// console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
function reverseArrayInPlace(arr) {
  for (i = 0; i < arr.length; i++) {
    arr.splice(i, 0, arr.pop());
  }
}
reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
// If you haven’t already, also write a recursive version of nth.
// Your code here.
function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}
// console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

function listToArray(list) {
  let array = [];
  while (list != null) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}
// console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

function prepend(element, list) {
  return {
    value: element,
    rest: list,
  };
}
// console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

function nth(list, number) {
  return listToArray(list)[number];
}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

function nthRecursive(list, number) {
  if (number === 0) {
    return list.value;
  } else if (list.rest === null) {
    return undefined;
  } else {
    return nthRecursive(list.rest, number - 1);
  }
}
// console.log(nthRecursive(arrayToList([10, 20, 30]), 1));

// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.
// Your code here.
function deepEqual(obj1, obj2) {
  if (obj1 === obj2)
    // it's just the same object. No need to compare.
    return true;

  if (isPrimitive(obj1) && isPrimitive(obj2))
    // compare primitives
    return obj1 === obj2;

  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  // compare objects with same number of keys
  for (let key in obj1) {
    if (!(key in obj2)) return false; //other object doesn't have this prop
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }
  return true;
}

//check if value is primitive
function isPrimitive(obj) {
  return obj !== Object(obj);
}

let obj = { here: { is: "an" }, object: 2 };
// console.log(deepEqual(obj, obj));
// → true
// console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
// console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true

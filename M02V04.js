// Some

const numbers = [1, 2, 3,  7, 5];

const hasEvenNumber = numbers.some((number) => number% 2 ===0);

// console.log(hasEvenNumber);


const currentUserRoles = ["user", "editor", ];

const featureAccessRoles = ["admin", "manager"];

const canAccess = currentUserRoles.some((role) => 
    featureAccessRoles.includes(role))

// console.log(canAccess);

// Array.from()

const arr = Array.from({length: 5}, (_, i) => i + 1);

console.log(arr);

const arr2 = Array.from([1,2, 3, 5], (value, i) => value * value)
console.log(arr2);

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );


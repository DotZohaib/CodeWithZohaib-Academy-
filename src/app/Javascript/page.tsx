// pages/index.js
'use client'
import React, { useState, useEffect } from 'react';
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"; // Optional: Add a Prism theme

const Javascript = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const array = [
    {
      id: 1,
      Title: "1. What is JavaScript?",
      answer: "JavaScript is a versatile programming language primarily used for adding interactivity to web pages.",
      Sample: "JavaScript allows developers to create dynamic content, control multimedia, animate images, and much more.",
      code: `console.log("Hello, World!");`
    },
    {
      id: 2,
      Title: "2. What are JavaScript data types?",
      answer: "JavaScript supports several data types, including undefined, null, boolean, string, number, BigInt, and object.",
      Sample: "Data types are important for defining what kind of data can be stored and manipulated.",
      code: `let number = 42; // number
let name = "John"; // string
let isActive = true; // boolean`
    },
    {
      id: 3,
      Title: "3. What is a function in JavaScript?",
      answer: "A function is a block of code designed to perform a particular task and is executed when called.",
      Sample: "Functions help organize code into reusable blocks.",
      code: `function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));`
    },
    {
      id: 4,
      Title: "4. What is the DOM?",
      answer: "The Document Object Model (DOM) is an interface that browsers implement to structure a web document as a tree of objects.",
      Sample: "JavaScript can manipulate the DOM to dynamically change the document structure, style, and content.",
      code: `document.getElementById("myElement").innerHTML = "Hello, World!";`
    },
    {
      id: 5,
      Title: "5. What are JavaScript arrays?",
      answer: "Arrays in JavaScript are list-like objects used to store multiple values in a single variable.",
      Sample: "Arrays can hold items of any data type and provide various methods for manipulation.",
      code: `const fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]); // Output: banana`
    },
    {
      id: 6,
      Title: "6. What is an object in JavaScript?",
      answer: "An object is a collection of properties, where each property is defined as a key-value pair.",
      Sample: "Objects allow grouping related data and functionality together.",
      code: `const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet(); // Output: Hello, John`
    },
    {
      id: 7,
      Title: "7. What is a callback function?",
      answer: "A callback function is a function passed as an argument to another function, which is then invoked inside that function.",
      Sample: "Callbacks are commonly used for handling asynchronous operations.",
      code: `function fetchData(callback) {
    // Simulating an asynchronous operation
    setTimeout(() => {
        const data = "Data fetched!";
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log(data); // Output: Data fetched!
});`
    },
    {
      id: 8,
      Title: "8. What is the difference between let, const, and var?",
      answer: "let and const are block-scoped variables, while var is function-scoped. const is used for constants that can't be reassigned.",
      Sample: "Choosing the right declaration is crucial for maintaining scope and immutability.",
      code: `let x = 10;
const y = 20;

if (true) {
    var z = 30; // Function-scoped
    let a = 40; // Block-scoped
    const b = 50; // Block-scoped
}

console.log(z); // Output: 30
// console.log(a); // Error: a is not defined
// console.log(b); // Error: b is not defined`
    },
    {
      id: 9,
      Title: "9. What is the purpose of the 'this' keyword?",
      answer: "'this' refers to the object that is currently executing the function, which can vary based on the context.",
      Sample: "Understanding 'this' is key for writing clean and efficient object-oriented JavaScript.",
      code: `const obj = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

obj.greet(); // Output: Hello, John`
    },
    {
      id: 10,
      Title: "10. What are promises in JavaScript?",
      answer: "Promises are objects that represent the eventual completion or failure of an asynchronous operation.",
      Sample: "They allow chaining of asynchronous operations and provide better handling of errors.",
      code: `const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
    }, 1000);
});

myPromise.then(result => {
    console.log(result); // Output: Success!
}).catch(error => {
    console.error(error);
});`
    },
    {
      id: 11,
      Title: "11. What is the difference between == and ===?",
      answer: "== checks for value equality, while === checks for value and type equality.",
      Sample: "Use === for strict comparisons to avoid unexpected type coercion.",
      code: `console.log(0 == '0');  // true
console.log(0 === '0'); // false`
    },
    {
      id: 12,
      Title: "12. What is event bubbling?",
      answer: "Event bubbling is a mechanism where events propagate from the target element up to the root of the DOM.",
      Sample: "This allows multiple elements to handle the same event without adding listeners to each one.",
      code: `document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", function() {
    console.log("Child clicked");
});`
    },
    {
      id: 13,
      Title: "13. What is hoisting?",
      answer: "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during compilation.",
      Sample: "Variables declared with var are hoisted, but those declared with let and const are not.",
      code: `console.log(x); // undefined
var x = 5;`
    },
    {
      id: 14,
      Title: "14. What is the difference between synchronous and asynchronous programming?",
      answer: "Synchronous programming executes tasks sequentially, while asynchronous programming allows tasks to run concurrently, enabling better performance.",
      Sample: "Use async/await for cleaner asynchronous code.",
      code: `async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}` 
    },
    {
      id: 15,
      Title: "15. What is closure?",
      answer: "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.",
      Sample: "Closures are useful for creating private variables.",
      code: `function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2`
    },
    {
      id: 16,
      Title: "41. How does a basic 'for' loop work in JavaScript?",
      answer: "A 'for' loop executes a block of code a specific number of times, based on an initializer, condition, and increment expression.",
      Sample: "It's ideal for iterating when you know the number of iterations beforehand.",
      code: `for (let i = 0; i < 5; i++) {
    console.log(i);
  } // Output: 0, 1, 2, 3, 4`
    },
    {
      id: 17,
      Title: "42. How does 'forEach' work in JavaScript?",
      answer: "'forEach' is a method that iterates over an array and applies a callback function to each element.",
      Sample: "It's useful for applying side effects but doesn't return a new array.",
      code: `const numbers = [1, 2, 3];
  numbers.forEach((num) => {
    console.log(num * 2);
  }); // Output: 2, 4, 6`
    },
    {
      id: 18,
      Title: "43. How do you use 'for...of' in JavaScript?",
      answer: "'for...of' is a loop specifically for iterating over iterable objects like arrays, strings, or NodeLists.",
      Sample: "It provides access to the values of the iterable.",
      code: `const fruits = ["apple", "banana", "cherry"];
  for (const fruit of fruits) {
    console.log(fruit);
  } // Output: apple, banana, cherry`
    },
    {
      id: 19,
      Title: "44. How do you use 'for...in' in JavaScript?",
      answer: "'for...in' is a loop for iterating over the keys of an object.",
      Sample: "It's ideal for object property enumeration, not array iteration.",
      code: `const person = { name: "Alice", age: 25 };
  for (const key in person) {
    console.log(key + ": " + person[key]);
  } // Output: name: Alice, age: 25`
    },
    {
      id: 20,
      Title: "45. How does 'if-else' work in JavaScript?",
      answer: "'if-else' statements conditionally execute code based on whether a condition is true or false.",
      Sample: "Useful for decision-making logic in functions or component rendering.",
      code: `const age = 20;
  if (age >= 18) {
    console.log("You are an adult.");
  } else {
    console.log("You are a minor.");
  }`
    },
    {
      id: 21,
      Title: "46. How does 'switch' work in JavaScript?",
      answer: "The 'switch' statement executes code blocks based on matching cases.",
      Sample: "Use it as a substitute for multiple 'if-else' conditions.",
      code: `const day = "Monday";
  switch (day) {
    case "Monday":
      console.log("Start of the week");
      break;
    case "Friday":
      console.log("Almost weekend");
      break;
    default:
      console.log("Middle of the week");
  }`
    },
    {
      id: 22,
      Title: "16. What is the spread operator?",
      answer: "The spread operator (...) is used to expand an iterable (like an array) into its individual elements.",
      Sample: "It can be used to create copies of arrays or merge multiple arrays.",
      code: `const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]`
    },
    {
      id: 23,
      Title: "17. What are template literals?",
      answer: "Template literals are string literals that allow embedded expressions and multi-line strings, enclosed by backticks (`).",
      Sample: "They provide a cleaner syntax for string interpolation.",
      code: `const name = "Alice";
const greeting = \`Hello, \${name}!\`;
console.log(greeting); // Hello, Alice!`
    },
    {
      id: 24,
      Title: "18. What is a module in JavaScript?",
      answer: "A module is a reusable piece of code that encapsulates functionality and can be imported/exported between files.",
      Sample: "Modules help organize code and promote reusability.",
      code: `// math.js
export function add(a, b) {
    return a + b;
}

// main.js
import { add } from './math.js';
console.log(add(2, 3)); // 5`
    },
    {
      id: 25,
      Title: "19. What is an IIFE?",
      answer: "An Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined.",
      Sample: "IIFEs are often used to create a private scope.",
      code: `(function() {
    console.log("IIFE executed!");
})();`
    },
    {
      id: 26,
      Title: "20. What is the difference between Object.freeze() and Object.seal()?",
      answer: "Object.freeze() prevents any changes to an object, while Object.seal() prevents new properties from being added but allows modification of existing properties.",
      Sample: "Use Object.freeze() for immutable objects.",
      code: `const obj = { prop: 42 };
Object.freeze(obj);
obj.prop = 33; // No effect
console.log(obj.prop); // 42`
    },
    {
      id: 27,
      Title: "21. What is the event delegation?",
      answer: "Event delegation is a technique where a single event listener is added to a parent element to manage events for multiple child elements.",
      Sample: "This improves performance and reduces memory usage.",
      code: `document.getElementById("parent").addEventListener("click", function(event) {
    if (event.target.matches(".child")) {
        console.log("Child clicked");
    }
});`
    },
    {
      id: 28,
      Title: "22. What is JSON?",
      answer: "JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write.",
      Sample: "It is commonly used for APIs and data storage.",
      code: `const obj = { name: "John", age: 30 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // {"name":"John","age":30}`
    },
    {
      id: 29,
      Title: "23. What are arrow functions?",
      answer: "Arrow functions are a shorter syntax for writing function expressions and lexically bind the 'this' value.",
      Sample: "They are ideal for writing concise functions.",
      code: `const add = (a, b) => a + b;
console.log(add(2, 3)); // 5`
    },
    {
      id: 30,
      Title: "24. What is the purpose of the 'bind' method?",
      answer: "The 'bind' method creates a new function that, when called, has its 'this' keyword set to the provided value.",
      Sample: "It is useful for controlling the context of 'this'.",
      code: `const person = {
    name: "Alice",
    greet() {
        console.log("Hello, " + this.name);
    }
};

const greetAlice = person.greet.bind(person);
greetAlice(); // Hello, Alice`
    },
    {
      id: 31,
      Title: "25. What is the difference between shallow copy and deep copy?",
      answer: "A shallow copy creates a new object but copies properties as references, while a deep copy creates a new object and recursively copies nested objects.",
      Sample: "Use JSON methods for deep copying.",
      code: `const obj1 = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, obj1);
const deepCopy = JSON.parse(JSON.stringify(obj1));`
    },
    {
      id: 32,
      Title: "26. What is local storage?",
      answer: "Local storage is a web storage mechanism that allows storing data as key-value pairs in the browser, accessible even after page refreshes.",
      Sample: "Use local storage for persisting user data.",
      code: `localStorage.setItem('name', 'John');
const name = localStorage.getItem('name');
console.log(name); // John`
    },
    {
      id: 33,
      Title: "27. What is the fetch API?",
      answer: "The fetch API is a modern way to make HTTP requests in JavaScript, returning promises.",
      Sample: "It is commonly used for fetching data from APIs.",
      code: `fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));`
    },
    {
      id: 34,
      Title: "28. What is the purpose of setTimeout()?",
      answer: "setTimeout() is a method that executes a function after a specified delay (in milliseconds).",
      Sample: "It is useful for creating delays or scheduling tasks.",
      code: `setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);`
    },
    {
      id: 35,
      Title: "29. What is 'strict mode'?",
      answer: "Strict mode is a way to opt in to a restricted variant of JavaScript, which helps catch common coding mistakes and 'unsafe' actions.",
      Sample: "It can be enabled by adding 'use strict' at the top of a script or function.",
      code: `'use strict';
function myFunction() {
    // This will throw an error if 'x' is not declared
    x = 3.14;
}` 
    },
    {
      id: 36,
      Title: "30. What is the difference between function expressions and function declarations?",
      answer: "Function declarations are hoisted, while function expressions are not. Declarations can be called before they are defined.",
      Sample: "Use declarations for top-level functions.",
      code: `console.log(foo()); // "Hello"

function foo() {
    return "Hello";
}

// console.log(bar()); // Error: bar is not a function
const bar = function() {
    return "Hi";
};`
    },
    {
      id: 37,
      Title: "31. What is the 'finally' block in promises?",
      answer: "The 'finally' block is used to execute code after a promise is settled, regardless of its outcome (fulfilled or rejected).",
      Sample: "It is useful for cleanup actions.",
      code: `myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Promise settled."));`
    },
    {
      id: 38,
      Title: "32. What is the 'map' method?",
      answer: "The 'map' method creates a new array populated with the results of calling a provided function on every element in the calling array.",
      Sample: "It is used for transforming data.",
      code: `const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]`
    },
    {
      id: 39,
      Title: "33. What is the 'reduce' method?",
      answer: "The 'reduce' method executes a reducer function on each element of the array, resulting in a single output value.",
      Sample: "It is commonly used for accumulating values.",
      code: `const numbers = [1, 2, 3];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6`
    },
    {
      id: 40,
      Title: "34. What are higher-order functions?",
      answer: "Higher-order functions are functions that take other functions as arguments or return them as output.",
      Sample: "They enable functional programming techniques.",
      code: `function operation(x, y, func) {
    return func(x, y);
}

const add = (a, b) => a + b;
console.log(operation(5, 3, add)); // 8`
    },
    {
      id: 41,
      Title: "35. What is a generator function?",
      answer: "A generator function is a function that can be exited and later re-entered, maintaining its context, allowing you to produce a series of values.",
      Sample: "Generators are useful for creating iterable sequences.",
      code: `function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();
console.log(gen.next().value); // 1`
    },
    {
      id: 42,
      Title: "36. What is the 'instanceof' operator?",
      answer: "The 'instanceof' operator checks whether an object is an instance of a specific constructor or class.",
      Sample: "It is used for type checking.",
      code: `class Animal {}
const dog = new Animal();
console.log(dog instanceof Animal); // true`
    },
    {
      id: 43,
      Title: "37. What is the purpose of 'setInterval()'?",
      answer: "setInterval() is a method that repeatedly executes a function at specified intervals (in milliseconds).",
      Sample: "It is useful for creating timers or periodic updates.",
      code: `setInterval(() => {
    console.log("Executed every second");
}, 1000);`
    },
    {
      id: 44,
      Title: "38. What is the difference between call() and apply()?",
      answer: "Both call() and apply() invoke a function with a specified 'this' value, but call() accepts arguments separately, while apply() accepts an array of arguments.",
      Sample: "Use apply() when you have an array of arguments.",
      code: `function greet(greeting) {
    console.log(\`\${greeting}, \${this.name}\`);
}

const person = { name: "Alice" };
greet.call(person, "Hello"); // Hello, Alice
greet.apply(person, ["Hi"]); // Hi, Alice`
    },
    {
      id: 45,
      Title: "39. What is a Promise.all()?",
      answer: "Promise.all() takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved.",
      Sample: "It is useful for aggregating results from multiple asynchronous operations.",
      code: `const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, "foo"));
const promise3 = 42;

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values); // [3, "foo", 42]
    });`
    },
    {
      id: 46,
      Title: "40. What is the 'slice()' method?",
      answer: "The 'slice()' method returns a shallow copy of a portion of an array into a new array object selected from start to end.",
      Sample: "It is useful for extracting parts of an array.",
      code: `const fruits = ["apple", "banana", "cherry", "date"];
const citrus = fruits.slice(1, 3);
console.log(citrus); // ["banana", "cherry"]`
    },
    {
        id: 47,
        Title: "41. What is the 'for...of' loop?",
        answer: "The 'for...of' loop creates a loop iterating over iterable objects, like arrays, strings, or other collections.",
        Sample: "It simplifies iteration and enhances readability.",
        code: `const numbers = [1, 2, 3];
for (const number of numbers) {
    console.log(number);
}`
    },
    {
        id: 48,
        Title: "42. What are template literals?",
        answer: "Template literals are string literals that allow embedded expressions, multi-line strings, and string interpolation.",
        Sample: "They simplify creating complex strings.",
        code: `const name = "Alice";
    console.log(\`Hello, \${name}!\`); // Output: Hello, Alice!`
    },
    {
        id: 49,
        Title: "43. What is the spread operator?",
        answer: "The spread operator allows an iterable (like an array) to be expanded in places where zero or more arguments or elements are expected.",
        Sample: "It's useful for combining arrays or objects.",
        code: `const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];
    console.log(arr2); // Output: [1, 2, 3, 4, 5]`
    },
    
    {
        id: 50,
        Title: "44. What is the 'reduceRight()' method?",
        answer: "The 'reduceRight()' method executes a reducer function on each element of the array, processing from right to left.",
        Sample: "It's useful for accumulating values in reverse order.",
        code: `const numbers = [1, 2, 3];
const reversedSum = numbers.reduceRight((acc, curr) => acc + curr, 0);
console.log(reversedSum); // 6`
    },
    {
        id: 51,
        Title: "45. What is a self-invoking function?",
        answer: "A self-invoking function is a function that runs as soon as it is defined.",
        Sample: "It's used for creating private scopes.",
        code: `(function() {
    console.log("Self-invoked!");
})();`
    },
    {
        id: 52,
        Title: "46. What is the 'includes()' method?",
        answer: "The 'includes()' method determines whether an array or string contains a certain value.",
        Sample: "It's useful for checking the presence of elements.",
        code: `const fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana")); // true`
    },
    {
        id: 53,
        Title: "47. What is method chaining?",
        answer: "Method chaining is a technique where multiple methods are called on the same object sequentially.",
        Sample: "It improves code readability.",
        code: `const result = [1, 2, 3]
    .map(x => x * 2)
    .filter(x => x > 3)
    .reduce((acc, x) => acc + x, 0);
console.log(result); // 8`
    },
    {
        id: 54,
        Title: "48. What is the 'every()' method?",
        answer: "The 'every()' method tests whether all elements in the array pass the test implemented by the provided function.",
        Sample: "It's useful for validation checks.",
        code: `const numbers = [2, 4, 6];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true`
    },
    {
        id: 55,
        Title: "49. What is the 'some()' method?",
        answer: "The 'some()' method tests whether at least one element in the array passes the test implemented by the provided function.",
        Sample: "It's useful for checking conditions.",
        code: `const numbers = [1, 2, 3];
const hasOdd = numbers.some(num => num % 2 !== 0);
console.log(hasOdd); // true`
    },
    {
        id: 56,
        Title: "50. What are IIFEs (Immediately Invoked Function Expressions)?",
        answer: "IIFEs are functions that are defined and executed immediately.",
        Sample: "They are used to create a new scope.",
        code: `(function() {
    console.log("IIFE executed!");
})();`
    },
    {
        id: 57,
        Title: "51. What is 'Object.assign()'?",
        answer: "Object.assign() copies values from one or more source objects to a target object, returning the target object.",
        Sample: "It's used for object merging.",
        code: `const target = { a: 1 };
const source = { b: 2 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // { a: 1, b: 2 }`
    },
    {
        id: 58,
        Title: "52. What is the 'bind()' method?",
        answer: "The 'bind()' method creates a new function that, when called, has its 'this' keyword set to the provided value.",
        Sample: "It's useful for setting the context of functions.",
        code: `const obj = { x: 42 };
const getX = function() {
    return this.x;
}.bind(obj);
console.log(getX()); // 42`
    },
    {
        id: 59,
        Title: "53. What is 'window.onload'?",
        answer: "window.onload is an event that fires when the whole page (including images, scripts, etc.) is fully loaded.",
        Sample: "It's used to run code after the page is ready.",
        code: `window.onload = function() {
    console.log("Page fully loaded!");
};`
    },
    {
        id: 60,
        Title: "54. What is the 'map()' method?",
        answer: "The 'map()' method creates a new array populated with the results of calling a provided function on every element in the calling array.",
        Sample: "It's used for transforming data.",
        code: `const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]`
    },
    {
        id: 61,
        Title: "55. What is the 'filter()' method?",
        answer: "The 'filter()' method creates a new array with all elements that pass the test implemented by the provided function.",
        Sample: "It's useful for extracting elements.",
        code: `const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]`
    },
    {
        id: 62,
        Title: "56. What is 'localStorage'?",
        answer: "localStorage is a web storage mechanism that allows storing data in the browser with no expiration time.",
        Sample: "It's useful for saving user preferences.",
        code: `localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');
console.log(value); // value`
    },
    {
        id: 63,
        Title: "57. What is the 'sessionStorage'?",
        answer: "sessionStorage is similar to localStorage but data is cleared when the page session ends.",
        Sample: "It's useful for temporary data storage.",
        code: `sessionStorage.setItem('key', 'value');
const value = sessionStorage.getItem('key');
console.log(value); // value`
    },
    {
        id: 64,
        Title: "58. What is 'null' in JavaScript?",
        answer: "null is a primitive value representing the intentional absence of any object value.",
        Sample: "It's often used to indicate no value.",
        code: `let data = null;
console.log(data); // null`
    },
    {
        id: 65,
        Title: "59. What is the 'typeof' operator?",
        answer: "The 'typeof' operator returns a string indicating the type of the unevaluated operand.",
        Sample: "It's useful for debugging and type checking.",
        code: `console.log(typeof "Hello"); // string`
    },
    {
        id: 66,
        Title: "60. What is the 'concat()' method?",
        answer: "The 'concat()' method is used to merge two or more arrays, returning a new array.",
        Sample: "It's useful for combining data.",
        code: `const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]`
    },
    {
        id: 67,
        Title: "61. What are 'async' functions?",
        answer: "Async functions allow you to write promise-based code as if it were synchronous, using 'await' to pause execution.",
        Sample: "They simplify handling asynchronous operations.",
        code: `async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}`
    },
    {
        id: 68,
        Title: "62. What is the 'try...catch' statement?",
        answer: "The 'try...catch' statement allows you to test a block of code for errors and handle them gracefully.",
        Sample: "It's useful for error management.",
        code: `try {
    throw new Error('An error occurred');
} catch (error) {
    console.log(error.message);
}`
    },
    {
        id: 69,
        Title: "63. What is the 'Math.random()' method?",
        answer: "The 'Math.random()' method returns a floating-point, pseudo-random number in the range 0 to less than 1.",
        Sample: "It's useful for generating random values.",
        code: `const randomNum = Math.random();
console.log(randomNum); // e.g., 0.123456`
    },
    {
        id: 70,
        Title: "64. What is the 'setTimeout()' function?",
        answer: "The 'setTimeout()' function calls a function or executes a code snippet after a specified delay (in milliseconds).",
        Sample: "It's useful for creating delays.",
        code: `setTimeout(() => {
    console.log("Executed after 1 second");
}, 1000);`
    },
    {
        id: 71,
        Title: "65. What is the 'setInterval()' function?",
        answer: "The 'setInterval()' function repeatedly calls a function with a fixed time delay between each call.",
        Sample: "It's useful for executing recurring tasks.",
        code: `const interval = setInterval(() => {
    console.log("This will run every second");
}, 1000);`
    }
  ];


  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleCopy = (text: any, index: any) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto font-sans">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">JavaScript Basics and Concepts</h1>

      {array.map((item, index) => (
        <section key={item.id} className="bg-white mx-3 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">{item.Title}</h2>
          <p className="mb-2 text-gray-600"><strong>Answer:</strong> {item.answer}</p>
          <p className="mb-4 text-gray-600"><strong>Sample Wording:</strong> {item.Sample}</p>

          <h3 className="text-lg font-medium mb-2 text-gray-700">Code Example:</h3>
          <div className="relative bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
            <button 
              onClick={() => handleCopy(item.code, index)}
              className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
            >
              {copiedIndex === index ? "Copied!" : "Copy"}
            </button>
            <pre>
              <code className="language-js">{item.code}</code>
            </pre>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Javascript;
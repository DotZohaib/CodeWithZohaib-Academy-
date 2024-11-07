// pages/index.tsx
'use client'
import React, { useState, useEffect } from 'react';
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"; // Optional: Add a Prism theme

interface Question {
  id: number;
  Title: string;
  answer: string;
  Sample: string;
  code: string;
}

const Javascript: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const array: Question[] = [
    {
      id: 1,
      Title: "1. What is TypeScript?",
      answer: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript, adding static typing and other features.",
      Sample: "It helps in catching errors during development through type-checking.",
      code: `const message: string = "Hello, TypeScript!";`
    },
    {
      id: 2,
      Title: "2. What are the benefits of using TypeScript?",
      answer: "TypeScript provides optional static typing, interfaces, enums, and advanced tooling, improving developer productivity and code quality.",
      Sample: "Type annotations help to document code better and catch type-related errors early.",
      code: `function add(a: number, b: number): number {
    return a + b;
}`
    },
    {
      id: 3,
      Title: "3. How do you declare variables in TypeScript?",
      answer: "You can declare variables using 'let', 'const', or 'var', and specify types using annotations.",
      Sample: "Using 'let' for mutable variables and 'const' for constants helps in maintaining immutability.",
      code: `let age: number = 30;
const name: string = "Alice";`
    },
    {
      id: 4,
      Title: "4. What are interfaces in TypeScript?",
      answer: "Interfaces in TypeScript define a contract for the structure of an object, allowing for better type-checking.",
      Sample: "They help enforce consistent object shapes across your codebase.",
      code: `interface Person {
    name: string;
    age: number;
}

const user: Person = { name: "Alice", age: 25 };`
    },
    {
      id: 5,
      Title: "5. What is a union type?",
      answer: "A union type allows a variable to hold multiple types. You define it using the pipe (|) symbol.",
      Sample: "This is useful for functions that can accept different types of arguments.",
      code: `function printId(id: number | string) {
    console.log("ID: " + id);
}`
    },
    {
      id: 6,
      Title: "6. What are enums in TypeScript?",
      answer: "Enums allow you to define a set of named constants, which can be numeric or string values.",
      Sample: "They improve code readability and maintainability.",
      code: `enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green;`
    },
    {
      id: 7,
      Title: "7. What is a tuple?",
      answer: "A tuple is a fixed-size array with elements of different types, defined with specific type annotations.",
      Sample: "They can be used to group related data together.",
      code: `let person: [string, number] = ["Alice", 30];`
    },
    {
      id: 8,
      Title: "8. What is type inference?",
      answer: "Type inference is the ability of TypeScript to automatically deduce types based on variable assignments.",
      Sample: "This allows developers to omit type annotations when the types can be inferred.",
      code: `let count = 10; // TypeScript infers count as number`
    },
    {
      id: 9,
      Title: "9. How do you create a function in TypeScript?",
      answer: "Functions can be declared with type annotations for parameters and return types.",
      Sample: "This ensures that the function is called with the correct types.",
      code: `function greet(name: string): string {
    return "Hello, " + name;
}`
    },
    {
      id: 10,
      Title: "10. What is the 'any' type?",
      answer: "The 'any' type allows a variable to hold any type of value, disabling type checking.",
      Sample: "It should be used sparingly, as it defeats the purpose of TypeScript.",
      code: `let anything: any = "Hello";
anything = 5;`
    },
    {
      id: 11,
      Title: "11. What are generics in TypeScript?",
      answer: "Generics allow you to create reusable components that can work with any data type.",
      Sample: "They provide type safety while still being flexible.",
      code: `function identity<T>(arg: T): T {
    return arg;
}`
    },
    {
      id: 12,
      Title: "12. How do you handle exceptions in TypeScript?",
      answer: "You handle exceptions using try-catch blocks, just like in JavaScript.",
      Sample: "You can throw errors with specific types.",
      code: `try {
    throw new Error("An error occurred");
} catch (e) {
    console.error(e);
}`
    },
    {
      id: 13,
      Title: "13. What is the difference between 'interface' and 'type'?",
      answer: "Both 'interface' and 'type' can be used to define object shapes, but interfaces can be merged, while types cannot.",
      Sample: "Use interfaces when you need to extend or implement.",
      code: `interface User {
    name: string;
}

type Admin = User & { isAdmin: boolean };`
    },
    {
      id: 14,
      Title: "14. How do you create a class in TypeScript?",
      answer: "Classes can be created using the 'class' keyword, and you can specify types for properties and methods.",
      Sample: "You can use access modifiers like public, private, and protected.",
      code: `class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public greet() {
        console.log("Hello, " + this.name);
    }
}`
    },
    {
      id: 15,
      Title: "15. What are access modifiers in TypeScript?",
      answer: "Access modifiers control the visibility of class members. They are public, private, and protected.",
      Sample: "They help encapsulate class properties and methods.",
      code: `class Animal {
    protected species: string;

    constructor(species: string) {
        this.species = species;
    }
}`
    },
    {
      id: 16,
      Title: "47. How do you type a 'for' loop in TypeScript?",
      answer: "TypeScript allows you to specify the type of variables within a 'for' loop.",
      Sample: "This improves type safety within the loop.",
      code: `for (let i: number = 0; i < 5; i++) {
    console.log(i);
  } // Output: 0, 1, 2, 3, 4`
    },
    {
      id: 17,
      Title: "48. How does 'forEach' work with types in TypeScript?",
      answer: "'forEach' can have typed callback parameters in TypeScript for type-safe iteration.",
      Sample: "Useful for maintaining type safety with array elements.",
      code: `const numbers: number[] = [1, 2, 3];
  numbers.forEach((num: number) => {
    console.log(num * 2);
  }); // Output: 2, 4, 6`
    },
    {
      id: 18,
      Title: "49. How do you handle complex 'if-else' conditions in TypeScript?",
      answer: "TypeScript's type system allows complex 'if-else' conditions with type-safe variables.",
      Sample: "Use 'if-else' to handle conditions with multiple type-safe variables.",
      code: `const age: number = 25;
  const isAdult: boolean = age >= 18;
  if (isAdult) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }`
    },
    {
      id: 19,
      Title: "50. What is 'map' in JavaScript and how does it differ from 'forEach'?",
      answer: "'map' creates a new array by applying a function to each element, unlike 'forEach', which only iterates.",
      Sample: "Use 'map' when you need a transformed array.",
      code: `const numbers = [1, 2, 3];
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled); // Output: [2, 4, 6]`
    },
    {
      id: 20,
      Title: "16. How do you implement interfaces in classes?",
      answer: "Classes can implement interfaces to ensure they adhere to a specific structure.",
      Sample: "This enforces a contract for the class.",
      code: `interface Drawable {
    draw(): void;
}

class Circle implements Drawable {
    draw() {
        console.log("Drawing a circle");
    }
}`
    },
    {
      id: 21,
      Title: "17. What is the 'never' type?",
      answer: "The 'never' type represents values that never occur, such as a function that always throws an error.",
      Sample: "It indicates that a function does not return anything.",
      code: `function throwError(): never {
    throw new Error("An error occurred");
}`
    },
    {
      id: 22,
      Title: "18. What are namespaces in TypeScript?",
      answer: "Namespaces are a way to group related code and avoid naming collisions.",
      Sample: "They can encapsulate functions, classes, and interfaces.",
      code: `namespace Geometry {
    export class Circle {
        constructor(public radius: number) {}
    }
}`
    },
    {
      id: 23,
      Title: "19. What is the purpose of type assertions?",
      answer: "Type assertions allow you to override TypeScript's inferred type, asserting a specific type instead.",
      Sample: "This can be useful when you are certain about the type of a value.",
      code: `let value: any = "Hello";
let strLength: number = (value as string).length;`
    },
    {
      id: 24,
      Title: "20. How do you use type guards?",
      answer: "Type guards allow you to narrow down types in conditional statements.",
      Sample: "This helps in making your code safer.",
      code: `function isString(value: any): value is string {
    return typeof value === 'string';
}` 
    },
    {
      id: 25,
      Title: "21. What is the 'readonly' modifier?",
      answer: "The 'readonly' modifier makes properties immutable, preventing them from being changed.",
      Sample: "It enhances code safety and prevents accidental changes.",
      code: `interface Point {
    readonly x: number;
    readonly y: number;
}`
    },
    {
      id: 26,
      Title: "22. How do you create a union of interfaces?",
      answer: "You can create a union of interfaces to define a variable that can be one of several types.",
      Sample: "This is useful for functions that accept multiple types.",
      code: `interface Dog {
    bark(): void;
}

interface Cat {
    meow(): void;
}

function speak(animal: Dog | Cat) {
    if ('bark' in animal) {
        animal.bark();
    } else {
        animal.meow();
    }
}`
    },
    {
      id: 27,
      Title: "23. What is a Mapped Type?",
      answer: "Mapped types allow you to create new types by transforming existing ones.",
      Sample: "They are useful for creating variations of types.",
      code: `type Readonly<T> = {
    readonly [K in keyof T]: T[K];
};`
    },
    {
      id: 28,
      Title: "24. What is the 'keyof' operator?",
      answer: "The 'keyof' operator creates a union of string literal types representing the keys of an object.",
      Sample: "This allows for better type safety when accessing object properties.",
      code: `interface Person {
    name: string;
    age: number;
}

type PersonKeys = keyof Person; // "name" | "age"`
    },
    {
      id: 29,
      Title: "25. What are conditional types?",
      answer: "Conditional types allow for defining types based on a condition, using the 'extends' keyword.",
      Sample: "This provides a powerful way to create dynamic types.",
      code: `type IsString<T> = T extends string ? "Yes" : "No";`
    },
    {
      id: 30,
      Title: "26. What is a default parameter?",
      answer: "Default parameters allow you to specify default values for function parameters.",
      Sample: "They simplify function calls when default values are sufficient.",
      code: `function greet(name: string = "Guest") {
    console.log("Hello, " + name);
}`
    },
    {
      id: 31,
      Title: "27. How do you declare an overloaded function?",
      answer: "You can declare overloaded functions by defining multiple function signatures.",
      Sample: "The implementation can be a single function that handles all cases.",
      code: `function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
    return a + b;
}`
    },
    {
      id: 32,
      Title: "28. What is the 'this' type?",
      answer: "'this' type refers to the type of the current context within a function.",
      Sample: "It allows for better type inference in methods.",
      code: `class Counter {
    count: number = 0;

    increment(): this {
        this.count++;
        return this;
    }
}`
    },
    {
      id: 33,
      Title: "29. How do you work with promises in TypeScript?",
      answer: "Promises in TypeScript are similar to JavaScript, but you can specify types for resolved and rejected values.",
      Sample: "This helps in type-checking asynchronous code.",
      code: `function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        resolve("Data fetched");
    });
}`
    },
    {
      id: 34,
      Title: "30. What is the purpose of 'async' and 'await'?",
      answer: "'async' and 'await' are used for writing asynchronous code in a more readable way.",
      Sample: "They help avoid callback hell.",
      code: `async function getData() {
    const data = await fetchData();
    console.log(data);
}`
    },
    {
      id: 35,
      Title: "31. How do you define a namespace?",
      answer: "Namespaces are defined using the 'namespace' keyword and can encapsulate related code.",
      Sample: "They help organize code and avoid name collisions.",
      code: `namespace MathUtils {
    export function add(a: number, b: number): number {
        return a + b;
    }
}`
    },
    {
      id: 36,
      Title: "32. What is module augmentation?",
      answer: "Module augmentation allows you to add new members to existing modules.",
      Sample: "This is useful for extending libraries.",
      code: `declare module "my-module" {
    export function newFunction(): void;
}`
    },
    {
      id: 37,
      Title: "33. How do you use the 'export' keyword?",
      answer: "The 'export' keyword is used to expose variables, functions, or classes from a module.",
      Sample: "This allows other modules to import and use them.",
      code: `export const PI = 3.14;`
    },
    {
      id: 38,
      Title: "34. What is the 'import' keyword?",
      answer: "The 'import' keyword is used to bring in variables, functions, or classes from other modules.",
      Sample: "It helps in modularizing code.",
      code: `import { PI } from './math';`
    },
    {
      id: 39,
      Title: "35. What is a callable type?",
      answer: "Callable types define the type of a function, specifying its parameters and return type.",
      Sample: "This allows for better type-checking of function arguments.",
      code: `type MyFunction = (a: number, b: number) => number;`
    },
    {
      id: 40,
      Title: "36. How do you define a literal type?",
      answer: "Literal types allow you to specify exact values that a variable can hold.",
      Sample: "This enhances type safety.",
      code: `type Direction = "left" | "right";`
    },
    {
      id: 41,
      Title: "37. What is the purpose of the 'override' modifier?",
      answer: "The 'override' modifier ensures that a method in a derived class overrides a method in its base class.",
      Sample: "This provides compile-time checking.",
      code: `class Base {
    greet() {}
}

class Derived extends Base {
    override greet() {
        console.log("Hello from Derived");
    }
}`
    },
    {
      id: 42,
      Title: "38. How do you use the 'infer' keyword?",
      answer: "The 'infer' keyword is used in conditional types to infer types within the true branch.",
      Sample: "This allows for dynamic type inference.",
      code: `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;`
    },
    {
      id: 43,
      Title: "39. What are decorators in TypeScript?",
      answer: "Decorators are a special kind of declaration that can be attached to a class or method to modify its behavior.",
      Sample: "They enable meta-programming in TypeScript.",
      code: `function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(propertyKey);
}

class Example {
    @log
    method() {}
}`
    },
    {
      id: 44,
      Title: "40. What is the 'void' type?",
      answer: "The 'void' type represents the absence of a value, typically used as a return type for functions that do not return anything.",
      Sample: "It indicates that a function does not produce a value.",
      code: `function log(message: string): void {
    console.log(message);
}`
    },
    {
      id: 45,
      Title: "41. What is the 'instanceof' operator?",
      answer: "The 'instanceof' operator checks whether an object is an instance of a specific class or interface.",
      Sample: "It can be used for runtime type checking.",
      code: `if (myObject instanceof MyClass) {
    // Do something
}`
    },
    {
      id: 46,
      Title: "42. How do you create a private class member?",
      answer: "You can create private members in a class using the 'private' access modifier.",
      Sample: "Private members are not accessible outside the class.",
      code: `class Secret {
    private password: string;

    constructor(password: string) {
        this.password = password;
    }
}`
    }
];


  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto font-sans">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">TypeScript Basics and Concepts</h1>

      {array.map((item) => (
        <section key={item.id} className="bg-white mx-3 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">{item.Title}</h2>
          <p className="mb-2 text-gray-600"><strong>Answer:</strong> {item.answer}</p>
          <p className="mb-4 text-gray-600"><strong>Sample Wording:</strong> {item.Sample}</p>

          <h3 className="text-lg font-medium mb-2 text-gray-700">Code Example:</h3>
          <div className="relative bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
            <button 
              onClick={() => handleCopy(item.code, item.id)}
              className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
            >
              {copiedIndex === item.id ? "Copied!" : "Copy"}
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

// pages/index.tsx
'use client';
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

const C: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const array: Question[] = [
    {
      id: 1,
      Title: "1. What is C?",
      answer: "C is a general-purpose, procedural programming language developed in the 1970s, known for its efficiency and control over hardware.",
      Sample: "Creating a simple C program.",
      code: `#include <stdio.h>\nint main() {\n    printf("Hello, World!");\n    return 0;\n}`
    },
    {
      id: 2,
      Title: "2. How does a for loop work in C?",
      answer: "A for loop repeats a block of code for a specified number of times, controlled by an initialization, condition, and increment.",
      Sample: "Looping from 1 to 10.",
      code: `for (int i = 1; i <= 10; i++) {\n    printf("%d ", i);\n}`
    },
    {
      id: 3,
      Title: "3. What is an if-else statement?",
      answer: "The if-else statement evaluates a condition and executes code blocks based on whether the condition is true or false.",
      Sample: "Checking if a number is positive or negative.",
      code: `if (num > 0) {\n    printf("Positive");\n} else {\n    printf("Negative");\n}`
    },
    {
      id: 4,
      Title: "4. Explain nested for loops.",
      answer: "Nested for loops are loops within loops, often used for multidimensional data.",
      Sample: "Printing a 3x3 grid.",
      code: `for (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        printf("* ");\n    }\n    printf("\\n");\n}`
    },
    {
      id: 5,
      Title: "5. How does an if-else if-else structure work?",
      answer: "This structure allows multiple conditions to be tested sequentially, executing the block of the first true condition.",
      Sample: "Categorizing a number as positive, negative, or zero.",
      code: `if (num > 0) {\n    printf("Positive");\n} else if (num < 0) {\n    printf("Negative");\n} else {\n    printf("Zero");\n}`
    },
    {
      id: 6,
      Title: "6. What is the purpose of a while loop?",
      answer: "A while loop repeatedly executes code as long as the condition remains true.",
      Sample: "Counting down from 5.",
      code: `int i = 5;\nwhile (i > 0) {\n    printf("%d ", i);\n    i--;\n}`
    },
    {
      id: 7,
      Title: "7. How is the do-while loop different from while loop?",
      answer: "The do-while loop executes at least once because the condition is checked after the code block.",
      Sample: "Repeating input until a positive number is entered.",
      code: `int num;\ndo {\n    printf("Enter a positive number: ");\n    scanf("%d", &num);\n} while (num <= 0);`
    },
    {
      id: 8,
      Title: "8. How do you declare an array in C?",
      answer: "Arrays store multiple values of the same type, and are declared by specifying the type, name, and size.",
      Sample: "Defining an integer array of 5 elements.",
      code: `int numbers[5];`
    },
    {
      id: 9,
      Title: "9. Explain the use of break in loops.",
      answer: "The break statement immediately exits the loop, regardless of the condition.",
      Sample: "Stopping a loop when i equals 3.",
      code: `for (int i = 0; i < 5; i++) {\n    if (i == 3) break;\n    printf("%d ", i);\n}`
    },
    {
      id: 10,
      Title: "10. How does the continue statement work in a loop?",
      answer: "The continue statement skips the rest of the loop iteration and proceeds to the next iteration.",
      Sample: "Skipping even numbers in a loop.",
      code: `for (int i = 0; i < 5; i++) {\n    if (i % 2 == 0) continue;\n    printf("%d ", i);\n}`
    },
    {
      id: 11,
      Title: "11. What is a switch-case statement?",
      answer: "The switch-case statement executes different code blocks based on the value of a variable.",
      Sample: "Printing a day name based on an integer input.",
      code: `switch(day) {\n    case 1: printf("Monday"); break;\n    case 2: printf("Tuesday"); break;\n    default: printf("Other day");\n}`
    },
    {
      id: 12,
      Title: "12. What is recursion in C?",
      answer: "Recursion is a technique where a function calls itself to solve a smaller instance of the same problem.",
      Sample: "Calculating factorial recursively.",
      code: `int factorial(int n) {\n    if (n == 1) return 1;\n    return n * factorial(n - 1);\n}`
    },
    {
      id: 13,
      Title: "13. What are infinite loops?",
      answer: "An infinite loop runs indefinitely because the exit condition is never met.",
      Sample: "Creating an infinite loop with while.",
      code: `while (1) {\n    printf("Running");\n}`
    },
    {
      id: 14,
      Title: "14. How can we print even numbers using a for loop?",
      answer: "We can print even numbers by initializing a for loop and incrementing by 2, or checking the condition inside the loop.",
      Sample: "Printing even numbers from 2 to 10.",
      code: `for (int i = 2; i <= 10; i += 2) {\n    printf("%d ", i);\n}`
    },
    {
      id: 15,
      Title: "15. What is a nested if statement?",
      answer: "A nested if statement is an if statement inside another if statement.",
      Sample: "Checking if a number is positive and even.",
      code: `if (num > 0) {\n    if (num % 2 == 0) {\n        printf("Positive Even");\n    }\n}`
    },
    {
      id: 16,
      Title: "16. What is an array index?",
      answer: "An array index is the position of an element in an array, starting from zero in C.",
      Sample: "Accessing the first element of an array.",
      code: `int first = arr[0];`
    },
    {
      id: 17,
      Title: "17. Explain the concept of nested while loops.",
      answer: "Nested while loops have one while loop inside another, often used for complex data structures like matrices.",
      Sample: "Printing a 2x2 matrix.",
      code: `int i = 0;\nwhile (i < 2) {\n    int j = 0;\n    while (j < 2) {\n        printf("* ");\n        j++;\n    }\n    printf("\\n");\n    i++;\n}`
    },
    {
      id: 18,
      Title: "18. What is the purpose of the else statement in an if condition?",
      answer: "The else statement provides an alternative action if the if condition is false.",
      Sample: "Checking if a number is odd or even.",
      code: `if (num % 2 == 0) {\n    printf("Even");\n} else {\n    printf("Odd");\n}`
    },
    {
      id: 19,
      Title: "19. Explain the use of nested if-else structures.",
      answer: "Nested if-else structures allow multiple layers of condition checking.",
      Sample: "Classifying a number based on range.",
      code: `if (num > 0) {\n    if (num > 10) printf("Large");\n    else printf("Small");\n} else printf("Negative");`
    },
    {
      id: 20,
      Title: "20. How can we print odd numbers using a for loop?",
      answer: "We can print odd numbers by initializing a loop with an odd number and incrementing by 2.",
      Sample: "Printing odd numbers from 1 to 9.",
      code: `for (int i = 1; i < 10; i += 2) {\n    printf("%d ", i);\n}`
    },
    {
        id: 21,
        Title: "21. What is a pointer in C?",
        answer: "A pointer is a variable that stores the memory address of another variable.",
        Sample: "Creating and using a pointer.",
        code: `int num = 10;\nint *ptr = &num;\nprintf("%d", *ptr); // Outputs 10`
      },
      {
        id: 22,
        Title: "22. What is NULL pointer?",
        answer: "A NULL pointer is a pointer that does not point to any memory location.",
        Sample: "Declaring a NULL pointer.",
        code: `int *ptr = NULL;`
      },
      {
        id: 23,
        Title: "23. How do you allocate memory dynamically in C?",
        answer: "Memory can be allocated dynamically using malloc(), calloc(), realloc(), and free() functions.",
        Sample: "Allocating memory for an integer array.",
        code: `int *arr = (int*)malloc(5 * sizeof(int));`
      },
      {
        id: 24,
        Title: "24. What is a structure in C?",
        answer: "A structure is a user-defined data type that groups variables of different types.",
        Sample: "Defining a structure for a point.",
        code: `struct Point {\n    int x;\n    int y;\n};`
      },
      {
        id: 25,
        Title: "25. What is the difference between malloc() and calloc()?",
        answer: "malloc() allocates uninitialized memory, while calloc() allocates zero-initialized memory.",
        Sample: "Using malloc() and calloc().",
        code: `int *arr1 = (int*)malloc(5 * sizeof(int));\nint *arr2 = (int*)calloc(5, sizeof(int));`
      },
      {
        id: 26,
        Title: "26. Explain the use of the typedef keyword.",
        answer: "typedef creates an alias for a data type, allowing for more readable code.",
        Sample: "Creating an alias for a structure.",
        code: `typedef struct {\n    int x, y;\n} Point;`
      },
      {
        id: 27,
        Title: "27. What is a union in C?",
        answer: "A union is a data type where all members share the same memory location, so it only holds one member value at a time.",
        Sample: "Defining and using a union.",
        code: `union Data {\n    int i;\n    float f;\n};`
      },
      {
        id: 28,
        Title: "28. How can you pass a structure to a function?",
        answer: "Structures can be passed by value or by reference (using pointers) to functions.",
        Sample: "Passing a structure by reference.",
        code: `void printPoint(struct Point *p) {\n    printf("(%d, %d)", p->x, p->y);\n}`
      },
      {
        id: 29,
        Title: "29. What is the purpose of the #define preprocessor?",
        answer: "The #define preprocessor creates macros or constants, improving code readability.",
        Sample: "Defining a constant for PI.",
        code: `#define PI 3.14\nfloat area = PI * radius * radius;`
      },
      {
        id: 30,
        Title: "30. What are file handling functions in C?",
        answer: "File handling functions like fopen(), fclose(), fread(), fwrite() allow reading from and writing to files.",
        Sample: "Opening a file in read mode.",
        code: `FILE *file = fopen("data.txt", "r");`
      },
      {
        id: 31,
        Title: "31. How do you write data to a file in C?",
        answer: "Data can be written to a file using fprintf(), fwrite(), or fputc() functions.",
        Sample: "Writing a string to a file.",
        code: `FILE *file = fopen("data.txt", "w");\nfprintf(file, "Hello, World!");\nfclose(file);`
      },
      {
        id: 32,
        Title: "32. What is the purpose of the fseek() function?",
        answer: "fseek() sets the file pointer position, allowing random access within the file.",
        Sample: "Moving to the end of a file.",
        code: `fseek(file, 0, SEEK_END);`
      },
      {
        id: 33,
        Title: "33. Explain the concept of function pointers.",
        answer: "Function pointers store addresses of functions, allowing them to be called dynamically.",
        Sample: "Using a function pointer.",
        code: `void (*funcPtr)() = &myFunction;\n(*funcPtr)();`
      },
      {
        id: 34,
        Title: "34. What are command-line arguments?",
        answer: "Command-line arguments allow users to pass arguments to a program from the command line.",
        Sample: "Using command-line arguments.",
        code: `int main(int argc, char *argv[]) {\n    printf("%s", argv[1]);\n}`
      },
      {
        id: 35,
        Title: "35. How do you use fgets() for reading strings?",
        answer: "fgets() reads a line of text from a file or stdin until a newline or specified limit.",
        Sample: "Reading a string from stdin.",
        code: `char str[100];\nfgets(str, 100, stdin);`
      },
      {
        id: 36,
        Title: "36. What is the difference between ++i and i++?",
        answer: "++i increments the variable before use; i++ increments after.",
        Sample: "Using prefix and postfix increments.",
        code: `int i = 5;\nprintf("%d", ++i); // Outputs 6\nprintf("%d", i++); // Outputs 6 then increments to 7`
      },
      {
        id: 37,
        Title: "37. How do you find the size of a structure?",
        answer: "The sizeof operator is used to find the size of a structure.",
        Sample: "Finding the size of a structure.",
        code: `struct Point { int x, y; };\nprintf("%lu", sizeof(struct Point));`
      },
      {
        id: 38,
        Title: "38. What is the void pointer?",
        answer: "A void pointer is a pointer without a specified data type, allowing it to point to any data type.",
        Sample: "Using a void pointer.",
        code: `void *ptr;\nint a = 10;\nptr = &a;`
      },
      {
        id: 39,
        Title: "39. How do you sort an array in C?",
        answer: "Sorting can be done using algorithms like bubble sort, selection sort, or qsort function.",
        Sample: "Sorting an array with qsort.",
        code: `qsort(arr, size, sizeof(int), compareFunction);`
      },
      {
        id: 40,
        Title: "40. Explain the concept of memory leaks.",
        answer: "A memory leak occurs when dynamically allocated memory is not freed, causing wasted memory.",
        Sample: "Freeing allocated memory.",
        code: `int *arr = (int*)malloc(5 * sizeof(int));\nfree(arr);`
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
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">C Basics and Concepts</h1>

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

export default C;

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

const Java: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const array: Question[] = [
    {
      id: 1,
      Title: "1. What is Java?",
      answer: "Java is a high-level, object-oriented programming language used for developing a wide range of applications.",
      Sample: "public class HelloWorld { public static void main(String[] args) { System.out.println('Hello, World!'); } }",
      code: `public class HelloWorld { public static void main(String[] args) { System.out.println("Hello, World!"); } }`
    },
    {
      id: 2,
      Title: "2. What are the basic data types in Java?",
      answer: "Java has eight primitive data types: byte, short, int, long, float, double, boolean, and char.",
      Sample: "int number = 5; boolean isActive = true;",
      code: `int number = 5; boolean isActive = true;`
    },
    {
      id: 3,
      Title: "3. What is an if-else statement in Java?",
      answer: "An if-else statement evaluates a condition and executes a block of code if the condition is true, otherwise executes a different block.",
      Sample: "if (age >= 18) { System.out.println('Adult'); } else { System.out.println('Minor'); }",
      code: `if (age >= 18) { System.out.println("Adult"); } else { System.out.println("Minor"); }`
    },
    {
      id: 4,
      Title: "4. What is a switch statement in Java?",
      answer: "The switch statement allows a variable to be tested for equality against a list of values.",
      Sample: "switch(day) { case 1: System.out.println('Monday'); break; default: System.out.println('Other day'); }",
      code: `switch(day) { case 1: System.out.println("Monday"); break; default: System.out.println("Other day"); }`
    },
    {
      id: 5,
      Title: "5. What is a for loop in Java?",
      answer: "A for loop is used when the number of iterations is known. It consists of an initialization, condition, and increment/decrement.",
      Sample: "for (int i = 0; i < 5; i++) { System.out.println(i); }",
      code: `for (int i = 0; i < 5; i++) { System.out.println(i); }`
    },
    {
      id: 6,
      Title: "6. How does a while loop work in Java?",
      answer: "A while loop repeatedly executes a block of code as long as a given condition is true.",
      Sample: "int i = 0; while (i < 5) { System.out.println(i); i++; }",
      code: `int i = 0; while (i < 5) { System.out.println(i); i++; }`
    },
    {
      id: 7,
      Title: "7. What is the purpose of the do-while loop?",
      answer: "The do-while loop executes a block of code once, then repeats it as long as the specified condition is true.",
      Sample: "int i = 0; do { System.out.println(i); i++; } while (i < 5);",
      code: `int i = 0; do { System.out.println(i); i++; } while (i < 5);`
    },
    {
      id: 8,
      Title: "8. How do you declare a variable in Java?",
      answer: "A variable is declared by specifying its type and name. Optionally, you can initialize it with a value.",
      Sample: "int age = 25;",
      code: `int age = 25;`
    },
    {
      id: 9,
      Title: "9. What is a class in Java?",
      answer: "A class is a blueprint for creating objects, containing fields and methods to define object behavior and state.",
      Sample: "public class Car { String color; void start() { System.out.println('Car started'); } }",
      code: `public class Car { String color; void start() { System.out.println("Car started"); } }`
    },
    {
      id: 10,
      Title: "10. What is an object in Java?",
      answer: "An object is an instance of a class. It has state and behavior defined by the class.",
      Sample: "Car myCar = new Car();",
      code: `Car myCar = new Car();`
    },
    {
      id: 11,
      Title: "11. How does inheritance work in Java?",
      answer: "Inheritance allows a class to inherit fields and methods from another class using the 'extends' keyword.",
      Sample: "class Dog extends Animal { }",
      code: `class Dog extends Animal { }`
    },
    {
      id: 12,
      Title: "12. What is polymorphism in Java?",
      answer: "Polymorphism allows objects to be treated as instances of their parent class, enabling different implementations of the same method.",
      Sample: "Animal animal = new Dog(); animal.makeSound();",
      code: `Animal animal = new Dog(); animal.makeSound();`
    },
    {
      id: 13,
      Title: "13. What are constructors in Java?",
      answer: "Constructors are special methods used to initialize objects. They have the same name as the class and no return type.",
      Sample: "public class Car { Car() { System.out.println('Car created'); } }",
      code: `public class Car { Car() { System.out.println("Car created"); } }`
    },
    {
      id: 14,
      Title: "14. What is method overloading?",
      answer: "Method overloading allows multiple methods with the same name but different parameters in the same class.",
      Sample: "void print(int x) { } void print(String x) { }",
      code: `void print(int x) { } void print(String x) { }`
    },
    {
      id: 15,
      Title: "15. What is encapsulation in Java?",
      answer: "Encapsulation is the concept of bundling data and methods within a class and restricting access to some components.",
      Sample: "private String color; public String getColor() { return color; }",
      code: `private String color; public String getColor() { return color; }`
    },
    {
      id: 16,
      Title: "16. What are access modifiers?",
      answer: "Access modifiers determine the visibility of classes, methods, and variables. They include public, private, and protected.",
      Sample: "public class Car { private int speed; }",
      code: `public class Car { private int speed; }`
    },
    {
      id: 17,
      Title: "17. What is an interface in Java?",
      answer: "An interface is a reference type that contains only abstract methods, which implementing classes must define.",
      Sample: "interface Animal { void sound(); }",
      code: `interface Animal { void sound(); }`
    },
    {
      id: 18,
      Title: "18. What is an abstract class in Java?",
      answer: "An abstract class contains abstract methods that must be implemented by subclasses. It cannot be instantiated.",
      Sample: "abstract class Animal { abstract void sound(); }",
      code: `abstract class Animal { abstract void sound(); }`
    },
    {
      id: 19,
      Title: "19. How does exception handling work in Java?",
      answer: "Exception handling in Java uses try-catch blocks to handle errors and prevent program crashes.",
      Sample: "try { int result = 10 / 0; } catch (ArithmeticException e) { System.out.println('Error'); }",
      code: `try { int result = 10 / 0; } catch (ArithmeticException e) { System.out.println("Error"); }`
    },
    {
      id: 20,
      Title: "20. What is a try-catch block?",
      answer: "A try-catch block is used to handle exceptions in Java by executing a code block in 'try' and catching exceptions in 'catch'.",
      Sample: "try { int result = 10 / 0; } catch (Exception e) { e.printStackTrace(); }",
      code: `try { int result = 10 / 0; } catch (Exception e) { e.printStackTrace(); }`
    },
    {
      id: 21,
      Title: "21. How do you define an array in Java?",
      answer: "An array is a container that holds a fixed number of values of a single type, declared with square brackets.",
      Sample: "int[] numbers = {1, 2, 3, 4};",
      code: `int[] numbers = {1, 2, 3, 4};`
    },
    {
      id: 22,
      Title: "22. What is a for-each loop in Java?",
      answer: "The for-each loop is used to iterate through elements in a collection or array.",
      Sample: "for (int number : numbers) { System.out.println(number); }",
      code: `for (int number : numbers) { System.out.println(number); }`
    },
    {
        id: 23,
        Title: "23. What is a Java ArrayList?",
        answer: "ArrayList is a resizable array implementation of the List interface, allowing elements to be dynamically added or removed.",
        Sample: "ArrayList<String> list = new ArrayList<>(); list.add('Apple');",
        code: `ArrayList<String> list = new ArrayList<>(); list.add("Apple");`
      },
      {
        id: 24,
        Title: "24. How does a HashMap work in Java?",
        answer: "HashMap is a collection that stores key-value pairs and uses hashing to store data for quick retrieval.",
        Sample: "HashMap<String, Integer> map = new HashMap<>(); map.put('Apple', 3);",
        code: `HashMap<String, Integer> map = new HashMap<>(); map.put("Apple", 3);`
      },
      {
        id: 25,
        Title: "25. What is an Iterator in Java?",
        answer: "An Iterator is an interface for traversing collections, allowing access to each element in the collection sequentially.",
        Sample: "Iterator<String> it = list.iterator(); while (it.hasNext()) { System.out.println(it.next()); }",
        code: `Iterator<String> it = list.iterator(); while (it.hasNext()) { System.out.println(it.next()); }`
      },
      {
        id: 26,
        Title: "26. What is the purpose of the Collections framework?",
        answer: "The Collections framework provides a set of classes and interfaces for managing groups of objects, offering various data structures and algorithms.",
        Sample: "Collections.sort(list);",
        code: `Collections.sort(list);`
      },
      {
        id: 27,
        Title: "27. What is multithreading in Java?",
        answer: "Multithreading is a process where multiple threads execute independently, allowing for concurrent execution in a program.",
        Sample: "Thread thread = new Thread(() -> System.out.println('Thread running')); thread.start();",
        code: `Thread thread = new Thread(() -> System.out.println("Thread running")); thread.start();`
      },
      {
        id: 28,
        Title: "28. How does the synchronized keyword work?",
        answer: "The synchronized keyword ensures that only one thread can access a block of code or method at a time, providing thread safety.",
        Sample: "public synchronized void syncMethod() { // code }",
        code: `public synchronized void syncMethod() { // code }`
      },
      {
        id: 29,
        Title: "29. What is a lambda expression in Java?",
        answer: "Lambda expressions provide a clear and concise way to implement functional interfaces using an expression.",
        Sample: "(int a, int b) -> a + b",
        code: `(int a, int b) -> a + b`
      },
      {
        id: 30,
        Title: "30. What is a functional interface?",
        answer: "A functional interface is an interface with a single abstract method, used primarily in lambda expressions and functional programming.",
        Sample: "@FunctionalInterface interface MyFunction { void apply(); }",
        code: `@FunctionalInterface interface MyFunction { void apply(); }`
      },
      {
        id: 31,
        Title: "31. What is the Stream API in Java?",
        answer: "The Stream API is used to process collections of objects in a functional-style sequence of operations such as filter, map, and reduce.",
        Sample: "list.stream().filter(s -> s.startsWith('A')).forEach(System.out::println);",
        code: `list.stream().filter(s -> s.startsWith("A")).forEach(System.out::println);`
      },
      {
        id: 32,
        Title: "32. How does the filter method work in a Java Stream?",
        answer: "The filter method in streams allows for filtering elements based on a specified condition.",
        Sample: "list.stream().filter(s -> s.length() > 3).forEach(System.out::println);",
        code: `list.stream().filter(s -> s.length() > 3).forEach(System.out::println);`
      },
      {
        id: 33,
        Title: "33. What is method reference in Java?",
        answer: "Method reference is a shorthand notation of a lambda expression to call a method directly by referencing it.",
        Sample: "list.forEach(System.out::println);",
        code: `list.forEach(System.out::println);`
      },
      {
        id: 34,
        Title: "34. What is serialization in Java?",
        answer: "Serialization is the process of converting an object into a byte stream, enabling it to be saved or transmitted.",
        Sample: "ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream('file.ser')); out.writeObject(obj);",
        code: `ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("file.ser")); out.writeObject(obj);`
      },
      {
        id: 35,
        Title: "35. What is a singleton class in Java?",
        answer: "A singleton class allows only one instance of itself to be created, providing a global point of access to it.",
        Sample: "public class Singleton { private static Singleton instance; private Singleton() { } }",
        code: `public class Singleton { private static Singleton instance; private Singleton() { } }`
      },
      {
        id: 36,
        Title: "36. What is the difference between List and Set?",
        answer: "List allows duplicate elements and maintains insertion order, while Set does not allow duplicates and has no guaranteed order.",
        Sample: "List<String> list = new ArrayList<>(); Set<String> set = new HashSet<>();",
        code: `List<String> list = new ArrayList<>(); Set<String> set = new HashSet<>();`
      },
      {
        id: 37,
        Title: "37. How does the map method work in Java streams?",
        answer: "The map method transforms elements of a stream into another form using a provided function.",
        Sample: "list.stream().map(String::toUpperCase).forEach(System.out::println);",
        code: `list.stream().map(String::toUpperCase).forEach(System.out::println);`
      },
      {
        id: 38,
        Title: "38. What is a default method in interfaces?",
        answer: "Default methods in interfaces allow methods to have an implementation, which can be overridden by implementing classes.",
        Sample: "interface MyInterface { default void greet() { System.out.println('Hello'); } }",
        code: `interface MyInterface { default void greet() { System.out.println("Hello"); } }`
      },
      {
        id: 39,
        Title: "39. How does the reduce method work in Java streams?",
        answer: "The reduce method is used to combine elements of a stream into a single result using a specified accumulator function.",
        Sample: "int sum = list.stream().reduce(0, Integer::sum);",
        code: `int sum = list.stream().reduce(0, Integer::sum);`
      },
      {
        id: 40,
        Title: "40. What are Optional types in Java?",
        answer: "Optional is a container object that may or may not contain a non-null value, used to avoid null checks.",
        Sample: "Optional<String> opt = Optional.ofNullable(name);",
        code: `Optional<String> opt = Optional.ofNullable(name);`
      },
      {
        id: 41,
        Title: "41. What is reflection in Java?",
        answer: "Reflection is a feature that allows a program to inspect or modify the behavior of classes and methods at runtime.",
        Sample: "Class<?> clazz = Class.forName('MyClass');",
        code: `Class<?> clazz = Class.forName("MyClass");`
      },
      {
        id: 42,
        Title: "42. How does garbage collection work in Java?",
        answer: "Garbage collection is an automatic memory management feature that deallocates memory used by objects that are no longer needed.",
        Sample: "System.gc();",
        code: `System.gc();`
      },
      {
        id: 43,
        Title: "43. What is the difference between '==' and 'equals()' in Java?",
        answer: "'==' checks reference equality, while 'equals()' checks for value equality in objects.",
        Sample: "if (str1.equals(str2)) { }",
        code: `if (str1.equals(str2)) { }`
      },
      {
        id: 44,
        Title: "44. How does the try-with-resources statement work?",
        answer: "Try-with-resources is used to declare resources that are automatically closed at the end of the statement.",
        Sample: "try (BufferedReader br = new BufferedReader(new FileReader('file.txt'))) { }",
        code: `try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) { }`
      },
      {
        id: 45,
        Title: "45. What is a JDBC in Java?",
        answer: "JDBC is an API that enables Java applications to interact with databases through SQL commands.",
        Sample: "Connection conn = DriverManager.getConnection(url, user, pass);",
        code: `Connection conn = DriverManager.getConnection(url, user, pass);`
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
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">JAVA Basics and Concepts</h1>

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

export default Java;

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

const Php: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const array: Question[] = [
    {
      id: 1,
      Title: "1. What is PHP?",
      answer: "PHP is a server-side scripting language designed for web development, but it is also used as a general-purpose programming language.",
      Sample: "echo 'Hello, World!';",
      code: `<?php echo 'Hello, World!'; ?>`
    },
    {
      id: 2,
      Title: "2. How do you define a variable in PHP?",
      answer: "Variables in PHP are prefixed with a dollar symbol ($) and do not need explicit type declarations.",
      Sample: "$name = 'John';",
      code: `<?php $name = 'John'; ?>`
    },
    {
      id: 3,
      Title: "3. What are PHP data types?",
      answer: "PHP supports several data types, including Integer, Float, String, Boolean, Array, Object, NULL, and Resource.",
      Sample: "$number = 5; $name = 'Alice'; $isTrue = true;",
      code: `<?php $number = 5; $name = 'Alice'; $isTrue = true; ?>`
    },
    {
      id: 4,
      Title: "4. How do you create an array in PHP?",
      answer: "Arrays in PHP can be created using the array() function or square brackets [].",
      Sample: "$fruits = ['apple', 'banana', 'cherry'];",
      code: `<?php $fruits = ['apple', 'banana', 'cherry']; ?>`
    },
    {
      id: 5,
      Title: "5. What is a PHP function?",
      answer: "A function is a block of statements that can be reused and executed when called. PHP has built-in functions and allows users to create custom functions.",
      Sample: "function greet() { echo 'Hello!'; } greet();",
      code: `<?php function greet() { echo 'Hello!'; } greet(); ?>`
    },
    {
      id: 6,
      Title: "6. How do you create an associative array?",
      answer: "Associative arrays use named keys to access values instead of numeric indices.",
      Sample: "$person = ['name' => 'John', 'age' => 30];",
      code: `<?php $person = ['name' => 'John', 'age' => 30]; ?>`
    },
    {
      id: 7,
      Title: "7. What is a PHP class?",
      answer: "A class is a blueprint for creating objects and encapsulates properties and methods.",
      Sample: "class Car { public $color; function __construct($color) { $this->color = $color; } }",
      code: `<?php class Car { public $color; function __construct($color) { $this->color = $color; } } ?>`
    },
    {
      id: 8,
      Title: "8. How do you handle errors in PHP?",
      answer: "PHP provides error-handling functions like try-catch blocks and error reporting functions.",
      Sample: "try { // code } catch (Exception $e) { echo 'Caught exception: ',  $e->getMessage(), '\\n'; }",
      code: `<?php try { // code } catch (Exception $e) { echo 'Caught exception: ',  $e->getMessage(), '\\n'; } ?>`
    },
    {
      id: 9,
      Title: "9. How do you include files in PHP?",
      answer: "PHP includes files using include, include_once, require, and require_once statements.",
      Sample: "include 'file.php';",
      code: `<?php include 'file.php'; ?>`
    },
    {
      id: 10,
      Title: "10. How to create a constant in PHP?",
      answer: "Constants in PHP can be defined using the define() function or the const keyword.",
      Sample: "define('PI', 3.14);",
      code: `<?php define('PI', 3.14); ?>`
    },
    {
      id: 11,
      Title: "11. What is the difference between include and require?",
      answer: "If an included file is not found, include() generates a warning, while require() throws a fatal error.",
      Sample: "require 'config.php';",
      code: `<?php require 'config.php'; ?>`
    },
    {
      id: 12,
      Title: "12. How do you create a PHP session?",
      answer: "A session in PHP is started using session_start() and allows you to store user data across pages.",
      Sample: "session_start(); $_SESSION['user'] = 'Alice';",
      code: `<?php session_start(); $_SESSION['user'] = 'Alice'; ?>`
    },
    {
      id: 13,
      Title: "13. What is the use of cookies in PHP?",
      answer: "Cookies store user data on the client side and can be set using setcookie().",
      Sample: "setcookie('username', 'Alice', time() + 3600);",
      code: `<?php setcookie('username', 'Alice', time() + 3600); ?>`
    },
    {
      id: 14,
      Title: "14. How do you redirect a page in PHP?",
      answer: "The header() function is used for redirection in PHP.",
      Sample: "header('Location: newpage.php');",
      code: `<?php header('Location: newpage.php'); ?>`
    },
    {
      id: 15,
      Title: "15. What is a PHP superglobal?",
      answer: "Superglobals are predefined global arrays, such as $_GET, $_POST, $_SESSION, $_COOKIE, that are accessible from any scope.",
      Sample: "$_GET['username']",
      code: `<?php echo $_GET['username']; ?>`
    },
    {
      id: 16,
      Title: "16. How do you hash a password in PHP?",
      answer: "password_hash() and password_verify() are used to securely hash and verify passwords.",
      Sample: "$hashedPassword = password_hash('mypassword', PASSWORD_DEFAULT);",
      code: `<?php $hashedPassword = password_hash('mypassword', PASSWORD_DEFAULT); ?>`
    },
    {
      id: 17,
      Title: "17. What is the purpose of PDO in PHP?",
      answer: "PDO (PHP Data Objects) is a database access layer providing a uniform method to access multiple databases securely.",
      Sample: "$pdo = new PDO('mysql:host=localhost;dbname=test', 'user', 'pass');",
      code: `<?php $pdo = new PDO('mysql:host=localhost;dbname=test', 'user', 'pass'); ?>`
    },
    {
      id: 18,
      Title: "18. How do you define a default parameter in PHP?",
      answer: "Default parameters allow you to set a default value for a function argument if it is not provided.",
      Sample: "function greet($name = 'Guest') { echo 'Hello, ' . $name; }",
      code: `<?php function greet($name = 'Guest') { echo 'Hello, ' . $name; } ?>`
    },
    {
      id: 19,
      Title: "19. What is a closure in PHP?",
      answer: "A closure is an anonymous function that can be stored in a variable and passed as an argument.",
      Sample: "$greet = function($name) { return 'Hello ' . $name; };",
      code: `<?php $greet = function($name) { return 'Hello ' . $name; }; ?>`
    },
    {
      id: 20,
      Title: "20. What is the purpose of type hinting?",
      answer: "Type hinting ensures that parameters passed to functions are of a specified type.",
      Sample: "function add(int $a, int $b): int { return $a + $b; }",
      code: `<?php function add(int $a, int $b): int { return $a + $b; } ?>`
    },
    {
        id: 20,
        Title: "20. What is the purpose of type hinting in PHP?",
        answer: "Type hinting allows you to specify the expected data type of arguments to functions, helping to catch type errors earlier in the code execution.",
        Sample: "function add(int $a, int $b): int { return $a + $b; }",
        code: `<?php function add(int $a, int $b): int { return $a + $b; } ?>`
      },
      {
        id: 21,
        Title: "21. What is the difference between echo and print in PHP?",
        answer: "Both echo and print output data to the screen. echo can take multiple parameters and is slightly faster, while print returns a value and can only take one argument.",
        Sample: "echo 'Hello', ' World'; print 'Hello';",
        code: `<?php echo 'Hello', ' World'; print 'Hello'; ?>`
      },
      {
        id: 22,
        Title: "22. How do you define a constant in PHP?",
        answer: "Constants are defined using the define() function or const keyword, and their values cannot be changed after declaration.",
        Sample: "define('PI', 3.14); const NAME = 'PHP';",
        code: `<?php define('PI', 3.14); const NAME = 'PHP'; ?>`
      },
      {
        id: 23,
        Title: "23. What are constructors and destructors in PHP?",
        answer: "Constructors initialize an object when it's created, while destructors are invoked when an object is destroyed. They are defined as __construct() and __destruct() respectively.",
        Sample: "class Car { function __construct() { echo 'Car created'; } function __destruct() { echo 'Car destroyed'; } }",
        code: `<?php class Car { function __construct() { echo 'Car created'; } function __destruct() { echo 'Car destroyed'; } } ?>`
      },
      {
        id: 24,
        Title: "24. How does inheritance work in PHP?",
        answer: "Inheritance allows a class to use the properties and methods of another class, using the 'extends' keyword.",
        Sample: "class Animal {} class Dog extends Animal {}",
        code: `<?php class Animal {} class Dog extends Animal {} ?>`
      },
      {
        id: 25,
        Title: "25. What is the purpose of interfaces in PHP?",
        answer: "Interfaces define methods that implementing classes must contain, ensuring a class adheres to a specific structure.",
        Sample: "interface Logger { public function log($message); } class FileLogger implements Logger { public function log($message) { echo $message; } }",
        code: `<?php interface Logger { public function log($message); } class FileLogger implements Logger { public function log($message) { echo $message; } } ?>`
      },
      {
        id: 26,
        Title: "26. What is polymorphism in PHP?",
        answer: "Polymorphism allows objects of different types to be treated as objects of a common super type, typically through inheritance and interfaces.",
        Sample: "function processShape(Shape $shape) { $shape->draw(); }",
        code: `<?php function processShape(Shape $shape) { $shape->draw(); } ?>`
      },
      {
        id: 27,
        Title: "27. What is the use of abstract classes in PHP?",
        answer: "Abstract classes provide a base class with abstract methods that must be implemented by subclasses. They cannot be instantiated directly.",
        Sample: "abstract class Animal { abstract public function makeSound(); } class Dog extends Animal { public function makeSound() { echo 'Bark'; } }",
        code: `<?php abstract class Animal { abstract public function makeSound(); } class Dog extends Animal { public function makeSound() { echo 'Bark'; } } ?>`
      },
      {
        id: 28,
        Title: "28. What is method overriding in PHP?",
        answer: "Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its superclass.",
        Sample: "class Animal { public function sound() { echo 'Sound'; } } class Dog extends Animal { public function sound() { echo 'Bark'; } }",
        code: `<?php class Animal { public function sound() { echo 'Sound'; } } class Dog extends Animal { public function sound() { echo 'Bark'; } } ?>`
      },
      {
        id: 29,
        Title: "29. How do you handle exceptions in PHP?",
        answer: "PHP provides try-catch blocks for exception handling, where exceptions are thrown using the throw keyword.",
        Sample: "try { throw new Exception('Error'); } catch (Exception $e) { echo $e->getMessage(); }",
        code: `<?php try { throw new Exception('Error'); } catch (Exception $e) { echo $e->getMessage(); } ?>`
      },
      {
        id: 30,
        Title: "30. What is the purpose of the final keyword in PHP?",
        answer: "The final keyword prevents a class from being inherited or a method from being overridden.",
        Sample: "final class Car {} final public function start() {}",
        code: `<?php final class Car {} final public function start() {} ?>`
      },
      {
        id: 31,
        Title: "31. What is a static method in PHP?",
        answer: "A static method belongs to the class rather than instances of the class. It can be called without creating an object of the class.",
        Sample: "class Math { public static function add($a, $b) { return $a + $b; } }",
        code: `<?php class Math { public static function add($a, $b) { return $a + $b; } } ?>`
      },
      {
        id: 32,
        Title: "32. How do you connect to a MySQL database in PHP?",
        answer: "You can connect to a MySQL database using mysqli or PDO.",
        Sample: "$conn = new mysqli('localhost', 'username', 'password', 'database');",
        code: `<?php $conn = new mysqli('localhost', 'username', 'password', 'database'); ?>`
      },
      {
        id: 33,
        Title: "33. What is the difference between GET and POST in PHP?",
        answer: "GET appends data to the URL and is used for retrieving data, while POST sends data within the request body and is used for submitting data.",
        Sample: "$_GET['name']; $_POST['name'];",
        code: `<?php echo $_GET['name']; echo $_POST['name']; ?>`
      },
      {
        id: 34,
        Title: "34. What is the MVC architecture in PHP?",
        answer: "MVC (Model-View-Controller) is a design pattern that separates the application logic, user interface, and input into three interconnected components.",
        Sample: "Model: Database; View: HTML; Controller: PHP logic.",
        code: `N/A`
      },
      {
        id: 35,
        Title: "35. How do you execute a prepared statement in PHP?",
        answer: "Prepared statements in PHP help prevent SQL injection by separating SQL logic from data values.",
        Sample: "$stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?'); $stmt->execute([$id]);",
        code: `<?php $stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?'); $stmt->execute([$id]); ?>`
      },
      {
        id: 36,
        Title: "36. What is the difference between a public, protected, and private property in PHP?",
        answer: "Public properties can be accessed from anywhere, protected properties are accessible within the class and its subclasses, and private properties are accessible only within the class.",
        Sample: "class Car { public $color; protected $brand; private $engine; }",
        code: `<?php class Car { public $color; protected $brand; private $engine; } ?>`
      },
      {
        id: 37,
        Title: "37. How do you handle file uploads in PHP?",
        answer: "PHP handles file uploads through the $_FILES superglobal, which stores information about uploaded files.",
        Sample: "move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $_FILES['file']['name']);",
        code: `<?php move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $_FILES['file']['name']); ?>`
      },
      {
        id: 38,
        Title: "38. How do you create a JSON response in PHP?",
        answer: "You can create JSON responses using json_encode().",
        Sample: "$response = json_encode(['status' => 'success']);",
        code: `<?php $response = json_encode(['status' => 'success']); echo $response; ?>`
      },
      {
        id: 39,
        Title: "39. How do you define an interface in PHP?",
        answer: "An interface is defined using the interface keyword, and implementing classes must define its methods.",
        Sample: "interface Logger { public function log($message); }",
        code: `<?php interface Logger { public function log($message); } ?>`
      },
      {
        id: 40,
        Title: "40. What is the purpose of a dependency manager like Composer in PHP?",
        answer: "Composer manages packages and libraries for PHP projects, allowing for easier dependency management.",
        Sample: "composer require vendor/package",
        code: `# Run in terminal\ncomposer require vendor/package`
      },
      {
        id: 41,
        Title: "41. How does an if-else statement work in PHP?",
        answer: "The if-else statement executes one block of code if a specified condition is true, otherwise it executes another block of code.",
        Sample: "if ($age >= 18) { echo 'Adult'; } else { echo 'Minor'; }",
        code: `<?php if ($age >= 18) { echo 'Adult'; } else { echo 'Minor'; } ?>`
      },
      {
        id: 42,
        Title: "42. What is the elseif statement in PHP?",
        answer: "The elseif statement allows multiple conditions to be evaluated in a sequence if previous conditions are false.",
        Sample: "if ($score >= 90) { echo 'A'; } elseif ($score >= 80) { echo 'B'; } else { echo 'C'; }",
        code: `<?php if ($score >= 90) { echo 'A'; } elseif ($score >= 80) { echo 'B'; } else { echo 'C'; } ?>`
      },
      {
        id: 43,
        Title: "43. How does the switch statement work in PHP?",
        answer: "The switch statement is used to perform different actions based on multiple possible values of a single variable.",
        Sample: "switch ($color) { case 'red': echo 'Red'; break; case 'blue': echo 'Blue'; break; default: echo 'Other'; }",
        code: `<?php switch ($color) { case 'red': echo 'Red'; break; case 'blue': echo 'Blue'; break; default: echo 'Other'; } ?>`
      },
      {
        id: 44,
        Title: "44. How does a for loop work in PHP?",
        answer: "The for loop is used when you know in advance how many times you want to execute a statement or a block of statements.",
        Sample: "for ($i = 0; $i < 10; $i++) { echo $i; }",
        code: `<?php for ($i = 0; $i < 10; $i++) { echo $i; } ?>`
      },
      {
        id: 45,
        Title: "45. What is a foreach loop in PHP?",
        answer: "The foreach loop is used to iterate over arrays and access each value in the array without needing an index.",
        Sample: "foreach ($array as $value) { echo $value; }",
        code: `<?php foreach ($array as $value) { echo $value; } ?>`
      },
      {
        id: 46,
        Title: "46. How does a while loop work in PHP?",
        answer: "The while loop executes a block of code as long as the specified condition is true.",
        Sample: "$i = 0; while ($i < 5) { echo $i; $i++; }",
        code: `<?php $i = 0; while ($i < 5) { echo $i; $i++; } ?>`
      },
      {
        id: 47,
        Title: "47. How does a do-while loop work in PHP?",
        answer: "The do-while loop executes a block of code once and then repeats it as long as the specified condition is true.",
        Sample: "$i = 0; do { echo $i; $i++; } while ($i < 5);",
        code: `<?php $i = 0; do { echo $i; $i++; } while ($i < 5); ?>`
      },
      {
        id: 48,
        Title: "48. How does the break statement work in PHP?",
        answer: "The break statement is used to exit a loop prematurely when a specific condition is met.",
        Sample: "for ($i = 0; $i < 10; $i++) { if ($i == 5) { break; } echo $i; }",
        code: `<?php for ($i = 0; $i < 10; $i++) { if ($i == 5) { break; } echo $i; } ?>`
      },
      {
        id: 49,
        Title: "49. What is the purpose of the continue statement in PHP?",
        answer: "The continue statement skips the current iteration of a loop and moves to the next iteration.",
        Sample: "for ($i = 0; $i < 10; $i++) { if ($i == 5) { continue; } echo $i; }",
        code: `<?php for ($i = 0; $i < 10; $i++) { if ($i == 5) { continue; } echo $i; } ?>`
      },
      {
        id: 50,
        Title: "50. How can you nest loops in PHP?",
        answer: "PHP allows nesting of loops, meaning you can use one loop inside another loop. Each loop should have its own loop variable to avoid conflicts.",
        Sample: "for ($i = 1; $i <= 3; $i++) { for ($j = 1; $j <= 3; $j++) { echo $i . '-' . $j; } }",
        code: `<?php for ($i = 1; $i <= 3; $i++) { for ($j = 1; $j <= 3; $j++) { echo $i . '-' . $j; } } ?>`
      },
      {
        id: 51,
        Title: "41. What are namespaces in PHP?",
        answer: "Namespaces in PHP allow you to group related classes, functions, and constants, avoiding naming conflicts.",
        Sample: "namespace MyNamespace; class MyClass {}",
        code: `<?php namespace MyNamespace; class MyClass {} ?>`
      },
      {
        id: 52,
        Title: "42. What are traits in PHP?",
        answer: "Traits are a mechanism for code reuse in PHP, allowing you to include methods in multiple classes without inheritance.",
        Sample: "trait Logger { public function log($msg) { echo $msg; } } class User { use Logger; }",
        code: `<?php trait Logger { public function log($msg) { echo $msg; } } class User { use Logger; } ?>`
      },
      {
        id: 53,
        Title: "43. What is a closure in PHP?",
        answer: "A closure is an anonymous function that can be stored in a variable and passed as an argument to other functions.",
        Sample: "$greet = function($name) { return 'Hello ' . $name; }; echo $greet('Alice');",
        code: `<?php $greet = function($name) { return 'Hello ' . $name; }; echo $greet('Alice'); ?>`
      },
      {
        id: 54,
        Title: "44. How do you start a session in PHP?",
        answer: "Sessions in PHP are started with session_start(), allowing you to store user data across pages.",
        Sample: "session_start(); $_SESSION['username'] = 'John';",
        code: `<?php session_start(); $_SESSION['username'] = 'John'; ?>`
      },
      {
        id: 55,
        Title: "45. How do you handle file uploads in PHP?",
        answer: "PHP handles file uploads via the $_FILES array, where you can validate and move uploaded files to a server directory.",
        Sample: "move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $_FILES['file']['name']);",
        code: `<?php move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $_FILES['file']['name']); ?>`
      },
      {
        id: 56,
        Title: "46. What is the purpose of Composer in PHP?",
        answer: "Composer is a dependency manager for PHP that allows you to manage libraries and packages for your project.",
        Sample: "composer require vendor/package",
        code: `# Run in terminal
    composer require vendor/package`
      },
      {
        id: 57,
        Title: "47. How do you handle JSON data in PHP?",
        answer: "PHP has json_encode() and json_decode() functions to handle JSON data.",
        Sample: "$json = json_encode(['name' => 'Alice']); $array = json_decode($json, true);",
        code: `<?php $json = json_encode(['name' => 'Alice']); $array = json_decode($json, true); ?>`
      },
      {
        id: 58,
        Title: "48. How can you make a cURL request in PHP?",
        answer: "cURL is used to make HTTP requests in PHP.",
        Sample: "$ch = curl_init('https://api.example.com'); curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); $response = curl_exec($ch);",
        code: `<?php $ch = curl_init('https://api.example.com'); curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); $response = curl_exec($ch); ?>`
      },
      {
        id: 59,
        Title: "49. What is REST API integration in PHP?",
        answer: "REST API integration involves sending HTTP requests to REST endpoints. PHP can handle REST APIs with cURL or file_get_contents().",
        Sample: "$data = file_get_contents('https://api.example.com');",
        code: `<?php $data = file_get_contents('https://api.example.com'); ?>`
      },
      {
        id: 60,
        Title: "50. How do you use prepared statements in PHP?",
        answer: "Prepared statements in PHP help prevent SQL injection by separating SQL logic from data values.",
        Sample: "$stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?'); $stmt->execute([$id]);",
        code: `<?php $stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?'); $stmt->execute([$id]); ?>`
      },
      
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
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">PHP Basics and Concepts</h1>

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

export default Php;

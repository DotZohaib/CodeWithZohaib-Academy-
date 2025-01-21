"use client";
import React, { useState, useEffect, useCallback } from "react";
import Prism from "prismjs";
import {
  Search,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  BookOpen,
  Code,
  ChevronUp,
  ChevronDown,
  Check,
  Copy,
} from "lucide-react";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-c";

interface Question {
  id: number;
  Title: string;
  answer: string;
  Sample: string;
  code: string;
}

interface Categories {
  [key: string]: string;
}

const Cpp: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string | null>(null);

  // Your existing array data here...
  const array: Question[] = [
    {
      id: 1,
      Title: "1. What is C++?",
      answer:
        "C++ is a general-purpose programming language with object-oriented and low-level memory manipulation capabilities.",
      Sample: "Simple C++ Hello World program.",
      code: `#include <iostream>\nint main() {\n    std::cout << "Hello, World!";\n    return 0;\n}`,
    },
    {
      id: 2,
      Title: "2. What is the difference between C and C++?",
      answer:
        "C++ supports object-oriented programming features like classes and inheritance, while C is procedural.",
      Sample: "Declaring a class in C++.",
      code: `class Car {\n    public:\n        void start() {\n            std::cout << "Car started";\n        }\n};`,
    },
    {
      id: 3,
      Title: "3. What is a class?",
      answer:
        "A class is a user-defined data type that contains variables and functions to define an object.",
      Sample: "Defining a simple class.",
      code: `class Animal {\n    public:\n        void speak() {\n            std::cout << "Animal sound";\n        }\n};`,
    },
    {
      id: 4,
      Title: "4. What is an object?",
      answer: "An object is an instance of a class.",
      Sample: "Creating an object of a class.",
      code: `Animal dog;\ndog.speak();`,
    },
    {
      id: 5,
      Title: "5. What is inheritance?",
      answer:
        "Inheritance is a feature that allows a class to inherit properties and behaviors from another class.",
      Sample: "Inheritance example in C++.",
      code: `class Dog : public Animal {\n};`,
    },
    {
      id: 6,
      Title: "6. What are constructors and destructors?",
      answer:
        "Constructors initialize an object when it is created; destructors clean up before an object is destroyed.",
      Sample: "Constructor and destructor example.",
      code: `class Car {\n    public:\n        Car() { std::cout << "Car created"; }\n        ~Car() { std::cout << "Car destroyed"; }\n};`,
    },
    {
      id: 7,
      Title: "7. What is polymorphism?",
      answer:
        "Polymorphism allows functions or methods to behave differently based on the object calling them.",
      Sample: "Polymorphism with virtual functions.",
      code: `virtual void sound() { std::cout << "Animal sound"; }`,
    },
    {
      id: 8,
      Title: "8. What are pointers in C++?",
      answer: "Pointers store the memory address of another variable.",
      Sample: "Using pointers in C++.",
      code: `int a = 5;\nint *ptr = &a;`,
    },
    {
      id: 9,
      Title: "9. What is encapsulation?",
      answer:
        "Encapsulation is the concept of bundling data and methods within a class.",
      Sample: "Encapsulation example in C++.",
      code: `class Circle {\n    private:\n        double radius;\n    public:\n        void setRadius(double r) { radius = r; }\n};`,
    },
    {
      id: 10,
      Title: "10. What is abstraction?",
      answer:
        "Abstraction hides implementation details and only exposes functionality.",
      Sample: "Abstracting functionality in a class.",
      code: `class Shape {\n    public:\n        virtual void draw() = 0;\n};`,
    },
    {
      id: 11,
      Title: "11. What are access specifiers?",
      answer:
        "Access specifiers define the accessibility of class members. They are public, private, and protected.",
      Sample: "Using access specifiers in a class.",
      code: `class MyClass {\n    private:\n        int secret;\n};`,
    },
    {
      id: 12,
      Title: "12. What is function overloading?",
      answer:
        "Function overloading allows multiple functions with the same name but different parameters.",
      Sample: "Overloading functions.",
      code: `void print(int i);\nvoid print(double d);`,
    },
    {
      id: 13,
      Title: "13. What is operator overloading?",
      answer:
        "Operator overloading allows operators to be redefined for custom behavior with user-defined types.",
      Sample: "Overloading the + operator.",
      code: `class Complex {\n    Complex operator+(const Complex& c);\n};`,
    },
    {
      id: 14,
      Title: "14. What is a virtual function?",
      answer:
        "A virtual function is a function in a base class that can be overridden in derived classes.",
      Sample: "Using virtual functions.",
      code: `virtual void display() const;`,
    },
    {
      id: 15,
      Title: "15. What is a pure virtual function?",
      answer:
        "A pure virtual function has no body and must be overridden by derived classes.",
      Sample: "Declaring a pure virtual function.",
      code: `virtual void draw() = 0;`,
    },
    {
      id: 16,
      Title: "16. What is a friend function?",
      answer: "A friend function can access private members of a class.",
      Sample: "Using a friend function.",
      code: `friend void display(const MyClass& m);`,
    },
    {
      id: 17,
      Title: "17. What is an inline function?",
      answer:
        "An inline function is expanded in place to reduce function call overhead.",
      Sample: "Declaring an inline function.",
      code: `inline int square(int x) { return x * x; }`,
    },
    {
      id: 18,
      Title: "18. What is the 'this' pointer?",
      answer:
        "The 'this' pointer is an implicit pointer that points to the current object.",
      Sample: "Using the 'this' pointer.",
      code: `int getValue() const { return this->value; }`,
    },
    {
      id: 19,
      Title: "19. What are templates?",
      answer:
        "Templates allow functions and classes to operate with generic types.",
      Sample: "Function template example.",
      code: `template <typename T> T add(T a, T b) { return a + b; }`,
    },
    {
      id: 20,
      Title: "20. What is the Standard Template Library (STL)?",
      answer:
        "STL is a library of generic classes and functions in C++ for data structures and algorithms.",
      Sample: "Using STL vector.",
      code: `std::vector<int> vec = {1, 2, 3};`,
    },
    {
      id: 21,
      Title: "21. What is a lambda expression in C++?",
      answer: "A lambda is an anonymous function defined with a simple syntax.",
      Sample: "Lambda example.",
      code: `auto add = [](int x, int y) { return x + y; };`,
    },
    {
      id: 22,
      Title: "22. What is exception handling in C++?",
      answer:
        "Exception handling deals with runtime errors using try, catch, and throw.",
      Sample: "Exception handling example.",
      code: `try { throw "Error"; } catch(const char* msg) { std::cout << msg; }`,
    },
    {
      id: 23,
      Title: "23. What is dynamic memory allocation in C++?",
      answer:
        "Dynamic memory allocation is managed with new and delete operators.",
      Sample: "Allocating and deallocating memory.",
      code: `int *ptr = new int;\ndelete ptr;`,
    },
    {
      id: 24,
      Title: "24. What is RAII in C++?",
      answer:
        "RAII (Resource Acquisition Is Initialization) is a programming idiom for resource management.",
      Sample: "Using RAII with a class.",
      code: `class File {\n    std::fstream file;\n    public: File() { file.open("file.txt"); }\n    ~File() { file.close(); }\n};`,
    },
    {
      id: 25,
      Title: "25. What are smart pointers?",
      answer:
        "Smart pointers are C++11 pointers that automatically manage memory.",
      Sample: "Using smart pointers.",
      code: `std::unique_ptr<int> ptr = std::make_unique<int>(10);`,
    },
    {
      id: 26,
      Title: "26. What is multithreading in C++?",
      answer:
        "Multithreading is executing multiple threads simultaneously to improve performance.",
      Sample: "Creating a thread in C++11.",
      code: `std::thread t([]{ std::cout << "Thread running"; });\nt.join();`,
    },
    {
      id: 27,
      Title: "27. What is the purpose of 'const' in C++?",
      answer:
        "const declares a variable as constant, which prevents modification.",
      Sample: "Using const with a variable.",
      code: `const int MAX = 100;`,
    },
    {
      id: 28,
      Title: "28. What is type casting in C++?",
      answer: "Type casting converts one data type into another.",
      Sample: "Casting an integer to a double.",
      code: `double d = static_cast<double>(42);`,
    },
    {
      id: 29,
      Title: "29. What is a namespace?",
      answer: "Namespaces prevent naming conflicts by grouping identifiers.",
      Sample: "Using a namespace.",
      code: `namespace MyNamespace { int x = 5; }`,
    },
    {
      id: 30,
      Title: "30. What is the use of 'new' and 'delete'?",
      answer: "'new' allocates memory, and 'delete' frees it.",
      Sample: "Using new and delete.",
      code: `int *p = new int(10);\ndelete p;`,
    },
    {
      id: 31,
      Title: "31. What are preprocessor directives?",
      answer:
        "Preprocessor directives provide instructions to the compiler before actual compilation.",
      Sample: "Using #define.",
      code: `#define PI 3.14159`,
    },
    {
      id: 32,
      Title: "32. What is a segmentation fault?",
      answer:
        "A segmentation fault occurs when a program accesses restricted memory.",
      Sample: "Segmentation fault example.",
      code: `int* ptr = nullptr;\n*ptr = 42;`,
    },
    {
      id: 33,
      Title: "33. What is the difference between 'struct' and 'class'?",
      answer:
        "In 'struct', members are public by default, while in 'class', they are private by default.",
      Sample: "Declaring a struct and a class.",
      code: `struct MyStruct { int a; };\nclass MyClass { int b; };`,
    },
    {
      id: 34,
      Title: "34. What are reference variables?",
      answer: "Reference variables act as aliases for other variables.",
      Sample: "Using reference variables.",
      code: `int a = 10;\nint &ref = a;`,
    },
    {
      id: 35,
      Title: "35. What is move semantics?",
      answer:
        "Move semantics allow resources to be moved from one object to another, avoiding deep copies.",
      Sample: "Using std::move.",
      code: `std::vector<int> v1 = {1, 2};\nstd::vector<int> v2 = std::move(v1);`,
    },
    {
      id: 36,
      Title: "36. What is a static variable?",
      answer: "A static variable retains its value between function calls.",
      Sample: "Using a static variable.",
      code: `void counter() {\n    static int count = 0;\n    ++count;\n}`,
    },
    {
      id: 37,
      Title: "37. What are the four pillars of OOP?",
      answer:
        "The four pillars are encapsulation, abstraction, inheritance, and polymorphism.",
      Sample: "",
      code: "",
    },
    {
      id: 38,
      Title: "38. What is a destructor?",
      answer: "A destructor cleans up when an object is destroyed.",
      Sample: "Creating a destructor.",
      code: `~MyClass() { std::cout << "Destroyed"; }`,
    },
    {
      id: 39,
      Title: "39. What is a mutable keyword?",
      answer: "Mutable allows members of a const object to be modified.",
      Sample: "Using mutable.",
      code: `mutable int value;`,
    },
    {
      id: 40,
      Title: "40. What is a null pointer?",
      answer: "A null pointer points to nothing.",
      Sample: "Null pointer example.",
      code: `int* ptr = nullptr;`,
    },
    {
      id: 41,
      Title: "41. What is an if-else statement?",
      answer: "If-else statements allow branching based on conditions.",
      Sample: "Using if-else to check a condition.",
      code: `int x = 10;\nif (x > 5) {\n    std::cout << "x is greater than 5";\n} else {\n    std::cout << "x is not greater than 5";\n}`,
    },
    {
      id: 42,
      Title: "42. What is a for loop?",
      answer: "A for loop repeats code a specific number of times.",
      Sample: "Looping through numbers from 1 to 5.",
      code: `for (int i = 1; i <= 5; ++i) {\n    std::cout << i << " "; \n}`,
    },
    {
      id: 43,
      Title: "43. What is a while loop?",
      answer: "A while loop repeats code as long as a condition is true.",
      Sample: "Counting down from 5.",
      code: `int count = 5;\nwhile (count > 0) {\n    std::cout << count-- << " "; \n}`,
    },
    {
      id: 44,
      Title: "44. What is function overloading?",
      answer:
        "Function overloading allows multiple functions with the same name but different parameters.",
      Sample: "Overloading add function.",
      code: `int add(int a, int b) { return a + b; }\ndouble add(double a, double b) { return a + b; }`,
    },
    {
      id: 45,
      Title: "45. What is operator overloading?",
      answer:
        "Operator overloading lets you define custom behavior for operators.",
      Sample: "Overloading + operator.",
      code: `MyClass operator+(const MyClass &obj);`,
    },
    {
      id: 46,
      Title: "46. What is an array?",
      answer:
        "An array is a collection of items stored at contiguous memory locations.",
      Sample: "Declaring an array.",
      code: `int arr[5] = {1, 2, 3, 4, 5};`,
    },
    {
      id: 47,
      Title: "47. What is a vector?",
      answer: "A vector is a dynamic array in C++ STL.",
      Sample: "Using a vector.",
      code: `std::vector<int> v = {1, 2, 3};`,
    },
    {
      id: 48,
      Title: "48. What is a map in C++?",
      answer: "A map stores key-value pairs, with unique keys.",
      Sample: "Creating a map.",
      code: `std::map<int, std::string> m;\nm[1] = "One";`,
    },
    {
      id: 49,
      Title: "49. What is inheritance?",
      answer:
        "Inheritance allows a class to inherit attributes and methods from another class.",
      Sample: "Using inheritance.",
      code: `class Derived : public Base {};`,
    },
    {
      id: 50,
      Title: "50. What is encapsulation?",
      answer:
        "Encapsulation bundles data and methods that operate on the data within one unit.",
      Sample: "Using encapsulation.",
      code: `class MyClass { private: int x; public: void setX(int val) { x = val; } };`,
    },
    {
      id: 51,
      Title: "51. What is polymorphism?",
      answer:
        "Polymorphism allows methods to do different things based on the object they are acting on.",
      Sample: "Using polymorphism.",
      code: `virtual void display() const;`,
    },
    {
      id: 52,
      Title: "52. What is a pure virtual function?",
      answer:
        "A pure virtual function is a function with no body, declared by setting it to 0.",
      Sample: "Declaring a pure virtual function.",
      code: `virtual void func() = 0;`,
    },
    {
      id: 53,
      Title: "53. What is the 'this' pointer?",
      answer:
        "The 'this' pointer is a pointer to the current object in a class.",
      Sample: "Using 'this' pointer.",
      code: `class MyClass { int x; MyClass(int x) { this->x = x; } };`,
    },
    {
      id: 54,
      Title: "54. What is an enum?",
      answer:
        "An enum is a user-defined type for assigning names to integral constants.",
      Sample: "Declaring an enum.",
      code: `enum Color { RED, GREEN, BLUE };`,
    },
    {
      id: 55,
      Title: "55. What is a lambda expression?",
      answer: "A lambda is a short, unnamed function used within C++.",
      Sample: "Using a lambda.",
      code: `auto add = [](int a, int b) { return a + b; };`,
    },
    {
      id: 56,
      Title: "56. What is a template?",
      answer: "Templates allow writing generic functions and classes.",
      Sample: "Creating a template function.",
      code: `template <typename T> T add(T a, T b) { return a + b; }`,
    },
    {
      id: 57,
      Title: "57. What is an iterator?",
      answer:
        "An iterator is an object that points to an element in a container.",
      Sample: "Using an iterator with a vector.",
      code: `std::vector<int>::iterator it = v.begin();`,
    },
    {
      id: 58,
      Title: "58. What is the difference between 'break' and 'continue'?",
      answer:
        "'break' exits the loop, while 'continue' skips to the next iteration.",
      Sample: "Using break and continue.",
      code: `for (int i = 0; i < 5; ++i) { if (i == 3) continue; std::cout << i; }`,
    },
    {
      id: 59,
      Title: "59. What is recursion?",
      answer: "Recursion is a function calling itself to solve a problem.",
      Sample: "Factorial using recursion.",
      code: `int factorial(int n) { return (n <= 1) ? 1 : n * factorial(n - 1); }`,
    },
    {
      id: 60,
      Title: "60. What is the 'try-catch' block?",
      answer: "The 'try-catch' block handles exceptions in C++.",
      Sample: "Using try-catch.",
      code: `try { int x = 0; if (x == 0) throw x; } catch (int e) { std::cout << "Division by zero"; }`,
    },
  ];

  const categories: Categories = {
    all: "All Topics",
    basics: "Basic Concepts (1-20)",
    advanced: "Advanced Topics (21-40)",
    pointers: "Pointers & Memory",
    structures: "Structures & Unions",
    files: "File Handling",
  };

  useEffect(() => {
    const initializePrism = () => {
      if (typeof window !== "undefined") {
        Prism.highlightAll();
      }
    };

    initializePrism();
  }, [expandedItems]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = useCallback(
    async (text: string, index: number, e: React.MouseEvent) => {
      e.stopPropagation();
      try {
        await navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Failed to copy to clipboard");
        setTimeout(() => setError(null), 2000);
      }
    },
    []
  );

  const toggleExpand = useCallback((id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredArray = array.filter((item) => {
    const matchesSearch =
      item.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());

    switch (selectedCategory) {
      case "all":
        return matchesSearch;
      case "basics":
        return matchesSearch && item.id <= 20;
      case "advanced":
        return matchesSearch && item.id > 20;
      case "pointers":
        return matchesSearch && [21, 22, 23, 38, 40].includes(item.id);
      case "structures":
        return matchesSearch && [24, 26, 27, 28, 37].includes(item.id);
      case "files":
        return matchesSearch && [30, 31, 32, 35].includes(item.id);
      default:
        return matchesSearch;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="sticky top-0 z-10 bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
            C++ Programming Guide
          </h1>

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search concepts..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {Object.entries(categories).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {filteredArray.map((item) => {
          const isExpanded = expandedItems.includes(item.id);

          return (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg mb-6 transform transition-all duration-200 hover:shadow-xl"
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(item.id)}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-2">
                    <Code size={24} className="text-blue-500" />
                    {item.Title}
                  </h2>
                  {isExpanded ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>

                {isExpanded && (
                  <div className="mt-4 space-y-4 animate-fadeIn">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-medium text-blue-800 mb-2">
                        Explanation:
                      </h3>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-medium text-green-800 mb-2">
                        Example Usage:
                      </h3>
                      <p className="text-gray-600">{item.Sample}</p>
                    </div>

                    <div className="relative">
                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="flex justify-between items-center px-4 py-2 bg-gray-700">
                          <span className="text-gray-200">Code Example</span>
                          <button
                            onClick={(e) => handleCopy(item.code, item.id, e)}
                            className="flex items-center gap-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
                          >
                            {copiedIndex === item.id ? (
                              <>
                                <Check size={16} />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy size={16} />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                        <div className="p-4 overflow-x-auto">
                          <pre className="!m-0">
                            <code className="language-c">{item.code}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </main>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-200 animate-bounce"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Cpp;

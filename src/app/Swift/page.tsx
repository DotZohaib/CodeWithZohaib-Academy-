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

const Swift: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string | null>(null);

  const array: Question[] = [
    {
      id: 1,
      Title: "1. What is Swift?",
      answer:
        "Swift is a powerful, open-source programming language developed by Apple for iOS, macOS, watchOS, and tvOS.",
      Sample: 'var greeting = "Hello, Swift!"',
      code: `var greeting = "Hello, Swift!"`,
    },

    {
      id: 2,
      Title: "2. What is a variable in Swift?",
      answer:
        "A variable is a storage location to hold data, declared with `var`.",
      Sample: "var name = 'Swift'",
      code: `var name = "Swift"`,
    },

    {
      id: 3,
      Title: "3. Explain if-else statement in Swift.",
      answer: "Used for conditional branching in Swift.",
      Sample: "if condition { } else { }",
      code: `if age > 18 {\n  print("Adult")\n} else {\n  print("Minor")\n}`,
    },

    {
      id: 4,
      Title: "4. What is a loop in Swift?",
      answer: "A loop is used to repeat code multiple times.",
      Sample: "for or while loops",
      code: `for i in 1...5 {\n  print(i)\n}`,
    },

    {
      id: 5,
      Title: "5. What is an array in Swift?",
      answer: "An array is an ordered collection of elements.",
      Sample: "let arr = [1, 2, 3]",
      code: `let arr = [1, 2, 3]`,
    },

    {
      id: 6,
      Title: "6. What is a dictionary in Swift?",
      answer: "A dictionary is a collection of key-value pairs.",
      Sample: `let dict = ["name": "Alice", "age": 25]`,
      code: `let dict = ["name": "Alice", "age": 25]`,
    },

    {
      id: 7,
      Title: "7. Explain the for-in loop syntax.",
      answer: "Iterates over a range or collection.",
      Sample: `for i in 1...5`,
      code: `for i in 1...5 {\n  print(i)\n}`,
    },

    {
      id: 8,
      Title: "8. How to define a function in Swift?",
      answer: "Use `func` keyword followed by function name.",
      Sample: `func greet(name: String)`,
      code: `func greet(name: String) {\n  print("Hello, \\(name)!"\n}`,
    },

    {
      id: 9,
      Title: "9. Explain the while loop.",
      answer: "Repeats until a condition is false.",
      Sample: `while condition { }`,
      code: `var i = 0\nwhile i < 5 {\n  print(i)\n  i += 1\n}`,
    },

    {
      id: 10,
      Title: "10. What is a class in Swift?",
      answer: "A class is a blueprint to create objects.",
      Sample: "class Person",
      code: `class Person {\n  var name: String\n  init(name: String) {\n    self.name = name\n  }\n}`,
    },

    {
      id: 11,
      Title: "11. Explain inheritance in Swift.",
      answer: "A class can inherit properties and methods from another class.",
      Sample: `class Dog: Animal`,
      code: `class Dog: Animal {\n  func bark() {\n    print("Woof!")\n  }\n}`,
    },

    {
      id: 12,
      Title: "12. What is a protocol in Swift?",
      answer:
        "A protocol defines a blueprint of methods and properties for a type.",
      Sample: "protocol Greetable",
      code: `protocol Greetable {\n  func greet()\n}`,
    },

    {
      id: 13,
      Title: "13. Explain optional in Swift.",
      answer: "An optional is a type that may contain a value or nil.",
      Sample: `var name: String?`,
      code: `var name: String? = "Alice"`,
    },

    {
      id: 14,
      Title: "14. What is a closure in Swift?",
      answer:
        "A closure is a block of code that can be passed and executed later.",
      Sample: "{ (parameters) -> ReturnType in statements }",
      code: `let greet = { (name: String) in\n  print("Hello, \\(name)!"\n}`,
    },

    {
      id: 15,
      Title: "15. Explain enumerations in Swift.",
      answer: "An enum defines a common type for a group of related values.",
      Sample: "enum Direction { case north, south }",
      code: `enum Direction {\n  case north, south, east, west\n}`,
    },

    {
      id: 16,
      Title: "16. What is a struct in Swift?",
      answer: "A struct is a value type that can hold properties and methods.",
      Sample: "struct Person",
      code: `struct Person {\n  var name: String\n}`,
    },

    {
      id: 17,
      Title: "17. Explain the guard statement.",
      answer: "Guard statement is used for early exits.",
      Sample: "guard condition else { }",
      code: `guard age > 18 else {\n  return\n}`,
    },

    {
      id: 18,
      Title: "18. What are computed properties?",
      answer: "Computed properties calculate a value rather than store it.",
      Sample: "var age: Int { }",
      code: `var age: Int {\n  return 2024 - birthYear\n}`,
    },

    {
      id: 19,
      Title: "19. Explain lazy properties in Swift.",
      answer: "A lazy property is initialized only when accessed.",
      Sample: "lazy var data = [Int]()",
      code: `lazy var data = [Int]()`,
    },

    {
      id: 20,
      Title: "20. What is type casting?",
      answer:
        "Type casting allows treating an object as an instance of another class or struct.",
      Sample: "as? or as!",
      code: `if let animal = pet as? Dog {\n  animal.bark()\n}`,
    },

    {
      id: 21,
      Title: "21. Explain encapsulation.",
      answer:
        "Encapsulation is the bundling of data with the methods that operate on that data.",
      Sample: "class Car",
      code: `class Car {\n  private var speed: Int\n}`,
    },

    {
      id: 22,
      Title: "22. What is a tuple in Swift?",
      answer: "A tuple groups multiple values into a single compound value.",
      Sample: "let tuple = (1, 'a')",
      code: `let tuple = (1, "a")`,
    },

    {
      id: 23,
      Title: "23. Explain generics in Swift.",
      answer:
        "Generics allow writing flexible and reusable functions or types.",
      Sample: "func swap<T>(_ a: inout T, _ b: inout T)",
      code: `func swap<T>(_ a: inout T, _ b: inout T) {\n  let temp = a\n  a = b\n  b = temp\n}`,
    },

    {
      id: 24,
      Title: "24. What are extensions?",
      answer:
        "Extensions add functionality to existing classes, structs, or enums.",
      Sample: "extension Int",
      code: `extension Int {\n  func square() -> Int {\n    return self * self\n  }\n}`,
    },

    {
      id: 25,
      Title: "25. Explain map, filter, and reduce functions.",
      answer:
        "Higher-order functions for arrays: map transforms, filter filters, and reduce reduces values.",
      Sample: "[1, 2, 3].map { $0 * 2 }",
      code: `let doubled = [1, 2, 3].map { $0 * 2 }`,
    },

    {
      id: 26,
      Title: "26. What is a switch statement?",
      answer: "Switch is a control statement for checking multiple cases.",
      Sample: "switch value { case ... }",
      code: `switch day {\n  case "Monday": print("Start")\n  default: print("Rest")\n}`,
    },

    {
      id: 27,
      Title: "27. Explain higher-order functions.",
      answer: "Higher-order functions accept other functions as arguments.",
      Sample: "map, filter",
      code: `[1, 2, 3].filter { $0 % 2 == 0 }`,
    },

    {
      id: 28,
      Title: "28. What is ARC (Automatic Reference Counting)?",
      answer: "ARC manages memory by tracking and releasing unused instances.",
      Sample: "No manual memory management required.",
      code: `class Person {\n  var name: String\n}`,
    },

    {
      id: 29,
      Title: "29. Explain weak and unowned references.",
      answer:
        "Used to avoid retain cycles. Weak is optional, unowned is non-optional.",
      Sample: "weak var delegate",
      code: `weak var delegate: SomeDelegate?`,
    },

    {
      id: 30,
      Title: "30. What are subscripts?",
      answer:
        "Subscripts allow accessing elements in a collection with syntax like `object[index]`.",
      Sample: "array[index]",
      code: `struct Matrix {\n  subscript(row: Int, col: Int) -> Int {\n    return data[row][col]\n  }\n}`,
    },

    {
      id: 31,
      Title: "31. What is a dispatch queue?",
      answer:
        "A dispatch queue manages tasks for concurrent or serial execution.",
      Sample: "DispatchQueue.main.async",
      code: `DispatchQueue.global().async {\n  // Background task\n}`,
    },

    {
      id: 32,
      Title: "31. What is optional chaining in Swift?",
      answer:
        "Optional chaining allows you to call properties, methods, and subscripts on optionals that might currently be nil.",
      Sample: "user?.profile?.email",
      code: `let email = user?.profile?.email`,
    },

    {
      id: 33,
      Title: "32. What is a singleton pattern?",
      answer:
        "Singleton is a design pattern that restricts a class to a single instance.",
      Sample: "class Singleton",
      code: `class Singleton {\n  static let shared = Singleton()\n  private init() {}\n}`,
    },

    {
      id: 34,
      Title: "33. Explain `defer` in Swift.",
      answer:
        "`defer` executes a block of code when the current scope is exiting, useful for cleanup tasks.",
      Sample: "defer { closeFile() }",
      code: `func openFile() {\n  defer { closeFile() }\n  // Code to read file\n}`,
    },

    {
      id: 35,
      Title: "34. What is a custom initializer?",
      answer:
        "A custom initializer allows you to initialize an instance with specific values or logic.",
      Sample: "init(name: String)",
      code: `class Person {\n  var name: String\n  init(name: String) {\n    self.name = name\n  }\n}`,
    },

    {
      id: 36,
      Title: "35. Explain error handling in Swift.",
      answer:
        "Swift uses `do-catch` for handling errors with `throw` for throwing errors.",
      Sample: "do { } catch { }",
      code: `do {\n  try someFunction()\n} catch {\n  print("Error occurred: \\(error)")\n}`,
    },

    {
      id: 37,
      Title: "36. What are type aliases in Swift?",
      answer:
        "A type alias provides an alternative name for an existing type, useful for clarity.",
      Sample: "typealias Speed = Double",
      code: `typealias Speed = Double\nlet maxSpeed: Speed = 120.0`,
    },

    {
      id: 38,
      Title: "37. Explain property observers in Swift.",
      answer:
        "Property observers like `willSet` and `didSet` observe and respond to changes in property values.",
      Sample: "var age: Int { didSet { } }",
      code: `var age: Int = 0 {\n  didSet {\n    print("Age changed to \\(age)")\n  }\n}`,
    },

    {
      id: 39,
      Title: "38. What is a higher-order function in Swift?",
      answer:
        "Higher-order functions like `map`, `filter`, and `reduce` take functions as parameters or return functions.",
      Sample: "array.map { }",
      code: `let numbers = [1, 2, 3]\nlet doubled = numbers.map { $0 * 2 }`,
    },

    {
      id: 40,
      Title: "39. Explain Codable in Swift.",
      answer:
        "The `Codable` protocol enables easy encoding and decoding for data types, especially with JSON.",
      Sample: "struct User: Codable { }",
      code: `struct User: Codable {\n  var name: String\n  var age: Int\n}`,
    },

    {
      id: 41,
      Title: "40. What is multithreading with GCD?",
      answer:
        "Grand Central Dispatch (GCD) allows concurrent and asynchronous code execution.",
      Sample: "DispatchQueue.global().async",
      code: `DispatchQueue.global().async {\n  // Background task\n}`,
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
            Swift Programming Guide
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

export default Swift;

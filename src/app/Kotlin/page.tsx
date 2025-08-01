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

const Kotlin: React.FC = () => {
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
      Title: "1. What is Kotlin?",
      answer:
        "Kotlin is a modern programming language that runs on the Java Virtual Machine (JVM). It is designed to be fully interoperable with Java and aims to improve developer productivity with a concise syntax, type inference, and powerful features.",
      Sample: "A simple Kotlin program that prints 'Hello, World!'.",
      code: `fun main() {\n    println("Hello, World!")\n}`,
    },
    {
      id: 2,
      Title: "2. What are the main features of Kotlin?",
      answer:
        "Kotlin features include null safety, extension functions, data classes, coroutines for asynchronous programming, and higher-order functions, making it expressive and safe.",
      Sample: "Using a data class in Kotlin.",
      code: `data class User(val name: String, val age: Int)`,
    },
    {
      id: 3,
      Title: "3. How to declare a variable in Kotlin?",
      answer:
        "In Kotlin, you can declare variables using `val` for read-only variables and `var` for mutable variables.",
      Sample: "Declaring variables in Kotlin.",
      code: `val name: String = "John"\nvar age: Int = 30`,
    },
    {
      id: 4,
      Title: "4. What is a data class in Kotlin?",
      answer:
        "A data class in Kotlin is a class that is primarily used to hold data. It automatically generates standard methods like equals(), hashCode(), and toString().",
      Sample: "Defining a data class.",
      code: `data class Point(val x: Int, val y: Int)`,
    },
    {
      id: 5,
      Title: "5. How to handle null safety in Kotlin?",
      answer:
        "Kotlin has built-in null safety features that prevent null pointer exceptions. You can use `?` to define nullable types.",
      Sample: "Using nullable types in Kotlin.",
      code: `var name: String? = null`,
    },
    {
      id: 6,
      Title: "6. What are extension functions in Kotlin?",
      answer:
        "Extension functions allow you to add new functionality to existing classes without modifying their source code.",
      Sample: "Creating an extension function.",
      code: `fun String.lastChar(): Char = this[this.length - 1]`,
    },
    {
      id: 7,
      Title: "7. How to create a function in Kotlin?",
      answer:
        "Functions in Kotlin are declared using the `fun` keyword, followed by the function name and parameters.",
      Sample: "Defining a simple function.",
      code: `fun add(a: Int, b: Int): Int {\n    return a + b\n}`,
    },
    {
      id: 8,
      Title: "8. What are higher-order functions in Kotlin?",
      answer:
        "Higher-order functions are functions that take other functions as parameters or return them.",
      Sample: "Using a higher-order function.",
      code: `fun operate(a: Int, b: Int, operation: (Int, Int) -> Int): Int {\n    return operation(a, b)\n}`,
    },
    {
      id: 9,
      Title: "9. What are coroutines in Kotlin?",
      answer:
        "Coroutines are a Kotlin feature that simplifies asynchronous programming by allowing you to write non-blocking code sequentially.",
      Sample: "Defining a coroutine.",
      code: `import kotlinx.coroutines.*\n\nfun main() = runBlocking {\n    launch {\n        delay(1000L)\n        println("World!")\n    }\n    println("Hello")\n}`,
    },
    {
      id: 10,
      Title: "10. How to use collections in Kotlin?",
      answer:
        "Kotlin provides powerful collection libraries that support immutable and mutable collections.",
      Sample: "Creating and manipulating a list.",
      code: `val numbers = listOf(1, 2, 3)\nval doubled = numbers.map { it * 2 }`,
    },
    {
      id: 11,
      Title: "11. What is the purpose of `lateinit` in Kotlin?",
      answer:
        "`lateinit` is used to declare a non-null variable that will be initialized later. It can only be used with mutable properties.",
      Sample: "Using `lateinit` to initialize a variable.",
      code: `lateinit var name: String`,
    },
    {
      id: 12,
      Title: "12. How to create an interface in Kotlin?",
      answer:
        "Interfaces in Kotlin can contain abstract methods and method implementations. Classes can implement multiple interfaces.",
      Sample: "Defining an interface.",
      code: `interface Drivable {\n    fun drive()\n}`,
    },
    {
      id: 13,
      Title: "13. What is a companion object in Kotlin?",
      answer:
        "A companion object allows you to define members that can be accessed without an instance of the class, similar to static members in Java.",
      Sample: "Creating a companion object.",
      code: `class MyClass {\n    companion object {\n        fun create(): MyClass = MyClass()\n    }\n}`,
    },
    {
      id: 14,
      Title: "14. How to handle exceptions in Kotlin?",
      answer:
        "Kotlin uses try-catch blocks for exception handling. You can also define finally blocks.",
      Sample: "Using try-catch for exception handling.",
      code: 'try {\n    val result = riskyFunction()\n} catch (e: Exception) {\n    println("Error: ${e.message}")\n}',
    },
    {
      id: 15,
      Title: "15. What is the difference between `==` and `===` in Kotlin?",
      answer:
        "`==` checks for structural equality (value equality), while `===` checks for referential equality (reference equality).",
      Sample: "Comparing objects in Kotlin.",
      code: `val a = String("Hello")\nval b = String("Hello")\nprintln(a == b)  // true\nprintln(a === b) // false`,
    },
    {
      id: 16,
      Title: "16. How to create a sealed class in Kotlin?",
      answer:
        "Sealed classes restrict class hierarchies and can only be subclassed within the same file.",
      Sample: "Defining a sealed class.",
      code: `sealed class Result\nclass Success(val data: String) : Result()\nclass Failure(val error: String) : Result()`,
    },
    {
      id: 17,
      Title: "17. How to use when expression in Kotlin?",
      answer:
        "The `when` expression is a powerful alternative to `if-else` chains and can match values and types.",
      Sample: "Using `when` to evaluate a variable.",
      code: `when (x) {\n    1 -> println("One")\n    2 -> println("Two")\n    else -> println("Unknown")\n}`,
    },
    {
      id: 18,
      Title: "18. How to implement inheritance in Kotlin?",
      answer:
        "Classes in Kotlin are final by default. Use the `open` keyword to allow inheritance.",
      Sample: "Creating a subclass in Kotlin.",
      code: `open class Animal\nclass Dog : Animal()`,
    },
    {
      id: 19,
      Title: "19. What are inline functions in Kotlin?",
      answer:
        "Inline functions help to reduce the overhead of higher-order functions by inserting the function body at the call site.",
      Sample: "Defining an inline function.",
      code: `inline fun runOperation(operation: () -> Unit) {\n    operation()\n}`,
    },
    {
      id: 20,
      Title: "20. How to use the `by` keyword for delegation in Kotlin?",
      answer:
        "The `by` keyword allows you to delegate the implementation of an interface to another object.",
      Sample: "Using property delegation.",
      code: `class Delegate {\n    operator fun getValue(thisRef: Any?, property: KProperty<*>): String {\n        return "Delegated Value"\n    }\n}\nclass Example {\n    var p: String by Delegate()\n}`,
    },
    {
      id: 21,
      Title: "21. How to create a lambda expression in Kotlin?",
      answer:
        "Lambda expressions are defined using curly braces and can take parameters and return values.",
      Sample: "Creating a simple lambda expression.",
      code: `val square: (Int) -> Int = { x -> x * x }\nprintln(square(4)) // Outputs 16`,
    },
    {
      id: 22,
      Title: "22. What is the use of `object` keyword in Kotlin?",
      answer:
        "The `object` keyword is used to declare an anonymous class or a singleton.",
      Sample: "Creating a singleton object.",
      code: `object Singleton {\n    fun doSomething() { println("Doing something!") }\n}`,
    },
    {
      id: 23,
      Title: "23. How to use the `override` keyword in Kotlin?",
      answer:
        "The `override` keyword is used to indicate that a method overrides a method from a superclass.",
      Sample: "Overriding a method in a subclass.",
      code: `open class Base { open fun greet() { println("Hello from Base") } }\nclass Derived : Base() { override fun greet() { println("Hello from Derived") } }`,
    },
    {
      id: 24,
      Title: "24. How to define a primary constructor in Kotlin?",
      answer:
        "In Kotlin, you can define a primary constructor in the class header.",
      Sample: "Defining a primary constructor.",
      code: `class Person(val name: String, var age: Int)`,
    },
    {
      id: 25,
      Title: "25. How to create a secondary constructor in Kotlin?",
      answer:
        "Secondary constructors are defined using the `constructor` keyword and can provide additional initialization.",
      Sample: "Defining a secondary constructor.",
      code: `class Person(val name: String) {\n    var age: Int\n    constructor(name: String, age: Int) : this(name) {\n        this.age = age\n    }\n}`,
    },
    {
      id: 26,
      Title: "26. How to work with JSON in Kotlin?",
      answer:
        "Kotlin can work with JSON using libraries like Gson or kotlinx.serialization.",
      Sample: "Using Gson to parse JSON.",
      code: `import com.google.gson.Gson\nval json = """{"name":"John","age":30}"""\nval person = Gson().fromJson(json, Person::class.java)`,
    },
    {
      id: 27,
      Title: "27. How to use the `require` function in Kotlin?",
      answer:
        "The `require` function is used to check preconditions in Kotlin functions.",
      Sample: "Using `require` to validate input.",
      code: `fun setAge(age: Int) {\n    require(age > 0) { "Age must be positive" }\n}`,
    },
    {
      id: 28,
      Title: "28. What is the use of `lazy` in Kotlin?",
      answer:
        "`lazy` is used to initialize a property lazily, meaning it will only be initialized when accessed for the first time.",
      Sample: "Using `lazy` initialization.",
      code: `val lazyValue: String by lazy { println("Computed!")\n    "Hello" }`,
    },
    {
      id: 29,
      Title: "29. How to implement generics in Kotlin?",
      answer:
        "Generics allow you to write flexible and reusable code. Use angle brackets to define generic types.",
      Sample: "Creating a generic class.",
      code: `class Box<T>(val value: T)\nval box = Box(42)`,
    },
    {
      id: 30,
      Title: "30. What is the purpose of `this` keyword in Kotlin?",
      answer:
        "`this` refers to the current instance of the class, and can also be used to disambiguate between class properties and parameters.",
      Sample: "Using `this` in a constructor.",
      code: `class Person(val name: String) {\n    fun greet() { println("Hello, my name is $name") }\n}`,
    },
    {
      id: 31,
      Title: "31. How to use the `as` keyword in Kotlin?",
      answer: "The `as` keyword is used for type casting in Kotlin.",
      Sample: "Casting an object to a different type.",
      code: `val obj: Any = "Hello"\nval str: String = obj as String`,
    },
    {
      id: 32,
      Title: "32. What is typealias in Kotlin?",
      answer:
        "A typealias provides an alternative name for a type, making the code more readable.",
      Sample: "Creating a typealias.",
      code: `typealias Name = String`,
    },
    {
      id: 33,
      Title: "33. How to use the `in` operator in Kotlin?",
      answer:
        "The `in` operator is used to check if a value is present in a range or a collection.",
      Sample: "Using `in` with a range.",
      code: `if (x in 1..10) { println("x is in the range") }`,
    },
    {
      id: 34,
      Title: "34. What are annotations in Kotlin?",
      answer:
        "Annotations are metadata that provide information about the program. They can be used to mark classes, functions, properties, etc.",
      Sample: "Defining a custom annotation.",
      code: `@Target(AnnotationTarget.CLASS)\nannotation class MyAnnotation`,
    },
    {
      id: 35,
      Title: "35. How to create a custom exception in Kotlin?",
      answer: "Custom exceptions are created by extending the Exception class.",
      Sample: "Defining a custom exception.",
      code: `class MyException(message: String) : Exception(message)`,
    },
    {
      id: 36,
      Title: "36. How to use the `suspend` keyword in Kotlin?",
      answer:
        "`suspend` is used to define a function that can be paused and resumed, typically used in coroutines.",
      Sample: "Defining a suspend function.",
      code: `suspend fun fetchData() { /* network call */ }`,
    },
    {
      id: 37,
      Title: "37. What is the use of `@JvmStatic` annotation in Kotlin?",
      answer:
        "The `@JvmStatic` annotation makes a companion object method callable as a static method from Java.",
      Sample: "Using `@JvmStatic` in a companion object.",
      code: `class MyClass {\n    companion object {\n        @JvmStatic\n        fun staticMethod() { }\n    }\n}`,
    },
    {
      id: 38,
      Title: "38. How to use the `@Deprecated` annotation in Kotlin?",
      answer:
        "The `@Deprecated` annotation marks a method or class as outdated and suggests an alternative.",
      Sample: "Marking a method as deprecated.",
      code: `@Deprecated("Use newMethod instead")\nfun oldMethod() { }`,
    },
    {
      id: 39,
      Title: "39. What is `sealed` interface in Kotlin?",
      answer:
        "A sealed interface restricts the implementations to a specific set of classes, ensuring type safety.",
      Sample: "Defining a sealed interface.",
      code: `sealed interface Shape\nclass Circle(val radius: Double) : Shape\nclass Square(val side: Double) : Shape`,
    },
    {
      id: 40,
      Title: "40. How to implement a generic function in Kotlin?",
      answer:
        "Generic functions can accept parameters of any type, defined using angle brackets.",
      Sample: "Creating a generic function.",
      code: `fun <T> printValue(value: T) { println(value) }`,
    },
    {
      id: 41,
      Title: "41. How to handle multiple exceptions in Kotlin?",
      answer:
        "You can catch multiple exceptions in a single catch block using the `when` expression.",
      Sample: "Handling multiple exceptions.",
      code: `try {\n    riskyOperation()\n} catch (e: IOException) {\n    println("IO Exception")\n} catch (e: Exception) {\n    println("General Exception")\n}`,
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
            Kotlin Programming Guide
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

export default Kotlin;

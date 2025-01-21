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

const Go: React.FC = () => {
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
      Title: "1. What is Go?",
      answer:
        "Go is an open-source programming language developed by Google, known for its efficiency, simplicity, and ease of concurrency.",
      Sample: "instructions for your operating system.",
      code: `mkdir ~/go_projects
cd ~/go_projects
`,
    },
    {
      id: 2,
      Title: "2. How do you declare a variable in Go?",
      answer: "Use the `var` keyword or shorthand `:=`.",
      Sample: "var x int = 5",
      code: `x := 5`,
    },
    {
      id: 3,
      Title: "3. Explain if-else in Go.",
      answer: "If-else statements allow conditional execution of code blocks.",
      Sample: "if x > 0 { ... } else { ... }",
      code: `if x > 0 {\n  fmt.Println("Positive")\n} else {\n  fmt.Println("Non-positive")\n}`,
    },
    {
      id: 4,
      Title: "4. How to use a for loop in Go?",
      answer:
        "Go's `for` loop can iterate over sequences or run with conditions.",
      Sample: "for i := 0; i < 10; i++",
      code: `for i := 0; i < 10; i++ {\n  fmt.Println(i)\n}`,
    },
    {
      id: 5,
      Title: "5. What is a slice?",
      answer:
        "A slice is a dynamically-sized, flexible view into the elements of an array.",
      Sample: "mySlice := []int{1, 2, 3}",
      code: `mySlice := []int{1, 2, 3}`,
    },
    {
      id: 6,
      Title: "6. What is a map in Go?",
      answer: "A map is a collection of key-value pairs in Go.",
      Sample: "map[string]int",
      code: `myMap := map[string]int{"a": 1, "b": 2}`,
    },
    {
      id: 7,
      Title: "7. How do you define a function?",
      answer: "Functions in Go are defined with `func` keyword.",
      Sample: "func add(a int, b int) int",
      code: `func add(a int, b int) int {\n  return a + b\n}`,
    },
    {
      id: 8,
      Title: "8. What is a pointer?",
      answer: "A pointer holds the memory address of a variable.",
      Sample: "var ptr *int",
      code: `var ptr *int\nptr = &x`,
    },
    {
      id: 9,
      Title: "9. How to handle errors in Go?",
      answer:
        "Go uses error handling by returning an `error` type from functions.",
      Sample: "func myFunc() (int, error)",
      code: `if err != nil {\n  fmt.Println(err)\n}`,
    },
    {
      id: 10,
      Title: "10. What are Goroutines?",
      answer: "Goroutines are lightweight threads managed by the Go runtime.",
      Sample: "go myFunction()",
      code: `go myFunction()`,
    },
    {
      id: 11,
      Title: "11. What is a struct?",
      answer: "Structs are collections of fields to create complex data types.",
      Sample: "type Person struct { name string; age int }",
      code: `type Person struct {\n  name string\n  age int\n}`,
    },
    {
      id: 12,
      Title: "12. How to implement interfaces?",
      answer: "Interfaces define method signatures that a type must implement.",
      Sample: "type Animal interface { Speak() }",
      code: `type Animal interface {\n  Speak() string\n}`,
    },
    {
      id: 13,
      Title: "13. Explain defer in Go.",
      answer:
        "`defer` delays the execution of a function until the surrounding function returns.",
      Sample: "defer fmt.Println('End')",
      code: `defer fmt.Println("End")`,
    },
    {
      id: 14,
      Title: "14. What are channels in Go?",
      answer: "Channels allow Goroutines to communicate with each other.",
      Sample: "ch := make(chan int)",
      code: `ch := make(chan int)`,
    },
    {
      id: 15,
      Title: "15. Explain select statement.",
      answer: "`select` lets a Goroutine wait on multiple channels.",
      Sample: "select { case x := <-ch1: ... }",
      code: `select {\ncase x := <-ch1:\n  fmt.Println(x)\ncase y := <-ch2:\n  fmt.Println(y)\n}`,
    },
    {
      id: 16,
      Title: "16. How to define constants?",
      answer: "Constants are defined using the `const` keyword.",
      Sample: "const Pi = 3.14",
      code: `const Pi = 3.14`,
    },
    {
      id: 17,
      Title: "17. Explain Go's memory management.",
      answer: "Go has garbage collection to automatically manage memory.",
      Sample: "",
      code: ``,
    },
    {
      id: 18,
      Title: "18. What is the `init` function?",
      answer: "`init` runs before the main function, initializing packages.",
      Sample: "func init() {}",
      code: `func init() {\n  fmt.Println("Initialization")\n}`,
    },
    {
      id: 19,
      Title: "19. How to work with JSON in Go?",
      answer: "Use `encoding/json` package to marshal and unmarshal JSON.",
      Sample: "json.Marshal(obj)",
      code: `data, _ := json.Marshal(obj)`,
    },
    {
      id: 20,
      Title: "20. Explain embedding in Go.",
      answer:
        "Embedding lets one struct include another, adding its fields and methods.",
      Sample: "type Car struct { Vehicle }",
      code: `type Car struct {\n  Vehicle\n}`,
    },
    {
      id: 21,
      Title: "21. What is method receiver?",
      answer: "Method receivers bind functions to structs in Go.",
      Sample: "func (p *Person) Speak()",
      code: `func (p *Person) Speak() {\n  fmt.Println("Hello")\n}`,
    },
    {
      id: 22,
      Title: "22. Explain nil slices vs empty slices.",
      answer:
        "Nil slices have zero length and capacity, while empty slices have zero length but allocated space.",
      Sample: "var s []int",
      code: `s := []int{}`,
    },
    {
      id: 23,
      Title: "23. What are type assertions?",
      answer: "Type assertions provide access to an interface's concrete type.",
      Sample: "value, ok := i.(string)",
      code: `value, ok := i.(string)`,
    },
    {
      id: 24,
      Title: "24. Explain concurrency vs parallelism in Go.",
      answer:
        "Concurrency handles multiple tasks at once, while parallelism runs multiple tasks simultaneously on separate cores.",
      Sample: "",
      code: ``,
    },
    {
      id: 25,
      Title: "25. How to handle time in Go?",
      answer: "The `time` package provides tools to manage date and time.",
      Sample: "time.Now()",
      code: `now := time.Now()`,
    },
    {
      id: 26,
      Title: "26. Explain Go's benchmarking.",
      answer: "Go provides `testing` package for benchmarking code.",
      Sample: "func BenchmarkMyFunc(b *testing.B)",
      code: `func BenchmarkMyFunc(b *testing.B) {\n  for i := 0; i < b.N; i++ {\n    myFunc()\n  }\n}`,
    },
    {
      id: 27,
      Title: "27. What is reflection?",
      answer: "Reflection allows inspecting types at runtime.",
      Sample: "reflect.TypeOf",
      code: `t := reflect.TypeOf(obj)`,
    },
    {
      id: 28,
      Title: "28. Explain panic and recover.",
      answer:
        "`panic` stops the flow, while `recover` handles panics gracefully.",
      Sample: "defer recover()",
      code: `defer func() {\n  if r := recover(); r != nil {\n    fmt.Println("Recovered")\n  }\n}()`,
    },
    {
      id: 29,
      Title: "29. What is iota in Go?",
      answer:
        "`iota` is a counter that increments automatically in const groups.",
      Sample: "const ( a = iota )",
      code: `const (\n  a = iota\n  b\n  c\n)`,
    },
    {
      id: 30,
      Title: "30. How to use flags?",
      answer: "Use `flag` package to parse command-line arguments.",
      Sample: "flag.String()",
      code: `name := flag.String("name", "default", "name description")`,
    },
    {
      id: 31,
      Title: "31. What are anonymous functions?",
      answer: "Anonymous functions are functions without names.",
      Sample: "func() { ... }",
      code: `func() {\n  fmt.Println("Hello")\n}()`,
    },
    {
      id: 32,
      Title: "32. Explain Go's cross-compilation.",
      answer:
        "Go enables compiling code to run on different architectures with `GOOS` and `GOARCH`.",
      Sample: "GOOS=linux GOARCH=amd64",
      code: ``,
    },
    {
      id: 33,
      Title: "33. How to handle HTTP requests?",
      answer:
        "Use `net/http` package to create servers and handle HTTP requests.",
      Sample: "http.HandleFunc",
      code: `http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {\n  fmt.Fprintf(w, "Hello, World!")\n})`,
    },
    {
      id: 34,
      Title: "34. Explain custom error types.",
      answer: "Custom error types add specific information to errors.",
      Sample: "type MyError struct {}",
      code: `type MyError struct {\n  Msg string\n}`,
    },
    {
      id: 35,
      Title: "35. How does Go manage packages?",
      answer: "Go uses `go mod` to manage packages and dependencies.",
      Sample: "go mod init",
      code: `go mod init example`,
    },
    {
      id: 36,
      Title: "36. What are closures?",
      answer:
        "Closures are functions that reference variables outside their scope.",
      Sample: "func counter() func() int",
      code: `func counter() func() int {\n  x := 0\n  return func() int {\n    x++\n    return x\n  }\n}`,
    },
    {
      id: 37,
      Title: "37. Explain type embedding.",
      answer:
        "Type embedding allows one type to include another to reuse methods.",
      Sample: "type Car struct { Vehicle }",
      code: `type Car struct {\n  Vehicle\n}`,
    },
    {
      id: 38,
      Title: "38. How to do file handling?",
      answer:
        "Use `os` and `io/ioutil` for file operations like reading and writing.",
      Sample: "ioutil.ReadFile",
      code: `data, err := ioutil.ReadFile("file.txt")`,
    },
    {
      id: 39,
      Title: "39. What is unit testing in Go?",
      answer: "Unit tests verify isolated parts of the application.",
      Sample: "func TestMyFunc(t *testing.T)",
      code: `func TestMyFunc(t *testing.T) {\n  result := myFunc()\n  if result != expected {\n    t.Errorf("Expected %v, got %v", expected, result)\n  }\n}`,
    },
    {
      id: 40,
      Title: "40. How to build REST APIs?",
      answer:
        "Using `net/http` for handlers and routing libraries to create REST APIs.",
      Sample: "",
      code: `func handler(w http.ResponseWriter, r *http.Request) {\n  fmt.Fprintf(w, "Hello, API!")\n}`,
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
            Go Programming Guide
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

export default Go;

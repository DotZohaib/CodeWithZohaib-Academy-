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

const Ruby: React.FC = () => {
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
      Title: "1. What is Ruby?",
      answer: "Ruby is an open-source, dynamic programming language.",
      Sample: "example: puts 'Hello, Ruby!'",
      code: `puts "Hello, Ruby!"`,
    },

    {
      id: 2,
      Title: "2. What is a variable in Ruby?",
      answer: "A variable is a storage location to hold data.",
      Sample: "name = 'Ruby'",
      code: `name = "Ruby"`,
    },

    {
      id: 3,
      Title: "3. Explain if-else statement.",
      answer: "Used for conditional branching.",
      Sample: "if condition then code",
      code: `if x > 10\n  puts "Greater"\nelse\n  puts "Smaller"\nend`,
    },

    {
      id: 4,
      Title: "4. What is a loop?",
      answer: "A way to repeat code multiple times.",
      Sample: "while, for loops",
      code: `for i in 1..5\n  puts i\nend`,
    },

    {
      id: 5,
      Title: "5. What is an array?",
      answer: "An ordered collection of elements.",
      Sample: "arr = [1, 2, 3]",
      code: `arr = [1, 2, 3]`,
    },

    {
      id: 6,
      Title: "6. What is a hash?",
      answer: "A data structure to store key-value pairs.",
      Sample: `hash = { name: "Alice", age: 30 }`,
      code: `hash = { name: "Alice", age: 30 }`,
    },

    {
      id: 7,
      Title: "7. Explain the for loop syntax.",
      answer: "Iterates over a range or collection.",
      Sample: `for i in 1..5`,
      code: `for i in 1..5\n  puts i\nend`,
    },

    {
      id: 8,
      Title: "8. How to define a function in Ruby?",
      answer: "Use def keyword followed by function name.",
      Sample: `def greet(name)`,
      code: `def greet(name)\n  puts "Hello, \#{name}!"\nend`,
    },

    {
      id: 9,
      Title: "9. Explain the while loop.",
      answer: "Repeats until condition is false.",
      Sample: `while i < 5`,
      code: `i = 0\nwhile i < 5\n  puts i\n  i += 1\nend`,
    },

    {
      id: 10,
      Title: "10. What is a class in Ruby?",
      answer: "A blueprint to create objects.",
      Sample: "class Person",
      code: `class Person\n  def initialize(name)\n    @name = name\n  end\nend`,
    },

    {
      id: 11,
      Title: "11. Explain inheritance in Ruby.",
      answer: "A class can inherit methods from another class.",
      Sample: `class Dog < Animal`,
      code: `class Dog < Animal\n  def bark\n    puts "Woof!"\n  end\nend`,
    },

    {
      id: 12,
      Title: "12. What is a module?",
      answer: "A way to group related methods.",
      Sample: "module Math",
      code: `module Greetings\n  def hello\n    puts "Hello!"\n  end\nend`,
    },

    {
      id: 13,
      Title: "13. Explain method overriding.",
      answer: "A subclass method replaces a superclass method.",
      Sample: `class Dog < Animal`,
      code: `class Dog < Animal\n  def speak\n    puts "Woof!"\n  end\nend`,
    },

    {
      id: 14,
      Title: "14. What are blocks in Ruby?",
      answer: "A block is a group of code in `{}` or `do..end`.",
      Sample: `array.each { |item| puts item }`,
      code: `array.each { |item| puts item }`,
    },

    {
      id: 15,
      Title: "15. What is a Proc?",
      answer: "An object that holds a block of code.",
      Sample: `my_proc = Proc.new { puts 'Hello' }`,
      code: `my_proc = Proc.new { puts 'Hello' }`,
    },

    {
      id: 16,
      Title: "16. Explain lambdas.",
      answer: "A type of Proc with strict argument checking.",
      Sample: `my_lambda = lambda { puts 'Hello' }`,
      code: `my_lambda = lambda { puts 'Hello' }`,
    },

    {
      id: 17,
      Title: "17. What is self in Ruby?",
      answer: "Refers to the current object context.",
      Sample: `class Example; self`,
      code: `class Person\n  def initialize(name)\n    @name = name\n  end\nend`,
    },

    {
      id: 18,
      Title: "18. What are instance variables?",
      answer: "Variables belonging to an instance of a class.",
      Sample: "@name = 'Alice'",
      code: `@name = "Alice"`,
    },

    {
      id: 19,
      Title: "19. What is a singleton method?",
      answer: "A method defined only on a single instance.",
      Sample: `def object.method`,
      code: `def obj.speak\n  puts "Hello"\nend`,
    },

    {
      id: 20,
      Title: "20. Explain string interpolation.",
      answer: "Embedding variables in a string.",
      Sample: `"Hello, #{name}"`,
      code: `name = "Ruby"\nputs "Hello, \#{name}!"`,
    },

    {
      id: 21,
      Title: "21. Explain encapsulation.",
      answer: "Bundling data with methods in a class.",
      Sample: `class Car`,
      code: `class Car\n  def initialize(make)\n    @make = make\n  end\nend`,
    },

    {
      id: 22,
      Title: "22. What is a ternary operator?",
      answer: "A compact form of if-else.",
      Sample: `condition ? true : false`,
      code: `x > 10 ? "Greater" : "Smaller"`,
    },

    {
      id: 23,
      Title: "23. What is an enumerator?",
      answer: "An object that allows iteration.",
      Sample: `array.each`,
      code: `arr = [1, 2, 3]\narr.each { |num| puts num }`,
    },

    {
      id: 24,
      Title: "24. Explain symbols in Ruby.",
      answer: "Immutable identifiers used as memory-efficient strings.",
      Sample: ":name",
      code: `:name`,
    },

    {
      id: 25,
      Title: "25. What is a range?",
      answer: "A sequence of values.",
      Sample: "1..5 or 1...5",
      code: `(1..5).to_a`,
    },

    {
      id: 26,
      Title: "26. Explain attr_accessor.",
      answer: "Creates getter and setter methods.",
      Sample: "attr_accessor :name",
      code: `class Person\n  attr_accessor :name\nend`,
    },

    {
      id: 27,
      Title: "27. What is exception handling?",
      answer: "Handling errors in a program.",
      Sample: "begin...rescue",
      code: `begin\n  # code\nrescue\n  # handle error\nend`,
    },

    {
      id: 28,
      Title: "28. Explain yield keyword.",
      answer: "Used to call a block in a method.",
      Sample: "def example; yield; end",
      code: `def greet\n  yield\nend\ngreet { puts "Hello" }`,
    },

    {
      id: 29,
      Title: "29. What is monkey patching?",
      answer: "Adding methods to existing classes.",
      Sample: `class String; def shout; upcase; end`,
      code: `class String\n  def shout\n    upcase\n  end\nend`,
    },

    {
      id: 30,
      Title: "30. Explain duck typing.",
      answer: "An object’s ability to behave like others based on methods.",
      Sample: "object quacks like a duck",
      code: `if obj.respond_to?(:quack)\n  obj.quack\nend`,
    },
    {
      id: 31,
      Title: "31. What is metaprogramming?",
      answer:
        "Metaprogramming is the ability to write code that can create or modify other code during runtime.",
      Sample: "define_method dynamically creates a method.",
      code: `class Person\n  define_method(:greet) { "Hello!" }\nend`,
    },

    {
      id: 32,
      Title: "32. What are Ruby Gems?",
      answer:
        "Gems are libraries or packages for Ruby that add additional functionality.",
      Sample: "gem install rails",
      code: `gem install rails`,
    },

    {
      id: 33,
      Title: "33. Explain mixins and how they work in Ruby.",
      answer: "Mixins allow sharing code between classes using modules.",
      Sample: "module Flyable; class Bird; include Flyable",
      code: `module Flyable\n  def fly\n    "I can fly!"\n  end\nend\nclass Bird\n  include Flyable\nend`,
    },

    {
      id: 34,
      Title: "34. What are Ruby blocks, and how do they work?",
      answer:
        "Blocks are anonymous pieces of code passed to methods. They can be defined using `{}` or `do..end`.",
      Sample: "[1, 2, 3].each { |n| puts n }",
      code: `[1, 2, 3].each { |n| puts n }`,
    },

    {
      id: 35,
      Title: "35. Explain the concept of aliasing methods in Ruby.",
      answer: "Aliasing allows creating alternative names for methods.",
      Sample: "alias old_method new_method",
      code: `class Example\n  def original_method\n    "Hello"\n  end\n  alias new_method original_method\nend`,
    },

    {
      id: 36,
      Title: "36. What is a singleton class?",
      answer:
        "A singleton class is a class with only one instance, often used to define class-level methods.",
      Sample: "class << object; def method",
      code: `class << self\n  def class_method\n    "I am a class method"\n  end\nend`,
    },

    {
      id: 37,
      Title: "37. Explain method_missing and its purpose.",
      answer:
        "`method_missing` is a callback method called when an undefined method is invoked.",
      Sample: "def method_missing(name, *args)",
      code: `class DynamicMethods\n  def method_missing(name, *args)\n    puts "Method \#{name} not found."\n  end\nend`,
    },

    {
      id: 38,
      Title: "38. What is a constant in Ruby?",
      answer:
        "A constant is a variable with a value that should not be changed.",
      Sample: "PI = 3.14",
      code: `PI = 3.14159`,
    },

    {
      id: 39,
      Title:
        "39. Explain the difference between public, private, and protected methods.",
      answer:
        "Access control keywords in Ruby. Public methods can be called from anywhere, private methods only within the class, and protected methods within the class and subclasses.",
      Sample: "class Example; private :private_method",
      code: `class Person\n  private\n  def secret_method\n    "Secret"\n  end\nend`,
    },

    {
      id: 40,
      Title: "40. What is introspection in Ruby?",
      answer:
        "Introspection allows inspecting objects and their properties at runtime.",
      Sample: "object.class or object.methods",
      code: `puts "Class: \#{object.class}"\nputs "Methods: \#{object.methods}"`,
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
            Ruby Programming Guide
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

export default Ruby;

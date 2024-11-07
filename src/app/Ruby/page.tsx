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

const Ruby: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);


  const array: Question[] = [
    { id: 1, Title: "1. What is Ruby?", answer: "Ruby is an open-source, dynamic programming language.", Sample: "example: puts 'Hello, Ruby!'", code: `puts "Hello, Ruby!"` },
  
    { id: 2, Title: "2. What is a variable in Ruby?", answer: "A variable is a storage location to hold data.", Sample: "name = 'Ruby'", code: `name = "Ruby"` },
  
    { id: 3, Title: "3. Explain if-else statement.", answer: "Used for conditional branching.", Sample: "if condition then code", code: `if x > 10\n  puts "Greater"\nelse\n  puts "Smaller"\nend` },
  
    { id: 4, Title: "4. What is a loop?", answer: "A way to repeat code multiple times.", Sample: "while, for loops", code: `for i in 1..5\n  puts i\nend` },
  
    { id: 5, Title: "5. What is an array?", answer: "An ordered collection of elements.", Sample: "arr = [1, 2, 3]", code: `arr = [1, 2, 3]` },
  
    { id: 6, Title: "6. What is a hash?", answer: "A data structure to store key-value pairs.", Sample: `hash = { name: "Alice", age: 30 }`, code: `hash = { name: "Alice", age: 30 }` },
  
    { id: 7, Title: "7. Explain the for loop syntax.", answer: "Iterates over a range or collection.", Sample: `for i in 1..5`, code: `for i in 1..5\n  puts i\nend` },
  
    { id: 8, Title: "8. How to define a function in Ruby?", answer: "Use def keyword followed by function name.", Sample: `def greet(name)`, code: `def greet(name)\n  puts "Hello, \#{name}!"\nend` },
  
    { id: 9, Title: "9. Explain the while loop.", answer: "Repeats until condition is false.", Sample: `while i < 5`, code: `i = 0\nwhile i < 5\n  puts i\n  i += 1\nend` },
  
    { id: 10, Title: "10. What is a class in Ruby?", answer: "A blueprint to create objects.", Sample: "class Person", code: `class Person\n  def initialize(name)\n    @name = name\n  end\nend` },
  
    { id: 11, Title: "11. Explain inheritance in Ruby.", answer: "A class can inherit methods from another class.", Sample: `class Dog < Animal`, code: `class Dog < Animal\n  def bark\n    puts "Woof!"\n  end\nend` },
  
    { id: 12, Title: "12. What is a module?", answer: "A way to group related methods.", Sample: "module Math", code: `module Greetings\n  def hello\n    puts "Hello!"\n  end\nend` },
  
    { id: 13, Title: "13. Explain method overriding.", answer: "A subclass method replaces a superclass method.", Sample: `class Dog < Animal`, code: `class Dog < Animal\n  def speak\n    puts "Woof!"\n  end\nend` },
  
    { id: 14, Title: "14. What are blocks in Ruby?", answer: "A block is a group of code in `{}` or `do..end`.", Sample: `array.each { |item| puts item }`, code: `array.each { |item| puts item }` },
  
    { id: 15, Title: "15. What is a Proc?", answer: "An object that holds a block of code.", Sample: `my_proc = Proc.new { puts 'Hello' }`, code: `my_proc = Proc.new { puts 'Hello' }` },
  
    { id: 16, Title: "16. Explain lambdas.", answer: "A type of Proc with strict argument checking.", Sample: `my_lambda = lambda { puts 'Hello' }`, code: `my_lambda = lambda { puts 'Hello' }` },
  
    { id: 17, Title: "17. What is self in Ruby?", answer: "Refers to the current object context.", Sample: `class Example; self`, code: `class Person\n  def initialize(name)\n    @name = name\n  end\nend` },
  
    { id: 18, Title: "18. What are instance variables?", answer: "Variables belonging to an instance of a class.", Sample: "@name = 'Alice'", code: `@name = "Alice"` },
  
    { id: 19, Title: "19. What is a singleton method?", answer: "A method defined only on a single instance.", Sample: `def object.method`, code: `def obj.speak\n  puts "Hello"\nend` },
  
    { id: 20, Title: "20. Explain string interpolation.", answer: "Embedding variables in a string.", Sample: `"Hello, #{name}"`, code: `name = "Ruby"\nputs "Hello, \#{name}!"` },
  
    { id: 21, Title: "21. Explain encapsulation.", answer: "Bundling data with methods in a class.", Sample: `class Car`, code: `class Car\n  def initialize(make)\n    @make = make\n  end\nend` },
  
    { id: 22, Title: "22. What is a ternary operator?", answer: "A compact form of if-else.", Sample: `condition ? true : false`, code: `x > 10 ? "Greater" : "Smaller"` },
  
    { id: 23, Title: "23. What is an enumerator?", answer: "An object that allows iteration.", Sample: `array.each`, code: `arr = [1, 2, 3]\narr.each { |num| puts num }` },
  
    { id: 24, Title: "24. Explain symbols in Ruby.", answer: "Immutable identifiers used as memory-efficient strings.", Sample: ":name", code: `:name` },
  
    { id: 25, Title: "25. What is a range?", answer: "A sequence of values.", Sample: "1..5 or 1...5", code: `(1..5).to_a` },
  
    { id: 26, Title: "26. Explain attr_accessor.", answer: "Creates getter and setter methods.", Sample: "attr_accessor :name", code: `class Person\n  attr_accessor :name\nend` },
  
    { id: 27, Title: "27. What is exception handling?", answer: "Handling errors in a program.", Sample: "begin...rescue", code: `begin\n  # code\nrescue\n  # handle error\nend` },
  
    { id: 28, Title: "28. Explain yield keyword.", answer: "Used to call a block in a method.", Sample: "def example; yield; end", code: `def greet\n  yield\nend\ngreet { puts "Hello" }` },
  
    { id: 29, Title: "29. What is monkey patching?", answer: "Adding methods to existing classes.", Sample: `class String; def shout; upcase; end`, code: `class String\n  def shout\n    upcase\n  end\nend` },
  
    { id: 30, Title: "30. Explain duck typing.", answer: "An object’s ability to behave like others based on methods.", Sample: "object quacks like a duck", code: `if obj.respond_to?(:quack)\n  obj.quack\nend` },
    { id: 31, Title: "31. What is metaprogramming?", answer: "Metaprogramming is the ability to write code that can create or modify other code during runtime.", Sample: "define_method dynamically creates a method.", code: `class Person\n  define_method(:greet) { "Hello!" }\nend` },

    { id: 32, Title: "32. What are Ruby Gems?", answer: "Gems are libraries or packages for Ruby that add additional functionality.", Sample: "gem install rails", code: `gem install rails` },
  
    { id: 33, Title: "33. Explain mixins and how they work in Ruby.", answer: "Mixins allow sharing code between classes using modules.", Sample: "module Flyable; class Bird; include Flyable", code: `module Flyable\n  def fly\n    "I can fly!"\n  end\nend\nclass Bird\n  include Flyable\nend` },
  
    { id: 34, Title: "34. What are Ruby blocks, and how do they work?", answer: "Blocks are anonymous pieces of code passed to methods. They can be defined using `{}` or `do..end`.", Sample: "[1, 2, 3].each { |n| puts n }", code: `[1, 2, 3].each { |n| puts n }` },
  
    { id: 35, Title: "35. Explain the concept of aliasing methods in Ruby.", answer: "Aliasing allows creating alternative names for methods.", Sample: "alias old_method new_method", code: `class Example\n  def original_method\n    "Hello"\n  end\n  alias new_method original_method\nend` },
  
    { id: 36, Title: "36. What is a singleton class?", answer: "A singleton class is a class with only one instance, often used to define class-level methods.", Sample: "class << object; def method", code: `class << self\n  def class_method\n    "I am a class method"\n  end\nend` },
  
    { id: 37, Title: "37. Explain method_missing and its purpose.", answer: "`method_missing` is a callback method called when an undefined method is invoked.", Sample: "def method_missing(name, *args)", code: `class DynamicMethods\n  def method_missing(name, *args)\n    puts "Method \#{name} not found."\n  end\nend` },
  
    { id: 38, Title: "38. What is a constant in Ruby?", answer: "A constant is a variable with a value that should not be changed.", Sample: "PI = 3.14", code: `PI = 3.14159` },
  
    { id: 39, Title: "39. Explain the difference between public, private, and protected methods.", answer: "Access control keywords in Ruby. Public methods can be called from anywhere, private methods only within the class, and protected methods within the class and subclasses.", Sample: "class Example; private :private_method", code: `class Person\n  private\n  def secret_method\n    "Secret"\n  end\nend` },
  
    { id: 40, Title: "40. What is introspection in Ruby?", answer: "Introspection allows inspecting objects and their properties at runtime.", Sample: "object.class or object.methods", code: `puts "Class: \#{object.class}"\nputs "Methods: \#{object.methods}"` },
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
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Ruby Basics and Concepts</h1>

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

export default Ruby;

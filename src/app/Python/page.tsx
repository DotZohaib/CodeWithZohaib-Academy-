// pages/index.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"; // Optional: Add a Prism theme


const Python: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  interface Question {
    id: number;
    Title: string;
    answer: string;
    Sample: string;
    code: string;
  }
  
  const array: Question[] = [
    {
      id: 1,
      Title: "1. What is Python?",
      answer: "Python is a high-level, interpreted programming language known for its readability and simplicity.",
      Sample: "Commonly used for web development, data analysis, AI, and more.",
      code: `print("Hello, World!")`
    },
    {
      id: 2,
      Title: "2. What are lists in Python?",
      answer: "Lists are mutable sequences that can store a collection of items, including different data types.",
      Sample: "Useful for storing multiple items in a single variable.",
      code: `my_list = [1, 2, 3, "hello"]`
    },
    {
      id: 3,
      Title: "3. What is a dictionary in Python?",
      answer: "A dictionary is an unordered collection of key-value pairs, where each key is unique.",
      Sample: "Useful for storing data with a key reference.",
      code: `my_dict = {'name': 'Alice', 'age': 30}`
    },
    {
      id: 4,
      Title: "4. What is a function?",
      answer: "A function is a block of reusable code that performs a specific task.",
      Sample: "Helps in organizing code and promoting reusability.",
      code: `def my_function():\n    return "Hello"`
    },
    {
      id: 5,
      Title: "5. How do you handle exceptions?",
      answer: "You can handle exceptions using try-except blocks to catch and manage errors.",
      Sample: "Useful for preventing crashes in your code.",
      code: `try:\n    1 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")`
    },
    {
      id: 6,
      Title: "6. What are modules?",
      answer: "Modules are files containing Python code that can define functions, classes, and variables, allowing for code organization and reuse.",
      Sample: "You can import modules to use their functionality.",
      code: `import math\nresult = math.sqrt(16)`
    },
    {
      id: 7,
      Title: "7. What is a class?",
      answer: "A class is a blueprint for creating objects that encapsulate data and functions together.",
      Sample: "Essential for object-oriented programming.",
      code: `class MyClass:\n    def my_method(self):\n        return "Hello"`
    },
    {
      id: 8,
      Title: "8. What is inheritance?",
      answer: "Inheritance is a mechanism where a new class derives from an existing class, inheriting its attributes and methods.",
      Sample: "Promotes code reusability.",
      code: `class Parent:\n    pass\nclass Child(Parent):\n    pass`
    },
    {
      id: 9,
      Title: "9. What is polymorphism?",
      answer: "Polymorphism allows methods to do different things based on the object it is acting upon, often using method overriding.",
      Sample: "Commonly used in object-oriented programming.",
      code: `class Animal:\n    def sound(self):\n        pass\nclass Dog(Animal):\n    def sound(self):\n        return "Bark"`
    },
    {
      id: 10,
      Title: "10. How do you read a file?",
      answer: "You can read a file using the `open()` function in combination with the `read()` method.",
      Sample: "Useful for processing data from files.",
      code: `with open('file.txt', 'r') as f:\n    content = f.read()`
    },
    {
      id: 11,
      Title: "11. How do you write to a file?",
      answer: "You can write to a file using the `open()` function in write mode.",
      Sample: "Useful for saving data to files.",
      code: `with open('file.txt', 'w') as f:\n    f.write('Hello, World!')`
    },
    {
      id: 12,
      Title: "12. What is a lambda function?",
      answer: "A lambda function is a small anonymous function defined with the `lambda` keyword.",
      Sample: "Useful for creating small, throwaway functions.",
      code: `square = lambda x: x ** 2\nresult = square(5)`
    },
    {
      id: 13,
      Title: "13. What are list comprehensions?",
      answer: "List comprehensions provide a concise way to create lists using a single line of code.",
      Sample: "Useful for generating lists quickly.",
      code: `squares = [x ** 2 for x in range(10)]`
    },
    {
      id: 14,
      Title: "14. How do you create a set?",
      answer: "You can create a set using curly braces `{}` or the `set()` function.",
      Sample: "Useful for storing unique items.",
      code: `my_set = {1, 2, 3}`
    },
    {
      id: 15,
      Title: "15. What is the purpose of the `import` statement?",
      answer: "The `import` statement is used to include modules or packages in your Python code.",
      Sample: "Essential for using external libraries.",
      code: `import os`
    },
    {
      id: 16,
      Title: "16. How do you find the length of a list?",
      answer: "You can find the length of a list using the `len()` function.",
      Sample: "Useful for determining the number of items.",
      code: `length = len(my_list)`
    },
    {
      id: 17,
      Title: "17. What is a tuple?",
      answer: "A tuple is an immutable sequence of values that can store multiple items.",
      Sample: "Useful for storing fixed collections of items.",
      code: `my_tuple = (1, 2, 3)`
    },
    {
      id: 18,
      Title: "18. How do you convert a list to a tuple?",
      answer: "You can convert a list to a tuple using the `tuple()` function.",
      Sample: "Useful for ensuring immutability.",
      code: `my_tuple = tuple(my_list)`
    },
    {
      id: 19,
      Title: "19. What is the purpose of the `pass` statement?",
      answer: "The `pass` statement is a null operation; it is a placeholder in blocks of code.",
      Sample: "Useful for defining empty functions or classes.",
      code: `def my_function():\n    pass`
    },
    {
      id: 20,
      Title: "20. How do you create a dictionary from two lists?",
      answer: "You can create a dictionary from two lists using the `zip()` function and a dictionary comprehension.",
      Sample: "Useful for combining related data.",
      code: `keys = ['name', 'age']\nvalues = ['Alice', 30]\nmy_dict = {k: v for k, v in zip(keys, values)}`
    },
    {
      id: 21,
      Title: "21. What is a decorator?",
      answer: "A decorator is a function that wraps another function, modifying its behavior without changing its source code.",
      Sample: "Useful for adding functionality to existing functions.",
      code: `def my_decorator(func):\n    def wrapper():\n        print("Something is happening before the function is called.")\n        func()\n        print("Something is happening after the function is called.")\n    return wrapper`
    },
    {
      id: 22,
      Title: "22. What is a module?",
      answer: "A module is a file containing Python definitions and statements, allowing you to organize your code into reusable components.",
      Sample: "Commonly used to divide large applications.",
      code: `# my_module.py\ndef my_function():\n    return "Hello"`
    },
    {
      id: 23,
      Title: "23. How do you create a class in Python?",
      answer: "You can create a class using the `class` keyword, followed by the class name.",
      Sample: "Essential for object-oriented programming.",
      code: `class MyClass:\n    def __init__(self, value):\n        self.value = value`
    },
    {
      id: 24,
      Title: "24. What is the `self` keyword?",
      answer: "`self` refers to the instance of the class in methods, allowing access to attributes and methods.",
      Sample: "Used in class methods.",
      code: `class MyClass:\n    def my_method(self):\n        return self.value`
    },
    {
      id: 25,
      Title: "25. What is a regular expression?",
      answer: "A regular expression is a sequence of characters that defines a search pattern, primarily used for string matching.",
      Sample: "Useful for validating input formats.",
      code: `import re\npattern = r'\d+'\nresult = re.findall(pattern, 'There are 123 apples.')`
    },
    {
      id: 26,
      Title: "26. What is the `with` statement?",
      answer: "The `with` statement is used for resource management, simplifying the use of try-finally blocks.",
      Sample: "Useful for managing file I/O.",
      code: `with open('file.txt', 'r') as f:\n    content = f.read()`
    },
    {
      id: 27,
      Title: "27. How do you create a virtual environment?",
      answer: "You can create a virtual environment using the `venv` module in Python.",
      Sample: "Useful for isolating dependencies for different projects.",
      code: `python -m venv myenv`
    },
    {
      id: 28,
      Title: "28. What is a comprehension?",
      answer: "A comprehension is a compact way to process elements and produce a new list or dictionary from an iterable.",
      Sample: "Useful for concise code.",
      code: `squares = [x ** 2 for x in range(10)]`
    },
    {
      id: 29,
      Title: "29. What is the purpose of the `return` statement?",
      answer: "The `return` statement is used to exit a function and optionally pass an expression back to the caller.",
      Sample: "Essential for function output.",
      code: `def my_function():\n    return "Hello"`
    },
    {
      id: 30,
      Title: "30. How do you create a generator?",
      answer: "You can create a generator using a function with the `yield` keyword.",
      Sample: "Useful for creating iterators.",
      code: `def my_generator():\n    yield 1\n    yield 2\n    yield 3`
    },
    {
      id: 31,
      Title: "31. What are Python decorators?",
      answer: "Decorators are functions that modify the behavior of other functions or methods.",
      Sample: "Useful for logging, enforcing access control, etc.",
      code: `def my_decorator(func):\n    def wrapper():\n        print("Before calling the function.")\n        func()\n        print("After calling the function.")\n    return wrapper`
    },
    {
      id: 32,
      Title: "32. What is the difference between `append()` and `extend()`?",
      answer: "`append()` adds a single item to the end of a list, while `extend()` adds multiple items.",
      Sample: "Useful for modifying lists.",
      code: `my_list = [1, 2]\nmy_list.append(3)\nmy_list.extend([4, 5])`
    },
    {
      id: 33,
      Title: "33. How do you sort a list?",
      answer: "You can sort a list using the `sort()` method or the `sorted()` function.",
      Sample: "Useful for ordering items.",
      code: `my_list = [3, 1, 2]\nmy_list.sort()`
    },
    {
      id: 34,
      Title: "34. What is the `__init__` method?",
      answer: "The `__init__` method is a special method used for initializing objects in a class.",
      Sample: "Essential for setting object attributes.",
      code: `class MyClass:\n    def __init__(self, value):\n        self.value = value`
    },
    {
      id: 35,
      Title: "35. What are *args and **kwargs?",
      answer: "*args allows passing a variable number of positional arguments, while **kwargs allows passing keyword arguments.",
      Sample: "Useful for flexible function definitions.",
      code: `def my_function(*args, **kwargs):\n    print(args)\n    print(kwargs)`
    },
    {
      id: 36,
      Title: "36. How do you remove duplicates from a list?",
      answer: "You can remove duplicates from a list by converting it to a set and then back to a list.",
      Sample: "Useful for ensuring unique items.",
      code: `my_list = list(set(my_list))`
    },
    {
      id: 37,
      Title: "37. What is the difference between `is` and `==`?",
      answer: "`is` checks for object identity, while `==` checks for value equality.",
      Sample: "Important for understanding comparison in Python.",
      code: `a = [1, 2]\nb = a\nc = a.copy()\nprint(a is b)  # True\nprint(a is c)  # False`
    },
    {
      id: 38,
      Title: "38. How do you check if a string contains a substring?",
      answer: "You can check if a string contains a substring using the `in` keyword.",
      Sample: "Useful for searching within strings.",
      code: `my_string = "Hello, World!"\ncontains = "Hello" in my_string`
    },
    {
      id: 39,
      Title: "39. What is the `finally` block?",
      answer: "The `finally` block is executed after the try and except blocks, regardless of whether an exception occurred.",
      Sample: "Useful for cleanup actions.",
      code: `try:\n    1 / 0\nexcept ZeroDivisionError:\n    print("Error")\nfinally:\n    print("Cleanup")`
    },
    {
      id: 40,
      Title: "40. How do you create a nested function?",
      answer: "You can create a nested function by defining a function within another function.",
      Sample: "Useful for encapsulating functionality.",
      code: `def outer_function():\n    def inner_function():\n        return "Inner"\n    return inner_function()`
    },
    {
      id: 41,
      Title: "41. What is the purpose of `__str__`?",
      answer: "The `__str__` method is used to define a human-readable string representation of an object.",
      Sample: "Useful for printing object details.",
      code: `class MyClass:\n    def __str__(self):\n        return "MyClass instance"`
    },
    {
      id: 42,
      Title: "42. How do you create a shallow copy of a list?",
      answer: "You can create a shallow copy of a list using the `copy()` method or list slicing.",
      Sample: "Useful for copying lists without affecting the original.",
      code: `shallow_copy = my_list.copy()  # or shallow_copy = my_list[:]`
    },
    {
      id: 43,
      Title: "43. What is the `map()` function?",
      answer: "The `map()` function applies a given function to all items in an iterable and returns a map object.",
      Sample: "Useful for transforming lists.",
      code: `squared = list(map(lambda x: x**2, [1, 2, 3]))`
    },
    {
      id: 44,
      Title: "44. How do you filter a list?",
      answer: "You can filter a list using the `filter()` function, which applies a function and returns a filtered iterable.",
      Sample: "Useful for selecting items based on conditions.",
      code: `even_numbers = list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4]))`
    },
    {
      id: 45,
      Title: "45. What is a context manager?",
      answer: "A context manager is a construct that allows you to allocate and release resources precisely when you want to.",
      Sample: "Commonly used with the `with` statement.",
      code: `with open('file.txt', 'r') as f:\n    data = f.read()`
    },
    {
      id: 46,
      Title: "46. What is the difference between `sort()` and `sorted()`?",
      answer: "`sort()` modifies the list in place, while `sorted()` returns a new sorted list.",
      Sample: "Useful for sorting data.",
      code: `my_list.sort()  # in place\nnew_list = sorted(my_list)  # new list`
    },
    {
      id: 47,
      Title: "47. How do you concatenate strings?",
      answer: "You can concatenate strings using the `+` operator or the `join()` method.",
      Sample: "Useful for combining strings.",
      code: `result = "Hello" + " " + "World"`  // or `result = " ".join(["Hello", "World"])`
    },
    {
      id: 48,
      Title: "48. What is an API?",
      answer: "An API (Application Programming Interface) is a set of rules that allows different software entities to communicate.",
      Sample: "Commonly used for web services.",
      code: `import requests\nresponse = requests.get('https://api.example.com')`
    },
    {
      id: 49,
      Title: "49. How do you create a custom exception?",
      answer: "You can create a custom exception by defining a new class that inherits from the built-in `Exception` class.",
      Sample: "Useful for specific error handling.",
      code: `class MyCustomError(Exception):\n    pass`
    },
    {
      id: 50,
      Title: "50. What is the purpose of `__getitem__`?",
      answer: "`__getitem__` allows you to access items in a class using the indexing syntax.",
      Sample: "Useful for creating custom container types.",
      code: `class MyList:\n    def __getitem__(self, index):\n        return self.data[index]`
    },
    {
      id: 51,
      Title: "51. What is a lambda function?",
      answer: "A lambda function is an anonymous function expressed as a single statement.",
      Sample: "Useful for short, throwaway functions.",
      code: `square = lambda x: x**2`
    },
    {
      id: 52,
      Title: "52. How do you create a class in Python?",
      answer: "You create a class using the `class` keyword, followed by the class name and a colon.",
      Sample: "Essential for object-oriented programming.",
      code: `class MyClass:\n    pass`
    },
    {
      id: 53,
      Title: "53. What are Python's built-in data types?",
      answer: "Python's built-in data types include int, float, str, list, tuple, set, dict, and bool.",
      Sample: "Important for data manipulation.",
      code: `my_list = [1, 2, 3]`
    },
    {
      id: 54,
      Title: "54. What is a module in Python?",
      answer: "A module is a file containing Python code that can define functions, classes, and variables.",
      Sample: "Useful for code organization.",
      code: `import my_module`
    },
    {
      id: 55,
      Title: "55. What is the purpose of the `pass` statement?",
      answer: "The `pass` statement is a null operation; it is syntactically required but you don't want any code to execute.",
      Sample: "Useful for creating minimal classes or functions.",
      code: `def empty_function():\n    pass`
    },
    {
      id: 56,
      Title: "56. What are list comprehensions?",
      answer: "List comprehensions provide a concise way to create lists by iterating over an iterable.",
      Sample: "Useful for generating lists.",
      code: `squares = [x**2 for x in range(10)]`
    },
    {
      id: 57,
      Title: "57. What is a set in Python?",
      answer: "A set is an unordered collection of unique elements.",
      Sample: "Useful for eliminating duplicates.",
      code: `my_set = {1, 2, 3}`
    },
    {
      id: 58,
      Title: "58. How do you handle exceptions in Python?",
      answer: "You can handle exceptions using try and except blocks.",
      Sample: "Useful for managing errors.",
      code: `try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print("Division by zero!")`
    },
    {
      id: 59,
      Title: "59. What is the `strip()` method?",
      answer: "The `strip()` method removes leading and trailing whitespace from a string.",
      Sample: "Useful for cleaning input.",
      code: `cleaned_string = my_string.strip()`
    },
    {
      id: 60,
      Title: "60. How do you open a file in Python?",
      answer: "You can open a file using the built-in `open()` function.",
      Sample: "Essential for file operations.",
      code: `with open('file.txt', 'r') as f:\n    content = f.read()`
    },
    {
      id: 61,
      Title: "61. What is the difference between a list and a tuple?",
      answer: "A list is mutable, while a tuple is immutable.",
      Sample: "Important for data structure selection.",
      code: `my_list = [1, 2, 3]\nmy_tuple = (1, 2, 3)`
    },
    {
      id: 62,
      Title: "62. How do you convert a string to an integer?",
      answer: "You can convert a string to an integer using the `int()` function.",
      Sample: "Useful for numeric operations.",
      code: `my_int = int('123')`
    },
    {
      id: 63,
      Title: "63. What is slicing in Python?",
      answer: "Slicing is a way to access a subset of a sequence by specifying a start and end index.",
      Sample: "Useful for extracting portions of data.",
      code: `my_list = [1, 2, 3, 4, 5]\nslice = my_list[1:3]  # [2, 3]`
    },
    {
      id: 64,
      Title: "64. How do you create a dictionary?",
      answer: "You can create a dictionary using curly braces or the `dict()` constructor.",
      Sample: "Useful for key-value storage.",
      code: `my_dict = {'key': 'value'}  # or my_dict = dict(key='value')`
    },
    {
      id: 65,
      Title: "65. What is a class method?",
      answer: "A class method is a method that is bound to the class and not the instance, defined with `@classmethod`.",
      Sample: "Useful for factory methods.",
      code: `class MyClass:\n    @classmethod\n    def my_class_method(cls):\n        return cls()`
    },
    {
      id: 66,
      Title: "66. What are instance methods?",
      answer: "Instance methods are functions defined inside a class that operate on instance data.",
      Sample: "Essential for class behavior.",
      code: `class MyClass:\n    def my_instance_method(self):\n        return self.data`
    },
    {
      id: 67,
      Title: "67. How do you iterate over a dictionary?",
      answer: "You can iterate over a dictionary using a for loop to access keys or items.",
      Sample: "Useful for accessing key-value pairs.",
      code: `for key, value in my_dict.items():\n    print(key, value)`
    },
    {
      id: 68,
      Title: "68. What is the purpose of the `len()` function?",
      answer: "The `len()` function returns the number of items in an object.",
      Sample: "Useful for measuring size.",
      code: `length = len(my_list)`
    },
    {
      id: 69,
      Title: "69. How do you reverse a list?",
      answer: "You can reverse a list using the `reverse()` method or slicing.",
      Sample: "Useful for changing order.",
      code: `my_list.reverse()  # in place\nreversed_list = my_list[::-1]  # new list`
    },
    {
      id: 70,
      Title: "70. What is a property in Python?",
      answer: "A property is a special kind of attribute that allows for encapsulation of instance variables.",
      Sample: "Useful for controlling access to attributes.",
      code: `class MyClass:\n    def __init__(self, value):\n        self._value = value\n    @property\n    def value(self):\n        return self._value`
    },
    {
      "id": 71,
      "Title": "71. What is the difference between `==` and `is`?",
      "answer": "`==` checks for value equality, while `is` checks for identity (i.e., whether two references point to the same object).",
      "Sample": "Important for understanding object comparison.",
      "code": `a = [1, 2, 3]\nb = a\nc = a.copy()\nprint(a == c)  # True\nprint(a is b)  # True\nprint(a is c)  # False`
    },
    {
      "id": 72,
      "Title": "72. What is a list slice?",
      "answer": "A list slice is a subset of a list obtained using the slicing syntax.",
      "Sample": "Useful for manipulating lists.",
      "code": `my_list = [1, 2, 3, 4, 5]\nslice = my_list[1:4]  # [2, 3, 4]`
    },
    {
      "id": 73,
      "Title": "73. How do you remove duplicates from a list?",
      "answer": "You can remove duplicates by converting the list to a set and back to a list.",
      "Sample": "Useful for data cleaning.",
      "code": `my_list = [1, 2, 2, 3]\nunique_list = list(set(my_list))`
    },
    {
      "id": 74,
      "Title": "74. What is the `__init__` method?",
      "answer": "The `__init__` method is a special method used to initialize a new object.",
      "Sample": "Essential for class instantiation.",
      "code": `class MyClass:\n    def __init__(self, value):\n        self.value = value`
    },
    {
      "id": 75,
      "Title": "75. What is the purpose of the `super()` function?",
      "answer": "The `super()` function returns a temporary object of the superclass, allowing access to its methods.",
      "Sample": "Useful for inheritance.",
      "code": `class Parent:\n    def __init__(self):\n        print('Parent')\nclass Child(Parent):\n    def __init__(self):\n        super().__init__()\n        print('Child')`
    },
    {
      "id": 76,
      "Title": "76. How do you create a generator in Python?",
      "answer": "You create a generator using a function with the `yield` statement.",
      "Sample": "Useful for iterating over large data sets.",
      "code": `def my_generator():\n    yield 1\n    yield 2\nfor value in my_generator():\n    print(value)`
    },
    {
      "id": 77,
      "Title": "77. What is the purpose of the `with` statement?",
      "answer": "The `with` statement simplifies exception handling by encapsulating common preparation and cleanup tasks.",
      "Sample": "Useful for managing resources like file streams.",
      "code": `with open('file.txt', 'r') as f:\n    data = f.read()`
    },
    {
      "id": 78,
      "Title": "78. What are decorators in Python?",
      "answer": "Decorators are functions that modify the behavior of another function.",
      "Sample": "Useful for adding functionality to existing code.",
      "code": `def my_decorator(func):\n    def wrapper():\n        print('Before the function')\n        func()\n        print('After the function')\n    return wrapper\n@my_decorator\ndef say_hello():\n    print('Hello!')`
    },
    {
      "id": 79,
      "Title": "79. How do you handle multiple exceptions?",
      "answer": "You can handle multiple exceptions by specifying multiple exception types in a single `except` clause.",
      "Sample": "Useful for managing various error types.",
      "code": `try:\n    x = 1 / 0\nexcept (ZeroDivisionError, ValueError) as e:\n    print(f'Error: {e}')`
    },
    {
      "id": 80,
      "Title": "80. What is a context manager?",
      "answer": "A context manager is an object that defines methods `__enter__` and `__exit__` for resource management.",
      "Sample": "Useful for managing resources like file streams.",
      "code": `class MyContext:\n    def __enter__(self):\n        print('Entering')\n    def __exit__(self, exc_type, exc_value, traceback):\n        print('Exiting')\nwith MyContext():\n    print('Inside context')`
    },
    {
      "id": 81,
      "Title": "81. What is the purpose of `*args` and `**kwargs`?",
      "answer": "`*args` allows you to pass a variable number of non-keyword arguments, while `**kwargs` allows for keyword arguments.",
      "Sample": "Useful for creating flexible functions.",
      "code": `def my_function(*args, **kwargs):\n    print(args)\n    print(kwargs)\nmy_function(1, 2, a=3, b=4)`
    },
    {
      "id": 82,
      "Title": "82. What is the difference between shallow copy and deep copy?",
      "answer": "A shallow copy creates a new object but inserts references into it to the objects found in the original. A deep copy creates a new object and recursively copies all objects found in the original.",
      "Sample": "Important for understanding object copying.",
      "code": `import copy\noriginal = [[1, 2], [3, 4]]\nshallow = copy.copy(original)\ndeep = copy.deepcopy(original)`
    },
    {
      "id": 83,
      "Title": "83. How do you create an empty set?",
      "answer": "You can create an empty set using the `set()` function.",
      "Sample": "Useful for initializing a set.",
      "code": `my_set = set()`
    },
    {
      "id": 84,
      "Title": "84. What is the purpose of the `enumerate()` function?",
      "answer": "The `enumerate()` function adds a counter to an iterable and returns it as an enumerate object.",
      "Sample": "Useful for tracking indexes in a loop.",
      "code": `for index, value in enumerate(['a', 'b', 'c']):\n    print(index, value)`
    },
    {
      "id": 85,
      "Title": "85. What is a lambda function used for?",
      "answer": "A lambda function is a small anonymous function that can have any number of arguments but only one expression.",
      "Sample": "Useful for short, throwaway functions.",
      "code": `add = lambda x, y: x + y\nprint(add(1, 2))  # Outputs 3`
    },
    {
      "id": 86,
      "Title": "86. How do you sort a list in Python?",
      "answer": "You can sort a list using the `sort()` method or the `sorted()` function.",
      "Sample": "Useful for arranging data.",
      "code": `my_list = [3, 1, 2]\nmy_list.sort()  # In-place sort\nsorted_list = sorted(my_list)  # Returns a new sorted list`
    },
    {
      "id": 87,
      "Title": "87. What is list unpacking?",
      "answer": "List unpacking allows you to assign elements of a list to variables in a single line.",
      "Sample": "Useful for variable assignments.",
      "code": `a, b, c = [1, 2, 3]`
    },
    {
      "id": 88,
      "Title": "88. How do you check if a key exists in a dictionary?",
      "answer": "You can check if a key exists using the `in` keyword.",
      "Sample": "Useful for validating dictionary keys.",
      "code": `my_dict = {'key': 'value'}\nexists = 'key' in my_dict`
    },
    {
      "id": 89,
      "Title": "89. What is the difference between `pop()` and `remove()`?",
      "answer": "`pop()` removes an item at a specified index and returns it, while `remove()` removes the first occurrence of a specified value.",
      "Sample": "Important for understanding list modifications.",
      "code": `my_list = [1, 2, 3]\nmy_list.pop(0)  # Removes and returns 1\nmy_list.remove(2)  # Removes 2`
    },
    {
      "id": 90,
      "Title": "90. What is type hinting in Python?",
      "answer": "Type hinting allows you to indicate the expected data types of function arguments and return values.",
      "Sample": "Useful for improving code readability.",
      "code": `def add(x: int, y: int) -> int:\n    return x + y`
    }
  ]
  

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
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Python Basics and Concepts</h1>

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
              <code className="language-Python">{item.code}</code>
            </pre>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Python;

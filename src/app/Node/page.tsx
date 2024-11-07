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

const Node: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const array: Question[] = [
    {
      id: 1,
      Title: "1. What is Node.js?",
      answer: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing for the execution of JavaScript server-side.",
      Sample: "It enables developers to build scalable network applications.",
      code: `console.log("Hello, Node.js!");`
    },
    {
      id: 2,
      Title: "2. What is npm?",
      answer: "npm is the package manager for JavaScript, used to install and manage libraries and dependencies for Node.js applications.",
      Sample: "You can install packages using the command: npm install <package-name>",
      code: `npm install express`
    },
    {
      id: 3,
      Title: "3. What is Express.js?",
      answer: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
      Sample: "It simplifies routing and middleware integration.",
      code: `const express = require('express');\nconst app = express();`
    },
    {
      id: 4,
      Title: "4. What is middleware in Express?",
      answer: "Middleware are functions that have access to the request and response objects, allowing for additional processing before sending a response.",
      Sample: "Used for logging, authentication, etc.",
      code: `app.use((req, res, next) => { console.log(req.url); next(); });`
    },
    {
      id: 5,
      Title: "5. How do you handle errors in Express?",
      answer: "You can handle errors by defining an error-handling middleware function.",
      Sample: "This function must have four parameters: err, req, res, next.",
      code: `app.use((err, req, res, next) => { res.status(500).send('Something broke!'); });`
    },
    {
      id: 6,
      Title: "6. What is a RESTful API?",
      answer: "A RESTful API is an architectural style that uses HTTP requests to access and use data, typically structured in JSON or XML.",
      Sample: "It follows principles like statelessness and resource-based interactions.",
      code: `app.get('/api/resource', (req, res) => { res.json({ data: 'sample' }); });`
    },
    {
      id: 7,
      Title: "7. What is CORS?",
      answer: "CORS (Cross-Origin Resource Sharing) is a security feature that restricts web pages from making requests to a different domain than the one that served the web page.",
      Sample: "Used to allow or restrict resources on a web server.",
      code: `app.use((req, res, next) => { res.header("Access-Control-Allow-Origin", "*"); next(); });`
    },
    {
      id: 8,
      Title: "8. How do you connect to a MongoDB database in Node.js?",
      answer: "You can connect to a MongoDB database using the Mongoose library or the native MongoDB driver.",
      Sample: "Mongoose provides a straightforward way to model your data.",
      code: `const mongoose = require('mongoose');\nmongoose.connect('mongodb://localhost/mydatabase');`
    },
    {
      id: 9,
      Title: "9. What is a promise in Node.js?",
      answer: "A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.",
      Sample: "Promises are used for handling asynchronous operations.",
      code: `const myPromise = new Promise((resolve, reject) => { /* ... */ });`
    },
    {
      id: 10,
      Title: "10. How do you read a file in Node.js?",
      answer: "You can read a file using the built-in 'fs' module with either the synchronous or asynchronous methods.",
      Sample: "Asynchronous methods are recommended for non-blocking I/O.",
      code: `const fs = require('fs');\nfs.readFile('file.txt', 'utf8', (err, data) => { console.log(data); });`
    },
    {
      id: 11,
      Title: "11. What is the event loop in Node.js?",
      answer: "The event loop is a core feature of Node.js that allows it to perform non-blocking I/O operations by using an event-driven architecture.",
      Sample: "It enables handling multiple connections simultaneously.",
      code: `setTimeout(() => { console.log('Hello from event loop!'); }, 0);`
    },
    {
      id: 12,
      Title: "12. What is the difference between `require` and `import`?",
      answer: "`require` is used in CommonJS modules, while `import` is used in ES6 modules for importing dependencies.",
      Sample: "ES6 imports allow for static analysis and tree-shaking.",
      code: `const express = require('express');\nimport express from 'express';`
    },
    {
      id: 13,
      Title: "13. What are callbacks?",
      answer: "Callbacks are functions passed as arguments to other functions, executed after a certain event or when a task is completed.",
      Sample: "Commonly used in asynchronous programming.",
      code: `function fetchData(callback) { /* ... */ callback(); }`
    },
    {
      id: 14,
      Title: "14. What is the purpose of the `next()` function?",
      answer: "The `next()` function in Express is used to pass control to the next middleware function in the stack.",
      Sample: "It is essential for handling multiple middleware.",
      code: `app.use((req, res, next) => { console.log('First middleware'); next(); });`
    },
    {
      id: 15,
      Title: "15. What is the difference between `var`, `let`, and `const`?",
      answer: "`var` is function-scoped, `let` and `const` are block-scoped. `const` is used for constants that cannot be reassigned.",
      Sample: "Use `let` for variables that can change, and `const` for constants.",
      code: `let a = 1;\nconst b = 2;`
    },
    {
      id: 16,
      Title: "16. How do you implement authentication in a Node.js application?",
      answer: "Authentication can be implemented using libraries like Passport.js, which supports various authentication strategies.",
      Sample: "Use sessions or JWT for managing user sessions.",
      code: `const passport = require('passport');\napp.use(passport.initialize());`
    },
    {
      id: 17,
      Title: "17. What is JWT?",
      answer: "JWT (JSON Web Token) is an open standard for securely transmitting information as a JSON object, commonly used for authentication.",
      Sample: "JWTs can be signed and verified for integrity.",
      code: `const jwt = require('jsonwebtoken');\nconst token = jwt.sign({ userId: 123 }, 'secret');`
    },
    {
      id: 18,
      Title: "18. How do you validate user input in Node.js?",
      answer: "User input can be validated using libraries like Joi or express-validator.",
      Sample: "These libraries help ensure data integrity and security.",
      code: `const { body, validationResult } = require('express-validator');`
    },
    {
      id: 19,
      Title: "19. What is socket.io?",
      answer: "Socket.io is a library for real-time web applications, allowing bi-directional communication between clients and servers.",
      Sample: "It is often used for chat applications.",
      code: `const io = require('socket.io')(server);\nio.on('connection', socket => { console.log('User connected'); });`
    },
    {
      id: 20,
      Title: "20. What is clustering in Node.js?",
      answer: "Clustering allows you to create multiple instances of your Node.js application to take advantage of multi-core systems.",
      Sample: "It improves performance by handling more requests concurrently.",
      code: `const cluster = require('cluster');\nif (cluster.isMaster) { /* ... */ }`
    },
    {
      id: 21,
      Title: "21. What are streams in Node.js?",
      answer: "Streams are objects that allow reading data from a source or writing data to a destination in a continuous manner.",
      Sample: "They are useful for handling large files and data processing.",
      code: `const fs = require('fs');\nconst readStream = fs.createReadStream('file.txt');`
    },
    {
      id: 22,
      Title: "22. How do you handle asynchronous code?",
      answer: "Asynchronous code can be handled using callbacks, promises, or async/await syntax.",
      Sample: "Async/await is preferred for its readability.",
      code: `async function fetchData() { const data = await getData(); }`
    },
    {
      id: 23,
      Title: "23. What is a template engine?",
      answer: "A template engine allows you to generate HTML dynamically using templates and data.",
      Sample: "Popular engines include EJS, Pug, and Handlebars.",
      code: `app.set('view engine', 'ejs');`
    },
    {
      id: 24,
      Title: "24. How do you implement logging in Node.js?",
      answer: "Logging can be implemented using libraries like Winston or Morgan to track requests and application errors.",
      Sample: "Logging is essential for debugging and monitoring.",
      code: `const morgan = require('morgan');\napp.use(morgan('dev'));`
    },
    {
      id: 25,
      Title: "25. What is dotenv?",
      answer: "Dotenv is a module that loads environment variables from a .env file into process.env.",
      Sample: "It is used to manage sensitive information like API keys.",
      code: `require('dotenv').config();`
    },
    {
      id: 26,
      Title: "26. How do you test a Node.js application?",
      answer: "Node.js applications can be tested using frameworks like Mocha, Chai, and Jest.",
      Sample: "Unit testing helps ensure code quality.",
      code: `const assert = require('assert');\ndescribe('Array', () => { /* ... */ });`
    },
    {
      id: 27,
      Title: "27. What is a microservice?",
      answer: "A microservice is an architectural style that structures an application as a collection of loosely coupled services, each responsible for a specific function.",
      Sample: "Microservices improve scalability and maintainability.",
      code: `// Example: separate services for user management, orders, etc.`
    },
    {
      id: 28,
      Title: "28. What is a reverse proxy?",
      answer: "A reverse proxy is a server that sits in front of web servers and forwards client requests to those servers.",
      Sample: "It provides load balancing, security, and caching.",
      code: `// Commonly used with Nginx or Apache`
    },
    {
      id: 29,
      Title: "29. How do you enable gzip compression in Express?",
      answer: "You can enable gzip compression in Express using the compression middleware.",
      Sample: "Compression reduces the size of response bodies.",
      code: `const compression = require('compression');\napp.use(compression());`
    },
    {
      id: 30,
      Title: "30. What is the purpose of `process.env`?",
      answer: "process.env is an object in Node.js that contains the environment variables for the running process.",
      Sample: "It's used to access configuration settings.",
      code: `const dbUrl = process.env.DB_URL;`
    },
    {
      id: 31,
      Title: "31. How do you create a simple web server in Node.js?",
      answer: "You can create a simple web server using the built-in 'http' module.",
      Sample: "It handles incoming requests and sends responses.",
      code: `const http = require('http');\nhttp.createServer((req, res) => { res.end('Hello, World!'); }).listen(3000);`
    },
    {
      id: 32,
      Title: "32. What is the difference between GET and POST requests?",
      answer: "GET requests retrieve data from a server, while POST requests send data to a server for processing.",
      Sample: "GET is idempotent; POST is not.",
      code: `app.get('/api/data', (req, res) => { /* ... */ });\napp.post('/api/data', (req, res) => { /* ... */ });`
    },
    {
      id: 33,
      Title: "33. How do you handle file uploads in Node.js?",
      answer: "File uploads can be handled using middleware like multer.",
      Sample: "Multer processes multipart/form-data.",
      code: `const multer = require('multer');\nconst upload = multer({ dest: 'uploads/' });`
    },
    {
      id: 34,
      Title: "34. What is a session?",
      answer: "A session is a way to store information about a user across multiple requests in web applications.",
      Sample: "Sessions help maintain user state.",
      code: `const session = require('express-session');\napp.use(session({ secret: 'mySecret' }));`
    },
    {
      id: 35,
      Title: "35. What is the purpose of `cors` middleware?",
      answer: "CORS middleware enables Cross-Origin Resource Sharing, allowing restricted resources to be requested from a different domain.",
      Sample: "It helps manage security for API requests.",
      code: `const cors = require('cors');\napp.use(cors());`
    },
    {
      id: 36,
      Title: "36. How do you schedule tasks in Node.js?",
      answer: "You can schedule tasks using libraries like node-cron for periodic execution.",
      Sample: "Useful for background tasks.",
      code: `const cron = require('node-cron');\ncron.schedule('* * * * *', () => { console.log('Task running every minute'); });`
    },
    {
      id: 37,
      Title: "37. What is a build tool?",
      answer: "A build tool automates the process of building and packaging code into a deployable format.",
      Sample: "Common tools include Webpack, Gulp, and Grunt.",
      code: `// Example: Using Webpack for module bundling`
    },
    {
      id: 38,
      Title: "38. What are environment variables?",
      answer: "Environment variables are key-value pairs that are used to configure applications without hardcoding settings.",
      Sample: "Useful for sensitive information and configuration.",
      code: `const apiKey = process.env.API_KEY;`
    },
    {
      id: 39,
      Title: "39. What is rate limiting?",
      answer: "Rate limiting is a technique to control the amount of incoming requests to a server, preventing abuse or overload.",
      Sample: "It can be implemented using middleware.",
      code: `const rateLimit = require('express-rate-limit');\nconst limiter = rateLimit({ windowMs: 1 * 60 * 1000, max: 100 });`
    },
    {
      id: 40,
      Title: "40. How do you implement security in a Node.js application?",
      answer: "You can implement security using various measures like input validation, sanitation, using HTTPS, and security headers.",
      Sample: "Libraries like helmet can help secure Express apps.",
      code: `const helmet = require('helmet');\napp.use(helmet());`
    },
    {
      id: 41,
      Title: "41. What is a firewall?",
      answer: "A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.",
      Sample: "Firewalls can be hardware-based or software-based.",
      code: `// Example: Using firewall rules to restrict access`
    },
    {
        id: 42,
        Title: "42. What is middleware in Express?",
        answer: "Middleware functions are functions that have access to the request object, response object, and the next middleware function in the application’s request-response cycle.",
        Sample: "Middleware is used for logging, authentication, etc.",
        code: `app.use((req, res, next) => { console.log('Request received'); next(); });`
      },
      {
        id: 43,
        Title: "43. How do you implement JWT authentication?",
        answer: "JWT (JSON Web Tokens) can be used for authentication by signing a token with a secret and sending it back to the client.",
        Sample: "JWTs help secure API routes.",
        code: `const jwt = require('jsonwebtoken');\nconst token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });`
      },
      {
        id: 44,
        Title: "44. What is a callback in Node.js?",
        answer: "A callback is a function passed as an argument to another function, which is invoked after a certain event occurs.",
        Sample: "Callbacks help manage asynchronous operations.",
        code: `fs.readFile('file.txt', (err, data) => { if (err) throw err; console.log(data); });`
      },
      {
        id: 45,
        Title: "45. What is the purpose of `require()` in Node.js?",
        answer: "The `require()` function is used to include modules that exist in separate files, allowing code reusability.",
        Sample: "Commonly used to load libraries or local modules.",
        code: `const express = require('express');`
      },
      {
        id: 46,
        Title: "46. What is the Event Loop?",
        answer: "The Event Loop is a mechanism that allows Node.js to perform non-blocking I/O operations, even when there are many operations happening concurrently.",
        Sample: "It helps handle asynchronous events efficiently.",
        code: `// Example of non-blocking I/O`
      },
      {
        id: 47,
        Title: "47. What is the purpose of `npm start`?",
        answer: "`npm start` runs the command specified in the 'start' script of the package.json file.",
        Sample: "It's commonly used to start the server.",
        code: `// In package.json: "scripts": { "start": "node server.js" }`
      },
      {
        id: 48,
        Title: "48. What are promises?",
        answer: "Promises are objects that represent the eventual completion or failure of an asynchronous operation and its resulting value.",
        Sample: "Promises allow chaining of asynchronous operations.",
        code: `let promise = new Promise((resolve, reject) => { /* ... */ });`
      },
      {
        id: 49,
        Title: "49. What is the difference between synchronous and asynchronous code?",
        answer: "Synchronous code is executed line by line, blocking the execution of subsequent code until it completes, while asynchronous code allows other operations to run while waiting for a task to complete.",
        Sample: "Asynchronous code improves performance in I/O operations.",
        code: `// Synchronous: \nconst data = fs.readFileSync('file.txt');\n// Asynchronous: \nfs.readFile('file.txt', (err, data) => { /* ... */ });`
      },
      {
        id: 50,
        Title: "50. How do you handle errors in Node.js?",
        answer: "Errors in Node.js can be handled using try-catch blocks, or by passing error objects to the next middleware in Express.",
        Sample: "Error handling is essential for robust applications.",
        code: `app.use((err, req, res, next) => { res.status(500).send('Something broke!'); });`
      },
      {
        id: 51,
        Title: "51. What is a RESTful API?",
        answer: "A RESTful API is an architectural style that uses HTTP requests to access and manipulate data, following REST principles.",
        Sample: "REST APIs are stateless and use standard HTTP methods.",
        code: `app.get('/api/resource', (req, res) => { /* ... */ });`
      },
      {
        id: 52,
        Title: "52. What is the purpose of the `body-parser` middleware?",
        answer: "`body-parser` is middleware used to parse the body of incoming requests, making the data accessible under `req.body`.",
        Sample: "It is essential for handling POST requests.",
        code: `const bodyParser = require('body-parser');\napp.use(bodyParser.json());`
      },
      {
        id: 53,
        Title: "53. How do you connect to a MongoDB database?",
        answer: "You can connect to a MongoDB database using the Mongoose library or the native MongoDB driver.",
        Sample: "Connection strings specify the database details.",
        code: `const mongoose = require('mongoose');\nmongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true });`
      },
      {
        id: 54,
        Title: "54. What is socket.io?",
        answer: "Socket.io is a JavaScript library for real-time web applications, enabling bi-directional communication between clients and servers.",
        Sample: "Useful for chat applications or real-time updates.",
        code: `const io = require('socket.io')(server);\nio.on('connection', (socket) => { /* ... */ });`
      },
      {
        id: 55,
        Title: "55. How do you serve static files in Express?",
        answer: "You can serve static files in Express using the built-in `express.static` middleware.",
        Sample: "This is commonly used for serving images, CSS files, and JavaScript files.",
        code: `app.use(express.static('public'));`
      },
      {
        id: 56,
        Title: "56. What is the purpose of the `process` object?",
        answer: "The `process` object provides information about the current Node.js process, including environment variables and command-line arguments.",
        Sample: "It allows interaction with the environment in which the Node.js application is running.",
        code: `console.log(process.env.NODE_ENV);`
      },
      {
        id: 57,
        Title: "57. What is a database migration?",
        answer: "Database migration is a way to update the database schema incrementally, usually involving adding or modifying tables and columns.",
        Sample: "Tools like Sequelize or Knex can be used for migrations.",
        code: `// Example migration script`
      },
      {
        id: 58,
        Title: "58. What is the difference between NoSQL and SQL databases?",
        answer: "NoSQL databases are schema-less and allow for unstructured data storage, while SQL databases are structured and use a predefined schema.",
        Sample: "MongoDB is an example of a NoSQL database, while MySQL is an SQL database.",
        code: `// NoSQL: MongoDB\n// SQL: MySQL`
      },
      {
        id: 59,
        Title: "59. What is a templating engine?",
        answer: "A templating engine is a tool that allows you to generate HTML dynamically using templates, which can include placeholders for data.",
        Sample: "EJS, Handlebars, and Pug are popular templating engines for Node.js.",
        code: `app.set('view engine', 'ejs');`
      },
      {
        id: 60,
        Title: "60. How do you implement file system operations in Node.js?",
        answer: "File system operations can be performed using the built-in 'fs' module, which provides methods to read, write, and manage files.",
        Sample: "Asynchronous methods prevent blocking the event loop.",
        code: `const fs = require('fs');\nfs.writeFile('file.txt', 'Hello, World!', (err) => { if (err) throw err; });`
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
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Node.js Basics and Concepts</h1>

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

export default Node;

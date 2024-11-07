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

const Express: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);


  const array: Question[] = [
    {
      id: 1,
      Title: "1. What is Express.js?",
      answer: "Express.js is a web application framework for Node.js, designed for building web applications and APIs. It simplifies the server creation process and helps manage routes, middleware, and requests.",
      Sample: "Used to create RESTful APIs and web applications.",
      code: `const express = require('express');\nconst app = express();\napp.listen(3000, () => console.log('Server is running on port 3000'));`
    },
    {
      id: 2,
      Title: "2. How to create a basic Express server?",
      answer: "You can create a basic Express server by requiring the express module and calling the `express()` function, then setting up a listener on a specified port.",
      Sample: "Creating a server that responds with 'Hello World'.",
      code: `app.get('/', (req, res) => res.send('Hello World!'));`
    },
    {
      id: 3,
      Title: "3. What are routes in Express?",
      answer: "Routes are used to define the endpoints of your application, determining how the server should respond to different requests.",
      Sample: "You can define routes for different HTTP methods like GET, POST, etc.",
      code: `app.get('/users', (req, res) => { /* ... */ });`
    },
    {
      id: 4,
      Title: "4. What is middleware in Express?",
      answer: "Middleware functions are functions that have access to the request and response objects and can perform operations on them before passing control to the next middleware function.",
      Sample: "Used for logging, authentication, etc.",
      code: `app.use((req, res, next) => { console.log('Request received'); next(); });`
    },
    {
      id: 5,
      Title: "5. How do you handle GET requests?",
      answer: "You can handle GET requests using `app.get()` method, which takes the route and a callback function as arguments.",
      Sample: "Fetching data from the server.",
      code: `app.get('/api/data', (req, res) => { res.json({ message: 'Data fetched!' }); });`
    },
    {
      id: 6,
      Title: "6. How to handle POST requests in Express?",
      answer: "Handle POST requests using `app.post()` method, which is used to send data to the server.",
      Sample: "Creating a new user.",
      code: `app.post('/api/users', (req, res) => { /* Create user logic */ });`
    },
    {
      id: 7,
      Title: "7. What is `body-parser` in Express?",
      answer: "`body-parser` is a middleware that parses the body of incoming requests and makes the data available under `req.body`.",
      Sample: "Used to handle JSON and URL-encoded data.",
      code: `const bodyParser = require('body-parser');\napp.use(bodyParser.json());`
    },
    {
      id: 8,
      Title: "8. How to serve static files in Express?",
      answer: "You can serve static files using the `express.static` middleware, which allows you to specify a directory containing static files.",
      Sample: "Serving images, CSS, or JavaScript files.",
      code: `app.use(express.static('public'));`
    },
    {
      id: 9,
      Title: "9. How do you implement error handling in Express?",
      answer: "Error handling can be implemented by defining an error-handling middleware function that takes four arguments: err, req, res, and next.",
      Sample: "Catching errors during request processing.",
      code: `app.use((err, req, res, next) => { res.status(500).send('Something went wrong!'); });`
    },
    {
      id: 10,
      Title: "10. What are query parameters?",
      answer: "Query parameters are key-value pairs attached to the end of a URL, commonly used to filter data or pass information.",
      Sample: "Fetching users with specific criteria.",
      code: `app.get('/api/users', (req, res) => { const { age } = req.query; /* Logic */ });`
    },
    {
      id: 11,
      Title: "11. How to use route parameters?",
      answer: "Route parameters are named segments of the URL that can be accessed in the request object using `req.params`.",
      Sample: "Fetching a user by their ID.",
      code: `app.get('/api/users/:id', (req, res) => { const userId = req.params.id; /* Logic */ });`
    },
    {
      id: 12,
      Title: "12. What is the purpose of the `next()` function?",
      answer: "The `next()` function is used to pass control to the next middleware function in the stack. It can also be called with an error to skip to the error-handling middleware.",
      Sample: "Handling asynchronous operations.",
      code: `app.get('/', (req, res, next) => { next(); });`
    },
    {
      id: 13,
      Title: "13. How do you set response headers?",
      answer: "You can set response headers using the `res.set()` method, which allows you to define custom headers for the response.",
      Sample: "Setting CORS headers.",
      code: `res.set('Access-Control-Allow-Origin', '*');`
    },
    {
      id: 14,
      Title: "14. How to redirect in Express?",
      answer: "You can redirect users to a different route using the `res.redirect()` method.",
      Sample: "Redirecting after a successful login.",
      code: `res.redirect('/dashboard');`
    },
    {
      id: 15,
      Title: "15. How to implement CORS in Express?",
      answer: "CORS (Cross-Origin Resource Sharing) can be implemented using the `cors` middleware, which allows you to specify which origins can access your resources.",
      Sample: "Enabling CORS for all origins.",
      code: `const cors = require('cors');\napp.use(cors());`
    },
    {
      id: 16,
      Title: "16. What is the purpose of the `app.listen()` method?",
      answer: "The `app.listen()` method starts the server and listens for incoming connections on a specified port.",
      Sample: "Starting the server on port 3000.",
      code: `app.listen(3000, () => console.log('Server running on port 3000'));`
    },
    {
      id: 17,
      Title: "17. How to handle file uploads in Express?",
      answer: "You can handle file uploads using the `multer` middleware, which parses `multipart/form-data` and stores uploaded files.",
      Sample: "Uploading a profile picture.",
      code: `const multer = require('multer');\nconst upload = multer({ dest: 'uploads/' });\napp.post('/upload', upload.single('file'), (req, res) => { /* Logic */ });`
    },
    {
      id: 18,
      Title: "18. What is the `req` object?",
      answer: "The `req` object represents the HTTP request and contains information about the request such as headers, parameters, and body.",
      Sample: "Accessing user data from the request.",
      code: `app.get('/api/user', (req, res) => { const userData = req.body; });`
    },
    {
      id: 19,
      Title: "19. What is the `res` object?",
      answer: "The `res` object represents the HTTP response that an Express app sends when it gets an HTTP request.",
      Sample: "Sending a JSON response.",
      code: `res.json({ message: 'Success' });`
    },
    {
      id: 20,
      Title: "20. How to implement session management in Express?",
      answer: "You can implement session management using the `express-session` middleware, which allows you to store session data on the server.",
      Sample: "Storing user login information.",
      code: `const session = require('express-session');\napp.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));`
    },
    {
      id: 21,
      Title: "21. What are template engines?",
      answer: "Template engines allow you to generate HTML dynamically by embedding variables and logic within your HTML templates.",
      Sample: "Using EJS to render views.",
      code: `app.set('view engine', 'ejs');`
    },
    {
      id: 22,
      Title: "22. How to handle asynchronous code in Express?",
      answer: "You can handle asynchronous code using async/await or Promises to manage operations that take time, like database queries.",
      Sample: "Fetching data from a database.",
      code: `app.get('/api/data', async (req, res) => { const data = await getData(); res.json(data); });`
    },
    {
      id: 23,
      Title: "23. What is compression in Express?",
      answer: "Compression is a middleware that compresses response bodies to reduce the size of the response sent to clients.",
      Sample: "Improving performance by reducing response size.",
      code: `const compression = require('compression');\napp.use(compression());`
    },
    {
      id: 24,
      Title: "24. How to implement logging in Express?",
      answer: "You can implement logging using the `morgan` middleware, which logs HTTP requests to the console or a file.",
      Sample: "Monitoring incoming requests.",
      code: `const morgan = require('morgan');\napp.use(morgan('tiny'));`
    },
    {
      id: 25,
      Title: "25. What is the purpose of the `app.use()` method?",
      answer: "`app.use()` is used to mount middleware functions at a specific path in the application.",
      Sample: "Applying middleware to all routes.",
      code: `app.use(express.json());`
    },
    {
      id: 26,
      Title: "26. How to serve HTML files in Express?",
      answer: "You can serve HTML files using the `res.sendFile()` method to send the file to the client.",
      Sample: "Sending an HTML file as a response.",
      code: `res.sendFile(path.join(__dirname, 'index.html'));`
    },
    {
      id: 27,
      Title: "27. How to handle 404 errors in Express?",
      answer: "You can handle 404 errors by defining a middleware function at the end of your route definitions that sends a 404 response.",
      Sample: "Handling non-existing routes.",
      code: `app.use((req, res) => { res.status(404).send('Page not found'); });`
    },
    {
      id: 28,
      Title: "28. What is the `process.env` object?",
      answer: "The `process.env` object contains environment variables for your Node.js application, useful for configuration.",
      Sample: "Accessing API keys and database URLs.",
      code: `const dbUrl = process.env.DATABASE_URL;`
    },
    {
      id: 29,
      Title: "29. How to deploy an Express app?",
      answer: "You can deploy an Express app using services like Heroku, Vercel, or AWS, and by setting up a production environment.",
      Sample: "Deploying on Heroku.",
      code: `git push heroku master`
    },
    {
      id: 30,
      Title: "30. What is the `dotenv` package?",
      answer: "The `dotenv` package loads environment variables from a `.env` file into `process.env`, helping manage configuration.",
      Sample: "Storing sensitive data like API keys.",
      code: `require('dotenv').config();`
    },
    {
      id: 31,
      Title: "31. How to use EJS for templating?",
      answer: "EJS (Embedded JavaScript) is a templating engine that allows you to embed JavaScript code into your HTML.",
      Sample: "Rendering dynamic views.",
      code: `app.get('/profile', (req, res) => { res.render('profile', { user: req.user }); });`
    },
    {
      id: 32,
      Title: "32. What is the `passport` package?",
      answer: "Passport is a middleware for Node.js that simplifies authentication, providing various strategies for different types of authentication.",
      Sample: "Implementing local or OAuth authentication.",
      code: `const passport = require('passport');`
    },
    {
      id: 33,
      Title: "33. How to manage cookies in Express?",
      answer: "You can manage cookies using the `cookie-parser` middleware, which allows you to read and write cookies.",
      Sample: "Storing user preferences.",
      code: `const cookieParser = require('cookie-parser');\napp.use(cookieParser());`
    },
    {
      id: 34,
      Title: "34. How to set up HTTPS in Express?",
      answer: "To set up HTTPS, you need to create an HTTPS server using Node.js's `https` module and provide SSL certificates.",
      Sample: "Securing your application.",
      code: `const https = require('https');\nhttps.createServer(options, app).listen(443);`
    },
    {
      id: 35,
      Title: "35. How to implement rate limiting?",
      answer: "Rate limiting can be implemented using the `express-rate-limit` middleware to limit the number of requests from a client.",
      Sample: "Preventing abuse of APIs.",
      code: `const rateLimit = require('express-rate-limit');\nconst limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });\napp.use(limiter);`
    },
    {
      id: 36,
      Title: "36. What are HTTP status codes?",
      answer: "HTTP status codes indicate the outcome of an HTTP request, such as 200 for success, 404 for not found, and 500 for server error.",
      Sample: "Returning appropriate status codes.",
      code: `res.status(404).send('Not Found');`
    },
    {
      id: 37,
      Title: "37. How to set up a custom error handler?",
      answer: "You can set up a custom error handler by defining a middleware function that handles errors based on your requirements.",
      Sample: "Logging errors to a file.",
      code: `app.use((err, req, res, next) => { console.error(err.stack); res.status(500).send('Something broke!'); });`
    },
    {
      id: 38,
      Title: "38. What is the difference between `app.get()` and `app.all()`?",
      answer: "`app.get()` is used to handle GET requests, while `app.all()` handles all HTTP methods for a specific route.",
      Sample: "Handling multiple request types.",
      code: `app.all('/api/*', (req, res) => { /* Logic */ });`
    },
    {
      id: 39,
      Title: "39. How to set up a health check endpoint?",
      answer: "You can set up a health check endpoint to monitor the status of your application by defining a simple route.",
      Sample: "Returning application status.",
      code: `app.get('/health', (req, res) => res.json({ status: 'OK' }));`
    },
    {
      id: 40,
      Title: "40. How to use compression middleware?",
      answer: "Compression middleware is used to gzip or deflate the response bodies to optimize the performance of your application.",
      Sample: "Reducing response sizes.",
      code: `const compression = require('compression');\napp.use(compression());`
    },
    {
      id: 41,
      Title: "41. What is the purpose of using `async` and `await`?",
      answer: "Using `async` and `await` allows you to write asynchronous code that looks synchronous, improving readability and error handling.",
      Sample: "Fetching data from a database without callbacks.",
      code: `app.get('/data', async (req, res) => { const data = await fetchData(); res.send(data); });`
    },
    {
        id: 42,
        Title: "42. How to use static files in Express?",
        answer: "You can serve static files (like images, CSS, and JavaScript) using the `express.static` middleware.",
        Sample: "Serving CSS and JavaScript files.",
        code: `app.use(express.static('public'));`
      },
      {
        id: 43,
        Title: "43. How to implement CORS in Express?",
        answer: "You can implement CORS (Cross-Origin Resource Sharing) using the `cors` middleware.",
        Sample: "Allowing cross-origin requests.",
        code: `const cors = require('cors');\napp.use(cors());`
      },
      {
        id: 44,
        Title: "44. How to use the `body-parser` middleware?",
        answer: "The `body-parser` middleware parses incoming request bodies in a middleware before your handlers, making it available under the `req.body` property.",
        Sample: "Parsing JSON request bodies.",
        code: `const bodyParser = require('body-parser');\napp.use(bodyParser.json());`
      },
      {
        id: 45,
        Title: "45. How to manage sessions in Express?",
        answer: "You can manage sessions using the `express-session` middleware to keep track of user sessions.",
        Sample: "Storing user login information.",
        code: `const session = require('express-session');\napp.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));`
      },
      {
        id: 46,
        Title: "46. How to implement file uploads in Express?",
        answer: "You can implement file uploads using the `multer` middleware to handle multipart/form-data.",
        Sample: "Uploading profile pictures.",
        code: `const multer = require('multer');\nconst upload = multer({ dest: 'uploads/' });\napp.post('/upload', upload.single('file'), (req, res) => { /* Logic */ });`
      },
      {
        id: 47,
        Title: "47. How to use template engines in Express?",
        answer: "You can use template engines like Pug, EJS, or Handlebars to render dynamic HTML pages.",
        Sample: "Rendering a page with user data.",
        code: `app.set('view engine', 'ejs');`
      },
      {
        id: 48,
        Title: "48. How to handle form submissions in Express?",
        answer: "You can handle form submissions by parsing the form data and responding accordingly.",
        Sample: "Handling user sign-up forms.",
        code: `app.post('/signup', (req, res) => { const { username, password } = req.body; /* Logic */ });`
      },
      {
        id: 49,
        Title: "49. How to set response headers in Express?",
        answer: "You can set custom response headers using the `res.set()` method.",
        Sample: "Setting content type and cache control.",
        code: `res.set('Content-Type', 'application/json');`
      },
      {
        id: 50,
        Title: "50. How to redirect requests in Express?",
        answer: "You can redirect requests to another route using the `res.redirect()` method.",
        Sample: "Redirecting from /login to /dashboard.",
        code: `res.redirect('/dashboard');`
      },
      {
        id: 51,
        Title: "51. How to implement error handling middleware?",
        answer: "You can implement custom error handling middleware to catch and respond to errors in a centralized manner.",
        Sample: "Logging errors and sending a response.",
        code: `app.use((err, req, res, next) => { console.error(err); res.status(500).send('Something went wrong!'); });`
      },
      {
        id: 52,
        Title: "52. How to use query parameters in Express?",
        answer: "You can access query parameters from the URL using `req.query`.",
        Sample: "Getting search filters from a request.",
        code: `app.get('/search', (req, res) => { const { q } = req.query; /* Logic */ });`
      },
      {
        id: 53,
        Title: "53. How to create a middleware function?",
        answer: "You can create a middleware function by defining a function that takes `req`, `res`, and `next` parameters.",
        Sample: "Logging request details.",
        code: `const logger = (req, res, next) => { console.log(req.method, req.url); next(); };\napp.use(logger);`
      },
      {
        id: 54,
        Title: "54. How to handle multipart/form-data in Express?",
        answer: "You can handle multipart/form-data, commonly used for file uploads, using the `multer` middleware.",
        Sample: "Processing form submissions with file uploads.",
        code: `const multer = require('multer');\nconst upload = multer();\napp.post('/profile', upload.single('avatar'), (req, res) => { /* Logic */ });`
      },
      {
        id: 55,
        Title: "55. How to implement authentication in Express?",
        answer: "You can implement authentication using strategies provided by Passport or custom middleware.",
        Sample: "Protecting routes with authentication.",
        code: `app.get('/protected', ensureAuthenticated, (req, res) => { res.send('Welcome!'); });`
      },
      {
        id: 56,
        Title: "56. How to set the view directory in Express?",
        answer: "You can set the view directory using the `app.set()` method.",
        Sample: "Specifying the folder for view templates.",
        code: `app.set('views', path.join(__dirname, 'views'));`
      },
      {
        id: 57,
        Title: "57. How to handle SSL certificates in Express?",
        answer: "You can handle SSL certificates using Node.js's `https` module for secure connections.",
        Sample: "Setting up HTTPS with certificates.",
        code: `const https = require('https');\nhttps.createServer(options, app).listen(443);`
      },
      {
        id: 58,
        Title: "58. How to use environment variables in Express?",
        answer: "You can use environment variables to store sensitive information and configuration settings.",
        Sample: "Accessing a database URL.",
        code: `const dbUrl = process.env.DB_URL;`
      },
      {
        id: 59,
        Title: "59. How to implement versioning in an Express API?",
        answer: "You can implement versioning in an API by defining different routes for each version.",
        Sample: "Maintaining backward compatibility.",
        code: `app.use('/api/v1', v1Routes);\napp.use('/api/v2', v2Routes);`
      },
      {
        id: 60,
        Title: "60. How to use clustering in Express?",
        answer: "You can use the `cluster` module to create multiple instances of your Express application for better performance.",
        Sample: "Scaling the application to handle more requests.",
        code: `const cluster = require('cluster');\nif (cluster.isMaster) { /* Logic */ } else { app.listen(port); }`
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
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Express Basics and Concepts</h1>

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

export default Express;

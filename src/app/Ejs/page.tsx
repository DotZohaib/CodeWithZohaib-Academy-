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

const Ejs: React.FC = () => {
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
      Title: "1. What is EJS?",
      answer:
        "EJS (Embedded JavaScript) is a templating language that allows you to embed JavaScript into HTML, enabling dynamic content rendering.",
      Sample:
        "EJS is commonly used with Express.js to render HTML with dynamic content.",
      code: `<h1><%= title %></h1>`,
    },
    {
      id: 2,
      Title: "2. How do you render an EJS template in Express?",
      answer:
        "To render an EJS template in Express, you use the `res.render` function, specifying the template file and data.",
      Sample: "This renders the 'index' template with a title.",
      code: `app.get('/', (req, res) => { res.render('index', { title: 'Home' }); });`,
    },
    {
      id: 3,
      Title: "3. What is the purpose of partials in EJS?",
      answer:
        "Partials are reusable EJS template files, often used for headers, footers, and navigation menus.",
      Sample:
        "Using `<%- include('header') %>` includes the 'header.ejs' partial in the template.",
      code: `<%- include('header') %>`,
    },
    {
      id: 4,
      Title:
        "4. How can you pass data from an Express route to an EJS template?",
      answer:
        "You pass data as an object through `res.render`, which the EJS template can then access.",
      Sample: "Here, `title` and `message` are accessible in the template.",
      code: `app.get('/', (req, res) => { res.render('index', { title: 'Welcome', message: 'Hello, World!' }); });`,
    },
    {
      id: 5,
      Title: "5. How do you use JavaScript logic in EJS templates?",
      answer:
        "You can use control flow statements like `if`, `for`, and `while` within EJS tags.",
      Sample: "This example conditionally displays a message.",
      code: `<% if (user) { %> <h2>Welcome, <%= user.name %></h2> <% } %>`,
    },
    {
      id: 6,
      Title: "6. How to include CSS in an EJS template?",
      answer:
        "Include CSS files in the `<head>` of your EJS template by linking to them.",
      Sample: "Place the link tag inside the head section of your EJS file.",
      code: `<link rel="stylesheet" href="/styles/style.css">`,
    },
    {
      id: 7,
      Title: "7. How can you loop through an array in EJS?",
      answer:
        "Use a `for` loop to iterate over array items in an EJS template.",
      Sample: "Displays a list of items from an array.",
      code: `<ul> <% items.forEach(function(item) { %> <li><%= item %></li> <% }); %> </ul>`,
    },
    {
      id: 8,
      Title: "8. What are some common file extensions for EJS templates?",
      answer: "The standard file extension for EJS templates is `.ejs`.",
      Sample: "For example, `index.ejs`, `header.ejs`.",
      code: "",
    },
    {
      id: 9,
      Title: "9. How to escape HTML in EJS?",
      answer:
        "Use `<%= %>` to escape HTML to avoid XSS attacks, ensuring user input is sanitized.",
      Sample: "Renders text safely.",
      code: `<p><%= userInput %></p>`,
    },
    {
      id: 10,
      Title: "10. How to render a JSON object in EJS?",
      answer:
        "Use `<%= JSON.stringify(obj) %>` to convert a JSON object to a string in the template.",
      Sample: "Useful for debugging data in templates.",
      code: `<pre><%= JSON.stringify(data, null, 2) %></pre>`,
    },
    {
      id: 11,
      Title: "11. How to configure EJS as the view engine in Express?",
      answer:
        "Set EJS as the view engine using `app.set('view engine', 'ejs')` in your Express app.",
      Sample: "Commonly done in the main server file.",
      code: `app.set('view engine', 'ejs');`,
    },
    {
      id: 12,
      Title: "12. How to add conditional rendering in EJS?",
      answer: "Use `if` statements to conditionally render content.",
      Sample: "Example shows rendering a message if a user is logged in.",
      code: `<% if (user) { %> <p>Welcome, <%= user.name %></p> <% } else { %> <p>Please log in.</p> <% } %>`,
    },
    {
      id: 13,
      Title: "13. Can EJS be used with front-end frameworks?",
      answer:
        "Yes, EJS can be used to generate HTML on the server side, which can then be sent to front-end frameworks.",
      Sample:
        "Useful in hybrid applications where server-rendered HTML is combined with client-side logic.",
      code: "",
    },
    {
      id: 14,
      Title: "14. How do you format dates in EJS?",
      answer:
        "Use JavaScript's `Date` object or a library like `moment.js` to format dates.",
      Sample: "Formats a date to a readable format.",
      code: `<%= new Date().toLocaleDateString() %>`,
    },
    {
      id: 15,
      Title: "15. How to pass environment variables to EJS?",
      answer:
        "Pass environment variables from the server to the template using `res.render`.",
      Sample: "Useful for exposing environment-specific data.",
      code: `res.render('index', { apiKey: process.env.API_KEY });`,
    },
    {
      id: 16,
      Title: "16. How to use EJS with AJAX?",
      answer:
        "Use AJAX to fetch data from the server and render it into an EJS template.",
      Sample: "Fetch data with AJAX and render it in an EJS view.",
      code: "",
    },
    {
      id: 17,
      Title: "17. How do you send data from a form to an EJS template?",
      answer:
        "Send form data to the server and use `res.render` to pass the data to the template.",
      Sample: "Displays form data on the template after submission.",
      code: `app.post('/submit', (req, res) => { res.render('result', { formData: req.body }); });`,
    },
    {
      id: 18,
      Title: "18. How can you serve static files with EJS?",
      answer:
        "Serve static files by using Express's `express.static` middleware and link to them in your EJS files.",
      Sample: "Load CSS files in your EJS template.",
      code: `app.use(express.static('public'));`,
    },
    {
      id: 19,
      Title: "19. What are the benefits of using EJS?",
      answer:
        "EJS is simple, fast, and integrates well with Express for creating dynamic HTML pages.",
      Sample: "Popular choice for server-side rendering.",
      code: "",
    },
    {
      id: 20,
      Title: "20. Can you use EJS with Node.js?",
      answer:
        "Yes, EJS is a popular templating engine for rendering HTML in Node.js applications.",
      Sample: "EJS is often used with Express.",
      code: "",
    },
    {
      id: 21,
      Title: "21. How to use loops in EJS?",
      answer: "Use JavaScript `for` or `while` loops to iterate over data.",
      Sample: "Display a list of items.",
      code: `<% for(let i = 0; i < items.length; i++) { %> <li><%= items[i] %></li> <% } %>`,
    },
    {
      id: 22,
      Title: "22. How to use inline JavaScript in EJS?",
      answer:
        "Use `<%= %>` or `<% %>` tags to write inline JavaScript within the template.",
      Sample: "Inline JavaScript to calculate values.",
      code: `<%= 5 + 3 %>`,
    },
    {
      id: 23,
      Title: "23. How do you render dynamic values in an EJS template?",
      answer:
        "You use `<%= %>` tags to insert dynamic values from the server into the EJS template.",
      Sample: "This displays the user's name dynamically.",
      code: `<h1>Welcome, <%= user.name %>!</h1>`,
    },
    {
      id: 24,
      Title: "24. How to handle error messages in EJS?",
      answer:
        "You can pass error messages from the server to the template and conditionally render them.",
      Sample: "Displays an error message if it exists.",
      code: `<% if (error) { %> <p>Error: <%= error %></p> <% } %>`,
    },
    {
      id: 25,
      Title: "25. How to render JSON data in EJS?",
      answer:
        "JSON data can be directly embedded into the EJS template using `<%= JSON.stringify(data) %>`.",
      Sample: "This renders JSON data as a string for debugging.",
      code: `<pre><%= JSON.stringify(data, null, 2) %></pre>`,
    },
    {
      id: 26,
      Title: "26. What is the purpose of `<%- %>` tags in EJS?",
      answer:
        "`<%- %>` is used for unescaped output, allowing HTML and scripts to be rendered as-is without escaping.",
      Sample: "Use with caution to avoid XSS.",
      code: `<%- htmlContent %>`,
    },
    {
      id: 27,
      Title: "27. How can you use EJS for pagination?",
      answer:
        "Pass pagination data from the server, then loop through it in the template to display page links.",
      Sample: "Display pagination links based on page numbers.",
      code: `<% for(let i = 1; i <= totalPages; i++) { %> <a href="?page=<%= i %>"><%= i %></a> <% } %>`,
    },
    {
      id: 28,
      Title: "28. How can EJS templates improve SEO?",
      answer:
        "Server-side rendering with EJS allows search engines to index dynamic content, improving SEO.",
      Sample: "Useful for rendering meta tags based on page data.",
      code: `<title><%= pageTitle %></title>`,
    },
    {
      id: 29,
      Title: "29. How to pass data to partials in EJS?",
      answer:
        "When including partials, you can pass data directly by adding it as an argument.",
      Sample: "Passing data to a partial for header customization.",
      code: `<%- include('header', { title: 'My Page' }) %>`,
    },
    {
      id: 30,
      Title: "30. How do you cache EJS templates?",
      answer:
        "By default, EJS caches templates in production mode to improve performance.",
      Sample:
        "Caching can reduce rendering times for frequently accessed pages.",
      code: `app.set('view cache', true);`,
    },
    {
      id: 31,
      Title: "31. How to handle async data in EJS?",
      answer:
        "Handle async data at the server level before passing it to EJS, as EJS doesn't support asynchronous functions.",
      Sample: "Fetch data in the route handler, then render it.",
      code: `app.get('/', async (req, res) => { const data = await fetchData(); res.render('index', { data }); });`,
    },
    {
      id: 32,
      Title: "32. What is the difference between `<%=` and `<%-` in EJS?",
      answer:
        "`<%=` escapes HTML to prevent XSS attacks, while `<%-` renders raw HTML.",
      Sample: "Use `<%-` only when rendering trusted content.",
      code: `<%- "<strong>Important</strong>" %>`,
    },
    {
      id: 33,
      Title: "33. How can you organize EJS views?",
      answer:
        "Organize views in folders and use meaningful filenames to keep templates well-structured.",
      Sample:
        "Typical structure includes folders like 'partials' and 'layouts'.",
      code: "",
    },
    {
      id: 34,
      Title: "34. How to set up EJS with a layout template?",
      answer:
        "Create a main layout template and include it in pages, adding unique content with `<%- include %>`.",
      Sample: "This setup uses a base layout with a content placeholder.",
      code: `<%- include('layout') %>`,
    },
    {
      id: 35,
      Title: "35. How to integrate EJS with a database?",
      answer:
        "Retrieve data from the database in your server route, then pass it to the EJS template via `res.render`.",
      Sample: "This example retrieves data from MongoDB.",
      code: `app.get('/products', async (req, res) => { const products = await db.collection('products').find().toArray(); res.render('products', { products }); });`,
    },
    {
      id: 36,
      Title: "36. How to render arrays and objects in EJS?",
      answer:
        "Use loops and dot notation to render array elements and object properties.",
      Sample: "Loop through an array of users and display each user's name.",
      code: `<ul> <% users.forEach(user => { %> <li><%= user.name %></li> <% }); %> </ul>`,
    },
    {
      id: 37,
      Title: "37. How to use EJS with session data?",
      answer:
        "Pass session data to EJS via `res.render`, making it accessible in templates.",
      Sample: "Display a user's session-based username.",
      code: `<p>Welcome, <%= req.session.username %>!</p>`,
    },
    {
      id: 38,
      Title: "38. How to implement form validation feedback in EJS?",
      answer:
        "Pass validation errors from the server to the EJS template and display them conditionally.",
      Sample: "Displays validation error messages under the input field.",
      code: `<% if (errors.username) { %> <p><%= errors.username %></p> <% } %>`,
    },
    {
      id: 39,
      Title: "39. How do you secure EJS templates?",
      answer:
        "Escape user input by default, avoid using `<%-` for untrusted data, and sanitize input on the server.",
      Sample: "Always use `<%= %>` for safe rendering.",
      code: `<%= userInput %>`,
    },
    {
      id: 40,
      Title: "40. How to redirect after a form submission in EJS?",
      answer:
        "Use `res.redirect` after processing the form to send the user to another page.",
      Sample: "Redirect to the homepage after form submission.",
      code: `app.post('/submit', (req, res) => { // handle form res.redirect('/'); });`,
    },
    {
      id: 41,
      Title: "41. How to render flash messages in EJS?",
      answer:
        "Store flash messages in session, pass them to the template, then display them conditionally.",
      Sample: "This displays a success message after an action.",
      code: `<% if (flashMessage) { %> <p><%= flashMessage %></p> <% } %>`,
    },
    {
      id: 42,
      Title: "42. Can EJS work with client-side JavaScript?",
      answer:
        "Yes, EJS can serve pages with embedded client-side JavaScript for interactivity.",
      Sample: "Using client-side JavaScript for form validation.",
      code: `<script>function validate() { /* validation code */ }</script>`,
    },
    {
      id: 43,
      Title: "43. How to render data conditionally based on user role in EJS?",
      answer:
        "Pass user roles from the server and conditionally render elements in EJS.",
      Sample: "Display admin content only for admins.",
      code: `<% if (user.role === 'admin') { %> <p>Admin Controls</p> <% } %>`,
    },
    {
      id: 44,
      Title: "44. How to internationalize EJS templates?",
      answer:
        "Pass language-specific data to templates or use a localization library to support multiple languages.",
      Sample: "Use a JSON file for text based on language preference.",
      code: `res.render('index', { text: translations[language].welcome })`,
    },
    {
      id: 45,
      Title: "45. How do you render a 404 page with EJS?",
      answer: "Create a 404 EJS template and render it when no routes match.",
      Sample: "Custom 404 page template.",
      code: `app.use((req, res) => { res.status(404).render('404', { message: 'Page not found' }); });`,
    },
    {
      id: 46,
      Title: "46. How to handle file uploads with EJS?",
      answer:
        "Handle file uploads on the server using `multer`, then pass file info to EJS to display upload results.",
      Sample: "Shows the uploaded file information.",
      code: `<p>Uploaded File: <%= file.filename %></p>`,
    },
    {
      id: 47,
      Title: "47. How can EJS templates handle pagination dynamically?",
      answer:
        "Create pagination buttons and update the data display based on the current page, using loop logic in EJS.",
      Sample: "Pagination structure to navigate through pages.",
      code: `<a href="?page=<%= page - 1 %>">Previous</a><a href="?page=<%= page + 1 %>">Next</a>`,
    },
    {
      id: 48,
      Title: "48. How to send notifications using EJS?",
      answer:
        "You can display notifications by setting data on the server, then rendering it conditionally in EJS.",
      Sample: "Display notification message if it exists.",
      code: `<% if (notification) { %> <p><%= notification %></p> <% } %>`,
    },
    {
      id: 49,
      Title: "49. How to render tables dynamically in EJS?",
      answer:
        "Pass data arrays to EJS, then iterate through them to create rows and cells in the HTML table.",
      Sample: "This example renders a user table.",
      code: `<table><% users.forEach(user => { %> <tr><td><%= user.name %></td></tr> <% }) %></table>`,
    },
    {
      id: 50,
      Title: "50. How to handle AJAX calls with EJS?",
      answer:
        "Serve the initial HTML with EJS, then use AJAX to update parts of the page without a full reload.",
      Sample: "AJAX call to load data from the server.",
      code: `fetch('/data').then(response => response.json()).then(data => console.log(data));`,
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
            Ejs Programming Guide
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

export default Ejs;

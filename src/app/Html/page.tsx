// pages/index.js
'use client'
import React, { useState, useEffect } from 'react';
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"; // Optional: Add a Prism theme

const Html = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const array = [
    {
      id: 1,
      Title: "1. What is HTML?",
      answer: "HTML (HyperText Markup Language) is the standard language for creating web pages. ",
      Sample: "HTML is the backbone of all web pages, providing the basic structure by using tags.",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>HTML Basics</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
</body>
</html>`
    },
    {
      id: 2,
      Title: "2. What are HTML tags?",
      answer: " HTML tags are used to define elements on a webpage, enclosed in angle brackets like `<div>`.",
      Sample: "Tags in HTML help define elements, such as headings, paragraphs, links, and more.",
      code: `<p>This is a paragraph.</p>
<div>This is a division tag.</div>`
    },
    {
      id: 3,
      Title: "3. What is the purpose of the `<head>` tag in HTML?",
      answer: " The `<head>` tag contains meta-information about the document, such as the title and links to stylesheets.",
      Sample: "The `<head>` section provides essential metadata and links to styles, scripts, and the document's title.",
      code: `<head>
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">
</head>`
    },
    {
      id: 4,
      Title: "4. What is the `<body>` tag used for?",
      answer: "The `<body>` tag contains all the visible content of a web page, such as text, images, and links. ",
      Sample: "Everything that users see on a webpage, like text, images, and buttons, is contained within the `<body>` tag.",
      code: `<body>
    <h1>Welcome!</h1>
    <p>This is a sample paragraph.</p>
</body>`
    },
    {
      id: 5,
      Title: "5. What is the difference between block-level and inline elements?",
      answer: "Block-level elements take up the full width, while inline elements only take up as much width as necessary. ",
      Sample: "Block-level elements like `<div>` take up the full width, whereas inline elements like `<span>` only take up the space they need.",
      code: `<div>This is a block element</div>
<span>This is an inline element</span>`
    },
    {
      id: 6,
      Title: "6. What is an HTML attribute?",
      answer: " HTML attributes provide additional information about elements, such as `class`, `id`, or `src`. ",
      Sample: "Attributes like `class` or `id` are used to give elements extra information or control over styling and functionality.",
      code: `<img src="image.jpg" alt="A descriptive image">`
    },
    {
      id: 7,
      Title: "7. What is the purpose of the `<a>` tag?",
      answer: "The `<a>` tag is used to create hyperlinks, linking one page to another.",
      Sample: "The `<a>` tag creates hyperlinks, allowing users to navigate between pages or external websites.",
      code: `<a href="https://www.example.com">Visit Example</a>`
    },
    {
      id: 8,
      Title: "8. How do you create an image in HTML?",
      answer: "Use the `<img>` tag with the `src` attribute to specify the image source. ",
      Sample: "To add an image, use the `<img>` tag and set the `src` attribute to the image URL.",
      code: `<img src="image.jpg" alt="Description of the image">`
    },
    {
      id: 9,
      Title: "9. What is the `<table>` tag used for?",
      answer: "The `<table>` tag is used to create a table, with rows (`<tr>`), headers (`<th>`), and data cells (`<td>`).",
      Sample: "The `<table>` tag structures data in a grid format, with `<tr>` for rows and `<td>` for individual cells.",
      code: `<table>
    <tr>
        <th>Heading 1</th>
        <th>Heading 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
</table>`
    },
    {
      id: 10,
      Title: "10. What is a form in HTML?",
      answer: "A form is created with the `<form>` tag and allows users to submit data, such as login credentials or search queries. ",
      Sample: "HTML forms collect user input with fields like text boxes and buttons, using the `<form>` tag.",
      code: `<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <input type="submit" value="Submit">
</form>`
    },
    {
      id: 11,
      Title: "11. What does the `action` attribute in a form do?",
      answer: "The `action` attribute specifies the URL where the form data will be submitted. ",
      Sample: "TThe `action` attribute defines where the form data will be sent after the user submits it.",
      code: `<form action="/submit" method="post">
    <!-- form elements here -->
</form>`
    },
    {
      id: 12,
      Title: "12. How do you create a checkbox in HTML?",
      answer: `Use the <input type="checkbox"> tag to create a checkbox element. `,
      Sample: `A checkbox is added with the <input type="checkbox"> tag, allowing users to make multiple selections.`,
      code: `<input type="checkbox" id="agree" name="agree">
<label for="agree">I agree to the terms</label>`
    },
    {
      id: 13,
      Title: "13. What is the difference between the `id` and `class` attributes?",
      answer: "`id` is unique to one element, while `class` can be shared by multiple elements. ",
      Sample: "The `id` attribute uniquely identifies an element, while `class` groups multiple elements for styling or scripting.",
      code: `<div id="uniqueID">Unique Element</div>
<div class="sharedClass">Element with shared class</div>`
    },
    {
      id:14 ,
      Title: "14. How do you create a list in HTML?",
      answer: "Use the `<ul>` for unordered lists and `<ol>` for ordered lists, with `<li>` for list items. ",
      Sample: "Lists can be unordered (`<ul>`) or ordered (`<ol>`), with each item defined by the `<li>` tag.",
      code: `<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>`
    },
    {
      id: 15,
      Title: "15. What is semantic HTML?",
      answer: "Semantic HTML uses meaningful tags like `<article>`, `<footer>`, and `<nav>` to improve readability and accessibility.",
      Sample: "Semantic HTML enhances accessibility and clarity by using tags like `<header>`, `<main>`, and `<section>`.",
      code: `<article>
    <h2>Article Title</h2>
    <p>Content of the article.</p>
</article>`
    },
    {
      id: 16,
      Title: "16. What is the purpose of the `<meta>` tag?",
      answer: "The `<meta>` tag provides metadata about the HTML document, such as character set and viewport settings.",
      Sample: "The `<meta>` tag includes crucial information like character encoding and viewport settings for responsive design",
      code: `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">`
    },
    {
      id: 17,
      Title: "17. How do you embed a video in HTML?",
      answer: "Use the `<video>` tag, along with `src` and `controls` attributes, to embed a video.",
      Sample: "To embed a video, use the `<video>` tag with attributes like `controls` for playback options.",
      code: `<video src="video.mp4" controls>
    Your browser does not support the video tag.
</video>`
    },
    {
      id: 18,
      Title: "18. How do you make an HTML element responsive?",
      answer: "Use CSS media queries or responsive meta tags to ensure elements adapt to different screen sizes. ",
      Sample: "Elements can be made responsive by applying CSS media queries or using meta tags for viewport settings.",
      code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
    },
    {
      id: 19,
      Title: "19. What is the role of the `alt` attribute in images?",
      answer: "The `alt` attribute provides alternative text for images, enhancing accessibility and SEO. ",
      Sample: "The `alt` attribute describes images for users with screen readers and boosts SEO by providing context.",
      code: `<img src="image.jpg" alt="A beautiful view of the mountains">`
    },
    {
      id:20 ,
      Title: "20. What is the purpose of the `<iframe>` tag?",
      answer: "The `<iframe>` tag is used to embed another HTML page within a current page. ",
      Sample: "With `<iframe>`, you can embed external content like videos or maps directly into your webpage.",
      code: `<iframe src="https://www.example.com" width="600" height="400"></iframe>`
    },
    {
      id: 21,
      Title: "21. What is the purpose of the `<strong>` tag?",
      answer: "The `<strong>` tag is used to indicate strong emphasis, often displayed as bold text by browsers.",
      Sample: "The `<strong>` tag emphasizes text for importance, commonly displayed in bold.",
      code: `<p>This is <strong>important</strong> text.</p>`
    },
    {
      id: 22,
      Title: "22. How do you create a button in HTML?",
      answer: "Use the `<button>` tag to create a clickable button. ",
      Sample: "Buttons are created using the `<button>` tag for actions or form submissions.",
      code: `<button>Click Me</button>`
    },
    {
      id: 23,
      Title: "23. What is the `<script>` tag used for?",
      answer: "The `<script>` tag is used to embed or reference JavaScript code in an HTML document.",
      Sample: "Use the `<script>` tag to add JavaScript code to a webpage, enabling interactive elements.",
      code: `<script>
    alert("Hello, World!");
</script>`
    },
    {
      id: 24,
      Title: "24. How do you create a dropdown list in HTML?",
      answer: "Use the `<select>` tag with `<option>` tags to define the dropdown choices.  ",
      Sample: "A dropdown menu is created using `<select>`, with each choice defined by `<option>`.",
      code: `<select>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
</select>`
    },
    {
      id: 25,
      Title: "25. What is the `<nav>` tag used for in HTML?",
      answer: "The `<nav>` tag defines navigation links within a webpage. ",
      Sample: "The `<nav>` tag groups navigation links, typically found at the top or side of a page.",
      code: `<nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
</nav>`
    },
    {
      id: 26,
      Title: "26. How do you add a tooltip to an element in HTML?",
      answer: "Use the `title` attribute on an element to display a tooltip when hovered.",
      Sample: "Tooltips are added by setting the `title` attribute on any HTML element.",
      code: `<button title="This is a tooltip">Hover over me</button>`
    },
    {
      id: 27,
      Title: "27. What is the purpose of the `<br>` tag?",
      answer: "The `<br>` tag inserts a line break in the text.",
      Sample: "The `<br>` tag creates a line break, useful for spacing out text within a paragraph.",
      code: `<p>Line one.<br>Line two.</p>`
    },
    {
      id:28 ,
      Title: "28. How do you make an email link in HTML?",
      answer: "Use the `<a>` tag with the `mailto:` prefix in the `href` attribute. ",
      Sample: "An email link is created by setting `mailto:` in the `href` attribute of an `<a>` tag.",
      code: `<a href="mailto:example@example.com">Email Us</a>`
    },
    {
      id: 29,
      Title: "29. What is the `<aside>` tag used for in HTML?",
      answer: "The `<aside>` tag is used to define content aside from the main content, often used for sidebars or callouts.",
      Sample: "The `<aside>` tag holds content that is related but separate from the main flow, like side notes.",
      code: `<aside>
    <p>This is additional info related to the main content.</p>
</aside>`
    },
    {
      id: 30,
      Title: "30. How do you create a text input field in HTML?",
      answer: `Use the <input type="text"> tag to create a single-line text input.`,
      Sample: `A text input field is created with <input type="text"> allowing user text entry.`,
      code: `<input type="text" placeholder="Enter your name">`
    },
    {
      id: 31,
      Title: "31. How do you create a radio button group in HTML?",
      answer: ` Use <input type="radio"> with the same name attribute for grouping.`,
      Sample: "Radio buttons with the same `name` form a group, allowing only one selection at a time.",
      code: `<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female`
    },
    {
      id: 32,
      Title: "32. What is the purpose of the `<footer>` tag?",
      answer: "The `<footer>` tag defines the footer section, usually containing contact info or copyright.",
      Sample: "The `<footer>` section typically contains the copyright, links, and contact information.",
      code: `<footer>
    <p>&copy; 2024 Your Website. All rights reserved.</p>
</footer>`
    },
    {
      id: 33,
      Title: "33. How do you create a hyperlink that opens in a new tab?",
      answer: "Use the `<a>` tag with the `target='_blank'` attribute.",
      Sample: "Set `target='_blank'` in an `<a>` tag to open links in a new tab.",
      code: `<a href="https://www.example.com" target="_blank">Visit Example</a>`
    },
    {
      id: 34,
      Title: "34. What is the `<mark>` tag used for?",
      answer: "The `<mark>` tag highlights text, usually displayed with a yellow background.",
      Sample: "The `<mark>` tag highlights important text, often with a yellow background.",
      code: `<p>This is <mark>highlighted</mark> text.</p>`
    },
    {
      id: 35,
      Title: "35. How do you set the language of an HTML document?",
      answer: "Use the `lang` attribute in the `<html>` tag.",
      Sample: "Set the document’s language using the `lang` attribute on the `<html>` element.",
      code: `<html lang="en">`
    },
  ];

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleCopy= (text: any, index:any) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto mx-3 font-sans">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">HTML Basics and Concepts</h1>

      {array.map((item, index) => (
        <section key={item.id} className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">{item.Title}</h2>
          <p className="mb-2 text-gray-600"><strong>Answer:</strong> {item.answer}</p>
          <p className="mb-4 text-gray-600"><strong>Sample Wording:</strong> {item.Sample}</p>

          <h3 className="text-lg font-medium mb-2 text-gray-700">Code Example:</h3>
          <div className="relative bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
            <button 
              onClick={() => handleCopy(item.code, index)}
              className="absolute top-2 overflow-auto right-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
            >
              {copiedIndex === index ? "Copied!" : "Copy"}
            </button>
            <pre>
              <code className="language-html overflow-auto">{item.code}</code>
            </pre>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Html;

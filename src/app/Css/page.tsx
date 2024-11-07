// pages/index.js
'use client'
import React, { useState, useEffect } from 'react';
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css"; // Optional: Add a Prism theme

const Css = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const array = [
    {
      id: 1,
      Title: "1. What is CSS?",
      answer: "CSS (Cascading Style Sheets) is used to style and layout web pages, including colors, fonts, and spacing.",
      Sample: "CSS defines how HTML elements should be displayed, making webpages visually appealing.",
      code: `body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}`
    },
    {
      id: 2,
      Title: "2. What are CSS selectors?",
      answer: "CSS selectors are patterns used to select elements for styling based on their tags, classes, IDs, or attributes.",
      Sample: "Selectors help apply styles to HTML elements using classes, IDs, or element names.",
      code: `.my-class {
    color: blue;
}
#my-id {
    background-color: yellow;
}`
    },
    {
      id: 3,
      Title: "3. How do you add comments in CSS?",
      answer: "CSS comments are added with `/* comment */` and are ignored by the browser.",
      Sample: "Use comments to leave notes or explanations within your CSS code.",
      code: `/* This is a CSS comment */
body {
    margin: 0;
}`
    },
    {
      id: 4,
      Title: "4. What is the box model in CSS?",
      answer: "The box model describes the layout of elements using margin, border, padding, and content.",
      Sample: "Each HTML element can be visualized as boxes with different layers for spacing and styling.",
      code: `div {
    margin: 10px;
    padding: 15px;
    border: 1px solid black;
    width: 100px;
}`
    },
    {
      id: 5,
      Title: "5. How do you center an element in CSS?",
      answer: "To center an element, you can use margin auto for block elements or flexbox/grid for more control.",
      Sample: "Center a div using `margin: auto;` or align-items in Flexbox.",
      code: `/* Using margin auto */
.container {
    width: 50%;
    margin: 0 auto;
}

/* Using flexbox */
.flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
}`
    },
    {
      id: 6,
      Title: "6. What is Flexbox?",
      answer: "Flexbox is a layout model that makes it easier to design a flexible, responsive layout structure without using float or positioning.",
      Sample: "Flexbox is used to create layouts that are easy to align, reorder, and distribute within a container.",
      code: `.flex-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}`
    },
    {
      id: 7,
      Title: "7. How do you use CSS Grid?",
      answer: "CSS Grid Layout is a two-dimensional layout system for web pages, allowing you to position elements in rows and columns.",
      Sample: "Use CSS Grid to create complex, multi-row and column layouts.",
      code: `.grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px;
}`
    },
    {
      id: 8,
      Title: "8. What is the difference between padding and margin?",
      answer: "Padding is the space inside an element, while margin is the space outside the element.",
      Sample: "Padding controls spacing within the element's border, while margin affects spacing around the element.",
      code: `div {
    padding: 20px;
    margin: 10px;
}`
    },
    {
      id: 9,
      Title: "9. How do you set a background image in CSS?",
      answer: "Use the `background-image` property with a URL to set a background image.",
      Sample: "The `background-image` property sets an image as the background for an element.",
      code: `body {
    background-image: url('background.jpg');
    background-size: cover;
}`
    },
    {
      id: 10,
      Title: "10. What are CSS animations?",
      answer: "CSS animations allow you to animate the transition between CSS property states.",
      Sample: "CSS animations can make elements move, change color, or scale in response to actions.",
      code: `@keyframes example {
    from {background-color: red;}
    to {background-color: yellow;}
}

div {
    animation: example 5s infinite;
}`
    },
    {
      id: 11,
      Title: "11. What are CSS transitions?",
      answer: "CSS transitions allow property changes in CSS values to occur smoothly over a specified duration.",
      Sample: "Transitions can be applied to any CSS property.",
      code: `div {
    transition: background-color 0.5s ease;
}

div:hover {
    background-color: blue;
}`
    },
    {
      id: 12,
      Title: "12. What is a CSS preprocessor?",
      answer: "A CSS preprocessor extends CSS with variables, nesting, and functions, making it more maintainable.",
      Sample: "Sass and Less are popular CSS preprocessors.",
      code: `$primary-color: #333;

.button {
    color: $primary-color;
}`
    },
    {
      id: 13,
      Title: "13. How do you apply styles to different screen sizes?",
      answer: "Use media queries to apply different styles for various screen sizes.",
      Sample: "Media queries make your design responsive.",
      code: `@media (max-width: 600px) {
    body {
        background-color: lightblue;
    } 
}`
    },
    {
      id: 14,
      Title: "14. What is responsive design?",
      answer: "Responsive design is an approach that ensures web pages look good on all devices by using flexible layouts, images, and CSS media queries.",
      Sample: "Responsive design adjusts layouts based on the device's screen size.",
      code: `body {
    display: flex;
    flex-wrap: wrap;
}`
    },
    {
      id: 15,
      Title: "15. How do you use custom fonts in CSS?",
      answer: "Use the `@font-face` rule to define custom fonts in your CSS.",
      Sample: "You can include fonts from various sources, including Google Fonts.",
      code: `@font-face {
    font-family: 'MyCustomFont';
    src: url('mycustomfont.woff2') format('woff2');
}

h1 {
    font-family: 'MyCustomFont';
}`
    },
    {
      id: 16,
      Title: "16. What are pseudo-classes?",
      answer: "Pseudo-classes are keywords added to selectors that specify a special state of an element.",
      Sample: "Common pseudo-classes include :hover, :focus, and :nth-child.",
      code: `a:hover {
    text-decoration: underline;
}`
    },
    {
      id: 17,
      Title: "17. What are pseudo-elements?",
      answer: "Pseudo-elements allow you to style specific parts of an element.",
      Sample: "Common pseudo-elements include ::before and ::after.",
      code: `h1::before {
    content: 'Title: ';
    font-weight: bold;
}`
    },
    {
      id: 18,
      Title: "18. What is the `z-index` property?",
      answer: "The `z-index` property controls the vertical stacking order of elements that overlap.",
      Sample: "Elements with higher z-index values are stacked above those with lower values.",
      code: `.box1 {
    position: absolute;
    z-index: 1;
}

.box2 {
    position: absolute;
    z-index: 2;
}`
    },
    {
      id: 19,
      Title: "19. What is the `display` property?",
      answer: "The `display` property specifies the display behavior of an element, such as block, inline, flex, or grid.",
      Sample: "Changing the display type can alter layout significantly.",
      code: `div {
    display: flex;
}`
    },
    {
      id: 20,
      Title: "20. What is the `overflow` property?",
      answer: "The `overflow` property controls what happens when content overflows an element's box.",
      Sample: "It can be set to visible, hidden, scroll, or auto.",
      code: `div {
    overflow: hidden;
}`
    },
    {
      id: 21,
      Title: "21. How do you create a simple CSS grid?",
      answer: "Define a grid container and set its columns and rows with the `grid-template-columns` and `grid-template-rows` properties.",
      Sample: "Use grid to align items in a structured way.",
      code: `.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}`
    },
    {
      id: 22,
      Title: "22. What is a CSS reset?",
      answer: "A CSS reset is used to reduce browser inconsistencies in default styling.",
      Sample: "Reset styles ensure a consistent baseline across browsers.",
      code: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}`
    },
    {
      id: 23,
      Title: "23. How do you implement a sticky header?",
      answer: "Use the `position: sticky` property to make a header stick to the top of the viewport as you scroll.",
      Sample: "Sticky headers remain visible while scrolling through content.",
      code: `header {
    position: sticky;
    top: 0;
    background: white;
}`
    },
    {
      id: 24,
      Title: "24. What are CSS variables?",
      answer: "CSS variables are entities defined by CSS authors that contain specific values to be reused throughout a document.",
      Sample: "CSS variables make it easy to manage color schemes and layouts.",
      code: `:root {
    --main-color: #3498db;
}

button {
    background-color: var(--main-color);
}`
    },
    {
      id: 25,
      Title: "25. What is the `calc()` function?",
      answer: "The `calc()` function allows you to perform calculations to set CSS property values.",
      Sample: "Use calc() for responsive layouts.",
      code: `div {
    width: calc(100% - 50px);
}`
    },
    {
      id: 26,
      Title: "26. How do you create a button style in CSS?",
      answer: "Define button styles using padding, background, border, and hover effects.",
      Sample: "Button styles enhance user interaction.",
      code: `button {
    padding: 10px 20px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
}

button:hover {
    background-color: darkblue;
}`
    },
    {
      id: 27,
      Title: "27. What are `rem` and `em` units?",
      answer: "`rem` and `em` are relative units for font sizes and spacing. `em` is relative to the parent element, while `rem` is relative to the root element.",
      Sample: "Using rem and em units allows for responsive typography.",
      code: `body {
    font-size: 16px;
}

h1 {
    font-size: 2rem; /* 32px */
}

p {
    font-size: 1.5em; /* 24px */
}`
    },
    {
      id: 28,
      Title: "28. How do you create a CSS transition effect?",
      answer: "You can create a transition effect by using the `transition` property on an element.",
      Sample: "Transitions help create smooth visual changes on user interaction.",
      code: `div {
    transition: transform 0.3s ease;
}

div:hover {
    transform: scale(1.1);
}`
    },
    {
      id: 29,
      Title: "29. What are media queries?",
      answer: "Media queries are a feature of CSS that allows content rendering to adapt to different conditions such as screen size.",
      Sample: "Use media queries to apply different styles based on the device's characteristics.",
      code: `@media (max-width: 600px) {
    body {
        background-color: lightgrey;
    }
}`
    },
    {
      id: 30,
      Title: "30. How do you create a shadow effect in CSS?",
      answer: "Use the `box-shadow` property to create shadow effects on elements.",
      Sample: "Shadows enhance the depth and aesthetics of the UI.",
      code: `div {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}`
    },
    {
      id: 31,
      Title: "31. What is the `filter` property?",
      answer: "The `filter` property applies graphical effects like blurring or color shifting to an element.",
      Sample: "Filters can be used for images and backgrounds.",
      code: `img {
    filter: blur(5px);
}`
    },
    {
      id: 32,
      Title: "32. What is the `transition` property?",
      answer: "The `transition` property allows you to change property values smoothly (over a given duration).",
      Sample: "Use transitions for smooth changes when an element's state changes.",
      code: `button {
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: red;
}`
    },
    {
      id: 33,
      Title: "33. How do you change the cursor style in CSS?",
      answer: "Use the `cursor` property to specify the type of cursor to be displayed when pointing over an element.",
      Sample: "Different cursor styles can indicate different actions.",
      code: `button {
    cursor: pointer;
}`
    },
    {
      id: 34,
      Title: "34. What is the `position` property?",
      answer: "The `position` property determines how an element is positioned in the document.",
      Sample: "Common values include static, relative, absolute, and fixed.",
      code: `div {
    position: absolute;
    top: 10px;
    left: 20px;
}`
    },
    {
      id: 35,
      Title: "35. What is the difference between `absolute` and `relative` positioning?",
      answer: "`relative` positioning positions an element relative to its normal position, while `absolute` positioning positions an element relative to its closest positioned ancestor.",
      Sample: "Absolute elements can overlap other elements.",
      code: `.relative {
    position: relative;
}

.absolute {
    position: absolute;
    top: 0;
    left: 0;
}`
    },
    {
      id: 36,
      Title: "36. How do you create a circular shape in CSS?",
      answer: "Set the border-radius property to 50% for a square element to create a circle.",
      Sample: "Circles can be used for buttons or image frames.",
      code: `div {
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 50%;
}`
    },
    {
      id: 37,
      Title: "37. How do you create a CSS dropdown menu?",
      answer: "Use nested lists and CSS to hide/show the dropdown items on hover.",
      Sample: "Dropdown menus enhance navigation.",
      code: `ul {
    list-style-type: none;
}

ul li {
    position: relative;
}

ul li:hover .dropdown {
    display: block;
}` 
    },
    {
      id: 38,
      Title: "38. What is the `white-space` property?",
      answer: "The `white-space` property controls how whitespace inside an element is handled.",
      Sample: "It can prevent text from wrapping or collapse multiple spaces.",
      code: `p {
    white-space: nowrap;
}`
    },
    {
      id: 39,
      Title: "39. What is the `clip-path` property?",
      answer: "The `clip-path` property allows you to create complex shapes by clipping an element to a specified path.",
      Sample: "Use clip-path to create unique visual effects.",
      code: `div {
    clip-path: circle(50%);
}`
    },
    {
      id: 40,
      Title: "40. What is the CSS `transform` property?",
      answer: "The `transform` property applies 2D or 3D transformations to elements, such as rotate, scale, skew, or translate.",
      Sample: "Use transform to change an element's shape or position.",
      code: `div {
    transform: rotate(45deg);
}`
    },
    {
      id: 41,
      Title: "41. How do you create a loading spinner using CSS?",
      answer: "You can create a simple loading spinner using CSS animations.",
      Sample: "Spinners enhance user experience by indicating loading states.",
      code: `.spinner {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`
    },
    {
      id: 42,
      Title: "42. What are CSS frameworks?",
      answer: "CSS frameworks are pre-prepared libraries that are meant to be used as a base for starting a project.",
      Sample: "Popular CSS frameworks include Bootstrap, Tailwind CSS, and Foundation.",
      code: `/* Example of including Bootstrap */
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`
    },
    {
      id: 43,
      Title: "43. What is the `text-align` property?",
      answer: "The `text-align` property specifies the horizontal alignment of text in an element.",
      Sample: "Common values are left, right, center, and justify.",
      code: `p {
    text-align: center;
}`
    },
    {
      id: 44,
      Title: "44. What is the `float` property?",
      answer: "The `float` property allows elements to float to the left or right of their container, allowing text and inline elements to wrap around them.",
      Sample: "Float is used for layouts and text wrapping.",
      code: `img {
    float: left;
    margin-right: 10px;
}`
    },
    {
      id: 45,
      Title: "45. How do you create a full-width layout?",
      answer: "To create a full-width layout, set the width of the element to 100% and remove any padding and margin.",
      Sample: "Full-width layouts are commonly used for headers or sections.",
      code: `header {
    width: 100%;
    margin: 0;
    padding: 0;
}`
    },
    {
      id: 46,
      Title: "46. What are CSS sprites?",
      answer: "CSS sprites are a technique to optimize web performance by combining multiple images into a single image.",
      Sample: "Sprites reduce the number of HTTP requests.",
      code: `.sprite {
    background-image: url('spritesheet.png');
    width: 50px; /* width of one sprite */
    height: 50px; /* height of one sprite */
}

.sprite1 { background-position: 0 0; }
.sprite2 { background-position: -50px 0; }`
    },
    {
      id: 47,
      Title: "47. What is the `opacity` property?",
      answer: "The `opacity` property sets the transparency level of an element.",
      Sample: "Values range from 0 (fully transparent) to 1 (fully opaque).",
      code: `div {
    opacity: 0.5;
}`
    },
    {
      id: 48,
      Title: "48. How do you create rounded corners in CSS?",
      answer: "Use the `border-radius` property to create rounded corners for elements.",
      Sample: "Rounded corners improve aesthetics and usability.",
      code: `div {
    border: 1px solid #000;
    border-radius: 10px;
}`
    },
    {
      id: 49,
      Title: "49. What is a CSS framework?",
      answer: "A CSS framework is a pre-prepared library that provides a base for styling web applications.",
      Sample: "Frameworks speed up development and ensure consistency.",
      code: `/* Including Tailwind CSS */
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">`
    },
    {
      id: 50,
      Title: "50. What are transitions in CSS?",
      answer: "Transitions are a way to create smooth changes in CSS property values over a specified duration.",
      Sample: "Transitions can improve user experience by creating a smoother visual effect.",
      code: `div {
    transition: all 0.3s ease;
}` 
    },
    {
      id: 51,
      Title: "51. What is the `align-items` property in Flexbox?",
      answer: "The `align-items` property defines the default behavior for how flex items are laid out along the cross axis.",
      Sample: "Common values include flex-start, flex-end, center, baseline, and stretch.",
      code: `.flex-container {
    display: flex;
    align-items: center; /* Aligns items to the center */
}`
    },
    {
      id: 52,
      Title: "52. How do you implement a CSS grid layout?",
      answer: "You can create a grid layout by setting display: grid on a container element and defining rows and columns.",
      Sample: "Grid layouts allow for complex arrangements of items.",
      code: `.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}`
    },
    {
      id: 53,
      Title: "53. What is the `justify-content` property in Flexbox?",
      answer: "The `justify-content` property defines how flex items are aligned along the main axis.",
      Sample: "Common values include flex-start, flex-end, center, space-between, and space-around.",
      code: `.flex-container {
    display: flex;
    justify-content: space-between; /* Space between items */
}`
    },
    {
      id: 54,
      Title: "54. What is the `gap` property in CSS Grid?",
      answer: "The `gap` property is used to set the spacing between grid items.",
      Sample: "This property simplifies the spacing management in grid layouts.",
      code: `.grid-container {
    display: grid;
    gap: 10px; /* Space between grid items */
}`
    },
    {
      id: 55,
      Title: "55. What is the `object-fit` property?",
      answer: "The `object-fit` property specifies how the content of a replaced element (like images) should be resized to fit its container.",
      Sample: "Common values include contain, cover, fill, and none.",
      code: `img {
    object-fit: cover; /* Image covers the container */
}`
    },
    {
      id: 56,
      Title: "56. What is the `position: sticky` property?",
      answer: "The `position: sticky` property allows an element to stick to a specific position while scrolling.",
      Sample: "Sticky positioning combines relative and fixed positioning.",
      code: `header {
    position: sticky;
    top: 0; /* Stick to the top */
}`
    },
    {
      id: 57,
      Title: "57. How do you create a CSS tooltip?",
      answer: "Tooltips can be created using the `::after` pseudo-element and absolute positioning.",
      Sample: "Tooltips provide additional information on hover.",
      code: `.tooltip {
    position: relative;
}

.tooltip::after {
    content: 'Tooltip text';
    position: absolute;
    background: black;
    color: white;
    padding: 5px;
    border-radius: 5px;
    bottom: 100%; /* Position above the element */
}`
    },
    {
      id: 58,
      Title: "58. How do you implement a media query for landscape orientation?",
      answer: "Use media queries to apply styles based on the device's orientation.",
      Sample: "Different styles can enhance usability on various devices.",
      code: `@media (orientation: landscape) {
    body {
        background-color: lightblue;
    }
}`
    },
    {
      id: 59,
      Title: "59. What are CSS transitions?",
      answer: "CSS transitions allow changes in CSS property values to occur smoothly over a specified duration.",
      Sample: "Use transitions for smooth effects on hover or state changes.",
      code: `div {
    transition: background-color 0.5s;
}

div:hover {
    background-color: blue;
}`
    },
    {
      id: 60,
      Title: "60. How do you change the text color on hover?",
      answer: "Use the `:hover` pseudo-class to change the text color when the mouse hovers over an element.",
      Sample: "Hover effects enhance interactivity.",
      code: `a:hover {
    color: red; /* Change text color on hover */
}`
    },
    {
      id: 61,
      Title: "61. How do you create a CSS sticky footer?",
      answer: "To create a sticky footer, use `position: sticky` or set the footer at the bottom of the viewport.",
      Sample: "Sticky footers remain visible at the bottom of the page.",
      code: `footer {
    position: sticky;
    bottom: 0;
}`
    },
    {
      id: 62,
      Title: "62. What is the `text-transform` property?",
      answer: "The `text-transform` property controls the capitalization of text.",
      Sample: "Common values include uppercase, lowercase, and capitalize.",
      code: `h1 {
    text-transform: uppercase; /* Make all letters uppercase */
}`
    },
    {
      id: 63,
      Title: "63. How do you create a CSS transition effect for height?",
      answer: "To transition height, you must set an explicit height on the element.",
      Sample: "Transitions can create smooth animations for height changes.",
      code: `div {
    height: 100px;
    transition: height 0.5s;
}

div:hover {
    height: 200px; /* Smooth transition to 200px */
}`
    },
    {
      id: 64,
      Title: "64. What are CSS animations?",
      answer: "CSS animations allow you to animate transitions between CSS styles over time.",
      Sample: "Animations can be triggered by events or occur automatically.",
      code: `@keyframes example {
    0% { transform: scale(1); }
    100% { transform: scale(1.5); }
}

div {
    animation: example 2s infinite; /* Infinite scaling animation */
}`
    },
    {
      id: 65,
      Title: "65. What is a CSS fallback?",
      answer: "CSS fallbacks are used to provide alternative styles if the primary styles are not supported.",
      Sample: "Fallbacks ensure compatibility across different browsers.",
      code: `body {
    background: #ff0000; /* Fallback color */
    background: linear-gradient(to right, #ff0000, #0000ff);
}`
    },
    {
      id: 66,
      Title: "66. How do you create a CSS grid template?",
      answer: "Define a grid layout using `grid-template-areas` for a named grid layout.",
      Sample: "Grid templates allow for more semantic layouts.",
      code: `.grid-container {
    display: grid;
    grid-template-areas: 
      'header header header'
      'main sidebar footer';
}`
    },
    {
      id: 67,
      Title: "67. What is the `max-width` property?",
      answer: "The `max-width` property sets the maximum width of an element.",
      Sample: "Use it to prevent elements from exceeding a certain width.",
      code: `div {
    max-width: 1200px; /* Maximum width of 1200px */
}`
    },
    {
      id: 68,
      Title: "68. How do you create a responsive image?",
      answer: "Set the `max-width` property to 100% for responsive images.",
      Sample: "Responsive images adapt to their container's width.",
      code: `img {
    max-width: 100%; /* Responsive image */
    height: auto;
}`
    },
    {
      id: 69,
      Title: "69. How do you implement a CSS framework?",
      answer: "You can implement a CSS framework by including it in your project, usually through a CDN or by downloading the files.",
      Sample: "Frameworks speed up development with pre-defined styles.",
      code: `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">`
    },
    {
      id: 70,
      Title: "70. What is the `align-content` property in Flexbox?",
      answer: "The `align-content` property defines how flex lines are aligned in the flex container.",
      Sample: "Values include flex-start, flex-end, center, space-between, and space-around.",
      code: `.flex-container {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between; /* Aligns lines within the flex container */
}`
    }
  ]





  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto  font-sans">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">CSS Basics and Concepts</h1>

      {array.map((item, index) => (
        <section key={item.id} className="bg-white mx-3 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">{item.Title}</h2>
          <p className="mb-2 text-gray-600"><strong>Answer:</strong> {item.answer}</p>
          <p className="mb-4 text-gray-600"><strong>Sample Wording:</strong> {item.Sample}</p>

          <h3 className="text-lg font-medium mb-2 text-gray-700">Code Example:</h3>
          <div className="relative bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
            <button 
              onClick={() => handleCopy(item.code, index)}
              className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
            >
              {copiedIndex === index ? "Copied!" : "Copy"}
            </button>
            <pre>
              <code className="language-css">{item.code}</code>
            </pre>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Css;

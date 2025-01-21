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

const Tailwind: React.FC = () => {
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
      Title: "1. What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build designs directly in your markup.",
      Sample:
        "Use the utility classes to style elements without writing custom CSS.",
      code: `<div className="bg-blue-500 text-white p-4">Hello, Tailwind!</div>`,
    },
    {
      id: 2,
      Title: "2. How do you install Tailwind CSS?",
      answer:
        "You can install Tailwind CSS via npm or Yarn by running 'npm install tailwindcss' or 'yarn add tailwindcss'.",
      Sample: "After installing, configure your tailwind.config.js.",
      code: `// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};`,
    },
    {
      id: 3,
      Title: "3. What are utility classes?",
      answer:
        "Utility classes are single-purpose classes that apply a specific style, allowing for rapid design without context.",
      Sample: "Examples include 'bg-red-500', 'text-lg', and 'flex'.",
      code: `<div className="flex items-center justify-between p-4 bg-gray-100">
  <span className="text-lg">Item 1</span>
  <span className="text-lg">Item 2</span>
</div>`,
    },
    {
      id: 4,
      Title: "4. How to customize Tailwind CSS?",
      answer:
        "You can customize Tailwind by modifying the tailwind.config.js file to add custom colors, fonts, etc.",
      Sample: "Add a custom color under theme.extend.",
      code: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1DA1F2',
      },
    },
  },
};`,
    },
    {
      id: 5,
      Title: "5. What is the purpose of the 'apply' directive?",
      answer:
        "The 'apply' directive allows you to use utility classes within your CSS files.",
      Sample: "This can help you create reusable styles.",
      code: `@tailwind base;
@tailwind components;
@tailwind utilities;

.button {
  @apply bg-blue-500 text-white p-2 rounded;
}`,
    },
    {
      id: 6,
      Title: "6. How do you implement responsive design?",
      answer:
        "Tailwind provides responsive utility classes by prefixing them with breakpoints (sm:, md:, lg:, xl:).",
      Sample:
        "This allows you to apply different styles at different screen sizes.",
      code: `<div className="bg-red-500 md:bg-blue-500 lg:bg-green-500 p-4">Responsive Background</div>`,
    },
    {
      id: 7,
      Title: "7. What is a dark mode in Tailwind CSS?",
      answer:
        "Dark mode can be enabled by adding a class to your HTML element and using the 'dark:' prefix for styles.",
      Sample: "This allows you to define styles specifically for dark mode.",
      code: `<div className="bg-white dark:bg-gray-800 p-4">Hello, World!</div>`,
    },
    {
      id: 8,
      Title: "8. How do you use Tailwind CSS with React?",
      answer:
        "You can use Tailwind CSS directly in your JSX as className attributes.",
      Sample: "Simply add the Tailwind classes to your components.",
      code: `<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>`,
    },
    {
      id: 9,
      Title: "9. What is the difference between 'flex' and 'grid' in Tailwind?",
      answer:
        "Flex is a one-dimensional layout, while Grid is a two-dimensional layout system.",
      Sample:
        "Use flex for aligning items in a row or column and grid for complex layouts.",
      code: `<div className="grid grid-cols-3 gap-4">
  <div className="bg-red-500">1</div>
  <div className="bg-blue-500">2</div>
  <div className="bg-green-500">3</div>
</div>`,
    },
    {
      id: 10,
      Title: "10. How do you add hover effects?",
      answer: "Hover effects can be added using the 'hover:' prefix.",
      Sample: "You can change colors, sizes, etc., on hover.",
      code: `<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Hover Me
</button>`,
    },
    {
      id: 11,
      Title: "11. How to use Tailwind with PostCSS?",
      answer:
        "You can integrate Tailwind CSS with PostCSS by installing necessary plugins and configuring PostCSS.",
      Sample: "Add tailwindcss and autoprefixer to your PostCSS plugins.",
      code: `// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`,
    },
    {
      id: 12,
      Title: "12. What are Tailwind variants?",
      answer:
        "Variants are used to define styles based on states like hover, focus, and active.",
      Sample: "They help create interactive UI elements.",
      code: `<button className="bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
  Click Me
</button>`,
    },
    {
      id: 13,
      Title: "13. What is JIT mode in Tailwind CSS?",
      answer:
        "JIT (Just-In-Time) mode generates styles on-demand as you author your HTML.",
      Sample: "This allows for faster builds and smaller CSS files.",
      code: `// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
};`,
    },
    {
      id: 14,
      Title: "14. How to use custom fonts in Tailwind?",
      answer:
        "You can use custom fonts by extending the theme in your tailwind.config.js file.",
      Sample: "Add the font family to the extend object.",
      code: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Your Custom Font', 'sans-serif'],
      },
    },
  },
};`,
    },
    {
      id: 15,
      Title: "15. How to manage forms with Tailwind?",
      answer: "Use Tailwind utility classes to style form elements.",
      Sample: "You can easily customize inputs, buttons, and labels.",
      code: `<input className="border border-gray-300 p-2 rounded" placeholder="Enter your name" />`,
    },
    {
      id: 16,
      Title: "16. How to implement animations in Tailwind?",
      answer:
        "You can implement animations by using the 'transition' utility classes.",
      Sample: "Control transitions for hover and focus states.",
      code: `<button className="transition transform hover:scale-105 bg-blue-500 text-white p-2 rounded">
  Hover Me
</button>`,
    },
    {
      id: 17,
      Title: "17. How to create a responsive navbar?",
      answer:
        "You can create a responsive navbar by using flex and hiding/showing items based on screen size.",
      Sample: "Use the 'hidden' and 'block' classes to control visibility.",
      code: `<nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
  <div className="text-lg">Logo</div>
  <div className="hidden md:flex space-x-4">
    <a className="hover:underline" href="#">Home</a>
    <a className="hover:underline" href="#">About</a>
  </div>
</nav>`,
    },
    {
      id: 18,
      Title: "18. How to customize colors in Tailwind?",
      answer:
        "Customize colors in the tailwind.config.js under the theme.colors object.",
      Sample: "Add your custom color definitions.",
      code: `// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      primary: '#1DA1F2',
      secondary: '#14171A',
    },
  },
};`,
    },
    {
      id: 19,
      Title: "19. How to create a grid layout?",
      answer:
        "Use the grid utilities provided by Tailwind to create flexible grid layouts.",
      Sample: "Define the number of columns and gaps.",
      code: `<div className="grid grid-cols-3 gap-4">
  <div className="bg-red-500">1</div>
  <div className="bg-blue-500">2</div>
  <div className="bg-green-500">3</div>
</div>`,
    },
    {
      id: 20,
      Title: "20. How to add shadows in Tailwind?",
      answer: "Add shadows using the shadow utility classes.",
      Sample: "Use shadow-md or shadow-lg for different effects.",
      code: `<div className="shadow-lg p-4 bg-white">This has a shadow</div>`,
    },
    {
      id: 21,
      Title: "21. What are plugins in Tailwind?",
      answer:
        "Plugins are used to add additional utilities and components to Tailwind.",
      Sample: "You can create custom plugins or use community plugins.",
      code: `// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
  ],
};`,
    },
    {
      id: 22,
      Title: "22. How to use Tailwind with TypeScript?",
      answer:
        "Tailwind can be used with TypeScript by following the same setup process.",
      Sample: "Ensure your JSX files are typed correctly.",
      code: `import React from 'react';

const MyComponent: React.FC = () => {
  return <div className="text-center">Hello TypeScript!</div>;
};`,
    },
    {
      id: 23,
      Title: "23. How to use Tailwind with Next.js?",
      answer:
        "Integrate Tailwind CSS into your Next.js project by installing and configuring it.",
      Sample: "Include Tailwind in your global CSS file.",
      code: `// pages/_app.tsx
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;`,
    },
    {
      id: 24,
      Title: "24. What is the 'divide' utility?",
      answer: "The 'divide' utility applies a border between child elements.",
      Sample: "Useful for creating separation between items.",
      code: `<ul className="divide-y divide-gray-300">
  <li className="py-2">Item 1</li>
  <li className="py-2">Item 2</li>
</ul>`,
    },
    {
      id: 25,
      Title: "25. How to use Tailwind's 'space' utilities?",
      answer: "Space utilities control margin or padding between elements.",
      Sample: "Use space-x-4 for horizontal spacing.",
      code: `<div className="flex space-x-4">
  <div className="bg-red-500 p-4">1</div>
  <div className="bg-blue-500 p-4">2</div>
</div>`,
    },
    {
      id: 26,
      Title: "26. How to customize breakpoints?",
      answer:
        "Customize breakpoints in the tailwind.config.js file under theme.screens.",
      Sample: "Define your custom breakpoint values.",
      code: `// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
};`,
    },
    {
      id: 27,
      Title: "27. How to use 'important' utilities?",
      answer: "Use the '!important' variant to force a utility's style.",
      Sample: "Use it when overriding styles.",
      code: `<div className="bg-blue-500 !text-white">Important Text</div>`,
    },
    {
      id: 28,
      Title: "28. How to create a circular image with Tailwind?",
      answer: "Use the rounded-full utility class to create circular images.",
      Sample: "Set width and height to make it circular.",
      code: `<img className="w-24 h-24 rounded-full" src="image-url" alt="Circular" />`,
    },
    {
      id: 29,
      Title: "29. How to use Tailwind for accessibility?",
      answer:
        "Use proper ARIA attributes and semantic HTML with Tailwind classes.",
      Sample: "Ensure elements are keyboard navigable.",
      code: `<button className="bg-blue-500 text-white py-2 px-4 rounded" aria-label="Close">
  Close
</button>`,
    },
    {
      id: 30,
      Title: "30. What is the 'ring' utility?",
      answer:
        "The 'ring' utility adds a box-shadow-like outline around elements.",
      Sample: "Useful for focus states.",
      code: `<button className="ring ring-blue-500 focus:ring-2">Ring Button</button>`,
    },
    {
      id: 31,
      Title: "31. How to create a loading spinner?",
      answer:
        "You can create a loading spinner using Tailwind's border and rounded utilities.",
      Sample: "Customize the spinner's size and colors.",
      code: `<div className="border-4 border-t-4 border-blue-500 rounded-full animate-spin w-16 h-16"></div>`,
    },
    {
      id: 32,
      Title: "32. How to create tooltips in Tailwind?",
      answer: "Tooltips can be created using Tailwind's positioning utilities.",
      Sample: "Use absolute positioning for tooltips.",
      code: `<div className="relative inline-block">
  <button className="bg-blue-500 text-white p-2">Hover me</button>
  <div className="absolute hidden bg-gray-700 text-white text-xs rounded p-1 -top-8 left-1/2 transform -translate-x-1/2">Tooltip text</div>
</div>`,
    },
    {
      id: 33,
      Title: "33. How to create modals with Tailwind?",
      answer:
        "You can create modals by using fixed positioning and background overlays.",
      Sample: "Control visibility with state management.",
      code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
  <div className="bg-white p-5 rounded-lg">This is a modal</div>
</div>`,
    },
    {
      id: 34,
      Title: "34. How to implement a card component?",
      answer:
        "Use Tailwind classes to create card components with shadows and rounded corners.",
      Sample: "Add hover effects for interactivity.",
      code: `<div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
  <img className="w-full" src="image-url" alt="Card image" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Card Title</div>
    <p className="text-gray-700 text-base">Some description about the card.</p>
  </div>
</div>`,
    },
    {
      id: 35,
      Title: "35. How to style tables with Tailwind?",
      answer:
        "Tailwind provides utilities to style tables, including borders, padding, and hover effects.",
      Sample: "Use the border-collapse class for better styling.",
      code: `<table className="min-w-full border-collapse border border-gray-200">
  <thead>
    <tr>
      <th className="border border-gray-200 p-4">Header 1</th>
      <th className="border border-gray-200 p-4">Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hover:bg-gray-100">
      <td className="border border-gray-200 p-4">Row 1</td>
      <td className="border border-gray-200 p-4">Data 1</td>
    </tr>
  </tbody>
</table>`,
    },
    {
      id: 36,
      Title: "36. How to create breadcrumbs in Tailwind?",
      answer: "Breadcrumbs can be styled using flex and spacing utilities.",
      Sample: "Use separators for better visibility.",
      code: `<nav className="flex space-x-2">
  <a href="#" className="text-blue-500">Home</a>
  <span>/</span>
  <a href="#" className="text-blue-500">Library</a>
</nav>`,
    },
    {
      id: 37,
      Title: "37. How to create pagination with Tailwind?",
      answer:
        "Use flex and spacing utilities to create a pagination component.",
      Sample: "Add hover effects for interactivity.",
      code: `<nav className="flex space-x-2">
  <a href="#" className="border border-gray-300 px-4 py-2 rounded">1</a>
  <a href="#" className="border border-gray-300 px-4 py-2 rounded">2</a>
</nav>`,
    },
    {
      id: 38,
      Title: "38. How to create a footer with Tailwind?",
      answer: "Footers can be created using flex and spacing utilities.",
      Sample: "Style it with background colors and text alignment.",
      code: `<footer className="bg-gray-800 text-white p-4">
  <div className="text-center">© 2024 Your Company</div>
</footer>`,
    },
    {
      id: 39,
      Title: "39. How to style lists with Tailwind?",
      answer: "Use utilities for list styles, including padding and margin.",
      Sample: "Customize bullet points using list-none.",
      code: `<ul className="list-disc pl-5">
  <li className="pb-2">Item 1</li>
  <li>Item 2</li>
</ul>`,
    },
    {
      id: 40,
      Title: "40. How to implement a search bar with Tailwind?",
      answer:
        "Create a search bar using input and button elements styled with Tailwind.",
      Sample: "Customize its appearance using utility classes.",
      code: `<div className="flex space-x-2">
  <input className="border border-gray-300 p-2 rounded" type="text" placeholder="Search..." />
  <button className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
</div>`,
    },
    {
      id: 41,
      Title: "41. How to create an accordion component?",
      answer:
        "Use Tailwind's transition and hidden utilities to create an accordion.",
      Sample: "Control visibility using state management.",
      code: `<div>
  <button className="bg-gray-200 w-full text-left p-4">Toggle</button>
  <div className="hidden">
    <p>Accordion content goes here.</p>
  </div>
</div>`,
    },
    {
      id: 42,
      Title: "42. How to create a sticky header?",
      answer: "Use fixed positioning to create a sticky header with Tailwind.",
      Sample: "Make it responsive with utility classes.",
      code: `<header className="fixed top-0 w-full bg-white shadow">Header Content</header>`,
    },
    {
      id: 43,
      Title: "43. How to create a sidebar?",
      answer: "Create a sidebar using flex and fixed positioning utilities.",
      Sample: "Customize it with background colors.",
      code: `<aside className="fixed left-0 top-0 w-64 h-full bg-gray-800 text-white">Sidebar</aside>`,
    },
    {
      id: 44,
      Title: "44. How to create a notification banner?",
      answer:
        "Use fixed positioning and background utilities for a notification banner.",
      Sample: "Style it for different notification types.",
      code: `<div className="fixed top-0 w-full bg-red-500 text-white p-4">This is a notification</div>`,
    },
    {
      id: 45,
      Title: "45. How to implement a toggle switch?",
      answer:
        "Create a toggle switch using input and label styled with Tailwind.",
      Sample: "Control its state using JavaScript.",
      code: `<label className="inline-flex items-center">
  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
  <span className="ml-2">Toggle me</span>
</label>`,
    },
    {
      id: 46,
      Title: "46. How to use Tailwind with Vue.js?",
      answer:
        "Integrate Tailwind CSS in your Vue.js project by following the installation steps.",
      Sample: "Include Tailwind in your main entry file.",
      code: `// main.js
import Vue from 'vue';
import App from './App.vue';
import 'tailwindcss/tailwind.css';

new Vue({
  render: h => h(App),
}).$mount('#app');`,
    },
    {
      id: 47,
      Title: "47. How to create a countdown timer?",
      answer: "Use Tailwind to style a countdown timer component.",
      Sample: "Control the display using JavaScript.",
      code: `<div className="text-2xl font-bold">10:00</div>`,
    },
    {
      id: 48,
      Title: "48. How to create a progress bar?",
      answer: "Style a progress bar using divs and Tailwind utilities.",
      Sample: "Animate its width based on progress.",
      code: `<div className="w-full bg-gray-200">
  <div className="bg-blue-500 h-2" style={{ width: '50%' }}></div>
</div>`,
    },
    {
      id: 49,
      Title: "49. How to create a timeline?",
      answer: "Use flex and positioning utilities to create a timeline layout.",
      Sample: "Style it with different colors for events.",
      code: `<div className="relative">
  <div className="absolute left-1/2 transform -translate-x-1/2 h-full border border-gray-300"></div>
  <div className="flex justify-start">
    <div className="bg-blue-500 text-white p-2 rounded-full">Event 1</div>
  </div>
</div>`,
    },
    {
      id: 50,
      Title: "50. How to create a loading skeleton?",
      answer: "Use Tailwind classes to create a loading skeleton effect.",
      Sample: "Animate it for a better user experience.",
      code: `<div className="animate-pulse bg-gray-300 h-12 w-full rounded-md"></div>`,
    },
    {
      id: 51,
      Title: "51. How to use Tailwind CSS for dark mode?",
      answer:
        "Enable dark mode by setting the mode in tailwind.config.js and using dark variant classes.",
      Sample: "This allows you to define styles for dark mode.",
      code: `// tailwind.config.js
module.exports = {
  darkMode: 'class',
};`,
    },
    {
      id: 52,
      Title: "52. How to integrate Tailwind with Laravel?",
      answer:
        "Install Tailwind CSS in your Laravel project via npm and configure it in your webpack.mix.js.",
      Sample: "Use Tailwind classes in your Blade templates.",
      code: `// webpack.mix.js
mix.js('resources/js/app.js', 'public/js')
   .postCss('resources/css/app.css', 'public/css', [
       require('tailwindcss'),
   ]);`,
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
            Tailwind Programming Guide
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

export default Tailwind;

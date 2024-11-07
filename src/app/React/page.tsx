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

const React: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const array: Question[] = [
    {
      id: 1,
      Title: "1. What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
      Sample: "It allows developers to create large web applications that can change data without reloading the page.",
      code: `import React from 'react';`
    },
    {
      id: 2,
      Title: "2. What are components in React?",
      answer: "Components are reusable pieces of UI that can be defined as JavaScript functions or classes.",
      Sample: "Components can manage their own state and accept props.",
      code: `function MyComponent() { 
      return <div>Hello, World!</div>;
       }`
    },
    {
      id: 3,
      Title: "3. What is state in React?",
      answer: "State is a built-in object that stores property values that belong to a component.",
      Sample: "When a state object changes, the component re-renders.",
      code: `const [count, setCount] = useState(0);`
    },
    {
      id: 4,
      Title: "4. What are props in React?",
      answer: "Props are short for properties and are used to pass data from one component to another.",
      Sample: "Props are read-only and cannot be modified by the child component.",
      code: `function Greeting(props) {
      return <h1>Hello, {props.name}</h1>; 
      }`
    },
    {
      id: 5,
      Title: "5. What is JSX?",
      answer: "JSX is a syntax extension that looks similar to HTML and is used in React to describe the UI.",
      Sample: "JSX makes it easier to write and visualize the UI structure.",
      code: `const element = <h1>Hello, World!</h1>;`
    },
    {
      id: 6,
      Title: "6. What is the Virtual DOM?",
      answer: "The Virtual DOM is a lightweight copy of the actual DOM that React uses to optimize updates.",
      Sample: "It allows React to calculate the most efficient way to update the UI.",
      code: `const element = <h1>Hello, World!</h1>; 
      ReactDOM.render(element, document.getElementById('root'));`
    },
    {
      id: 7,
      Title: "7. What are hooks in React?",
      answer: "Hooks are functions that let you use state and other React features in functional components.",
      Sample: "The most common hooks are useState and useEffect.",
      code: `useEffect(() => { /* effect code */ }, []);`
    },
    {
      id: 8,
      Title: "8. What is the useEffect hook?",
      answer: "useEffect is a hook that lets you perform side effects in function components.",
      Sample: "It can be used for data fetching, subscriptions, or manually changing the DOM.",
      code: `useEffect(() => { 
      fetchData(); 
      }, []);`
    },
    {
      id: 9,
      Title: "9. What is the useState hook?",
      answer: "useState is a hook that lets you add state to functional components.",
      Sample: "It returns a stateful value and a function to update it.",
      code: `const [count, setCount] = useState(0);`
    },
    {
      id: 10,
      Title: "10. What is conditional rendering in React?",
      answer: "Conditional rendering in React allows you to render different UI elements based on the state or props.",
      Sample: "It can be achieved using if statements or ternary operators.",
      code: `{isLoggedIn ? <Dashboard /> : <Login />}`
    },
    {
      id: 11,
      Title: "11. What is the purpose of keys in React?",
      answer: "Keys help React identify which items have changed, are added, or are removed.",
      Sample: "Keys should be unique among siblings but can be reused in different parts of the component tree.",
      code: `{array.map(item => <ListItem key={item.id} value={item} />)}`
    },
    {
      id: 12,
      Title: "12. What is lifting state up in React?",
      answer: "Lifting state up is the process of moving state from a child component to a parent component.",
      Sample: "It allows for shared state between multiple components.",
      code: `function Parent() { 
      const [value, setValue] = useState(0); 
      return <Child value={value} onChange={setValue} />; 
      }`
    },
    {
      id: 13,
      Title: "13. What are controlled components?",
      answer: "Controlled components are form elements whose value is controlled by React state.",
      Sample: "They provide a single source of truth for form data.",
      code: `<input value={value} onChange={e => setValue(e.target.value)} />`
    },
    {
      id: 14,
      Title: "14. What are uncontrolled components?",
      answer: "Uncontrolled components store their own state internally and do not rely on React state.",
      Sample: "They can be accessed using refs.",
      code: `<input ref={inputRef} />`
    },
    {
      id: 15,
      Title: "15. What is context in React?",
      answer: "Context is a way to pass data through the component tree without props drilling.",
      Sample: "It is useful for global data like themes or user information.",
      code: `const ThemeContext = React.createContext('light');`
    },
    {
      id: 16,
      Title: "16. What are higher-order components (HOCs)?",
      answer: "HOCs are functions that take a component and return a new component with additional props or functionality.",
      Sample: "They are used for cross-cutting concerns like logging or authentication.",
      code: `function withLogger(WrappedComponent) { 
      return props => { console.log(props); 
      return <WrappedComponent {...props} />; 
      }; 
      }`
    },
    {
      id: 17,
      Title: "17. What is a React fragment?",
      answer: "A React fragment is a way to group multiple elements without adding extra nodes to the DOM.",
      Sample: "It helps in avoiding unnecessary divs.",
      code: `<React.Fragment><ChildA /><ChildB /></React.Fragment>`
    },
    {
      id: 18,
      Title: "18. What is the purpose of the useMemo hook?",
      answer: "useMemo is a hook that memorizes the result of a calculation between re-renders.",
      Sample: "It can improve performance for expensive calculations.",
      code: `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`
    },
    {
      id: 19,
      Title: "19. What is the purpose of the useCallback hook?",
      answer: "useCallback is a hook that returns a memoized callback function.",
      Sample: "It is useful for preventing unnecessary re-renders of child components.",
      code: `const memoizedCallback = useCallback(() => { 
      doSomething(a, b); }, [a, b]);`
    },
    {
      id: 20,
      Title: "20. What is the difference between functional and class components?",
      answer: "Functional components are simpler and easier to understand, while class components can manage their own state and lifecycle methods.",
      Sample: "Functional components can use hooks for state management.",
      code: `class MyComponent extends React.Component { render() { 
      return <div>Hello!</div>; 
      } 
      }`
    },
    {
      id: 21,
      Title: "21. What is a custom hook in React?",
      answer: "A custom hook is a function that utilizes React hooks to encapsulate logic and can be reused across components.",
      Sample: "It promotes code reuse and separation of concerns.",
      code: `function useFetch(url) { const [data, setData] = useState([]); 
      useEffect(() => { 
      fetch(url).then(res => res.json()).then(setData); 
      }, [url]); return data; }`
    },
    {
      id: 22,
      Title: "22. What is the useRef hook?",
      answer: "useRef is a hook that returns a mutable ref object, which persists for the full lifetime of the component.",
      Sample: "It can be used to access DOM elements or to store mutable values.",
      code: `const inputRef = useRef(null);`
    },
    {
      id: 23,
      Title: "23. What is PropTypes?",
      answer: "PropTypes is a library for type-checking the props of a component.",
      Sample: "It helps catch bugs related to props during development.",
      code: `MyComponent.propTypes = { name: PropTypes.string.isRequired };`
    },
    {
      id: 24,
      Title: "24. What is the purpose of the componentDidMount lifecycle method?",
      answer: "componentDidMount is called after a component is mounted and can be used for initial data fetching or DOM manipulation.",
      Sample: "It is part of class components' lifecycle methods.",
      code: `componentDidMount() { 
      this.fetchData(); 
      }`
    },
    {
      id: 25,
      Title: "25. What is the purpose of the componentDidUpdate lifecycle method?",
      answer: "componentDidUpdate is called after updates are made to a component, allowing you to respond to prop or state changes.",
      Sample: "It can be used to trigger side effects based on updates.",
      code: `componentDidUpdate(prevProps) { 
      if (this.props.id !== prevProps.id) { 
      this.fetchData(); 
      } 
      }`
    },
    {
      id: 26,
      Title: "26. What is the purpose of the componentWillUnmount lifecycle method?",
      answer: "componentWillUnmount is called before a component is unmounted, allowing for cleanup tasks.",
      Sample: "It can be used to remove event listeners or cancel network requests.",
      code: `componentWillUnmount() { this.cleanUp(); }`
    },
    {
      id: 27,
      Title: "27. What is a callback ref?",
      answer: "A callback ref is a function that receives the DOM element as its argument, allowing you to perform actions on it.",
      Sample: "It can be used to access and manipulate DOM elements.",
      code: `const myRef = node => { 
      if (node) { 
      node.focus(); 
      } };`
    },
    {
      id: 28,
      Title: "28. What is the purpose of error boundaries?",
      answer: "Error boundaries are components that catch JavaScript errors in their child component tree, allowing you to handle errors gracefully.",
      Sample: "They prevent crashes of the entire application.",
      code: `class ErrorBoundary extends React.Component { componentDidCatch(error, info) { logErrorToMyService(error, info); 
      } render() { 
       return this.props.children; 
       } }`
    },
    {
      id: 29,
      Title: "29. What is the purpose of React Router?",
      answer: "React Router is a library that enables routing in React applications, allowing for navigation between different components.",
      Sample: "It helps in creating single-page applications with multiple views.",
      code: `import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';`
    },
    {
      id: 30,
      Title: "30. What are the differences between controlled and uncontrolled components?",
      answer: "Controlled components use React state to manage form data, while uncontrolled components manage their own state.",
      Sample: "Controlled components provide better validation and control over the data.",
      code: `function ControlledInput() { 
      const [value, setValue] = useState(''); 
      return <input value={value} onChange={e => setValue(e.target.value)} />; 
      }`
    },
    {
      id: 31,
      Title: "31. How does 'forEach' work in JavaScript?",
      answer: "'forEach' is an array method that iterates over each element in an array, performing a callback function on each item.",
      Sample: "Unlike 'map', it doesn't return a new array.",
      code: `const numbers = [1, 2, 3];
  numbers.forEach((num) => {
    console.log(num * 2);
  }); // Output: 2, 4, 6`
    },
    {
      id: 32,
      Title: "32. How do you use 'map' in JavaScript and React?",
      answer: "'map' creates a new array by applying a function to each element of an original array.",
      Sample: "In React, 'map' is commonly used to render lists.",
      code: `const numbers = [1, 2, 3];
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled); // Output: [2, 4, 6]
  
  // React example
  const listItems = numbers.map((num) => <li key={num}>{num}</li>);`
    },
    {
      id: 33,
      Title: "33. How do you use 'if-else' statements in JavaScript?",
      answer: "'if-else' statements conditionally execute code blocks based on boolean expressions.",
      Sample: "'if-else' is essential for controlling flow in JavaScript and React components.",
      code: `const num = 10;
  if (num > 5) {
    console.log("Greater than 5");
  } else {
    console.log("Less than or equal to 5");
  }`
    },
    {
      id: 34,
      Title: "34. What is 'useState' and how do you use it?",
      answer: "'useState' is a React hook for adding state to functional components.",
      Sample: "It returns an array with the state variable and a function to update it.",
      code: `import { useState } from 'react';
  const Counter = () => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  };`
    },
    {
      id: 35,
      Title: "35. What is 'useEffect' and how do you use it?",
      answer: "'useEffect' is a hook that runs side effects in functional components.",
      Sample: "It runs after render and can depend on specific variables.",
      code: `import { useState, useEffect } from 'react';
  const Timer = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => setCount(count + 1), 1000);
      return () => clearInterval(timer);
    }, [count]);
    return <p>{count}</p>;
  };`
    },
    {
      id: 36,
      Title: "36. How does conditional rendering work in React?",
      answer: "Conditional rendering in React shows or hides components based on conditions.",
      Sample: "You can use 'if-else', the ternary operator, or logical && for conditional rendering.",
      code: `const isLoggedIn = true;
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );`
    },
    {
      id: 37,
      Title: "37. How do you use 'for' loops in JavaScript?",
      answer: "The 'for' loop runs a block of code a specified number of times.",
      Sample: "It's useful for iterating over arrays with specific start, stop, and step values.",
      code: `for (let i = 0; i < 5; i++) {
    console.log(i);
  } // Output: 0, 1, 2, 3, 4`
    },
    {
      id: 38,
      Title: "38. What is 'useRef' and how do you use it?",
      answer: "'useRef' is a hook for persisting a mutable reference without re-rendering the component.",
      Sample: "It's commonly used for DOM manipulation or storing instance values.",
      code: `import { useRef } from 'react';
  const InputFocus = () => {
    const inputRef = useRef(null);
    return (
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      </div>
    );
  };`
    },
    {
      id: 39,
      Title: "39. How does 'map' differ from 'forEach' in JavaScript?",
      answer: "'map' returns a new array, while 'forEach' executes a function on each array element without returning anything.",
      Sample: "Use 'map' when transforming arrays and 'forEach' for side effects like logging.",
      code: `const numbers = [1, 2, 3];
  const doubled = numbers.map(num => num * 2); // [2, 4, 6]
  numbers.forEach(num => console.log(num * 2)); // Logs: 2, 4, 6`
    },
    {
      id: 40,
      Title: "40. What is 'useContext' and how is it used?",
      answer: "'useContext' is a React hook that accesses context values within components.",
      Sample: "It simplifies passing values through the component tree without props.",
      code: `import { createContext, useContext } from 'react';
  const MyContext = createContext("Hello");
  const MyComponent = () => {
    const value = useContext(MyContext);
    return <p>{value}</p>;
  };`
    },
    {
      id: 41,
      Title: "31. What is the significance of keys in lists?",
      answer: "Keys help React identify which items have changed, are added, or are removed, optimizing rendering.",
      Sample: "Each key should be unique to avoid potential bugs.",
      code: `{items.map(item => <Item key={item.id} {...item} />)}`
    },
    {
      id: 42,
      Title: "32. What are the advantages of using TypeScript with React?",
      answer: "TypeScript provides static typing, better tooling, and improved code maintainability in React applications.",
      Sample: "It helps catch errors during development rather than at runtime.",
      code: `const MyComponent: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>;`
    },
    {
      id: 43,
      Title: "33. How do you handle forms in React?",
      answer: "Forms in React can be handled with controlled components using state or using libraries like Formik.",
      Sample: "Controlled components provide a single source of truth.",
      code: `<form onSubmit={handleSubmit}><input value={inputValue} onChange={e => setInputValue(e.target.value)} /></form>`
    },
    {
      id: 44,
      Title: "34. What is React.memo?",
      answer: "React.memo is a higher-order component that memoizes a functional component, preventing unnecessary re-renders.",
      Sample: "It is useful for optimizing performance in large applications.",
      code: `const MemoizedComponent = React.memo(MyComponent);`
    },
    {
      id: 45,
      Title: "35. What are side effects in React?",
      answer: "Side effects are operations that can affect other components outside the function component, like data fetching or subscriptions.",
      Sample: "They are typically managed with the useEffect hook.",
      code: `useEffect(() => { 
      const subscription = api.subscribe(); 
      return () => subscription.unsubscribe(); 
      }, []);`
    },
    {
      id: 46,
      Title: "36. What is the significance of React.StrictMode?",
      answer: "React.StrictMode is a wrapper that helps highlight potential problems in an application during development.",
      Sample: "It does not affect the production build but provides warnings for unsafe lifecycle methods and other issues.",
      code: `<React.StrictMode><App /></React.StrictMode>`
    },
    {
      id: 47,
      Title: "37. How do you optimize performance in a React application?",
      answer: "Performance can be optimized through techniques like memoization, code splitting, and lazy loading.",
      Sample: "Using React.lazy and Suspense for dynamic imports can enhance performance.",
      code: `const LazyComponent = React.lazy(() => import('./LazyComponent'));`
    },
    {
      id: 48,
      Title: "38. What is the purpose of React DevTools?",
      answer: "React DevTools is a browser extension that helps in debugging React applications.",
      Sample: "It allows inspecting the React component tree and their props and state.",
      code: `// Install React DevTools as a browser extension.`
    },
    {
      id: 49,
      Title: "39. What are portals in React?",
      answer: "Portals provide a way to render children into a DOM node outside of their parent component hierarchy.",
      Sample: "They are useful for modals or tooltips that need to escape overflow or fixed positioning.",
      code: `ReactDOM.createPortal(<Modal />, document.getElementById('modal-root'));`
    },
    {
      id: 50,
      Title: "40. What is the purpose of the key attribute in React?",
      answer: "The key attribute is used to give a unique identity to elements in a list to optimize re-rendering.",
      Sample: "It helps React differentiate between elements for efficient updates.",
      code: `<ul>{items.map(item => <li key={item.id}>{item.text}</li>)}</ul>`
    },
      
  {
    id: 51,
    Title: "41. What is the difference between props and state?",
    answer: "Props are passed to components, while state is managed within the component.",
    Sample: "Props are immutable, while state can change over time.",
    code: `function MyComponent({ propValue }) { 
    const [stateValue, setStateValue] = useState(0); 
    return <div>{propValue} - {stateValue}</div>; 
    }`
  },
  {
    id: 52,
    Title: "42. What is the purpose of the shouldComponentUpdate lifecycle method?",
    answer: "shouldComponentUpdate determines if a component should re-render or not.",
    Sample: "It is used for performance optimization in class components.",
    code: `shouldComponentUpdate(nextProps, nextState) { 
    return this.props.value !== nextProps.value; 
    }`
  },
  {
    id: 53,
    Title: "43. How do you implement routing in React?",
    answer: "Routing in React can be implemented using React Router, which provides components like Route and Link.",
    Sample: "It allows navigation between different views in a single-page application.",
    code: `import { BrowserRouter as Router, Route, Link } from 'react-router-dom';`
  },
  {
    id: 54,
    Title: "44. What are React Hooks?",
    answer: "Hooks are special functions that allow you to use state and other React features in functional components.",
    Sample: "They enable you to use state without writing a class.",
    code: `const [state, setState] = useState(initialState);`
  },
  {
    id: 55,
    Title: "45. What is the significance of the component key in React?",
    answer: "Keys help React identify which items have changed, are added, or are removed in lists.",
    Sample: "They provide a unique identity to each list item for efficient rendering.",
    code: `{items.map(item => <ListItem key={item.id} value={item} />)}`
  },
  {
    id: 56,
    Title: "46. How do you create a simple context in React?",
    answer: "Context allows you to share values between components without passing props through every level of the tree.",
    Sample: "You can create a context using React.createContext().",
    code: `const MyContext = React.createContext(defaultValue);`
  },
  {
    id: 57,
    Title: "47. What is the purpose of the useContext hook?",
    answer: "useContext is a hook that lets you subscribe to React context without introducing nesting.",
    Sample: "It simplifies consuming context values in functional components.",
    code: `const value = useContext(MyContext);`
  },
  {
    id: 58,
    Title: "48. How do you implement error boundaries in React?",
    answer: "Error boundaries are React components that catch JavaScript errors in their child components.",
    Sample: "They prevent crashes by rendering a fallback UI instead.",
    code: `class ErrorBoundary extends React.Component { componentDidCatch(error, info) { /* log error */ } render() { return this.props.children; } }`
  },
  {
    id: 59,
    Title: "49. What is the significance of keys in React?",
    answer: "Keys help React identify which items have changed, are added, or are removed in lists.",
    Sample: "They provide a unique identity to each list item for efficient rendering.",
    code: `{items.map(item => <ListItem key={item.id} value={item} />)}`
  },
  {
    id: 60,
    Title: "50. What is React.lazy and React.Suspense?",
    answer: "React.lazy allows you to dynamically import components, and React.Suspense allows you to wait for these components to load.",
    Sample: "They are used for code splitting and lazy loading.",
    code: `const LazyComponent = React.lazy(() => import('./LazyComponent'));`
  },
  {
    id: 61,
    Title: "51. What is the purpose of refs in React?",
    answer: "Refs provide a way to access and interact with DOM elements or class component instances directly.",
    Sample: "They can be used for managing focus, text selection, or media playback.",
    code: `const inputRef = useRef(null);`
  },
  {
    id: 62,
    Title: "52. What is the purpose of the useLayoutEffect hook?",
    answer: "useLayoutEffect is similar to useEffect but fires synchronously after all DOM mutations.",
    Sample: "It is used for reading layout from the DOM and synchronously re-rendering.",
    code: `useLayoutEffect(() => { /* read layout */ }, []);`
  },
  {
    id: 63,
    Title: "53. How do you handle asynchronous operations in React?",
    answer: "Asynchronous operations can be handled using the useEffect hook or within event handlers.",
    Sample: "Using async/await syntax simplifies handling promises.",
    code: `useEffect(() => { const fetchData = async () => { 
    const data = await fetch(url); setData(data); 
    }; fetchData(); }, []);`
  },
  {
    id: 64,
    Title: "54. What is the purpose of the useImperativeHandle hook?",
    answer: "useImperativeHandle customizes the instance value that is exposed to parent components when using ref.",
    Sample: "It is used with forwardRef to expose certain functions.",
    code: `useImperativeHandle(ref, () => ({ customFunction }));`
  },
  {
    id: 65,
    Title: "55. What are side effects in React?",
    answer: "Side effects are operations that can affect other components outside the function component, like data fetching or subscriptions.",
    Sample: "They are typically managed with the useEffect hook.",
    code: `useEffect(() => { 
    const subscription = api.subscribe(); 
    return () => subscription.unsubscribe(); 
    }, []);`
  },
  {
    id: 66,
    Title: "56. What is the purpose of React.Fragment?",
    answer: "React.Fragment is a lightweight component that allows grouping multiple elements without adding extra nodes to the DOM.",
    Sample: "It is useful for returning multiple elements from a component.",
    code: `return (<><ChildA /><ChildB /></>);`
  },
  {
    id: 67,
    Title: "57. What is code splitting in React?",
    answer: "Code splitting is a technique that helps to split your code into smaller chunks, which can be loaded on demand.",
    Sample: "It improves the performance of your application.",
    code: `const LazyComponent = React.lazy(() => import('./LazyComponent'));`
  },
  {
    id: 68,
    Title: "58. What is the purpose of the useDebugValue hook?",
    answer: "useDebugValue is a hook that helps you display a label for custom hooks in React DevTools.",
    Sample: "It can be used to provide context about the state of the hook.",
    code: `useDebugValue(value ? 'Active' : 'Inactive');`
  },
  {
    id: 69,
    Title: "59. What is the purpose of the unstable_batchedUpdates function?",
    answer: "unstable_batchedUpdates allows you to batch multiple state updates into a single render for performance optimization.",
    Sample: "It can prevent unnecessary renders.",
    code: `unstable_batchedUpdates(() => { 
    setCount(count + 1); 
    setValue(newValue); 
    });`
  },
  {
    id: 70,
    Title: "60. What is the use of the withRouter HOC?",
    answer: "withRouter is a higher-order component that provides the router-related props to the wrapped component.",
    Sample: "It is useful for accessing history, match, and location props in components.",
    code: `import { withRouter } from 'react-router-dom';`
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
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">React Basics and Concepts</h1>

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

export default React;

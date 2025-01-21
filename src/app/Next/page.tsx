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

const Next: React.FC = () => {
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
      Title: "What is Next.js?",
      answer:
        "Next.js is a React framework that enables features like server-side rendering, static site generation, and API routes.",
      Sample: "Creating a basic Next.js page",
      code: `// pages/index.tsx
  export default function Home() {
    return (
      <div>
        <h1>Welcome to Next.js!</h1>
      </div>
    )
  }`,
    },
    {
      id: 2,
      Title: "How to implement dynamic routing in Next.js?",
      answer:
        "Next.js supports dynamic routes using square brackets [] in the file name.",
      Sample: "Creating a dynamic route for blog posts",
      code: `// pages/posts/[id].tsx
  export default function Post({ params }) {
    const { id } = params;
    return <h1>Post: {id}</h1>
  }`,
    },
    {
      id: 3,
      Title: "How to handle data fetching in Next.js?",
      answer:
        "Next.js provides several methods for data fetching including getStaticProps, getServerSideProps, and client-side fetching.",
      Sample: "Using client-side data fetching",
      code: `import { useState, useEffect } from 'react';

  export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch('/api/posts')
        .then(res => res.json())
        .then(data => {
          setPosts(data);
          setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;
    return (
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }`,
    },
    {
      id: 4,
      Title: "How to optimize images in Next.js?",
      answer:
        "Next.js provides an Image component for automatic image optimization, including lazy loading and resizing.",
      Sample: "Using the Next.js Image component",
      code: `import Image from 'next/image';

  export default function OptimizedImage() {
    return (
      <Image
        src="/example.jpg"
        alt="Example"
        width={500}
        height={300}
      />
    );
  }`,
    },
    {
      id: 5,
      Title: "How to implement client-side navigation?",
      answer:
        "Next.js provides the Link component for client-side navigation, allowing seamless transitions between pages.",
      Sample: "Using the Link component",
      code: `import Link from 'next/link';

  export default function Navigation() {
    return (
      <nav>
        <Link href="/about">About</Link>
      </nav>
    );
  }`,
    },
    {
      id: 6,
      Title: "How to create API routes in Next.js?",
      answer:
        "API routes in Next.js are created in the 'pages/api' directory and allow building serverless APIs.",
      Sample: "Creating an API route",
      code: `// pages/api/hello.ts
  export default function handler(req, res) {
    res.status(200).json({ message: 'Hello, world!' });
  }`,
    },
    {
      id: 7,
      Title: "How to use environment variables in Next.js?",
      answer:
        "Environment variables can be defined in .env.local file and accessed using process.env.",
      Sample: "Using environment variables",
      code: `// .env.local
  NEXT_PUBLIC_API_URL=https://api.example.com

  // pages/example.tsx
  export default function Example() {
    return <div>{process.env.NEXT_PUBLIC_API_URL}</div>;
  }`,
    },
    {
      id: 8,
      Title: "How to implement global state management?",
      answer: "Use a state management library like Redux or Context API.",
      Sample: "Using Context API",
      code: `import { createContext, useContext, useState } from 'react';

  const AppContext = createContext(null);

  export function AppProvider({ children }) {
    const [state, setState] = useState({ theme: 'light' });

    return (
      <AppContext.Provider value={{ state, setState }}>
        {children}
      </AppContext.Provider>
    );
  }

  export function useAppContext() {
    return useContext(AppContext);
  }`,
    },
    {
      id: 9,
      Title: "How to deploy a Next.js application?",
      answer:
        "Next.js apps can be deployed on platforms like Vercel, Netlify, or any Node.js-compatible server.",
      Sample: "Deploying on Vercel",
      code: `// Simply push your Next.js project to GitHub and import it into Vercel.
  vercel --prod`,
    },
    {
      id: 10,
      Title: "How to implement SEO in Next.js?",
      answer: "Use the Head component from 'next/head' to manage meta tags.",
      Sample: "Setting up SEO",
      code: `import Head from 'next/head';

  export default function SEO() {
    return (
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="A Next.js application" />
      </Head>
    );
  }`,
    },
    {
      id: 11,
      Title: "How to create static pages in Next.js?",
      answer: "Static pages are generated at build time using getStaticProps.",
      Sample: "Using getStaticProps",
      code: `// pages/static-page.tsx
  export async function getStaticProps() {
    return {
      props: { message: "This is a static page!" },
    };
  }

  export default function StaticPage({ message }) {
    return <div>{message}</div>;
  }`,
    },
    {
      id: 12,
      Title: "How to handle 404 pages in Next.js?",
      answer: "Create a custom 404 page by adding a `pages/404.tsx` file.",
      Sample: "Custom 404 page",
      code: `// pages/404.tsx
  export default function Custom404() {
    return <h1>404 - Page Not Found</h1>;
  }`,
    },
    {
      id: 13,
      Title: "How to create server-side rendered pages in Next.js?",
      answer: "Server-side rendered pages use getServerSideProps.",
      Sample: "Using getServerSideProps",
      code: `// pages/ssr.tsx
  export async function getServerSideProps() {
    return {
      props: { message: "This is a server-side rendered page!" },
    };
  }

  export default function SSRPage({ message }) {
    return <div>{message}</div>;
  }`,
    },
    {
      id: 14,
      Title: "How to use middleware in Next.js?",
      answer:
        "Middleware in Next.js can be used for tasks like authentication or logging.",
      Sample: "Simple middleware example",
      code: `// middleware.ts
  import { NextResponse } from 'next/server';

  export function middleware(req) {
    const url = req.nextUrl;
    if (url.pathname === '/protected') {
      return NextResponse.redirect(new URL('/login', url));
    }
    return NextResponse.next();
  }`,
    },
    {
      id: 15,
      Title: "How to use TypeScript in Next.js?",
      answer:
        "Next.js has built-in support for TypeScript. Add a tsconfig.json file and start using TypeScript.",
      Sample: "TypeScript example",
      code: `// tsconfig.json
  {
    "compilerOptions": {
      "strict": true,
      "jsx": "preserve"
    }
  }

  // pages/example.tsx
  export default function Example({ message }: { message: string }) {
    return <div>{message}</div>;
  }`,
    },
    {
      id: 16,
      Title: "How to create nested layouts in Next.js?",
      answer:
        "Nested layouts can be implemented using a combination of higher-order components or by wrapping pages in layouts.",
      Sample: "Using layouts",
      code: `// components/Layout.tsx
  export default function Layout({ children }) {
    return <div className="layout">{children}</div>;
  }

  // pages/_app.tsx
  import Layout from '../components/Layout';

  export default function MyApp({ Component, pageProps }) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }`,
    },
    {
      id: 17,
      Title: "How to add CSS in Next.js?",
      answer:
        "You can use CSS Modules, global CSS, or styled-components in Next.js.",
      Sample: "Using CSS Modules",
      code: `// styles/Home.module.css
  .title {
    color: blue;
  }

  // pages/index.tsx
  import styles from '../styles/Home.module.css';

  export default function Home() {
    return <h1 className={styles.title}>Hello, Next.js!</h1>;
  }`,
    },
    {
      id: 18,
      Title: "How to use Tailwind CSS in Next.js?",
      answer:
        "Install Tailwind CSS, configure it, and include its styles in the project.",
      Sample: "Using Tailwind CSS",
      code: `// tailwind.config.js
  module.exports = {
    content: ['./pages/**/*.tsx', './components/**/*.tsx'],
    theme: { extend: {} },
    plugins: [],
  };

  // pages/index.tsx
  export default function Home() {
    return <h1 className="text-3xl font-bold">Hello, Tailwind!</h1>;
  }`,
    },
    {
      id: 19,
      Title: "How to pre-render pages with data?",
      answer:
        "Next.js supports pre-rendering with data using getStaticProps and getServerSideProps.",
      Sample: "Using getStaticProps",
      code: `// pages/pre-render.tsx
  export async function getStaticProps() {
    const data = await fetch('https://api.example.com/data').then(res => res.json());
    return {
      props: { data },
    };
  }

  export default function PreRender({ data }) {
    return <div>{JSON.stringify(data)}</div>;
  }`,
    },
    {
      id: 20,
      Title: "How to configure custom headers?",
      answer: "Custom headers can be configured in the next.config.js file.",
      Sample: "Adding custom headers",
      code: `// next.config.js
  module.exports = {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            { key: 'X-Custom-Header', value: 'MyCustomValue' },
          ],
        },
      ];
    },
  };`,
    },
    {
      id: 21,
      Title: "How to handle authentication in Next.js?",
      answer:
        "Authentication can be implemented using libraries like NextAuth.js.",
      Sample: "Using NextAuth.js",
      code: `// pages/api/auth/[...nextauth].ts
  import NextAuth from 'next-auth';

  export default NextAuth({
    providers: [
      // Add providers here
    ],
  });`,
    },
    {
      id: 22,
      Title: "How to write tests in Next.js?",
      answer: "Tests can be written using Jest and React Testing Library.",
      Sample: "Setting up Jest",
      code: `// jest.config.js
  module.exports = {
    testEnvironment: 'jsdom',
  };

  // __tests__/index.test.tsx
  import { render } from '@testing-library/react';
  import Home from '../pages/index';

  test('renders homepage', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Welcome to Next.js!')).toBeInTheDocument();
  });`,
    },
    {
      id: 23,
      Title: "How to configure environment variables in Next.js?",
      answer: "Environment variables are managed using a `.env` file.",
      Sample: "Setting environment variables",
      code: `// .env.local
  NEXT_PUBLIC_API_URL=https://api.example.com

  // pages/index.tsx
  export default function Home() {
    return <div>{process.env.NEXT_PUBLIC_API_URL}</div>;
  }`,
    },
    {
      id: 24,
      Title: "How to add API routes in Next.js?",
      answer: "Next.js API routes can be created in the `pages/api` directory.",
      Sample: "Creating an API route",
      code: `// pages/api/hello.ts
  export default function handler(req, res) {
    res.status(200).json({ message: "Hello, API!" });
  }`,
    },
    {
      id: 25,
      Title: "How to implement middleware with Edge functions?",
      answer:
        "Edge middleware runs before a request is processed, enabling fine-grained control.",
      Sample: "Edge middleware example",
      code: `// middleware.ts
  import { NextResponse } from 'next/server';

  export function middleware(req) {
    const response = NextResponse.next();
    response.headers.set('X-Custom-Header', 'MyHeaderValue');
    return response;
  }`,
    },
    {
      id: 26,
      Title: "How to handle redirects in Next.js?",
      answer: "Redirects can be defined in the next.config.js file.",
      Sample: "Adding redirects",
      code: `// next.config.js
  module.exports = {
    async redirects() {
      return [
        {
          source: '/old-path',
          destination: '/new-path',
          permanent: true,
        },
      ];
    },
  };`,
    },
    {
      id: 27,
      Title: "How to use custom document in Next.js?",
      answer: "Custom document is used to augment the default HTML document.",
      Sample: "Creating a custom document",
      code: `// pages/_document.tsx
  import { Html, Head, Main, NextScript } from 'next/document';

  export default function Document() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }`,
    },
    {
      id: 28,
      Title: "How to set up internationalization (i18n) in Next.js?",
      answer:
        "Next.js provides built-in support for internationalized routing.",
      Sample: "Configuring i18n",
      code: `// next.config.js
  module.exports = {
    i18n: {
      locales: ['en', 'es'],
      defaultLocale: 'en',
    },
  };

  // pages/index.tsx
  export default function Home() {
    return <h1>Welcome to Next.js!</h1>;
  }`,
    },
    {
      id: 29,
      Title: "How to optimize for performance in Next.js?",
      answer:
        "Use built-in features like image optimization, code-splitting, and lazy loading.",
      Sample: "Lazy loading components",
      code: `// pages/index.tsx
  import dynamic from 'next/dynamic';

  const LazyComponent = dynamic(() => import('../components/LazyComponent'));

  export default function Home() {
    return <LazyComponent />;
  }`,
    },
    {
      id: 30,
      Title: "How to deploy a Next.js application?",
      answer:
        "Next.js can be deployed to platforms like Vercel, AWS, or Netlify.",
      Sample: "Vercel deployment",
      code: `// Install Vercel CLI
  // Run the following commands:
  npm install -g vercel
  vercel deploy`,
    },
    {
      id: 31,
      Title: "How to enable strict mode in Next.js?",
      answer: "Strict mode can be enabled in the next.config.js file.",
      Sample: "Enabling React Strict Mode",
      code: `// next.config.js
  module.exports = {
    reactStrictMode: true,
  };`,
    },
    {
      id: 32,
      Title: "How to handle custom fonts in Next.js?",
      answer: "Use the built-in next/font for font optimization.",
      Sample: "Adding custom fonts",
      code: `// pages/_app.tsx
  import { Inter } from '@next/font/google';

  const inter = Inter({ subsets: ['latin'] });

  export default function MyApp({ Component, pageProps }) {
    return (
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    );
  }`,
    },
    {
      id: 33,
      Title: "How to add Google Analytics in Next.js?",
      answer: "Add the GA script in _document.tsx or use a library.",
      Sample: "Integrating Google Analytics",
      code: `// pages/_document.tsx
  import { Html, Head, Main, NextScript } from 'next/document';

  export default function Document() {
    return (
      <Html>
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: \`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GA_TRACKING_ID');
              \`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }`,
    },
    {
      id: 34,
      Title: "How to use SWR for data fetching?",
      answer: "SWR is a React library for data fetching with caching.",
      Sample: "Using SWR",
      code: `// pages/index.tsx
  import useSWR from 'swr';

  const fetcher = url => fetch(url).then(res => res.json());

  export default function Home() {
    const { data, error } = useSWR('/api/data', fetcher);

    if (error) return <div>Error loading data.</div>;
    if (!data) return <div>Loading...</div>;

    return <div>{JSON.stringify(data)}</div>;
  }`,
    },
    {
      id: 35,
      Title: "How to integrate GraphQL in Next.js?",
      answer: "GraphQL can be used with Apollo Client or Relay.",
      Sample: "Using Apollo Client",
      code: `// lib/apollo.ts
  import { ApolloClient, InMemoryCache } from '@apollo/client';

  const client = new ApolloClient({
    uri: 'https://api.example.com/graphql',
    cache: new InMemoryCache(),
  });

  export default client;

  // pages/index.tsx
  import { ApolloProvider } from '@apollo/client';
  import client from '../lib/apollo';

  export default function App({ Component, pageProps }) {
    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }`,
    },
    {
      id: 36,
      Title: "How to use TypeScript in Next.js?",
      answer:
        "Next.js has built-in support for TypeScript, and it automatically sets up necessary configurations.",
      Sample: "Adding TypeScript support",
      code: `// Install TypeScript and types for React and Node.js
  npm install --save-dev typescript @types/react @types/node

  // Run Next.js to create a tsconfig.json file automatically
  npm run dev

  // Example component
  import React from 'react';

  interface Props {
    title: string;
  }

  const Header: React.FC<Props> = ({ title }) => {
    return <h1>{title}</h1>;
  };

  export default Header;`,
    },
    {
      id: 37,
      Title: "How to handle error pages in Next.js?",
      answer:
        "You can create custom error pages like 404.js or _error.js in the `pages` directory.",
      Sample: "Custom 404 page",
      code: `// pages/404.tsx
  export default function Custom404() {
    return <h1>404 - Page Not Found</h1>;
  }`,
    },
    {
      id: 38,
      Title: "How to configure static file serving?",
      answer:
        "Static files are served from the `public` folder in a Next.js project.",
      Sample: "Using static files",
      code: `// Place an image in the public folder (e.g., /public/image.png)
  // Access the file in your components
  export default function Home() {
    return <img src="/image.png" alt="Example" />;
  }`,
    },
    {
      id: 39,
      Title: "How to create a custom App component?",
      answer:
        "A custom App component allows you to initialize pages and add global styles.",
      Sample: "Custom App example",
      code: `// pages/_app.tsx
  import '../styles/global.css';

  export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }`,
    },
    {
      id: 40,
      Title: "How to prefetch data for links?",
      answer:
        "Next.js automatically prefetches data for links using the Link component.",
      Sample: "Using prefetching",
      code: `// pages/index.tsx
  import Link from 'next/link';

  export default function Home() {
    return (
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    );
  }`,
    },
    {
      id: 41,
      Title: "How to implement authentication in Next.js?",
      answer:
        "You can use libraries like NextAuth.js for authentication in Next.js.",
      Sample: "Using NextAuth.js",
      code: `// pages/api/auth/[...nextauth].ts
  import NextAuth from 'next-auth';
  import Providers from 'next-auth/providers';

  export default NextAuth({
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }),
    ],
  });`,
    },
    {
      id: 42,
      Title: "How to use fallback in getStaticPaths?",
      answer:
        "The `fallback` option in `getStaticPaths` determines the behavior for paths not generated at build time.",
      Sample: "Using fallback",
      code: `// pages/posts/[id].tsx
  export async function getStaticPaths() {
    return {
      paths: [{ params: { id: '1' } }],
      fallback: true, // or 'blocking'
    };
  }

  export async function getStaticProps({ params }) {
    return {
      props: {
        id: params.id,
      },
    };
  }

  export default function Post({ id }) {
    return <h1>Post ID: {id}</h1>;
  }`,
    },
    {
      id: 43,
      Title: "How to use CSS Modules in Next.js?",
      answer:
        "Next.js supports CSS Modules out of the box for modular and scoped styling.",
      Sample: "Using CSS Modules",
      code: `// styles/Home.module.css
  .title {
    color: blue;
  }

  // pages/index.tsx
  import styles from '../styles/Home.module.css';

  export default function Home() {
    return <h1 className={styles.title}>Hello World</h1>;
  }`,
    },
    {
      id: 44,
      Title: "How to implement custom layouts?",
      answer:
        "Custom layouts can be defined by wrapping components in a specific layout component.",
      Sample: "Using a custom layout",
      code: `// components/Layout.tsx
  export default function Layout({ children }) {
    return <div className="layout">{children}</div>;
  }

  // pages/_app.tsx
  import Layout from '../components/Layout';

  export default function MyApp({ Component, pageProps }) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }`,
    },
    {
      id: 45,
      Title: "How to integrate Tailwind CSS in Next.js?",
      answer: "Install Tailwind CSS and configure it with Next.js.",
      Sample: "Setting up Tailwind CSS",
      code: `// Install Tailwind CSS
  npm install tailwindcss postcss autoprefixer
  npx tailwindcss init

  // Configure tailwind.config.js
  module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {},
    },
    plugins: [],
  };

  // Import styles in pages/_app.tsx
  import '../styles/globals.css';`,
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
            Next Programming Guide
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

export default Next;

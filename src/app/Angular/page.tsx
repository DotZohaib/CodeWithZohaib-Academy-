'use client';
import React, { useState, useEffect } from 'react';
import Prism from "prismjs";
import { Search, ChevronUp, Copy, Check, Filter, BookOpen } from 'lucide-react';
import "prismjs/themes/prism-okaidia.css";

interface Question {
  id: number;
  Title: string;
  answer: string;
  Sample: string;
  code: string;
}

const Angular: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  
  // Your existing array data here...
  const array: Question[] = [
    {
      id: 1,
      Title: "1. What is Angular?",
      answer: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Developed by Google, it provides a suite of well-integrated libraries for routing, forms, and HTTP.",
      Sample: "Angular is commonly used to build web applications.",
      code: `import { Component } from '@angular/core';`
    },
    {
      id: 2,
      Title: "2. What is a component in Angular?",
      answer: "A component is the core building block of Angular applications. It controls a part of the UI through a class and HTML template.",
      Sample: "Components manage the views and data of Angular apps.",
      code: `@Component({ selector: 'app-root', templateUrl: './app.component.html' })`
    },
    {
      id: 3,
      Title: "3. What is Angular CLI?",
      answer: "The Angular CLI is a command-line interface tool for managing Angular applications, providing commands to create, build, and serve projects.",
      Sample: "You can generate a new Angular project using CLI.",
      code: `ng new my-angular-app`
    },
    {
      id: 4,
      Title: "4. How does data binding work in Angular?",
      answer: "Angular provides various data-binding techniques, such as interpolation, property binding, event binding, and two-way binding, to connect the UI with the component.",
      Sample: "Two-way binding allows synchronization between the model and the view.",
      code: `<input [(ngModel)]="name">`
    },
    {
      id: 5,
      Title: "5. What are services in Angular?",
      answer: "Services are used to organize and share data and logic across components. They are singleton classes that handle data processing or provide reusable functionality.",
      Sample: "Injectable services can be created to fetch data from APIs.",
      code: `@Injectable({ providedIn: 'root' })`
    },
    {
      id: 6,
      Title: "6. What is dependency injection in Angular?",
      answer: "Dependency injection (DI) is a design pattern used in Angular to provide dependencies to components and services. DI simplifies managing and testing dependencies.",
      Sample: "Angular's DI framework automatically provides required services.",
      code: `constructor(private service: MyService) {}`
    },
    {
      id: 7,
      Title: "7. What is a module in Angular?",
      answer: "An Angular module is a container for a cohesive block of code dedicated to a specific application domain, workflow, or closely related set of capabilities.",
      Sample: "Angular applications are divided into multiple modules.",
      code: `@NgModule({ imports: [BrowserModule] })`
    },
    {
      id: 8,
      Title: "8. How to define routes in Angular?",
      answer: "Routing in Angular allows navigation between different views or pages. Define routes in the `RouterModule` to enable navigation.",
      Sample: "Set up routing in `app-routing.module.ts`.",
      code: `{ path: 'home', component: HomeComponent }`
    },
    {
      id: 9,
      Title: "9. What is Angular Router?",
      answer: "The Angular Router is a navigation service that enables developers to manage the URLs in a single-page application. It provides the ability to navigate to different views.",
      Sample: "The Angular RouterModule must be imported for routing.",
      code: `RouterModule.forRoot(routes)`
    },
    {
      id: 10,
      Title: "10. What is an Observable in Angular?",
      answer: "Observables are used for asynchronous data streams in Angular. The `rxjs` library provides observables, enabling event handling, async programming, and more.",
      Sample: "Observables are often used with Angular's HttpClient.",
      code: `this.http.get('api/data').subscribe(data => console.log(data));`
    },
    {
      id: 11,
      Title: "11. How to use HttpClient in Angular?",
      answer: "Angular’s HttpClient service provides methods to make HTTP requests. Import HttpClientModule to enable HttpClient in your app.",
      Sample: "Fetching data with HttpClient:",
      code: `this.http.get('api/data').subscribe(response => this.data = response);`
    },
    {
      id: 12,
      Title: "12. What is ngOnInit in Angular?",
      answer: "ngOnInit is a lifecycle hook in Angular that runs after Angular initializes the component's input properties. It’s a good place to put initialization logic.",
      Sample: "Commonly used for initial data fetching.",
      code: `ngOnInit() { this.loadData(); }`
    },
    {
      id: 13,
      Title: "13. How to create a service in Angular?",
      answer: "You can create a service using Angular CLI by running `ng generate service serviceName`. Services allow you to share data and logic across components.",
      Sample: "Creating a new service:",
      code: `ng generate service MyService`
    },
    {
      id: 14,
      Title: "14. What are pipes in Angular?",
      answer: "Pipes transform data for display. Angular provides built-in pipes like DatePipe, UpperCasePipe, and you can also create custom pipes.",
      Sample: "Using a Date pipe to format a date:",
      code: `{{ today | date:'shortDate' }}`
    },
    {
      id: 15,
      Title: "15. What is a directive in Angular?",
      answer: "Directives are special instructions for DOM manipulation in Angular. Examples include structural directives like `*ngIf` and attribute directives like `ngClass`.",
      Sample: "Using the `*ngIf` directive:",
      code: `<p *ngIf="isVisible">Content</p>`
    },
    {
      id: 16,
      Title: "16. How to use forms in Angular?",
      answer: "Angular provides `ReactiveFormsModule` and `FormsModule` for handling forms. Reactive forms give greater control, while template-driven forms are more declarative.",
      Sample: "A simple form with `ngModel`:",
      code: `<input [(ngModel)]="model.name">`
    },
    {
      id: 17,
      Title: "17. What is a template in Angular?",
      answer: "Templates are HTML views used in components to display data. They use Angular-specific syntax for data binding and directives.",
      Sample: "Template syntax example:",
      code: `<h1>{{ title }}</h1>`
    },
    {
      id: 18,
      Title: "18. How does Angular handle events?",
      answer: "Angular uses event binding to handle events. Bind events using `()`, passing in event data to functions in the component.",
      Sample: "Binding a click event:",
      code: `<button (click)="onClick()">Click me</button>`
    },
    {
      id: 19,
      Title: "19. What is Angular Ivy?",
      answer: "Angular Ivy is the default rendering engine in Angular, providing faster builds, better debugging, and smaller bundles.",
      Sample: "Ivy became the default engine in Angular 9.",
      code: `import '@angular/compiler'`
    },
    {
      id: 20,
      Title: "20. What is Change Detection in Angular?",
      answer: "Change Detection is the mechanism Angular uses to detect and react to data changes, updating the view accordingly.",
      Sample: "Change detection can be manually triggered.",
      code: `this.changeDetectorRef.detectChanges();`
    },
    {
      id: 21,
      Title: "21. How does Angular handle asynchronous operations?",
      answer: "Angular handles asynchronous operations with Observables, Promises, and the async pipe.",
      Sample: "Using the async pipe:",
      code: `<div *ngIf="data$ | async as data">{{ data }}</div>`
    },
    {
      id: 22,
      Title: "22. What is NgZone in Angular?",
      answer: "NgZone is a service for running code outside the Angular zone to avoid triggering change detection.",
      Sample: "Run a function outside of NgZone:",
      code: `this.zone.runOutsideAngular(() => { /* code */ });`
    },
    {
      id: 23,
      Title: "23. What is ViewEncapsulation in Angular?",
      answer: "ViewEncapsulation controls how styles are scoped to components. Options include None, Emulated, and ShadowDom.",
      Sample: "Emulating Shadow DOM style scoping:",
      code: `encapsulation: ViewEncapsulation.Emulated`
    },
    {
      id: 24,
      Title: "24. How to create animations in Angular?",
      answer: "Angular's animations module provides methods to animate components using triggers, transitions, and state.",
      Sample: "Creating a simple fade animation:",
      code: `trigger('fade', [transition('void => *', [animate('1s')])])`
    },
    {
      id: 25,
      Title: "25. What is a lazy-loaded module in Angular?",
      answer: "Lazy-loaded modules improve performance by loading modules only when needed. This is configured in the routing module.",
      Sample: "Lazy loading a module in routing:",
      code: `{ path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) }`
    },
    {
      id: 26,
      Title: "26. What is RxJS in Angular?",
      answer: "RxJS is a library for reactive programming in Angular. It provides tools for working with observables and operators for handling asynchronous data.",
      Sample: "Using an RxJS operator:",
      code: `of(1, 2, 3).pipe(map(x => x * 2)).subscribe(console.log);`
    },
    {
      id: 27,
      Title: "27. What is Angular Universal?",
      answer: "Angular Universal is a tool for server-side rendering of Angular applications, improving performance and SEO.",
      Sample: "Adding Universal support:",
      code: `ng add @nguniversal/express-engine`
    },
    {
      id: 28,
      Title: "28. What is Ahead-of-Time (AOT) Compilation?",
      answer: "AOT compiles Angular applications before running them in the browser, improving performance and reducing payload size.",
      Sample: "Using AOT compilation with Angular:",
      code: `ng build --aot`
    },
    {
      id: 29,
      Title: "29. What is Differential Loading in Angular?",
      answer: "Differential Loading builds separate bundles for modern and legacy JavaScript, allowing browsers to load the appropriate code.",
      Sample: "Angular CLI uses differential loading by default.",
      code: `ng build --prod`
    },
    {
      id: 30,
      Title: "30. How to debug Angular applications?",
      answer: "Use browser developer tools, Angular DevTools, and console logs for debugging Angular applications.",
      Sample: "Setting up Angular DevTools:",
      code: `install 'Angular DevTools' from Chrome Web Store`
    }
  ];
  
  useEffect(() => {
    Prism.highlightAll();
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [searchTerm, selectedCategory]);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleExpand = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredQuestions = array.filter(item => {
    const matchesSearch = item.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' ? true :
      (selectedCategory === 'basic' && item.id <= 10) ||
      (selectedCategory === 'intermediate' && item.id > 10 && item.id <= 20) ||
      (selectedCategory === 'advanced' && item.id > 20);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto font-sans px-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg mb-8 transform hover:scale-[1.02] transition-transform duration-300">
          <h1 className="text-4xl font-bold text-center mb-4">Angular Interview Guide</h1>
          <p className="text-center text-lg opacity-90">Comprehensive collection of Angular concepts and examples</p>
        </div>

        <div className="sticky top-4 z-10 bg-white p-4 rounded-lg shadow-md mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <Filter className="text-gray-500" />
            <select
              className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Levels</option>
              <option value="basic">Basic (1-10)</option>
              <option value="intermediate">Intermediate (11-20)</option>
              <option value="advanced">Advanced (21-30)</option>
            </select>
          </div>
        </div>

        {filteredQuestions.map((item) => (
          <section
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-lg mb-6 transform hover:shadow-xl transition-all duration-300"
          >
            <div
              className="cursor-pointer flex justify-between items-center"
              onClick={() => toggleExpand(item.id)}
            >
              <h2 className="text-2xl font-semibold text-gray-700">{item.Title}</h2>
              <BookOpen className={`transform transition-transform duration-300 ${
                expandedItems.includes(item.id) ? 'rotate-180' : ''
              }`} />
            </div>

            <div className={`mt-4 space-y-4 transition-all duration-500 ${
              expandedItems.includes(item.id) ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
            }`}>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Answer:</strong> {item.answer}</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Sample:</strong> {item.Sample}</p>
              </div>

              <div className="relative">
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="flex justify-between items-center px-4 py-2 bg-gray-700">
                    <span className="text-gray-300">Code Example</span>
                    <button
                      onClick={() => handleCopy(item.code, item.id)}
                      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors duration-300"
                    >
                      {copiedIndex === item.id ? (
                        <><Check size={16} /> Copied!</>
                      ) : (
                        <><Copy size={16} /> Copy</>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 overflow-x-auto">
                    <code className="language-js">{item.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>
        ))}

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 animate-bounce"
          >
            <ChevronUp />
          </button>
        )}
      </div>
    </div>
  );
};

export default Angular;

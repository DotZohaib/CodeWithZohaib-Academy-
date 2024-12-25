 interface Question {
  id: number;
  Title: string;
  answer: string;
  Sample: string;
  code: string;
}
  
  export const array: Question[] = [
    {
      "id": 1,
      "Title": "What is Angular?",
      "answer": "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Developed by Google, it provides a suite of well-integrated libraries for routing, forms, and HTTP.",
      "Sample": "Angular is commonly used to build web applications.",
      "code": "import { Component } from '@angular/core';"
    },
    {
      "id": 2,
      "Title": "What is a component in Angular?",
      "answer": "A component is the core building block of Angular applications. It controls a part of the UI through a class and HTML template.",
      "Sample": "Components manage the views and data of Angular apps.",
      "code": "@Component({ selector: 'app-root', templateUrl: './app.component.html' })"
    },
    {
      "id": 3,
      "Title": "What is Angular CLI?",
      "answer": "The Angular CLI is a command-line interface tool for managing Angular applications, providing commands to create, build, and serve projects.",
      "Sample": "You can generate a new Angular project using CLI.",
      "code": "ng new my-angular-app"
    },
    {
      "id": 4,
      "Title": "How does data binding work in Angular?",
      "answer": "Angular provides various data-binding techniques, such as interpolation, property binding, event binding, and two-way binding, to connect the UI with the component.",
      "Sample": "Two-way binding allows synchronization between the model and the view.",
      "code": "<input [(ngModel)]=\"name\">"
    },
    {
      "id": 5,
      "Title": "What are services in Angular?",
      "answer": "Services are used to organize and share data and logic across components. They are singleton classes that handle data processing or provide reusable functionality.",
      "Sample": "Injectable services can be created to fetch data from APIs.",
      "code": "@Injectable({ providedIn: 'root' })"
    },
    {
      "id": 6,
      "Title": "What is dependency injection in Angular?",
      "answer": "Dependency injection (DI) is a design pattern used in Angular to provide dependencies to components and services. DI simplifies managing and testing dependencies.",
      "Sample": "Angular's DI framework automatically provides required services.",
      "code": "constructor(private service: MyService) {}"
    },
    {
      "id": 7,
      "Title": "What is a module in Angular?",
      "answer": "An Angular module is a container for a cohesive block of code dedicated to a specific application domain, workflow, or closely related set of capabilities.",
      "Sample": "Angular applications are divided into multiple modules.",
      "code": "@NgModule({ imports: [BrowserModule] })"
    },
    {
      "id": 8,
      "Title": "How to define routes in Angular?",
      "answer": "Routing in Angular allows navigation between different views or pages. Define routes in the `RouterModule` to enable navigation.",
      "Sample": "Set up routing in `app-routing.module.ts`.",
      "code": "{ path: 'home', component: HomeComponent }"
    },
    {
      "id": 9,
      "Title": "What is Angular Router?",
      "answer": "The Angular Router is a navigation service that enables developers to manage the URLs in a single-page application. It provides the ability to navigate to different views.",
      "Sample": "The Angular RouterModule must be imported for routing.",
      "code": "RouterModule.forRoot(routes)"
    },
    {
      "id": 10,
      "Title": " What is an Observable in Angular?",
      "answer": "Observables are used for asynchronous data streams in Angular. The `rxjs` library provides observables, enabling event handling, async programming, and more.",
      "Sample": "Observables are often used with Angular's HttpClient.",
      "code": "this.http.get('api/data').subscribe(data => console.log(data));"
    },
    {
      "id": 11,
      "Title": " How to use HttpClient in Angular?",
      "answer": "Angular’s HttpClient service provides methods to make HTTP requests. Import HttpClientModule to enable HttpClient in your app.",
      "Sample": "Fetching data with HttpClient:",
      "code": "this.http.get('api/data').subscribe(response => this.data = response);"
    },
    {
      "id": 12,
      "Title": " What is ngOnInit in Angular?",
      "answer": "ngOnInit is a lifecycle hook in Angular that runs after Angular initializes the component's input properties. It’s a good place to put initialization logic.",
      "Sample": "Commonly used for initial data fetching.",
      "code": "ngOnInit() { this.loadData(); }"
    },
    {
      "id": 13,
      "Title": " How to create a service in Angular?",
      "answer": "You can create a service using Angular CLI by running `ng generate service serviceName`. Services allow you to share data and logic across components.",
      "Sample": "Creating a new service:",
      "code": "ng generate service MyService"
    },
    {
      "id": 14,
      "Title": " What are pipes in Angular?",
      "answer": "Pipes transform data for display. Angular provides built-in pipes like DatePipe, UpperCasePipe, and you can also create custom pipes.",
      "Sample": "Using a Date pipe to format a date:",
      "code": "{{ today | date:'shortDate' }}"
    },
    {
      "id": 15,
      "Title": " What is a directive in Angular?",
      "answer": "Directives are special instructions for DOM manipulation in Angular. Examples include structural directives like `*ngIf` and attribute directives like `ngClass`.",
      "Sample": "Using the `*ngIf` directive:",
      "code": "<p *ngIf=\"isVisible\">Content</p>"
    },
    {
      "id": 16,
      "Title": " How to use forms in Angular?",
      "answer": "Angular provides `ReactiveFormsModule` and `FormsModule` for handling forms. Reactive forms give greater control, while template-driven forms are more declarative.",
      "Sample": "A simple form with `ngModel`:",
      "code": "<input [(ngModel)]=\"model.name\">"
    },
    {
      "id": 17,
      "Title": " What is a template in Angular?",
      "answer": "Templates are HTML views used in components to display data. They use Angular-specific syntax for data binding and directives.",
      "Sample": "Template syntax example:",
      "code": "<h1>{{ title }}</h1>"
    },
    {
      "id": 18,
      "Title": " How does Angular handle events?",
      "answer": "Angular uses event binding to handle events. Bind events using `()`, passing in event data to functions in the component.",
      "Sample": "Binding a click event:",
      "code": "<button (click)=\"onClick()\">Click me</button>"
    },
    {
      "id": 19,
      "Title": " What is Angular Ivy?",
      "answer": "Angular Ivy is the default rendering engine in Angular, providing faster builds, better debugging, and smaller bundles.",
      "Sample": "Ivy became the default engine in Angular 9.",
      "code": "import '@angular/compiler'"
    },
    {
      "id": 20,
      "Title": " What is Change Detection in Angular?",
      "answer": "Change Detection is the mechanism Angular uses to detect and react to data changes, updating the view accordingly.",
      "Sample": "Change detection can be manually triggered.",
      "code": "this.changeDetectorRef.detectChanges();"
    },
    {
      "id": 21,
      "Title": " How does Angular handle asynchronous operations?",
      "answer": "Angular handles asynchronous operations with Observables, Promises, and the async pipe.",
      "Sample": "Using the async pipe:",
      "code": "<div *ngIf=\"data$ | async as data\">{{ data }}</div>"
    },
    {
      "id": 22,
      "Title": " What is NgZone in Angular?",
      "answer": "NgZone is a service for running code outside the Angular zone to avoid triggering change detection.",
      "Sample": "Run a function outside of NgZone:",
      "code": "this.zone.runOutsideAngular(() => { /* code */ });"
    },
    {
      "id": 23,
      "Title": " What is ViewEncapsulation in Angular?",
      "answer": "ViewEncapsulation controls how styles are scoped to components. Options include None, Emulated, and ShadowDom.",
      "Sample": "Emulating Shadow DOM style scoping:",
      "code": "encapsulation: ViewEncapsulation.Emulated"
    },
    {
      "id": 24,
      "Title": " How to create animations in Angular?",
      "answer": "Angular's animations module provides methods to animate components using triggers, transitions, and state.",
      "Sample": "Creating a simple fade animation:",
      "code": "trigger('fade', [transition('void => *', [animate('1s')])])"
    },
    {
      "id": 25,
      "Title": " What is Router Guard in Angular?",
      "answer": "Router Guards control access to routes. Guards like CanActivate, CanDeactivate provide control over navigation.",
      "Sample": "Implementing CanActivate Guard:",
      "code": "canActivate(): boolean { return isLoggedIn(); }"
    },
    {
        "id": 26,
        "Title": " What are interceptors in Angular?",
        "answer": "Interceptors allow you to modify HTTP requests and responses globally. Common uses include setting headers, logging, and handling errors.",
        "Sample": "Add an authorization header to every request.",
        "code": "intercept(req: HttpRequest<any>, next: HttpHandler) { const modifiedReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer token') }); return next.handle(modifiedReq); }"
      },
      {
        "id": 27,
        "Title": " How do you optimize performance in Angular?",
        "answer": "Common performance optimizations in Angular include lazy loading, using OnPush change detection, preloading modules, and AOT compilation.",
        "Sample": "Implement lazy loading for large modules.",
        "code": "{ path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) }"
      },
      {
        "id": 28,
        "Title": " What is Angular Universal?",
        "answer": "Angular Universal enables server-side rendering (SSR) of Angular applications, improving load speed and SEO.",
        "Sample": "Setup Angular Universal with `@nguniversal/express-engine`.",
        "code": "ng add @nguniversal/express-engine"
      },
      {
        "id": 29,
        "Title": " What is the difference between Template-driven and Reactive forms?",
        "answer": "Template-driven forms rely on Angular's directives and are suitable for simple forms. Reactive forms use an explicit model-driven approach, suitable for complex validations.",
        "Sample": "Use Reactive forms for greater control over form state.",
        "code": "this.form = new FormGroup({ name: new FormControl('') });"
      },
      {
        "id": 30,
        "Title": " What are structural directives in Angular?",
        "answer": "Structural directives alter the layout by adding or removing elements in the DOM. Examples include `*ngIf`, `*ngFor`, and `*ngSwitch`.",
        "Sample": "Using `*ngFor` to iterate over an array.",
        "code": "<div *ngFor=\"let item of items\">{{ item }}</div>"
      },
      {
        "id": 31,
        "Title": " How does Angular handle errors?",
        "answer": "Angular provides error handling through `HttpInterceptor` for HTTP errors, and the `ErrorHandler` class for global error handling.",
        "Sample": "Creating a custom global error handler.",
        "code": "class GlobalErrorHandler implements ErrorHandler { handleError(error) { console.error('Error occurred:', error); }}"
      },
      {
        "id": 32,
        "Title": " What is NgRx in Angular?",
        "answer": "NgRx is a reactive state management library for Angular, based on Redux. It helps manage application state and improves predictability.",
        "Sample": "Use NgRx for state management in large applications.",
        "code": "StoreModule.forRoot(reducers, { runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true }})"
      },
      {
        "id": 33,
        "Title": " What is Angular Material?",
        "answer": "Angular Material is a UI component library for Angular, following Material Design guidelines. It provides pre-built components like buttons, forms, and toolbars.",
        "Sample": "Install Angular Material for styling components.",
        "code": "ng add @angular/material"
      },
      {
        "id": 34,
        "Title": " How do you create custom pipes in Angular?",
        "answer": "Create a custom pipe by implementing the `PipeTransform` interface and defining transformation logic. Custom pipes allow transformation of displayed data.",
        "Sample": "Custom pipe to capitalize text.",
        "code": "@Pipe({ name: 'capitalize' }) export class CapitalizePipe implements PipeTransform { transform(value: string): string { return value.charAt(0).toUpperCase() + value.slice(1); }}"
      },
      {
        "id": 35,
        "Title": " What is zone.js in Angular?",
        "answer": "zone.js is a library that provides an execution context for async tasks. Angular uses it for change detection by tracking async operations.",
        "Sample": "zone.js automatically triggers Angular's change detection.",
        "code": "import 'zone.js';"
      },
      {
        "id": 36,
        "Title": " How to implement Lazy Loading in Angular?",
        "answer": "Lazy loading defers module loading until it's needed, reducing initial load time. Use `loadChildren` to configure lazy loading in routes.",
        "Sample": "Configure lazy loading for feature modules.",
        "code": "{ path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) }"
      },
      {
        "id": 37,
        "Title": " How to use Angular animations?",
        "answer": "Angular animations let you animate component transitions using the `@angular/animations` package. Define triggers and transitions to apply animations.",
        "Sample": "Simple fade-in animation using Angular's animation API.",
        "code": "trigger('fadeIn', [transition(':enter', [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))])])"
      },
      {
        "id": 38,
        "Title": " What is the difference between Observable and Promise?",
        "answer": "Observables provide multiple values over time and can be canceled, making them ideal for async data streams. Promises return a single value and cannot be canceled.",
        "Sample": "Use Observables for event-based async operations.",
        "code": "const data$ = this.http.get('url'); data$.subscribe(data => console.log(data));"
      },
      {
        "id": 39,
        "Title": " What are Web Workers in Angular?",
        "answer": "Web Workers run tasks in a background thread, preventing UI blockage. Use them for computationally heavy tasks.",
        "Sample": "Generate a Web Worker with Angular CLI.",
        "code": "ng generate web-worker worker-name"
      },
      {
        "id": 40,
        "Title": " What is ViewChild in Angular?",
        "answer": "`ViewChild` allows access to a child component, directive, or DOM element from a parent component, using Angular's dependency injection.",
        "Sample": "Use `ViewChild` to access a component’s properties.",
        "code": "@ViewChild(ChildComponent) child: ChildComponent;"
      },
      {
        "id": 41,
        "Title": " What is AOT compilation in Angular?",
        "answer": "Ahead-of-Time (AOT) compilation compiles the app during the build phase, reducing load times and providing faster rendering.",
        "Sample": "Enable AOT in Angular build configuration.",
        "code": "ng build --aot"
      },
      {
        "id": 42,
        "Title": " How to use ng-content in Angular?",
        "answer": "The `<ng-content>` tag is used to project content from a parent component into a child component, allowing for flexible template content.",
        "Sample": "Passing content to a child component with `ng-content`.",
        "code": "<ng-content></ng-content>"
      },
      {
        "id": 43,
        "Title": " What is Renderer2 in Angular?",
        "answer": "Renderer2 is a service for safely manipulating the DOM in Angular, ensuring compatibility with different rendering environments.",
        "Sample": "Use Renderer2 to dynamically add styles.",
        "code": "constructor(private renderer: Renderer2) { this.renderer.setStyle(el, 'color', 'blue'); }"
      },
      {
        "id": 44,
        "Title": " How to unsubscribe from Observables in Angular?",
        "answer": "Unsubscribe from Observables to prevent memory leaks, typically using `takeUntil` or by explicitly unsubscribing in `ngOnDestroy`.",
        "Sample": "Use `takeUntil` to handle unsubscribe logic.",
        "code": "this.data$.pipe(takeUntil(this.destroy$)).subscribe(data => { /* handle data */ });"
      },
      {
        "id": 45,
        "Title": " What is ng-container in Angular?",
        "answer": "`ng-container` is a wrapper element that allows grouping of elements without adding extra DOM nodes.",
        "Sample": "Conditionally group elements with `ng-container`.",
        "code": "<ng-container *ngIf=\"isLoggedIn\"> <p>Welcome!</p> </ng-container>"
      },
      {
        "id": 46,
        "Title": " What is the async pipe in Angular?",
        "answer": "The async pipe subscribes to an Observable or Promise and automatically handles unsubscribing, making it useful for displaying async data in templates.",
        "Sample": "Display async data with the async pipe.",
        "code": "<div *ngIf=\"data$ | async as data\">{{ data }}</div>"
      },

          {
            "id": 47,
            "Title": "What is C++?",
            "answer": "C++ is a general-purpose programming language with object-oriented and low-level memory manipulation capabilities.",
            "Sample": "Simple C++ Hello World program.",
            "code": "#include <iostream>\\nint main() {\\n    std::cout << \"Hello, World!\";\\n    return 0;\\n}"
        },
        {
            "id": 48,
            "Title": "What is the difference between C and C++?",
            "answer": "C++ supports object-oriented programming features like classes and inheritance, while C is procedural.",
            "Sample": "Declaring a class in C++.",
            "code": "class Car {\\n    public:\\n        void start() {\\n            std::cout << \"Car started\";\\n        }\\n};"
        },
        {
            "id": 49,
            "Title": "What is a class?",
            "answer": "A class is a user-defined data type that contains variables and functions to define an object.",
            "Sample": "Defining a simple class.",
            "code": "class Animal {\\n    public:\\n        void speak() {\\n            std::cout << \"Animal sound\";\\n        }\\n};"
        },
        {
            "id": 50,
            "Title": "What is an object?",
            "answer": "An object is an instance of a class.",
            "Sample": "Creating an object of a class.",
            "code": "Animal dog;\\ndog.speak();"
        },
        {
            "id": 51,
            "Title": "What is inheritance?",
            "answer": "Inheritance is a feature that allows a class to inherit properties and behaviors from another class.",
            "Sample": "Inheritance example in C++.",
            "code": "class Dog : public Animal {\\n};"
        },
        {
            "id": 51,
            "Title": "What are constructors and destructors?",
            "answer": "Constructors initialize an object when it is created; destructors clean up before an object is destroyed.",
            "Sample": "Constructor and destructor example.",
            "code": "class Car {\\n    public:\\n        Car() { std::cout << \"Car created\"; }\\n        ~Car() { std::cout << \"Car destroyed\"; }\\n};"
        },
        {
            "id": 52,
            "Title": "What is polymorphism?",
            "answer": "Polymorphism allows functions or methods to behave differently based on the object calling them.",
            "Sample": "Polymorphism with virtual functions.",
            "code": "virtual void sound() { std::cout << \"Animal sound\"; }"
        },
        {
            "id": 53,
            "Title": "What are pointers in C++?",
            "answer": "Pointers store the memory address of another variable.",
            "Sample": "Using pointers in C++.",
            "code": "int a = 5;\\nint *ptr = &a;"
        },
        {
            "id": 54,
            "Title": "What is encapsulation?",
            "answer": "Encapsulation is the concept of bundling data and methods within a class.",
            "Sample": "Encapsulation example in C++.",
            "code": "class Circle {\\n    private:\\n        double radius;\\n    public:\\n        void setRadius(double r) { radius = r; }\\n};"
        },
        {
            "id": 55,
            "Title": " What is abstraction?",
            "answer": "Abstraction hides implementation details and only exposes functionality.",
            "Sample": "Abstracting functionality in a class.",
            "code": "class Shape {\\n    public:\\n        virtual void draw() = 0;\\n};"
        },
        {
            "id": 56,
            "Title": " What are access specifiers?",
            "answer": "Access specifiers define the accessibility of class members. They are public, private, and protected.",
            "Sample": "Using access specifiers in a class.",
            "code": "class MyClass {\\n    private:\\n        int secret;\\n};"
        },
        {
            "id": 57,
            "Title": " What is function overloading?",
            "answer": "Function overloading allows multiple functions with the same name but different parameters.",
            "Sample": "Overloading functions.",
            "code": "void print(int i);\\nvoid print(double d);"
        },
        {
            "id": 58,
            "Title": " What is operator overloading?",
            "answer": "Operator overloading allows operators to be redefined for custom behavior with user-defined types.",
            "Sample": "Overloading the + operator.",
            "code": "class Complex {\\n    Complex operator+(const Complex& c);\\n};"
        },
        {
            "id": 59,
            "Title": " What is a virtual function?",
            "answer": "A virtual function is a function in a base class that can be overridden in derived classes.",
            "Sample": "Using virtual functions.",
            "code": "virtual void display() const;"
        },
        {
            "id": 60,
            "Title": " What is a pure virtual function?",
            "answer": "A pure virtual function has no body and must be overridden by derived classes.",
            "Sample": "Declaring a pure virtual function.",
            "code": "virtual void draw() = 0;"
        },
        {
            "id": 61,
            "Title": " What is a friend function?",
            "answer": "A friend function can access private members of a class.",
            "Sample": "Using a friend function.",
            "code": "friend void display(const MyClass& m);"
        },
        {
            "id": 62,
            "Title": " What is an inline function?",
            "answer": "An inline function is expanded in place to reduce function call overhead.",
            "Sample": "Declaring an inline function.",
            "code": "inline int square(int x) { return x * x; }"
        },
        {
            "id": 63,
            "Title": " What is the 'this' pointer?",
            "answer": "The 'this' pointer is an implicit pointer that points to the current object.",
            "Sample": "Using the 'this' pointer.",
            "code": "int getValue() const { return this->value; }"
        },
        {
            "id": 64,
            "Title": " What are templates?",
            "answer": "Templates allow functions and classes to operate with generic types.",
            "Sample": "Function template example.",
            "code": "template <typename T> T add(T a, T b) { return a + b; }"
        },
        {
            "id": 65,
            "Title": " What is the Standard Template Library (STL)?",
            "answer": "STL is a library of generic classes and functions in C++ for data structures and algorithms.",
            "Sample": "Using STL vector.",
            "code": "std::vector<int> vec = {1, 2, 3};"
        },
        {
            "id": 66,
            "Title": " What is a lambda expression in C++?",
            "answer": "A lambda is an anonymous function defined with a simple syntax.",
            "Sample": "Lambda example.",
            "code": "auto add = [](int x, int y) { return x + y; };"
        },
        {
            "id": 67,
            "Title": " What is exception handling in C++?",
            "answer": "Exception handling deals with runtime errors using try, catch, and throw.",
            "Sample": "Exception handling example.",
            "code": "try { throw \"Error\"; } catch(const char* msg) { std::cout << msg; }"
        },
        {
            "id": 68,
            "Title": " What is dynamic memory allocation in C++?",
            "answer": "Dynamic memory allocation is managed with new and delete operators.",
            "Sample": "Allocating and deallocating memory.",
            "code": "int *ptr = new int;\\ndelete ptr;"
        },
        {
            "id": 69,
            "Title": " What is RAII in C++?",
            "answer": "RAII (Resource Acquisition Is Initialization) is a programming idiom for resource management.",
            "Sample": "Using RAII with a class.",
            "code": "class File {\\n    std::fstream file;\\n    public: File() { file.open(\"file.txt\"); }\\n    ~File() { file.close(); }\\n};"
        },
        {
            "id": 70,
            "Title": " What are smart pointers?",
            "answer": "Smart pointers are C++11 pointers that automatically manage memory.",
            "Sample": "Using smart pointers.",
            "code": "std::unique_ptr<int> ptr = std::make_unique<int>(10);"
        },
        {
            "id": 71,
            "Title": " What is multithreading in C++?",
            "answer": "Multithreading allows concurrent execution of threads for better performance.",
            "Sample": "Creating a thread.",
            "code": "#include <thread>\\nvoid func() { /* ... */ }\\nstd::thread t(func);"
        },
        {
            "id": 72,
            "Title": " What is a mutex?",
            "answer": "A mutex is a synchronization primitive that prevents multiple threads from accessing a resource.",
            "Sample": "Using a mutex.",
            "code": "#include <mutex>\\nstd::mutex m;\\nm.lock();\\nm.unlock();"
        },
        {
            "id": 73,
            "Title": " What is a deadlock?",
            "answer": "A deadlock is a situation where two or more threads cannot proceed because they are waiting for each other.",
            "Sample": "Deadlock scenario.",
            "code": "Thread A locks A, Thread B locks B, both wait indefinitely."
        },
        {
            "id": 74,
            "Title": " What are C++ design patterns?",
            "answer": "Design patterns are best practices for software design, such as Singleton, Factory, and Observer.",
            "Sample": "Singleton pattern example.",
            "code": "class Singleton {\\n    static Singleton* instance;\\n    Singleton() {}\\npublic:\\n    static Singleton* getInstance() { return instance; }\\n};"
        },
        {
            "id": 75,
            "Title": " What is a namespace?",
            "answer": "A namespace is a declarative region that provides a scope to the identifiers inside it.",
            "Sample": "Using namespaces.",
            "code": "namespace MyNamespace { int x; }"
        },
        {
            "id": 76,
            "Title": " What is the difference between a reference and a pointer?",
            "answer": "A reference is an alias for another variable, while a pointer holds the memory address of a variable.",
            "Sample": "Using references and pointers.",
            "code": "int a = 10;\\nint &ref = a;\\nint *ptr = &a;"
        },
        {
            "id": 77,
            "Title": " What are move semantics?",
            "answer": "Move semantics allows the resources of a temporary object to be moved to a new object, rather than copied.",
            "Sample": "Using move semantics.",
            "code": "std::vector<int> v1 = {1, 2, 3};\\nstd::vector<int> v2 = std::move(v1);"
        },
        {
            "id": 78,
            "Title": " What is a copy constructor?",
            "answer": "A copy constructor creates a new object as a copy of an existing object.",
            "Sample": "Copy constructor example.",
            "code": "class MyClass {\\n    MyClass(const MyClass& obj) { /* copy logic */ }\\n};"
        },
        {
            "id": 79,
            "Title": " What is the difference between deep copy and shallow copy?",
            "answer": "Shallow copy copies object references, while deep copy duplicates all objects and resources.",
            "Sample": "Deep vs shallow copy.",
            "code": "MyClass obj1;\\nMyClass obj2 = obj1; // shallow copy\\nMyClass obj3 = obj1.clone(); // deep copy"
        },
        {
            "id": 80,
            "Title": " What is a static member?",
            "answer": "A static member is shared across all instances of a class and can be accessed without an object.",
            "Sample": "Using static members.",
            "code": "class MyClass {\\n    static int count;\\n};"
        },
        {
            "id": 81,
            "Title": " What is a destructor?",
            "answer": "A destructor is a special member function invoked when an object is destroyed.",
            "Sample": "Destructor example.",
            "code": "class MyClass {\\n    ~MyClass() { /* cleanup */ }\\n};"
        },
        {
            "id": 82,
            "Title": " What is an abstract class?",
            "answer": "An abstract class cannot be instantiated and typically contains at least one pure virtual function.",
            "Sample": "Defining an abstract class.",
            "code": "class Abstract {\\n    virtual void func() = 0;\\n};"
        },
        {
            "id": 83,
            "Title": " What is a derived class?",
            "answer": "A derived class inherits properties and behaviors from a base class.",
            "Sample": "Creating a derived class.",
            "code": "class Base {};\\nclass Derived : public Base {}; "
        },
        {
            "id": 84,
            "Title": " What is multiple inheritance?",
            "answer": "Multiple inheritance allows a class to inherit from more than one base class.",
            "Sample": "Example of multiple inheritance.",
            "code": "class Base1 {};\\nclass Base2 {};\\nclass Derived : public Base1, public Base2 {};"
        },
        {
            "id": 85,
            "Title": " What is the diamond problem?",
            "answer": "The diamond problem occurs in multiple inheritance when two base classes share a common base class, leading to ambiguity.",
            "Sample": "Diamond problem example.",
            "code": "class A {};\\nclass B : public A {};\\nclass C : public A {};\\nclass D : public B, public C {};"
        },
        {
            "id": 86,
            "Title": " What are templates in C++?",
            "answer": "Templates allow the creation of generic classes and functions.",
            "Sample": "Function template example.",
            "code": "template <typename T> T max(T a, T b) { return (a > b) ? a : b; }"
        },
        {
            "id": 87,
            "Title": " What is the difference between class and structure?",
            "answer": "The primary difference is that members of a class are private by default, while members of a structure are public.",
            "Sample": "Class vs structure.",
            "code": "class MyClass { int x; };\\nstruct MyStruct { int x; };"
        },
        {
            "id": 88,
            "Title": " What are constructors and destructors?",
            "answer": "Constructors initialize objects, while destructors clean up when objects go out of scope.",
            "Sample": "Constructor and destructor example.",
            "code": "class MyClass {\\n    public: MyClass() { /* constructor */ }\\n    ~MyClass() { /* destructor */ }\\n};"
        },
        {
            "id": 89,
            "Title": " What is the role of the 'new' operator?",
            "answer": "The 'new' operator allocates memory on the heap for an object or array.",
            "Sample": "Using the 'new' operator.",
            "code": "MyClass* obj = new MyClass();"
        },
        {
            "id": 90,
            "Title": " What is the role of the 'delete' operator?",
            "answer": "The 'delete' operator frees memory allocated on the heap.",
            "Sample": "Using the 'delete' operator.",
            "code": "delete obj;"
        },
        {
            "id": 91,
            "Title": " What is a stack in C++?",
            "answer": "A stack is a data structure that follows Last In First Out (LIFO) principle.",
            "Sample": "Stack implementation.",
            "code": "std::stack<int> s;"
        },
        {
            "id": 92,
            "Title": " What is a queue in C++?",
            "answer": "A queue is a data structure that follows First In First Out (FIFO) principle.",
            "Sample": "Queue implementation.",
            "code": "std::queue<int> q;"
        },
        {
            "id": 93,
            "Title": " What is a list in C++?",
            "answer": "A list is a sequence container that allows non-contiguous memory allocation.",
            "Sample": "List implementation.",
            "code": "std::list<int> l;"
        },
        {
            "id": 94,
            "Title": " What is a set in C++?",
            "answer": "A set is a container that stores unique elements in a specific order.",
            "Sample": "Set implementation.",
            "code": "std::set<int> s;"
        },
        {
            "id": 95,
            "Title": " What is a map in C++?",
            "answer": "A map is a container that stores elements in key-value pairs.",
            "Sample": "Map implementation.",
            "code": "std::map<int, std::string> m;"
        },
        
            {
                "id": 96,
                "Title": "What is CSS?",
                "answer": "CSS (Cascading Style Sheets) is used to style and layout web pages, including colors, fonts, and spacing.",
                "Sample": "CSS defines how HTML elements should be displayed, making webpages visually appealing.",
                "code": "body {\n    font-family: Arial, sans-serif;\n    background-color: #f0f0f0;\n}"
            },
            {
                "id": 97,
                "Title": "What are CSS selectors?",
                "answer": "CSS selectors are patterns used to select elements for styling based on their tags, classes, IDs, or attributes.",
                "Sample": "Selectors help apply styles to HTML elements using classes, IDs, or element names.",
                "code": ".my-class {\n    color: blue;\n}\n#my-id {\n    background-color: yellow;\n}"
            },
            {
                "id": 98,
                "Title": "How do you add comments in CSS?",
                "answer": "CSS comments are added with `/* comment */` and are ignored by the browser.",
                "Sample": "Use comments to leave notes or explanations within your CSS code.",
                "code": "/* This is a CSS comment */\nbody {\n    margin: 0;\n}"
            },
            {
                "id": 99,
                "Title": "What is the box model in CSS?",
                "answer": "The box model describes the layout of elements using margin, border, padding, and content.",
                "Sample": "Each HTML element can be visualized as boxes with different layers for spacing and styling.",
                "code": "div {\n    margin: 10px;\n    padding: 15px;\n    border: 1px solid black;\n    width: 100px;\n}"
            },
            {
                "id": 100,
                "Title": "How do you center an element in CSS?",
                "answer": "To center an element, you can use margin auto for block elements or flexbox/grid for more control.",
                "Sample": "Center a div using `margin: auto;` or align-items in Flexbox.",
                "code": "/* Using margin auto */\n.container {\n    width: 50%;\n    margin: 0 auto;\n}\n\n/* Using flexbox */\n.flex-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}"
            },
            {
                "id": 101,
                "Title": "What is Flexbox?",
                "answer": "Flexbox is a layout model that makes it easier to design a flexible, responsive layout structure without using float or positioning.",
                "Sample": "Flexbox is used to create layouts that are easy to align, reorder, and distribute within a container.",
                "code": ".flex-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}"
            },
            {
                "id": 102,
                "Title": "How do you use CSS Grid?",
                "answer": "CSS Grid Layout is a two-dimensional layout system for web pages, allowing you to position elements in rows and columns.",
                "Sample": "Use CSS Grid to create complex, multi-row and column layouts.",
                "code": ".grid-container {\n    display: grid;\n    grid-template-columns: auto auto auto;\n    gap: 10px;\n}"
            },
            {
                "id": 103,
                "Title": "What is the difference between padding and margin?",
                "answer": "Padding is the space inside an element, while margin is the space outside the element.",
                "Sample": "Padding controls spacing within the element's border, while margin affects spacing around the element.",
                "code": "div {\n    padding: 20px;\n    margin: 10px;\n}"
            },
            {
                "id": 104,
                "Title": "How do you set a background image in CSS?",
                "answer": "Use the `background-image` property with a URL to set a background image.",
                "Sample": "The `background-image` property sets an image as the background for an element.",
                "code": "body {\n    background-image: url('background.jpg');\n    background-size: cover;\n}"
            },
            {
                "id": 105,
                "Title": " What are CSS animations?",
                "answer": "CSS animations allow you to animate the transition between CSS property states.",
                "Sample": "CSS animations can make elements move, change color, or scale in response to actions.",
                "code": "@keyframes example {\n    from {background-color: red;}\n    to {background-color: yellow;}\n}\n\ndiv {\n    animation: example 5s infinite;\n}"
            },
            {
                "id": 106,
                "Title": " What are CSS transitions?",
                "answer": "CSS transitions allow property changes in CSS values to occur smoothly over a specified duration.",
                "Sample": "Transitions can be applied to any CSS property.",
                "code": "div {\n    transition: background-color 0.5s ease;\n}\n\ndiv:hover {\n    background-color: blue;\n}"
            },
            {
                "id": 107,
                "Title": " What is a CSS preprocessor?",
                "answer": "A CSS preprocessor extends CSS with variables, nesting, and functions, making it more maintainable.",
                "Sample": "Sass and Less are popular CSS preprocessors.",
                "code": "$primary-color: #333;\n\n.button {\n    color: $primary-color;\n}"
            },
            {
                "id": 108,
                "Title": " How do you apply styles to different screen sizes?",
                "answer": "Use media queries to apply different styles for various screen sizes.",
                "Sample": "Media queries make your design responsive.",
                "code": "@media (max-width: 600px) {\n    body {\n        background-color: lightblue;\n    } \n}"
            },
            {
                "id": 109,
                "Title": " What is responsive design?",
                "answer": "Responsive design is an approach that ensures web pages look good on all devices by using flexible layouts, images, and CSS media queries.",
                "Sample": "Responsive design adjusts layouts based on the device's screen size.",
                "code": "body {\n    display: flex;\n    flex-wrap: wrap;\n}"
            },
            {
                "id": 110,
                "Title": " How do you use custom fonts in CSS?",
                "answer": "Use the `@font-face` rule to define custom fonts in your CSS.",
                "Sample": "You can include fonts from various sources, including Google Fonts.",
                "code": "@font-face {\n    font-family: 'MyCustomFont';\n    src: url('mycustomfont.woff2') format('woff2');\n}\n\nh1 {\n    font-family: 'MyCustomFont';\n}"
            },
            {
                "id": 111,
                "Title": " What are pseudo-classes?",
                "answer": "Pseudo-classes are keywords added to selectors that specify a special state of an element.",
                "Sample": "Common pseudo-classes include :hover, :focus, and :nth-child.",
                "code": "a:hover {\n    text-decoration: underline;\n}"
            },
            {
                "id": 112,
                "Title": " What are pseudo-elements?",
                "answer": "Pseudo-elements allow you to style specific parts of an element.",
                "Sample": "Common pseudo-elements include ::before and ::after.",
                "code": "h1::before {\n    content: 'Title: ';\n    font-weight: bold;\n}"
            },
            {
                "id": 113,
                "Title": " What is the `z-index` property?",
                "answer": "The `z-index` property controls the vertical stacking order of elements that overlap.",
                "Sample": "Elements with higher z-index values are stacked above those with lower values.",
                "code": ".box1 {\n    position: absolute;\n    z-index: 1;\n}\n\n.box2 {\n    position: absolute;\n    z-index: 2;\n}"
            },
            {
                "id": 114,
                "Title": " What is the `display` property?",
                "answer": "The `display` property specifies the display behavior of an element, such as block, inline, flex, or grid.",
                "Sample": "Changing the display type can alter layout significantly.",
                "code": "div {\n    display: flex;\n}"
            },
            {
                "id": 115,
                "Title": " What is the `overflow` property?",
                "answer": "The `overflow` property controls what happens when content overflows an element's box.",
                "Sample": "It can be set to visible, hidden, scroll, or auto.",
                "code": "div {\n    overflow: hidden;\n}"
            },
            {
                "id": 116,
                "Title": " How do you create a simple CSS grid?",
                "answer": "Define a container as a grid and specify rows and columns to create a simple layout.",
                "Sample": "A simple grid can be made with just a few lines of CSS.",
                "code": ".grid-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}"
            },
            {
                "id": 117,
                "Title": " What is a CSS sprite?",
                "answer": "A CSS sprite is a single image file that contains multiple images, allowing for faster loading times.",
                "Sample": "Using sprites reduces the number of HTTP requests made by the browser.",
                "code": ".sprite {\n    background-image: url('sprite.png');\n    width: 50px;\n    height: 50px;\n}\n\n.icon1 {\n    background-position: 0 0;\n}\n\n.icon2 {\n    background-position: -50px 0;\n}"
            },
            {
                "id": 118,
                "Title": " What is the difference between inline, block, and inline-block elements?",
                "answer": "Inline elements do not start on a new line, block elements do, and inline-block elements allow for block-level styling while remaining inline.",
                "Sample": "The display property helps define how elements behave in the layout.",
                "code": "span {\n    display: inline;\n}\n\ndiv {\n    display: block;\n}\n\nbutton {\n    display: inline-block;\n}"
            },
            {
                "id": 119,
                "Title": " What are media queries?",
                "answer": "Media queries are a CSS technique used to apply styles based on the viewport size or other device characteristics.",
                "Sample": "They help create responsive designs that adapt to different devices.",
                "code": "@media (max-width: 600px) {\n    body {\n        font-size: 12px;\n    }\n}"
            },
            {
                "id": 120,
                "Title": " How do you hide elements in CSS?",
                "answer": "Use `display: none;` to remove elements from the layout, or `visibility: hidden;` to hide them while keeping their space.",
                "Sample": "Choose the method based on whether you want to maintain layout space.",
                "code": ".hidden {\n    display: none;\n}\n\n.invisible {\n    visibility: hidden;\n}"
            },
            {
                "id": 121,
                "Title": " What is the purpose of the `clear` property?",
                "answer": "The `clear` property is used to control the behavior of floated elements in relation to non-floated elements.",
                "Sample": "It ensures that elements are properly positioned without overlap.",
                "code": "div {\n    clear: both;\n}"
            },
            {
                "id": 122,
                "Title": " How do you use `calc()` in CSS?",
                "answer": "The `calc()` function allows you to perform calculations to set CSS property values dynamically.",
                "Sample": "It's useful for responsive layouts and precise positioning.",
                "code": ".box {\n    width: calc(100% - 50px);\n}"
            },
            {
                "id": 123,
                "Title": " What are custom properties (CSS variables)?",
                "answer": "Custom properties, or CSS variables, are entities defined by CSS authors that contain specific values to be reused throughout a document.",
                "Sample": "They help maintain consistency and simplify changes in styles.",
                "code": "--main-color: #3498db;\n\nbutton {\n    background-color: var(--main-color);\n}"
            },
            {
                "id": 124,
                "Title": " What is a `viewport` in CSS?",
                "answer": "The viewport is the user's visible area of a web page, which varies with the device.",
                "Sample": "Responsive designs take the viewport into account for better user experience.",
                "code": "@viewport {\n    width: device-width;\n    zoom: 1;\n}"
            },
            {
                "id": 125,
                "Title": " How do you create a CSS transition?",
                "answer": "Use the `transition` property to specify which CSS properties should animate and their duration.",
                "Sample": "Transitions enhance user interactions with smooth animations.",
                "code": "button {\n    transition: background-color 0.5s;\n}\n\nbutton:hover {\n    background-color: #3498db;\n}"
            },
            {
                "id": 126,
                "Title": " What is the `filter` property?",
                "answer": "The `filter` property applies graphical effects like blurring or color shifting to an element.",
                "Sample": "Filters can be used for images and backgrounds.",
                "code": "img {\n    filter: blur(5px);\n}"
            },
            {
                "id": 127,
                "Title": " What is the `transition` property?",
                "answer": "The `transition` property allows you to change property values smoothly (over a given duration).",
                "Sample": "Use transitions for smooth changes when an element's state changes.",
                "code": "button {\n    transition: background-color 0.3s ease;\n}\n\nbutton:hover {\n    background-color: red;\n}"
            },
            {
                "id": 128,
                "Title": " How do you change the cursor style in CSS?",
                "answer": "Use the `cursor` property to specify the type of cursor to be displayed when pointing over an element.",
                "Sample": "Different cursor styles can indicate different actions.",
                "code": "button {\n    cursor: pointer;\n}"
            },
            {
                "id": 129,
                "Title": " What is the `position` property?",
                "answer": "The `position` property determines how an element is positioned in the document.",
                "Sample": "Common values include static, relative, absolute, and fixed.",
                "code": "div {\n    position: absolute;\n    top: 10px;\n    left: 20px;\n}"
            },
            {
                "id": 130,
                "Title": " What is the difference between `absolute` and `relative` positioning?",
                "answer": "`relative` positioning positions an element relative to its normal position, while `absolute` positioning positions an element relative to its closest positioned ancestor.",
                "Sample": "Absolute elements can overlap other elements.",
                "code": ".relative {\n    position: relative;\n}\n\n.absolute {\n    position: absolute;\n    top: 0;\n    left: 0;\n}"
            },
            {
                "id": 131,
                "Title": " How do you create a circular shape in CSS?",
                "answer": "Set the border-radius property to 50% for a square element to create a circle.",
                "Sample": "Circles can be used for buttons or image frames.",
                "code": "div {\n    width: 100px;\n    height: 100px;\n    background-color: blue;\n    border-radius: 50%;\n}"
            },
            {
                "id": 132,
                "Title": " How do you create a CSS dropdown menu?",
                "answer": "Use nested lists and CSS to hide/show the dropdown items on hover.",
                "Sample": "Dropdown menus enhance navigation.",
                "code": "ul {\n    list-style-type: none;\n}\n\nul li {\n    position: relative;\n}\n\nul li:hover .dropdown {\n    display: block;\n}"
            },
            {
                "id": 133,
                "Title": " What is the `white-space` property?",
                "answer": "The `white-space` property controls how whitespace inside an element is handled.",
                "Sample": "It can prevent text from wrapping or collapse multiple spaces.",
                "code": "p {\n    white-space: nowrap;\n}"
            },
            {
                "id": 134,
                "Title": " What is the `clip-path` property?",
                "answer": "The `clip-path` property allows you to create complex shapes by clipping an element to a specified path.",
                "Sample": "Use clip-path to create unique visual effects.",
                "code": "div {\n    clip-path: circle(50%);\n}"
            },
            {
                "id": 135,
                "Title": " What is the CSS `transform` property?",
                "answer": "The `transform` property applies 2D or 3D transformations to elements, such as rotate, scale, skew, or translate.",
                "Sample": "Use transform to change an element's shape or position.",
                "code": "div {\n    transform: rotate(45deg);\n}"
            },
            {
                "id": 136,
                "Title": " How do you create a loading spinner using CSS?",
                "answer": "You can create a simple loading spinner using CSS animations.",
                "Sample": "Spinners enhance user experience by indicating loading states.",
                "code": ".spinner {\n    border: 8px solid #f3f3f3;\n    border-top: 8px solid #3498db;\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}"
            },
            {
                "id": 137,
                "Title": " What are CSS frameworks?",
                "answer": "CSS frameworks are pre-prepared libraries that are meant to be used as a base for starting a project.",
                "Sample": "Popular CSS frameworks include Bootstrap, Tailwind CSS, and Foundation.",
                "code": "/* Example of including Bootstrap */\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">"
            },
            {
                "id": 138,
                "Title": " What is the `text-align` property?",
                "answer": "The `text-align` property specifies the horizontal alignment of text in an element.",
                "Sample": "Common values are left, right, center, and justify.",
                "code": "p {\n    text-align: center;\n}"
            },
            {
                "id": 139,
                "Title": " What is the `float` property?",
                "answer": "The `float` property allows elements to float to the left or right of their container, allowing text and inline elements to wrap around them.",
                "Sample": "Float is used for layouts and text wrapping.",
                "code": "img {\n    float: left;\n    margin-right: 10px;\n}"
            },
            {
                "id": 140,
                "Title": " How do you create a full-width layout?",
                "answer": "To create a full-width layout, set the width of the element to 100% and remove any padding and margin.",
                "Sample": "Full-width layouts are commonly used for headers or sections.",
                "code": "header {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n}"
            },
            {
                "id": 141,
                "Title": " What are CSS sprites?",
                "answer": "CSS sprites are a technique to optimize web performance by combining multiple images into a single image.",
                "Sample": "Sprites reduce the number of HTTP requests.",
                "code": ".sprite {\n    background-image: url('spritesheet.png');\n    width: 50px; /* width of one sprite */\n    height: 50px; /* height of one sprite */\n}\n\n.sprite1 { background-position: 0 0; }\n.sprite2 { background-position: -50px 0; }"
            },
            {
                "id": 142,
                "Title": " What is the `opacity` property?",
                "answer": "The `opacity` property sets the transparency level of an element.",
                "Sample": "Values range from 0 (fully transparent) to 1 (fully opaque).",
                "code": "div {\n    opacity: 0.5;\n}"
            },
            {
                "id": 143,
                "Title": " How do you create rounded corners in CSS?",
                "answer": "Use the `border-radius` property to create rounded corners for elements.",
                "Sample": "Rounded corners improve aesthetics and usability.",
                "code": "div {\n    border: 1px solid #000;\n    border-radius: 10px;\n}"
            },
            {
                "id": 144,
                "Title": " What is a CSS framework?",
                "answer": "A CSS framework is a pre-prepared library that provides a base for styling web applications.",
                "Sample": "Frameworks speed up development and ensure consistency.",
                "code": "/* Including Tailwind CSS */\n<link href=\"https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css\" rel=\"stylesheet\">"
            },
            {
                "id": 145,
                "Title": " What are transitions in CSS?",
                "answer": "Transitions are a way to create smooth changes in CSS property values over a specified duration.",
                "Sample": "Transitions can improve user experience by creating a smoother visual effect.",
                "code": "div {\n    transition: all 0.3s ease;\n}"
            },
            {
                "id": 146,
                "Title": " What is the `align-items` property in Flexbox?",
                "answer": "The `align-items` property is used to align flex items along the cross axis in a flex container.",
                "Sample": "Common values include flex-start, flex-end, center, baseline, and stretch.",
                "code": ".container {\n    display: flex;\n    align-items: center;\n}"
            },
            {
                "id": 147,
                "Title": " How do you create a flexbox layout?",
                "answer": "Use the display property with a value of flex on a container element.",
                "Sample": "Flexbox makes it easier to design responsive layouts.",
                "code": ".container {\n    display: flex;\n}"
            },
            {
                "id": 148,
                "Title": " What is the `justify-content` property in Flexbox?",
                "answer": "The `justify-content` property is used to align flex items along the main axis in a flex container.",
                "Sample": "Common values include flex-start, flex-end, center, space-between, and space-around.",
                "code": ".container {\n    display: flex;\n    justify-content: space-between;\n}"
            },
            {
                "id": 149,
                "Title": " What is the difference between `inline`, `block`, and `inline-block` elements?",
                "answer": "`inline` elements do not start on a new line, `block` elements do, and `inline-block` elements can have width and height while remaining inline.",
                "Sample": "Understanding these types helps manage layout effectively.",
                "code": "span {\n    display: inline;\n}\n\ndiv {\n    display: block;\n}\n\nbutton {\n    display: inline-block;\n}"
            },
            {
                "id": 150,
                "Title": " What is a media query?",
                "answer": "Media queries allow you to apply CSS rules based on the device's characteristics, such as width or orientation.",
                "Sample": "Media queries enable responsive design.",
                "code": "@media (max-width: 600px) {\n    body {\n        background-color: lightblue;\n    }\n}"
            },
            {
                "id": 151,
                "Title": " How do you create a grid layout in CSS?",
                "answer": "Use the `display: grid` property on a container element to create a grid layout.",
                "Sample": "Grid layouts offer a two-dimensional layout system.",
                "code": ".grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n}"
            },
            {
                "id": 152,
                "Title": " What is the `gap` property in CSS Grid?",
                "answer": "The `gap` property defines the space between grid items.",
                "Sample": "Gap improves spacing and layout clarity.",
                "code": ".grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 10px;\n}"
            },
            {
                "id": 153,
                "Title": " What is the `minmax` function in CSS Grid?",
                "answer": "The `minmax` function defines a size range for grid tracks, specifying minimum and maximum values.",
                "Sample": "Minmax helps create responsive layouts.",
                "code": ".grid {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(100px, 1fr));\n}"
            },
            {
                "id": 154,
                "Title": " What are custom properties (CSS variables)?",
                "answer": "Custom properties, or CSS variables, are entities defined by CSS authors that contain specific values to be reused throughout a document.",
                "Sample": "CSS variables can be defined using the `--` prefix.",
                "code": ":root {\n    --main-color: blue;\n}\n\nh1 {\n    color: var(--main-color);\n}"
            },
            {
                "id": 155,
                "Title": " How do you apply CSS to a specific element?",
                "answer": "Use selectors to target specific elements in your CSS.",
                "Sample": "Selectors can be based on element type, class, or ID.",
                "code": "#header {\n    background-color: grey;\n}\n\n.button {\n    color: white;\n}"
            },
            
                {
                    "id": 156,
                    "Title": "What is EJS?",
                    "answer": "EJS (Embedded JavaScript) is a templating engine that enables JavaScript and HTML blending, allowing JavaScript logic to run in HTML templates.",
                    "Sample": "EJS can dynamically render values in HTML using <%= %> tags.",
                    "code": "<h1><%= title %></h1>"
                },
                {
                    "id": 157,
                    "Title": "How do you include an EJS template?",
                    "answer": "You can include an EJS file in another EJS file using the <%- include() %> syntax.",
                    "Sample": "For example, to include a header file:",
                    "code": "<%- include('header') %>"
                },
                {
                    "id": 158,
                    "Title": "How do you add JavaScript expressions in EJS?",
                    "answer": "You can use <% %> tags for JavaScript expressions, which do not produce output, or <%= %> for output-producing expressions.",
                    "Sample": "Using a conditional in EJS:",
                    "code": "<% if(user) { %> <h1>Welcome <%= user.name %></h1> <% } %>"
                },
                {
                    "id": 159,
                    "Title": "What is the purpose of <%= %> in EJS?",
                    "answer": "The <%= %> syntax is used to output data within an EJS template.",
                    "Sample": "For example, to output a variable called name:",
                    "code": "<p>Name: <%= name %></p>"
                },
                {
                    "id": 160,
                    "Title": "How to add HTML comments in EJS?",
                    "answer": "Use standard HTML comment syntax <!-- --> to comment in EJS.",
                    "Sample": "For example:",
                    "code": "<!-- This is a comment in EJS -->"
                },
                {
                    "id": 161,
                    "Title": "How do you add multi-line JavaScript code in EJS?",
                    "answer": "Wrap JavaScript logic within <% %> tags and separate lines with a semicolon.",
                    "Sample": "Multi-line for loop example:",
                    "code": "<% for (let i = 0; i < 5; i++) { %> <p><%= i %></p> <% } %>"
                },
                {
                    "id": 162,
                    "Title": "How can you escape HTML in EJS?",
                    "answer": "Use <%= %> for escaped output and <%- %> for unescaped HTML output.",
                    "Sample": "For unescaped HTML:",
                    "code": "<%- \"<h1>Unescaped Heading</h1>\" %>"
                },
                {
                    "id": 163,
                    "Title": "How to pass data to an EJS template?",
                    "answer": "You can pass data as an object when rendering the template.",
                    "Sample": "Example in Express.js:",
                    "code": "res.render('index', { name: 'John' });"
                },
                {
                    "id": 164,
                    "Title": "How to loop through an array in EJS?",
                    "answer": "Use a for loop or forEach inside <% %> tags.",
                    "Sample": "Looping through an array:",
                    "code": "<% items.forEach(function(item) { %> <p><%= item %></p> <% }); %>"
                },
                {
                    "id": 165,
                    "Title": " How to render a list in EJS?",
                    "answer": "Use an array and loop to render a list of items.",
                    "Sample": "Rendering a list of names:",
                    "code": "<ul> <% names.forEach(name => { %> <li><%= name %></li> <% }); %> </ul>"
                },
                {
                    "id": 166,
                    "Title": " How to conditionally render content in EJS?",
                    "answer": "Use if statements inside <% %> tags.",
                    "Sample": "Conditional rendering example:",
                    "code": "<% if(user) { %> <p>Welcome, <%= user.name %></p> <% } else { %> <p>Please log in.</p> <% } %>"
                },
                {
                    "id": 167,
                    "Title": " How to escape variables to prevent XSS?",
                    "answer": "Using <%= %> will escape output to prevent XSS. Use <%- %> for unescaped output.",
                    "Sample": "Escaped output example:",
                    "code": "<p><%= userInput %></p>"
                },
                {
                    "id": 168,
                    "Title": " How to format a date in EJS?",
                    "answer": "Format dates before passing them to EJS, or use JavaScript inside the template.",
                    "Sample": "Displaying the current date:",
                    "code": "<p>Today is: <%= new Date().toLocaleDateString() %></p>"
                },
                {
                    "id": 169,
                    "Title": " How to use custom filters in EJS?",
                    "answer": "Custom filters are not built-in to EJS, so use JavaScript functions instead.",
                    "Sample": "For example, a capitalize function:",
                    "code": "<p><%= capitalize(name) %></p>"
                },
                {
                    "id": 170,
                    "Title": " Can you add CSS in EJS?",
                    "answer": "CSS can be added to EJS templates just like in HTML.",
                    "Sample": "Adding a CSS link in EJS:",
                    "code": "<link rel=\"stylesheet\" href=\"/styles.css\">"
                },
                {
                    "id": 171,
                    "Title": " Can you use inline styles in EJS?",
                    "answer": "Yes, inline styles work the same as in HTML.",
                    "Sample": "Adding inline styles:",
                    "code": "<p style=\"color: red;\">Red text</p>"
                },
                {
                    "id": 172,
                    "Title": " How to include external JavaScript in EJS?",
                    "answer": "Use the <script> tag to include JavaScript.",
                    "Sample": "Adding a script tag:",
                    "code": "<script src=\"/script.js\"></script>"
                },
                {
                    "id": 173,
                    "Title": " How to output JSON data in EJS?",
                    "answer": "Use JSON.stringify to format JavaScript objects for EJS output.",
                    "Sample": "Outputting a JavaScript object:",
                    "code": "<pre><%= JSON.stringify(data, null, 2) %></pre>"
                },
                {
                    "id": 174,
                    "Title": " Can EJS work with partials?",
                    "answer": "Yes, EJS supports partials using the <%- include %> function.",
                    "Sample": "Including a partial footer:",
                    "code": "<%- include('footer') %>"
                },
                {
                    "id": 175,
                    "Title": " Can EJS templates be nested?",
                    "answer": "Yes, you can use nested includes to modularize EJS templates.",
                    "Sample": "Including a header and footer:",
                    "code": "<%- include('header') %> <p>Main content</p> <%- include('footer') %>"
                },

            
    {
        "id": 176,
        "Title": "What is Express.js?",
        "answer": "Express.js is a web application framework for Node.js, designed for building web applications and APIs. It simplifies the server creation process and helps manage routes, middleware, and requests.",
        "Sample": "Used to create RESTful APIs and web applications.",
        "code": "const express = require('express');\nconst app = express();\napp.listen(3000, () => console.log('Server is running on port 3000'));"
    },
    {
        "id": 177,
        "Title": "How to create a basic Express server?",
        "answer": "You can create a basic Express server by requiring the express module and calling the `express()` function, then setting up a listener on a specified port.",
        "Sample": "Creating a server that responds with 'Hello World'.",
        "code": "app.get('/', (req, res) => res.send('Hello World!'));"
    },
    {
        "id": 178,
        "Title": "What are routes in Express?",
        "answer": "Routes are used to define the endpoints of your application, determining how the server should respond to different requests.",
        "Sample": "You can define routes for different HTTP methods like GET, POST, etc.",
        "code": "app.get('/users', (req, res) => { /* ... */ });"
    },
    {
        "id": 179,
        "Title": "What is middleware in Express?",
        "answer": "Middleware functions are functions that have access to the request and response objects and can perform operations on them before passing control to the next middleware function.",
        "Sample": "Used for logging, authentication, etc.",
        "code": "app.use((req, res, next) => { console.log('Request received'); next(); });"
    },
    {
        "id": 180,
        "Title": "How do you handle GET requests?",
        "answer": "You can handle GET requests using `app.get()` method, which takes the route and a callback function as arguments.",
        "Sample": "Fetching data from the server.",
        "code": "app.get('/api/data', (req, res) => { res.json({ message: 'Data fetched!' }); });"
    },
    {
        "id": 181,
        "Title": "How to handle POST requests in Express?",
        "answer": "Handle POST requests using `app.post()` method, which is used to send data to the server.",
        "Sample": "Creating a new user.",
        "code": "app.post('/api/users', (req, res) => { /* Create user logic */ });"
    },
    {
        "id": 182,
        "Title": "What is `body-parser` in Express?",
        "answer": "`body-parser` is a middleware that parses the body of incoming requests and makes the data available under `req.body`.",
        "Sample": "Used to handle JSON and URL-encoded data.",
        "code": "const bodyParser = require('body-parser');\napp.use(bodyParser.json());"
    },
    {
        "id": 183,
        "Title": "How to serve static files in Express?",
        "answer": "You can serve static files using the `express.static` middleware, which allows you to specify a directory containing static files.",
        "Sample": "Serving images, CSS, or JavaScript files.",
        "code": "app.use(express.static('public'));"
    },
    {
        "id": 184,
        "Title": "How do you implement error handling in Express?",
        "answer": "Error handling can be implemented by defining an error-handling middleware function that takes four arguments: err, req, res, and next.",
        "Sample": "Catching errors during request processing.",
        "code": "app.use((err, req, res, next) => { res.status(500).send('Something went wrong!'); });"
    },
    {
        "id": 185,
        "Title": " What are query parameters?",
        "answer": "Query parameters are key-value pairs attached to the end of a URL, commonly used to filter data or pass information.",
        "Sample": "Fetching users with specific criteria.",
        "code": "app.get('/api/users', (req, res) => { const { age } = req.query; /* Logic */ });"
    },
    {
        "id": 186,
        "Title": " How to use route parameters?",
        "answer": "Route parameters are named segments of the URL that can be accessed in the request object using `req.params`.",
        "Sample": "Fetching a user by their ID.",
        "code": "app.get('/api/users/:id', (req, res) => { const userId = req.params.id; /* Logic */ });"
    },
    {
        "id": 187,
        "Title": " What is the purpose of the `next()` function?",
        "answer": "The `next()` function is used to pass control to the next middleware function in the stack. It can also be called with an error to skip to the error-handling middleware.",
        "Sample": "Handling asynchronous operations.",
        "code": "app.get('/', (req, res, next) => { next(); });"
    },
    {
        "id": 188,
        "Title": " How do you set response headers?",
        "answer": "You can set response headers using the `res.set()` method, which allows you to define custom headers for the response.",
        "Sample": "Setting CORS headers.",
        "code": "res.set('Access-Control-Allow-Origin', '*');"
    },
    {
        "id": 189,
        "Title": " How to redirect in Express?",
        "answer": "You can redirect users to a different route using the `res.redirect()` method.",
        "Sample": "Redirecting after a successful login.",
        "code": "res.redirect('/dashboard');"
    },
    {
        "id": 190,
        "Title": " How to implement CORS in Express?",
        "answer": "CORS (Cross-Origin Resource Sharing) can be implemented using the `cors` middleware, which allows you to specify which origins can access your resources.",
        "Sample": "Enabling CORS for all origins.",
        "code": "const cors = require('cors');\napp.use(cors());"
    },
    {
        "id": 191,
        "Title": " What is the purpose of the `app.listen()` method?",
        "answer": "The `app.listen()` method starts the server and listens for incoming connections on a specified port.",
        "Sample": "Starting the server on port 3000.",
        "code": "app.listen(3000, () => console.log('Server running on port 3000'));"
    },
    {
        "id": 192,
        "Title": " How to handle file uploads in Express?",
        "answer": "You can handle file uploads using the `multer` middleware, which parses `multipart/form-data` and stores uploaded files.",
        "Sample": "Uploading a profile picture.",
        "code": "const multer = require('multer');\nconst upload = multer({ dest: 'uploads/' });\napp.post('/upload', upload.single('file'), (req, res) => { /* Logic */ });"
    },
    {
        "id": 193,
        "Title": " What is the `req` object?",
        "answer": "The `req` object represents the HTTP request and contains information about the request such as headers, parameters, and body.",
        "Sample": "Accessing user data from the request.",
        "code": "app.get('/api/user', (req, res) => { const userData = req.body; });"
    },
    {
        "id": 194,
        "Title": " What is the `res` object?",
        "answer": "The `res` object represents the HTTP response that an Express app sends when it gets an HTTP request.",
        "Sample": "Sending a JSON response.",
        "code": "res.json({ message: 'Success' });"
    },
    {
        "id": 195,
        "Title": " How to implement session management in Express?",
        "answer": "You can implement session management using the `express-session` middleware, which allows you to store session data on the server.",
        "Sample": "Storing user login information.",
        "code": "const session = require('express-session');\napp.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));"
    },
    {
        "id": 196,
        "Title": " What are template engines?",
        "answer": "Template engines allow you to generate HTML dynamically by embedding variables and logic within your HTML templates.",
        "Sample": "Using EJS to render views.",
        "code": "app.set('view engine', 'ejs');"
    },
    {
        "id": 197,
        "Title": " How to handle asynchronous code in Express?",
        "answer": "You can handle asynchronous code using async/await or Promises to manage operations that take time, like database queries.",
        "Sample": "Fetching data from a database.",
        "code": "app.get('/api/data', async (req, res) => { const data = await getData(); res.json(data); });"
    },
    {
        "id": 198,
        "Title": " What is the `express.Router()`?",
        "answer": "The `express.Router()` is a class that helps create modular, mountable route handlers. It allows you to organize routes into separate files.",
        "Sample": "Creating a separate router for user-related routes.",
        "code": "const userRouter = express.Router();\nuserRouter.get('/', (req, res) => { /* Logic */ });"
    },
    {
        "id": 199,
        "Title": " How to implement rate limiting in Express?",
        "answer": "Rate limiting can be implemented using middleware to control the number of requests a client can make to your API within a specified time period.",
        "Sample": "Preventing abuse of an API endpoint.",
        "code": "const rateLimit = require('express-rate-limit');\nconst limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });\napp.use(limiter);"
    },
    {
        "id": 200,
        "Title": " How to use environment variables?",
        "answer": "Environment variables can be used to store configuration settings, such as database credentials or API keys, using the `dotenv` package.",
        "Sample": "Storing sensitive data securely.",
        "code": "require('dotenv').config();\nconst dbPassword = process.env.DB_PASSWORD;"
    },
    {
        "id": 201,
        "Title": " What is the purpose of the `app.use()` method?",
        "answer": "The `app.use()` method is used to mount middleware functions at a specific path. It can be used for handling requests, serving static files, and applying other middleware functions.",
        "Sample": "Using middleware to log requests.",
        "code": "app.use((req, res, next) => { console.log(req.method, req.url); next(); });"
    },
    {
        "id": 202,
        "Title": " How to enable HTTPS in Express?",
        "answer": "To enable HTTPS, you need to create an HTTPS server using the `https` module and provide your SSL certificate and key.",
        "Sample": "Setting up an HTTPS server.",
        "code": "const https = require('https');\nconst fs = require('fs');\nconst options = { key: fs.readFileSync('key.pem'), cert: fs.readFileSync('cert.pem') };\nhttps.createServer(options, app).listen(3443);"
    },
    {
        "id": 203,
        "Title": " What is the difference between `app.get()` and `app.post()`?",
        "answer": "`app.get()` is used to handle GET requests, while `app.post()` is used for POST requests. GET requests are typically used to retrieve data, while POST requests are used to send data to the server.",
        "Sample": "Fetching data vs. submitting data.",
        "code": "app.get('/api/users', (req, res) => { /* Logic */ });\napp.post('/api/users', (req, res) => { /* Logic */ });"
    },
    {
        "id": 204,
        "Title": " How do you implement logging in Express?",
        "answer": "You can implement logging using middleware such as `morgan` or by creating custom middleware functions to log request details.",
        "Sample": "Logging HTTP requests.",
        "code": "const morgan = require('morgan');\napp.use(morgan('dev'));"
    },
    {
        "id": 205,
        "Title": " How to set up a proxy in Express?",
        "answer": "You can set up a proxy by using middleware like `http-proxy-middleware` to route requests to another server or API.",
        "Sample": "Proxying requests to an API.",
        "code": "const { createProxyMiddleware } = require('http-proxy-middleware');\napp.use('/api', createProxyMiddleware({ target: 'http://example.com', changeOrigin: true }));"
    },
    {
        "id": 206,
        "Title": " How to manage sessions with `express-session`?",
        "answer": "You can manage sessions in Express using the `express-session` middleware, which allows you to store user session data in memory, cookies, or a database.",
        "Sample": "Storing user login sessions.",
        "code": "app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));"
    },
    {
        "id": 207,
        "Title": " What are sub-apps in Express?",
        "answer": "Sub-apps are instances of the `express` application that can be used to modularize your application and create separate routes and middleware.",
        "Sample": "Creating a sub-app for admin routes.",
        "code": "const adminApp = express();\nadminApp.get('/dashboard', (req, res) => { res.send('Admin Dashboard'); });\napp.use('/admin', adminApp);"
    },
    {
        "id": 208,
        "Title": " How do you set up error handling middleware?",
        "answer": "Error handling middleware can be set up by defining a middleware function that takes four arguments: err, req, res, and next. This middleware should be defined after all other middleware and routes.",
        "Sample": "Catching errors in your application.",
        "code": "app.use((err, req, res, next) => { res.status(500).send('Server Error'); });"
    },
    {
        "id": 209,
        "Title": " What is the purpose of the `res.status()` method?",
        "answer": "The `res.status()` method is used to set the HTTP status code of the response. It allows you to specify whether the request was successful, resulted in an error, etc.",
        "Sample": "Setting a 404 Not Found response.",
        "code": "res.status(404).send('Not Found');"
    },
    {
        "id": 210,
        "Title": " How to handle timeouts in Express?",
        "answer": "You can handle timeouts by setting a timeout on your HTTP server or by using middleware to reject requests that take too long.",
        "Sample": "Rejecting long-running requests.",
        "code": "const server = app.listen(3000);\nserver.setTimeout(5000); // 5 seconds"
    },
    {
        "id": 211,
        "Title": " How to use EJS for templating?",
        "answer": "EJS (Embedded JavaScript) is a templating engine that allows you to embed JavaScript code into your HTML.",
        "Sample": "Rendering dynamic views.",
        "code": "app.get('/profile', (req, res) => { res.render('profile', { user: req.user }); });"
    },
    {
        "id": 212,
        "Title": " What is the `passport` package?",
        "answer": "Passport is a middleware for Node.js that simplifies authentication, providing various strategies for different types of authentication.",
        "Sample": "Implementing local or OAuth authentication.",
        "code": "const passport = require('passport');"
    },
    {
        "id": 213,
        "Title": " How to manage cookies in Express?",
        "answer": "You can manage cookies using the `cookie-parser` middleware, which allows you to read and write cookies.",
        "Sample": "Storing user preferences.",
        "code": "const cookieParser = require('cookie-parser');\napp.use(cookieParser());"
    },
    {
        "id": 214,
        "Title": " How to set up HTTPS in Express?",
        "answer": "To set up HTTPS, you need to create an HTTPS server using Node.js's `https` module and provide SSL certificates.",
        "Sample": "Securing your application.",
        "code": "const https = require('https');\nhttps.createServer(options, app).listen(443);"
    },
    {
        "id": 215,
        "Title": " How to implement rate limiting?",
        "answer": "Rate limiting can be implemented using the `express-rate-limit` middleware to limit the number of requests from a client.",
        "Sample": "Preventing abuse of APIs.",
        "code": "const rateLimit = require('express-rate-limit');\nconst limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });\napp.use(limiter);"
    },
    {
        "id": 216,
        "Title": " What are HTTP status codes?",
        "answer": "HTTP status codes indicate the outcome of an HTTP request, such as 200 for success, 404 for not found, and 500 for server error.",
        "Sample": "Returning appropriate status codes.",
        "code": "res.status(404).send('Not Found');"
    },
    {
        "id": 217,
        "Title": " How to set up a custom error handler?",
        "answer": "You can set up a custom error handler by defining a middleware function that handles errors based on your requirements.",
        "Sample": "Logging errors to a file.",
        "code": "app.use((err, req, res, next) => { console.error(err.stack); res.status(500).send('Something broke!'); });"
    },
    {
        "id": 218,
        "Title": " What is the difference between `app.get()` and `app.all()`?",
        "answer": "`app.get()` is used to handle GET requests, while `app.all()` handles all HTTP methods for a specific route.",
        "Sample": "Handling multiple request types.",
        "code": "app.all('/api/*', (req, res) => { /* Logic */ });"
    },
    {
        "id": 219,
        "Title": " How to set up a health check endpoint?",
        "answer": "You can set up a health check endpoint to monitor the status of your application by defining a simple route.",
        "Sample": "Returning application status.",
        "code": "app.get('/health', (req, res) => res.json({ status: 'OK' }));"
    },
    {
        "id": 220,
        "Title": " How to use compression middleware?",
        "answer": "Compression middleware is used to gzip or deflate the response bodies to optimize the performance of your application.",
        "Sample": "Reducing response sizes.",
        "code": "const compression = require('compression');\napp.use(compression());"
    },
    {
        "id": 221,
        "Title": " What is the purpose of using `async` and `await`?",
        "answer": "Using `async` and `await` allows you to write asynchronous code that looks synchronous, improving readability and error handling.",
        "Sample": "Fetching data from a database without callbacks.",
        "code": "app.get('/data', async (req, res) => { const data = await fetchData(); res.send(data); });"
    },
    {
        "id": 222,
        "Title": " How to use static files in Express?",
        "answer": "You can serve static files (like images, CSS, and JavaScript) using the `express.static` middleware.",
        "Sample": "Serving CSS and JavaScript files.",
        "code": "app.use(express.static('public'));"
    },
    {
        "id": 223,
        "Title": " How to implement CORS in Express?",
        "answer": "You can implement CORS (Cross-Origin Resource Sharing) using the `cors` middleware.",
        "Sample": "Allowing cross-origin requests.",
        "code": "const cors = require('cors');\napp.use(cors());"
    },
    {
        "id": 224,
        "Title": " How to use the `body-parser` middleware?",
        "answer": "The `body-parser` middleware parses incoming request bodies in a middleware before your handlers, making it available under the `req.body` property.",
        "Sample": "Parsing JSON request bodies.",
        "code": "const bodyParser = require('body-parser');\napp.use(bodyParser.json());"
    },
    {
        "id": 225,
        "Title": " How to manage sessions in Express?",
        "answer": "You can manage sessions using the `express-session` middleware to keep track of user sessions.",
        "Sample": "Storing user login information.",
        "code": "const session = require('express-session');\napp.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));"
    },
    {
        "id": 226,
        "Title": " How to implement file uploads in Express?",
        "answer": "You can implement file uploads using the `multer` middleware to handle multipart/form-data.",
        "Sample": "Uploading profile pictures.",
        "code": "const multer = require('multer');\nconst upload = multer({ dest: 'uploads/' });\napp.post('/upload', upload.single('file'), (req, res) => { /* Logic */ });"
    },
    {
        "id": 227,
        "Title": " How to use template engines in Express?",
        "answer": "You can use template engines like Pug, EJS, or Handlebars to render dynamic HTML pages.",
        "Sample": "Rendering a page with user data.",
        "code": "app.set('view engine', 'ejs');"
    },
    {
        "id": 228,
        "Title": " How to handle form submissions in Express?",
        "answer": "You can handle form submissions by parsing the form data and responding accordingly.",
        "Sample": "Handling user sign-up forms.",
        "code": "app.post('/signup', (req, res) => { const { username, password } = req.body; /* Logic */ });"
    },
    {
        "id": 229,
        "Title": " How to set response headers in Express?",
        "answer": "You can set custom response headers using the `res.set()` method.",
        "Sample": "Setting content type and cache control.",
        "code": "res.set('Content-Type', 'application/json');"
    },
    {
        "id": 230,
        "Title": " How to redirect requests in Express?",
        "answer": "You can redirect requests to another route using the `res.redirect()` method.",
        "Sample": "Redirecting from /login to /dashboard.",
        "code": "res.redirect('/dashboard');"
    },
    {
        "id": 231,
        "Title": " How to implement error handling middleware?",
        "answer": "You can implement custom error handling middleware to catch and respond to errors in a centralized manner.",
        "Sample": "Logging errors and sending a response.",
        "code": "app.use((err, req, res, next) => { console.error(err); res.status(500).send('Something went wrong!'); });"
    },
    {
        "id": 232,
        "Title": " How to use query parameters in Express?",
        "answer": "You can access query parameters from the URL using `req.query`.",
        "Sample": "Getting search filters from a request.",
        "code": "app.get('/search', (req, res) => { const { q } = req.query; /* Logic */ });"
    },
    {
        "id": 233,
        "Title": " How to create a middleware function?",
        "answer": "You can create a middleware function by defining a function that takes `req`, `res`, and `next` parameters.",
        "Sample": "Logging request details.",
        "code": "const logger = (req, res, next) => { console.log(`${req.method} ${req.url}`); next(); };"
    },
    {
        "id": 234,
        "Title": " How to handle 404 errors in Express?",
        "answer": "You can handle 404 errors by defining a middleware function that catches requests to non-existent routes.",
        "Sample": "Returning a custom 404 page.",
        "code": "app.use((req, res) => { res.status(404).send('Not Found'); });"
    },
    {
        "id": 235,
        "Title": " What is the purpose of the `next()` function?",
        "answer": "The `next()` function is used to pass control to the next middleware function in the stack.",
        "Sample": "Controlling middleware execution order.",
        "code": "app.use((req, res, next) => { console.log('Middleware 1'); next(); });"
    },

        {
            "id": 236,
            "Title": "What is Go?",
            "answer": "Go is an open-source programming language developed by Google, known for its efficiency, simplicity, and ease of concurrency.",
            "Sample": "instructions for your operating system.",
            "code": "mkdir ~/go_projects\ncd ~/go_projects"
        },
        {
            "id": 237,
            "Title": "How do you declare a variable in Go?",
            "answer": "Use the `var` keyword or shorthand `:=`.",
            "Sample": "var x int = 5",
            "code": "x := 5"
        },
        {
            "id": 238,
            "Title": "Explain if-else in Go.",
            "answer": "If-else statements allow conditional execution of code blocks.",
            "Sample": "if x > 0 { ... } else { ... }",
            "code": "if x > 0 {\n  fmt.Println(\"Positive\")\n} else {\n  fmt.Println(\"Non-positive\")\n}"
        },
        {
            "id": 239,
            "Title": "How to use a for loop in Go?",
            "answer": "Go's `for` loop can iterate over sequences or run with conditions.",
            "Sample": "for i := 0; i < 10; i++",
            "code": "for i := 0; i < 10; i++ {\n  fmt.Println(i)\n}"
        },
        {
            "id": 240,
            "Title": "What is a slice?",
            "answer": "A slice is a dynamically-sized, flexible view into the elements of an array.",
            "Sample": "mySlice := []int{1, 2, 3}",
            "code": "mySlice := []int{1, 2, 3}"
        },
        {
            "id": 241,
            "Title": "What is a map in Go?",
            "answer": "A map is a collection of key-value pairs in Go.",
            "Sample": "map[string]int",
            "code": "myMap := map[string]int{\"a\": 1, \"b\": 2}"
        },
        {
            "id": 242,
            "Title": "How do you define a function?",
            "answer": "Functions in Go are defined with `func` keyword.",
            "Sample": "func add(a int, b int) int",
            "code": "func add(a int, b int) int {\n  return a + b\n}"
        },
        {
            "id": 243,
            "Title": "What is a pointer?",
            "answer": "A pointer holds the memory address of a variable.",
            "Sample": "var ptr *int",
            "code": "var ptr *int\nptr = &x"
        },
        {
            "id": 244,
            "Title": "How to handle errors in Go?",
            "answer": "Go uses error handling by returning an `error` type from functions.",
            "Sample": "func myFunc() (int, error)",
            "code": "if err != nil {\n  fmt.Println(err)\n}"
        },
        {
            "id": 245,
            "Title": " What are Goroutines?",
            "answer": "Goroutines are lightweight threads managed by the Go runtime.",
            "Sample": "go myFunction()",
            "code": "go myFunction()"
        },
        {
            "id": 246,
            "Title": " What is a struct?",
            "answer": "Structs are collections of fields to create complex data types.",
            "Sample": "type Person struct { name string; age int }",
            "code": "type Person struct {\n  name string\n  age int\n}"
        },
        {
            "id": 247,
            "Title": " How to implement interfaces?",
            "answer": "Interfaces define method signatures that a type must implement.",
            "Sample": "type Animal interface { Speak() }",
            "code": "type Animal interface {\n  Speak() string\n}"
        },
        {
            "id": 248,
            "Title": " Explain defer in Go.",
            "answer": "`defer` delays the execution of a function until the surrounding function returns.",
            "Sample": "defer fmt.Println('End')",
            "code": "defer fmt.Println(\"End\")"
        },
        {
            "id": 249,
            "Title": " What are channels in Go?",
            "answer": "Channels allow Goroutines to communicate with each other.",
            "Sample": "ch := make(chan int)",
            "code": "ch := make(chan int)"
        },
        {
            "id": 250,
            "Title": " Explain select statement.",
            "answer": "`select` lets a Goroutine wait on multiple channels.",
            "Sample": "select { case x := <-ch1: ... }",
            "code": "select {\ncase x := <-ch1:\n  fmt.Println(x)\ncase y := <-ch2:\n  fmt.Println(y)\n}"
        },
        {
            "id": 251,
            "Title": " How to define constants?",
            "answer": "Constants are defined using the `const` keyword.",
            "Sample": "const Pi = 3.14",
            "code": "const Pi = 3.14"
        },
        {
            "id": 252,
            "Title": " Explain Go's memory management.",
            "answer": "Go has garbage collection to automatically manage memory. This means that the Go runtime automatically frees up memory that is no longer in use, allowing developers to focus on writing code without having to manually manage memory allocation and deallocation.",
            "Sample": "For example, when you create a variable and it goes out of scope, the memory it occupied is reclaimed by the garbage collector.",
            "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    // Allocating memory for an integer\n    x := 10\n    fmt.Println(x)\n    // x will be automatically cleaned up when it goes out of scope\n}"
        },
        
        {
            "id": 253,
            "Title": " What is the `init` function?",
            "answer": "`init` runs before the main function, initializing packages.",
            "Sample": "func init() {}",
            "code": "func init() {\n  fmt.Println(\"Initialization\")\n}"
        },
        {
            "id": 254,
            "Title": " How to work with JSON in Go?",
            "answer": "Use `encoding/json` package to marshal and unmarshal JSON.",
            "Sample": "json.Marshal(obj)",
            "code": "data, _ := json.Marshal(obj)"
        },
        {
            "id": 255,
            "Title": " Explain embedding in Go.",
            "answer": "Embedding lets one struct include another, adding its fields and methods.",
            "Sample": "type Car struct { Vehicle }",
            "code": "type Car struct {\n  Vehicle\n}"
        },
        {
            "id": 256,
            "Title": " What is method receiver?",
            "answer": "Method receivers bind functions to structs in Go.",
            "Sample": "func (p *Person) Speak()",
            "code": "func (p *Person) Speak() {\n  fmt.Println(\"Hello\")\n}"
        },
        {
            "id": 257,
            "Title": " Explain nil slices vs empty slices.",
            "answer": "Nil slices have zero length and capacity, while empty slices have zero length but allocated space.",
            "Sample": "var s []int",
            "code": "s := []int{}"
        },
        {
            "id": 258,
            "Title": " What are type assertions?",
            "answer": "Type assertions provide access to an interface's concrete type.",
            "Sample": "value, ok := i.(string)",
            "code": "value, ok := i.(string)"
        },
        {
            "id": 259,
            "Title": " Explain concurrency vs parallelism in Go.",
            "answer": "Concurrency handles multiple tasks at once, while parallelism runs multiple tasks simultaneously on separate cores.",
            "Sample": "",
            "code": ""
        },
        {
            "id": 260,
            "Title": " How to handle time in Go?",
            "answer": "The `time` package provides tools to manage date and time.",
            "Sample": "time.Now()",
            "code": "now := time.Now()"
        },
        {
            "id": 261,
            "Title": " Explain Go's benchmarking.",
            "answer": "Go provides `testing` package for benchmarking code.",
            "Sample": "func BenchmarkMyFunc(b *testing.B)",
            "code": "func BenchmarkMyFunc(b *testing.B) {\n  for i := 0; i < b.N; i++ {\n    myFunc()\n  }\n}"
        },
        {
            "id": 262,
            "Title": " What is reflection?",
            "answer": "Reflection allows inspecting types at runtime.",
            "Sample": "reflect.TypeOf",
            "code": "t := reflect.TypeOf(obj)"
        },
        {
            "id": 263,
            "Title": " Explain panic and recover.",
            "answer": "`panic` stops the flow, while `recover` handles panics gracefully.",
            "Sample": "defer recover()",
            "code": "defer func() {\n  if r := recover(); r != nil {\n    fmt.Println(\"Recovered\")\n  }\n}()"
        },
        {
            "id": 264,
            "Title": " What is iota in Go?",
            "answer": "`iota` is a predeclared identifier representing successive untyped integer constants.",
            "Sample": "const (\n    a = iota\n    b\n)",
            "code": "const (\n    a = iota\n    b\n)"
        },
        {
            "id": 265,
            "Title": " How to implement a web server in Go?",
            "answer": "Use `net/http` package to create a web server.",
            "Sample": "http.ListenAndServe",
            "code": "http.HandleFunc(\"/\", func(w http.ResponseWriter, r *http.Request) {\n  fmt.Fprintln(w, \"Hello World\")\n})\nhttp.ListenAndServe(\":8080\", nil)"
        },
        {
            "id": 266,
            "Title": " How to read a file in Go?",
            "answer": "Use the `os` and `io/ioutil` packages to read files.",
            "Sample": "data, err := ioutil.ReadFile('filename.txt')",
            "code": "data, err := ioutil.ReadFile(\"filename.txt\")\nif err != nil {\n    log.Fatal(err)\n}"
        },
        {
            "id": 267,
            "Title": " How to write to a file?",
            "answer": "Use `os.Create` and `io.WriteString` to write to a file.",
            "Sample": "f, err := os.Create('filename.txt')",
            "code": "f, err := os.Create(\"filename.txt\")\nif err != nil {\n    log.Fatal(err)\n}\n_, err = f.WriteString(\"Hello World\")\nf.Close()"
        },
        {
            "id": 268,
            "Title": " Explain the `http` package.",
            "answer": "The `http` package provides HTTP client and server implementations.",
            "Sample": "http.Get(url)",
            "code": "resp, err := http.Get(\"http://example.com\")\nif err != nil {\n    log.Fatal(err)\n}\ndefer resp.Body.Close()"
        },
        {
            "id": 269,
            "Title": " What is the `context` package?",
            "answer": "The `context` package carries deadlines, cancellation signals, and other request-scoped values.",
            "Sample": "ctx, cancel := context.WithCancel(context.Background())",
            "code": "ctx, cancel := context.WithCancel(context.Background())\ndefer cancel()"
        },
        {
            "id": 270,
            "Title": " How to handle JSON in Go?",
            "answer": "Use `encoding/json` for marshaling and unmarshaling JSON data.",
            "Sample": "json.Unmarshal(data, &obj)",
            "code": "jsonData := []byte(`{\"name\":\"John\"}`)\nvar obj map[string]string\nerr := json.Unmarshal(jsonData, &obj)\nif err != nil {\n    log.Fatal(err)\n}"
        },
        {
            "id": 271,
            "Title": " What are Go modules?",
            "answer": "Modules are a way to manage dependencies in Go.",
            "Sample": "go mod init moduleName",
            "code": "go mod init example.com/my/module"
        },
        {
            "id": 272,
            "Title": " How to perform HTTP requests?",
            "answer": "Use `http.NewRequest` to create custom HTTP requests.",
            "Sample": "req, err := http.NewRequest(\"GET\", url, nil)",
            "code": "req, err := http.NewRequest(\"GET\", \"http://example.com\", nil)\nclient := &http.Client{}\nresp, err := client.Do(req)"
        },
        {
            "id": 273,
            "Title": " What is `defer`?",
            "answer": "`defer` schedules a function to be run after the function completes.",
            "Sample": "defer func() { fmt.Println(\"Done\") }()",
            "code": "func main() {\n    defer fmt.Println(\"Done\")\n    fmt.Println(\"Running\")\n}"
        },
        {
            "id": 274,
            "Title": " How to create a new Goroutine?",
            "answer": "Use the `go` keyword to start a Goroutine.",
            "Sample": "go func() { fmt.Println(\"Hello\") }()",
            "code": "go func() {\n    fmt.Println(\"Hello from Goroutine\")\n}()"
        },
        {
            "id": 275,
            "Title": " Explain Go's garbage collection.",
            "answer": "Go uses garbage collection to automatically manage memory.",
            "Sample": "",
            "code": ""
        },
        {
            "id": 276,
            "Title": " How to create a struct?",
            "answer": "Define a struct using the `type` keyword.",
            "Sample": "type Person struct { Name string }",
            "code": "type Person struct {\n    Name string\n    Age  int\n}"
        },
        {
            "id": 277,
            "Title": " What are interfaces in Go?",
            "answer": "Interfaces specify method sets and allow different types to implement them.",
            "Sample": "type Reader interface { Read() }",
            "code": "type Reader interface {\n    Read() (string, error)\n}"
        },
        {
            "id": 278,
            "Title": " Explain Go's build system.",
            "answer": "Go uses `go build` to compile code and manage dependencies.",
            "Sample": "go build myapp.go",
            "code": "go build myapp.go"
        },
        {
            "id": 279,
            "Title": " How to run tests in Go?",
            "answer": "Use the `go test` command to run tests.",
            "Sample": "go test -v",
            "code": "func TestMyFunc(t *testing.T) {\n    // test code here\n}"
        },
        {
            "id": 280,
            "Title": " What are `func` types?",
            "answer": "Function types allow you to create function variables and pass them around.",
            "Sample": "type MathFunc func(int, int) int",
            "code": "func add(a, b int) int { return a + b }\ntype MathFunc func(int, int) int"
        },
        {
            "id": 281,
            "Title": " How to implement a TCP server?",
            "answer": "Use `net` package to create a TCP server.",
            "Sample": "ln, err := net.Listen(\"tcp\", \":8080\")",
            "code": "ln, err := net.Listen(\"tcp\", \":8080\")\nif err != nil {\n    log.Fatal(err)\n}\nfor {\n    conn, err := ln.Accept()\n    go handleConnection(conn)\n}"
        },
        {
            "id": 282,
            "Title": " Explain the use of `sync` package.",
            "answer": "The `sync` package provides synchronization primitives such as Mutexes and WaitGroups.",
            "Sample": "var mu sync.Mutex",
            "code": "var mu sync.Mutex\nmu.Lock()\n// critical section\nmu.Unlock()"
        },
        {
            "id": 283,
            "Title": " How to create a channel?",
            "answer": "Use `make(chan Type)` to create a channel.",
            "Sample": "ch := make(chan int)",
            "code": "ch := make(chan int)\ngo func() {\n    ch <- 1\n}\nvalue := <-ch"
        },
        {
            "id": 284,
            "Title": " What are command-line flags?",
            "answer": "Command-line flags are used to configure programs through the command line.",
            "Sample": "var config = flag.String(\"config\", \"config.yaml\", \"config file\")",
            "code": "flag.Parse()\nfmt.Println(*config)"
        },
        {
            "id": 285,
            "Title": " Explain the `regexp` package.",
            "answer": "The `regexp` package implements regular expressions for string matching.",
            "Sample": "matched, err := regexp.MatchString(pattern, input)",
            "code": "re := regexp.MustCompile(`\\d+`)\nmatches := re.FindAllString(input, -1)"
        },
      
            {
                "id": 286,
                "Title": "What is HTML?",
                "answer": "HTML (HyperText Markup Language) is the standard language for creating web pages.",
                "Sample": "HTML is the backbone of all web pages, providing the basic structure by using tags.",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Basics</title>\n</head>\n<body>\n    <h1>Welcome to HTML</h1>\n</body>\n</html>"
            },
            {
                "id": 287,
                "Title": "What are HTML tags?",
                "answer": "HTML tags are used to define elements on a webpage, enclosed in angle brackets like `<div>`.",
                "Sample": "Tags in HTML help define elements, such as headings, paragraphs, links, and more.",
                "code": "<p>This is a paragraph.</p>\n<div>This is a division tag.</div>"
            },
            {
                "id": 288,
                "Title": "What is the purpose of the `<head>` tag in HTML?",
                "answer": "The `<head>` tag contains meta-information about the document, such as the title and links to stylesheets.",
                "Sample": "The `<head>` section provides essential metadata and links to styles, scripts, and the document's title.",
                "code": "<head>\n    <title>My Website</title>\n    <link rel=\"stylesheet\" href=\"styles.css\">\n</head>"
            },
            {
                "id": 289,
                "Title": "What is the `<body>` tag used for?",
                "answer": "The `<body>` tag contains all the visible content of a web page, such as text, images, and links.",
                "Sample": "Everything that users see on a webpage, like text, images, and buttons, is contained within the `<body>` tag.",
                "code": "<body>\n    <h1>Welcome!</h1>\n    <p>This is a sample paragraph.</p>\n</body>"
            },
            {
                "id": 290,
                "Title": "What is the difference between block-level and inline elements?",
                "answer": "Block-level elements take up the full width, while inline elements only take up as much width as necessary.",
                "Sample": "Block-level elements like `<div>` take up the full width, whereas inline elements like `<span>` only take up the space they need.",
                "code": "<div>This is a block element</div>\n<span>This is an inline element</span>"
            },
            {
                "id": 291,
                "Title": "What is an HTML attribute?",
                "answer": "HTML attributes provide additional information about elements, such as `class`, `id`, or `src`.",
                "Sample": "Attributes like `class` or `id` are used to give elements extra information or control over styling and functionality.",
                "code": "<img src=\"image.jpg\" alt=\"A descriptive image\">"
            },
            {
                "id": 292,
                "Title": "What is the purpose of the `<a>` tag?",
                "answer": "The `<a>` tag is used to create hyperlinks, linking one page to another.",
                "Sample": "The `<a>` tag creates hyperlinks, allowing users to navigate between pages or external websites.",
                "code": "<a href=\"https://www.example.com\">Visit Example</a>"
            },
            {
                "id": 293,
                "Title": "How do you create an image in HTML?",
                "answer": "Use the `<img>` tag with the `src` attribute to specify the image source.",
                "Sample": "To add an image, use the `<img>` tag and set the `src` attribute to the image URL.",
                "code": "<img src=\"image.jpg\" alt=\"Description of the image\">"
            },
            {
                "id": 294,
                "Title": "What is the `<table>` tag used for?",
                "answer": "The `<table>` tag is used to create a table, with rows (`<tr>`), headers (`<th>`), and data cells (`<td>`).",
                "Sample": "The `<table>` tag structures data in a grid format, with `<tr>` for rows and `<td>` for individual cells.",
                "code": "<table>\n    <tr>\n        <th>Heading 1</th>\n        <th>Heading 2</th>\n    </tr>\n    <tr>\n        <td>Data 1</td>\n        <td>Data 2</td>\n    </tr>\n</table>"
            },
            {
                "id": 295,
                "Title": " What is a form in HTML?",
                "answer": "A form is created with the `<form>` tag and allows users to submit data, such as login credentials or search queries.",
                "Sample": "HTML forms collect user input with fields like text boxes and buttons, using the `<form>` tag.",
                "code": "<form action=\"/submit\" method=\"post\">\n    <label for=\"name\">Name:</label>\n    <input type=\"text\" id=\"name\" name=\"name\">\n    <input type=\"submit\" value=\"Submit\">\n</form>"
            },
            {
                "id": 296,
                "Title": " What does the `action` attribute in a form do?",
                "answer": "The `action` attribute specifies the URL where the form data will be submitted.",
                "Sample": "The `action` attribute defines where the form data will be sent after the user submits it.",
                "code": "<form action=\"/submit\" method=\"post\">\n    <!-- form elements here -->\n</form>"
            },
            {
                "id": 297,
                "Title": " How do you create a checkbox in HTML?",
                "answer": "Use the `<input type=\"checkbox\">` tag to create a checkbox element.",
                "Sample": "A checkbox is added with the `<input type=\"checkbox\">` tag, allowing users to make multiple selections.",
                "code": "<input type=\"checkbox\" id=\"agree\" name=\"agree\">\n<label for=\"agree\">I agree to the terms</label>"
            },
            {
                "id": 298,
                "Title": " What is the difference between the `id` and `class` attributes?",
                "answer": "`id` is unique to one element, while `class` can be shared by multiple elements.",
                "Sample": "The `id` attribute uniquely identifies an element, while `class` groups multiple elements for styling or scripting.",
                "code": "<div id=\"uniqueID\">Unique Element</div>\n<div class=\"sharedClass\">Element with shared class</div>"
            },
            {
                "id": 299,
                "Title": " How do you create a list in HTML?",
                "answer": "Use the `<ul>` for unordered lists and `<ol>` for ordered lists, with `<li>` for list items.",
                "Sample": "Lists can be unordered (`<ul>`) or ordered (`<ol>`), with each item defined by the `<li>` tag.",
                "code": "<ul>\n    <li>Item 1</li>\n    <li>Item 2</li>\n</ul>"
            },
            {
                "id": 300,
                "Title": " What is semantic HTML?",
                "answer": "Semantic HTML uses meaningful tags like `<article>`, `<footer>`, and `<nav>` to improve readability and accessibility.",
                "Sample": "Semantic HTML enhances accessibility and clarity by using tags like `<header>`, `<main>`, and `<section>`.",
                "code": "<article>\n    <h2>Article Title</h2>\n    <p>Content of the article.</p>\n</article>"
            },
            {
                "id": 301,
                "Title": " What is the purpose of the `<meta>` tag?",
                "answer": "The `<meta>` tag provides metadata about the HTML document, such as character set and viewport settings.",
                "Sample": "The `<meta>` tag includes crucial information like character encoding and viewport settings for responsive design",
                "code": "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
            },
            {
                "id": 302,
                "Title": " How do you embed a video in HTML?",
                "answer": "Use the `<video>` tag, along with `src` and `controls` attributes, to embed a video.",
                "Sample": "To embed a video, use the `<video>` tag with attributes like `controls` for playback options.",
                "code": "<video src=\"video.mp4\" controls>\n    Your browser does not support the video tag.\n</video>"
            },
            {
                "id": 303,
                "Title": " How do you make an HTML element responsive?",
                "answer": "Use CSS media queries or responsive meta tags to ensure elements adapt to different screen sizes.",
                "Sample": "Elements can be made responsive by applying CSS media queries or using meta tags for viewport settings.",
                "code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
            },
            {
                "id": 304,
                "Title": " What is the `<link>` tag used for?",
                "answer": "The `<link>` tag is used to link external resources like stylesheets to the HTML document.",
                "Sample": "The `<link>` tag connects the HTML file to external resources such as CSS stylesheets.",
                "code": "<link rel=\"stylesheet\" href=\"styles.css\">"
            },
            {
                "id": 305,
                "Title": " What is an iframe in HTML?",
                "answer": "An iframe is used to embed another HTML document within the current page, using the `<iframe>` tag.",
                "Sample": "The `<iframe>` tag embeds another webpage within the current page, allowing seamless integration.",
                "code": "<iframe src=\"https://www.example.com\" width=\"\" height=\"\"></iframe>"
            },
              {
        "id": 306,
        "Title": " What is the `<header>` tag used for?",
        "answer": "The `<header>` tag is used to define introductory content, typically containing navigational links.",
        "Sample": "The `<header>` element typically includes logos, headings, and navigation links.",
        "code": "<header>\n    <h1>Website Title</h1>\n    <nav>\n        <a href=\"#\">Home</a>\n        <a href=\"#\">About</a>\n    </nav>\n</header>"
    },
    {
        "id": 307,
        "Title": " What is the `<footer>` tag used for?",
        "answer": "The `<footer>` tag defines the footer for a document or section, often containing copyright information or links.",
        "Sample": "The `<footer>` section can include copyright information, contact links, and other footer content.",
        "code": "<footer>\n    <p>&copy; 2024 My Website</p>\n</footer>"
    },
    {
        "id": 308,
        "Title": " What is the `<section>` tag?",
        "answer": "The `<section>` tag represents a thematic grouping of content, typically with a heading.",
        "Sample": "The `<section>` tag is used to create distinct sections of content with headings for organization.",
        "code": "<section>\n    <h2>Section Title</h2>\n    <p>Content of the section.</p>\n</section>"
    },
    {
        "id": 309,
        "Title": " What is the purpose of the `<article>` tag?",
        "answer": "The `<article>` tag is used to define independent content that can be distributed or reused.",
        "Sample": "The `<article>` element encapsulates content that can stand alone, like blog posts or news articles.",
        "code": "<article>\n    <h2>Article Title</h2>\n    <p>Content of the article.</p>\n</article>"
    },
    {
        "id": 310,
        "Title": " How do you create a dropdown list in HTML?",
        "answer": "Use the `<select>` tag to create a dropdown list, with `<option>` tags for each item.",
        "Sample": "A dropdown list is created using the `<select>` element, allowing users to choose one option from a list.",
        "code": "<select>\n    <option value=\">Option 1</option>\n    <option value=\">Option 2</option>\n</select>"
    },
    {
        "id": 311,
        "Title": " What is the purpose of the `placeholder` attribute?",
        "answer": "The `placeholder` attribute provides a hint to the user of what input is expected in a form field.",
        "Sample": "Placeholders in input fields show examples of valid input to guide users.",
        "code": "<input type=\"text\" placeholder=\"Enter your name\">"
    },
    {
        "id": 312,
        "Title": " What is the `<canvas>` tag used for?",
        "answer": "The `<canvas>` tag is used to draw graphics on the fly via JavaScript.",
        "Sample": "The `<canvas>` element provides a space for rendering 2D shapes, images, and animations.",
        "code": "<canvas id=\"myCanvas\" width=\"\" height=\"\"></canvas>"
    },
    {
        "id": 313,
        "Title": " How do you create a button in HTML?",
        "answer": "Use the `<button>` tag to create a clickable button, which can contain text or images.",
        "Sample": "The `<button>` tag is used to create interactive buttons for user actions.",
        "code": "<button type=\"button\">Click Me!</button>"
    },
    {
        "id": 314,
        "Title": " What is the `<blockquote>` tag?",
        "answer": "The `<blockquote>` tag is used for indicating a section that is quoted from another source.",
        "Sample": "The `<blockquote>` element is often styled to visually differentiate quoted text.",
        "code": "<blockquote>\n    <p>This is a quote from someone.</p>\n</blockquote>"
    },
    {
        "id": 315,
        "Title": " What is the `<strong>` tag?",
        "answer": "The `<strong>` tag is used to give importance to text, often rendering it bold.",
        "Sample": "The `<strong>` element highlights important text in a document.",
        "code": "<p>This is <strong>important</strong> text.</p>"
    },
    {
        "id": 316,
        "Title": " What is the `<em>` tag?",
        "answer": "The `<em>` tag is used to emphasize text, usually rendering it italicized.",
        "Sample": "The `<em>` element indicates emphasized text for better readability.",
        "code": "<p>This is <em>emphasized</em> text.</p>"
    },
    {
        "id": 317,
        "Title": " What is the purpose of the `target` attribute in links?",
        "answer": "The `target` attribute specifies where to open the linked document, such as `_blank` for a new tab.",
        "Sample": "Setting `target=\"_blank\"` opens a link in a new tab.",
        "code": "<a href=\"https://www.example.com\" target=\"_blank\">Visit Example</a>"
    },
    {
        "id": 318,
        "Title": " How do you include comments in HTML?",
        "answer": "HTML comments are added using `<!-- comment here -->`, which are not displayed in the browser.",
        "Sample": "Comments are useful for explaining code without affecting the output.",
        "code": "<!-- This is a comment -->"
    },
    {
        "id": 319,
        "Title": " What is the purpose of the `<meta charset=\"UTF-8\">` tag?",
        "answer": "This tag specifies the character encoding for the HTML document, ensuring proper text display.",
        "Sample": "Using UTF-8 ensures that the document supports various characters and symbols.",
        "code": "<meta charset=\"UTF-8\">"
    },
    {
        "id": 320,
        "Title": " How do you create a search box in HTML?",
        "answer": "Use the `<input type=\"search\">` tag to create a search input field.",
        "Sample": "A search box is designed for users to enter search queries.",
        "code": "<input type=\"search\" placeholder=\"Search...\">"
    },
    {
        "id": 321,
        "Title": " What is the `<fieldset>` tag?",
        "answer": "The `<fieldset>` tag is used to group related elements in a form, often styled with a border.",
        "Sample": "Fieldsets help organize form elements into logical groups for better user experience.",
        "code": "<fieldset>\n    <legend>Personal Information</legend>\n    <input type=\"text\" placeholder=\"Name\">\n</fieldset>"
    },
    {
        "id": 322,
        "Title": " What is the `<legend>` tag?",
        "answer": "The `<legend>` tag represents a caption for the `<fieldset>` element, describing the group.",
        "Sample": "Legends provide context for the group of inputs within a fieldset.",
        "code": "<fieldset>\n    <legend>Contact Information</legend>\n    <input type=\"text\" placeholder=\"Email\">\n</fieldset>"
    },
    {
        "id": 323,
        "Title": " How do you create an audio element in HTML?",
        "answer": "Use the `<audio>` tag with the `src` attribute to embed audio content.",
        "Sample": "The `<audio>` element allows users to play audio files directly in the browser.",
        "code": "<audio controls>\n    <source src=\"audio.mp3\" type=\"audio/mpeg\">\n    Your browser does not support the audio element.\n</audio>"
    },
    {
        "id": 324,
        "Title": " What is the `<meta name=\"viewport\">` tag?",
        "answer": "This meta tag controls the layout on mobile browsers, ensuring proper scaling and responsiveness.",
        "Sample": "The viewport meta tag is essential for responsive web design.",
        "code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
    },
    {
        "id": 325,
        "Title": " What is the difference between `<div>` and `<span>`?",
        "answer": "`<div>` is a block-level element, while `<span>` is an inline element.",
        "Sample": "Use `<div>` for grouping block-level elements and `<span>` for inline text styling.",
        "code": "<div>This is a div</div>\n<span>This is a span</span>"
    },
    
    {
      "id": 326,
      "Title": "What is C?",
      "answer": "C is a general-purpose, procedural programming language developed in the 1970s, known for its efficiency and control over hardware.",
      "Sample": "Creating a simple C program.",
      "code": "#include <stdio.h>\nint main() {\n    printf(\"Hello, World!\");\n    return 0;\n}"
    },
    {
      "id": 327,
      "Title": "How does a for loop work in C?",
      "answer": "A for loop repeats a block of code for a specified number of times, controlled by an initialization, condition, and increment.",
      "Sample": "Looping from 1 to 10.",
      "code": "for (int i = 1; i <= 10; i++) {\n    printf(\"%d \", i);\n}"
    },
    {
      "id": 328,
      "Title": "What is an if-else statement?",
      "answer": "The if-else statement evaluates a condition and executes code blocks based on whether the condition is true or false.",
      "Sample": "Checking if a number is positive or negative.",
      "code": "if (num > 0) {\n    printf(\"Positive\");\n} else {\n    printf(\"Negative\");\n}"
    },
    {
      "id": 329,
      "Title": "Explain nested for loops.",
      "answer": "Nested for loops are loops within loops, often used for multidimensional data.",
      "Sample": "Printing a 3x3 grid.",
      "code": "for (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        printf(\"* \");\n    }\n    printf(\"\\n\");\n}"
    },
    {
      "id": 330,
      "Title": "How does an if-else if-else structure work?",
      "answer": "This structure allows multiple conditions to be tested sequentially, executing the block of the first true condition.",
      "Sample": "Categorizing a number as positive, negative, or zero.",
      "code": "if (num > 0) {\n    printf(\"Positive\");\n} else if (num < 0) {\n    printf(\"Negative\");\n} else {\n    printf(\"Zero\");\n}"
    },
    {
      "id": 331,
      "Title": "What is the purpose of a while loop?",
      "answer": "A while loop repeatedly executes code as long as the condition remains true.",
      "Sample": "Counting down from 5.",
      "code": "int i = 5;\nwhile (i > 0) {\n    printf(\"%d \", i);\n    i--;\n}"
    },
    {
      "id": 332,
      "Title": "How is the do-while loop different from while loop?",
      "answer": "The do-while loop executes at least once because the condition is checked after the code block.",
      "Sample": "Repeating input until a positive number is entered.",
      "code": "int num;\ndo {\n    printf(\"Enter a positive number: \");\n    scanf(\"%d\", &num);\n} while (num <= 0);"
    },
    {
      "id": 333,
      "Title": "How do you declare an array in C?",
      "answer": "Arrays store multiple values of the same type, and are declared by specifying the type, name, and size.",
      "Sample": "Defining an integer array of 5 elements.",
      "code": "int numbers[5];"
    },
    {
      "id": 334,
      "Title": "Explain the use of break in loops.",
      "answer": "The break statement immediately exits the loop, regardless of the condition.",
      "Sample": "Stopping a loop when i equals 3.",
      "code": "for (int i = 0; i < 5; i++) {\n    if (i == 3) break;\n    printf(\"%d \", i);\n}"
    },
    {
      "id": 335,
      "Title": " How does the continue statement work in a loop?",
      "answer": "The continue statement skips the rest of the loop iteration and proceeds to the next iteration.",
      "Sample": "Skipping even numbers in a loop.",
      "code": "for (int i = 0; i < 5; i++) {\n    if (i % 2 == 0) continue;\n    printf(\"%d \", i);\n}"
    },
    {
      "id": 336,
      "Title": " What is a switch-case statement?",
      "answer": "The switch-case statement executes different code blocks based on the value of a variable.",
      "Sample": "Printing a day name based on an integer input.",
      "code": "switch(day) {\n    case 1: printf(\"Monday\"); break;\n    case 2: printf(\"Tuesday\"); break;\n    default: printf(\"Other day\");\n}"
    },
    {
      "id": 337,
      "Title": " What is recursion in C?",
      "answer": "Recursion is a technique where a function calls itself to solve a smaller instance of the same problem.",
      "Sample": "Calculating factorial recursively.",
      "code": "int factorial(int n) {\n    if (n == 1) return 1;\n    return n * factorial(n - 1);\n}"
    },
    {
      "id": 338,
      "Title": " What are infinite loops?",
      "answer": "An infinite loop runs indefinitely because the exit condition is never met.",
      "Sample": "Creating an infinite loop with while.",
      "code": "while (1) {\n    printf(\"Running\");\n}"
    },
    {
      "id": 339,
      "Title": " How can we print even numbers using a for loop?",
      "answer": "We can print even numbers by initializing a for loop and incrementing by 2, or checking the condition inside the loop.",
      "Sample": "Printing even numbers from 2 to 10.",
      "code": "for (int i = 2; i <= 10; i += 2) {\n    printf(\"%d \", i);\n}"
    },
    {
      "id": 340,
      "Title": " What is a nested if statement?",
      "answer": "A nested if statement is an if statement inside another if statement.",
      "Sample": "Checking if a number is positive and even.",
      "code": "if (num > 0) {\n    if (num % 2 == 0) {\n        printf(\"Positive Even\");\n    }\n}"
    },
    {
      "id": 341,
      "Title": " What is an array index?",
      "answer": "An array index is the position of an element in an array, starting from zero in C.",
      "Sample": "Accessing the first element of an array.",
      "code": "int first = arr[0];"
    },
    {
      "id": 342,
      "Title": " Explain the concept of nested while loops.",
      "answer": "Nested while loops have one while loop inside another, often used for complex data structures like matrices.",
      "Sample": "Printing a 2x2 matrix.",
      "code": "int i = 0;\nwhile (i < 2) {\n    int j = 0;\n    while (j < 2) {\n        printf(\"* \");\n        j++;\n    }\n    printf(\"\\n\");\n    i++;\n}"
    },
    {
      "id": 343,
      "Title": " What is the purpose of the else statement in an if condition?",
      "answer": "The else statement provides an alternative action if the if condition is false.",
      "Sample": "Checking if a number is odd or even.",
      "code": "if (num % 2 == 0) {\n    printf(\"Even\");\n} else {\n    printf(\"Odd\");\n}"
    },
    {
      "id": 344,
      "Title": " Explain the use of nested if-else structures.",
      "answer": "Nested if-else structures allow multiple layers of condition checking.",
      "Sample": "Classifying a number based on range.",
      "code": "if (num > 0) {\n    if (num > 10) printf(\"Large\");\n    else printf(\"Small\");\n} else printf(\"Negative\");"
    },
    {
      "id": 345,
      "Title": " How can we print odd numbers using a for loop?",
      "answer": "We can print odd numbers by initializing a loop with an odd number and incrementing by 2.",
      "Sample": "Printing odd numbers from 1 to 9.",
      "code": "for (int i = 1; i < 10; i += 2) {\n    printf(\"%d \", i);\n}"
    },
    {
      "id": 345,
      "Title": " What is a doubly linked list?",
      "answer": "A doubly linked list is a data structure where each node contains a pointer to both the next and previous nodes.",
      "Sample": "Defining a node in a doubly linked list.",
      "code": "struct DNode {\n    int data;\n    struct DNode* next;\n    struct DNode* prev;\n};"
    },
    {
      "id": 346,
      "Title": " Explain binary search.",
      "answer": "Binary search is an efficient algorithm for finding an item from a sorted list by repeatedly dividing the search interval in half.",
      "Sample": "Searching for an element in a sorted array.",
      "code": "int binarySearch(int arr[], int size, int target) {\n    int left = 0, right = size - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (arr[mid] == target) return mid;\n        if (arr[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}"
    },
    {
      "id": 347,
      "Title": " How do you implement a basic queue using arrays?",
      "answer": "A queue can be implemented using an array by maintaining front and rear indices.",
      "Sample": "Enqueue and dequeue operations in an array-based queue.",
      "code": "int enqueue(int queue[], int* rear, int item) {\n    queue[++(*rear)] = item;\n}\nint dequeue(int queue[], int* front) {\n    return queue[++(*front)];\n}"
    },
    {
      "id": 348,
      "Title": " What is a heap data structure?",
      "answer": "A heap is a special tree-based data structure that satisfies the heap property, where the parent node is either greater than or equal to or less than or equal to its children.",
      "Sample": "Implementing a min-heap.",
      "code": "void minHeapify(int arr[], int n, int i) {\n    int smallest = i;\n    int left = 2 * i + 1;\n    int right = 2 * i + 2;\n    if (left < n && arr[left] < arr[smallest]) smallest = left;\n    if (right < n && arr[right] < arr[smallest]) smallest = right;\n    if (smallest != i) {\n        swap(&arr[i], &arr[smallest]);\n        minHeapify(arr, n, smallest);\n    }\n}"
    },
    {
      "id": 349,
      "Title": " What is a tree traversal?",
      "answer": "Tree traversal refers to the process of visiting each node in a tree data structure, which can be done in different ways (in-order, pre-order, post-order).",
      "Sample": "In-order traversal of a binary tree.",
      "code": "void inorder(struct TreeNode* root) {\n    if (root) {\n        inorder(root->left);\n        printf(\"%d \", root->value);\n        inorder(root->right);\n    }\n}"
    },
    {
      "id": 350,
      "Title": " How do you implement a simple linked list?",
      "answer": "A linked list can be implemented by creating a structure that contains data and a pointer to the next node.",
      "Sample": "Adding a node to the end of a linked list.",
      "code": "void addNode(struct Node** head, int data) {\n    struct Node* newNode = malloc(sizeof(struct Node));\n    newNode->data = data;\n    newNode->next = *head;\n    *head = newNode;\n}"
    },        {
      "id": 351,
      "Title": " What is recursion?",
      "answer": "Recursion is a programming technique where a function calls itself directly or indirectly to solve a problem.",
      "Sample": "Calculating factorial using recursion.",
      "code": "int factorial(int n) {\n    if (n == 0) return 1;\n    return n * factorial(n - 1);\n}"
    },
    {
      "id": 352,
      "Title": " What is a binary tree?",
      "answer": "A binary tree is a tree data structure where each node has at most two children referred to as the left child and the right child.",
      "Sample": "Defining a binary tree node.",
      "code": "struct TreeNode {\n    int value;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};"
    },
    {
      "id": 353,
      "Title": " Explain merge sort.",
      "answer": "Merge sort is a divide-and-conquer algorithm that sorts an array by recursively dividing it into halves, sorting them, and then merging the sorted halves.",
      "Sample": "Implementing merge sort.",
      "code": "void merge(int arr[], int left, int mid, int right) {\n    // Merging logic here\n}\nvoid mergeSort(int arr[], int left, int right) {\n    if (left < right) {\n        int mid = left + (right - left) / 2;\n        mergeSort(arr, left, mid);\n        mergeSort(arr, mid + 1, right);\n        merge(arr, left, mid, right);\n    }\n}"
    },
    {
      "id": 354,
      "Title": " What is a quick sort?",
      "answer": "Quick sort is an efficient sorting algorithm that uses a divide-and-conquer approach to sort elements by selecting a 'pivot' and partitioning the other elements into those less than and greater than the pivot.",
      "Sample": "Implementing quick sort.",
      "code": "int partition(int arr[], int low, int high) {\n    // Partition logic here\n}\nvoid quickSort(int arr[], int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}"
    },
    {
      "id": 355,
      "Title": " What is a graph?",
      "answer": "A graph is a collection of nodes (or vertices) connected by edges. It can be directed or undirected, weighted or unweighted.",
      "Sample": "Representing a graph using an adjacency list.",
      "code": "struct Graph {\n    int V;\n    struct Node** adjList;\n};"
    },
    {
      "id": 356,
      "Title": " Explain depth-first search (DFS).",
      "answer": "DFS is an algorithm for traversing or searching tree or graph data structures, exploring as far as possible along each branch before backtracking.",
      "Sample": "Implementing DFS on a graph.",
      "code": "void DFS(struct Graph* graph, int start) {\n    // DFS logic here\n}"
    },
    {
      "id": 357,
      "Title": " Explain breadth-first search (BFS).",
      "answer": "BFS is an algorithm for traversing or searching tree or graph data structures, exploring all the neighbor nodes at the present depth prior to moving on to nodes at the next depth level.",
      "Sample": "Implementing BFS on a graph.",
      "code": "void BFS(struct Graph* graph, int start) {\n    // BFS logic here\n}"
    },
    {
      "id": 358,
      "Title": " What is dynamic programming?",
      "answer": "Dynamic programming is an optimization technique that solves complex problems by breaking them down into simpler subproblems and storing the results of these subproblems to avoid redundant calculations.",
      "Sample": "Calculating Fibonacci numbers using dynamic programming.",
      "code": "int fib(int n) {\n    int dp[n + 1];\n    dp[0] = 0; dp[1] = 1;\n    for (int i = 2; i <= n; i++) {\n        dp[i] = dp[i - 1] + dp[i - 2];\n    }\n    return dp[n];\n}"
    },
    {
      "id": 359,
      "Title": " What is a greedy algorithm?",
      "answer": "A greedy algorithm is an algorithmic paradigm that builds a solution piece by piece, always choosing the next piece that offers the most immediate benefit.",
      "Sample": "Using a greedy approach to solve the coin change problem.",
      "code": "int coinChange(int coins[], int numCoins, int amount) {\n    // Greedy logic here\n}"
    },
    {
      "id": 360,
      "Title": " How do you reverse a string in C?",
      "answer": "To reverse a string in C, you can swap characters from the beginning and end of the string until you reach the middle.",
      "Sample": "Reversing a string in C.",
      "code": "void reverseString(char* str) {\n    int n = strlen(str);\n    for (int i = 0; i < n / 2; i++) {\n        swap(&str[i], &str[n - i - 1]);\n    }\n}"
    },
        {
            "id":361,
            "Title":"What is Java?",
            "answer":"Java is a high-level, object-oriented programming language used for developing a wide range of applications.",
            "Sample":"public class HelloWorld { public static void main(String[] args) { System.out.println('Hello, World!'); } }",
            "code":"`public class HelloWorld { public static void main(String[] args) { System.out.println(\"Hello, World!\"); } }`"
         },
         {
            "id":362,
            "Title":"What are the basic data types in Java?",
            "answer":"Java has eight primitive data types: byte, short, int, long, float, double, boolean, and char.",
            "Sample":"int number = 5; boolean isActive = true;",
            "code":"`int number = 5; boolean isActive = true;`"
         },
         {
            "id":363,
            "Title":"What is an if-else statement in Java?",
            "answer":"An if-else statement evaluates a condition and executes a block of code if the condition is true, otherwise executes a different block.",
            "Sample":"if (age >= 18) { System.out.println('Adult'); } else { System.out.println('Minor'); }",
            "code":"`if (age >= 18) { System.out.println(\"Adult\"); } else { System.out.println(\"Minor\"); }`"
         },
         {
            "id":364,
            "Title":"What is a switch statement in Java?",
            "answer":"The switch statement allows a variable to be tested for equality against a list of values.",
            "Sample":"switch(day) { case 1: System.out.println('Monday'); break; default: System.out.println('Other day'); }",
            "code":"`switch(day) { case 1: System.out.println(\"Monday\"); break; default: System.out.println(\"Other day\"); }`"
         },
         {
            "id":365,
            "Title":"What is a for loop in Java?",
            "answer":"A for loop is used when the number of iterations is known. It consists of an initialization, condition, and increment/decrement.",
            "Sample":"for (int i = 0; i < 5; i++) { System.out.println(i); }",
            "code":"`for (int i = 0; i < 5; i++) { System.out.println(i); }`"
         },
         {
            "id":366,
            "Title":"How does a while loop work in Java?",
            "answer":"A while loop repeatedly executes a block of code as long as a given condition is true.",
            "Sample":"int i = 0; while (i < 5) { System.out.println(i); i++; }",
            "code":"`int i = 0; while (i < 5) { System.out.println(i); i++; }`"
         },
         {
            "id":367,
            "Title":"What is the purpose of the do-while loop?",
            "answer":"The do-while loop executes a block of code once, then repeats it as long as the specified condition is true.",
            "Sample":"int i = 0; do { System.out.println(i); i++; } while (i < 5);",
            "code":"`int i = 0; do { System.out.println(i); i++; } while (i < 5);`"
         },
         {
            "id":368,
            "Title":"How do you declare a variable in Java?",
            "answer":"A variable is declared by specifying its type and name. Optionally, you can initialize it with a value.",
            "Sample":"int age = 25;",
            "code":"`int age = 25;`"
         },
         {
            "id":369,
            "Title":"What is a class in Java?",
            "answer":"A class is a blueprint for creating objects, containing fields and methods to define object behavior and state.",
            "Sample":"public class Car { String color; void start() { System.out.println('Car started'); } }",
            "code":"`public class Car { String color; void start() { System.out.println(\"Car started\"); } }`"
         },
         {
            "id":370,
            "Title":" What is an object in Java?",
            "answer":"An object is an instance of a class. It has state and behavior defined by the class.",
            "Sample":"Car myCar = new Car();",
            "code":"`Car myCar = new Car();`"
         },
         {
            "id":371,
            "Title":" How does inheritance work in Java?",
            "answer":"Inheritance allows a class to inherit fields and methods from another class using the 'extends' keyword.",
            "Sample":"class Dog extends Animal { }",
            "code":"`class Dog extends Animal { }`"
         },
         {
            "id":372,
            "Title":" What is polymorphism in Java?",
            "answer":"Polymorphism allows objects to be treated as instances of their parent class, enabling different implementations of the same method.",
            "Sample":"Animal animal = new Dog(); animal.makeSound();",
            "code":"`Animal animal = new Dog(); animal.makeSound();`"
         },
         {
            "id":373,
            "Title":" What are constructors in Java?",
            "answer":"Constructors are special methods used to initialize objects. They have the same name as the class and no return type.",
            "Sample":"public class Car { Car() { System.out.println('Car created'); } }",
            "code":"`public class Car { Car() { System.out.println(\"Car created\"); } }`"
         },
         {
            "id":374,
            "Title":" What is method overloading?",
            "answer":"Method overloading allows multiple methods with the same name but different parameters in the same class.",
            "Sample":"void print(int x) { } void print(String x) { }",
            "code":"`void print(int x) { } void print(String x) { }`"
         },
         {
            "id":375,
            "Title":" What is encapsulation in Java?",
            "answer":"Encapsulation is the concept of bundling data and methods within a class and restricting access to some components.",
            "Sample":"private String color; public String getColor() { return color; }",
            "code":"`private String color; public String getColor() { return color; }`"
         },
         {
            "id":376,
            "Title":" What are access modifiers?",
            "answer":"Access modifiers determine the visibility of classes, methods, and variables. They include public, private, and protected.",
            "Sample":"public class Car { private int speed; }",
            "code":"`public class Car { private int speed; }`"
         },
         {
            "id":377,
            "Title":" What is an interface in Java?",
            "answer":"An interface is a reference type that contains only abstract methods, which implementing classes must define.",
            "Sample":"interface Animal { void sound(); }",
            "code":"`interface Animal { void sound(); }`"
         },
         {
            "id":378,
            "Title":" What is an abstract class in Java?",
            "answer":"An abstract class contains abstract methods that must be implemented by subclasses. It cannot be instantiated.",
            "Sample":"abstract class Animal { abstract void sound(); }",
            "code":"`abstract class Animal { abstract void sound(); }`"
         },
         {
            "id":379,
            "Title":" How does exception handling work in Java?",
            "answer":"Exception handling in Java uses try-catch blocks to handle errors and prevent program crashes.",
            "Sample":"try { int result = 10 / 0; } catch (ArithmeticException e) { System.out.println('Error'); }",
            "code":"`try { int result = 10 / 0; } catch (ArithmeticException e) { System.out.println(\"Error\"); }`"
         },
         {
            "id":380,
            "Title":" What is a try-catch block?",
            "answer":"A try-catch block is used to handle exceptions in Java by executing a code block in 'try' and catching exceptions in 'catch'.",
            "Sample":"try { int result = 10 / 0; } catch (Exception e) { e.printStackTrace(); }",
            "code":"`try { int result = 10 / 0; } catch (Exception e) { e.printStackTrace(); }`"
         },
         {
            "id":381,
            "Title":" How do you define an array in Java?",
            "answer":"An array is a container that holds a fixed number of values of a single type, declared with square brackets.",
            "Sample":"int[] numbers = {1, 2, 3, 4};",
            "code":"`int[] numbers = {1, 2, 3, 4};`"
         },
         {
            "id":382,
            "Title":" What is a for-each loop in Java?",
            "answer":"The for-each loop is used to iterate through elements in a collection or array.",
            "Sample":"for (int number : numbers) { System.out.println(number); }",
            "code":"`for (int number : numbers) { System.out.println(number); }`"
         },
         {
            "id":383,
            "Title":" What is a Java ArrayList?",
            "answer":"ArrayList is a resizable array implementation of the List interface, allowing elements to be dynamically added or removed.",
            "Sample":"ArrayList<String> list = new ArrayList<>(); list.add('Apple');",
            "code":"`ArrayList<String> list = new ArrayList<>(); list.add(\"Apple\");`"
         },
         {
            "id":384,
            "Title":" How does a HashMap work in Java?",
            "answer":"HashMap is a collection that stores key-value pairs and uses hashing to store data for quick retrieval.",
            "Sample":"HashMap<String, Integer> map = new HashMap<>(); map.put('Apple', 3);",
            "code":"`HashMap<String, Integer> map = new HashMap<>(); map.put(\"Apple\", 3);`"
         },
         {
            "id":385,
            "Title":" What is an Iterator in Java?",
            "answer":"An Iterator is an interface for traversing collections, allowing access to each element in the collection sequentially.",
            "Sample":"Iterator<String> it = list.iterator(); while (it.hasNext()) { System.out.println(it.next()); }",
            "code":"`Iterator<String> it = list.iterator(); while (it.hasNext()) { System.out.println(it.next()); }`"
         },
         {
            "id":386,
            "Title":" What is the purpose of the Collections framework?",
            "answer":"The Collections framework provides a set of classes and interfaces for managing groups of objects, offering various data structures and algorithms.",
            "Sample":"Collections.sort(list);",
            "code":"`Collections.sort(list);`"
         },
         {
            "id":387,
            "Title":" What is multithreading in Java?",
            "answer":"Multithreading is a process where multiple threads execute independently, allowing for concurrent execution in a program.",
            "Sample":"Thread thread = new Thread(() -> System.out.println('Thread running')); thread.start();",
            "code":"`Thread thread = new Thread(() -> System.out.println(\"Thread running\")); thread.start();`"
         },
         {
            "id":388,
            "Title":" How does the synchronized keyword work?",
            "answer":"The synchronized keyword ensures that only one thread can access a block of code or method at a time, providing thread safety.",
            "Sample":"public synchronized void syncMethod() { // code }",
            "code":"`public synchronized void syncMethod() { // code }`"
         },
         {
            "id":389,
            "Title":" What is a lambda expression in Java?",
            "answer":"Lambda expressions provide a clear and concise way to implement functional interfaces using an expression.",
            "Sample":"(int a, int b) -> a + b",
            "code":"`(int a, int b) -> a + b`"
         },
         {
            "id":390,
            "Title":" What is a functional interface?",
            "answer":"A functional interface is an interface with a single abstract method, used primarily in lambda expressions and functional programming.",
            "Sample":"@FunctionalInterface interface MyFunction { void apply(); }",
            "code":"`@FunctionalInterface interface MyFunction { void apply(); }`"
         },
         {
            "id":391,
            "Title":" What is the Stream API in Java?",
            "answer":"The Stream API is used to process collections of objects in a functional-style sequence of operations such as filter, map, and reduce.",
            "Sample":"list.stream().filter(s -> s.startsWith('A')).forEach(System.out::println);",
            "code":"`list.stream().filter(s -> s.startsWith(\"A\")).forEach(System.out::println);`"
         },
         {
            "id":392,
            "Title":" How does the filter method work in a Java Stream?",
            "answer":"The filter method in streams allows for filtering elements based on a specified condition.",
            "Sample":"list.stream().filter(s -> s.length() > 3).forEach(System.out::println);",
            "code":"`list.stream().filter(s -> s.length() > 3).forEach(System.out::println);`"
         },
         {
            "id":393,
            "Title":" What is method reference in Java?",
            "answer":"Method reference is a shorthand notation of a lambda expression to call a method directly by referencing it.",
            "Sample":"list.forEach(System.out::println);",
            "code":"`list.forEach(System.out::println);`"
         },
         {
            "id":394,
            "Title":" What is serialization in Java?",
            "answer":"Serialization is the process of converting an object into a byte stream, enabling it to be saved or transmitted.",
            "Sample":"ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream('file.ser')); out.writeObject(obj);",
            "code":"`ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream(\"file.ser\")); out.writeObject(obj);`"
         },
         {
            "id":395,
            "Title":" What is a singleton class in Java?",
            "answer":"A singleton class allows only one instance of itself to be created, providing a global point of access to it.",
            "Sample":"public class Singleton { private static Singleton instance; private Singleton() { } }",
            "code":"`public class Singleton { private static Singleton instance; private Singleton() { } }`"
         },
         {
            "id":396,
            "Title":" What is the difference between List and Set?",
            "answer":"List allows duplicate elements and maintains insertion order, while Set does not allow duplicates and has no guaranteed order.",
            "Sample":"List<String> list = new ArrayList<>(); Set<String> set = new HashSet<>();",
            "code":"`List<String> list = new ArrayList<>(); Set<String> set = new HashSet<>();`"
         },
         {
            "id":397,
            "Title":" How does the map method work in Java streams?",
            "answer":"The map method transforms elements of a stream into another form using a provided function.",
            "Sample":"list.stream().map(String::toUpperCase).forEach(System.out::println);",
            "code":"`list.stream().map(String::toUpperCase).forEach(System.out::println);`"
         },
         {
            "id":398,
            "Title":" What is a default method in interfaces?",
            "answer":"Default methods in interfaces allow methods to have an implementation, which can be overridden by implementing classes.",
            "Sample":"interface MyInterface { default void greet() { System.out.println('Hello'); } }",
            "code":"`interface MyInterface { default void greet() { System.out.println(\"Hello\"); } }`"
         },
         {
            "id":399,
            "Title":" How does the reduce method work in Java streams?",
            "answer":"The reduce method is used to combine elements of a stream into a single result using a specified accumulator function.",
            "Sample":"int sum = list.stream().reduce(0, Integer::sum);",
            "code":"`int sum = list.stream().reduce(0, Integer::sum);`"
         },
         {
            "id":400,
            "Title":" What are Optional types in Java?",
            "answer":"Optional is a container object that may or may not contain a non-null value, used to avoid null checks.",
            "Sample":"Optional<String> opt = Optional.ofNullable(name);",
            "code":"`Optional<String> opt = Optional.ofNullable(name);`"
         },
         {
            "id":401,
            "Title":" What is reflection in Java?",
            "answer":"Reflection is a feature that allows a program to inspect or modify the behavior of classes and methods at runtime.",
            "Sample":"Class<?> clazz = Class.forName('MyClass');",
            "code":"`Class<?> clazz = Class.forName(\"MyClass\");`"
         },
         {
            "id":402,
            "Title":" How does garbage collection work in Java?",
            "answer":"Garbage collection is an automatic memory management feature that deallocates memory used by objects that are no longer needed.",
            "Sample":"System.gc();",
            "code":"`System.gc();`"
         },
         {
            "id":403,
            "Title":" What is the difference between '==' and 'equals()' in Java?",
            "answer":"'==' checks reference equality, while 'equals()' checks for value equality in objects.",
            "Sample":"if (str1.equals(str2)) { }",
            "code":"`if (str1.equals(str2)) { }`"
         },
         {
            "id":404,
            "Title":" How does the try-with-resources statement work?",
            "answer":"Try-with-resources is used to declare resources that are automatically closed at the end of the statement.",
            "Sample":"try (BufferedReader br = new BufferedReader(new FileReader('file.txt'))) { }",
            "code":"`try (BufferedReader br = new BufferedReader(new FileReader(\"file.txt\"))) { }`"
         },
         {
            "id":405,
            "Title":" What is a JDBC in Java?",
            "answer":"JDBC is an API that enables Java applications to interact with databases through SQL commands.",
            "Sample":"Connection conn = DriverManager.getConnection(url, user, pass);",
            "code":"`Connection conn = DriverManager.getConnection(url, user, pass);`"
         },
         {
            "id": 406,
            "Title": "What is JavaScript?",
            "answer": "JavaScript is a versatile programming language primarily used for adding interactivity to web pages.",
            "Sample": "JavaScript allows developers to create dynamic content, control multimedia, animate images, and much more.",
            "code": "`console.log(\"Hello, World!\");`"
        },
        {
            "id": 407,
            "Title": "What are JavaScript data types?",
            "answer": "JavaScript supports several data types, including undefined, null, boolean, string, number, BigInt, and object.",
            "Sample": "Data types are important for defining what kind of data can be stored and manipulated.",
            "code": "`let number = 42; // number\nlet name = \"John\"; // string\nlet isActive = true; // boolean`"
        },
        {
            "id": 408,
            "Title": "What is a function in JavaScript?",
            "answer": "A function is a block of code designed to perform a particular task and is executed when called.",
            "Sample": "Functions help organize code into reusable blocks.",
            "code": "`function greet(name) {\n    return \"Hello, \" + name + \"!\";\n}\n\nconsole.log(greet(\"Alice\"));`"
        },
        {
            "id": 409,
            "Title": "What is the DOM?",
            "answer": "The Document Object Model (DOM) is an interface that browsers implement to structure a web document as a tree of objects.",
            "Sample": "JavaScript can manipulate the DOM to dynamically change the document structure, style, and content.",
            "code": "`document.getElementById(\"myElement\").innerHTML = \"Hello, World!\";`"
        },
        {
            "id": 410,
            "Title": "What are JavaScript arrays?",
            "answer": "Arrays in JavaScript are list-like objects used to store multiple values in a single variable.",
            "Sample": "Arrays can hold items of any data type and provide various methods for manipulation.",
            "code": "`const fruits = [\"apple\", \"banana\", \"cherry\"];\nconsole.log(fruits[1]); // Output: banana`"
        },
        {
            "id": 411,
            "Title": "What is an object in JavaScript?",
            "answer": "An object is a collection of properties, where each property is defined as a key-value pair.",
            "Sample": "Objects allow grouping related data and functionality together.",
            "code": "`const person = {\n    name: \"John\",\n    age: 30,\n    greet: function() {\n        console.log(\"Hello, \" + this.name);\n    }\n};\n\nperson.greet(); // Output: Hello, John`"
        },
        {
            "id": 412,
            "Title": "What is a callback function?",
            "answer": "A callback function is a function passed as an argument to another function, which is then invoked inside that function.",
            "Sample": "Callbacks are commonly used for handling asynchronous operations.",
            "code": "`function fetchData(callback) {\n    // Simulating an asynchronous operation\n    setTimeout(() => {\n        const data = \"Data fetched!\";\n        callback(data);\n    }, 1000);\n}\n\nfetchData((data) => {\n    console.log(data); // Output: Data fetched!\n});`"
        },
        {
            "id": 413,
            "Title": "What is the difference between let, const, and var?",
            "answer": "let and const are block-scoped variables, while var is function-scoped. const is used for constants that can't be reassigned.",
            "Sample": "Choosing the right declaration is crucial for maintaining scope and immutability.",
            "code": "`let x = 10;\nconst y = 20;\n\nif (true) {\n    var z = 30; // Function-scoped\n    let a = 40; // Block-scoped\n    const b = 50; // Block-scoped\n}\n\nconsole.log(z); // Output: 30\n// console.log(a); // Error: a is not defined\n// console.log(b); // Error: b is not defined`"
        },
        {
            "id": 414,
            "Title": "What is the purpose of the 'this' keyword?",
            "answer": "'this' refers to the object that is currently executing the function, which can vary based on the context.",
            "Sample": "Understanding 'this' is key for writing clean and efficient object-oriented JavaScript.",
            "code": "`const obj = {\n    name: \"John\",\n    greet: function() {\n        console.log(\"Hello, \" + this.name);\n    }\n};\n\nobj.greet(); // Output: Hello, John`"
        },
        {
            "id": 415,
            "Title": " What are promises in JavaScript?",
            "answer": "Promises are objects that represent the eventual completion or failure of an asynchronous operation.",
            "Sample": "They allow chaining of asynchronous operations and provide better handling of errors.",
            "code": "`const myPromise = new Promise((resolve, reject) => {\n    setTimeout(() => {\n        resolve(\"Success!\");\n    }, 1000);\n});\n\nmyPromise.then(result => {\n    console.log(result); // Output: Success!\n}).catch(error => {\n    console.error(error);\n});`"
        },
        {
            "id": 416,
            "Title": " What is the difference between == and ===?",
            "answer": "== checks for value equality, while === checks for value and type equality.",
            "Sample": "Use === for strict comparisons to avoid unexpected type coercion.",
            "code": "`console.log(0 == '0');  // true\nconsole.log(0 === '0'); // false`"
        },
        {
            "id": 417,
            "Title": " What is event bubbling?",
            "answer": "Event bubbling is a mechanism where events propagate from the target element up to the root of the DOM.",
            "Sample": "This allows multiple elements to handle the same event without adding listeners to each one.",
            "code": "`document.getElementById(\"parent\").addEventListener(\"click\", function() {\n    console.log(\"Parent clicked\");\n});\n\ndocument.getElementById(\"child\").addEventListener(\"click\", function() {\n    console.log(\"Child clicked\");\n});`"
        },
        {
            "id": 418,
            "Title": " What is hoisting?",
            "answer": "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during compilation.",
            "Sample": "Variables declared with var are hoisted, but those declared with let and const are not.",
            "code": "`console.log(x); // undefined\nvar x = 5;`"
        },
        {
            "id": 419,
            "Title": " What is the difference between synchronous and asynchronous programming?",
            "answer": "Synchronous programming executes tasks sequentially, while asynchronous programming allows tasks to run concurrently, enabling better performance.",
            "Sample": "Use async/await for cleaner asynchronous code.",
            "code": "`async function fetchData() {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n    console.log(data);\n}`"
        },
        {
            "id": 420,
            "Title": " What is closure?",
            "answer": "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.",
            "Sample": "Closures are useful for creating private variables.",
            "code": "`function makeCounter() {\n    let count = 0;\n    return function() {\n        count++;\n        return count;\n    }\n}\n\nconst counter = makeCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2`"
        },
        {
            "id": 421,
            "Title": " How does a basic 'for' loop work in JavaScript?",
            "answer": "A 'for' loop executes a block of code a specific number of times, based on an initializer, condition, and increment expression.",
            "Sample": "It's ideal for iterating when you know the number of iterations beforehand.",
            "code": "`for (let i = 0; i < 5; i++) {\n    console.log(i);\n} // Output: 0, 1, 2, 3, 4`"
        },
        {
            "id": 422,
            "Title": " How does 'forEach' work in JavaScript?",
            "answer": "'forEach' is a method that iterates over an array and applies a callback function to each element.",
            "Sample": "It's useful for applying side effects but doesn't return a new array.",
            "code": "`const numbers = [1, 2, 3];\nnumbers.forEach((num) => {\n    console.log(num * 2);\n}); // Output: 2, 4, 6`"
        },
        {
            "id": 423,
            "Title": " What are template literals?",
            "answer": "Template literals are string literals that allow embedded expressions, denoted by backticks (``).",
            "Sample": "They simplify string interpolation and multi-line strings.",
            "code": "`const name = 'John';\nconst greeting = `Hello, ${name}!`;\nconsole.log(greeting); // Output: Hello, John!`"
        },
        {
            "id": 424,
            "Title": " What are modules in JavaScript?",
            "answer": "Modules are reusable pieces of code that can be exported from one file and imported into another.",
            "Sample": "They help organize code and promote reusability.",
            "code": "`// file1.js\nconst greeting = \"Hello!\";\nexport default greeting;\n\n// file2.js\nimport greeting from './file1.js';\nconsole.log(greeting); // Output: Hello!`"
        },
        {
            "id": 425,
            "Title": " What is the use of 'strict mode'?",
            "answer": "Strict mode is a way to opt into a restricted variant of JavaScript, catching common coding mistakes and unsafe actions.",
            "Sample": "It helps in writing cleaner, more reliable code.",
            "code": "`'use strict';\n\nfunction myFunction() {\n    // Strict mode code\n}`"
        },                  {
            "id": 406,
            "Title": "What is JavaScript?",
            "answer": "JavaScript is a versatile programming language primarily used for adding interactivity to web pages.",
            "Sample": "JavaScript allows developers to create dynamic content, control multimedia, animate images, and much more.",
            "code": "`console.log(\"Hello, World!\");`"
        },
        {
            "id": 407,
            "Title": "What are JavaScript data types?",
            "answer": "JavaScript supports several data types, including undefined, null, boolean, string, number, BigInt, and object.",
            "Sample": "Data types are important for defining what kind of data can be stored and manipulated.",
            "code": "`let number = 42; // number\nlet name = \"John\"; // string\nlet isActive = true; // boolean`"
        },
        {
            "id": 408,
            "Title": "What is a function in JavaScript?",
            "answer": "A function is a block of code designed to perform a particular task and is executed when called.",
            "Sample": "Functions help organize code into reusable blocks.",
            "code": "`function greet(name) {\n    return \"Hello, \" + name + \"!\";\n}\n\nconsole.log(greet(\"Alice\"));`"
        },
        {
            "id": 409,
            "Title": "What is the DOM?",
            "answer": "The Document Object Model (DOM) is an interface that browsers implement to structure a web document as a tree of objects.",
            "Sample": "JavaScript can manipulate the DOM to dynamically change the document structure, style, and content.",
            "code": "`document.getElementById(\"myElement\").innerHTML = \"Hello, World!\";`"
        },
        {
            "id": 410,
            "Title": "What are JavaScript arrays?",
            "answer": "Arrays in JavaScript are list-like objects used to store multiple values in a single variable.",
            "Sample": "Arrays can hold items of any data type and provide various methods for manipulation.",
            "code": "`const fruits = [\"apple\", \"banana\", \"cherry\"];\nconsole.log(fruits[1]); // Output: banana`"
        },
        {
            "id": 411,
            "Title": "What is an object in JavaScript?",
            "answer": "An object is a collection of properties, where each property is defined as a key-value pair.",
            "Sample": "Objects allow grouping related data and functionality together.",
            "code": "`const person = {\n    name: \"John\",\n    age: 30,\n    greet: function() {\n        console.log(\"Hello, \" + this.name);\n    }\n};\n\nperson.greet(); // Output: Hello, John`"
        },
        {
            "id": 412,
            "Title": "What is a callback function?",
            "answer": "A callback function is a function passed as an argument to another function, which is then invoked inside that function.",
            "Sample": "Callbacks are commonly used for handling asynchronous operations.",
            "code": "`function fetchData(callback) {\n    // Simulating an asynchronous operation\n    setTimeout(() => {\n        const data = \"Data fetched!\";\n        callback(data);\n    }, 1000);\n}\n\nfetchData((data) => {\n    console.log(data); // Output: Data fetched!\n});`"
        },
        {
            "id": 413,
            "Title": "What is the difference between let, const, and var?",
            "answer": "let and const are block-scoped variables, while var is function-scoped. const is used for constants that can't be reassigned.",
            "Sample": "Choosing the right declaration is crucial for maintaining scope and immutability.",
            "code": "`let x = 10;\nconst y = 20;\n\nif (true) {\n    var z = 30; // Function-scoped\n    let a = 40; // Block-scoped\n    const b = 50; // Block-scoped\n}\n\nconsole.log(z); // Output: 30\n// console.log(a); // Error: a is not defined\n// console.log(b); // Error: b is not defined`"
        },
        {
            "id": 414,
            "Title": "What is the purpose of the 'this' keyword?",
            "answer": "'this' refers to the object that is currently executing the function, which can vary based on the context.",
            "Sample": "Understanding 'this' is key for writing clean and efficient object-oriented JavaScript.",
            "code": "`const obj = {\n    name: \"John\",\n    greet: function() {\n        console.log(\"Hello, \" + this.name);\n    }\n};\n\nobj.greet(); // Output: Hello, John`"
        },
        {
            "id": 415,
            "Title": " What are promises in JavaScript?",
            "answer": "Promises are objects that represent the eventual completion or failure of an asynchronous operation.",
            "Sample": "They allow chaining of asynchronous operations and provide better handling of errors.",
            "code": "`const myPromise = new Promise((resolve, reject) => {\n    setTimeout(() => {\n        resolve(\"Success!\");\n    }, 1000);\n});\n\nmyPromise.then(result => {\n    console.log(result); // Output: Success!\n}).catch(error => {\n    console.error(error);\n});`"
        },
        {
            "id": 416,
            "Title": " What is the difference between == and ===?",
            "answer": "== checks for value equality, while === checks for value and type equality.",
            "Sample": "Use === for strict comparisons to avoid unexpected type coercion.",
            "code": "`console.log(0 == '0');  // true\nconsole.log(0 === '0'); // false`"
        },
        {
            "id": 417,
            "Title": " What is event bubbling?",
            "answer": "Event bubbling is a mechanism where events propagate from the target element up to the root of the DOM.",
            "Sample": "This allows multiple elements to handle the same event without adding listeners to each one.",
            "code": "`document.getElementById(\"parent\").addEventListener(\"click\", function() {\n    console.log(\"Parent clicked\");\n});\n\ndocument.getElementById(\"child\").addEventListener(\"click\", function() {\n    console.log(\"Child clicked\");\n});`"
        },
        {
            "id": 418,
            "Title": " What is hoisting?",
            "answer": "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during compilation.",
            "Sample": "Variables declared with var are hoisted, but those declared with let and const are not.",
            "code": "`console.log(x); // undefined\nvar x = 5;`"
        },
        {
            "id": 419,
            "Title": " What is the difference between synchronous and asynchronous programming?",
            "answer": "Synchronous programming executes tasks sequentially, while asynchronous programming allows tasks to run concurrently, enabling better performance.",
            "Sample": "Use async/await for cleaner asynchronous code.",
            "code": "`async function fetchData() {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n    console.log(data);\n}`"
        },
        {
            "id": 420,
            "Title": " What is closure?",
            "answer": "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.",
            "Sample": "Closures are useful for creating private variables.",
            "code": "`function makeCounter() {\n    let count = 0;\n    return function() {\n        count++;\n        return count;\n    }\n}\n\nconst counter = makeCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2`"
        },
        {
            "id": 421,
            "Title": " How does a basic 'for' loop work in JavaScript?",
            "answer": "A 'for' loop executes a block of code a specific number of times, based on an initializer, condition, and increment expression.",
            "Sample": "It's ideal for iterating when you know the number of iterations beforehand.",
            "code": "`for (let i = 0; i < 5; i++) {\n    console.log(i);\n} // Output: 0, 1, 2, 3, 4`"
        },
        {
            "id": 422,
            "Title": " How does 'forEach' work in JavaScript?",
            "answer": "'forEach' is a method that iterates over an array and applies a callback function to each element.",
            "Sample": "It's useful for applying side effects but doesn't return a new array.",
            "code": "`const numbers = [1, 2, 3];\nnumbers.forEach((num) => {\n    console.log(num * 2);\n}); // Output: 2, 4, 6`"
        },
        {
            "id": 423,
            "Title": " What are template literals?",
            "answer": "Template literals are string literals that allow embedded expressions, denoted by backticks (``).",
            "Sample": "They simplify string interpolation and multi-line strings.",
            "code": "`const name = 'John';\nconst greeting = `Hello, ${name}!`;\nconsole.log(greeting); // Output: Hello, John!`"
        },
        {
            "id": 424,
            "Title": " What are modules in JavaScript?",
            "answer": "Modules are reusable pieces of code that can be exported from one file and imported into another.",
            "Sample": "They help organize code and promote reusability.",
            "code": "`// file1.js\nconst greeting = \"Hello!\";\nexport default greeting;\n\n// file2.js\nimport greeting from './file1.js';\nconsole.log(greeting); // Output: Hello!`"
        },
        {
            "id": 425,
            "Title": " What is the use of 'strict mode'?",
            "answer": "Strict mode is a way to opt into a restricted variant of JavaScript, catching common coding mistakes and unsafe actions.",
            "Sample": "It helps in writing cleaner, more reliable code.",
            "code": "`'use strict';\n\nfunction myFunction() {\n    // Strict mode code\n}`"
        },
        {
            "id": 426,
            "Title": " What is a set in JavaScript?",
            "answer": "A set is a collection of unique values in JavaScript. It can hold any type of value, and duplicates are automatically removed.",
            "Sample": "Sets are useful for storing non-repeating values.",
            "code": "`const mySet = new Set();\nmySet.add(1);\nmySet.add(2);\nmySet.add(2); // Duplicate, won't be added\nconsole.log(mySet); // Output: Set(2) { 1, 2 }`"
        },
        {
            "id": 427,
            "Title": " What is the spread operator?",
            "answer": "The spread operator (`...`) allows an iterable, such as an array or object, to be expanded in places where multiple elements are expected.",
            "Sample": "It's often used for merging arrays or spreading properties from one object to another.",
            "code": "`const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = [...arr1, ...arr2];\nconsole.log(combined); // Output: [1, 2, 3, 4, 5, 6]`"
        },
        {
            "id": 428,
            "Title": " What is destructuring assignment?",
            "answer": "Destructuring assignment is a syntax that allows unpacking values from arrays or properties from objects into distinct variables.",
            "Sample": "It simplifies extracting values from complex data structures.",
            "code": "`const arr = [1, 2, 3];\nconst [a, b] = arr;\nconsole.log(a, b); // Output: 1 2`"
        },
        {
            "id": 429,
            "Title": " What are arrow functions?",
            "answer": "Arrow functions are a more concise syntax for writing function expressions in JavaScript. They lexically bind the `this` value.",
            "Sample": "They are ideal for short, simple functions.",
            "code": "`const add = (x, y) => x + y;\nconsole.log(add(2, 3)); // Output: 5`"
        },
        {
            "id": 430,
            "Title": " What is event delegation?",
            "answer": "Event delegation is a technique that uses a single event listener on a parent element to manage events for multiple child elements.",
            "Sample": "It improves performance and simplifies event handling.",
            "code": "`document.getElementById('parent').addEventListener('click', function(event) {\n    if (event.target.matches('.child')) {\n        console.log('Child clicked!');\n    }\n});`"
        },
        {
            "id": 431,
            "Title": " What are generators in JavaScript?",
            "answer": "Generators are functions that can be paused and resumed, allowing you to control the execution flow with `yield`.",
            "Sample": "They are useful for handling asynchronous operations or creating iterable objects.",
            "code": "`function* generator() {\n    yield 1;\n    yield 2;\n    yield 3;\n}\n\nconst gen = generator();\nconsole.log(gen.next().value); // Output: 1`"
        },
        {
            "id": 432,
            "Title": " What is a regular expression?",
            "answer": "A regular expression (regex) is a sequence of characters that forms a search pattern, primarily used for string matching.",
            "Sample": "Regex is powerful for validating inputs and manipulating strings.",
            "code": "`const regex = /[a-z]+/;\nconsole.log(regex.test('hello')); // Output: true`"
        },
        {
            "id": 433,
            "Title": " What is the difference between null and undefined?",
            "answer": "null is an assignment value, indicating no value, while undefined means a variable has been declared but has not yet been assigned a value.",
            "Sample": "Understanding these two types is key for managing data and avoiding errors.",
            "code": "`let a;\nconsole.log(a); // Output: undefined\nlet b = null;\nconsole.log(b); // Output: null`"
        },
        {
            "id": 434,
            "Title": " What are async/await in JavaScript?",
            "answer": "async/await is a syntax for working with promises, allowing asynchronous code to be written in a synchronous style.",
            "Sample": "It enhances code readability and error handling.",
            "code": "`async function fetchData() {\n    try {\n        const response = await fetch('https://api.example.com/data');\n        const data = await response.json();\n        console.log(data);\n    } catch (error) {\n        console.error(error);\n    }\n}`"
        },
        {
            "id": 435,
            "Title": " What is localStorage?",
            "answer": "localStorage is a web storage feature that allows storage of key/value pairs in a web browser with no expiration time.",
            "Sample": "It's useful for storing data persistently across browser sessions.",
            "code": "`localStorage.setItem('name', 'John');\nconsole.log(localStorage.getItem('name')); // Output: John`"
        },
        {
         "id": 436,
         "Title": " What are 'async' functions?",
         "answer": "Async functions allow you to write promise-based code as if it were synchronous, using 'await' to pause execution.",
         "Sample": "They simplify handling asynchronous operations.",
         "code": "`async function fetchData() { const response = await fetch('https://api.example.com/data'); const data = await response.json(); console.log(data); }`"
     },
     {
         "id": 437,
         "Title": " What is the 'await' keyword?",
         "answer": "The 'await' keyword is used inside async functions to pause execution until the promise is resolved or rejected.",
         "Sample": "It's useful for waiting on asynchronous operations.",
         "code": "`async function example() { const result = await someAsyncFunction(); console.log(result); }`"
     },
     {
         "id": 438,
         "Title": " What is the difference between '==' and '==='?",
         "answer": "'==' is a loose equality operator that performs type coercion, while '===' is a strict equality operator that checks both value and type.",
         "Sample": "Use '===' for type-safe comparisons.",
         "code": "`console.log(0 == '0'); // true console.log(0 === '0'); // false`"
     },
     {
         "id": 439,
         "Title": " What is a closure?",
         "answer": "A closure is a function that retains access to its outer lexical scope, even when the function is executed outside that scope.",
         "Sample": "Closures are useful for creating private variables.",
         "code": "`function outer() { let count = 0; return function inner() { count++; return count; }; } const increment = outer(); console.log(increment()); // 1 console.log(increment()); // 2`"
     },
     {
         "id": 440,
         "Title": " What is the 'bind()' method?",
         "answer": "The 'bind()' method creates a new function that, when called, has its 'this' keyword set to the provided value, with a given sequence of arguments.",
         "Sample": "It's useful for setting the context of functions.",
         "code": "`const obj = { value: 42 }; function getValue() { return this.value; } const boundGetValue = getValue.bind(obj); console.log(boundGetValue()); // 42`"
     },
     {
         "id": 441,
         "Title": " What is the 'Array.from()' method?",
         "answer": "The 'Array.from()' method creates a new array instance from an array-like or iterable object.",
         "Sample": "It's useful for converting array-like objects to arrays.",
         "code": "`const str = 'hello'; const arr = Array.from(str); console.log(arr); // ['h', 'e', 'l', 'l', 'o']`"
     },
     {
         "id": 442,
         "Title": " What is the 'forEach()' method?",
         "answer": "The 'forEach()' method executes a provided function once for each array element.",
         "Sample": "It's useful for iterating through arrays.",
         "code": "`const numbers = [1, 2, 3]; numbers.forEach(num => console.log(num)); // Outputs each number`"
     },
     {
         "id": 443,
         "Title": " What is a 'Map' in JavaScript?",
         "answer": "A 'Map' is a collection of key-value pairs where keys can be of any type, and it maintains the insertion order.",
         "Sample": "It's useful for storing unique keys and values.",
         "code": "`const map = new Map(); map.set('key1', 'value1'); console.log(map.get('key1')); // 'value1'`"
     },
     {
         "id": 444,
         "Title": " What is the 'filter()' method?",
         "answer": "The 'filter()' method creates a new array with all elements that pass the test implemented by the provided function.",
         "Sample": "It's useful for extracting elements that meet certain criteria.",
         "code": "`const numbers = [1, 2, 3, 4]; const evens = numbers.filter(num => num % 2 === 0); console.log(evens); // [2, 4]`"
     },
     {
         "id": 445,
         "Title": " What are 'Promise' objects?",
         "answer": "A 'Promise' is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.",
         "Sample": "They simplify asynchronous programming.",
         "code": "`const myPromise = new Promise((resolve, reject) => { // Some async operation resolve('Success!'); }); myPromise.then(result => console.log(result)); // 'Success!'`"
     },
     {
      id: 445,
      Title: "What is JavaScript?",
      answer: "JavaScript is a versatile programming language primarily used for adding interactivity to web pages.",
      Sample: "JavaScript allows developers to create dynamic content, control multimedia, animate images, and much more.",
      code: `console.log("Hello, World!");`
    },
    {
      id: 446,
      Title: "What are JavaScript data types?",
      answer: "JavaScript supports several data types, including undefined, null, boolean, string, number, BigInt, and object.",
      Sample: "Data types are important for defining what kind of data can be stored and manipulated.",
      code: `let number = 42; // number
let name = "John"; // string
let isActive = true; // boolean`
    },
    {
      id: 447,
      Title: "What is a function in JavaScript?",
      answer: "A function is a block of code designed to perform a particular task and is executed when called.",
      Sample: "Functions help organize code into reusable blocks.",
      code: `function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));`
    },
    {
      id: 448,
      Title: "What is the DOM?",
      answer: "The Document Object Model (DOM) is an interface that browsers implement to structure a web document as a tree of objects.",
      Sample: "JavaScript can manipulate the DOM to dynamically change the document structure, style, and content.",
      code: `document.getElementById("myElement").innerHTML = "Hello, World!";`
    },
    {
      id: 449,
      Title: "What are JavaScript arrays?",
      answer: "Arrays in JavaScript are list-like objects used to store multiple values in a single variable.",
      Sample: "Arrays can hold items of any data type and provide various methods for manipulation.",
      code: `const fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]); // Output: banana`
    },
    {
      id: 450,
      Title: "What is an object in JavaScript?",
      answer: "An object is a collection of properties, where each property is defined as a key-value pair.",
      Sample: "Objects allow grouping related data and functionality together.",
      code: `const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet(); // Output: Hello, John`
    },
    {
      id: 451,
      Title: "What is a callback function?",
      answer: "A callback function is a function passed as an argument to another function, which is then invoked inside that function.",
      Sample: "Callbacks are commonly used for handling asynchronous operations.",
      code: `function fetchData(callback) {
    // Simulating an asynchronous operation
    setTimeout(() => {
        const data = "Data fetched!";
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log(data); // Output: Data fetched!
});`
    },
    {
      id: 452,
      Title: "What is the difference between let, const, and var?",
      answer: "let and const are block-scoped variables, while var is function-scoped. const is used for constants that can't be reassigned.",
      Sample: "Choosing the right declaration is crucial for maintaining scope and immutability.",
      code: `let x = 10;
const y = 20;

if (true) {
    var z = 30; // Function-scoped
    let a = 40; // Block-scoped
    const b = 50; // Block-scoped
}

console.log(z); // Output: 30
// console.log(a); // Error: a is not defined
// console.log(b); // Error: b is not defined`
    },
    {
      id: 453,
      Title: "What is the purpose of the 'this' keyword?",
      answer: "'this' refers to the object that is currently executing the function, which can vary based on the context.",
      Sample: "Understanding 'this' is key for writing clean and efficient object-oriented JavaScript.",
      code: `const obj = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

obj.greet(); // Output: Hello, John`
    },
    {
      id: 454,
      Title: " What are promises in JavaScript?",
      answer: "Promises are objects that represent the eventual completion or failure of an asynchronous operation.",
      Sample: "They allow chaining of asynchronous operations and provide better handling of errors.",
      code: `const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
    }, 1000);
});

myPromise.then(result => {
    console.log(result); // Output: Success!
}).catch(error => {
    console.error(error);
});`
    },
    {
      id: 455,
      Title: " What is the difference between == and ===?",
      answer: "== checks for value equality, while === checks for value and type equality.",
      Sample: "Use === for strict comparisons to avoid unexpected type coercion.",
      code: `console.log(0 == '0');  // true
console.log(0 === '0'); // false`
    },
    {
      id: 456,
      Title: " What is event bubbling?",
      answer: "Event bubbling is a mechanism where events propagate from the target element up to the root of the DOM.",
      Sample: "This allows multiple elements to handle the same event without adding listeners to each one.",
      code: `document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", function() {
    console.log("Child clicked");
});`
    },
    {
      id: 457,
      Title: " What is hoisting?",
      answer: "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during compilation.",
      Sample: "Variables declared with var are hoisted, but those declared with let and const are not.",
      code: `console.log(x); // undefined
var x = 5;`
    },
    {
      id: 458,
      Title: " What is the difference between synchronous and asynchronous programming?",
      answer: "Synchronous programming executes tasks sequentially, while asynchronous programming allows tasks to run concurrently, enabling better performance.",
      Sample: "Use async/await for cleaner asynchronous code.",
      code: `async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}` 
    },
    {
      id: 459,
      Title: " What is closure?",
      answer: "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.",
      Sample: "Closures are useful for creating private variables.",
      code: `function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2`
    },
    {
      id: 460,
      Title: " How does a basic 'for' loop work in JavaScript?",
      answer: "A 'for' loop executes a block of code a specific number of times, based on an initializer, condition, and increment expression.",
      Sample: "It's ideal for iterating when you know the number of iterations beforehand.",
      code: `for (let i = 0; i < 5; i++) {
    console.log(i);
  } // Output: 0, 1, 2, 3, 4`
    },
    {
      id: 461,
      Title: " How does 'forEach' work in JavaScript?",
      answer: "'forEach' is a method that iterates over an array and applies a callback function to each element.",
      Sample: "It's useful for applying side effects but doesn't return a new array.",
      code: `const numbers = [1, 2, 3];
  numbers.forEach((num) => {
    console.log(num * 2);
  }); // Output: 2, 4, 6`
    },
    {
      id: 462,
      Title: " How do you use 'for...of' in JavaScript?",
      answer: "'for...of' is a loop specifically for iterating over iterable objects like arrays, strings, or NodeLists.",
      Sample: "It provides access to the values of the iterable.",
      code: `const fruits = ["apple", "banana", "cherry"];
  for (const fruit of fruits) {
    console.log(fruit);
  } // Output: apple, banana, cherry`
    },
    {
      id: 463,
      Title: " How do you use 'for...in' in JavaScript?",
      answer: "'for...in' is a loop for iterating over the keys of an object.",
      Sample: "It's ideal for object property enumeration, not array iteration.",
      code: `const person = { name: "Alice", age: 25 };
  for (const key in person) {
    console.log(key + ": " + person[key]);
  } // Output: name: Alice, age: 25`
    },
    {
      id: 464,
      Title: " How does 'if-else' work in JavaScript?",
      answer: "'if-else' statements conditionally execute code based on whether a condition is true or false.",
      Sample: "Useful for decision-making logic in functions or component rendering.",
      code: `const age = 20;
  if (age >= 18) {
    console.log("You are an adult.");
  } else {
    console.log("You are a minor.");
  }`
    },
    {
      id: 465,
      Title: " How does 'switch' work in JavaScript?",
      answer: "The 'switch' statement executes code blocks based on matching cases.",
      Sample: "Use it as a substitute for multiple 'if-else' conditions.",
      code: `const day = "Monday";
  switch (day) {
    case "Monday":
      console.log("Start of the week");
      break;
    case "Friday":
      console.log("Almost weekend");
      break;
    default:
      console.log("Middle of the week");
  }`
    },
    {
      id: 466,
      Title: " What is the spread operator?",
      answer: "The spread operator (...) is used to expand an iterable (like an array) into its individual elements.",
      Sample: "It can be used to create copies of arrays or merge multiple arrays.",
      code: `const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]`
    },
    {
      id: 467,
      Title: " What are template literals?",
      answer: "Template literals are string literals that allow embedded expressions and multi-line strings, enclosed by backticks (`).",
      Sample: "They provide a cleaner syntax for string interpolation.",
      code: `const name = "Alice";
const greeting = \`Hello, \${name}!\`;
console.log(greeting); // Hello, Alice!`
    },
    {
      id: 468,
      Title: " What is a module in JavaScript?",
      answer: "A module is a reusable piece of code that encapsulates functionality and can be imported/exported between files.",
      Sample: "Modules help organize code and promote reusability.",
      code: `// math.js
export function add(a, b) {
    return a + b;
}

// main.js
import { add } from './math.js';
console.log(add(2, 3)); // 5`
    },
    {
      id: 469,
      Title: " What is an IIFE?",
      answer: "An Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined.",
      Sample: "IIFEs are often used to create a private scope.",
      code: `(function() {
    console.log("IIFE executed!");
})();`
    },
    {
      id: 470,
      Title: " What is the difference between Object.freeze() and Object.seal()?",
      answer: "Object.freeze() prevents any changes to an object, while Object.seal() prevents new properties from being added but allows modification of existing properties.",
      Sample: "Use Object.freeze() for immutable objects.",
      code: `const obj = { prop: 42 };
Object.freeze(obj);
obj.prop = 33; // No effect
console.log(obj.prop); // 42`
    },
    {
      id: 471,
      Title: " What is the event delegation?",
      answer: "Event delegation is a technique where a single event listener is added to a parent element to manage events for multiple child elements.",
      Sample: "This improves performance and reduces memory usage.",
      code: `document.getElementById("parent").addEventListener("click", function(event) {
    if (event.target.matches(".child")) {
        console.log("Child clicked");
    }
});`
    },
    {
      id: 472,
      Title: " What is JSON?",
      answer: "JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write.",
      Sample: "It is commonly used for APIs and data storage.",
      code: `const obj = { name: "John", age: 30 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // {"name":"John","age":30}`
    },
    {
      id: 473,
      Title: " What are arrow functions?",
      answer: "Arrow functions are a shorter syntax for writing function expressions and lexically bind the 'this' value.",
      Sample: "They are ideal for writing concise functions.",
      code: `const add = (a, b) => a + b;
console.log(add(2, 3)); // 5`
    },
    {
      id: 474,
      Title: " What is the purpose of the 'bind' method?",
      answer: "The 'bind' method creates a new function that, when called, has its 'this' keyword set to the provided value.",
      Sample: "It is useful for controlling the context of 'this'.",
      code: `const person = {
    name: "Alice",
    greet() {
        console.log("Hello, " + this.name);
    }
};

const greetAlice = person.greet.bind(person);
greetAlice(); // Hello, Alice`
    },
    {
      id: 475,
      Title: " What is the difference between shallow copy and deep copy?",
      answer: "A shallow copy creates a new object but copies properties as references, while a deep copy creates a new object and recursively copies nested objects.",
      Sample: "Use JSON methods for deep copying.",
      code: `const obj1 = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, obj1);
const deepCopy = JSON.parse(JSON.stringify(obj1));`
    },
    {
      id: 476,
      Title: " What is local storage?",
      answer: "Local storage is a web storage mechanism that allows storing data as key-value pairs in the browser, accessible even after page refreshes.",
      Sample: "Use local storage for persisting user data.",
      code: `localStorage.setItem('name', 'John');
const name = localStorage.getItem('name');
console.log(name); // John`
    },
    {
      id: 477,
      Title: " What is the fetch API?",
      answer: "The fetch API is a modern way to make HTTP requests in JavaScript, returning promises.",
      Sample: "It is commonly used for fetching data from APIs.",
      code: `fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));`
    },
    {
      id: 478,
      Title: " What is the purpose of setTimeout()?",
      answer: "setTimeout() is a method that executes a function after a specified delay (in milliseconds).",
      Sample: "It is useful for creating delays or scheduling tasks.",
      code: `setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);`
    },
    {
      id: 479,
      Title: " What is 'strict mode'?",
      answer: "Strict mode is a way to opt in to a restricted variant of JavaScript, which helps catch common coding mistakes and 'unsafe' actions.",
      Sample: "It can be enabled by adding 'use strict' at the top of a script or function.",
      code: `'use strict';
function myFunction() {
    // This will throw an error if 'x' is not declared
    x = 3.14;
}` 
    },
    {
      id: 480,
      Title: " What is the difference between function expressions and function declarations?",
      answer: "Function declarations are hoisted, while function expressions are not. Declarations can be called before they are defined.",
      Sample: "Use declarations for top-level functions.",
      code: `console.log(foo()); // "Hello"

function foo() {
    return "Hello";
}

// console.log(bar()); // Error: bar is not a function
const bar = function() {
    return "Hi";
};`
    },
    {
      id: 481,
      Title: " What is the 'finally' block in promises?",
      answer: "The 'finally' block is used to execute code after a promise is settled, regardless of its outcome (fulfilled or rejected).",
      Sample: "It is useful for cleanup actions.",
      code: `myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Promise settled."));`
    },
    {
      id: 482,
      Title: " What is the 'map' method?",
      answer: "The 'map' method creates a new array populated with the results of calling a provided function on every element in the calling array.",
      Sample: "It is used for transforming data.",
      code: `const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]`
    },
    {
      id: 483,
      Title: " What is the 'reduce' method?",
      answer: "The 'reduce' method executes a reducer function on each element of the array, resulting in a single output value.",
      Sample: "It is commonly used for accumulating values.",
      code: `const numbers = [1, 2, 3];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6`
    },
    {
      id: 484,
      Title: " What are higher-order functions?",
      answer: "Higher-order functions are functions that take other functions as arguments or return them as output.",
      Sample: "They enable functional programming techniques.",
      code: `function operation(x, y, func) {
    return func(x, y);
}

const add = (a, b) => a + b;
console.log(operation(5, 3, add)); // 8`
    },
    {
      id: 485,
      Title: " What is a generator function?",
      answer: "A generator function is a function that can be exited and later re-entered, maintaining its context, allowing you to produce a series of values.",
      Sample: "Generators are useful for creating iterable sequences.",
      code: `function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();
console.log(gen.next().value); // 1`
    },
    {
      id: 486,
      Title: " What is the 'instanceof' operator?",
      answer: "The 'instanceof' operator checks whether an object is an instance of a specific constructor or class.",
      Sample: "It is used for type checking.",
      code: `class Animal {}
const dog = new Animal();
console.log(dog instanceof Animal); // true`
    },
    {
      id: 487,
      Title: " What is the purpose of 'setInterval()'?",
      answer: "setInterval() is a method that repeatedly executes a function at specified intervals (in milliseconds).",
      Sample: "It is useful for creating timers or periodic updates.",
      code: `setInterval(() => {
    console.log("Executed every second");
}, 1000);`
    },
    {
      id: 488,
      Title: " What is the difference between call() and apply()?",
      answer: "Both call() and apply() invoke a function with a specified 'this' value, but call() accepts arguments separately, while apply() accepts an array of arguments.",
      Sample: "Use apply() when you have an array of arguments.",
      code: `function greet(greeting) {
    console.log(\`\${greeting}, \${this.name}\`);
}

const person = { name: "Alice" };
greet.call(person, "Hello"); // Hello, Alice
greet.apply(person, ["Hi"]); // Hi, Alice`
    },
    {
      id: 489,
      Title: " What is a Promise.all()?",
      answer: "Promise.all() takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved.",
      Sample: "It is useful for aggregating results from multiple asynchronous operations.",
      code: `const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, "foo"));
const promise3 = 42;

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values); // [3, "foo", 42]
    });`
    },
    {
      id: 490,
      Title: " What is the 'slice()' method?",
      answer: "The 'slice()' method returns a shallow copy of a portion of an array into a new array object selected from start to end.",
      Sample: "It is useful for extracting parts of an array.",
      code: `const fruits = ["apple", "banana", "cherry", "date"];
const citrus = fruits.slice(1, 3);
console.log(citrus); // ["banana", "cherry"]`
    },
    {
        id: 491,
        Title: " What is the 'for...of' loop?",
        answer: "The 'for...of' loop creates a loop iterating over iterable objects, like arrays, strings, or other collections.",
        Sample: "It simplifies iteration and enhances readability.",
        code: `const numbers = [1, 2, 3];
for (const number of numbers) {
    console.log(number);
}`
    },
    {
        id: 492,
        Title: " What are template literals?",
        answer: "Template literals are string literals that allow embedded expressions, multi-line strings, and string interpolation.",
        Sample: "They simplify creating complex strings.",
        code: `const name = "Alice";
    console.log(\`Hello, \${name}!\`); // Output: Hello, Alice!`
    },
    {
        id: 493,
        Title: " What is the spread operator?",
        answer: "The spread operator allows an iterable (like an array) to be expanded in places where zero or more arguments or elements are expected.",
        Sample: "It's useful for combining arrays or objects.",
        code: `const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];
    console.log(arr2); // Output: [1, 2, 3, 4, 5]`
    },
    
    {
        id: 494,
        Title: " What is the 'reduceRight()' method?",
        answer: "The 'reduceRight()' method executes a reducer function on each element of the array, processing from right to left.",
        Sample: "It's useful for accumulating values in reverse order.",
        code: `const numbers = [1, 2, 3];
const reversedSum = numbers.reduceRight((acc, curr) => acc + curr, 0);
console.log(reversedSum); // 6`
    },
    {
        id: 495,
        Title: " What is a self-invoking function?",
        answer: "A self-invoking function is a function that runs as soon as it is defined.",
        Sample: "It's used for creating private scopes.",
        code: `(function() {
    console.log("Self-invoked!");
})();`
    },
    {
        id: 496,
        Title: " What is the 'includes()' method?",
        answer: "The 'includes()' method determines whether an array or string contains a certain value.",
        Sample: "It's useful for checking the presence of elements.",
        code: `const fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana")); // true`
    },
    {
        id: 497,
        Title: " What is method chaining?",
        answer: "Method chaining is a technique where multiple methods are called on the same object sequentially.",
        Sample: "It improves code readability.",
        code: `const result = [1, 2, 3]
    .map(x => x * 2)
    .filter(x => x > 3)
    .reduce((acc, x) => acc + x, 0);
console.log(result); // 8`
    },
    {
        id: 498,
        Title: " What is the 'every()' method?",
        answer: "The 'every()' method tests whether all elements in the array pass the test implemented by the provided function.",
        Sample: "It's useful for validation checks.",
        code: `const numbers = [2, 4, 6];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true`
    },
    {
        id: 499,
        Title: " What is the 'some()' method?",
        answer: "The 'some()' method tests whether at least one element in the array passes the test implemented by the provided function.",
        Sample: "It's useful for checking conditions.",
        code: `const numbers = [1, 2, 3];
const hasOdd = numbers.some(num => num % 2 !== 0);
console.log(hasOdd); // true`
    },
    {
        id: 500,
        Title: " What are IIFEs (Immediately Invoked Function Expressions)?",
        answer: "IIFEs are functions that are defined and executed immediately.",
        Sample: "They are used to create a new scope.",
        code: `(function() {
    console.log("IIFE executed!");
})();`
    },
    {
        id: 501,
        Title: " What is 'Object.assign()'?",
        answer: "Object.assign() copies values from one or more source objects to a target object, returning the target object.",
        Sample: "It's used for object merging.",
        code: `const target = { a: 1 };
const source = { b: 2 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // { a: 1, b: 2 }`
    },
    {
        id: 502,
        Title: " What is the 'bind()' method?",
        answer: "The 'bind()' method creates a new function that, when called, has its 'this' keyword set to the provided value.",
        Sample: "It's useful for setting the context of functions.",
        code: `const obj = { x: 42 };
const getX = function() {
    return this.x;
}.bind(obj);
console.log(getX()); // 42`
    },
    {
        id: 503,
        Title: " What is 'window.onload'?",
        answer: "window.onload is an event that fires when the whole page (including images, scripts, etc.) is fully loaded.",
        Sample: "It's used to run code after the page is ready.",
        code: `window.onload = function() {
    console.log("Page fully loaded!");
};`
    },
    {
        id: 504,
        Title: " What is the 'map()' method?",
        answer: "The 'map()' method creates a new array populated with the results of calling a provided function on every element in the calling array.",
        Sample: "It's used for transforming data.",
        code: `const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]`
    },
    {
        id: 505,
        Title: " What is the 'filter()' method?",
        answer: "The 'filter()' method creates a new array with all elements that pass the test implemented by the provided function.",
        Sample: "It's useful for extracting elements.",
        code: `const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]`
    },
    {
        id: 506,
        Title: " What is 'localStorage'?",
        answer: "localStorage is a web storage mechanism that allows storing data in the browser with no expiration time.",
        Sample: "It's useful for saving user preferences.",
        code: `localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');
console.log(value); // value`
    },
    {
        id: 507,
        Title: " What is the 'sessionStorage'?",
        answer: "sessionStorage is similar to localStorage but data is cleared when the page session ends.",
        Sample: "It's useful for temporary data storage.",
        code: `sessionStorage.setItem('key', 'value');
const value = sessionStorage.getItem('key');
console.log(value); // value`
    },
    {
        id: 508,
        Title: " What is 'null' in JavaScript?",
        answer: "null is a primitive value representing the intentional absence of any object value.",
        Sample: "It's often used to indicate no value.",
        code: `let data = null;
console.log(data); // null`
    },
    {
        id: 509,
        Title: " What is the 'typeof' operator?",
        answer: "The 'typeof' operator returns a string indicating the type of the unevaluated operand.",
        Sample: "It's useful for debugging and type checking.",
        code: `console.log(typeof "Hello"); // string`
    },
    {
        id: 510,
        Title: " What is the 'concat()' method?",
        answer: "The 'concat()' method is used to merge two or more arrays, returning a new array.",
        Sample: "It's useful for combining data.",
        code: `const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]`
    },
    {
        id: 511,
        Title: " What are 'async' functions?",
        answer: "Async functions allow you to write promise-based code as if it were synchronous, using 'await' to pause execution.",
        Sample: "They simplify handling asynchronous operations.",
        code: `async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}`
    },
    {
        id: 512,
        Title: " What is the 'try...catch' statement?",
        answer: "The 'try...catch' statement allows you to test a block of code for errors and handle them gracefully.",
        Sample: "It's useful for error management.",
        code: `try {
    throw new Error('An error occurred');
} catch (error) {
    console.log(error.message);
}`
    },
    {
        id: 513,
        Title: " What is the 'Math.random()' method?",
        answer: "The 'Math.random()' method returns a floating-point, pseudo-random number in the range 0 to less than 1.",
        Sample: "It's useful for generating random values.",
        code: `const randomNum = Math.random();
console.log(randomNum); // e.g., 0.123456`
    },
    {
        id: 514,
        Title: " What is the 'setTimeout()' function?",
        answer: "The 'setTimeout()' function calls a function or executes a code snippet after a specified delay (in milliseconds).",
        Sample: "It's useful for creating delays.",
        code: `setTimeout(() => {
    console.log("Executed after 1 second");
}, 1000);`
    },
    {
        id: 515,
        Title: " What is the 'setInterval()' function?",
        answer: "The 'setInterval()' function repeatedly calls a function with a fixed time delay between each call.",
        Sample: "It's useful for executing recurring tasks.",
        code: `const interval = setInterval(() => {
    console.log("This will run every second");
}, 1000);`
    },
    {
      id: 516,
      Title: "What is JWT (JSON Web Token)?",
      answer: "JWT is a compact, URL-safe means of representing claims to be transferred between two parties.",
      Sample: "Used for authentication in web applications.",
      code: `const jwt = require('jsonwebtoken');\nconst token = jwt.sign({ userId: 123 }, 'your_secret_key');`
    },
    {
      id: 517,
      Title: "What are the components of a JWT?",
      answer: "A JWT consists of three parts: Header, Payload, and Signature.",
      Sample: "Structure of a JWT.",
      code: `const jwt = "header.payload.signature";`
    },
    {
      id: 518,
      Title: "How do you create a JWT?",
      answer: "You create a JWT by signing it with a secret key using a library like jsonwebtoken.",
      Sample: "Creating a token for a user.",
      code: `const token = jwt.sign({ username: 'user' }, 'secret_key', { expiresIn: '1h' });`
    },
    {
      id: 519,
      Title: "How to verify a JWT?",
      answer: "You can verify a JWT using the same secret key that was used to sign it.",
      Sample: "Verifying a token for user authentication.",
      code: `jwt.verify(token, 'secret_key', (err, decoded) => { if (err) { console.log('Token invalid'); } });`
    },
    {
      id: 520,
      Title: "What is Passport.js?",
      answer: "Passport.js is an authentication middleware for Node.js that simplifies the authentication process.",
      Sample: "Integrating Passport.js for user authentication.",
      code: `const passport = require('passport');\napp.use(passport.initialize());`
    },
    {
      id: 521,
      Title: "How do you set up Passport.js?",
      answer: "You set it up by configuring strategies, initializing passport, and setting up session management.",
      Sample: "Setting up a local strategy.",
      code: `passport.use(new LocalStrategy((username, password, done) => { ... }));`
    },
    {
      id: 522,
      Title: "What is a Passport strategy?",
      answer: "A strategy is a method of authenticating requests, such as local, JWT, or OAuth strategies.",
      Sample: "Using JWT strategy.",
      code: `passport.use(new JwtStrategy({ jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: 'secret_key' }, (jwtPayload, done) => { ... }));`
    },
    {
      id: 523,
      Title: "What are sessions in Passport.js?",
      answer: "Sessions are used to persist user authentication state across requests.",
      Sample: "Storing user information in the session.",
      code: `app.use(session({ secret: 'your_secret', resave: false, saveUninitialized: true }));`
    },
    {
      id: 524,
      Title: "How to handle user login with Passport.js?",
      answer: "You handle login by using `passport.authenticate()` in your login route.",
      Sample: "Authenticating a user during login.",
      code: `app.post('/login', passport.authenticate('local', { successRedirect: '/dashboard', failureRedirect: '/login' }));`
    },
    {
      id: 525,
      Title: " How to protect routes using Passport.js?",
      answer: "You can protect routes by using `passport.authenticate()` as middleware.",
      Sample: "Protecting a dashboard route.",
      code: `app.get('/dashboard', passport.authenticate('jwt', { session: false }), (req, res) => { res.send('Dashboard'); });`
    },
    {
      id: 526,
      Title: " What is the purpose of the `passport.serializeUser` method?",
      answer: "This method is used to determine which data of the user should be stored in the session.",
      Sample: "Storing user ID in the session.",
      code: `passport.serializeUser((user, done) => { done(null, user.id); });`
    },
    {
      id: 527,
      Title: " What is the purpose of the `passport.deserializeUser` method?",
      answer: "This method is used to retrieve the user information based on the ID stored in the session.",
      Sample: "Finding the user by ID.",
      code: `passport.deserializeUser((id, done) => { User.findById(id, (err, user) => { done(err, user); }); });`
    },
    {
      id: 528,
      Title: " How to implement logout with Passport.js?",
      answer: "You can implement logout by using the `req.logout()` method.",
      Sample: "Logging out the user.",
      code: `app.get('/logout', (req, res) => { req.logout(); res.redirect('/'); });`
    },
    {
      id: 529,
      Title: " What is the difference between authentication and authorization?",
      answer: "Authentication verifies who you are, while authorization determines what you are allowed to do.",
      Sample: "Example of a user logging in and accessing resources.",
      code: `if (user.isAuthenticated()) { // access resource }`
    },
    {
      id: 530,
      Title: " How to set up Google authentication with Passport.js?",
      answer: "You set up Google authentication by using the Google strategy provided by Passport.js.",
      Sample: "Configuring Google OAuth.",
      code: `passport.use(new GoogleStrategy({ clientID: 'GOOGLE_CLIENT_ID', clientSecret: 'GOOGLE_CLIENT_SECRET', callbackURL: '/auth/google/callback' }, (accessToken, refreshToken, profile, done) => { ... }));`
    },
    {
      id: 531,
      Title: " How to store JWT in local storage?",
      answer: "You can store JWT in local storage on the client-side for future requests.",
      Sample: "Storing token after successful login.",
      code: `localStorage.setItem('token', token);`
    },
    {
      id: 532,
      Title: " How to send JWT in HTTP requests?",
      answer: "You can send JWT in the Authorization header of HTTP requests.",
      Sample: "Setting Authorization header.",
      code: `fetch('/api/protected', { headers: { 'Authorization': 'Bearer ' + token } });`
    },
    {
      id: 533,
      Title: " What is token expiration?",
      answer: "Token expiration is a security feature that limits the validity of a JWT.",
      Sample: "Setting token expiration to 1 hour.",
      code: `const token = jwt.sign({ userId: 123 }, 'secret', { expiresIn: '1h' });`
    },
    {
      id: 534,
      Title: " How to refresh a JWT?",
      answer: "You can refresh a JWT by issuing a new token when the old one is close to expiration.",
      Sample: "Refreshing token when needed.",
      code: `const newToken = jwt.sign({ userId: 123 }, 'secret', { expiresIn: '1h' });`
    },
    {
      id: 535,
      Title: " What is Cross-Site Request Forgery (CSRF)?",
      answer: "CSRF is an attack that tricks the user into submitting a request that they did not intend.",
      Sample: "Preventing CSRF attacks.",
      code: `app.use(csrfProtection);`
    },
    {
      id: 536,
      Title: " How to implement CSRF protection in an Express app?",
      answer: "You can implement CSRF protection using the `csurf` middleware.",
      Sample: "Setting up CSRF protection middleware.",
      code: `const csrf = require('csurf');\napp.use(csrf());`
    },
    {
      id: 537,
      Title: " What is the purpose of JSON Web Signature (JWS)?",
      answer: "JWS is used to provide integrity and authenticity for JWTs.",
      Sample: "Signing a JWT.",
      code: `const token = jwt.sign(payload, secretKey, { algorithm: 'HS256' });`
    },
    {
      id: 538,
      Title: " How to handle authentication errors in Passport.js?",
      answer: "You can handle authentication errors by using custom failure redirects.",
      Sample: "Redirecting on authentication failure.",
      code: `passport.authenticate('local', { failureRedirect: '/login' });`
    },
    {
      id: 539,
      Title: " What is the role of the `passport.authenticate()` method?",
      answer: "This method authenticates requests using a specified strategy.",
      Sample: "Authenticating with JWT strategy.",
      code: `app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => { res.send('Protected route'); });`
    },
    {
      id: 540,
      Title: " How to check if a user is authenticated in an Express route?",
      answer: "You can check if a user is authenticated using `req.isAuthenticated()`.",
      Sample: "Checking authentication status.",
      code: `if (req.isAuthenticated()) { // user is authenticated }`
    },
    {
      id: 541,
      Title: " How to implement role-based access control (RBAC) with Passport.js?",
      answer: "You can implement RBAC by checking user roles in your route handlers.",
      Sample: "Restricting access to admin users.",
      code: `if (req.user.role === 'admin') { // allow access }`
    },
    {
      id: 542,
      Title: " How to handle token revocation?",
      answer: "You can handle token revocation by maintaining a blacklist of revoked tokens.",
      Sample: "Revoking a token upon logout.",
      code: `revokedTokens.push(token);`
    },
    {
      id: 543,
      Title: " What is the difference between symmetric and asymmetric signing in JWT?",
      answer: "Symmetric signing uses a single secret key, while asymmetric signing uses a public/private key pair.",
      Sample: "Using RSA for asymmetric signing.",
      code: `const privateKey = 'privateKey';\nconst publicKey = 'publicKey';\ntoken = jwt.sign(payload, privateKey, { algorithm: 'RS256' });`
    },
    {
      id: 544,
      Title: " How to handle JWT expiration in the client?",
      answer: "You can handle JWT expiration by checking the expiration time before making requests.",
      Sample: "Checking token expiration.",
      code: `if (Date.now() >= exp * 1000) { // token expired }`
    },
    {
      id: 545,
      Title: " What are the security best practices for JWT?",
      answer: "Use HTTPS, secure storage, and short expiration times.",
      Sample: "Using HTTPS to secure tokens.",
      code: `const express = require('express');\nconst helmet = require('helmet');\napp.use(helmet());`
    },
    {
      id: 546,
      Title: " How to implement password hashing?",
      answer: "You can implement password hashing using libraries like bcrypt.",
      Sample: "Hashing a password before storing it.",
      code: `const bcrypt = require('bcrypt');\nbcrypt.hash(password, 10, (err, hash) => { ... });`
    },
    {
      id: 547,
      Title: " What is the role of the `jsonwebtoken` library?",
      answer: "It is a library to sign and verify JWTs.",
      Sample: "Using jsonwebtoken to create a token.",
      code: `const jwt = require('jsonwebtoken');\nconst token = jwt.sign(payload, 'secret');`
    },
    {
      id: 548,
      Title: " How to protect against SQL injection when using JWT?",
      answer: "Use prepared statements and ORM libraries to prevent SQL injection.",
      Sample: "Using parameterized queries.",
      code: `db.query('SELECT * FROM users WHERE id = ?', [userId]);`
    },
    {
      id: 549,
      Title: " What is the purpose of the `passport.session()` middleware?",
      answer: "It allows Passport to manage user sessions.",
      Sample: "Using session management with Passport.",
      code: `app.use(passport.session());`
    },
    {
      id: 550,
      Title: " How to implement user registration with Passport.js?",
      answer: "You can implement registration by hashing passwords and saving user data to the database.",
      Sample: "Registering a new user.",
      code: `app.post('/register', (req, res) => { bcrypt.hash(req.body.password, 10, (err, hash) => { // save user }); });`
    },
    {
      id: 551,
      Title: " What is the purpose of `passport.initialize()`?",
      answer: "It initializes Passport for use in your Express application.",
      Sample: "Setting up Passport middleware.",
      code: `app.use(passport.initialize());`
    },
    {
      id: 552,
      Title: " What is the difference between `req.user` and `req.session.passport.user`?",
      answer: "`req.user` is populated by Passport with the user object, while `req.session.passport.user` holds the user ID.",
      Sample: "Accessing user information.",
      code: `if (req.isAuthenticated()) { const user = req.user; }`
    },
    {
      id: 553,
      Title: " How to implement email verification?",
      answer: "You can implement email verification by sending a verification link to the user's email after registration.",
      Sample: "Sending a verification email.",
      code: `transporter.sendMail({ to: user.email, subject: 'Verify Email', html: '<a href="...">Verify</a>' });`
    },
    {
      id: 554,
      Title: " What is the purpose of `passport-remember-me`?",
      answer: "It allows users to stay logged in between sessions by setting a cookie.",
      Sample: "Using remember-me functionality.",
      code: `passport.use(new RememberMeStrategy((token, done) => { ... }));`
    },
    {
      id: 555,
      Title: " How to implement two-factor authentication (2FA)?",
      answer: "You can implement 2FA by sending a code to the user's mobile device for verification.",
      Sample: "Sending a 2FA code via SMS.",
      code: `twilioClient.messages.create({ to: phoneNumber, from: twilioNumber, body: 'Your code is: ' + code });`
    },
    {
        id: 556,
        Title: " How to implement role-based redirection after login?",
        answer: "You can redirect users based on their roles after successful login.",
        Sample: "Redirecting admins to the admin dashboard.",
        code: `if (req.user.role === 'admin') { res.redirect('/admin'); } else { res.redirect('/dashboard'); }`
      },
      {
        id: 557,
        Title: " How to set up CORS for API requests?",
        answer: "Use the cors middleware to allow cross-origin requests.",
        Sample: "Enabling CORS for all routes.",
        code: `const cors = require('cors');\napp.use(cors());`
      },
      {
        id: 558,
        Title: " How to implement a logout functionality?",
        answer: "You can implement logout by destroying the session and redirecting the user.",
        Sample: "Logging out a user.",
        code: `app.post('/logout', (req, res) => { req.logout(); res.redirect('/'); });`
      },
      {
        id: 559,
        Title: " How to refresh JWT tokens?",
        answer: "You can refresh tokens by issuing a new token when the old one is about to expire.",
        Sample: "Refreshing a token before expiration.",
        code: `if (Date.now() >= exp * 1000 - refreshThreshold) { token = jwt.sign(payload, 'secret', { expiresIn: '1h' }); }`
      },
      {
        id: 560,
        Title: " What is the purpose of using environment variables?",
        answer: "Environment variables help to manage sensitive data like API keys securely.",
        Sample: "Using dotenv to load environment variables.",
        code: `require('dotenv').config();\nconst secret = process.env.JWT_SECRET;`
      },
      {
        id: 561,
        Title: " How to implement password reset functionality?",
        answer: "You can implement password reset by generating a token and sending it to the user's email.",
        Sample: "Generating a password reset token.",
        code: `const resetToken = jwt.sign({ email: user.email }, 'secret', { expiresIn: '1h' });`
      },
      {
        id: 562,
        Title: " How to protect sensitive routes?",
        answer: "You can protect routes by using middleware to check if a user is authenticated.",
        Sample: "Middleware to protect routes.",
        code: `const isAuthenticated = (req, res, next) => { if (req.isAuthenticated()) { return next(); } res.redirect('/login'); };`
      },
      {
        id: 563,
        Title: " How to implement user profile updates?",
        answer: "You can implement profile updates by allowing users to edit their information and saving it in the database.",
        Sample: "Updating user profile information.",
        code: `app.post('/profile', (req, res) => { User.findByIdAndUpdate(req.user.id, req.body, (err) => { // handle update }); });`
      },
      {
        id: 564,
        Title: " What is the purpose of using HTTPS?",
        answer: "HTTPS secures data in transit by encrypting communication between the client and server.",
        Sample: "Redirecting HTTP to HTTPS.",
        code: `const express = require('express');\napp.use((req, res, next) => { if (req.headers['x-forwarded-proto'] !== 'https') { return res.redirect('https://' + req.headers.host + req.url); } next(); });`
      },
      {
        id: 565,
        Title: " How to handle concurrent requests with Passport.js?",
        answer: "You can handle concurrent requests by using sessions and ensuring the session store is set up correctly.",
        Sample: "Handling sessions for concurrent requests.",
        code: `app.use(session({ secret: 'your_secret', resave: false, saveUninitialized: true }));`
      },
      {
        id: 566,
        Title: " How to log user activities?",
        answer: "You can log user activities by creating a logging middleware.",
        Sample: "Logging user requests.",
        code: `app.use((req, res, next) => { console.log(req.method + ' ' + req.url); next(); });`
      },
      {
        id: 567,
        Title: " What is the purpose of using bcrypt?",
        answer: "Bcrypt is used for hashing passwords to enhance security.",
        Sample: "Hashing a password with bcrypt.",
        code: `const bcrypt = require('bcrypt');\nbcrypt.hash(password, 10, (err, hash) => { // store hash });`
      },
      {
        id: 568,
        Title: " How to implement client-side token storage?",
        answer: "You can store tokens in localStorage or sessionStorage on the client side.",
        Sample: "Storing a JWT in localStorage.",
        code: `localStorage.setItem('token', token);`
      },
      {
        id: 569,
        Title: " How to set token expiration in JWT?",
        answer: "You can set token expiration by including an expiresIn option when signing the token.",
        Sample: "Setting expiration for a JWT.",
        code: `const token = jwt.sign(payload, 'secret', { expiresIn: '1h' });`
      },
      {
        id: 570,
        Title: " How to validate user input during registration?",
        answer: "You can validate user input using libraries like Joi or express-validator.",
        Sample: "Validating registration data.",
        code: `const { body, validationResult } = require('express-validator');\napp.post('/register', [body('email').isEmail(), body('password').isLength({ min: 5 })], (req, res) => { const errors = validationResult(req); if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }); } });`
      },
      {
        id: 571,
        Title: " How to implement session expiration?",
        answer: "You can set session expiration by configuring the session store options.",
        Sample: "Setting session expiration.",
        code: `app.use(session({ secret: 'your_secret', cookie: { maxAge: 60000 } }));`
      },
      {
        id: 572,
        Title: " What are CSRF tokens, and how to implement them?",
        answer: "CSRF tokens protect against Cross-Site Request Forgery by validating requests.",
        Sample: "Implementing CSRF protection.",
        code: `const csurf = require('csurf');\napp.use(csurf());`
      },
      {
        id: 573,
        Title: " How to create a public/private key pair for JWT?",
        answer: "You can generate a key pair using OpenSSL.",
        Sample: "Generating a key pair for signing.",
        code: `openssl genrsa -out private.pem 2048\nopenssl rsa -in private.pem -outform PEM -pubout -out public.pem`
      },
      {
        id: 574,
        Title: " How to handle password strength validation?",
        answer: "You can validate password strength using regular expressions.",
        Sample: "Checking password strength.",
        code: `const isValidPassword = (password) => { return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password); };`
      },
      {
        id: 575,
        Title: " How to implement account locking after multiple failed login attempts?",
        answer: "You can lock accounts by keeping track of failed login attempts.",
        Sample: "Locking an account after too many failed attempts.",
        code: `if (failedAttempts >= 5) { user.locked = true; user.save(); }`
      },
      {
        id: 576,
        Title: "What is MongoDB?",
        answer: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.",
        Sample: "Data stored in a collection as documents.",
        code: `const mongoose = require('mongoose');\nconst Schema = mongoose.Schema;\nconst userSchema = new Schema({ name: String, age: Number });\nconst User = mongoose.model('User', userSchema);`
      },
      {
        id: 577,
        Title: "What is a document in MongoDB?",
        answer: "A document is a basic unit of data in MongoDB, similar to a JSON object.",
        Sample: "{ name: 'John', age: 30 }",
        code: `db.collection('users').insertOne({ name: 'John', age: 30 });`
      },
      {
        id: 578,
        Title: "What is a collection in MongoDB?",
        answer: "A collection is a group of MongoDB documents, similar to a table in relational databases.",
        Sample: "Users collection containing user documents.",
        code: `db.createCollection('users');`
      },
      {
        id: 579,
        Title: "How to connect to a MongoDB database?",
        answer: "Use the mongoose library to connect to a MongoDB database.",
        Sample: "Connecting to a database named 'test'.",
        code: `mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });`
      },
     {
        id: 580,
        Title: "What are indexes in MongoDB?",
        answer: "Indexes improve the speed of data retrieval operations on a collection.",
        Sample: "Creating an index on the 'name' field.",
        code: `db.users.createIndex({ name: 1 });`
      },
      {
        id: 581,
        Title: "How to insert a document in MongoDB?",
        answer: "Use the insertOne() or insertMany() method to insert documents.",
        Sample: "Inserting a single user document.",
        code: `db.users.insertOne({ name: 'Jane', age: 25 });`
      },
      {
        id: 582,
        Title: "How to update a document in MongoDB?",
        answer: "Use the updateOne() or updateMany() methods to update documents.",
        Sample: "Updating the age of a user.",
        code: `db.users.updateOne({ name: 'Jane' }, { $set: { age: 26 } });`
      },
      {
        id: 583,
        Title: "How to delete a document in MongoDB?",
        answer: "Use the deleteOne() or deleteMany() methods to remove documents.",
        Sample: "Deleting a user document.",
        code: `db.users.deleteOne({ name: 'Jane' });`
      },
      {
        id: 584,
        Title: "What is the purpose of the ObjectId?",
        answer: "ObjectId is a unique identifier for documents in a MongoDB collection.",
        Sample: "Generated by MongoDB to uniquely identify documents.",
        code: `const ObjectId = mongoose.Types.ObjectId;`
      },
      {
        id: 585,
        Title: " How to find documents in MongoDB?",
        answer: "Use the find() method to query documents in a collection.",
        Sample: "Finding all users.",
        code: `db.users.find();`
      },
      {
        id: 586,
        Title: " How to filter results in MongoDB?",
        answer: "You can filter results using query objects in the find() method.",
        Sample: "Finding users aged 25.",
        code: `db.users.find({ age: 25 });`
      },
      {
        id: 587,
        Title: " What is aggregation in MongoDB?",
        answer: "Aggregation is a way to process data and return computed results.",
        Sample: "Using the aggregate() method to group data.",
        code: `db.users.aggregate([{ $group: { _id: '$age', count: { $sum: 1 } } }]);`
      },
      {
        id: 588,
        Title: " How to use the $match operator in aggregation?",
        answer: "The $match operator filters documents to pass only the documents that match the specified condition.",
        Sample: "Filtering users aged 25 in aggregation.",
        code: `db.users.aggregate([{ $match: { age: 25 } }]);`
      },
      {
        id: 589,
        Title: " What is a replica set in MongoDB?",
        answer: "A replica set is a group of MongoDB servers that maintain the same data set.",
        Sample: "Ensuring high availability and data redundancy.",
        code: `rs.initiate();`
      },
      {
        id: 590,
        Title: " What is sharding in MongoDB?",
        answer: "Sharding is a method for distributing data across multiple servers to ensure scalability.",
        Sample: "Partitioning data across shards.",
        code: `sh.shardCollection('mydb.users', { user_id: 1 });`
      },
      {
        id: 591,
        Title: " What is the MongoDB shell?",
        answer: "The MongoDB shell is an interactive JavaScript interface to MongoDB.",
        Sample: "Using the shell to interact with the database.",
        code: `mongo;`
      },
      {
        id: 592,
        Title: " How to export data from MongoDB?",
        answer: "Use the mongoexport command to export data from a collection.",
        Sample: "Exporting users collection to JSON.",
        code: `mongoexport --db mydb --collection users --out users.json;`
      },
      {
        id: 593,
        Title: " How to import data into MongoDB?",
        answer: "Use the mongoimport command to import data from a file.",
        Sample: "Importing users from a JSON file.",
        code: `mongoimport --db mydb --collection users --file users.json;`
      },
      {
        id: 594,
        Title: " What are MongoDB data types?",
        answer: "MongoDB supports various data types such as String, Number, ObjectId, Array, etc.",
        Sample: "Using different data types in documents.",
        code: `const user = { name: 'John', age: 30, hobbies: ['reading', 'traveling'] };`
      },
      {
        id: 595,
        Title: " What is the use of the $set operator?",
        answer: "The $set operator updates the value of a field in a document.",
        Sample: "Updating the user's age.",
        code: `db.users.updateOne({ name: 'John' }, { $set: { age: 31 } });`
      },
      {
        id: 596,
        Title: " How to create an index on multiple fields?",
        answer: "You can create a compound index on multiple fields in a collection.",
        Sample: "Creating an index on name and age.",
        code: `db.users.createIndex({ name: 1, age: -1 });`
      },
      {
        id: 597,
        Title: " How to perform a text search in MongoDB?",
        answer: "You can create a text index and use the $text operator to search text.",
        Sample: "Finding users with 'John' in their names.",
        code: `db.users.createIndex({ name: 'text' });\ndb.users.find({ $text: { $search: 'John' } });`
      },
      {
        id: 598,
        Title: " What is a histogram in MongoDB?",
        answer: "A histogram is used to visualize the distribution of data.",
        Sample: "Using aggregation to create a histogram.",
        code: `db.users.aggregate([{ $group: { _id: '$age', count: { $sum: 1 } } }]);`
      },
      {
        id: 599,
        Title: " How to handle data validation in MongoDB?",
        answer: "You can use schema validation to enforce data integrity in collections.",
        Sample: "Defining a schema for users.",
        code: `db.createCollection('users', { validator: { $jsonSchema: { bsonType: 'object', required: ['name', 'age'], properties: { name: { bsonType: 'string' }, age: { bsonType: 'int' } } } } } });`
      },
      {
        id: 600,
        Title: " What are the differences between SQL and MongoDB?",
        answer: "SQL is a relational database, while MongoDB is a NoSQL document-oriented database.",
        Sample: "Schema flexibility in MongoDB compared to SQL.",
        code: `// SQL: CREATE TABLE users (id INT, name VARCHAR(100));\n// MongoDB: db.users.insertOne({ name: 'John' });`
      },
      {
        id: 601,
        Title: " How to implement a Many-to-Many relationship in MongoDB?",
        answer: "You can use arrays to implement Many-to-Many relationships.",
        Sample: "Users and their roles.",
        code: `const user = { name: 'John', roles: ['admin', 'user'] };`
      },
      {
        id: 602,
        Title: " How to retrieve only specific fields in MongoDB?",
        answer: "You can specify fields to include or exclude in the find() method.",
        Sample: "Retrieving only names from users.",
        code: `db.users.find({}, { name: 1 });`
      },
      {
        id: 603,
        Title: " How to sort results in MongoDB?",
        answer: "You can use the sort() method to order query results.",
        Sample: "Sorting users by age in descending order.",
        code: `db.users.find().sort({ age: -1 });`
      },
      {
        id: 604,
        Title: " What is the $lookup operator?",
        answer: "The $lookup operator performs left outer joins on collections.",
        Sample: "Joining users with their orders.",
        code: `db.users.aggregate([{ $lookup: { from: 'orders', localField: 'userId', foreignField: 'userId', as: 'orders' } }]);`
      },
      {
        id: 605,
        Title: " How to handle large datasets in MongoDB?",
        answer: "Use pagination and indexing to efficiently handle large datasets.",
        Sample: "Using limit and skip for pagination.",
        code: `db.users.find().skip(10).limit(10);`
      },
      {
        id: 606,
        Title: " What is the use of the $push operator?",
        answer: "The $push operator adds an element to an array in a document.",
        Sample: "Adding a hobby to a user.",
        code: `db.users.updateOne({ name: 'John' }, { $push: { hobbies: 'coding' } });`
      },
      {
        id: 607,
        Title: " How to ensure data consistency in MongoDB?",
        answer: "Use transactions to ensure data consistency across multiple operations.",
        Sample: "Performing multiple updates in a transaction.",
        code: `const session = client.startSession();\nsession.startTransaction();\n// Perform operations\nawait session.commitTransaction();`
      },
      {
        id: 608,
        Title: " What is the purpose of the $unset operator?",
        answer: "The $unset operator removes a field from a document.",
        Sample: "Removing the age field from a user.",
        code: `db.users.updateOne({ name: 'John' }, { $unset: { age: '' } });`
      },
      {
        id: 609,
        Title: " How to find the number of documents in a collection?",
        answer: "Use the countDocuments() method to count documents in a collection.",
        Sample: "Counting all users.",
        code: `db.users.countDocuments();`
      },
      {
         id: 610,
         Title: " How to use the $in operator?",
         answer: "The $in operator checks if a value matches any value in an array.",
         Sample: "Finding users with specific ages.",
         code: `db.users.find({ age: { $in: [25, 30] } });`
       },
       {
         id: 611,
         Title: " How to use the $or operator?",
         answer: "The $or operator combines multiple conditions in a query.",
         Sample: "Finding users who are either 25 or 30.",
         code: `db.users.find({ $or: [{ age: 25 }, { age: 30 }] });`
       },
       {
         id: 612,
         Title: " What is the use of the $expr operator?",
         answer: "The $expr operator allows the use of aggregation expressions within the query language.",
         Sample: "Comparing fields in a query.",
         code: `db.users.find({ $expr: { $gt: ['$age', '$otherAge'] } });`
       },
       {
         id: 613,
         Title: " What is the purpose of the $geoNear stage?",
         answer: "The $geoNear stage is used to return documents sorted by distance from a specified point.",
         Sample: "Finding nearby locations.",
         code: `db.places.aggregate([{ $geoNear: { near: { type: 'Point', coordinates: [102.0, 0.5] }, distanceField: 'dist.calculated' } } }]);`
       },
       {
         id: 614,
         Title: " How to implement a one-to-many relationship in MongoDB?",
         answer: "You can embed documents or use references to implement one-to-many relationships.",
         Sample: "Users with multiple posts.",
         code: `const user = { name: 'John', posts: [{ title: 'Post 1' }, { title: 'Post 2' }] };`
       },
       {
         id: 615,
         Title: " What is the use of the $addFields operator?",
         answer: "The $addFields operator adds new fields to documents in the aggregation pipeline.",
         Sample: "Adding a field to store the age in months.",
         code: `db.users.aggregate([{ $addFields: { ageInMonths: { $multiply: ['$age', 12] } } }]);`
       },
       {
           id: 616,
           Title: " What is the purpose of the $set operator?",
           answer: "The $set operator updates the value of a field in a document without altering the other fields.",
           Sample: "Updating the user's email.",
           code: `db.users.updateOne({ name: 'John' }, { $set: { email: 'john@example.com' } });`
         },
         {
           id: 617,
           Title: " How to create an index in MongoDB?",
           answer: "You can create an index using the createIndex() method to improve query performance.",
           Sample: "Creating an index on the email field.",
           code: `db.users.createIndex({ email: 1 });`
         },
         {
           id: 618,
           Title: " What are capped collections?",
           answer: "Capped collections are fixed-size collections that maintain insertion order and automatically overwrite old data when full.",
           Sample: "Creating a capped collection for logs.",
           code: `db.createCollection('logs', { capped: true, size: 100000 });`
         },
         {
           id: 619,
           Title: " How to update multiple documents at once?",
           answer: "You can use the updateMany() method to update multiple documents that match a query.",
           Sample: "Updating status for multiple users.",
           code: `db.users.updateMany({ status: 'inactive' }, { $set: { status: 'active' } });`
         },
         {
           id: 620,
           Title: " What is the purpose of the $merge operator?",
           answer: "The $merge operator allows you to merge the results of an aggregation pipeline into an existing collection.",
           Sample: "Merging aggregated results into a summary collection.",
           code: `db.orders.aggregate([{ $group: { _id: '$userId', total: { $sum: '$amount' } } }, { $merge: { into: 'orderSummary' } }]);`
         },
         {
           id: 621,
           Title: " How to handle schema validation in MongoDB?",
           answer: "You can use JSON Schema to define validation rules for documents in a collection.",
           Sample: "Defining a schema for users.",
           code: `db.createCollection('users', { validator: { $jsonSchema: { bsonType: 'object', required: ['name', 'email'], properties: { name: { bsonType: 'string' }, email: { bsonType: 'string' } } } } } });`
         },
         {
           id: 622,
           Title: " What is the $count stage in aggregation?",
           answer: "The $count stage counts the number of documents that pass through the aggregation pipeline.",
           Sample: "Counting the number of active users.",
           code: `db.users.aggregate([{ $match: { status: 'active' } }, { $count: 'activeUserCount' }]);`
         },
         {
           id: 623,
           Title: " How to project fields in an aggregation pipeline?",
           answer: "You can use the $project stage to include or exclude fields in the aggregation output.",
           Sample: "Projecting only name and age fields.",
           code: `db.users.aggregate([{ $project: { name: 1, age: 1 } }]);`
         },
         {
           id: 624,
           Title: " How to perform a text search in MongoDB?",
           answer: "You can create a text index and use the $text operator to perform text searches.",
           Sample: "Searching for users with a specific keyword in their bio.",
           code: `db.users.createIndex({ bio: 'text' });\ndb.users.find({ $text: { $search: 'developer' } });`
         },
         {
           id: 625,
           Title: " What is the aggregation framework?",
           answer: "The aggregation framework is a powerful tool for data processing and analysis in MongoDB, allowing you to transform and combine data.",
           Sample: "Calculating total sales.",
           code: `db.sales.aggregate([{ $group: { _id: '$product', totalSales: { $sum: '$amount' } } }]);`
         },
         {
           id: 626,
           Title: " What is the use of the $add operator?",
           answer: "The $add operator is used to add numbers, dates, or arrays in aggregation expressions.",
           Sample: "Calculating the total amount including tax.",
           code: `db.sales.aggregate([{ $project: { total: { $add: ['$amount', '$tax'] } } }]);`
         },
         {
           id: 627,
           Title: " How to implement pagination using aggregation?",
           answer: "You can implement pagination by using the $skip and $limit stages in the aggregation pipeline.",
           Sample: "Paginating results to show 10 users per page.",
           code: `db.users.aggregate([{ $skip: 10 }, { $limit: 10 }]);`
         },
         {
           id: 628,
           Title: " How to use the $sample operator?",
           answer: "The $sample operator randomly selects documents from a collection.",
           Sample: "Selecting 5 random users.",
           code: `db.users.aggregate([{ $sample: { size: 5 } }]);`
         },
         {
           id: 629,
           Title: " What is the $facet stage?",
           answer: "The $facet stage allows you to perform multiple independent aggregations in a single query.",
           Sample: "Calculating total and average sales in one query.",
           code: `db.sales.aggregate([{ $facet: { totalSales: [{ $group: { _id: null, total: { $sum: '$amount' } } }], averageSales: [{ $group: { _id: null, average: { $avg: '$amount' } } }] } }]);`
         },
         {
           id: 630,
           Title: " What is the use of the $group stage?",
           answer: "The $group stage groups documents by specified fields and allows for aggregating data.",
           Sample: "Grouping sales by product.",
           code: `db.sales.aggregate([{ $group: { _id: '$product', totalAmount: { $sum: '$amount' } } }]);`
         },
         {
           id: 631,
           Title: " How to use the $arrayElemAt operator?",
           answer: "The $arrayElemAt operator retrieves an element from an array at a specified index.",
           Sample: "Getting the first hobby from a user's hobbies array.",
           code: `db.users.aggregate([{ $project: { firstHobby: { $arrayElemAt: ['$hobbies', 0] } } }]);`
         },
         {
           id: 632,
           Title: " How to create a geospatial index?",
           answer: "You can create a 2dsphere index for geospatial queries using the createIndex() method.",
           Sample: "Creating a geospatial index for locations.",
           code: `db.locations.createIndex({ location: '2dsphere' });`
         },
         {
           id: 633,
           Title: " How to perform a join using the aggregation framework?",
           answer: "You can use the $lookup stage in the aggregation framework to perform joins.",
           Sample: "Joining users with their orders.",
           code: `db.users.aggregate([{ $lookup: { from: 'orders', localField: 'userId', foreignField: 'userId', as: 'orders' } }]);`
         },
         {
           id: 634,
           Title: " How to perform bulk operations in MongoDB?",
           answer: "You can perform bulk operations using the bulkWrite() method to execute multiple write operations.",
           Sample: "Inserting multiple users at once.",
           code: `db.users.bulkWrite([{ insertOne: { document: { name: 'John' } } }, { insertOne: { document: { name: 'Jane' } } }]);`
         },
         {
           id: 635,
           Title: " How to use the $ifNull operator?",
           answer: "The $ifNull operator returns the value of a field or a default value if the field is null.",
           Sample: "Returning user's email or a placeholder if null.",
           code: `db.users.aggregate([{ $project: { email: { $ifNull: ['$email', 'no-email@example.com'] } } }]);`
         },
         {
             "id":636,
             "Title":"What is Mongoose?",
             "answer":"Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.",
             "Sample":"Used for modeling application data.",
             "code":"`const mongoose = require('mongoose');`"
          },
          {
             "id":637,
             "Title":"How to connect to MongoDB using Mongoose?",
             "answer":"You can connect to MongoDB by using the `mongoose.connect()` method.",
             "Sample":"Connecting to a MongoDB database.",
             "code":"`mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });`"
          },
          {
             "id":638,
             "Title":"What is a Mongoose Schema?",
             "answer":"A Mongoose schema defines the structure of a document within a collection.",
             "Sample":"Defining a user schema.",
             "code":"`const userSchema = new mongoose.Schema({ name: String, age: Number });`"
          },
          {
             "id":639,
             "Title":"How to create a model from a schema?",
             "answer":"You can create a model using `mongoose.model()`.",
             "Sample":"Creating a User model.",
             "code":"`const User = mongoose.model('User', userSchema);`"
          },
          {
             "id":640,
             "Title":"How to save a document to the database?",
             "answer":"You can save a document using the `.save()` method on a model instance.",
             "Sample":"Saving a new user.",
             "code":"`const user = new User({ name: 'John', age: 30 });\nuser.save();`"
          },
          {
             "id":641,
             "Title":"How to find documents in a collection?",
             "answer":"You can find documents using the `.find()` method.",
             "Sample":"Finding all users.",
             "code":"`User.find({}, (err, users) => { /* Logic */ });`"
          },
          {
             "id":642,
             "Title":"How to update a document in a collection?",
             "answer":"You can update a document using the `.updateOne()` method.",
             "Sample":"Updating a user's age.",
             "code":"`User.updateOne({ name: 'John' }, { age: 31 }, (err, res) => { /* Logic */ });`"
          },
          {
             "id":643,
             "Title":"How to delete a document in Mongoose?",
             "answer":"You can delete a document using the `.deleteOne()` method.",
             "Sample":"Deleting a user.",
             "code":"`User.deleteOne({ name: 'John' }, (err) => { /* Logic */ });`"
          },
          {
             "id":644,
             "Title":"What are Mongoose Middleware?",
             "answer":"Mongoose middleware are functions that are invoked at specific stages of a document's lifecycle.",
             "Sample":"Using a pre-save middleware.",
             "code":"`userSchema.pre('save', function(next) { /* Logic */ next(); });`"
          },
          {
             "id":645,
             "Title":" How to define default values in Mongoose Schema?",
             "answer":"You can define default values for fields in a schema.",
             "Sample":"Setting a default age.",
             "code":"`const userSchema = new mongoose.Schema({ name: String, age: { type: Number, default: 18 } });`"
          },
          {
             "id":646,
             "Title":" How to create indexes in Mongoose?",
             "answer":"You can create indexes using the `.index()` method in your schema.",
             "Sample":"Creating an index on the name field.",
             "code":"`userSchema.index({ name: 1 });`"
          },
          {
             "id":647,
             "Title":" What is Mongoose population?",
             "answer":"Population in Mongoose refers to the ability to reference documents in other collections.",
             "Sample":"Populating a user's posts.",
             "code":"`User.find().populate('posts').exec();`"
          },
          {
             "id":648,
             "Title":" How to implement validation in Mongoose?",
             "answer":"You can implement validation using schema properties and built-in validators.",
             "Sample":"Validating required fields.",
             "code":"`const userSchema = new mongoose.Schema({ name: { type: String, required: true } });`"
          },
          {
             "id":649,
             "Title":" What are virtuals in Mongoose?",
             "answer":"Virtuals are document properties that are not stored in MongoDB but are computed from other document values.",
             "Sample":"Creating a full name virtual.",
             "code":"`userSchema.virtual('fullName').get(function() { return this.firstName + ' ' + this.lastName; });`"
          },
          {
             "id":650,
             "Title":" How to handle errors in Mongoose?",
             "answer":"You can handle errors in Mongoose using callbacks or promises.",
             "Sample":"Catching validation errors.",
             "code":"`user.save().catch(err => { /* Handle error */ });`"
          },
          {
             "id":651,
             "Title":" How to use lean queries in Mongoose?",
             "answer":"You can use `.lean()` to return plain JavaScript objects instead of Mongoose documents.",
             "Sample":"Performing a lean find operation.",
             "code":"`User.find().lean().exec((err, users) => { /* Logic */ });`"
          },
          {
             "id":652,
             "Title":" What is the difference between `findOne` and `find`?",
             "answer":"`findOne` returns a single document while `find` returns an array of documents.",
             "Sample":"Using both methods.",
             "code":"`User.findOne({ name: 'John' }, (err, user) => { /* Logic */ });`"
          },
          {
             "id":653,
             "Title":" How to paginate results in Mongoose?",
             "answer":"You can paginate results using the `skip` and `limit` methods.",
             "Sample":"Paginating user results.",
             "code":"`User.find().skip(10).limit(5).exec();`"
          },
          {
             "id":654,
             "Title":" How to implement soft deletes in Mongoose?",
             "answer":"You can implement soft deletes by adding a deleted flag to your schema.",
             "Sample":"Soft deleting a user.",
             "code":"`userSchema.add({ deleted: { type: Boolean, default: false } });`"
          },
          {
             "id":655,
             "Title":" How to use aggregation in Mongoose?",
             "answer":"You can use the `.aggregate()` method to perform aggregation operations.",
             "Sample":"Aggregating user data.",
             "code":"`User.aggregate([{ $group: { _id: '$age', count: { $sum: 1 } } }]);`"
          },
          {
             "id":656,
             "Title":" How to create a compound index in Mongoose?",
             "answer":"You can create a compound index by passing an object with multiple fields to the `.index()` method.",
             "Sample":"Creating a compound index on name and age.",
             "code":"`userSchema.index({ name: 1, age: 1 });`"
          },
          {
             "id":657,
             "Title":" How to use timestamps in Mongoose?",
             "answer":"You can add timestamps to your schema by setting the `timestamps` option to true.",
             "Sample":"Adding createdAt and updatedAt fields.",
             "code":"`const userSchema = new mongoose.Schema({ name: String }, { timestamps: true });`"
          },
          {
             "id":658,
             "Title":" How to define custom validation in Mongoose?",
             "answer":"You can define custom validation using a validator function in your schema.",
             "Sample":"Validating age.",
             "code":"`age: { type: Number, validate: { validator: v => v > 18, message: 'Age must be greater than 18' } }`"
          },
          {
             "id":659,
             "Title":" How to handle large datasets in Mongoose?",
             "answer":"You can handle large datasets using streaming or the `cursor()` method.",
             "Sample":"Streaming user data.",
             "code":"`User.find().cursor().eachAsync(user => { /* Logic */ });`"
          },
          {
             "id":660,
             "Title":" How to set up a discriminator in Mongoose?",
             "answer":"You can use discriminators to create multiple models with different schemas from a single base model.",
             "Sample":"Creating an Admin user model.",
             "code":"`const Admin = User.discriminator('Admin', new mongoose.Schema({ role: String }));`"
          },
          {
             "id":661,
             "Title":" How to use the `populate` method with multiple fields?",
             "answer":"You can populate multiple fields in a single query by passing an object to the `populate` method.",
             "Sample":"Populating multiple references.",
             "code":"`User.find().populate('posts comments').exec();`"
          },
          {
             "id":662,
             "Title":" How to work with subdocuments in Mongoose?",
             "answer":"You can define subdocuments within a schema to create nested structures.",
             "Sample":"Defining a schema with subdocuments.",
             "code":"`const postSchema = new mongoose.Schema({ title: String, comments: [commentSchema] });`"
          },
          {
             "id":663,
             "Title":" How to use the `lean` option in queries?",
             "answer":"Using the `lean` option will return plain JavaScript objects instead of Mongoose documents.",
             "Sample":"Performing a lean find operation.",
             "code":"`User.find().lean().exec();`"
          },
          {
             "id":664,
             "Title":" How to use the `updateMany` method?",
             "answer":"You can use the `updateMany` method to update multiple documents that match a query.",
             "Sample":"Updating all users' age.",
             "code":"`User.updateMany({}, { age: 25 });`"
          },
          {
             "id":665,
             "Title":" How to validate on update?",
             "answer":"You can validate fields during updates by using the `runValidators` option.",
             "Sample":"Running validators on an update.",
             "code":"`User.updateOne({ name: 'John' }, { age: 15 }, { runValidators: true });`"
          },
          {
             "id":666,
             "Title":" What is the purpose of `set` in Mongoose?",
             "answer":"The `set` method is used to set a value for a specific path in a document.",
             "Sample":"Setting a user's name.",
             "code":"`user.set('name', 'Alice');`"
          },
          {
             "id":667,
             "Title":" How to use `findByIdAndUpdate`?",
             "answer":"You can use `findByIdAndUpdate` to find a document by its ID and update it.",
             "Sample":"Updating a user by ID.",
             "code":"`User.findByIdAndUpdate(userId, { age: 32 });`"
          },
          {
             "id":668,
             "Title":" What are the benefits of using Mongoose?",
             "answer":"Mongoose provides a straightforward way to model and manage data, with built-in validation and middleware.",
             "Sample":"Easy data management with Mongoose.",
             "code":"`const mongoose = require('mongoose');`"
          },
          {
             "id":669,
             "Title":" How to use the `aggregate` method?",
             "answer":"You can use the `aggregate` method to perform data aggregation operations.",
             "Sample":"Aggregating user data by age.",
             "code":"`User.aggregate([{ $group: { _id: '$age', total: { $sum: 1 } } }]);`"
          },
          {
             "id":670,
             "Title":" How to implement a unique index?",
             "answer":"You can implement a unique index to ensure that a field is unique across all documents.",
             "Sample":"Creating a unique index on email.",
             "code":"`userSchema.index({ email: 1 }, { unique: true });`"
          },
          {
             "id":671,
             "Title":" What is the `timestamps` option in Mongoose?",
             "answer":"The `timestamps` option automatically adds `createdAt` and `updatedAt` fields to your schema.",
             "Sample":"Using the timestamps option.",
             "code":"`const userSchema = new mongoose.Schema({}, { timestamps: true });`"
          },
          {
            "id":672,
            "Title":" How to work with transactions in Mongoose?",
            "answer":"You can work with transactions in Mongoose when using MongoDB 4.0 or later.",
            "Sample":"Using a transaction for multiple operations.",
            "code":"`const session = await mongoose.startSession();\nsession.startTransaction();`"
         },
         {
            "id":673,
            "Title":" How to enable debugging in Mongoose?",
            "answer":"You can enable debugging by setting `mongoose.set('debug', true);`.",
            "Sample":"Debugging Mongoose operations.",
            "code":"`mongoose.set('debug', true);`"
         },
         {
            "id":674,
            "Title":" How to handle circular references?",
            "answer":"You can handle circular references by using a reference approach with Mongoose.",
            "Sample":"Defining circular references in schemas.",
            "code":"`const parentSchema = new mongoose.Schema({ children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Child' }] });`"
         },
         {
            "id":675,
            "Title":" How to optimize Mongoose queries?",
            "answer":"You can optimize queries by using indexes and lean queries.",
            "Sample":"Using lean to optimize queries.",
            "code":"`User.find().lean().exec();`"
         },
         {
            "id":676,
            "Title":" How to set default values in a schema?",
            "answer":"You can set default values for schema paths by using the `default` property.",
            "Sample":"Setting a default age.",
            "code":"`const userSchema = new mongoose.Schema({ age: { type: Number, default: 18 } });`"
         },
         {
            "id":677,
            "Title":" How to use virtuals in Mongoose?",
            "answer":"Virtuals are properties that do not get persisted in MongoDB but can be used for computed values.",
            "Sample":"Creating a virtual property for full name.",
            "code":"`userSchema.virtual('fullName').get(function() { return this.firstName + ' ' + this.lastName; });`"
         },
         {
            "id":678,
            "Title":" What is the purpose of middleware in Mongoose?",
            "answer":"Middleware allows you to perform actions at certain points in the document's lifecycle.",
            "Sample":"Using pre-save middleware to hash a password.",
            "code":"`userSchema.pre('save', function(next) { this.password = hash(this.password); next(); });`"
         },
         {
            "id":679,
            "Title":" How to handle errors in Mongoose?",
            "answer":"You can handle errors using try-catch blocks or the callback function of Mongoose methods.",
            "Sample":"Catching validation errors.",
            "code":"`try { await user.save(); } catch (error) { console.error(error); }`"
         },
         {
            "id":680,
            "Title":" How to implement pagination in Mongoose?",
            "answer":"You can implement pagination by using the `skip` and `limit` methods.",
            "Sample":"Fetching the second page of users.",
            "code":"`User.find().skip(10).limit(10);`"
         },
         {
            "id": 681,
            "Title":" How to remove a document in Mongoose?",
            "answer":"You can remove a document using the `remove` or `deleteOne` method.",
            "Sample":"Removing a user by ID.",
            "code":"`User.deleteOne({ _id: userId });`"
         },
         {
            "id": 682,
            "Title":" How to use the `populate` method?",
            "answer":"The `populate` method is used to replace the specified path in the document with documents from other collections.",
            "Sample":"Populating a user's posts.",
            "code":"`User.find().populate('posts');`"
         },
         {
            "id": 683,
            "Title":" How to use aggregation pipeline in Mongoose?",
            "answer":"You can use the aggregation pipeline to process data and return computed results.",
            "Sample":"Calculating total posts per user.",
            "code":"`User.aggregate([{ $lookup: { from: 'posts', localField: '_id', foreignField: 'userId', as: 'posts' } }]);`"
         },
         {
            "id": 684,
            "Title":" What are compound indexes?",
            "answer":"Compound indexes are indexes on multiple fields, improving the performance of queries that filter on those fields.",
            "Sample":"Creating a compound index on name and age.",
            "code":"`userSchema.index({ name: 1, age: -1 });`"
         },
         {
            "id": 685,
            "Title":" How to implement soft deletes in Mongoose?",
            "answer":"Soft deletes can be implemented by adding a `deleted` boolean field to your schema.",
            "Sample":"Marking a user as deleted instead of removing it.",
            "code":"`userSchema.add({ deleted: { type: Boolean, default: false } });`"
         },
         {
            "id": 686,
            "Title":" How to use the `$in` operator in queries?",
            "answer":"The `$in` operator allows you to find documents where a field's value matches any value in a specified array.",
            "Sample":"Finding users with specific roles.",
            "code":"`User.find({ role: { $in: ['admin', 'editor'] } });`"
         },
         {
            "id":687,
            "Title":" How to sort query results?",
            "answer":"You can sort query results by using the `sort` method.",
            "Sample":"Sorting users by age in descending order.",
            "code":"`User.find().sort({ age: -1 });`"
         },
         {
            "id":688,
            "Title":" How to handle timestamps manually?",
            "answer":"You can manually handle timestamps by adding them to your schema and updating them as needed.",
            "Sample":"Manually updating a lastModified timestamp.",
            "code":"`userSchema.add({ lastModified: Date });\nuser.lastModified = Date.now();`"
         },
         {
            "id":689,
            "Title":" What is the `setDefaultsOnInsert` option?",
            "answer":"This option allows you to set default values on insertions when using `update` operations.",
            "Sample":"Using `setDefaultsOnInsert` in an update.",
            "code":"`User.updateOne({ _id: userId }, { $set: { age: 30 }, $setOnInsert: { name: 'New User' } }, { upsert: true, setDefaultsOnInsert: true });`"
         },
         {
            "id":690,
            "Title":" How to implement full-text search in Mongoose?",
            "answer":"You can implement full-text search by creating a text index on the desired fields.",
            "Sample":"Creating a text index on the name and description fields.",
            "code":"`userSchema.index({ name: 'text', description: 'text' });`"
         },
         {
            "id":691,
            "Title":" How to use the `aggregate` method for lookup?",
            "answer":"You can use the `$lookup` stage in aggregation to perform left outer joins.",
            "Sample":"Joining users with their orders.",
            "code":"`User.aggregate([{ $lookup: { from: 'orders', localField: '_id', foreignField: 'userId', as: 'orders' } }]);`"
         },
         {
            "id":692,
            "Title":" How to define a schema with embedded documents?",
            "answer":"You can define embedded documents by using a nested schema.",
            "Sample":"Embedding addresses in a user schema.",
            "code":"`const addressSchema = new mongoose.Schema({ street: String, city: String });\nconst userSchema = new mongoose.Schema({ name: String, address: addressSchema });`"
         },
         {
            "id":693,
            "Title":" How to use the `distinct` method?",
            "answer":"The `distinct` method returns an array of distinct values for a specified field.",
            "Sample":"Finding distinct user roles.",
            "code":"`User.distinct('role');`"
         },
         {
            "id":694,
            "Title":" How to use Mongoose with TypeScript?",
            "answer":"You can use Mongoose with TypeScript by defining interfaces for your models.",
            "Sample":"Defining a User interface.",
            "code":"`interface IUser extends Document { name: string; age: number; }\nconst UserModel = mongoose.model<IUser>('User', userSchema);`"
         },
         {
          id: 695,
          Title: " How to define a schema with embedded documents?",
          answer: "You can define embedded documents by using a nested schema.",
          Sample: "Embedding addresses in a user schema.",
          code: `const addressSchema = new mongoose.Schema({ street: String, city: String });\nconst userSchema = new mongoose.Schema({ name: String, address: addressSchema });`
        },
        {
          id: 696,
          Title: " How to use the `distinct` method?",
          answer: "The `distinct` method returns an array of distinct values for a specified field.",
          Sample: "Finding distinct user roles.",
          code: `User.distinct('role');`
        },
        {
          id: 697,
          Title: " How to use Mongoose with TypeScript?",
          answer: "You can use Mongoose with TypeScript by defining interfaces for your models.",
          Sample: "Defining a User interface.",
          code: `interface IUser extends Document { name: string; age: number; }\nconst UserModel = mongoose.model<IUser>('User', userSchema);`
        },
        {
          id: 698,
          Title: " How to create a Mongoose model?",
          answer: "You can create a model by compiling a schema using `mongoose.model()`.",
          Sample: "Creating a user model.",
          code: `const UserModel = mongoose.model('User', userSchema);`
        },
        {
          id: 699,
          Title: " How to implement full-text search in Mongoose?",
          answer: "You can implement full-text search by creating a text index on the desired fields.",
          Sample: "Creating a text index on the name and description fields.",
          code: `userSchema.index({ name: 'text', description: 'text' });`
        },
        {
          id: 700,
          Title: " How to use the `aggregate` method for lookup?",
          answer: "You can use the `$lookup` stage in aggregation to perform left outer joins.",
          Sample: "Joining users with their orders.",
          code: `User.aggregate([{ $lookup: { from: 'orders', localField: '_id', foreignField: 'userId', as: 'orders' } }]);`
        },
          
    {
      id: 701,
      Title: "What is Mongoose?",
      answer: "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.",
      Sample: "Used for modeling application data.",
      code: `const mongoose = require('mongoose');`
    },
    {
      id: 702,
      Title: "How to connect to MongoDB using Mongoose?",
      answer: "You can connect to MongoDB by using the `mongoose.connect()` method.",
      Sample: "Connecting to a MongoDB database.",
      code: `mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });`
    },
    {
      id: 703,
      Title: "What is a Mongoose Schema?",
      answer: "A Mongoose schema defines the structure of a document within a collection.",
      Sample: "Defining a user schema.",
      code: `const userSchema = new mongoose.Schema({ name: String, age: Number });`
    },
    {
      id: 704,
      Title: "How to create a model from a schema?",
      answer: "You can create a model using `mongoose.model()`.",
      Sample: "Creating a User model.",
      code: `const User = mongoose.model('User', userSchema);`
    },
    {
      id: 705,
      Title: "How to save a document to the database?",
      answer: "You can save a document using the `.save()` method on a model instance.",
      Sample: "Saving a new user.",
      code: `const user = new User({ name: 'John', age: 30 });\nuser.save();`
    },
    {
      id: 706,
      Title: "How to find documents in a collection?",
      answer: "You can find documents using the `.find()` method.",
      Sample: "Finding all users.",
      code: `User.find({}, (err, users) => { /* Logic */ });`
    },
    {
      id: 707,
      Title: "How to update a document in a collection?",
      answer: "You can update a document using the `.updateOne()` method.",
      Sample: "Updating a user's age.",
      code: `User.updateOne({ name: 'John' }, { age: 31 }, (err, res) => { /* Logic */ });`
    },
    {
      id: 708,
      Title: "How to delete a document in Mongoose?",
      answer: "You can delete a document using the `.deleteOne()` method.",
      Sample: "Deleting a user.",
      code: `User.deleteOne({ name: 'John' }, (err) => { /* Logic */ });`
    },
    {
      id: 709,
      Title: "What are Mongoose Middleware?",
      answer: "Mongoose middleware are functions that are invoked at specific stages of a document's lifecycle.",
      Sample: "Using a pre-save middleware.",
      code: `userSchema.pre('save', function(next) { /* Logic */ next(); });`
    },
    {
      id: 710,
      Title: " How to define default values in Mongoose Schema?",
      answer: "You can define default values for fields in a schema.",
      Sample: "Setting a default age.",
      code: `const userSchema = new mongoose.Schema({ name: String, age: { type: Number, default: 18 } });`
    },
    {
      id: 711,
      Title: " How to create indexes in Mongoose?",
      answer: "You can create indexes using the `.index()` method in your schema.",
      Sample: "Creating an index on the name field.",
      code: `userSchema.index({ name: 1 });`
    },
    {
      id: 712,
      Title: " What is Mongoose population?",
      answer: "Population in Mongoose refers to the ability to reference documents in other collections.",
      Sample: "Populating a user's posts.",
      code: `User.find().populate('posts').exec();`
    },
    {
      id: 713,
      Title: " How to implement validation in Mongoose?",
      answer: "You can implement validation using schema properties and built-in validators.",
      Sample: "Validating required fields.",
      code: `const userSchema = new mongoose.Schema({ name: { type: String, required: true } });`
    },
    {
      id: 714,
      Title: " What are virtuals in Mongoose?",
      answer: "Virtuals are document properties that are not stored in MongoDB but are computed from other document values.",
      Sample: "Creating a full name virtual.",
      code: `userSchema.virtual('fullName').get(function() { return this.firstName + ' ' + this.lastName; });`
    },
    {
      id: 715,
      Title: " How to handle errors in Mongoose?",
      answer: "You can handle errors in Mongoose using callbacks or promises.",
      Sample: "Catching validation errors.",
      code: `user.save().catch(err => { /* Handle error */ });`
    },
    {
      id: 716,
      Title: " How to use lean queries in Mongoose?",
      answer: "You can use `.lean()` to return plain JavaScript objects instead of Mongoose documents.",
      Sample: "Performing a lean find operation.",
      code: `User.find().lean().exec((err, users) => { /* Logic */ });`
    },
    {
      id: 717,
      Title: " What is the difference between `findOne` and `find`?",
      answer: "`findOne` returns a single document while `find` returns an array of documents.",
      Sample: "Using both methods.",
      code: `User.findOne({ name: 'John' }, (err, user) => { /* Logic */ });`
    },
    {
      id: 718,
      Title: " How to paginate results in Mongoose?",
      answer: "You can paginate results using the `skip` and `limit` methods.",
      Sample: "Paginating user results.",
      code: `User.find().skip(10).limit(5).exec();`
    },
    {
      id: 719,
      Title: " How to implement soft deletes in Mongoose?",
      answer: "You can implement soft deletes by adding a deleted flag to your schema.",
      Sample: "Soft deleting a user.",
      code: `userSchema.add({ deleted: { type: Boolean, default: false } });`
    },
    {
      id: 720,
      Title: " How to use aggregation in Mongoose?",
      answer: "You can use the `.aggregate()` method to perform aggregation operations.",
      Sample: "Aggregating user data.",
      code: `User.aggregate([{ $group: { _id: '$age', count: { $sum: 1 } } }]);`
    },
    {
      id: 721,
      Title: " How to create a compound index in Mongoose?",
      answer: "You can create a compound index by passing an object with multiple fields to the `.index()` method.",
      Sample: "Creating a compound index on name and age.",
      code: `userSchema.index({ name: 1, age: 1 });`
    },
    {
      id: 722,
      Title: " How to use timestamps in Mongoose?",
      answer: "You can add timestamps to your schema by setting the `timestamps` option to true.",
      Sample: "Adding createdAt and updatedAt fields.",
      code: `const userSchema = new mongoose.Schema({ name: String }, { timestamps: true });`
    },
    {
      id: 723,
      Title: " How to define custom validation in Mongoose?",
      answer: "You can define custom validation using a validator function in your schema.",
      Sample: "Validating age.",
      code: `age: { type: Number, validate: { validator: v => v > 18, message: 'Age must be greater than 18' } }`
    },
    {
      id: 724,
      Title: " How to handle large datasets in Mongoose?",
      answer: "You can handle large datasets using streaming or the `cursor()` method.",
      Sample: "Streaming user data.",
      code: `User.find().cursor().eachAsync(user => { /* Logic */ });`
    },
    {
      id: 725,
      Title: " How to set up a discriminator in Mongoose?",
      answer: "You can use discriminators to create multiple models with different schemas from a single base model.",
      Sample: "Creating an Admin user model.",
      code: `const Admin = User.discriminator('Admin', new mongoose.Schema({ role: String }));`
    },
    {
      id: 726,
      Title: " How to use the `populate` method with multiple fields?",
      answer: "You can populate multiple fields in a single query by passing an object to the `populate` method.",
      Sample: "Populating multiple references.",
      code: `User.find().populate('posts comments').exec();`
    },
    {
      id: 727,
      Title: " How to work with subdocuments in Mongoose?",
      answer: "You can define subdocuments within a schema to create nested structures.",
      Sample: "Defining a schema with subdocuments.",
      code: `const postSchema = new mongoose.Schema({ title: String, comments: [commentSchema] });`
    },
    {
      id: 728,
      Title: " How to use the `lean` option in queries?",
      answer: "Using the `lean` option will return plain JavaScript objects instead of Mongoose documents.",
      Sample: "Performing a lean find operation.",
      code: `User.find().lean().exec();`
    },
    {
      id: 729,
      Title: " How to use the `updateMany` method?",
      answer: "You can use the `updateMany` method to update multiple documents that match a query.",
      Sample: "Updating all users' age.",
      code: `User.updateMany({}, { age: 25 });`
    },
    {
      id: 730,
      Title: " How to validate on update?",
      answer: "You can validate fields during updates by using the `runValidators` option.",
      Sample: "Running validators on an update.",
      code: `User.updateOne({ name: 'John' }, { age: 15 }, { runValidators: true });`
    },
    {
      id: 731,
      Title: " What is the purpose of `set` in Mongoose?",
      answer: "The `set` method is used to set a value for a specific path in a document.",
      Sample: "Setting a user's name.",
      code: `user.set('name', 'Alice');`
    },
    {
      id: 732,
      Title: " How to use `findByIdAndUpdate`?",
      answer: "You can use `findByIdAndUpdate` to find a document by its ID and update it.",
      Sample: "Updating a user by ID.",
      code: `User.findByIdAndUpdate(userId, { age: 32 });`
    },
    {
      id: 733,
      Title: " What are the benefits of using Mongoose?",
      answer: "Mongoose provides a straightforward way to model and manage data, with built-in validation and middleware.",
      Sample: "Easy data management with Mongoose.",
      code: `const mongoose = require('mongoose');`
    },
    {
      id: 734,
      Title: " How to use the `aggregate` method?",
      answer: "You can use the `aggregate` method to perform data aggregation operations.",
      Sample: "Aggregating user data by age.",
      code: `User.aggregate([{ $group: { _id: '$age', total: { $sum: 1 } } }]);`
    },
    {
      id: 735,
      Title: " How to implement a unique index?",
      answer: "You can implement a unique index to ensure that a field is unique across all documents.",
      Sample: "Creating a unique index on email.",
      code: `userSchema.index({ email: 1 }, { unique: true });`
    },
    {
      id: 736,
      Title: " What is the `timestamps` option in Mongoose?",
      answer: "The `timestamps` option automatically adds `createdAt` and `updatedAt` fields to your schema.",
      Sample: "Using the timestamps option.",
      code: `const userSchema = new mongoose.Schema({}, { timestamps: true });`
    },
    {
      id: 737,
      Title: " How to work with transactions in Mongoose?",
      answer: "You can work with transactions in Mongoose when using MongoDB 4.0 or later.",
      Sample: "Using a transaction for multiple operations.",
      code: `const session = await mongoose.startSession();\nsession.startTransaction();`
    },
    {
      id: 738,
      Title: " How to enable debugging in Mongoose?",
      answer: "You can enable debugging by setting `mongoose.set('debug', true);`.",
      Sample: "Debugging Mongoose operations.",
      code: `mongoose.set('debug', true);`
    },
    {
      id: 739,
      Title: " How to handle circular references?",
      answer: "You can handle circular references by using a reference approach with Mongoose.",
      Sample: "Defining circular references in schemas.",
      code: `const parentSchema = new mongoose.Schema({ children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Child' }] });`
    },
    {
      id: 740,
      Title: " How to optimize Mongoose queries?",
      answer: "You can optimize queries by using indexes and lean queries.",
      Sample: "Using lean to optimize queries.",
      code: `User.find().lean().exec();`
    },
    {
      id: 741,
      Title: " How to set default values in a schema?",
      answer: "You can set default values for schema paths by using the `default` property.",
      Sample: "Setting a default age.",
      code: `const userSchema = new mongoose.Schema({ age: { type: Number, default: 18 } });`
    },
    {
      id: 742,
      Title: " How to use virtuals in Mongoose?",
      answer: "Virtuals are properties that do not get persisted in MongoDB but can be used for computed values.",
      Sample: "Creating a virtual property for full name.",
      code: `userSchema.virtual('fullName').get(function() { return this.firstName + ' ' + this.lastName; });`
    },
    {
      id: 743,
      Title: " What is the purpose of middleware in Mongoose?",
      answer: "Middleware allows you to perform actions at certain points in the document's lifecycle.",
      Sample: "Using pre-save middleware to hash a password.",
      code: `userSchema.pre('save', function(next) { this.password = hash(this.password); next(); });`
    },
    {
      id: 744,
      Title: " How to handle errors in Mongoose?",
      answer: "You can handle errors using try-catch blocks or the callback function of Mongoose methods.",
      Sample: "Catching validation errors.",
      code: `try { await user.save(); } catch (error) { console.error(error); }`
    },
    {
      id: 745,
      Title: " How to implement pagination in Mongoose?",
      answer: "You can implement pagination by using the `skip` and `limit` methods.",
      Sample: "Fetching the second page of users.",
      code: `User.find().skip(10).limit(10);`
    },
    {
      id: 746,
      Title: " How to remove a document in Mongoose?",
      answer: "You can remove a document using the `remove` or `deleteOne` method.",
      Sample: "Removing a user by ID.",
      code: `User.deleteOne({ _id: userId });`
    },
    {
      id: 747,
      Title: " How to use the `populate` method?",
      answer: "The `populate` method is used to replace the specified path in the document with documents from other collections.",
      Sample: "Populating a user's posts.",
      code: `User.find().populate('posts');`
    },
    {
      id: 748,
      Title: " How to use aggregation pipeline in Mongoose?",
      answer: "You can use the aggregation pipeline to process data and return computed results.",
      Sample: "Calculating total posts per user.",
      code: `User.aggregate([{ $lookup: { from: 'posts', localField: '_id', foreignField: 'userId', as: 'posts' } }]);`
    },
    {
      id: 749,
      Title: " What are compound indexes?",
      answer: "Compound indexes are indexes on multiple fields, improving the performance of queries that filter on those fields.",
      Sample: "Creating a compound index on name and age.",
      code: `userSchema.index({ name: 1, age: -1 });`
    },
    {
      id: 750,
      Title: " How to implement soft deletes in Mongoose?",
      answer: "Soft deletes can be implemented by adding a `deleted` boolean field to your schema.",
      Sample: "Marking a user as deleted instead of removing it.",
      code: `userSchema.add({ deleted: { type: Boolean, default: false } });`
    },
    {
      id: 751,
      Title: " How to use the `$in` operator in queries?",
      answer: "The `$in` operator allows you to find documents where a field's value matches any value in a specified array.",
      Sample: "Finding users with specific roles.",
      code: `User.find({ role: { $in: ['admin', 'editor'] } });`
    },
    {
      id: 752,
      Title: " How to sort query results?",
      answer: "You can sort query results by using the `sort` method.",
      Sample: "Sorting users by age in descending order.",
      code: `User.find().sort({ age: -1 });`
    },
    {
      id: 753,
      Title: " How to handle timestamps manually?",
      answer: "You can manually handle timestamps by adding them to your schema and updating them as needed.",
      Sample: "Manually updating a lastModified timestamp.",
      code: `userSchema.add({ lastModified: Date });\nuser.lastModified = Date.now();`
    },
    {
      id: 754,
      Title: " What is the `setDefaultsOnInsert` option?",
      answer: "This option allows you to set default values on insertions when using `update` operations.",
      Sample: "Using `setDefaultsOnInsert` in an update.",
      code: `User.updateOne({ _id: userId }, { $set: { age: 30 }, $setOnInsert: { name: 'New User' } }, { upsert: true, setDefaultsOnInsert: true });`
    },
    
   {
    id: 755,
    Title: "What is Node.js?",
    answer: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing for the execution of JavaScript server-side.",
    Sample: "It enables developers to build scalable network applications.",
    code: `console.log("Hello, Node.js!");`
  },
  {
    id: 756,
    Title: "What is npm?",
    answer: "npm is the package manager for JavaScript, used to install and manage libraries and dependencies for Node.js applications.",
    Sample: "You can install packages using the command: npm install <package-name>",
    code: `npm install express`
  },
  {
    id: 757,
    Title: "What is Express.js?",
    answer: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    Sample: "It simplifies routing and middleware integration.",
    code: `const express = require('express');\nconst app = express();`
  },
  {
    id: 758,
    Title: "What is middleware in Express?",
    answer: "Middleware are functions that have access to the request and response objects, allowing for additional processing before sending a response.",
    Sample: "Used for logging, authentication, etc.",
    code: `app.use((req, res, next) => { console.log(req.url); next(); });`
  },
  {
    id: 759,
    Title: "How do you handle errors in Express?",
    answer: "You can handle errors by defining an error-handling middleware function.",
    Sample: "This function must have four parameters: err, req, res, next.",
    code: `app.use((err, req, res, next) => { res.status(500).send('Something broke!'); });`
  },
  {
    id: 760,
    Title: "What is a RESTful API?",
    answer: "A RESTful API is an architectural style that uses HTTP requests to access and use data, typically structured in JSON or XML.",
    Sample: "It follows principles like statelessness and resource-based interactions.",
    code: `app.get('/api/resource', (req, res) => { res.json({ data: 'sample' }); });`
  },
  {
    id: 761,
    Title: "What is CORS?",
    answer: "CORS (Cross-Origin Resource Sharing) is a security feature that restricts web pages from making requests to a different domain than the one that served the web page.",
    Sample: "Used to allow or restrict resources on a web server.",
    code: `app.use((req, res, next) => { res.header("Access-Control-Allow-Origin", "*"); next(); });`
  },
  {
    id: 762,
    Title: "How do you connect to a MongoDB database in Node.js?",
    answer: "You can connect to a MongoDB database using the Mongoose library or the native MongoDB driver.",
    Sample: "Mongoose provides a straightforward way to model your data.",
    code: `const mongoose = require('mongoose');\nmongoose.connect('mongodb://localhost/mydatabase');`
  },
  {
    id: 763,
    Title: "What is a promise in Node.js?",
    answer: "A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.",
    Sample: "Promises are used for handling asynchronous operations.",
    code: `const myPromise = new Promise((resolve, reject) => { /* ... */ });`
  },
  {
    id: 764,
    Title: " How do you read a file in Node.js?",
    answer: "You can read a file using the built-in 'fs' module with either the synchronous or asynchronous methods.",
    Sample: "Asynchronous methods are recommended for non-blocking I/O.",
    code: `const fs = require('fs');\nfs.readFile('file.txt', 'utf8', (err, data) => { console.log(data); });`
  },
  {
    id: 765,
    Title: " What is the event loop in Node.js?",
    answer: "The event loop is a core feature of Node.js that allows it to perform non-blocking I/O operations by using an event-driven architecture.",
    Sample: "It enables handling multiple connections simultaneously.",
    code: `setTimeout(() => { console.log('Hello from event loop!'); }, 0);`
  },
  {
    id: 766,
    Title: " What is the difference between `require` and `import`?",
    answer: "`require` is used in CommonJS modules, while `import` is used in ES6 modules for importing dependencies.",
    Sample: "ES6 imports allow for static analysis and tree-shaking.",
    code: `const express = require('express');\nimport express from 'express';`
  },
  {
    id: 767,
    Title: " What are callbacks?",
    answer: "Callbacks are functions passed as arguments to other functions, executed after a certain event or when a task is completed.",
    Sample: "Commonly used in asynchronous programming.",
    code: `function fetchData(callback) { /* ... */ callback(); }`
  },
  {
    id: 768,
    Title: " What is the purpose of the `next()` function?",
    answer: "The `next()` function in Express is used to pass control to the next middleware function in the stack.",
    Sample: "It is essential for handling multiple middleware.",
    code: `app.use((req, res, next) => { console.log('First middleware'); next(); });`
  },
  {
    id: 769,
    Title: " What is the difference between `var`, `let`, and `const`?",
    answer: "`var` is function-scoped, `let` and `const` are block-scoped. `const` is used for constants that cannot be reassigned.",
    Sample: "Use `let` for variables that can change, and `const` for constants.",
    code: `let a = 1;\nconst b = 2;`
  },
  {
    id: 770,
    Title: " How do you implement authentication in a Node.js application?",
    answer: "Authentication can be implemented using libraries like Passport.js, which supports various authentication strategies.",
    Sample: "Use sessions or JWT for managing user sessions.",
    code: `const passport = require('passport');\napp.use(passport.initialize());`
  },
  {
    id: 771,
    Title: " What is JWT?",
    answer: "JWT (JSON Web Token) is an open standard for securely transmitting information as a JSON object, commonly used for authentication.",
    Sample: "JWTs can be signed and verified for integrity.",
    code: `const jwt = require('jsonwebtoken');\nconst token = jwt.sign({ userId: 123 }, 'secret');`
  },
  {
    id: 772,
    Title: " How do you validate user input in Node.js?",
    answer: "User input can be validated using libraries like Joi or express-validator.",
    Sample: "These libraries help ensure data integrity and security.",
    code: `const { body, validationResult } = require('express-validator');`
  },
  {
    id: 773,
    Title: " What is socket.io?",
    answer: "Socket.io is a library for real-time web applications, allowing bi-directional communication between clients and servers.",
    Sample: "It is often used for chat applications.",
    code: `const io = require('socket.io')(server);\nio.on('connection', socket => { console.log('User connected'); });`
  },
  {
    id: 774,
    Title: " What is clustering in Node.js?",
    answer: "Clustering allows you to create multiple instances of your Node.js application to take advantage of multi-core systems.",
    Sample: "It improves performance by handling more requests concurrently.",
    code: `const cluster = require('cluster');\nif (cluster.isMaster) { /* ... */ }`
  },
  {
    id: 775,
    Title: " What are streams in Node.js?",
    answer: "Streams are objects that allow reading data from a source or writing data to a destination in a continuous manner.",
    Sample: "They are useful for handling large files and data processing.",
    code: `const fs = require('fs');\nconst readStream = fs.createReadStream('file.txt');`
  },
  {
    id: 776,
    Title: " How do you handle asynchronous code?",
    answer: "Asynchronous code can be handled using callbacks, promises, or async/await syntax.",
    Sample: "Async/await is preferred for its readability.",
    code: `async function fetchData() { const data = await getData(); }`
  },
  {
    id: 777,
    Title: " What is a template engine?",
    answer: "A template engine allows you to generate HTML dynamically using templates and data.",
    Sample: "Popular engines include EJS, Pug, and Handlebars.",
    code: `app.set('view engine', 'ejs');`
  },
  {
    id: 778,
    Title: " How do you implement logging in Node.js?",
    answer: "Logging can be implemented using libraries like Winston or Morgan to track requests and application errors.",
    Sample: "Logging is essential for debugging and monitoring.",
    code: `const morgan = require('morgan');\napp.use(morgan('dev'));`
  },
  {
    id: 779,
    Title: " What is dotenv?",
    answer: "Dotenv is a module that loads environment variables from a .env file into process.env.",
    Sample: "It is used to manage sensitive information like API keys.",
    code: `require('dotenv').config();`
  },
  {
    id: 780,
    Title: " How do you test a Node.js application?",
    answer: "Node.js applications can be tested using frameworks like Mocha, Chai, and Jest.",
    Sample: "Unit testing helps ensure code quality.",
    code: `const assert = require('assert');\ndescribe('Array', () => { /* ... */ });`
  },
  {
    id: 781,
    Title: " What is a microservice?",
    answer: "A microservice is an architectural style that structures an application as a collection of loosely coupled services, each responsible for a specific function.",
    Sample: "Microservices improve scalability and maintainability.",
    code: `// Example: separate services for user management, orders, etc.`
  },
  {
    id: 782,
    Title: " What is a reverse proxy?",
    answer: "A reverse proxy is a server that sits in front of web servers and forwards client requests to those servers.",
    Sample: "It provides load balancing, security, and caching.",
    code: `// Commonly used with Nginx or Apache`
  },
  {
    id: 783,
    Title: " How do you enable gzip compression in Express?",
    answer: "You can enable gzip compression in Express using the compression middleware.",
    Sample: "Compression reduces the size of response bodies.",
    code: `const compression = require('compression');\napp.use(compression());`
  },
  {
    id: 784,
    Title: " What is the purpose of `process.env`?",
    answer: "process.env is an object in Node.js that contains the environment variables for the running process.",
    Sample: "It's used to access configuration settings.",
    code: `const dbUrl = process.env.DB_URL;`
  },
  {
    id: 785,
    Title: " How do you create a simple web server in Node.js?",
    answer: "You can create a simple web server using the built-in 'http' module.",
    Sample: "It handles incoming requests and sends responses.",
    code: `const http = require('http');\nhttp.createServer((req, res) => { res.end('Hello, World!'); }).listen(3000);`
  },
  {
    id: 786,
    Title: " What is the difference between GET and POST requests?",
    answer: "GET requests retrieve data from a server, while POST requests send data to a server for processing.",
    Sample: "GET is idempotent; POST is not.",
    code: `app.get('/api/data', (req, res) => { /* ... */ });\napp.post('/api/data', (req, res) => { /* ... */ });`
  },
  {
    id: 787,
    Title: " How do you handle file uploads in Node.js?",
    answer: "File uploads can be handled using middleware like multer.",
    Sample: "Multer processes multipart/form-data.",
    code: `const multer = require('multer');\nconst upload = multer({ dest: 'uploads/' });`
  },
  {
    id: 788,
    Title: " What is a session?",
    answer: "A session is a way to store information about a user across multiple requests in web applications.",
    Sample: "Sessions help maintain user state.",
    code: `const session = require('express-session');\napp.use(session({ secret: 'mySecret' }));`
  },
  {
    id: 789,
    Title: " What is the purpose of `cors` middleware?",
    answer: "CORS middleware enables Cross-Origin Resource Sharing, allowing restricted resources to be requested from a different domain.",
    Sample: "It helps manage security for API requests.",
    code: `const cors = require('cors');\napp.use(cors());`
  },
  {
    id: 790,
    Title: " How do you schedule tasks in Node.js?",
    answer: "You can schedule tasks using libraries like node-cron for periodic execution.",
    Sample: "Useful for background tasks.",
    code: `const cron = require('node-cron');\ncron.schedule('* * * * *', () => { console.log('Task running every minute'); });`
  },
  {
    id: 791,
    Title: " What is a build tool?",
    answer: "A build tool automates the process of building and packaging code into a deployable format.",
    Sample: "Common tools include Webpack, Gulp, and Grunt.",
    code: `// Example: Using Webpack for module bundling`
  },
  {
    id: 792,
    Title: " What are environment variables?",
    answer: "Environment variables are key-value pairs that are used to configure applications without hardcoding settings.",
    Sample: "Useful for sensitive information and configuration.",
    code: `const apiKey = process.env.API_KEY;`
  },
  {
    id: 793,
    Title: " What is rate limiting?",
    answer: "Rate limiting is a technique to control the amount of incoming requests to a server, preventing abuse or overload.",
    Sample: "It can be implemented using middleware.",
    code: `const rateLimit = require('express-rate-limit');\nconst limiter = rateLimit({ windowMs: 1 * 60 * 1000, max: 100 });`
  },
  {
    id: 794,
    Title: " How do you implement security in a Node.js application?",
    answer: "You can implement security using various measures like input validation, sanitation, using HTTPS, and security headers.",
    Sample: "Libraries like helmet can help secure Express apps.",
    code: `const helmet = require('helmet');\napp.use(helmet());`
  },
  {
    id: 795,
    Title: " What is a firewall?",
    answer: "A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.",
    Sample: "Firewalls can be hardware-based or software-based.",
    code: `// Example: Using firewall rules to restrict access`
  },
  {
      id: 796,
      Title: " What is middleware in Express?",
      answer: "Middleware functions are functions that have access to the request object, response object, and the next middleware function in the application’s request-response cycle.",
      Sample: "Middleware is used for logging, authentication, etc.",
      code: `app.use((req, res, next) => { console.log('Request received'); next(); });`
    },
    {
      id: 797,
      Title: " How do you implement JWT authentication?",
      answer: "JWT (JSON Web Tokens) can be used for authentication by signing a token with a secret and sending it back to the client.",
      Sample: "JWTs help secure API routes.",
      code: `const jwt = require('jsonwebtoken');\nconst token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });`
    },
    {
      id: 798,
      Title: " What is a callback in Node.js?",
      answer: "A callback is a function passed as an argument to another function, which is invoked after a certain event occurs.",
      Sample: "Callbacks help manage asynchronous operations.",
      code: `fs.readFile('file.txt', (err, data) => { if (err) throw err; console.log(data); });`
    },
    {
      id: 799,
      Title: " What is the purpose of `require()` in Node.js?",
      answer: "The `require()` function is used to include modules that exist in separate files, allowing code reusability.",
      Sample: "Commonly used to load libraries or local modules.",
      code: `const express = require('express');`
    },
    {
      id: 800,
      Title: " What is the Event Loop?",
      answer: "The Event Loop is a mechanism that allows Node.js to perform non-blocking I/O operations, even when there are many operations happening concurrently.",
      Sample: "It helps handle asynchronous events efficiently.",
      code: `// Example of non-blocking I/O`
    },
    {
      id: 801,
      Title: "What is Python?",
      answer: "Python is a high-level, interpreted programming language known for its readability and simplicity.",
      Sample: "Commonly used for web development, data analysis, AI, and more.",
      code: `print("Hello, World!")`
    },
    {
      id: 802,
      Title: "What are lists in Python?",
      answer: "Lists are mutable sequences that can store a collection of items, including different data types.",
      Sample: "Useful for storing multiple items in a single variable.",
      code: `my_list = [1, 2, 3, "hello"]`
    },
    {
      id: 803,
      Title: "What is a dictionary in Python?",
      answer: "A dictionary is an unordered collection of key-value pairs, where each key is unique.",
      Sample: "Useful for storing data with a key reference.",
      code: `my_dict = {'name': 'Alice', 'age': 30}`
    },
    {
      id: 804,
      Title: "What is a function?",
      answer: "A function is a block of reusable code that performs a specific task.",
      Sample: "Helps in organizing code and promoting reusability.",
      code: `def my_function():\n    return "Hello"`
    },
    {
      id: 805,
      Title: "How do you handle exceptions?",
      answer: "You can handle exceptions using try-except blocks to catch and manage errors.",
      Sample: "Useful for preventing crashes in your code.",
      code: `try:\n    1 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")`
    },
    {
      id: 806,
      Title: "What are modules?",
      answer: "Modules are files containing Python code that can define functions, classes, and variables, allowing for code organization and reuse.",
      Sample: "You can import modules to use their functionality.",
      code: `import math\nresult = math.sqrt(16)`
    },
    {
      id: 807,
      Title: "What is a class?",
      answer: "A class is a blueprint for creating objects that encapsulate data and functions together.",
      Sample: "Essential for object-oriented programming.",
      code: `class MyClass:\n    def my_method(self):\n        return "Hello"`
    },
    {
      id: 808,
      Title: "What is inheritance?",
      answer: "Inheritance is a mechanism where a new class derives from an existing class, inheriting its attributes and methods.",
      Sample: "Promotes code reusability.",
      code: `class Parent:\n    pass\nclass Child(Parent):\n    pass`
    },
    {
      id: 809,
      Title: "What is polymorphism?",
      answer: "Polymorphism allows methods to do different things based on the object it is acting upon, often using method overriding.",
      Sample: "Commonly used in object-oriented programming.",
      code: `class Animal:\n    def sound(self):\n        pass\nclass Dog(Animal):\n    def sound(self):\n        return "Bark"`
    },
    {
      id: 810,
      Title: " How do you read a file?",
      answer: "You can read a file using the `open()` function in combination with the `read()` method.",
      Sample: "Useful for processing data from files.",
      code: `with open('file.txt', 'r') as f:\n    content = f.read()`
    },
    {
      id: 811,
      Title: " How do you write to a file?",
      answer: "You can write to a file using the `open()` function in write mode.",
      Sample: "Useful for saving data to files.",
      code: `with open('file.txt', 'w') as f:\n    f.write('Hello, World!')`
    },
    {
      id: 812,
      Title: " What is a lambda function?",
      answer: "A lambda function is a small anonymous function defined with the `lambda` keyword.",
      Sample: "Useful for creating small, throwaway functions.",
      code: `square = lambda x: x ** 2\nresult = square(5)`
    },
    {
      id: 813,
      Title: " What are list comprehensions?",
      answer: "List comprehensions provide a concise way to create lists using a single line of code.",
      Sample: "Useful for generating lists quickly.",
      code: `squares = [x ** 2 for x in range(10)]`
    },
    {
      id: 814,
      Title: " How do you create a set?",
      answer: "You can create a set using curly braces `{}` or the `set()` function.",
      Sample: "Useful for storing unique items.",
      code: `my_set = {1, 2, 3}`
    },
    {
      id: 815,
      Title: " What is the purpose of the `import` statement?",
      answer: "The `import` statement is used to include modules or packages in your Python code.",
      Sample: "Essential for using external libraries.",
      code: `import os`
    },
    {
      id: 816,
      Title: " How do you find the length of a list?",
      answer: "You can find the length of a list using the `len()` function.",
      Sample: "Useful for determining the number of items.",
      code: `length = len(my_list)`
    },
    {
      id: 817,
      Title: " What is a tuple?",
      answer: "A tuple is an immutable sequence of values that can store multiple items.",
      Sample: "Useful for storing fixed collections of items.",
      code: `my_tuple = (1, 2, 3)`
    },
    {
      id: 818,
      Title: " How do you convert a list to a tuple?",
      answer: "You can convert a list to a tuple using the `tuple()` function.",
      Sample: "Useful for ensuring immutability.",
      code: `my_tuple = tuple(my_list)`
    },
    {
      id: 819,
      Title: " What is the purpose of the `pass` statement?",
      answer: "The `pass` statement is a null operation; it is a placeholder in blocks of code.",
      Sample: "Useful for defining empty functions or classes.",
      code: `def my_function():\n    pass`
    },
    {
      id: 820,
      Title: " How do you create a dictionary from two lists?",
      answer: "You can create a dictionary from two lists using the `zip()` function and a dictionary comprehension.",
      Sample: "Useful for combining related data.",
      code: `keys = ['name', 'age']\nvalues = ['Alice', 30]\nmy_dict = {k: v for k, v in zip(keys, values)}`
    },
    {
      id: 821,
      Title: " What is a decorator?",
      answer: "A decorator is a function that wraps another function, modifying its behavior without changing its source code.",
      Sample: "Useful for adding functionality to existing functions.",
      code: `def my_decorator(func):\n    def wrapper():\n        print("Something is happening before the function is called.")\n        func()\n        print("Something is happening after the function is called.")\n    return wrapper`
    },
    {
      id: 822,
      Title: " What is a module?",
      answer: "A module is a file containing Python definitions and statements, allowing you to organize your code into reusable components.",
      Sample: "Commonly used to divide large applications.",
      code: `# my_module.py\ndef my_function():\n    return "Hello"`
    },
    {
      id: 823,
      Title: " How do you create a class in Python?",
      answer: "You can create a class using the `class` keyword, followed by the class name.",
      Sample: "Essential for object-oriented programming.",
      code: `class MyClass:\n    def __init__(self, value):\n        self.value = value`
    },
    {
      id: 824,
      Title: " What is the `self` keyword?",
      answer: "`self` refers to the instance of the class in methods, allowing access to attributes and methods.",
      Sample: "Used in class methods.",
      code: `class MyClass:\n    def my_method(self):\n        return self.value`
    },
    {
      id: 825,
      Title: " What is a regular expression?",
      answer: "A regular expression is a sequence of characters that defines a search pattern, primarily used for string matching.",
      Sample: "Useful for validating input formats.",
      code: `import re\npattern = r'\d+'\nresult = re.findall(pattern, 'There are 123 apples.')`
    },
    {
      id: 826,
      Title: " What is the `with` statement?",
      answer: "The `with` statement is used for resource management, simplifying the use of try-finally blocks.",
      Sample: "Useful for managing file I/O.",
      code: `with open('file.txt', 'r') as f:\n    content = f.read()`
    },
    {
      id: 827,
      Title: " How do you create a virtual environment?",
      answer: "You can create a virtual environment using the `venv` module in Python.",
      Sample: "Useful for isolating dependencies for different projects.",
      code: `python -m venv myenv`
    },
    {
      id: 828,
      Title: " What is a comprehension?",
      answer: "A comprehension is a compact way to process elements and produce a new list or dictionary from an iterable.",
      Sample: "Useful for concise code.",
      code: `squares = [x ** 2 for x in range(10)]`
    },
    {
      id: 829,
      Title: " What is the purpose of the `return` statement?",
      answer: "The `return` statement is used to exit a function and optionally pass an expression back to the caller.",
      Sample: "Essential for function output.",
      code: `def my_function():\n    return "Hello"`
    },
    {
      id: 830,
      Title: " How do you create a generator?",
      answer: "You can create a generator using a function with the `yield` keyword.",
      Sample: "Useful for creating iterators.",
      code: `def my_generator():\n    yield 1\n    yield 2\n    yield 3`
    },
    {
      id: 831,
      Title: " What are Python decorators?",
      answer: "Decorators are functions that modify the behavior of other functions or methods.",
      Sample: "Useful for logging, enforcing access control, etc.",
      code: `def my_decorator(func):\n    def wrapper():\n        print("Before calling the function.")\n        func()\n        print("After calling the function.")\n    return wrapper`
    },
    {
      id: 832,
      Title: " What is the difference between `append()` and `extend()`?",
      answer: "`append()` adds a single item to the end of a list, while `extend()` adds multiple items.",
      Sample: "Useful for modifying lists.",
      code: `my_list = [1, 2]\nmy_list.append(3)\nmy_list.extend([4, 5])`
    },
    {
      id: 833,
      Title: " How do you sort a list?",
      answer: "You can sort a list using the `sort()` method or the `sorted()` function.",
      Sample: "Useful for ordering items.",
      code: `my_list = [3, 1, 2]\nmy_list.sort()`
    },
    {
      id: 834,
      Title: " What is the `__init__` method?",
      answer: "The `__init__` method is a special method used for initializing objects in a class.",
      Sample: "Essential for setting object attributes.",
      code: `class MyClass:\n    def __init__(self, value):\n        self.value = value`
    },
    {
      id: 835,
      Title: " What are *args and **kwargs?",
      answer: "*args allows passing a variable number of positional arguments, while **kwargs allows passing keyword arguments.",
      Sample: "Useful for flexible function definitions.",
      code: `def my_function(*args, **kwargs):\n    print(args)\n    print(kwargs)`
    },
    {
      id: 836,
      Title: " How do you remove duplicates from a list?",
      answer: "You can remove duplicates from a list by converting it to a set and then back to a list.",
      Sample: "Useful for ensuring unique items.",
      code: `my_list = list(set(my_list))`
    },
    {
      id: 837,
      Title: " What is the difference between `is` and `==`?",
      answer: "`is` checks for object identity, while `==` checks for value equality.",
      Sample: "Important for understanding comparison in Python.",
      code: `a = [1, 2]\nb = a\nc = a.copy()\nprint(a is b)  # True\nprint(a is c)  # False`
    },
    {
      id: 838,
      Title: " How do you check if a string contains a substring?",
      answer: "You can check if a string contains a substring using the `in` keyword.",
      Sample: "Useful for searching within strings.",
      code: `my_string = "Hello, World!"\ncontains = "Hello" in my_string`
    },
    {
      id: 839,
      Title: " What is the `finally` block?",
      answer: "The `finally` block is executed after the try and except blocks, regardless of whether an exception occurred.",
      Sample: "Useful for cleanup actions.",
      code: `try:\n    1 / 0\nexcept ZeroDivisionError:\n    print("Error")\nfinally:\n    print("Cleanup")`
    },
    {
      id: 840,
      Title: " How do you create a nested function?",
      answer: "You can create a nested function by defining a function within another function.",
      Sample: "Useful for encapsulating functionality.",
      code: `def outer_function():\n    def inner_function():\n        return "Inner"\n    return inner_function()`
    },
    {
      id: 841,
      Title: " What is the purpose of `__str__`?",
      answer: "The `__str__` method is used to define a human-readable string representation of an object.",
      Sample: "Useful for printing object details.",
      code: `class MyClass:\n    def __str__(self):\n        return "MyClass instance"`
    },
    {
      id: 842,
      Title: " How do you create a shallow copy of a list?",
      answer: "You can create a shallow copy of a list using the `copy()` method or list slicing.",
      Sample: "Useful for copying lists without affecting the original.",
      code: `shallow_copy = my_list.copy()  # or shallow_copy = my_list[:]`
    },
    {
      id: 843,
      Title: " What is the `map()` function?",
      answer: "The `map()` function applies a given function to all items in an iterable and returns a map object.",
      Sample: "Useful for transforming lists.",
      code: `squared = list(map(lambda x: x**2, [1, 2, 3]))`
    },
    {
      id: 844,
      Title: " How do you filter a list?",
      answer: "You can filter a list using the `filter()` function, which applies a function and returns a filtered iterable.",
      Sample: "Useful for selecting items based on conditions.",
      code: `even_numbers = list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4]))`
    },
    {
      id: 845,
      Title: " What is a context manager?",
      answer: "A context manager is a construct that allows you to allocate and release resources precisely when you want to.",
      Sample: "Commonly used with the `with` statement.",
      code: `with open('file.txt', 'r') as f:\n    data = f.read()`
    },
    {
      id: 846,
      Title: " What is the difference between `sort()` and `sorted()`?",
      answer: "`sort()` modifies the list in place, while `sorted()` returns a new sorted list.",
      Sample: "Useful for sorting data.",
      code: `my_list.sort()  # in place\nnew_list = sorted(my_list)  # new list`
    },
    {
      id: 847,
      Title: " How do you concatenate strings?",
      answer: "You can concatenate strings using the `+` operator or the `join()` method.",
      Sample: "Useful for combining strings.",
      code: `result = "Hello" + " " + "World"`  // or `result = " ".join(["Hello", "World"])`
    },
    {
      id: 848,
      Title: " What is an API?",
      answer: "An API (Application Programming Interface) is a set of rules that allows different software entities to communicate.",
      Sample: "Commonly used for web services.",
      code: `import requests\nresponse = requests.get('https://api.example.com')`
    },
    {
      id: 849,
      Title: " How do you create a custom exception?",
      answer: "You can create a custom exception by defining a new class that inherits from the built-in `Exception` class.",
      Sample: "Useful for specific error handling.",
      code: `class MyCustomError(Exception):\n    pass`
    },
    {
      id: 850,
      Title: " What is the purpose of `__getitem__`?",
      answer: "`__getitem__` allows you to access items in a class using the indexing syntax.",
      Sample: "Useful for creating custom container types.",
      code: `class MyList:\n    def __getitem__(self, index):\n        return self.data[index]`
    },
    {
      id: 851,
      Title: " What is a lambda function?",
      answer: "A lambda function is an anonymous function expressed as a single statement.",
      Sample: "Useful for short, throwaway functions.",
      code: `square = lambda x: x**2`
    },
    {
      id: 852,
      Title: " How do you create a class in Python?",
      answer: "You create a class using the `class` keyword, followed by the class name and a colon.",
      Sample: "Essential for object-oriented programming.",
      code: `class MyClass:\n    pass`
    },
    {
      id: 853,
      Title: " What are Python's built-in data types?",
      answer: "Python's built-in data types include int, float, str, list, tuple, set, dict, and bool.",
      Sample: "Important for data manipulation.",
      code: `my_list = [1, 2, 3]`
    },
    {
      id: 854,
      Title: " What is a module in Python?",
      answer: "A module is a file containing Python code that can define functions, classes, and variables.",
      Sample: "Useful for code organization.",
      code: `import my_module`
    },
    {
      id: 855,
      Title: " What is the purpose of the `pass` statement?",
      answer: "The `pass` statement is a null operation; it is syntactically required but you don't want any code to execute.",
      Sample: "Useful for creating minimal classes or functions.",
      code: `def empty_function():\n    pass`
    },
    {
      id: 856,
      Title: " What are list comprehensions?",
      answer: "List comprehensions provide a concise way to create lists by iterating over an iterable.",
      Sample: "Useful for generating lists.",
      code: `squares = [x**2 for x in range(10)]`
    },
    {
      id: 857,
      Title: " What is a set in Python?",
      answer: "A set is an unordered collection of unique elements.",
      Sample: "Useful for eliminating duplicates.",
      code: `my_set = {1, 2, 3}`
    },
    {
      id: 858,
      Title: " How do you handle exceptions in Python?",
      answer: "You can handle exceptions using try and except blocks.",
      Sample: "Useful for managing errors.",
      code: `try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print("Division by zero!")`
    },
    {
      id: 859,
      Title: " What is the `strip()` method?",
      answer: "The `strip()` method removes leading and trailing whitespace from a string.",
      Sample: "Useful for cleaning input.",
      code: `cleaned_string = my_string.strip()`
    },
    {
      id: 860,
      Title: " How do you open a file in Python?",
      answer: "You can open a file using the built-in `open()` function.",
      Sample: "Essential for file operations.",
      code: `with open('file.txt', 'r') as f:\n    content = f.read()`
    },
    {
      id: 861,
      Title: " What is the difference between a list and a tuple?",
      answer: "A list is mutable, while a tuple is immutable.",
      Sample: "Important for data structure selection.",
      code: `my_list = [1, 2, 3]\nmy_tuple = (1, 2, 3)`
    },
    {
      id: 862,
      Title: " How do you convert a string to an integer?",
      answer: "You can convert a string to an integer using the `int()` function.",
      Sample: "Useful for numeric operations.",
      code: `my_int = int('123')`
    },
    {
      id: 863,
      Title: " What is slicing in Python?",
      answer: "Slicing is a way to access a subset of a sequence by specifying a start and end index.",
      Sample: "Useful for extracting portions of data.",
      code: `my_list = [1, 2, 3, 4, 5]\nslice = my_list[1:3]  # [2, 3]`
    },
    {
      id: 864,
      Title: " How do you create a dictionary?",
      answer: "You can create a dictionary using curly braces or the `dict()` constructor.",
      Sample: "Useful for key-value storage.",
      code: `my_dict = {'key': 'value'}  # or my_dict = dict(key='value')`
    },
    {
      id: 865,
      Title: " What is a class method?",
      answer: "A class method is a method that is bound to the class and not the instance, defined with `@classmethod`.",
      Sample: "Useful for factory methods.",
      code: `class MyClass:\n    @classmethod\n    def my_class_method(cls):\n        return cls()`
    },
    {
      id: 866,
      Title: " What are instance methods?",
      answer: "Instance methods are functions defined inside a class that operate on instance data.",
      Sample: "Essential for class behavior.",
      code: `class MyClass:\n    def my_instance_method(self):\n        return self.data`
    },
    {
      id: 867,
      Title: " How do you iterate over a dictionary?",
      answer: "You can iterate over a dictionary using a for loop to access keys or items.",
      Sample: "Useful for accessing key-value pairs.",
      code: `for key, value in my_dict.items():\n    print(key, value)`
    },
    {
      id: 868,
      Title: " What is the purpose of the `len()` function?",
      answer: "The `len()` function returns the number of items in an object.",
      Sample: "Useful for measuring size.",
      code: `length = len(my_list)`
    },
    {
      id: 869,
      Title: " How do you reverse a list?",
      answer: "You can reverse a list using the `reverse()` method or slicing.",
      Sample: "Useful for changing order.",
      code: `my_list.reverse()  # in place\nreversed_list = my_list[::-1]  # new list`
    },
    {
      id: 870,
      Title: " What is a property in Python?",
      answer: "A property is a special kind of attribute that allows for encapsulation of instance variables.",
      Sample: "Useful for controlling access to attributes.",
      code: `class MyClass:\n    def __init__(self, value):\n        self._value = value\n    @property\n    def value(self):\n        return self._value`
    },
    {
      "id": 871,
      "Title": " What is the difference between `==` and `is`?",
      "answer": "`==` checks for value equality, while `is` checks for identity (i.e., whether two references point to the same object).",
      "Sample": "Important for understanding object comparison.",
      "code": `a = [1, 2, 3]\nb = a\nc = a.copy()\nprint(a == c)  # True\nprint(a is b)  # True\nprint(a is c)  # False`
    },
    {
      "id": 872,
      "Title": " What is a list slice?",
      "answer": "A list slice is a subset of a list obtained using the slicing syntax.",
      "Sample": "Useful for manipulating lists.",
      "code": `my_list = [1, 2, 3, 4, 5]\nslice = my_list[1:4]  # [2, 3, 4]`
    },
    {
      "id": 873,
      "Title": " How do you remove duplicates from a list?",
      "answer": "You can remove duplicates by converting the list to a set and back to a list.",
      "Sample": "Useful for data cleaning.",
      "code": `my_list = [1, 2, 2, 3]\nunique_list = list(set(my_list))`
    },
    {
      "id": 874,
      "Title": " What is the `__init__` method?",
      "answer": "The `__init__` method is a special method used to initialize a new object.",
      "Sample": "Essential for class instantiation.",
      "code": `class MyClass:\n    def __init__(self, value):\n        self.value = value`
    },
    {
      "id": 875,
      "Title": " What is the purpose of the `super()` function?",
      "answer": "The `super()` function returns a temporary object of the superclass, allowing access to its methods.",
      "Sample": "Useful for inheritance.",
      "code": `class Parent:\n    def __init__(self):\n        print('Parent')\nclass Child(Parent):\n    def __init__(self):\n        super().__init__()\n        print('Child')`
    },
    {
      "id": 876,
      "Title": " How do you create a generator in Python?",
      "answer": "You create a generator using a function with the `yield` statement.",
      "Sample": "Useful for iterating over large data sets.",
      "code": `def my_generator():\n    yield 1\n    yield 2\nfor value in my_generator():\n    print(value)`
    },
    {
      "id": 877,
      "Title": " What is the purpose of the `with` statement?",
      "answer": "The `with` statement simplifies exception handling by encapsulating common preparation and cleanup tasks.",
      "Sample": "Useful for managing resources like file streams.",
      "code": `with open('file.txt', 'r') as f:\n    data = f.read()`
    },
    {
      "id": 878,
      "Title": " What are decorators in Python?",
      "answer": "Decorators are functions that modify the behavior of another function.",
      "Sample": "Useful for adding functionality to existing code.",
      "code": `def my_decorator(func):\n    def wrapper():\n        print('Before the function')\n        func()\n        print('After the function')\n    return wrapper\n@my_decorator\ndef say_hello():\n    print('Hello!')`
    },
    {
      "id": 879,
      "Title": " How do you handle multiple exceptions?",
      "answer": "You can handle multiple exceptions by specifying multiple exception types in a single `except` clause.",
      "Sample": "Useful for managing various error types.",
      "code": `try:\n    x = 1 / 0\nexcept (ZeroDivisionError, ValueError) as e:\n    print(f'Error: {e}')`
    },
    {
      "id": 880,
      "Title": " What is a context manager?",
      "answer": "A context manager is an object that defines methods `__enter__` and `__exit__` for resource management.",
      "Sample": "Useful for managing resources like file streams.",
      "code": `class MyContext:\n    def __enter__(self):\n        print('Entering')\n    def __exit__(self, exc_type, exc_value, traceback):\n        print('Exiting')\nwith MyContext():\n    print('Inside context')`
    },
    {
      "id": 881,
      "Title": " What is the purpose of `*args` and `**kwargs`?",
      "answer": "`*args` allows you to pass a variable number of non-keyword arguments, while `**kwargs` allows for keyword arguments.",
      "Sample": "Useful for creating flexible functions.",
      "code": `def my_function(*args, **kwargs):\n    print(args)\n    print(kwargs)\nmy_function(1, 2, a=3, b=4)`
    },
    {
      "id": 882,
      "Title": " What is the difference between shallow copy and deep copy?",
      "answer": "A shallow copy creates a new object but inserts references into it to the objects found in the original. A deep copy creates a new object and recursively copies all objects found in the original.",
      "Sample": "Important for understanding object copying.",
      "code": `import copy\noriginal = [[1, 2], [3, 4]]\nshallow = copy.copy(original)\ndeep = copy.deepcopy(original)`
    },
    {
      "id": 883,
      "Title": " How do you create an empty set?",
      "answer": "You can create an empty set using the `set()` function.",
      "Sample": "Useful for initializing a set.",
      "code": `my_set = set()`
    },
    {
      "id": 884,
      "Title": " What is the purpose of the `enumerate()` function?",
      "answer": "The `enumerate()` function adds a counter to an iterable and returns it as an enumerate object.",
      "Sample": "Useful for tracking indexes in a loop.",
      "code": `for index, value in enumerate(['a', 'b', 'c']):\n    print(index, value)`
    },
    {
      "id": 885,
      "Title": " What is a lambda function used for?",
      "answer": "A lambda function is a small anonymous function that can have any number of arguments but only one expression.",
      "Sample": "Useful for short, throwaway functions.",
      "code": `add = lambda x, y: x + y\nprint(add(1, 2))  # Outputs 3`
    },
    {
      "id": 886,
      "Title": " How do you sort a list in Python?",
      "answer": "You can sort a list using the `sort()` method or the `sorted()` function.",
      "Sample": "Useful for arranging data.",
      "code": `my_list = [3, 1, 2]\nmy_list.sort()  # In-place sort\nsorted_list = sorted(my_list)  # Returns a new sorted list`
    },
    {
      "id": 887,
      "Title": " What is list unpacking?",
      "answer": "List unpacking allows you to assign elements of a list to variables in a single line.",
      "Sample": "Useful for variable assignments.",
      "code": `a, b, c = [1, 2, 3]`
    },
    {
      "id": 888,
      "Title": " How do you check if a key exists in a dictionary?",
      "answer": "You can check if a key exists using the `in` keyword.",
      "Sample": "Useful for validating dictionary keys.",
      "code": `my_dict = {'key': 'value'}\nexists = 'key' in my_dict`
    },
    {
      "id": 889,
      "Title": " What is the difference between `pop()` and `remove()`?",
      "answer": "`pop()` removes an item at a specified index and returns it, while `remove()` removes the first occurrence of a specified value.",
      "Sample": "Important for understanding list modifications.",
      "code": `my_list = [1, 2, 3]\nmy_list.pop(0)  # Removes and returns 1\nmy_list.remove(2)  # Removes 2`
    },
    {
      "id": 890,
      "Title": " What is type hinting in Python?",
      "answer": "Type hinting allows you to indicate the expected data types of function arguments and return values.",
      "Sample": "Useful for improving code readability.",
      "code": `def add(x: int, y: int) -> int:\n    return x + y`
    },
    
    {
      id: 891,
      Title: " What are promises?",
      answer: "Promises are objects that represent the eventual completion or failure of an asynchronous operation and its resulting value.",
      Sample: "Promises allow chaining of asynchronous operations.",
      code: `let promise = new Promise((resolve, reject) => { /* ... */ });`
    },
    {
      id: 892,
      Title: " What is the difference between synchronous and asynchronous code?",
      answer: "Synchronous code is executed line by line, blocking the execution of subsequent code until it completes, while asynchronous code allows other operations to run while waiting for a task to complete.",
      Sample: "Asynchronous code improves performance in I/O operations.",
      code: `// Synchronous: \nconst data = fs.readFileSync('file.txt');\n// Asynchronous: \nfs.readFile('file.txt', (err, data) => { /* ... */ });`
    },
    {
      id: 893,
      Title: " How do you handle errors in Node.js?",
      answer: "Errors in Node.js can be handled using try-catch blocks, or by passing error objects to the next middleware in Express.",
      Sample: "Error handling is essential for robust applications.",
      code: `app.use((err, req, res, next) => { res.status(500).send('Something broke!'); });`
    },
    {
      id: 894,
      Title: " What is a RESTful API?",
      answer: "A RESTful API is an architectural style that uses HTTP requests to access and manipulate data, following REST principles.",
      Sample: "REST APIs are stateless and use standard HTTP methods.",
      code: `app.get('/api/resource', (req, res) => { /* ... */ });`
    },
    {
      id: 895,
      Title: " What is the purpose of the `body-parser` middleware?",
      answer: "`body-parser` is middleware used to parse the body of incoming requests, making the data accessible under `req.body`.",
      Sample: "It is essential for handling POST requests.",
      code: `const bodyParser = require('body-parser');\napp.use(bodyParser.json());`
    },
    {
      id: 896,
      Title: " How do you connect to a MongoDB database?",
      answer: "You can connect to a MongoDB database using the Mongoose library or the native MongoDB driver.",
      Sample: "Connection strings specify the database details.",
      code: `const mongoose = require('mongoose');\nmongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true });`
    },
    {
      id: 897,
      Title: " What is socket.io?",
      answer: "Socket.io is a JavaScript library for real-time web applications, enabling bi-directional communication between clients and servers.",
      Sample: "Useful for chat applications or real-time updates.",
      code: `const io = require('socket.io')(server);\nio.on('connection', (socket) => { /* ... */ });`
    },
    {
      id: 898,
      Title: " How do you serve static files in Express?",
      answer: "You can serve static files in Express using the built-in `express.static` middleware.",
      Sample: "This is commonly used for serving images, CSS files, and JavaScript files.",
      code: `app.use(express.static('public'));`
    },
    {
      id: 899,
      Title: " What is the purpose of the `process` object?",
      answer: "The `process` object provides information about the current Node.js process, including environment variables and command-line arguments.",
      Sample: "It allows interaction with the environment in which the Node.js application is running.",
      code: `console.log(process.env.NODE_ENV);`
    },
    {
      id: 900,
      Title: " What is a database migration?",
      answer: "Database migration is a way to update the database schema incrementally, usually involving adding or modifying tables and columns.",
      Sample: "Tools like Sequelize or Knex can be used for migrations.",
      code: `// Example migration script`
    },
    {
      id: 901,
      Title: "What is PHP?",
      answer: "PHP is a server-side scripting language designed for web development, but it is also used as a general-purpose programming language.",
      Sample: "echo 'Hello, World!';",
      code: `<?php echo 'Hello, World!'; ?>`
    },
    {
      id: 902,
      Title: "How do you define a variable in PHP?",
      answer: "Variables in PHP are prefixed with a dollar symbol ($) and do not need explicit type declarations.",
      Sample: "$name = 'John';",
      code: `<?php $name = 'John'; ?>`
    },
    {
      id: 903,
      Title: "What are PHP data types?",
      answer: "PHP supports several data types, including Integer, Float, String, Boolean, Array, Object, NULL, and Resource.",
      Sample: "$number = 5; $name = 'Alice'; $isTrue = true;",
      code: `<?php $number = 5; $name = 'Alice'; $isTrue = true; ?>`
    },
    {
      id: 904,
      Title: "How do you create an array in PHP?",
      answer: "Arrays in PHP can be created using the array() function or square brackets [].",
      Sample: "$fruits = ['apple', 'banana', 'cherry'];",
      code: `<?php $fruits = ['apple', 'banana', 'cherry']; ?>`
    },
    {
      id: 905,
      Title: "What is a PHP function?",
      answer: "A function is a block of statements that can be reused and executed when called. PHP has built-in functions and allows users to create custom functions.",
      Sample: "function greet() { echo 'Hello!'; } greet();",
      code: `<?php function greet() { echo 'Hello!'; } greet(); ?>`
    },
    {
      id: 906,
      Title: "How do you create an associative array?",
      answer: "Associative arrays use named keys to access values instead of numeric indices.",
      Sample: "$person = ['name' => 'John', 'age' => 30];",
      code: `<?php $person = ['name' => 'John', 'age' => 30]; ?>`
    },
    {
      id: 907,
      Title: "What is a PHP class?",
      answer: "A class is a blueprint for creating objects and encapsulates properties and methods.",
      Sample: "class Car { public $color; function __construct($color) { $this->color = $color; } }",
      code: `<?php class Car { public $color; function __construct($color) { $this->color = $color; } } ?>`
    },
    {
      id: 908,
      Title: "How do you handle errors in PHP?",
      answer: "PHP provides error-handling functions like try-catch blocks and error reporting functions.",
      Sample: "try { // code } catch (Exception $e) { echo 'Caught exception: ',  $e->getMessage(), '\\n'; }",
      code: `<?php try { // code } catch (Exception $e) { echo 'Caught exception: ',  $e->getMessage(), '\\n'; } ?>`
    },
    {
      id: 909,
      Title: "How do you include files in PHP?",
      answer: "PHP includes files using include, include_once, require, and require_once statements.",
      Sample: "include 'file.php';",
      code: `<?php include 'file.php'; ?>`
    },
    {
      id: 910,
      Title: " How to create a constant in PHP?",
      answer: "Constants in PHP can be defined using the define() function or the const keyword.",
      Sample: "define('PI', 3.14);",
      code: `<?php define('PI', 3.14); ?>`
    },
    {
      id: 911,
      Title: " What is the difference between include and require?",
      answer: "If an included file is not found, include() generates a warning, while require() throws a fatal error.",
      Sample: "require 'config.php';",
      code: `<?php require 'config.php'; ?>`
    },
    {
      id: 912,
      Title: " How do you create a PHP session?",
      answer: "A session in PHP is started using session_start() and allows you to store user data across pages.",
      Sample: "session_start(); $_SESSION['user'] = 'Alice';",
      code: `<?php session_start(); $_SESSION['user'] = 'Alice'; ?>`
    },
    {
      id: 913,
      Title: " What is the use of cookies in PHP?",
      answer: "Cookies store user data on the client side and can be set using setcookie().",
      Sample: "setcookie('username', 'Alice', time() + 3600);",
      code: `<?php setcookie('username', 'Alice', time() + 3600); ?>`
    },
    {
      id: 914,
      Title: " How do you redirect a page in PHP?",
      answer: "The header() function is used for redirection in PHP.",
      Sample: "header('Location: newpage.php');",
      code: `<?php header('Location: newpage.php'); ?>`
    },
    {
      id: 915,
      Title: " What is a PHP superglobal?",
      answer: "Superglobals are predefined global arrays, such as $_GET, $_POST, $_SESSION, $_COOKIE, that are accessible from any scope.",
      Sample: "$_GET['username']",
      code: `<?php echo $_GET['username']; ?>`
    },
    {
      id: 916,
      Title: " How do you hash a password in PHP?",
      answer: "password_hash() and password_verify() are used to securely hash and verify passwords.",
      Sample: "$hashedPassword = password_hash('mypassword', PASSWORD_DEFAULT);",
      code: `<?php $hashedPassword = password_hash('mypassword', PASSWORD_DEFAULT); ?>`
    },
    {
      id: 917,
      Title: " What is the purpose of PDO in PHP?",
      answer: "PDO (PHP Data Objects) is a database access layer providing a uniform method to access multiple databases securely.",
      Sample: "$pdo = new PDO('mysql:host=localhost;dbname=test', 'user', 'pass');",
      code: `<?php $pdo = new PDO('mysql:host=localhost;dbname=test', 'user', 'pass'); ?>`
    },
    {
      id: 918,
      Title: " How do you define a default parameter in PHP?",
      answer: "Default parameters allow you to set a default value for a function argument if it is not provided.",
      Sample: "function greet($name = 'Guest') { echo 'Hello, ' . $name; }",
      code: `<?php function greet($name = 'Guest') { echo 'Hello, ' . $name; } ?>`
    },
    {
      id: 919,
      Title: " What is a closure in PHP?",
      answer: "A closure is an anonymous function that can be stored in a variable and passed as an argument.",
      Sample: "$greet = function($name) { return 'Hello ' . $name; };",
      code: `<?php $greet = function($name) { return 'Hello ' . $name; }; ?>`
    },
    {
      id: 920,
      Title: " What is the purpose of type hinting?",
      answer: "Type hinting ensures that parameters passed to functions are of a specified type.",
      Sample: "function add(int $a, int $b): int { return $a + $b; }",
      code: `<?php function add(int $a, int $b): int { return $a + $b; } ?>`
    },
    {
        id: 920,
        Title: " What is the purpose of type hinting in PHP?",
        answer: "Type hinting allows you to specify the expected data type of arguments to functions, helping to catch type errors earlier in the code execution.",
        Sample: "function add(int $a, int $b): int { return $a + $b; }",
        code: `<?php function add(int $a, int $b): int { return $a + $b; } ?>`
      },
      {
        id: 921,
        Title: " What is the difference between echo and print in PHP?",
        answer: "Both echo and print output data to the screen. echo can take multiple parameters and is slightly faster, while print returns a value and can only take one argument.",
        Sample: "echo 'Hello', ' World'; print 'Hello';",
        code: `<?php echo 'Hello', ' World'; print 'Hello'; ?>`
      },
      {
        id: 922,
        Title: " How do you define a constant in PHP?",
        answer: "Constants are defined using the define() function or const keyword, and their values cannot be changed after declaration.",
        Sample: "define('PI', 3.14); const NAME = 'PHP';",
        code: `<?php define('PI', 3.14); const NAME = 'PHP'; ?>`
      },
      {
        id: 923,
        Title: " What are constructors and destructors in PHP?",
        answer: "Constructors initialize an object when it's created, while destructors are invoked when an object is destroyed. They are defined as __construct() and __destruct() respectively.",
        Sample: "class Car { function __construct() { echo 'Car created'; } function __destruct() { echo 'Car destroyed'; } }",
        code: `<?php class Car { function __construct() { echo 'Car created'; } function __destruct() { echo 'Car destroyed'; } } ?>`
      },
      {
        id: 924,
        Title: " How does inheritance work in PHP?",
        answer: "Inheritance allows a class to use the properties and methods of another class, using the 'extends' keyword.",
        Sample: "class Animal {} class Dog extends Animal {}",
        code: `<?php class Animal {} class Dog extends Animal {} ?>`
      },
      {
        id: 925,
        Title: " What is the purpose of interfaces in PHP?",
        answer: "Interfaces define methods that implementing classes must contain, ensuring a class adheres to a specific structure.",
        Sample: "interface Logger { public function log($message); } class FileLogger implements Logger { public function log($message) { echo $message; } }",
        code: `<?php interface Logger { public function log($message); } class FileLogger implements Logger { public function log($message) { echo $message; } } ?>`
      },
      {
        id: 926,
        Title: " What is polymorphism in PHP?",
        answer: "Polymorphism allows objects of different types to be treated as objects of a common super type, typically through inheritance and interfaces.",
        Sample: "function processShape(Shape $shape) { $shape->draw(); }",
        code: `<?php function processShape(Shape $shape) { $shape->draw(); } ?>`
      },
      {
        id: 927,
        Title: " What is the use of abstract classes in PHP?",
        answer: "Abstract classes provide a base class with abstract methods that must be implemented by subclasses. They cannot be instantiated directly.",
        Sample: "abstract class Animal { abstract public function makeSound(); } class Dog extends Animal { public function makeSound() { echo 'Bark'; } }",
        code: `<?php abstract class Animal { abstract public function makeSound(); } class Dog extends Animal { public function makeSound() { echo 'Bark'; } } ?>`
      },
      {
        id: 928,
        Title: " What is method overriding in PHP?",
        answer: "Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its superclass.",
        Sample: "class Animal { public function sound() { echo 'Sound'; } } class Dog extends Animal { public function sound() { echo 'Bark'; } }",
        code: `<?php class Animal { public function sound() { echo 'Sound'; } } class Dog extends Animal { public function sound() { echo 'Bark'; } } ?>`
      },
      {
        id: 929,
        Title: " How do you handle exceptions in PHP?",
        answer: "PHP provides try-catch blocks for exception handling, where exceptions are thrown using the throw keyword.",
        Sample: "try { throw new Exception('Error'); } catch (Exception $e) { echo $e->getMessage(); }",
        code: `<?php try { throw new Exception('Error'); } catch (Exception $e) { echo $e->getMessage(); } ?>`
      },
      {
        id: 930,
        Title: " What is the purpose of the final keyword in PHP?",
        answer: "The final keyword prevents a class from being inherited or a method from being overridden.",
        Sample: "final class Car {} final public function start() {}",
        code: `<?php final class Car {} final public function start() {} ?>`
      },
      {
        id: 931,
        Title: " What is a static method in PHP?",
        answer: "A static method belongs to the class rather than instances of the class. It can be called without creating an object of the class.",
        Sample: "class Math { public static function add($a, $b) { return $a + $b; } }",
        code: `<?php class Math { public static function add($a, $b) { return $a + $b; } } ?>`
      },
      {
        id: 932,
        Title: " How do you connect to a MySQL database in PHP?",
        answer: "You can connect to a MySQL database using mysqli or PDO.",
        Sample: "$conn = new mysqli('localhost', 'username', 'password', 'database');",
        code: `<?php $conn = new mysqli('localhost', 'username', 'password', 'database'); ?>`
      },
      {
        id: 933,
        Title: " What is the difference between GET and POST in PHP?",
        answer: "GET appends data to the URL and is used for retrieving data, while POST sends data within the request body and is used for submitting data.",
        Sample: "$_GET['name']; $_POST['name'];",
        code: `<?php echo $_GET['name']; echo $_POST['name']; ?>`
      },
      {
        id: 934,
        Title: " What is the MVC architecture in PHP?",
        answer: "MVC (Model-View-Controller) is a design pattern that separates the application logic, user interface, and input into three interconnected components.",
        Sample: "Model: Database; View: HTML; Controller: PHP logic.",
        code: `N/A`
      },
      {
        id: 935,
        Title: " How do you execute a prepared statement in PHP?",
        answer: "Prepared statements in PHP help prevent SQL injection by separating SQL logic from data values.",
        Sample: "$stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?'); $stmt->execute([$id]);",
        code: `<?php $stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?'); $stmt->execute([$id]); ?>`
      },
      {
        id: 936,
        Title: " What is the difference between a public, protected, and private property in PHP?",
        answer: "Public properties can be accessed from anywhere, protected properties are accessible within the class and its subclasses, and private properties are accessible only within the class.",
        Sample: "class Car { public $color; protected $brand; private $engine; }",
        code: `<?php class Car { public $color; protected $brand; private $engine; } ?>`
      },
      {
        id: 937,
        Title: " How do you handle file uploads in PHP?",
        answer: "PHP handles file uploads through the $_FILES superglobal, which stores information about uploaded files.",
        Sample: "move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $_FILES['file']['name']);",
        code: `<?php move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $_FILES['file']['name']); ?>`
      },
      {
        id: 938,
        Title: " How do you create a JSON response in PHP?",
        answer: "You can create JSON responses using json_encode().",
        Sample: "$response = json_encode(['status' => 'success']);",
        code: `<?php $response = json_encode(['status' => 'success']); echo $response; ?>`
      },
      {
        id: 939,
        Title: " How do you define an interface in PHP?",
        answer: "An interface is defined using the interface keyword, and implementing classes must define its methods.",
        Sample: "interface Logger { public function log($message); }",
        code: `<?php interface Logger { public function log($message); } ?>`
      },
      {
        id: 940,
        Title: " What is the purpose of a dependency manager like Composer in PHP?",
        answer: "Composer manages packages and libraries for PHP projects, allowing for easier dependency management.",
        Sample: "composer require vendor/package",
        code: `# Run in terminal\ncomposer require vendor/package`
      },
      {
        id: 941,
        Title: " How does an if-else statement work in PHP?",
        answer: "The if-else statement executes one block of code if a specified condition is true, otherwise it executes another block of code.",
        Sample: "if ($age >= 18) { echo 'Adult'; } else { echo 'Minor'; }",
        code: `<?php if ($age >= 18) { echo 'Adult'; } else { echo 'Minor'; } ?>`
      },
      {
        id: 942,
        Title: " What is the elseif statement in PHP?",
        answer: "The elseif statement allows multiple conditions to be evaluated in a sequence if previous conditions are false.",
        Sample: "if ($score >= 90) { echo 'A'; } elseif ($score >= 80) { echo 'B'; } else { echo 'C'; }",
        code: `<?php if ($score >= 90) { echo 'A'; } elseif ($score >= 80) { echo 'B'; } else { echo 'C'; } ?>`
      },
      {
        id: 943,
        Title: " How does the switch statement work in PHP?",
        answer: "The switch statement is used to perform different actions based on multiple possible values of a single variable.",
        Sample: "switch ($color) { case 'red': echo 'Red'; break; case 'blue': echo 'Blue'; break; default: echo 'Other'; }",
        code: `<?php switch ($color) { case 'red': echo 'Red'; break; case 'blue': echo 'Blue'; break; default: echo 'Other'; } ?>`
      },
      {
        id: 944,
        Title: " How does a for loop work in PHP?",
        answer: "The for loop is used when you know in advance how many times you want to execute a statement or a block of statements.",
        Sample: "for ($i = 0; $i < 10; $i++) { echo $i; }",
        code: `<?php for ($i = 0; $i < 10; $i++) { echo $i; } ?>`
      },
      {
        id: 945,
        Title: " What is a foreach loop in PHP?",
        answer: "The foreach loop is used to iterate over arrays and access each value in the array without needing an index.",
        Sample: "foreach ($array as $value) { echo $value; }",
        code: `<?php foreach ($array as $value) { echo $value; } ?>`
      },
      {
        id: 946,
        Title: " How does a while loop work in PHP?",
        answer: "The while loop executes a block of code as long as the specified condition is true.",
        Sample: "$i = 0; while ($i < 5) { echo $i; $i++; }",
        code: `<?php $i = 0; while ($i < 5) { echo $i; $i++; } ?>`
      },
      {
        id: 947,
        Title: " How does a do-while loop work in PHP?",
        answer: "The do-while loop executes a block of code once and then repeats it as long as the specified condition is true.",
        Sample: "$i = 0; do { echo $i; $i++; } while ($i < 5);",
        code: `<?php $i = 0; do { echo $i; $i++; } while ($i < 5); ?>`
      },
      {
        id: 948,
        Title: " How does the break statement work in PHP?",
        answer: "The break statement is used to exit a loop prematurely when a specific condition is met.",
        Sample: "for ($i = 0; $i < 10; $i++) { if ($i == 5) { break; } echo $i; }",
        code: `<?php for ($i = 0; $i < 10; $i++) { if ($i == 5) { break; } echo $i; } ?>`
      },
      {
        id: 949,
        Title: " What is the purpose of the continue statement in PHP?",
        answer: "The continue statement skips the current iteration of a loop and moves to the next iteration.",
        Sample: "for ($i = 0; $i < 10; $i++) { if ($i == 5) { continue; } echo $i; }",
        code: `<?php for ($i = 0; $i < 10; $i++) { if ($i == 5) { continue; } echo $i; } ?>`
      },
      {
        id: 950,
        Title: " How can you nest loops in PHP?",
        answer: "PHP allows nesting of loops, meaning you can use one loop inside another loop. Each loop should have its own loop variable to avoid conflicts.",
        Sample: "for ($i = 1; $i <= 3; $i++) { for ($j = 1; $j <= 3; $j++) { echo $i . '-' . $j; } }",
        code: `<?php for ($i = 1; $i <= 3; $i++) { for ($j = 1; $j <= 3; $j++) { echo $i . '-' . $j; } } ?>`
      },
      {
        id: 951,
        Title: " What are namespaces in PHP?",
        answer: "Namespaces in PHP allow you to group related classes, functions, and constants, avoiding naming conflicts.",
        Sample: "namespace MyNamespace; class MyClass {}",
        code: `<?php namespace MyNamespace; class MyClass {} ?>`
      },
      {
        id: 952,
        Title: " What are traits in PHP?",
        answer: "Traits are a mechanism for code reuse in PHP, allowing you to include methods in multiple classes without inheritance.",
        Sample: "trait Logger { public function log($msg) { echo $msg; } } class User { use Logger; }",
        code: `<?php trait Logger { public function log($msg) { echo $msg; } } class User { use Logger; } ?>`
      },
      {
        id: 953,
        Title: " What is a closure in PHP?",
        answer: "A closure is an anonymous function that can be stored in a variable and passed as an argument to other functions.",
        Sample: "$greet = function($name) { return 'Hello ' . $name; }; echo $greet('Alice');",
        code: `<?php $greet = function($name) { return 'Hello ' . $name; }; echo $greet('Alice'); ?>`
      },
      {
        id: 954,
        Title: " How do you start a session in PHP?",
        answer: "Sessions in PHP are started with session_start(), allowing you to store user data across pages.",
        Sample: "session_start(); $_SESSION['username'] = 'John';",
        code: `<?php session_start(); $_SESSION['username'] = 'John'; ?>`
      },
      {
        id: 955,
        Title: " How do you handle file uploads in PHP?",
        answer: "PHP handles file uploads via the $_FILES array, where you can validate and move uploaded files to a server directory.",
        Sample: "move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $_FILES['file']['name']);",
        code: `<?php move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $_FILES['file']['name']); ?>`
      },
      {
        id: 956,
        Title: " What is the purpose of Composer in PHP?",
        answer: "Composer is a dependency manager for PHP that allows you to manage libraries and packages for your project.",
        Sample: "composer require vendor/package",
        code: `# Run in terminal
    composer require vendor/package`
      },
      {
        id: 957,
        Title: " How do you handle JSON data in PHP?",
        answer: "PHP has json_encode() and json_decode() functions to handle JSON data.",
        Sample: "$json = json_encode(['name' => 'Alice']); $array = json_decode($json, true);",
        code: `<?php $json = json_encode(['name' => 'Alice']); $array = json_decode($json, true); ?>`
      },
      {
        id: 958,
        Title: " How can you make a cURL request in PHP?",
        answer: "cURL is used to make HTTP requests in PHP.",
        Sample: "$ch = curl_init('https://api.example.com'); curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); $response = curl_exec($ch);",
        code: `<?php $ch = curl_init('https://api.example.com'); curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); $response = curl_exec($ch); ?>`
      },
      {
        id: 959,
        Title: " What is REST API integration in PHP?",
        answer: "REST API integration involves sending HTTP requests to REST endpoints. PHP can handle REST APIs with cURL or file_get_contents().",
        Sample: "$data = file_get_contents('https://api.example.com');",
        code: `<?php $data = file_get_contents('https://api.example.com'); ?>`
      },
      {
        id: 960,
        Title: " How do you use prepared statements in PHP?",
        answer: "Prepared statements in PHP help prevent SQL injection by separating SQL logic from data values.",
        Sample: "$stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?'); $stmt->execute([$id]);",
        code: `<?php $stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?'); $stmt->execute([$id]); ?>`
      },
      {
        id: 961,
        Title: " What is the purpose of `npm start`?",
        answer: "`npm start` runs the command specified in the 'start' script of the package.json file.",
        Sample: "It's commonly used to start the server.",
        code: `// In package.json: "scripts": { "start": "node server.js" }`
      },


      {
        id: 962,
        Title: " What is the difference between NoSQL and SQL databases?",
        answer: "NoSQL databases are schema-less and allow for unstructured data storage, while SQL databases are structured and use a predefined schema.",
        Sample: "MongoDB is an example of a NoSQL database, while MySQL is an SQL database.",
        code: `// NoSQL: MongoDB\n// SQL: MySQL`
      },
      {
        id: 963,
        Title: " What is a templating engine?",
        answer: "A templating engine is a tool that allows you to generate HTML dynamically using templates, which can include placeholders for data.",
        Sample: "EJS, Handlebars, and Pug are popular templating engines for Node.js.",
        code: `app.set('view engine', 'ejs');`
      },
      {
        id: 964,
        Title: " How do you implement file system operations in Node.js?",
        answer: "File system operations can be performed using the built-in 'fs' module, which provides methods to read, write, and manage files.",
        Sample: "Asynchronous methods prevent blocking the event loop.",
        code: `const fs = require('fs');\nfs.writeFile('file.txt', 'Hello, World!', (err) => { if (err) throw err; });`
      },

  {
    "id": 965,
    "Title": " How to create a Mongoose model?",
    "answer": "You can create a model by compiling a schema using `mongoose.model()`.",
    "Sample": "Creating a user model.",
    "code": "const UserModel = mongoose.model('User', userSchema);"
  },
  {
    "id": 966,
    "Title": "What is Next.js?",
    "answer": "Next.js is a React framework for server-side rendering and static site generation.",
    "Sample": "It enhances React with optimized performance, file-based routing, and server-side rendering capabilities.",
    "code": "import React from 'react';\nconst HomePage = () => {\n  return <h1>Welcome to Next.js!</h1>;\n}\nexport default HomePage;"
  },
  {
    "id": 967,
    "Title": "How does Next.js handle routing?",
    "answer": "Next.js uses a file-based routing system; files in the 'pages' directory correspond to routes.",
    "Sample": "Creating 'pages/about.js' automatically creates a route '/about'.",
    "code": "const About = () => <h1>About Page</h1>;\nexport default About;"
  },
  {
    "id": 968,
    "Title": "How do you create a dynamic route in Next.js?",
    "answer": "Dynamic routes are created by using square brackets in the file name inside the 'pages' directory.",
    "Sample": "Creating 'pages/post/[id].js' allows for routes like '/post/1', '/post/2', etc.",
    "code": "import { useRouter } from 'next/router';\nconst Post = () => {\n  const { id } = useRouter().query;\n  return <h1>Post ID: {id}</h1>;\n}\nexport default Post;"
  },
  {
    "id": 969,
    "Title": "How do you fetch data with server-side rendering?",
    "answer": "Use 'getServerSideProps' to fetch data on each request.",
    "Sample": "The function runs on the server and passes data to the component.",
    "code": "export async function getServerSideProps() {\n  const res = await fetch(\"https://api.example.com/data\");\n  const data = await res.json();\n  return { props: { data } };\n}\nconst Page = ({ data }) => <div>{data}</div>;\nexport default Page;"
  },
  { id:970, Title: "What is Ruby?", answer: "Ruby is an open-source, dynamic programming language.", Sample: "example: puts 'Hello, Ruby!'", code: `puts "Hello, Ruby!"` },

  { id:971, Title: "What is a variable in Ruby?", answer: "A variable is a storage location to hold data.", Sample: "name = 'Ruby'", code: `name = "Ruby"` },

  { id:972, Title: "Explain if-else statement.", answer: "Used for conditional branching.", Sample: "if condition then code", code: `if x > 10\n  puts "Greater"\nelse\n  puts "Smaller"\nend` },

  { id:973, Title: "What is a loop?", answer: "A way to repeat code multiple times.", Sample: "while, for loops", code: `for i in 1..5\n  puts i\nend` },

  { id:974, Title: "What is an array?", answer: "An ordered collection of elements.", Sample: "arr = [1, 2, 3]", code: `arr = [1, 2, 3]` },

  { id:975, Title: "What is a hash?", answer: "A data structure to store key-value pairs.", Sample: `hash = { name: "Alice", age: 30 }`, code: `hash = { name: "Alice", age: 30 }` },

  { id:976, Title: "Explain the for loop syntax.", answer: "Iterates over a range or collection.", Sample: `for i in 1..5`, code: `for i in 1..5\n  puts i\nend` },

  { id:977, Title: "How to define a function in Ruby?", answer: "Use def keyword followed by function name.", Sample: `def greet(name)`, code: `def greet(name)\n  puts "Hello, \#{name}!"\nend` },

  { id:978, Title: "Explain the while loop.", answer: "Repeats until condition is false.", Sample: `while i < 5`, code: `i = 0\nwhile i < 5\n  puts i\n  i += 1\nend` },

  { id: 979, Title: " What is a class in Ruby?", answer: "A blueprint to create objects.", Sample: "class Person", code: `class Person\n  def initialize(name)\n    @name = name\n  end\nend` },

  { id: 980, Title: " Explain inheritance in Ruby.", answer: "A class can inherit methods from another class.", Sample: `class Dog < Animal`, code: `class Dog < Animal\n  def bark\n    puts "Woof!"\n  end\nend` },

  { id: 981, Title: " What is a module?", answer: "A way to group related methods.", Sample: "module Math", code: `module Greetings\n  def hello\n    puts "Hello!"\n  end\nend` },

  { id: 982, Title: " Explain method overriding.", answer: "A subclass method replaces a superclass method.", Sample: `class Dog < Animal`, code: `class Dog < Animal\n  def speak\n    puts "Woof!"\n  end\nend` },

  { id: 983, Title: " What are blocks in Ruby?", answer: "A block is a group of code in `{}` or `do..end`.", Sample: `array.each { |item| puts item }`, code: `array.each { |item| puts item }` },

  { id: 984, Title: " What is a Proc?", answer: "An object that holds a block of code.", Sample: `my_proc = Proc.new { puts 'Hello' }`, code: `my_proc = Proc.new { puts 'Hello' }` },

  { id: 985, Title: " Explain lambdas.", answer: "A type of Proc with strict argument checking.", Sample: `my_lambda = lambda { puts 'Hello' }`, code: `my_lambda = lambda { puts 'Hello' }` },

  { id: 986, Title: " What is self in Ruby?", answer: "Refers to the current object context.", Sample: `class Example; self`, code: `class Person\n  def initialize(name)\n    @name = name\n  end\nend` },

  { id: 987, Title: " What are instance variables?", answer: "Variables belonging to an instance of a class.", Sample: "@name = 'Alice'", code: `@name = "Alice"` },

  { id: 988, Title: " What is a singleton method?", answer: "A method defined only on a single instance.", Sample: `def object.method`, code: `def obj.speak\n  puts "Hello"\nend` },

  { id: 989, Title: " Explain string interpolation.", answer: "Embedding variables in a string.", Sample: `"Hello, #{name}"`, code: `name = "Ruby"\nputs "Hello, \#{name}!"` },

  { id: 990, Title: " Explain encapsulation.", answer: "Bundling data with methods in a class.", Sample: `class Car`, code: `class Car\n  def initialize(make)\n    @make = make\n  end\nend` },

  { id: 991, Title: " What is a ternary operator?", answer: "A compact form of if-else.", Sample: `condition ? true : false`, code: `x > 10 ? "Greater" : "Smaller"` },

  { id: 992, Title: " What is an enumerator?", answer: "An object that allows iteration.", Sample: `array.each`, code: `arr = [1, 2, 3]\narr.each { |num| puts num }` },

  { id: 993, Title: " Explain symbols in Ruby.", answer: "Immutable identifiers used as memory-efficient strings.", Sample: ":name", code: `:name` },

  { id: 994, Title: " What is a range?", answer: "A sequence of values.", Sample: "r 1...5", code: `(1..5).to_a` },

  { id: 995, Title: " Explain attr_accessor.", answer: "Creates getter and setter methods.", Sample: "attr_accessor :name", code: `class Person\n  attr_accessor :name\nend` },

  { id: 996, Title: " What is exception handling?", answer: "Handling errors in a program.", Sample: "begin...rescue", code: `begin\n  # code\nrescue\n  # handle error\nend` },

  { id: 997, Title: " Explain yield keyword.", answer: "Used to call a block in a method.", Sample: "def example; yield; end", code: `def greet\n  yield\nend\ngreet { puts "Hello" }` },

  { id: 998, Title: " What is monkey patching?", answer: "Adding methods to existing classes.", Sample: `class String; def shout; upcase; end`, code: `class String\n  def shout\n    upcase\n  end\nend` },

  { id: 999, Title: " Explain duck typing.", answer: "An object’s ability to behave like others based on methods.", Sample: "object quacks like a duck", code: `if obj.respond_to?(:quack)\n  obj.quack\nend` },
  { id: 1000, Title: " What is metaprogramming?", answer: "Metaprogramming is the ability to write code that can create or modify other code during runtime.", Sample: "define_method dynamically creates a method.", code: `class Person\n  define_method(:greet) { "Hello!" }\nend` },

   
 {
  id: 1001,
  Title: "What is React?",
  answer: "React is a JavaScript library for building user interfaces.",
  Sample: "It allows developers to create large web applications that can change data without reloading the page.",
  code: `import React from 'react';`
},
{
  id: 1002,
  Title: "What are components in React?",
  answer: "Components are reusable pieces of UI that can be defined as JavaScript functions or classes.",
  Sample: "Components can manage their own state and accept props.",
  code: `function MyComponent() { 
  return <div>Hello, World!</div>;
   }`
},
{
  id: 1003,
  Title: "What is state in React?",
  answer: "State is a built-in object that stores property values that belong to a component.",
  Sample: "When a state object changes, the component re-renders.",
  code: `const [count, setCount] = useState(0);`
},
{
  id: 1004,
  Title: "What are props in React?",
  answer: "Props are short for properties and are used to pass data from one component to another.",
  Sample: "Props are read-only and cannot be modified by the child component.",
  code: `function Greeting(props) {
  return <h1>Hello, {props.name}</h1>; 
  }`
},
{
  id: 1005,
  Title: "What is JSX?",
  answer: "JSX is a syntax extension that looks similar to HTML and is used in React to describe the UI.",
  Sample: "JSX makes it easier to write and visualize the UI structure.",
  code: `const element = <h1>Hello, World!</h1>;`
},
{
  id: 1006,
  Title: "What is the Virtual DOM?",
  answer: "The Virtual DOM is a lightweight copy of the actual DOM that React uses to optimize updates.",
  Sample: "It allows React to calculate the most efficient way to update the UI.",
  code: `const element = <h1>Hello, World!</h1>; 
  ReactDOM.render(element, document.getElementById('root'));`
},
{
  id: 1007,
  Title: "What are hooks in React?",
  answer: "Hooks are functions that let you use state and other React features in functional components.",
  Sample: "The most common hooks are useState and useEffect.",
  code: `useEffect(() => { /* effect code */ }, []);`
},
{
  id: 1008,
  Title: "What is the useEffect hook?",
  answer: "useEffect is a hook that lets you perform side effects in function components.",
  Sample: "It can be used for data fetching, subscriptions, or manually changing the DOM.",
  code: `useEffect(() => { 
  fetchData(); 
  }, []);`
},
{
  id: 1009,
  Title: "What is the useState hook?",
  answer: "useState is a hook that lets you add state to functional components.",
  Sample: "It returns a stateful value and a function to update it.",
  code: `const [count, setCount] = useState(0);`
},
{
  id: 1010,
  Title: " What is conditional rendering in React?",
  answer: "Conditional rendering in React allows you to render different UI elements based on the state or props.",
  Sample: "It can be achieved using if statements or ternary operators.",
  code: `{isLoggedIn ? <Dashboard /> : <Login />}`
},
{
  id: 1011,
  Title: " What is the purpose of keys in React?",
  answer: "Keys help React identify which items have changed, are added, or are removed.",
  Sample: "Keys should be unique among siblings but can be reused in different parts of the component tree.",
  code: `{array.map(item => <ListItem key={item.id} value={item} />)}`
},
{
  id: 1012,
  Title: " What is lifting state up in React?",
  answer: "Lifting state up is the process of moving state from a child component to a parent component.",
  Sample: "It allows for shared state between multiple components.",
  code: `function Parent() { 
  const [value, setValue] = useState(0); 
  return <Child value={value} onChange={setValue} />; 
  }`
},
{
  id: 1013,
  Title: " What are controlled components?",
  answer: "Controlled components are form elements whose value is controlled by React state.",
  Sample: "They provide a single source of truth for form data.",
  code: `<input value={value} onChange={e => setValue(e.target.value)} />`
},
{
  id: 1014,
  Title: " What are uncontrolled components?",
  answer: "Uncontrolled components store their own state internally and do not rely on React state.",
  Sample: "They can be accessed using refs.",
  code: `<input ref={inputRef} />`
},
{
  id: 1015,
  Title: " What is context in React?",
  answer: "Context is a way to pass data through the component tree without props drilling.",
  Sample: "It is useful for global data like themes or user information.",
  code: `const ThemeContext = React.createContext('light');`
},
{
  id: 1016,
  Title: " What are higher-order components (HOCs)?",
  answer: "HOCs are functions that take a component and return a new component with additional props or functionality.",
  Sample: "They are used for cross-cutting concerns like logging or authentication.",
  code: `function withLogger(WrappedComponent) { 
  return props => { console.log(props); 
  return <WrappedComponent {...props} />; 
  }; 
  }`
},
{
  id: 1017,
  Title: " What is a React fragment?",
  answer: "A React fragment is a way to group multiple elements without adding extra nodes to the DOM.",
  Sample: "It helps in avoiding unnecessary divs.",
  code: `<React.Fragment><ChildA /><ChildB /></React.Fragment>`
},
{
  id: 1018,
  Title: " What is the purpose of the useMemo hook?",
  answer: "useMemo is a hook that memorizes the result of a calculation between re-renders.",
  Sample: "It can improve performance for expensive calculations.",
  code: `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`
},
{
  id: 1019,
  Title: " What is the purpose of the useCallback hook?",
  answer: "useCallback is a hook that returns a memoized callback function.",
  Sample: "It is useful for preventing unnecessary re-renders of child components.",
  code: `const memoizedCallback = useCallback(() => { 
  doSomething(a, b); }, [a, b]);`
},
{
  id: 1020,
  Title: " What is the difference between functional and class components?",
  answer: "Functional components are simpler and easier to understand, while class components can manage their own state and lifecycle methods.",
  Sample: "Functional components can use hooks for state management.",
  code: `class MyComponent extends React.Component { render() { 
  return <div>Hello!</div>; 
  } 
  }`
},
{
  id: 1021,
  Title: " What is a custom hook in React?",
  answer: "A custom hook is a function that utilizes React hooks to encapsulate logic and can be reused across components.",
  Sample: "It promotes code reuse and separation of concerns.",
  code: `function useFetch(url) { const [data, setData] = useState([]); 
  useEffect(() => { 
  fetch(url).then(res => res.json()).then(setData); 
  }, [url]); return data; }`
},
{
  id: 1022,
  Title: " What is the useRef hook?",
  answer: "useRef is a hook that returns a mutable ref object, which persists for the full lifetime of the component.",
  Sample: "It can be used to access DOM elements or to store mutable values.",
  code: `const inputRef = useRef(null);`
},
{
  id: 1023,
  Title: " What is PropTypes?",
  answer: "PropTypes is a library for type-checking the props of a component.",
  Sample: "It helps catch bugs related to props during development.",
  code: `MyComponent.propTypes = { name: PropTypes.string.isRequired };`
},
{
  id: 1024,
  Title: " What is the purpose of the componentDidMount lifecycle method?",
  answer: "componentDidMount is called after a component is mounted and can be used for initial data fetching or DOM manipulation.",
  Sample: "It is part of class components' lifecycle methods.",
  code: `componentDidMount() { 
  this.fetchData(); 
  }`
},
{
  id: 1025,
  Title: " What is the purpose of the componentDidUpdate lifecycle method?",
  answer: "componentDidUpdate is called after updates are made to a component, allowing you to respond to prop or state changes.",
  Sample: "It can be used to trigger side effects based on updates.",
  code: `componentDidUpdate(prevProps) { 
  if (this.props.id !== prevProps.id) { 
  this.fetchData(); 
  } 
  }`
},
{
  id: 1026,
  Title: " What is the purpose of the componentWillUnmount lifecycle method?",
  answer: "componentWillUnmount is called before a component is unmounted, allowing for cleanup tasks.",
  Sample: "It can be used to remove event listeners or cancel network requests.",
  code: `componentWillUnmount() { this.cleanUp(); }`
},
{
  id: 1027,
  Title: " What is a callback ref?",
  answer: "A callback ref is a function that receives the DOM element as its argument, allowing you to perform actions on it.",
  Sample: "It can be used to access and manipulate DOM elements.",
  code: `const myRef = node => { 
  if (node) { 
  node.focus(); 
  } };`
},
{
  id: 1028,
  Title: " What is the purpose of error boundaries?",
  answer: "Error boundaries are components that catch JavaScript errors in their child component tree, allowing you to handle errors gracefully.",
  Sample: "They prevent crashes of the entire application.",
  code: `class ErrorBoundary extends React.Component { componentDidCatch(error, info) { logErrorToMyService(error, info); 
  } render() { 
   return this.props.children; 
   } }`
},
{
  id: 1029,
  Title: " What is the purpose of React Router?",
  answer: "React Router is a library that enables routing in React applications, allowing for navigation between different components.",
  Sample: "It helps in creating single-page applications with multiple views.",
  code: `import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';`
},
{
  id: 1030,
  Title: " What are the differences between controlled and uncontrolled components?",
  answer: "Controlled components use React state to manage form data, while uncontrolled components manage their own state.",
  Sample: "Controlled components provide better validation and control over the data.",
  code: `function ControlledInput() { 
  const [value, setValue] = useState(''); 
  return <input value={value} onChange={e => setValue(e.target.value)} />; 
  }`
},
{
  id: 1031,
  Title: " How does 'forEach' work in JavaScript?",
  answer: "'forEach' is an array method that iterates over each element in an array, performing a callback function on each item.",
  Sample: "Unlike 'map', it doesn't return a new array.",
  code: `const numbers = [1, 2, 3];
numbers.forEach((num) => {
console.log(num * 2);
}); // Output: 2, 4, 6`
},
{
  id: 1032,
  Title: " How do you use 'map' in JavaScript and React?",
  answer: "'map' creates a new array by applying a function to each element of an original array.",
  Sample: "In React, 'map' is commonly used to render lists.",
  code: `const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6]

// React example
const listItems = numbers.map((num) => <li key={num}>{num}</li>);`
},
{
  id: 1033,
  Title: " How do you use 'if-else' statements in JavaScript?",
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
  id: 1034,
  Title: " What is 'useState' and how do you use it?",
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
  id: 1035,
  Title: " What is 'useEffect' and how do you use it?",
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
  id: 1036,
  Title: " How does conditional rendering work in React?",
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
  id: 1037,
  Title: " How do you use 'for' loops in JavaScript?",
  answer: "The 'for' loop runs a block of code a specified number of times.",
  Sample: "It's useful for iterating over arrays with specific start, stop, and step values.",
  code: `for (let i = 0; i < 5; i++) {
console.log(i);
} // Output: 0, 1, 2, 3, 4`
},
{
  id: 1038,
  Title: " What is 'useRef' and how do you use it?",
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
  id: 1039,
  Title: " How does 'map' differ from 'forEach' in JavaScript?",
  answer: "'map' returns a new array, while 'forEach' executes a function on each array element without returning anything.",
  Sample: "Use 'map' when transforming arrays and 'forEach' for side effects like logging.",
  code: `const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // [2, 4, 6]
numbers.forEach(num => console.log(num * 2)); // Logs: 2, 4, 6`
},
{
  id: 1040,
  Title: " What is 'useContext' and how is it used?",
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
  id: 1041,
  Title: " What is the significance of keys in lists?",
  answer: "Keys help React identify which items have changed, are added, or are removed, optimizing rendering.",
  Sample: "Each key should be unique to avoid potential bugs.",
  code: `{items.map(item => <Item key={item.id} {...item} />)}`
},
{
  id: 1042,
  Title: " What are the advantages of using TypeScript with React?",
  answer: "TypeScript provides static typing, better tooling, and improved code maintainability in React applications.",
  Sample: "It helps catch errors during development rather than at runtime.",
  code: `const MyComponent: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>;`
},
{
  id: 1043,
  Title: " How do you handle forms in React?",
  answer: "Forms in React can be handled with controlled components using state or using libraries like Formik.",
  Sample: "Controlled components provide a single source of truth.",
  code: `<form onSubmit={handleSubmit}><input value={inputValue} onChange={e => setInputValue(e.target.value)} /></form>`
},
{
  id: 1044,
  Title: " What is React.memo?",
  answer: "React.memo is a higher-order component that memoizes a functional component, preventing unnecessary re-renders.",
  Sample: "It is useful for optimizing performance in large applications.",
  code: `const MemoizedComponent = React.memo(MyComponent);`
},
{
  id: 1045,
  Title: " What are side effects in React?",
  answer: "Side effects are operations that can affect other components outside the function component, like data fetching or subscriptions.",
  Sample: "They are typically managed with the useEffect hook.",
  code: `useEffect(() => { 
  const subscription = api.subscribe(); 
  return () => subscription.unsubscribe(); 
  }, []);`
},
{
  id: 1046,
  Title: " What is the significance of React.StrictMode?",
  answer: "React.StrictMode is a wrapper that helps highlight potential problems in an application during development.",
  Sample: "It does not affect the production build but provides warnings for unsafe lifecycle methods and other issues.",
  code: `<React.StrictMode><App /></React.StrictMode>`
},
{
  id: 1047,
  Title: " How do you optimize performance in a React application?",
  answer: "Performance can be optimized through techniques like memoization, code splitting, and lazy loading.",
  Sample: "Using React.lazy and Suspense for dynamic imports can enhance performance.",
  code: `const LazyComponent = React.lazy(() => import('./LazyComponent'));`
},
{
  id: 1048,
  Title: " What is the purpose of React DevTools?",
  answer: "React DevTools is a browser extension that helps in debugging React applications.",
  Sample: "It allows inspecting the React component tree and their props and state.",
  code: `// Install React DevTools as a browser extension.`
},
{
  id: 1049,
  Title: " What are portals in React?",
  answer: "Portals provide a way to render children into a DOM node outside of their parent component hierarchy.",
  Sample: "They are useful for modals or tooltips that need to escape overflow or fixed positioning.",
  code: `ReactDOM.createPortal(<Modal />, document.getElementById('modal-root'));`
},
{
  id: 1050,
  Title: " What is the purpose of the key attribute in React?",
  answer: "The key attribute is used to give a unique identity to elements in a list to optimize re-rendering.",
  Sample: "It helps React differentiate between elements for efficient updates.",
  code: `<ul>{items.map(item => <li key={item.id}>{item.text}</li>)}</ul>`
},
  
{
id: 1051,
Title: " What is the difference between props and state?",
answer: "Props are passed to components, while state is managed within the component.",
Sample: "Props are immutable, while state can change over time.",
code: `function MyComponent({ propValue }) { 
const [stateValue, setStateValue] = useState(0); 
return <div>{propValue} - {stateValue}</div>; 
}`
},
{
id: 1052,
Title: " What is the purpose of the shouldComponentUpdate lifecycle method?",
answer: "shouldComponentUpdate determines if a component should re-render or not.",
Sample: "It is used for performance optimization in class components.",
code: `shouldComponentUpdate(nextProps, nextState) { 
return this.props.value !== nextProps.value; 
}`
},
{
id: 1053,
Title: " How do you implement routing in React?",
answer: "Routing in React can be implemented using React Router, which provides components like Route and Link.",
Sample: "It allows navigation between different views in a single-page application.",
code: `import { BrowserRouter as Router, Route, Link } from 'react-router-dom';`
},
{
id: 1054,
Title: " What are React Hooks?",
answer: "Hooks are special functions that allow you to use state and other React features in functional components.",
Sample: "They enable you to use state without writing a class.",
code: `const [state, setState] = useState(initialState);`
},
{
id: 1055,
Title: " What is the significance of the component key in React?",
answer: "Keys help React identify which items have changed, are added, or are removed in lists.",
Sample: "They provide a unique identity to each list item for efficient rendering.",
code: `{items.map(item => <ListItem key={item.id} value={item} />)}`
},
{
id: 1056,
Title: " How do you create a simple context in React?",
answer: "Context allows you to share values between components without passing props through every level of the tree.",
Sample: "You can create a context using React.createContext().",
code: `const MyContext = React.createContext(defaultValue);`
},
{
id: 1057,
Title: " What is the purpose of the useContext hook?",
answer: "useContext is a hook that lets you subscribe to React context without introducing nesting.",
Sample: "It simplifies consuming context values in functional components.",
code: `const value = useContext(MyContext);`
},
{
id: 1058,
Title: " How do you implement error boundaries in React?",
answer: "Error boundaries are React components that catch JavaScript errors in their child components.",
Sample: "They prevent crashes by rendering a fallback UI instead.",
code: `class ErrorBoundary extends React.Component { componentDidCatch(error, info) { /* log error */ } render() { return this.props.children; } }`
},
{
id: 1059,
Title: " What is the significance of keys in React?",
answer: "Keys help React identify which items have changed, are added, or are removed in lists.",
Sample: "They provide a unique identity to each list item for efficient rendering.",
code: `{items.map(item => <ListItem key={item.id} value={item} />)}`
},
{
id: 1060,
Title: " What is React.lazy and React.Suspense?",
answer: "React.lazy allows you to dynamically import components, and React.Suspense allows you to wait for these components to load.",
Sample: "They are used for code splitting and lazy loading.",
code: `const LazyComponent = React.lazy(() => import('./LazyComponent'));`
},
{
id: 1061,
Title: " What is the purpose of refs in React?",
answer: "Refs provide a way to access and interact with DOM elements or class component instances directly.",
Sample: "They can be used for managing focus, text selection, or media playback.",
code: `const inputRef = useRef(null);`
},
{
id: 1062,
Title: " What is the purpose of the useLayoutEffect hook?",
answer: "useLayoutEffect is similar to useEffect but fires synchronously after all DOM mutations.",
Sample: "It is used for reading layout from the DOM and synchronously re-rendering.",
code: `useLayoutEffect(() => { /* read layout */ }, []);`
},
{
id: 1063,
Title: " How do you handle asynchronous operations in React?",
answer: "Asynchronous operations can be handled using the useEffect hook or within event handlers.",
Sample: "Using async/await syntax simplifies handling promises.",
code: `useEffect(() => { const fetchData = async () => { 
const data = await fetch(url); setData(data); 
}; fetchData(); }, []);`
},
{
id: 1064,
Title: " What is the purpose of the useImperativeHandle hook?",
answer: "useImperativeHandle customizes the instance value that is exposed to parent components when using ref.",
Sample: "It is used with forwardRef to expose certain functions.",
code: `useImperativeHandle(ref, () => ({ customFunction }));`
},
{
id: 1065,
Title: " What are side effects in React?",
answer: "Side effects are operations that can affect other components outside the function component, like data fetching or subscriptions.",
Sample: "They are typically managed with the useEffect hook.",
code: `useEffect(() => { 
const subscription = api.subscribe(); 
return () => subscription.unsubscribe(); 
}, []);`
},
{
id: 1066,
Title: " What is the purpose of React.Fragment?",
answer: "React.Fragment is a lightweight component that allows grouping multiple elements without adding extra nodes to the DOM.",
Sample: "It is useful for returning multiple elements from a component.",
code: `return (<><ChildA /><ChildB /></>);`
},
{
id: 1067,
Title: " What is code splitting in React?",
answer: "Code splitting is a technique that helps to split your code into smaller chunks, which can be loaded on demand.",
Sample: "It improves the performance of your application.",
code: `const LazyComponent = React.lazy(() => import('./LazyComponent'));`
},
{
id: 1068,
Title: " What is the purpose of the useDebugValue hook?",
answer: "useDebugValue is a hook that helps you display a label for custom hooks in React DevTools.",
Sample: "It can be used to provide context about the state of the hook.",
code: `useDebugValue(value ? 'Active' : 'Inactive');`
},
{
id: 1069,
Title: " What is the purpose of the unstable_batchedUpdates function?",
answer: "unstable_batchedUpdates allows you to batch multiple state updates into a single render for performance optimization.",
Sample: "It can prevent unnecessary renders.",
code: `unstable_batchedUpdates(() => { 
setCount(count + 1); 
setValue(newValue); 
});`
},
{
id: 1070,
Title: " What is the use of the withRouter HOC?",
answer: "withRouter is a higher-order component that provides the router-related props to the wrapped component.",
Sample: "It is useful for accessing history, match, and location props in components.",
code: `import { withRouter } from 'react-router-dom';`
},
{ id: 1071, Title: " What is the difference between a class and an object in Ruby?", answer: "A class is a blueprint for creating objects, while an object is an instance of a class.", Sample: "class Car; def start; puts 'Engine started'; end; end", code: `class Car\n  def start\n    'Engine started'\n  end\nend\ncar = Car.new\n ` },

{ id: 1072, Title: " What are Ruby Gems?", answer: "Gems are libraries or packages for Ruby that add additional functionality.", Sample: "gem install rails", code: `gem install rails` },

{ id: 1073, Title: " Explain mixins and how they work in Ruby.", answer: "Mixins allow sharing code between classes using modules.", Sample: "module Flyable; class Bird; include Flyable", code: `module Flyable\n  def fly\n    "I can fly!"\n  end\nend\nclass Bird\n  include Flyable\nend` },

{ id: 1074, Title: " What are Ruby blocks, and how do they work?", answer: "Blocks are anonymous pieces of code passed to methods. They can be defined using `{}` or `do..end`.", Sample: "[1, 2, 3].each { |n| puts n }", code: `[1, 2, 3].each { |n| puts n }` },

{ id: 1075, Title: " Explain the concept of aliasing methods in Ruby.", answer: "Aliasing allows creating alternative names for methods.", Sample: "alias old_method new_method", code: `class Example\n  def original_method\n    "Hello"\n  end\n  alias new_method original_method\nend` },

{ id: 1076, Title: " What is a singleton class?", answer: "A singleton class is a class with only one instance, often used to define class-level methods.", Sample: "class << object; def method", code: `class << self\n  def class_method\n    "I am a class method"\n  end\nend` },

{ id: 1077, Title: " Explain method_missing and its purpose.", answer: "`method_missing` is a callback method called when an undefined method is invoked.", Sample: "def method_missing(name, *args)", code: `class DynamicMethods\n  def method_missing(name, *args)\n    puts "Method \#{name} not found."\n  end\nend` },

{ id: 1078, Title: " What is a constant in Ruby?", answer: "A constant is a variable with a value that should not be changed.", Sample: "PI = 3.14", code: `PI = 3.14159` },

{ id: 1079, Title: " Explain the difference between public, private, and protected methods.", answer: "Access control keywords in Ruby. Public methods can be called from anywhere, private methods only within the class, and protected methods within the class and subclasses.", Sample: "class Example; private :private_method", code: `class Person\n  private\n  def secret_method\n    "Secret"\n  end\nend` },

{ id: 1080, Title: " What is introspection in Ruby?", answer: "Introspection allows inspecting objects and their properties at runtime.", Sample: "object.class or object.methods", code: `puts "Class: \#{object.class}"\nputs "Methods: \#{object.methods}"` },
{
  id: 1081,
  Title: "What is SQL?",
  answer: "SQL (Structured Query Language) is used to communicate with and manipulate relational databases.",
  Sample: "SELECT * FROM table_name;",
  code: `SELECT * FROM employees;`
},
{
  id: 1082,
  Title: "How does the SELECT statement work?",
  answer: "SELECT is used to retrieve data from a database table or view.",
  Sample: "SELECT column1, column2 FROM table_name;",
  code: `SELECT name, age FROM users;`
},
{
  id: 1083,
  Title: "What is the UPDATE statement?",
  answer: "UPDATE is used to modify existing records in a table.",
  Sample: "UPDATE table_name SET column1 = value1 WHERE condition;",
  code: `UPDATE employees SET salary = 50000 WHERE id = 1;`
},
{
  id: 1084,
  Title: "How does the DELETE statement work?",
  answer: "DELETE removes specific records from a table based on a condition.",
  Sample: "DELETE FROM table_name WHERE condition;",
  code: `DELETE FROM users WHERE age < 18;`
},
{
  id: 1085,
  Title: "What is an INNER JOIN?",
  answer: "INNER JOIN returns rows with matching values in both tables.",
  Sample: "SELECT * FROM table1 INNER JOIN table2 ON table1.column = table2.column;",
  code: `SELECT orders.order_id, customers.name FROM orders INNER JOIN customers ON orders.customer_id = customers.id;`
},
{
  id: 1086,
  Title: "What is a LEFT JOIN?",
  answer: "LEFT JOIN returns all rows from the left table and matched rows from the right table. If no match is found, NULL values are returned.",
  Sample: "SELECT * FROM table1 LEFT JOIN table2 ON table1.column = table2.column;",
  code: `SELECT employees.name, departments.dept_name FROM employees LEFT JOIN departments ON employees.dept_id = departments.id;`
},
{
  id: 1087,
  Title: "What is a RIGHT JOIN?",
  answer: "RIGHT JOIN returns all rows from the right table and matched rows from the left table. If no match is found, NULL values are returned.",
  Sample: "SELECT * FROM table1 RIGHT JOIN table2 ON table1.column = table2.column;",
  code: `SELECT employees.name, departments.dept_name FROM employees RIGHT JOIN departments ON employees.dept_id = departments.id;`
},
{
  id: 1088,
  Title: "What is a FULL JOIN?",
  answer: "FULL JOIN returns all rows when there is a match in either table, and NULLs where no match exists.",
  Sample: "SELECT * FROM table1 FULL JOIN table2 ON table1.column = table2.column;",
  code: `SELECT employees.name, departments.dept_name FROM employees FULL JOIN departments ON employees.dept_id = departments.id;`
},
{
  id: 1089,
  Title: "How does the BETWEEN operator work?",
  answer: "BETWEEN is used to filter records within a specific range.",
  Sample: "SELECT * FROM table_name WHERE column BETWEEN value1 AND value2;",
  code: `SELECT * FROM products WHERE price BETWEEN 100 AND 500;`
},
{
  id: 1090,
  Title: " How does the IN operator work?",
  answer: "IN allows multiple values to be specified in a WHERE clause.",
  Sample: "SELECT * FROM table_name WHERE column IN (value1, value2, ...);",
  code: `SELECT * FROM employees WHERE department_id IN (1, 2, 3);`
},
{
  id: 1091,
  Title: " What is the role of the ON clause in SQL joins?",
  answer: "ON specifies the condition for joining tables in SQL.",
  Sample: "SELECT * FROM table1 JOIN table2 ON table1.column = table2.column;",
  code: `SELECT orders.order_id, customers.name FROM orders INNER JOIN customers ON orders.customer_id = customers.id;`
},
{
  id: 1092,
  Title: " How does the AND operator work in SQL?",
  answer: "AND allows multiple conditions to be combined in a SQL query.",
  Sample: "SELECT * FROM table_name WHERE condition1 AND condition2;",
  code: `SELECT * FROM employees WHERE age > 30 AND department = 'Sales';`
},
{
  id: 1093,
  Title: " What is ORDER BY used for?",
  answer: "ORDER BY sorts the result set in ascending (ASC) or descending (DESC) order.",
  Sample: "SELECT * FROM table_name ORDER BY column1 ASC, column2 DESC;",
  code: `SELECT * FROM employees ORDER BY salary DESC;`
},
{
  id: 1094,
  Title: " How does the GROUP BY clause work?",
  answer: "GROUP BY groups rows that have the same values into summary rows.",
  Sample: "SELECT column, aggregate_function(column) FROM table_name GROUP BY column;",
  code: `SELECT department, COUNT(*) FROM employees GROUP BY department;`
},
{
  id: 1095,
  Title: " What is the WHERE clause used for?",
  answer: "WHERE filters records based on a specific condition.",
  Sample: "SELECT * FROM table_name WHERE condition;",
  code: `SELECT * FROM employees WHERE age > 25;`
},
{
  id: 1096,
  Title: " What is the HAVING clause?",
  answer: "HAVING filters groups based on a specified condition, typically used with aggregate functions.",
  Sample: "SELECT column, aggregate_function(column) FROM table_name GROUP BY column HAVING condition;",
  code: `SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 5;`
},
{
  id: 1097,
  Title: " What is the DISTINCT keyword?",
  answer: "DISTINCT removes duplicate rows from the result set.",
  Sample: "SELECT DISTINCT column1 FROM table_name;",
  code: `SELECT DISTINCT department FROM employees;`
},
{
  id: 1098,
  Title: " How does the LIMIT clause work?",
  answer: "LIMIT restricts the number of rows returned in a query.",
  Sample: "SELECT * FROM table_name LIMIT number;",
  code: `SELECT * FROM employees LIMIT 10;`
},
{
  id: 1099,
  Title: " What is a self join?",
  answer: "A self join is a join in which a table is joined with itself.",
  Sample: "SELECT a.column, b.column FROM table_name a, table_name b WHERE a.column = b.column;",
  code: `SELECT a.name, b.name FROM employees a, employees b WHERE a.manager_id = b.id;`
},
{
  id: 1100,
  Title: " What are aggregate functions?",
  answer: "Aggregate functions perform calculations on a set of values and return a single result, such as SUM, AVG, COUNT.",
  Sample: "",
  code: ``
},

{
  id: 1101,
  Title: "What is Tailwind CSS?",
  answer: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build designs directly in your markup.",
  Sample: "Use the utility classes to style elements without writing custom CSS.",
  code: `<div className="bg-blue-500 text-white p-4">Hello, Tailwind!</div>`
},
{
  id: 1102,
  Title: "How do you install Tailwind CSS?",
  answer: "You can install Tailwind CSS via npm or Yarn by running 'npm install tailwindcss' or 'yarn add tailwindcss'.",
  Sample: "After installing, configure your tailwind.config.js.",
  code: `// tailwind.config.js
module.exports = {
content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
theme: {
extend: {},
},
plugins: [],
};`
},
{
  id: 1103,
  Title: "What are utility classes?",
  answer: "Utility classes are single-purpose classes that apply a specific style, allowing for rapid design without context.",
  Sample: "Examples include 'bg-red-500', 'text-lg', and 'flex'.",
  code: `<div className="flex items-center justify-between p-4 bg-gray-100">
<span className="text-lg">Item 1</span>
<span className="text-lg">Item 2</span>
</div>`
},
{
  id: 1104,
  Title: "How to customize Tailwind CSS?",
  answer: "You can customize Tailwind by modifying the tailwind.config.js file to add custom colors, fonts, etc.",
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
};`
},
{
  id: 1105,
  Title: "What is the purpose of the 'apply' directive?",
  answer: "The 'apply' directive allows you to use utility classes within your CSS files.",
  Sample: "This can help you create reusable styles.",
  code: `@tailwind base;
@tailwind components;
@tailwind utilities;

.button {
@apply bg-blue-500 text-white p-2 rounded;
}`
},
{
  id: 1106,
  Title: "How do you implement responsive design?",
  answer: "Tailwind provides responsive utility classes by prefixing them with breakpoints (sm:, md:, lg:, xl:).",
  Sample: "This allows you to apply different styles at different screen sizes.",
  code: `<div className="bg-red-500 md:bg-blue-500 lg:bg-green-500 p-4">Responsive Background</div>`
},
{
  id: 1107,
  Title: "What is a dark mode in Tailwind CSS?",
  answer: "Dark mode can be enabled by adding a class to your HTML element and using the 'dark:' prefix for styles.",
  Sample: "This allows you to define styles specifically for dark mode.",
  code: `<div className="bg-white dark:bg-gray-800 p-4">Hello, World!</div>`
},
{
  id: 1108,
  Title: "How do you use Tailwind CSS with React?",
  answer: "You can use Tailwind CSS directly in your JSX as className attributes.",
  Sample: "Simply add the Tailwind classes to your components.",
  code: `<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
Button
</button>`
},
{
  id: 1109,
  Title: "What is the difference between 'flex' and 'grid' in Tailwind?",
  answer: "Flex is a one-dimensional layout, while Grid is a two-dimensional layout system.",
  Sample: "Use flex for aligning items in a row or column and grid for complex layouts.",
  code: `<div className="grid grid-cols-3 gap-4">
<div className="bg-red-500">1</div>
<div className="bg-blue-500">2</div>
<div className="bg-green-500">3</div>
</div>`
},
{
  id: 1110,
  Title: " How do you add hover effects?",
  answer: "Hover effects can be added using the 'hover:' prefix.",
  Sample: "You can change colors, sizes, etc., on hover.",
  code: `<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
Hover Me
</button>`
},
{
  id: 1111,
  Title: " How to use Tailwind with PostCSS?",
  answer: "You can integrate Tailwind CSS with PostCSS by installing necessary plugins and configuring PostCSS.",
  Sample: "Add tailwindcss and autoprefixer to your PostCSS plugins.",
  code: `// postcss.config.js
module.exports = {
plugins: {
tailwindcss: {},
autoprefixer: {},
},
};`
},
{
  id: 1112,
  Title: " What are Tailwind variants?",
  answer: "Variants are used to define styles based on states like hover, focus, and active.",
  Sample: "They help create interactive UI elements.",
  code: `<button className="bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
Click Me
</button>`
},
{
  id: 1113,
  Title: " What is JIT mode in Tailwind CSS?",
  answer: "JIT (Just-In-Time) mode generates styles on-demand as you author your HTML.",
  Sample: "This allows for faster builds and smaller CSS files.",
  code: `// tailwind.config.js
module.exports = {
mode: 'jit',
purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
theme: {
extend: {},
},
};`
},
{
  id: 1114,
  Title: " How to use custom fonts in Tailwind?",
  answer: "You can use custom fonts by extending the theme in your tailwind.config.js file.",
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
};`
},
{
  id: 1115,
  Title: " How to manage forms with Tailwind?",
  answer: "Use Tailwind utility classes to style form elements.",
  Sample: "You can easily customize inputs, buttons, and labels.",
  code: `<input className="border border-gray-300 p-2 rounded" placeholder="Enter your name" />`
},
{
  id: 1116,
  Title: " How to implement animations in Tailwind?",
  answer: "You can implement animations by using the 'transition' utility classes.",
  Sample: "Control transitions for hover and focus states.",
  code: `<button className="transition transform hover:scale-105 bg-blue-500 text-white p-2 rounded">
Hover Me
</button>`
},
{
  id: 1117,
  Title: " How to create a responsive navbar?",
  answer: "You can create a responsive navbar by using flex and hiding/showing items based on screen size.",
  Sample: "Use the 'hidden' and 'block' classes to control visibility.",
  code: `<nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
<div className="text-lg">Logo</div>
<div className="hidden md:flex space-x-4">
<a className="hover:underline" href="#">Home</a>
<a className="hover:underline" href="#">About</a>
</div>
</nav>`
},
{
  id: 1118,
  Title: " How to customize colors in Tailwind?",
  answer: "Customize colors in the tailwind.config.js under the theme.colors object.",
  Sample: "Add your custom color definitions.",
  code: `// tailwind.config.js
module.exports = {
theme: {
colors: {
  primary: '#1DA1F2',
  secondary: '#14171A',
},
},
};`
},
{
  id: 1119,
  Title: " How to create a grid layout?",
  answer: "Use the grid utilities provided by Tailwind to create flexible grid layouts.",
  Sample: "Define the number of columns and gaps.",
  code: `<div className="grid grid-cols-3 gap-4">
<div className="bg-red-500">1</div>
<div className="bg-blue-500">2</div>
<div className="bg-green-500">3</div>
</div>`
},
{
  id: 1120,
  Title: " How to add shadows in Tailwind?",
  answer: "Add shadows using the shadow utility classes.",
  Sample: "Use shadow-md or shadow-lg for different effects.",
  code: `<div className="shadow-lg p-4 bg-white">This has a shadow</div>`
},
{
  id: 1121,
  Title: " What are plugins in Tailwind?",
  answer: "Plugins are used to add additional utilities and components to Tailwind.",
  Sample: "You can create custom plugins or use community plugins.",
  code: `// tailwind.config.js
module.exports = {
plugins: [
require('@tailwindcss/forms'),
],
};`
},
{
  id: 1122,
  Title: " How to use Tailwind with TypeScript?",
  answer: "Tailwind can be used with TypeScript by following the same setup process.",
  Sample: "Ensure your JSX files are typed correctly.",
  code: `import React from 'react';

const MyComponent: React.FC = () => {
return <div className="text-center">Hello TypeScript!</div>;
};`
},
{
  id: 1123,
  Title: " How to use Tailwind with Next.js?",
  answer: "Integrate Tailwind CSS into your Next.js project by installing and configuring it.",
  Sample: "Include Tailwind in your global CSS file.",
  code: `// pages/_app.tsx
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
return <Component {...pageProps} />;
}

export default MyApp;`
},
{
  id: 1124,
  Title: " What is the 'divide' utility?",
  answer: "The 'divide' utility applies a border between child elements.",
  Sample: "Useful for creating separation between items.",
  code: `<ul className="divide-y divide-gray-300">
<li className="py-2">Item 1</li>
<li className="py-2">Item 2</li>
</ul>`
},
{
  id: 1125,
  Title: " How to use Tailwind's 'space' utilities?",
  answer: "Space utilities control margin or padding between elements.",
  Sample: "Use space-x-4 for horizontal spacing.",
  code: `<div className="flex space-x-4">
<div className="bg-red-500 p-4">1</div>
<div className="bg-blue-500 p-4">2</div>
</div>`
},
{
  id: 1126,
  Title: " How to customize breakpoints?",
  answer: "Customize breakpoints in the tailwind.config.js file under theme.screens.",
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
};`
},
{
  id: 1127,
  Title: " How to use 'important' utilities?",
  answer: "Use the '!important' variant to force a utility's style.",
  Sample: "Use it when overriding styles.",
  code: `<div className="bg-blue-500 !text-white">Important Text</div>`
},
{
  id: 1128,
  Title: " How to create a circular image with Tailwind?",
  answer: "Use the rounded-full utility class to create circular images.",
  Sample: "Set width and height to make it circular.",
  code: `<img className="w-24 h-24 rounded-full" src="image-url" alt="Circular" />`
},
{
  id: 1129,
  Title: " How to use Tailwind for accessibility?",
  answer: "Use proper ARIA attributes and semantic HTML with Tailwind classes.",
  Sample: "Ensure elements are keyboard navigable.",
  code: `<button className="bg-blue-500 text-white py-2 px-4 rounded" aria-label="Close">
Close
</button>`
},
{
  id: 1130,
  Title: " What is the 'ring' utility?",
  answer: "The 'ring' utility adds a box-shadow-like outline around elements.",
  Sample: "Useful for focus states.",
  code: `<button className="ring ring-blue-500 focus:ring-2">Ring Button</button>`
},
{
  id: 1131,
  Title: " How to create a loading spinner?",
  answer: "You can create a loading spinner using Tailwind's border and rounded utilities.",
  Sample: "Customize the spinner's size and colors.",
  code: `<div className="border-4 border-t-4 border-blue-500 rounded-full animate-spin w-16 h-16"></div>`
},
{
  id: 1132,
  Title: " How to create tooltips in Tailwind?",
  answer: "Tooltips can be created using Tailwind's positioning utilities.",
  Sample: "Use absolute positioning for tooltips.",
  code: `<div className="relative inline-block">
<button className="bg-blue-500 text-white p-2">Hover me</button>
<div className="absolute hidden bg-gray-700 text-white text-xs rounded p-1 -top-8 left-1/2 transform -translate-x-1/2">Tooltip text</div>
</div>`
},
{
  id: 1133,
  Title: " How to create modals with Tailwind?",
  answer: "You can create modals by using fixed positioning and background overlays.",
  Sample: "Control visibility with state management.",
  code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
<div className="bg-white p-5 rounded-lg">This is a modal</div>
</div>`
},
{
  id: 1134,
  Title: " How to implement a card component?",
  answer: "Use Tailwind classes to create card components with shadows and rounded corners.",
  Sample: "Add hover effects for interactivity.",
  code: `<div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
<img className="w-full" src="image-url" alt="Card image" />
<div className="px-6 py-4">
<div className="font-bold text-xl mb-2">Card Title</div>
<p className="text-gray-700 text-base">Some description about the card.</p>
</div>
</div>`
},
{
  id: 1135,
  Title: " How to style tables with Tailwind?",
  answer: "Tailwind provides utilities to style tables, including borders, padding, and hover effects.",
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
</table>`
},
{
  id: 1136,
  Title: " How to create breadcrumbs in Tailwind?",
  answer: "Breadcrumbs can be styled using flex and spacing utilities.",
  Sample: "Use separators for better visibility.",
  code: `<nav className="flex space-x-2">
<a href="#" className="text-blue-500">Home</a>
<span>/</span>
<a href="#" className="text-blue-500">Library</a>
</nav>`
},
{
  id: 1137,
  Title: " How to create pagination with Tailwind?",
  answer: "Use flex and spacing utilities to create a pagination component.",
  Sample: "Add hover effects for interactivity.",
  code: `<nav className="flex space-x-2">
<a href="#" className="border border-gray-300 px-4 py-2 rounded">1</a>
<a href="#" className="border border-gray-300 px-4 py-2 rounded">2</a>
</nav>`
},
{
  id: 1138,
  Title: " How to create a footer with Tailwind?",
  answer: "Footers can be created using flex and spacing utilities.",
  Sample: "Style it with background colors and text alignment.",
  code: `<footer className="bg-gray-800 text-white p-4">
<div className="text-center">© 2024 Your Company</div>
</footer>`
},
{
  id: 1139,
  Title: " How to style lists with Tailwind?",
  answer: "Use utilities for list styles, including padding and margin.",
  Sample: "Customize bullet points using list-none.",
  code: `<ul className="list-disc pl-5">
<li className="pb-2">Item 1</li>
<li>Item 2</li>
</ul>`
},
{
  id: 1140,
  Title: " How to implement a search bar with Tailwind?",
  answer: "Create a search bar using input and button elements styled with Tailwind.",
  Sample: "Customize its appearance using utility classes.",
  code: `<div className="flex space-x-2">
<input className="border border-gray-300 p-2 rounded" type="text" placeholder="Search..." />
<button className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
</div>`
},
{
  id: 1141,
  Title: " How to create an accordion component?",
  answer: "Use Tailwind's transition and hidden utilities to create an accordion.",
  Sample: "Control visibility using state management.",
  code: `<div>
<button className="bg-gray-200 w-full text-left p-4">Toggle</button>
<div className="hidden">
<p>Accordion content goes here.</p>
</div>
</div>`
},
{
  id: 1142,
  Title: " How to create a sticky header?",
  answer: "Use fixed positioning to create a sticky header with Tailwind.",
  Sample: "Make it responsive with utility classes.",
  code: `<header className="fixed top-0 w-full bg-white shadow">Header Content</header>`
},
{
  id: 1143,
  Title: " How to create a sidebar?",
  answer: "Create a sidebar using flex and fixed positioning utilities.",
  Sample: "Customize it with background colors.",
  code: `<aside className="fixed left-0 top-0 w-64 h-full bg-gray-800 text-white">Sidebar</aside>`
},
{
  id: 1144,
  Title: " How to create a notification banner?",
  answer: "Use fixed positioning and background utilities for a notification banner.",
  Sample: "Style it for different notification types.",
  code: `<div className="fixed top-0 w-full bg-red-500 text-white p-4">This is a notification</div>`
},
{
  id: 1145,
  Title: " How to implement a toggle switch?",
  answer: "Create a toggle switch using input and label styled with Tailwind.",
  Sample: "Control its state using JavaScript.",
  code: `<label className="inline-flex items-center">
<input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
<span className="ml-2">Toggle me</span>
</label>`
},
{
  id: 1146,
  Title: " How to use Tailwind with Vue.js?",
  answer: "Integrate Tailwind CSS in your Vue.js project by following the installation steps.",
  Sample: "Include Tailwind in your main entry file.",
  code: `// main.js
import Vue from 'vue';
import App from './App.vue';
import 'tailwindcss/tailwind.css';

new Vue({
render: h => h(App),
}).$mount('#app');`
},
{
  id: 1147,
  Title: " How to create a countdown timer?",
  answer: "Use Tailwind to style a countdown timer component.",
  Sample: "Control the display using JavaScript.",
  code: `<div className="text-2xl font-bold">10:00</div>`
},
{
  id: 1148,
  Title: " How to create a progress bar?",
  answer: "Style a progress bar using divs and Tailwind utilities.",
  Sample: "Animate its width based on progress.",
  code: `<div className="w-full bg-gray-200">
<div className="bg-blue-500 h-2" style={{ width: '50%' }}></div>
</div>`
},
{
  id: 1149,
  Title: " How to create a timeline?",
  answer: "Use flex and positioning utilities to create a timeline layout.",
  Sample: "Style it with different colors for events.",
  code: `<div className="relative">
<div className="absolute left-1/2 transform -translate-x-1/2 h-full border border-gray-300"></div>
<div className="flex justify-start">
<div className="bg-blue-500 text-white p-2 rounded-full">Event 1</div>
</div>
</div>`
},
{
  id: 1150,
  Title: " How to create a loading skeleton?",
  answer: "Use Tailwind classes to create a loading skeleton effect.",
  Sample: "Animate it for a better user experience.",
  code: `<div className="animate-pulse bg-gray-300 h-12 w-full rounded-md"></div>`
},
{
  id: 1151,
  Title: " How to use Tailwind CSS for dark mode?",
  answer: "Enable dark mode by setting the mode in tailwind.config.js and using dark variant classes.",
  Sample: "This allows you to define styles for dark mode.",
  code: `// tailwind.config.js
module.exports = {
darkMode: 'class',
};`
},
{
  id: 1152,
  Title: " How to integrate Tailwind with Laravel?",
  answer: "Install Tailwind CSS in your Laravel project via npm and configure it in your webpack.mix.js.",
  Sample: "Use Tailwind classes in your Blade templates.",
  code: `// webpack.mix.js
mix.js('resources/js/app.js', 'public/js')
.postCss('resources/css/app.css', 'public/css', [
   require('tailwindcss'),
]);`
},
{
  id: 1153,
  Title: " What is the purpose of the MAX() function?",
  answer: "MAX() returns the largest value of a specified column.",
  Sample: "SELECT MAX(column) FROM table_name;",
  code: `SELECT MAX(salary) FROM employees;`
},
{
  id: 1154,
  Title: " What does the MIN() function do?",
  answer: "MIN() returns the smallest value of a specified column.",
  Sample: "SELECT MIN(column) FROM table_name;",
  code: `SELECT MIN(salary) FROM employees;`
},
{
  id: 1155,
  Title: " What is a primary key?",
  answer: "A primary key uniquely identifies each record in a table and must contain unique values.",
  Sample: "CREATE TABLE table_name (id INT PRIMARY KEY, ...);",
  code: ``
},
{
  id: 1156,
  Title: " What is a foreign key?",
  answer: "A foreign key is a field or collection of fields in one table that uniquely identifies a row in another table, creating a link between the two tables.",
  Sample: "FOREIGN KEY (column) REFERENCES other_table(column);",
  code: ``
},
{
  id: 1157,
  Title: " What is a subquery?",
  answer: "A subquery is a query nested inside another query, used to perform operations in multiple steps.",
  Sample: "SELECT * FROM table1 WHERE column = (SELECT column FROM table2);",
  code: `SELECT name FROM employees WHERE salary = (SELECT MAX(salary) FROM employees);`
},
{
  id: 1158,
  Title: " What is the TRUNCATE TABLE command?",
  answer: "TRUNCATE TABLE deletes all records in a table without logging each row deletion, making it faster than DELETE.",
  Sample: "TRUNCATE TABLE table_name;",
  code: `TRUNCATE TABLE employees;`
},
{
  id: 1159,
  Title: " How does the SQL DROP DATABASE command work?",
  answer: "DROP DATABASE deletes a database and all its data permanently.",
  Sample: "DROP DATABASE database_name;",
  code: `DROP DATABASE CompanyDB;`
},
{
  id: 1160,
  Title: " What is an index in SQL?",
  answer: "An index is used to speed up searches and queries on a table, and it is created on columns that are frequently searched.",
  Sample: "CREATE INDEX index_name ON table_name(column);",
  code: `CREATE INDEX idx_salary ON employees(salary);`
},
{
  id: 1161,
  Title: " What is the function of IS NULL?",
  answer: "IS NULL checks for null (empty) values in a column.",
  Sample: "SELECT * FROM table_name WHERE column IS NULL;",
  code: `SELECT * FROM employees WHERE manager_id IS NULL;`
},
{
  id: 1162,
  Title: " What is the use of COUNT() in SQL?",
  answer: "COUNT() returns the number of rows that match a specified criterion.",
  Sample: "SELECT COUNT(*) FROM table_name;",
  code: `SELECT COUNT(*) FROM employees WHERE department = 'Sales';`
},
{
  id: 1163,
  Title: " What is the SQL syntax to create a new database?",
  answer: "CREATE DATABASE is used to create a new database.",
  Sample: "CREATE DATABASE database_name;",
  code: `CREATE DATABASE CompanyDB;`
},
{
  id: 1164,
  Title: " How do you drop a table in SQL?",
  answer: "DROP TABLE removes a table from the database permanently.",
  Sample: "DROP TABLE table_name;",
  code: `DROP TABLE employees;`
},
{
  id: 1165,
  Title: " What is the ALTER TABLE statement?",
  answer: "ALTER TABLE modifies an existing table by adding, deleting, or modifying columns.",
  Sample: "ALTER TABLE table_name ADD column_name datatype;",
  code: `ALTER TABLE employees ADD birth_date DATE;`
},
{
  id: 1166,
  Title: " How does the UNION operator work?",
  answer: "UNION combines the results of two or more SELECT queries without duplicates.",
  Sample: "SELECT column1 FROM table1 UNION SELECT column1 FROM table2;",
  code: ``
},
{
  id: 1167,
  Title: " What does UNION ALL do?",
  answer: "UNION ALL combines the results of two or more SELECT queries, including duplicates.",
  Sample: "",
  code: ``
},
{
  id: 1168,
  Title: " How does the EXISTS keyword work?",
  answer: "EXISTS checks for the existence of rows in a subquery and returns true if the subquery returns one or more rows.",
  Sample: "SELECT column1 FROM table_name WHERE EXISTS (subquery);",
  code: `SELECT name FROM employees WHERE EXISTS (SELECT * FROM departments WHERE departments.id = employees.dept_id);`
},
{
  id: 1169,
  Title: " What is the function of the NOT EXISTS clause?",
  answer: "NOT EXISTS checks for the absence of rows in a subquery and returns true if the subquery returns no rows.",
  Sample: "SELECT column1 FROM table_name WHERE NOT EXISTS (subquery);",
  code: `SELECT name FROM employees WHERE NOT EXISTS (SELECT * FROM projects WHERE projects.employee_id = employees.id);`
},
{
  id: 1170,
  Title: " How does the CASE statement work?",
  answer: "CASE provides conditional logic within SQL queries and returns specified values based on conditions.",
  Sample: "SELECT column, CASE WHEN condition THEN result ELSE result END AS alias FROM table;",
  code: `SELECT name, CASE WHEN age > 18 THEN 'Adult' ELSE 'Minor' END AS age_group FROM employees;`
},

{ id: 1171, Title: "What is Swift?", answer: "Swift is a powerful, open-source programming language developed by Apple for iOS, macOS, watchOS, and tvOS.", Sample: "var greeting = \"Hello, Swift!\"", code: `var greeting = "Hello, Swift!"` },
  
{ id: 1172, Title: "What is a variable in Swift?", answer: "A variable is a storage location to hold data, declared with `var`.", Sample: "var name = 'Swift'", code: `var name = "Swift"` },

{ id: 1173, Title: "Explain if-else statement in Swift.", answer: "Used for conditional branching in Swift.", Sample: "if condition { } else { }", code: `if age > 18 {\n  print("Adult")\n} else {\n  print("Minor")\n}` },

{ id: 1174, Title: "What is a loop in Swift?", answer: "A loop is used to repeat code multiple times.", Sample: "for or while loops", code: `for i in 1...5 {\n  print(i)\n}` },

{ id: 1175, Title: "What is an array in Swift?", answer: "An array is an ordered collection of elements.", Sample: "let arr = [1, 2, 3]", code: `let arr = [1, 2, 3]` },

{ id: 1176, Title: "What is a dictionary in Swift?", answer: "A dictionary is a collection of key-value pairs.", Sample: `let dict = ["name": "Alice", "age": 25]`, code: `let dict = ["name": "Alice", "age": 25]` },

{ id: 1177, Title: "Explain the for-in loop syntax.", answer: "Iterates over a range or collection.", Sample: `for i in 1...5`, code: `for i in 1...5 {\n  print(i)\n}` },

{ id: 1178, Title: "How to define a function in Swift?", answer: "Use `func` keyword followed by function name.", Sample: `func greet(name: String)`, code: `func greet(name: String) {\n  print("Hello, \\(name)!"\n}` },

{ id: 1179, Title: "Explain the while loop.", answer: "Repeats until a condition is false.", Sample: `while condition { }`, code: `var i = 0\nwhile i < 5 {\n  print(i)\n  i += 1\n}` },

{ id: 1180, Title: " What is a class in Swift?", answer: "A class is a blueprint to create objects.", Sample: "class Person", code: `class Person {\n  var name: String\n  init(name: String) {\n    self.name = name\n  }\n}` },

{ id: 1181, Title: " Explain inheritance in Swift.", answer: "A class can inherit properties and methods from another class.", Sample: `class Dog: Animal`, code: `class Dog: Animal {\n  func bark() {\n    print("Woof!")\n  }\n}` },

{ id: 1182, Title: " What is a protocol in Swift?", answer: "A protocol defines a blueprint of methods and properties for a type.", Sample: "protocol Greetable", code: `protocol Greetable {\n  func greet()\n}` },

{ id: 1183, Title: " Explain optional in Swift.", answer: "An optional is a type that may contain a value or nil.", Sample: `var name: String?`, code: `var name: String? = "Alice"` },

{ id: 1184, Title: " What is a closure in Swift?", answer: "A closure is a block of code that can be passed and executed later.", Sample: "{ (parameters) -> ReturnType in statements }", code: `let greet = { (name: String) in\n  print("Hello, \\(name)!"\n}` },

{ id: 1185, Title: " Explain enumerations in Swift.", answer: "An enum defines a common type for a group of related values.", Sample: "enum Direction { case north, south }", code: `enum Direction {\n  case north, south, east, west\n}` },

{ id: 1186, Title: " What is a struct in Swift?", answer: "A struct is a value type that can hold properties and methods.", Sample: "struct Person", code: `struct Person {\n  var name: String\n}` },

{ id: 1187, Title: " Explain the guard statement.", answer: "Guard statement is used for early exits.", Sample: "guard condition else { }", code: `guard age > 18 else {\n  return\n}` },

{ id: 1188, Title: " What are computed properties?", answer: "Computed properties calculate a value rather than store it.", Sample: "var age: Int { }", code: `var age: Int {\n  return 2024 - birthYear\n}` },

{ id: 1189, Title: " Explain lazy properties in Swift.", answer: "A lazy property is initialized only when accessed.", Sample: "lazy var data = [Int]()", code: `lazy var data = [Int]()` },

{ id: 1190, Title: " What is type casting?", answer: "Type casting allows treating an object as an instance of another class or struct.", Sample: "as? or as!", code: `if let animal = pet as? Dog {\n  animal.bark()\n}` },

{ id: 1191, Title: " Explain encapsulation.", answer: "Encapsulation is the bundling of data with the methods that operate on that data.", Sample: "class Car", code: `class Car {\n  private var speed: Int\n}` },

{ id: 1192, Title: " What is a tuple in Swift?", answer: "A tuple groups multiple values into a single compound value.", Sample: "let tuple = (1, 'a')", code: `let tuple = (1, "a")` },

{ id: 1193, Title: " Explain generics in Swift.", answer: "Generics allow writing flexible and reusable functions or types.", Sample: "func swap<T>(_ a: inout T, _ b: inout T)", code: `func swap<T>(_ a: inout T, _ b: inout T) {\n  let temp = a\n  a = b\n  b = temp\n}` },

{ id: 1194, Title: " What are extensions?", answer: "Extensions add functionality to existing classes, structs, or enums.", Sample: "extension Int", code: `extension Int {\n  func square() -> Int {\n    return self * self\n  }\n}` },

{ id: 1195, Title: " Explain map, filter, and reduce functions.", answer: "Higher-order functions for arrays: map transforms, filter filters, and reduce reduces values.", Sample: "[1, 2, 3].map { $0 * 2 }", code: `let doubled = [1, 2, 3].map { $0 * 2 }` },

{ id: 1196, Title: " What is a switch statement?", answer: "Switch is a control statement for checking multiple cases.", Sample: "switch value { case ... }", code: `switch day {\n  case "Monday": print("Start")\n  default: print("Rest")\n}` },

{ id: 1197, Title: " Explain higher-order functions.", answer: "Higher-order functions accept other functions as arguments.", Sample: "map, filter", code: `[1, 2, 3].filter { $0 % 2 == 0 }` },

{ id: 1198, Title: " What is ARC (Automatic Reference Counting)?", answer: "ARC manages memory by tracking and releasing unused instances.", Sample: "No manual memory management required.", code: `class Person {\n  var name: String\n}` },

{ id: 1199, Title: " Explain weak and unowned references.", answer: "Used to avoid retain cycles. Weak is optional, unowned is non-optional.", Sample: "weak var delegate", code: `weak var delegate: SomeDelegate?` },

{ id: 1200, Title: " What are subscripts?", answer: "Subscripts allow accessing elements in a collection with syntax like `object[index]`.", Sample: "array[index]", code: `struct Matrix {\n  subscript(row: Int, col: Int) -> Int {\n    return data[row][col]\n  }\n}` },


{
  id: 1201,
  Title: "What is TypeScript?",
  answer: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript, adding static typing and other features.",
  Sample: "It helps in catching errors during development through type-checking.",
  code: `const message: string = "Hello, TypeScript!";`
},
{
  id: 1202,
  Title: "What are the benefits of using TypeScript?",
  answer: "TypeScript provides optional static typing, interfaces, enums, and advanced tooling, improving developer productivity and code quality.",
  Sample: "Type annotations help to document code better and catch type-related errors early.",
  code: `function add(a: number, b: number): number {
return a + b;
}`
},
{
  id: 1203,
  Title: "How do you declare variables in TypeScript?",
  answer: "You can declare variables using 'let', 'const', or 'var', and specify types using annotations.",
  Sample: "Using 'let' for mutable variables and 'const' for constants helps in maintaining immutability.",
  code: `let age: number = 30;
const name: string = "Alice";`
},
{
  id: 1204,
  Title: "What are interfaces in TypeScript?",
  answer: "Interfaces in TypeScript define a contract for the structure of an object, allowing for better type-checking.",
  Sample: "They help enforce consistent object shapes across your codebase.",
  code: `interface Person {
name: string;
age: number;
}

const user: Person = { name: "Alice", age: 25 };`
},
{
  id: 1205,
  Title: "What is a union type?",
  answer: "A union type allows a variable to hold multiple types. You define it using the pipe (|) symbol.",
  Sample: "This is useful for functions that can accept different types of arguments.",
  code: `function printId(id: number | string) {
console.log("ID: " + id);
}`
},
{
  id: 1206,
  Title: "What are enums in TypeScript?",
  answer: "Enums allow you to define a set of named constants, which can be numeric or string values.",
  Sample: "They improve code readability and maintainability.",
  code: `enum Color {
Red,
Green,
Blue
}

let c: Color = Color.Green;`
},
{
  id: 1207,
  Title: "What is a tuple?",
  answer: "A tuple is a fixed-size array with elements of different types, defined with specific type annotations.",
  Sample: "They can be used to group related data together.",
  code: `let person: [string, number] = ["Alice", 30];`
},
{
  id: 1208,
  Title: "What is type inference?",
  answer: "Type inference is the ability of TypeScript to automatically deduce types based on variable assignments.",
  Sample: "This allows developers to omit type annotations when the types can be inferred.",
  code: `let count = 10; // TypeScript infers count as number`
},
{
  id: 1209,
  Title: "How do you create a function in TypeScript?",
  answer: "Functions can be declared with type annotations for parameters and return types.",
  Sample: "This ensures that the function is called with the correct types.",
  code: `function greet(name: string): string {
return "Hello, " + name;
}`
},
{
  id: 1210,
  Title: " What is the 'any' type?",
  answer: "The 'any' type allows a variable to hold any type of value, disabling type checking.",
  Sample: "It should be used sparingly, as it defeats the purpose of TypeScript.",
  code: `let anything: any = "Hello";
anything = 5;`
},
{
  id: 1211,
  Title: " What are generics in TypeScript?",
  answer: "Generics allow you to create reusable components that can work with any data type.",
  Sample: "They provide type safety while still being flexible.",
  code: `function identity<T>(arg: T): T {
return arg;
}`
},
{
  id: 1212,
  Title: " How do you handle exceptions in TypeScript?",
  answer: "You handle exceptions using try-catch blocks, just like in JavaScript.",
  Sample: "You can throw errors with specific types.",
  code: `try {
throw new Error("An error occurred");
} catch (e) {
console.error(e);
}`
},
{
  id: 1213,
  Title: " What is the difference between 'interface' and 'type'?",
  answer: "Both 'interface' and 'type' can be used to define object shapes, but interfaces can be merged, while types cannot.",
  Sample: "Use interfaces when you need to extend or implement.",
  code: `interface User {
name: string;
}

type Admin = User & { isAdmin: boolean };`
},
{
  id: 1214,
  Title: " How do you create a class in TypeScript?",
  answer: "Classes can be created using the 'class' keyword, and you can specify types for properties and methods.",
  Sample: "You can use access modifiers like public, private, and protected.",
  code: `class Person {
private name: string;

constructor(name: string) {
    this.name = name;
}

public greet() {
    console.log("Hello, " + this.name);
}
}`
},
{
  id: 1215,
  Title: " What are access modifiers in TypeScript?",
  answer: "Access modifiers control the visibility of class members. They are public, private, and protected.",
  Sample: "They help encapsulate class properties and methods.",
  code: `class Animal {
protected species: string;

constructor(species: string) {
    this.species = species;
}
}`
},
{
  id: 1216,
  Title: " How do you type a 'for' loop in TypeScript?",
  answer: "TypeScript allows you to specify the type of variables within a 'for' loop.",
  Sample: "This improves type safety within the loop.",
  code: `for (let i: number = 0; i < 5; i++) {
console.log(i);
} // Output: 0, 1, 2, 3, 4`
},
{
  id: 1217,
  Title: " How does 'forEach' work with types in TypeScript?",
  answer: "'forEach' can have typed callback parameters in TypeScript for type-safe iteration.",
  Sample: "Useful for maintaining type safety with array elements.",
  code: `const numbers: number[] = [1, 2, 3];
numbers.forEach((num: number) => {
console.log(num * 2);
}); // Output: 2, 4, 6`
},
{
  id: 1218,
  Title: " How do you handle complex 'if-else' conditions in TypeScript?",
  answer: "TypeScript's type system allows complex 'if-else' conditions with type-safe variables.",
  Sample: "Use 'if-else' to handle conditions with multiple type-safe variables.",
  code: `const age: number = 25;
const isAdult: boolean = age >= 18;
if (isAdult) {
console.log("Adult");
} else {
console.log("Minor");
}`
},
{
  id: 1219,
  Title: " What is 'map' in JavaScript and how does it differ from 'forEach'?",
  answer: "'map' creates a new array by applying a function to each element, unlike 'forEach', which only iterates.",
  Sample: "Use 'map' when you need a transformed array.",
  code: `const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6]`
},
{
  id: 1220,
  Title: " How do you implement interfaces in classes?",
  answer: "Classes can implement interfaces to ensure they adhere to a specific structure.",
  Sample: "This enforces a contract for the class.",
  code: `interface Drawable {
draw(): void;
}

class Circle implements Drawable {
draw() {
    console.log("Drawing a circle");
}
}`
},
{
  id: 1221,
  Title: " What is the 'never' type?",
  answer: "The 'never' type represents values that never occur, such as a function that always throws an error.",
  Sample: "It indicates that a function does not return anything.",
  code: `function throwError(): never {
throw new Error("An error occurred");
}`
},
{
  id: 1222,
  Title: " What are namespaces in TypeScript?",
  answer: "Namespaces are a way to group related code and avoid naming collisions.",
  Sample: "They can encapsulate functions, classes, and interfaces.",
  code: `namespace Geometry {
export class Circle {
    constructor(public radius: number) {}
}
}`
},
{
  id: 1223,
  Title: " What is the purpose of type assertions?",
  answer: "Type assertions allow you to override TypeScript's inferred type, asserting a specific type instead.",
  Sample: "This can be useful when you are certain about the type of a value.",
  code: `let value: any = "Hello";
let strLength: number = (value as string).length;`
},
{
  id: 1224,
  Title: " How do you use type guards?",
  answer: "Type guards allow you to narrow down types in conditional statements.",
  Sample: "This helps in making your code safer.",
  code: `function isString(value: any): value is string {
return typeof value === 'string';
}` 
},
{
  id: 1225,
  Title: " What is the 'readonly' modifier?",
  answer: "The 'readonly' modifier makes properties immutable, preventing them from being changed.",
  Sample: "It enhances code safety and prevents accidental changes.",
  code: `interface Point {
readonly x: number;
readonly y: number;
}`
},
{
  id: 1226,
  Title: " How do you create a union of interfaces?",
  answer: "You can create a union of interfaces to define a variable that can be one of several types.",
  Sample: "This is useful for functions that accept multiple types.",
  code: `interface Dog {
bark(): void;
}

interface Cat {
meow(): void;
}

function speak(animal: Dog | Cat) {
if ('bark' in animal) {
    animal.bark();
} else {
    animal.meow();
}
}`
},
{
  id: 1227,
  Title: " What is a Mapped Type?",
  answer: "Mapped types allow you to create new types by transforming existing ones.",
  Sample: "They are useful for creating variations of types.",
  code: `type Readonly<T> = {
readonly [K in keyof T]: T[K];
};`
},
{
  id: 1228,
  Title: " What is the 'keyof' operator?",
  answer: "The 'keyof' operator creates a union of string literal types representing the keys of an object.",
  Sample: "This allows for better type safety when accessing object properties.",
  code: `interface Person {
name: string;
age: number;
}

type PersonKeys = keyof Person; // "name" | "age"`
},
{
  id: 1229,
  Title: " What are conditional types?",
  answer: "Conditional types allow for defining types based on a condition, using the 'extends' keyword.",
  Sample: "This provides a powerful way to create dynamic types.",
  code: `type IsString<T> = T extends string ? "Yes" : "No";`
},
{
  id: 1230,
  Title: " What is a default parameter?",
  answer: "Default parameters allow you to specify default values for function parameters.",
  Sample: "They simplify function calls when default values are sufficient.",
  code: `function greet(name: string = "Guest") {
console.log("Hello, " + name);
}`
},
{
  id: 1231,
  Title: " How do you declare an overloaded function?",
  answer: "You can declare overloaded functions by defining multiple function signatures.",
  Sample: "The implementation can be a single function that handles all cases.",
  code: `function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
return a + b;
}`
},
{
  id: 1232,
  Title: " What is the 'this' type?",
  answer: "'this' type refers to the type of the current context within a function.",
  Sample: "It allows for better type inference in methods.",
  code: `class Counter {
count: number = 0;

increment(): this {
    this.count++;
    return this;
}
}`
},
{
  id: 1233,
  Title: " How do you work with promises in TypeScript?",
  answer: "Promises in TypeScript are similar to JavaScript, but you can specify types for resolved and rejected values.",
  Sample: "This helps in type-checking asynchronous code.",
  code: `function fetchData(): Promise<string> {
return new Promise((resolve) => {
    resolve("Data fetched");
});
}`
},
{
  id: 1234,
  Title: " What is the purpose of 'async' and 'await'?",
  answer: "'async' and 'await' are used for writing asynchronous code in a more readable way.",
  Sample: "They help avoid callback hell.",
  code: `async function getData() {
const data = await fetchData();
console.log(data);
}`
},
{
  id: 1235,
  Title: " How do you define a namespace?",
  answer: "Namespaces are defined using the 'namespace' keyword and can encapsulate related code.",
  Sample: "They help organize code and avoid name collisions.",
  code: `namespace MathUtils {
export function add(a: number, b: number): number {
    return a + b;
}
}`
},
{
  id: 1236,
  Title: " What is module augmentation?",
  answer: "Module augmentation allows you to add new members to existing modules.",
  Sample: "This is useful for extending libraries.",
  code: `declare module "my-module" {
export function newFunction(): void;
}`
},
{
  id: 1237,
  Title: " How do you use the 'export' keyword?",
  answer: "The 'export' keyword is used to expose variables, functions, or classes from a module.",
  Sample: "This allows other modules to import and use them.",
  code: `export const PI = 3.14;`
},
{
  id: 1238,
  Title: " What is the 'import' keyword?",
  answer: "The 'import' keyword is used to bring in variables, functions, or classes from other modules.",
  Sample: "It helps in modularizing code.",
  code: `import { PI } from './math';`
},
{
  id: 1239,
  Title: " What is a callable type?",
  answer: "Callable types define the type of a function, specifying its parameters and return type.",
  Sample: "This allows for better type-checking of function arguments.",
  code: `type MyFunction = (a: number, b: number) => number;`
},
{
  id: 1240,
  Title: " How do you define a literal type?",
  answer: "Literal types allow you to specify exact values that a variable can hold.",
  Sample: "This enhances type safety.",
  code: `type Direction = "left" | "right";`
},
{
  id: 1241,
  Title: " What is the purpose of the 'override' modifier?",
  answer: "The 'override' modifier ensures that a method in a derived class overrides a method in its base class.",
  Sample: "This provides compile-time checking.",
  code: `class Base {
greet() {}
}

class Derived extends Base {
override greet() {
    console.log("Hello from Derived");
}
}`
},
{
  id: 1242,
  Title: " How do you use the 'infer' keyword?",
  answer: "The 'infer' keyword is used in conditional types to infer types within the true branch.",
  Sample: "This allows for dynamic type inference.",
  code: `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;`
},
{
  id: 1243,
  Title: " What are decorators in TypeScript?",
  answer: "Decorators are a special kind of declaration that can be attached to a class or method to modify its behavior.",
  Sample: "They enable meta-programming in TypeScript.",
  code: `function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
console.log(propertyKey);
}

class Example {
@log
method() {}
}`
},
{
  id: 1244,
  Title: " What is the 'void' type?",
  answer: "The 'void' type represents the absence of a value, typically used as a return type for functions that do not return anything.",
  Sample: "It indicates that a function does not produce a value.",
  code: `function log(message: string): void {
console.log(message);
}`
},
{
  id: 1245,
  Title: " What is the 'instanceof' operator?",
  answer: "The 'instanceof' operator checks whether an object is an instance of a specific class or interface.",
  Sample: "It can be used for runtime type checking.",
  code: `if (myObject instanceof MyClass) {
// Do something
}`
},
{
  id: 1246,
  Title: " How do you create a private class member?",
  answer: "You can create private members in a class using the 'private' access modifier.",
  Sample: "Private members are not accessible outside the class.",
  code: `class Secret {
private password: string;

constructor(password: string) {
    this.password = password;
}
}`
},



{
  id: 1247,
  Title: " What is the COALESCE function?",
  answer: "COALESCE returns the first non-null value in a list of arguments.",
  Sample: "SELECT COALESCE(column1, column2, ...) FROM table_name;",
  code: `SELECT COALESCE(middle_name, first_name, 'Unknown') AS name FROM employees;`
},
{
  id: 1248,
  Title: " What does the LIKE operator do?",
  answer: "LIKE is used to search for a specified pattern in a column using wildcards.",
  Sample: "SELECT * FROM table_name WHERE column LIKE pattern;",
  code: `SELECT * FROM employees WHERE name LIKE 'J%';`
},
{ id: 1249, Title: " Explain Codable in Swift.", answer: "The `Codable` protocol enables easy encoding and decoding for data types, especially with JSON.", Sample: "struct User: Codable { }", code: `struct User: Codable {\n  var name: String\n  var age: Int\n}` },

{ id: 1250, Title: " What is multithreading with GCD?", answer: "Grand Central Dispatch (GCD) allows concurrent and asynchronous code execution.", Sample: "DispatchQueue.global().async", code: `DispatchQueue.global().async {\n  // Background task\n}` },

{ id: 1251, Title: " What is a dispatch queue?", answer: "A dispatch queue manages tasks for concurrent or serial execution.", Sample: "DispatchQueue.main.async", code: `DispatchQueue.global().async {\n  // Background task\n}` },

{ id: 1252, Title: " What is optional chaining in Swift?", answer: "Optional chaining allows you to call properties, methods, and subscripts on optionals that might currently be nil.", Sample: "user?.profile?.email", code: `let email = user?.profile?.email` },

{ id: 1253, Title: " What is a singleton pattern?", answer: "Singleton is a design pattern that restricts a class to a single instance.", Sample: "class Singleton", code: `class Singleton {\n  static let shared = Singleton()\n  private init() {}\n}` },

{ id: 1254, Title: " Explain `defer` in Swift.", answer: "`defer` executes a block of code when the current scope is exiting, useful for cleanup tasks.", Sample: "defer { closeFile() }", code: `func openFile() {\n  defer { closeFile() }\n  // Code to read file\n}` },

{ id: 1255, Title: " What is a custom initializer?", answer: "A custom initializer allows you to initialize an instance with specific values or logic.", Sample: "init(name: String)", code: `class Person {\n  var name: String\n  init(name: String) {\n    self.name = name\n  }\n}` },

{ id: 1256, Title: " Explain error handling in Swift.", answer: "Swift uses `do-catch` for handling errors with `throw` for throwing errors.", Sample: "do { } catch { }", code: `do {\n  try someFunction()\n} catch {\n  print("Error occurred: \\(error)")\n}` },

{ id: 1257, Title: " What are type aliases in Swift?", answer: "A type alias provides an alternative name for an existing type, useful for clarity.", Sample: "typealias Speed = Double", code: `typealias Speed = Double\nlet maxSpeed: Speed = 120.0` },

{ id: 1258, Title: " Explain property observers in Swift.", answer: "Property observers like `willSet` and `didSet` observe and respond to changes in property values.", Sample: "var age: Int { didSet { } }", code: `var age: Int = 0 {\n  didSet {\n    print("Age changed to \\(age)")\n  }\n}` },

{ id: 1259, Title: " What is a higher-order function in Swift?", answer: "Higher-order functions like `map`, `filter`, and `reduce` take functions as parameters or return functions.", Sample: "array.map { }", code: `let numbers = [1, 2, 3]\nlet doubled = numbers.map { $0 * 2 }` },


{
  id: 1260,
  Title: "What is Kotlin?",
  answer: "Kotlin is a modern programming language that runs on the Java Virtual Machine (JVM). It is designed to be fully interoperable with Java and aims to improve developer productivity with a concise syntax, type inference, and powerful features.",
  Sample: "A simple Kotlin program that prints 'Hello, World!'.",
  code: `fun main() {\n    println("Hello, World!")\n}`
},
{
  id: 1261,
  Title: "What are the main features of Kotlin?",
  answer: "Kotlin features include null safety, extension functions, data classes, coroutines for asynchronous programming, and higher-order functions, making it expressive and safe.",
  Sample: "Using a data class in Kotlin.",
  code: `data class User(val name: String, val age: Int)`
},
 {
  id: 1262,
  Title: " How to handle multiple exceptions in Kotlin?",
  answer: "You can catch multiple exceptions in a single catch block using the when expression.",
  Sample: "Handling multiple exceptions.",
  code: `try {\n    riskyOperation()\n} catch (e: IOException) {\n    println("IO Exception")\n} catch (e: Exception) {\n    println("General Exception")\n}`
},
{
  id: 1263,
  Title: "How to declare a variable in Kotlin?",
  answer: "In Kotlin, you can declare variables using val for read-only variables and var for mutable variables.",
  Sample: "Declaring variables in Kotlin.",
  code: `val name: String = "John"\nvar age: Int = 30`
},
{
  id: 1264,
  Title: "What is a data class in Kotlin?",
  answer: "A data class in Kotlin is a class that is primarily used to hold data. It automatically generates standard methods like equals(), hashCode(), and toString().",
  Sample: "Defining a data class.",
  code: `data class Point(val x: Int, val y: Int)`
},
{
  id: 1265,
  Title: " How to handle null safety in Kotlin?",
  answer: "Kotlin has built-in null safety features that prevent null pointer exceptions. You can use ? to define nullable types.",
  Sample: "Using nullable types in Kotlin.",
  code: `var name: String? = null`
},
{
  id: 1266,
  Title: " What are extension functions in Kotlin?",
  answer: "Extension functions allow you to add new functionality to existing classes without modifying their source code.",
  Sample: "Creating an extension function.",
  code: `fun String.lastChar(): Char = this[this.length - 1]`
},
{
  id: 1267,
  Title: " How to create a function in Kotlin?",
  answer: "Functions in Kotlin are declared using the fun keyword, followed by the function name and parameters.",
  Sample: "Defining a simple function.",
  code: `fun add(a: Int, b: Int): Int {\n    return a + b\n}`
},
{
  id: 1268,
  Title: " What are higher-order functions in Kotlin?",
  answer: "Higher-order functions are functions that take other functions as parameters or return them.",
  Sample: "Using a higher-order function.",
  code: `fun operate(a: Int, b: Int, operation: (Int, Int) -> Int): Int {\n    return operation(a, b)\n}`
},
{
  id: 1269,
  Title: " What are coroutines in Kotlin?",
  answer: "Coroutines are a Kotlin feature that simplifies asynchronous programming by allowing you to write non-blocking code sequentially.",
  Sample: "Defining a coroutine.",
  code: `import kotlinx.coroutines.*\n\nfun main() = runBlocking {\n    launch {\n        delay(1000L)\n        println("World!")\n    }\n    println("Hello")\n}`
},
{
  id: 1270,
  Title: " How to use collections in Kotlin?",
  answer: "Kotlin provides powerful collection libraries that support immutable and mutable collections.",
  Sample: "Creating and manipulating a list.",
  code: `val numbers = listOf(1, 2, 3)\nval doubled = numbers.map { it * 2 }`
},
{
  id: 1271,
  Title: " What is the purpose of lateinit in Kotlin?",
  answer: "lateinit is used to declare a non-null variable that will be initialized later. It can only be used with mutable properties.",
  Sample: "Using lateinit to initialize a variable.",
  code: `lateinit var name: String`
},
{
  id: 1272,
  Title: " How to create an interface in Kotlin?",
  answer: "Interfaces in Kotlin can contain abstract methods and method implementations. Classes can implement multiple interfaces.",
  Sample: "Defining an interface.",
  code: `interface Drivable {\n    fun drive()\n}`
},
{
  id: 1273,
  Title: " What is a companion object in Kotlin?",
  answer: "A companion object allows you to define members that can be accessed without an instance of the class, similar to static members in Java.",
  Sample: "Creating a companion object.",
  code: `class MyClass {\n    companion object {\n        fun create(): MyClass = MyClass()\n    }\n}`
},
{
    "id": 1274,
    "Title": " How to handle exceptions in Kotlin?",
    "answer": "Kotlin uses try-catch blocks for exception handling. You can also define finally blocks.",
    "Sample": "Using try-catch for exception handling.",
    "code": "try {\n    val result = riskyFunction()\n} catch (e: Exception) {\n    println(\"Error: ${e.message}\")\n}"
  },
{
  id: 1275,
  Title: " What is the difference between == and === in Kotlin?",
  answer: "== checks for structural equality (value equality), while === checks for referential equality (reference equality).",
  Sample: "Comparing objects in Kotlin.",
  code: `val a = String("Hello")\nval b = String("Hello")\nprintln(a == b)  // true\nprintln(a === b) // false`
},
{
  id: 1276,
  Title: " How to create a sealed class in Kotlin?",
  answer: "Sealed classes restrict class hierarchies and can only be subclassed within the same file.",
  Sample: "Defining a sealed class.",
  code: `sealed class Result\nclass Success(val data: String) : Result()\nclass Failure(val error: String) : Result()`
},
{
  id: 1277,
  Title: " How to use when expression in Kotlin?",
  answer: "The when expression is a powerful alternative to if-else chains and can match values and types.",
  Sample: "Using when to evaluate a variable.",
  code: `when (x) {\n    1 -> println("One")\n    2 -> println("Two")\n    else -> println("Unknown")\n}`
},
{
  id: 1278,
  Title: " How to implement inheritance in Kotlin?",
  answer: "Classes in Kotlin are final by default. Use the open keyword to allow inheritance.",
  Sample: "Creating a subclass in Kotlin.",
  code: `open class Animal\nclass Dog : Animal()`
},
{
  id: 1279,
  Title: " What are inline functions in Kotlin?",
  answer: "Inline functions help to reduce the overhead of higher-order functions by inserting the function body at the call site.",
  Sample: "Defining an inline function.",
  code: `inline fun runOperation(operation: () -> Unit) {\n    operation()\n}`
},
{
  id: 1280,
  Title: " How to use the by keyword for delegation in Kotlin?",
  answer: "The by keyword allows you to delegate the implementation of an interface to another object.",
  Sample: "Using property delegation.",
  code: `class Delegate {\n    operator fun getValue(thisRef: Any?, property: KProperty<*>): String {\n        return "Delegated Value"\n    }\n}\nclass Example {\n    var p: String by Delegate()\n}`
},
{
  id: 1281,
  Title: " How to create a lambda expression in Kotlin?",
  answer: "Lambda expressions are defined using curly braces and can take parameters and return values.",
  Sample: "Creating a simple lambda expression.",
  code: `val square: (Int) -> Int = { x -> x * x }\nprintln(square(4)) // Outputs 16`
},
{
  id: 1282,
  Title: " What is the use of object keyword in Kotlin?",
  answer: "The object keyword is used to declare an anonymous class or a singleton.",
  Sample: "Creating a singleton object.",
  code: `object Singleton {\n    fun doSomething() { println("Doing something!") }\n}`
},
{
  id: 1283,
  Title: " How to use the override keyword in Kotlin?",
  answer: "The override keyword is used to indicate that a method overrides a method from a superclass.",
  Sample: "Overriding a method in a subclass.",
  code: `open class Base { open fun greet() { println("Hello from Base") } }\nclass Derived : Base() { override fun greet() { println("Hello from Derived") } }`
},
{
  id: 1284,
  Title: " How to define a primary constructor in Kotlin?",
  answer: "In Kotlin, you can define a primary constructor in the class header.",
  Sample: "Defining a primary constructor.",
  code: `class Person(val name: String, var age: Int)`
},
{
  id: 1285,
  Title: " How to create a secondary constructor in Kotlin?",
  answer: "Secondary constructors are defined using the constructor keyword and can provide additional initialization.",
  Sample: "Defining a secondary constructor.",
  code: `class Person(val name: String) {\n    var age: Int\n    constructor(name: String, age: Int) : this(name) {\n        this.age = age\n    }\n}`
},
{
  id: 1286,
  Title: " How to work with JSON in Kotlin?",
  answer: "Kotlin can work with JSON using libraries like Gson or kotlinx.serialization.",
  Sample: "Using Gson to parse JSON.",
  code: `import com.google.gson.Gson\nval json = """{"name":"John","age":30}"""\nval person = Gson().fromJson(json, Person::class.java)`
},
{
  id: 1287,
  Title: " How to use the require function in Kotlin?",
  answer: "The require function is used to check preconditions in Kotlin functions.",
  Sample: "Using require to validate input.",
  code: `fun setAge(age: Int) {\n    require(age > 0) { "Age must be positive" }\n}`
},
{
  id: 1288,
  Title: " What is the use of lazy in Kotlin?",
  answer: "lazy is used to initialize a property lazily, meaning it will only be initialized when accessed for the first time.",
  Sample: "Using lazy initialization.",
  code: `val lazyValue: String by lazy { println("Computed!")\n    "Hello" }`
},
{
  id: 1289,
  Title: " How to implement generics in Kotlin?",
  answer: "Generics allow you to write flexible and reusable code. Use angle brackets to define generic types.",
  Sample: "Creating a generic class.",
  code: `class Box<T>(val value: T)\nval box = Box(42)`
},
{
  id: 121290,
  Title: " What is the purpose of this keyword in Kotlin?",
  answer: "this refers to the current instance of the class, and can also be used to disambiguate between class properties and parameters.",
  Sample: "Using this in a constructor.",
  code: `class Person(val name: String) {\n    fun greet() { println("Hello, my name is $name") }\n}`
},
{
  id: 1291,
  Title: " How to use the as keyword in Kotlin?",
  answer: "The as keyword is used for type casting in Kotlin.",
  Sample: "Casting an object to a different type.",
  code: `val obj: Any = "Hello"\nval str: String = obj as String`
},
{
  id: 1292,
  Title: " What is typealias in Kotlin?",
  answer: "A typealias provides an alternative name for a type, making the code more readable.",
  Sample: "Creating a typealias.",
  code: `typealias Name = String`
},
{
  id: 1293,
  Title: " How to use the in operator in Kotlin?",
  answer: "The in operator is used to check if a value is present in a range or a collection.",
  Sample: "Using in with a range.",
  code: `if (x in 1..10) { println("x is in the range") }`
},
{
  id: 1294,
  Title: " What are annotations in Kotlin?",
  answer: "Annotations are metadata that provide information about the program. They can be used to mark classes, functions, properties, etc.",
  Sample: "Defining a custom annotation.",
  code: `@Target(AnnotationTarget.CLASS)\nannotation class MyAnnotation`
},
{
  id: 1295,
  Title: " How to create a custom exception in Kotlin?",
  answer: "Custom exceptions are created by extending the Exception class.",
  Sample: "Defining a custom exception.",
  code: `class MyException(message: String) : Exception(message)`
},
{
  id: 1296,
  Title: " How to use the suspend keyword in Kotlin?",
  answer: "suspend is used to define a function that can be paused and resumed, typically used in coroutines.",
  Sample: "Defining a suspend function.",
  code: `suspend fun fetchData() { /* network call */ }`
},
{
  id: 1297,
  Title: " What is the use of @JvmStatic annotation in Kotlin?",
  answer: "The @JvmStatic annotation makes a companion object method callable as a static method from Java.",
  Sample: "Using @JvmStatic in a companion object.",
  code: `class MyClass {\n    companion object {\n        @JvmStatic\n        fun staticMethod() { }\n    }\n}`
},
{
  id: 1298,
  Title: " How to use the @Deprecated annotation in Kotlin?",
  answer: "The @Deprecated annotation marks a method or class as outdated and suggests an alternative.",
  Sample: "Marking a method as deprecated.",
  code: `@Deprecated("Use newMethod instead")\nfun oldMethod() { }`
},
{
  id: 1299,
  Title: " What is sealed interface in Kotlin?",
  answer: "A sealed interface restricts the implementations to a specific set of classes, ensuring type safety.",
  Sample: "Defining a sealed interface.",
  code: `sealed interface Shape\nclass Circle(val radius: Double) : Shape\nclass Square(val side: Double) : Shape`
},
{
  id: 1300,
  Title: " How to implement a generic function in Kotlin?",
  answer: "Generic functions can accept parameters of any type, defined using angle brackets.",
  Sample: "Creating a generic function.",
  code: `fun <T> printValue(value: T) { println(value) }`
},
{
  id: 1301,
  Title: "What is Django?",
  answer: "Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. It follows the model-template-view (MTV) architectural pattern and encourages the use of reusable code and the DRY (Don't Repeat Yourself) principle.",
  Sample: "Creating a simple Django project and a view.",
  code: `# Create a new Django project\ndjango-admin startproject myproject\n\n# Create a new app\npython manage.py startapp myapp\n\n# Define a simple view in myapp/views.py\nfrom django.http import HttpResponse\n\ndef home(request):\n    return HttpResponse('Hello, Django!')`
},
  {
    id: 1302,
    Title: "What are Django models?",
    answer: "Django models are classes that define the structure of your database tables. Each model maps to a single table in the database.",
    Sample: "A simple model representing a book.",
    code: `class Book(models.Model): title = models.CharField(max_length=100) author = models.CharField(max_length=100)`
  },
  {
    id: 1303,
    Title: "How do you define URL patterns in Django?",
    answer: "In Django, URL patterns are defined using the `urlpatterns` list, where each URL pattern is associated with a view.",
    Sample: "Basic URL configuration linking a path to a view.",
    code: `urlpatterns = [ path('home/', views.home, name='home') ]`
  },
  {
    id: 1304,
    Title: "What is Django ORM?",
    answer: "Django ORM (Object-Relational Mapping) allows developers to interact with the database using Python code rather than raw SQL.",
    Sample: "Example of querying the database using Django ORM.",
    code: `Book.objects.filter(author="Author Name")`
  },
  {
    id: 1305,
    Title: " What are Django views?",
    answer: "Views are Python functions or classes that handle requests and return responses, often rendering templates with dynamic content.",
    Sample: "A simple Django view that renders a template.",
    code: `def home(request): return render(request, 'home.html')`
  },
  {
    id: 1306,
    Title: " What is Django's template language?",
    answer: "Django's template language allows dynamic content to be rendered in HTML files using template tags and variables.",
    Sample: "Using Django template syntax to display a variable.",
    code: `<p>{{ book.title }}</p>`
  },
  {
    id: 1307,
    Title: " How do you create forms in Django?",
    answer: "Django provides a `forms` module to create and manage HTML forms easily.",
    Sample: "A form to capture a user's name.",
    code: `class NameForm(forms.Form): name = forms.CharField(label='Your name', max_length=100)`
  },
  {
    id: 1308,
    Title: " What are Django migrations?",
    answer: "Migrations are Django's way of propagating changes made to models into the database schema.",
    Sample: "Creating migrations after defining a model.",
    code: `python manage.py makemigrations`
  },
  {
    id: 1309,
    Title: " How do you create a superuser in Django?",
    answer: "A superuser is created using the `createsuperuser` command, which allows access to the Django admin panel.",
    Sample: "Creating a superuser from the command line.",
    code: `python manage.py createsuperuser`
  },
  {
    id: 1310,
    Title: " What is the Django Admin?",
    answer: "The Django Admin is an interface that allows developers to manage and view database records without writing SQL.",
    Sample: "Registering a model to be displayed in the Django Admin.",
    code: `admin.site.register(Book)`
  },
  {
    id: 1311,
    Title: " How do you use Django's built-in authentication system?",
    answer: "Django provides a comprehensive authentication system, including login, logout, and password management.",
    Sample: "A simple login view using Django's authentication system.",
    code: `from django.contrib.auth import authenticate, login`
  },
  {
    id: 1312,
    Title: " What is Django REST Framework (DRF)?",
    answer: "Django REST Framework is a toolkit for building Web APIs using Django models, views, and serializers.",
    Sample: "Creating a serializer for a model.",
    code: `class BookSerializer(serializers.ModelSerializer): class Meta: model = Book fields = '__all__'`
  },
  {
    id: 1313,
    Title: " How do you handle static files in Django?",
    answer: "Static files like CSS and JavaScript are managed through Django's static file system.",
    Sample: "Referencing a static file in a Django template.",
    code: `{% load static %} <link rel="stylesheet" href="{% static 'css/style.css' %}">`
  },
  {
    id: 1314,
    Title: " What are Django middlewares?",
    answer: "Middlewares are components that process requests and responses globally before they reach views or after views process them.",
    Sample: "Adding a middleware to settings.",
    code: `MIDDLEWARE = ['django.middleware.security.SecurityMiddleware']`
  },
  {
    id: 1315,
    Title: " How does Django handle sessions?",
    answer: "Django's session framework lets you store user-specific data in a database or cookies, using a session ID to identify each session.",
    Sample: "Storing a value in the session.",
    code: `request.session['key'] = 'value'`
  },
  {
    id: 1316,
    Title: " What is the purpose of Django signals?",
    answer: "Django signals are a way to allow decoupled applications to get notified when certain actions occur elsewhere in the framework.",
    Sample: "Using a signal to execute code after a model is saved.",
    code: `from django.db.models.signals import post_save`
  },
  {
    id: 1317,
    Title: " How do you send emails in Django?",
    answer: "Django provides an email-sending API that allows sending emails easily from views.",
    Sample: "Sending a simple email in Django.",
    code: `from django.core.mail import send_mail`
  },
  {
    id: 1318,
    Title: " What are QuerySets in Django?",
    answer: "QuerySets represent collections of database queries that can retrieve, filter, and manipulate data from the database.",
    Sample: "Filtering a queryset based on a condition.",
    code: `Book.objects.filter(author="Author Name")`
  },
  {
    id: 1319,
    Title: " How do you use class-based views in Django?",
    answer: "Class-based views are a type of view in Django that provides a more object-oriented approach to handling requests.",
    Sample: "A basic class-based view for listing objects.",
    code: `from django.views.generic import ListView`
  },
  {
    id: 1320,
    Title: " What is Django's CSRF protection?",
    answer: "Django uses CSRF (Cross-Site Request Forgery) tokens to protect POST requests from unauthorized submissions.",
    Sample: "Including a CSRF token in a form.",
    code: `{% csrf_token %}`
  },
  {
    id: 1321,
    Title: " How do you use Django's file upload capabilities?",
    answer: "Django provides a straightforward way to handle file uploads through forms and models.",
    Sample: "File upload model field.",
    code: `file = models.FileField(upload_to='uploads/')`
  },
  {
    id: 1322,
    Title: " What is the Django Shell?",
    answer: "The Django shell is an interactive console where you can execute Python code within the context of Django.",
    Sample: "Starting the Django shell.",
    code: `python manage.py shell`
  },
  {
    id: 1323,
    Title: " How do you create a custom manager in Django?",
    answer: "Custom managers allow you to add additional query methods to your models.",
    Sample: "Defining a custom manager for a model.",
    code: `class BookManager(models.Manager): def available_books(self): return self.filter(available=True)`
  },
  {
    id: 1324,
    Title: " What is the purpose of Django's migrations?",
    answer: "Migrations track changes to your models and apply those changes to the database.",
    Sample: "Creating and applying migrations.",
    code: `python manage.py makemigrations && python manage.py migrate`
  },
  {
    id: 1325,
    Title: " How does Django's validation work?",
    answer: "Django's forms and models have built-in validation for fields, which can be extended by defining custom validation.",
    Sample: "Adding custom validation to a form field.",
    code: `def clean_name(self): name = self.cleaned_data.get('name')`
  },
  {
    id: 1326,
    Title: " How do you handle custom error pages in Django?",
    answer: "Django allows customization of error pages like 404, 500, etc., by defining templates for each status code.",
    Sample: "Creating a 404.html template for 'Page not found' error.",
    code: `# In templates/404.html`
  },
  {
    id: 1327,
    Title: " What are Django mixins?",
    answer: "Mixins are a way to add reusable functionality to class-based views.",
    Sample: "Using a LoginRequiredMixin to protect a view.",
    code: `from django.contrib.auth.mixins import LoginRequiredMixin`
  },
  {
    id: 1328,
    Title: " How to use Django's management commands?",
    answer: "Django's management commands allow you to create custom commands for tasks.",
    Sample: "Creating a custom management command.",
    code: `class Command(BaseCommand): help = 'My custom command'`
  },
  {
    id: 1329,
    Title: " How to deploy a Django project?",
    answer: "Django projects can be deployed to servers like Heroku, AWS, and DigitalOcean, often requiring configurations for databases and static files.",
    Sample: "Example setup for Heroku deployment.",
    code: `# Procfile web: gunicorn projectname.wsgi`
  },
  {
    id: 1330,
    Title: " How does Django handle signals?",
    answer: "Django signals allow decoupled applications to get notified when certain actions occur.",
    Sample: "Using signals to execute code after saving a model.",
    code: `from django.db.models.signals import post_save`
  },
  {
    id: 1331,
    Title: " How do you configure settings in Django?",
    answer: "Django settings are configured in the settings.py file, where you can set database credentials, middleware, etc.",
    Sample: "Setting up a database connection in Django.",
    code: `DATABASES = { 'default': { 'ENGINE': 'django.db.backends.sqlite3' } }`
  },
  {
    id: 1332,
    Title: " What are migrations in Django?",
    answer: "Migrations propagate changes to database schema defined in Django models.",
    Sample: "Creating a migration.",
    code: `python manage.py makemigrations`
  },
  {
    id: 1333,
    Title: " How does Django handle authentication?",
    answer: "Django's built-in authentication system handles user authentication and authorization.",
    Sample: "Logging in a user in Django.",
    code: `from django.contrib.auth import login`
  },
  {
    id: 1334,
    Title: " How to use Django forms?",
    answer: "Django forms make it easy to create, validate, and process form data.",
    Sample: "Creating a simple form.",
    code: `class UserForm(forms.Form): name = forms.CharField()`
  },
  {
    id: 1335,
    Title: " How to use foreign keys in Django?",
    answer: "Foreign keys represent relationships between models in Django.",
    Sample: "Creating a foreign key relationship.",
    code: `author = models.ForeignKey(Author, on_delete=models.CASCADE)`
  },
  {
    id: 1336,
    Title: " How to use ManyToManyField in Django?",
    answer: "The ManyToManyField represents many-to-many relationships between models.",
    Sample: "Defining a many-to-many relationship in Django.",
    code: `tags = models.ManyToManyField(Tag)`
  },
  {
    id: 1337,
    Title: " How does Django handle file uploads?",
    answer: "Django handles file uploads via form fields and model fields for FileField or ImageField.",
    Sample: "Defining a file upload model.",
    code: `class Document(models.Model): upload = models.FileField()`
  },
  {
    id: 1338,
    Title: " How to handle database transactions in Django?",
    answer: "Django provides atomic transactions to ensure all operations within a block succeed or none are applied.",
    Sample: "Using atomic transactions in Django.",
    code: `from django.db import transaction`
  },
  {
    id: 1339,
    Title: " What is Django's caching framework?",
    answer: "Django has a caching framework that allows caching parts of the application.",
    Sample: "Configuring cache settings.",
    code: `CACHES = { 'default': { 'BACKEND': 'django.core.cache.backends.locmem.LocMemCache' } }`
  },
  {
    id: 1340,
    Title: " How to handle JSON responses in Django?",
    answer: "Django provides JsonResponse to send JSON data as a response.",
    Sample: "Returning a JSON response.",
    code: `from django.http import JsonResponse return JsonResponse({'message': 'Hello'})`
  },
  {
    id: 1341,
    Title: " How to use context processors in Django?",
    answer: "Context processors add context to all templates without passing data explicitly.",
    Sample: "Adding a custom context processor.",
    code: `# In settings TEMPLATES = [{ 'OPTIONS': { 'context_processors': [ 'myapp.context_processors.my_processor' ] } }]`
  },
  {
    id: 1342,
    Title: " How to create reusable templates in Django?",
    answer: "Django allows creating reusable templates by using `{% include %}`.",
    Sample: "Including a header template in a base template.",
    code: `{% include 'header.html' %}`
  },
  {
    id: 1343,
    Title: " How to manage static files in Django?",
    answer: "Static files such as CSS and JavaScript are stored in `static` directories, and are served with `collectstatic`.",
    Sample: "Collecting static files for deployment.",
    code: `python manage.py collectstatic`
  },
  {
    id: 1344,
    Title: " How to handle exceptions in Django?",
    answer: "Django provides middleware and custom exception handling in views to handle errors.",
    Sample: "Raising an HTTP 404 error.",
    code: `from django.http import Http404 raise Http404("Page not found")`
  },
  {
    id: 1345,
    Title: " How to optimize database queries in Django?",
    answer: "Using select_related and prefetch_related to optimize database queries.",
    Sample: "Optimizing queries with select_related.",
    code: `Book.objects.select_related('author').all()`
  },
  {
    id: 1346,
    Title: " How to set up Django for multiple environments?",
    answer: "Use separate settings files for different environments like development and production.",
    Sample: "Settings configuration for production.",
    code: `# In settings module ALLOWED_HOSTS = ['yourdomain.com']`
  },
  {
    id: 1347,
    Title: " How to implement pagination in Django?",
    answer: "Django provides a Paginator class for paginating querysets.",
    Sample: "Paginating a list of items in a view.",
    code: `from django.core.paginator import Paginator`
  },
  {
    id: 1348,
    Title: " How to handle JSON Web Tokens (JWT) in Django?",
    answer: "Using a package like django-rest-framework-jwt to manage JWT authentication.",
    Sample: "Using JWT authentication in Django.",
    code: `from rest_framework_jwt.authentication import JSONWebTokenAuthentication`
  },
  {
    id: 1349,
    Title: " How to implement custom error handling in Django?",
    answer: "Custom error handling can be implemented by creating custom middleware or views.",
    Sample: "Creating a custom 500 error page.",
    code: `# In templates/500.html`
  },
  {
    id: 1350,
    Title: ". How to send notifications in Django?",
    answer: "Using Django signals, you can send notifications after events, like sending an email after a user signs up.",
    Sample: "Sending an email notification after a user registers.",
    code: `@receiver(post_save, sender=User)`
  },
     {
      id: 1351,
      Title: "What is Next.js?",
      answer: "Next.js is a React framework that enables features like server-side rendering, static site generation, and API routes.",
      Sample: "Creating a basic Next.js page",
      code: `// pages/index.tsx
  export default function Home() {
    return (
      <div>
        <h1>Welcome to Next.js!</h1>
      </div>
    )
  }`,
      category: 'components'
    },
    {
      id: 1352,
      Title: "How to implement dynamic routing in Next.js?",
      answer: "Next.js supports dynamic routes using square brackets [] in the file name.",
      Sample: "Creating a dynamic route for blog posts",
      code: `// pages/posts/[id].tsx
  export default function Post({ params }) {
    const { id } = params;
    return <h1>Post: {id}</h1>
  }`,
      category: 'routing'
    },
    {
      id: 1353,
      Title: "How to handle data fetching in Next.js?",
      answer: "Next.js provides several methods for data fetching including getStaticProps, getServerSideProps, and client-side fetching.",
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
      category: 'data fetching'
    },
    {
      id: 1354,
      Title: "How to optimize images in Next.js?",
      answer: "Next.js provides an Image component for automatic image optimization, including lazy loading and resizing.",
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
      category: 'optimization'
    },
    {
      id: 1355,
      Title: "How to implement client-side navigation?",
      answer: "Next.js provides the Link component for client-side navigation, allowing seamless transitions between pages.",
      Sample: "Using the Link component",
      code: `import Link from 'next/link';
  
  export default function Navigation() {
    return (
      <nav>
        <Link href="/about">About</Link>
      </nav>
    );
  }`,
      category: 'routing'
    },
    {
      id: 1356,
      Title: "How to create API routes in Next.js?",
      answer: "API routes in Next.js are created in the 'pages/api' directory and allow building serverless APIs.",
      Sample: "Creating an API route",
      code: `// pages/api/hello.ts
  export default function handler(req, res) {
    res.status(200).json({ message: 'Hello, world!' });
  }`,
      category: 'api'
    },
    {
      id: 1357,
      Title: "How to use environment variables in Next.js?",
      answer: "Environment variables can be defined in .env.local file and accessed using process.env.",
      Sample: "Using environment variables",
      code: `// .env.local
  NEXT_PUBLIC_API_URL=https://api.example.com
  
  // pages/example.tsx
  export default function Example() {
    return <div>{process.env.NEXT_PUBLIC_API_URL}</div>;
  }`,
      category: 'environment'
    },
    {
      id: 1358,
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
      category: 'state management'
    },
    {
      id: 1359,
      Title: "How to deploy a Next.js application?",
      answer: "Next.js apps can be deployed on platforms like Vercel, Netlify, or any Node.js-compatible server.",
      Sample: "Deploying on Vercel",
      code: `// Simply push your Next.js project to GitHub and import it into Vercel.
  vercel --prod`,
      category: 'deployment'
    },
    {
      id: 1360,
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
      category: 'seo'
    },
    {
      id: 1361,
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
      category: 'data fetching'
    },
    {
      id: 1362,
      Title: "How to handle 404 pages in Next.js?",
      answer: "Create a custom 404 page by adding a `pages/404.tsx` file.",
      Sample: "Custom 404 page",
      code: `// pages/404.tsx
  export default function Custom404() {
    return <h1>404 - Page Not Found</h1>;
  }`,
      category: 'error handling'
    },
    {
      id: 1363,
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
      category: 'data fetching'
    },
    {
      id: 1364,
      Title: "How to use middleware in Next.js?",
      answer: "Middleware in Next.js can be used for tasks like authentication or logging.",
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
      category: 'middleware'
    },
    {
      id: 1365,
      Title: "How to use TypeScript in Next.js?",
      answer: "Next.js has built-in support for TypeScript. Add a tsconfig.json file and start using TypeScript.",
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
      category: 'typescript'
    },
    {
      id: 1366,
      Title: "How to create nested layouts in Next.js?",
      answer: "Nested layouts can be implemented using a combination of higher-order components or by wrapping pages in layouts.",
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
      category: 'layout'
    },
    {
      id: 1367,
      Title: "How to add CSS in Next.js?",
      answer: "You can use CSS Modules, global CSS, or styled-components in Next.js.",
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
      category: 'styling'
    },
    {
      id: 1368,
      Title: "How to use Tailwind CSS in Next.js?",
      answer: "Install Tailwind CSS, configure it, and include its styles in the project.",
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
      category: 'styling'
    },
    {
      id: 1369,
      Title: "How to pre-render pages with data?",
      answer: "Next.js supports pre-rendering with data using getStaticProps and getServerSideProps.",
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
      category: 'data fetching'
    },
    {
      id: 1370,
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
      category: 'configuration'
    },
    {
      id: 1371,
      Title: "How to handle authentication in Next.js?",
      answer: "Authentication can be implemented using libraries like NextAuth.js.",
      Sample: "Using NextAuth.js",
      code: `// pages/api/auth/[...nextauth].ts
  import NextAuth from 'next-auth';
  
  export default NextAuth({
    providers: [
      // Add providers here
    ],
  });`,
      category: 'authentication'
    },
    {
      id: 1372,
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
      category: 'testing'
    },
    {
      id: 1373,
      Title: "How to configure environment variables in Next.js?",
      answer: "Environment variables are managed using a `.env` file.",
      Sample: "Setting environment variables",
      code: `// .env.local
  NEXT_PUBLIC_API_URL=https://api.example.com
  
  // pages/index.tsx
  export default function Home() {
    return <div>{process.env.NEXT_PUBLIC_API_URL}</div>;
  }`,
      category: 'configuration'
    },
    {
      id: 1374,
      Title: "How to add API routes in Next.js?",
      answer: "Next.js API routes can be created in the `pages/api` directory.",
      Sample: "Creating an API route",
      code: `// pages/api/hello.ts
  export default function handler(req, res) {
    res.status(200).json({ message: "Hello, API!" });
  }`,
      category: 'api'
    },
    {
      id: 1375,
      Title: "How to implement middleware with Edge functions?",
      answer: "Edge middleware runs before a request is processed, enabling fine-grained control.",
      Sample: "Edge middleware example",
      code: `// middleware.ts
  import { NextResponse } from 'next/server';
  
  export function middleware(req) {
    const response = NextResponse.next();
    response.headers.set('X-Custom-Header', 'MyHeaderValue');
    return response;
  }`,
      category: 'middleware'
    },
    {
      id: 1376,
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
      category: 'routing'
    },
    {
      id: 1377,
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
      category: 'configuration'
    },
    {
      id: 1378,
      Title: "How to set up internationalization (i18n) in Next.js?",
      answer: "Next.js provides built-in support for internationalized routing.",
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
      category: 'configuration'
    },
    {
      id: 1379,
      Title: "How to optimize for performance in Next.js?",
      answer: "Use built-in features like image optimization, code-splitting, and lazy loading.",
      Sample: "Lazy loading components",
      code: `// pages/index.tsx
  import dynamic from 'next/dynamic';
  
  const LazyComponent = dynamic(() => import('../components/LazyComponent'));
  
  export default function Home() {
    return <LazyComponent />;
  }`,
      category: 'optimization'
    },
    {
      id: 1380,
      Title: "How to deploy a Next.js application?",
      answer: "Next.js can be deployed to platforms like Vercel, AWS, or Netlify.",
      Sample: "Vercel deployment",
      code: `// Install Vercel CLI
  // Run the following commands:
  npm install -g vercel
  vercel deploy`,
      category: 'deployment'
    },
    {
      id: 1381,
      Title: "How to enable strict mode in Next.js?",
      answer: "Strict mode can be enabled in the next.config.js file.",
      Sample: "Enabling React Strict Mode",
      code: `// next.config.js
  module.exports = {
    reactStrictMode: true,
  };`,
      category: 'configuration'
    },
    {
      id: 1382,
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
      category: 'styling'
    },
    {
      id: 1383,
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
      category: 'analytics'
    },
    {
      id: 1384,
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
      category: 'data fetching'
    },
    {
      id: 1385,
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
      category: 'graphql'
    },
    {
      id: 1386,
      Title: "How to use TypeScript in Next.js?",
      answer: "Next.js has built-in support for TypeScript, and it automatically sets up necessary configurations.",
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
      category: 'typescript'
    },
    {
      id: 1387,
      Title: "How to handle error pages in Next.js?",
      answer: "You can create custom error pages like 404.js or _error.js in the `pages` directory.",
      Sample: "Custom 404 page",
      code: `// pages/404.tsx
  export default function Custom404() {
    return <h1>404 - Page Not Found</h1>;
  }`,
      category: 'error handling'
    },
    {
      id: 1388,
      Title: "How to configure static file serving?",
      answer: "Static files are served from the `public` folder in a Next.js project.",
      Sample: "Using static files",
      code: `// Place an image in the public folder (e.g., /public/image.png)
  // Access the file in your components
  export default function Home() {
    return <img src="/image.png" alt="Example" />;
  }`,
      category: 'configuration'
    },
    {
      id: 1389,
      Title: "How to create a custom App component?",
      answer: "A custom App component allows you to initialize pages and add global styles.",
      Sample: "Custom App example",
      code: `// pages/_app.tsx
  import '../styles/global.css';
  
  export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }`,
      category: 'configuration'
    },
    {
      id: 1390,
      Title: "How to prefetch data for links?",
      answer: "Next.js automatically prefetches data for links using the Link component.",
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
      category: 'optimization'
    },
    {
      id: 1391,
      Title: "How to implement authentication in Next.js?",
      answer: "You can use libraries like NextAuth.js for authentication in Next.js.",
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
      category: 'authentication'
    },
    {
      id: 1392,
      Title: "How to use fallback in getStaticPaths?",
      answer: "The `fallback` option in `getStaticPaths` determines the behavior for paths not generated at build time.",
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
      category: 'data fetching'
    },
    {
      id: 1393,
      Title: "How to use CSS Modules in Next.js?",
      answer: "Next.js supports CSS Modules out of the box for modular and scoped styling.",
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
      category: 'styling'
    },
    {
      id: 1394,
      Title: "How to implement custom layouts?",
      answer: "Custom layouts can be defined by wrapping components in a specific layout component.",
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
      category: 'configuration'
    },
    {
      id: 1395,
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
      category: 'styling'
    },


];

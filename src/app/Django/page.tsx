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

const Django: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const array: Question[] = [
    {
        id: 1,
        Title: "2. What is Django?",
        answer: "Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. It follows the model-template-view (MTV) architectural pattern and encourages the use of reusable code and the DRY (Don't Repeat Yourself) principle.",
        Sample: "Creating a simple Django project and a view.",
        code: `# Create a new Django project\ndjango-admin startproject myproject\n\n# Create a new app\npython manage.py startapp myapp\n\n# Define a simple view in myapp/views.py\nfrom django.http import HttpResponse\n\ndef home(request):\n    return HttpResponse('Hello, Django!')`
    },
        {
          id: 2,
          Title: "2. What are Django models?",
          answer: "Django models are classes that define the structure of your database tables. Each model maps to a single table in the database.",
          Sample: "A simple model representing a book.",
          code: `class Book(models.Model): title = models.CharField(max_length=100) author = models.CharField(max_length=100)`
        },
        {
          id: 3,
          Title: "3. How do you define URL patterns in Django?",
          answer: "In Django, URL patterns are defined using the `urlpatterns` list, where each URL pattern is associated with a view.",
          Sample: "Basic URL configuration linking a path to a view.",
          code: `urlpatterns = [ path('home/', views.home, name='home') ]`
        },
        {
          id: 4,
          Title: "4. What is Django ORM?",
          answer: "Django ORM (Object-Relational Mapping) allows developers to interact with the database using Python code rather than raw SQL.",
          Sample: "Example of querying the database using Django ORM.",
          code: `Book.objects.filter(author="Author Name")`
        },
        {
          id: 5,
          Title: "5. What are Django views?",
          answer: "Views are Python functions or classes that handle requests and return responses, often rendering templates with dynamic content.",
          Sample: "A simple Django view that renders a template.",
          code: `def home(request): return render(request, 'home.html')`
        },
        {
          id: 6,
          Title: "6. What is Django's template language?",
          answer: "Django's template language allows dynamic content to be rendered in HTML files using template tags and variables.",
          Sample: "Using Django template syntax to display a variable.",
          code: `<p>{{ book.title }}</p>`
        },
        {
          id: 7,
          Title: "7. How do you create forms in Django?",
          answer: "Django provides a `forms` module to create and manage HTML forms easily.",
          Sample: "A form to capture a user's name.",
          code: `class NameForm(forms.Form): name = forms.CharField(label='Your name', max_length=100)`
        },
        {
          id: 8,
          Title: "8. What are Django migrations?",
          answer: "Migrations are Django's way of propagating changes made to models into the database schema.",
          Sample: "Creating migrations after defining a model.",
          code: `python manage.py makemigrations`
        },
        {
          id: 9,
          Title: "9. How do you create a superuser in Django?",
          answer: "A superuser is created using the `createsuperuser` command, which allows access to the Django admin panel.",
          Sample: "Creating a superuser from the command line.",
          code: `python manage.py createsuperuser`
        },
        {
          id: 10,
          Title: "10. What is the Django Admin?",
          answer: "The Django Admin is an interface that allows developers to manage and view database records without writing SQL.",
          Sample: "Registering a model to be displayed in the Django Admin.",
          code: `admin.site.register(Book)`
        },
        {
          id: 11,
          Title: "11. How do you use Django's built-in authentication system?",
          answer: "Django provides a comprehensive authentication system, including login, logout, and password management.",
          Sample: "A simple login view using Django's authentication system.",
          code: `from django.contrib.auth import authenticate, login`
        },
        {
          id: 12,
          Title: "12. What is Django REST Framework (DRF)?",
          answer: "Django REST Framework is a toolkit for building Web APIs using Django models, views, and serializers.",
          Sample: "Creating a serializer for a model.",
          code: `class BookSerializer(serializers.ModelSerializer): class Meta: model = Book fields = '__all__'`
        },
        {
          id: 13,
          Title: "13. How do you handle static files in Django?",
          answer: "Static files like CSS and JavaScript are managed through Django's static file system.",
          Sample: "Referencing a static file in a Django template.",
          code: `{% load static %} <link rel="stylesheet" href="{% static 'css/style.css' %}">`
        },
        {
          id: 14,
          Title: "14. What are Django middlewares?",
          answer: "Middlewares are components that process requests and responses globally before they reach views or after views process them.",
          Sample: "Adding a middleware to settings.",
          code: `MIDDLEWARE = ['django.middleware.security.SecurityMiddleware']`
        },
        {
          id: 15,
          Title: "15. How does Django handle sessions?",
          answer: "Django's session framework lets you store user-specific data in a database or cookies, using a session ID to identify each session.",
          Sample: "Storing a value in the session.",
          code: `request.session['key'] = 'value'`
        },
        {
          id: 16,
          Title: "16. What is the purpose of Django signals?",
          answer: "Django signals are a way to allow decoupled applications to get notified when certain actions occur elsewhere in the framework.",
          Sample: "Using a signal to execute code after a model is saved.",
          code: `from django.db.models.signals import post_save`
        },
        {
          id: 17,
          Title: "17. How do you send emails in Django?",
          answer: "Django provides an email-sending API that allows sending emails easily from views.",
          Sample: "Sending a simple email in Django.",
          code: `from django.core.mail import send_mail`
        },
        {
          id: 18,
          Title: "18. What are QuerySets in Django?",
          answer: "QuerySets represent collections of database queries that can retrieve, filter, and manipulate data from the database.",
          Sample: "Filtering a queryset based on a condition.",
          code: `Book.objects.filter(author="Author Name")`
        },
        {
          id: 19,
          Title: "19. How do you use class-based views in Django?",
          answer: "Class-based views are a type of view in Django that provides a more object-oriented approach to handling requests.",
          Sample: "A basic class-based view for listing objects.",
          code: `from django.views.generic import ListView`
        },
        {
          id: 20,
          Title: "20. What is Django's CSRF protection?",
          answer: "Django uses CSRF (Cross-Site Request Forgery) tokens to protect POST requests from unauthorized submissions.",
          Sample: "Including a CSRF token in a form.",
          code: `{% csrf_token %}`
        },
        {
          id: 21,
          Title: "21. How do you use Django's file upload capabilities?",
          answer: "Django provides a straightforward way to handle file uploads through forms and models.",
          Sample: "File upload model field.",
          code: `file = models.FileField(upload_to='uploads/')`
        },
        {
          id: 22,
          Title: "22. What is the Django Shell?",
          answer: "The Django shell is an interactive console where you can execute Python code within the context of Django.",
          Sample: "Starting the Django shell.",
          code: `python manage.py shell`
        },
        {
          id: 23,
          Title: "23. How do you create a custom manager in Django?",
          answer: "Custom managers allow you to add additional query methods to your models.",
          Sample: "Defining a custom manager for a model.",
          code: `class BookManager(models.Manager): def available_books(self): return self.filter(available=True)`
        },
        {
          id: 24,
          Title: "24. What is the purpose of Django's migrations?",
          answer: "Migrations track changes to your models and apply those changes to the database.",
          Sample: "Creating and applying migrations.",
          code: `python manage.py makemigrations && python manage.py migrate`
        },
        {
          id: 25,
          Title: "25. How does Django's validation work?",
          answer: "Django's forms and models have built-in validation for fields, which can be extended by defining custom validation.",
          Sample: "Adding custom validation to a form field.",
          code: `def clean_name(self): name = self.cleaned_data.get('name')`
        },
        {
          id: 26,
          Title: "26. How do you handle custom error pages in Django?",
          answer: "Django allows customization of error pages like 404, 500, etc., by defining templates for each status code.",
          Sample: "Creating a 404.html template for 'Page not found' error.",
          code: `# In templates/404.html`
        },
        {
          id: 27,
          Title: "27. What are Django mixins?",
          answer: "Mixins are a way to add reusable functionality to class-based views.",
          Sample: "Using a LoginRequiredMixin to protect a view.",
          code: `from django.contrib.auth.mixins import LoginRequiredMixin`
        },
        {
          id: 28,
          Title: "28. How to use Django's management commands?",
          answer: "Django's management commands allow you to create custom commands for tasks.",
          Sample: "Creating a custom management command.",
          code: `class Command(BaseCommand): help = 'My custom command'`
        },
        {
          id: 29,
          Title: "29. How to deploy a Django project?",
          answer: "Django projects can be deployed to servers like Heroku, AWS, and DigitalOcean, often requiring configurations for databases and static files.",
          Sample: "Example setup for Heroku deployment.",
          code: `# Procfile web: gunicorn projectname.wsgi`
        },
        {
          id: 30,
          Title: "30. How does Django handle signals?",
          answer: "Django signals allow decoupled applications to get notified when certain actions occur.",
          Sample: "Using signals to execute code after saving a model.",
          code: `from django.db.models.signals import post_save`
        },
        {
          id: 31,
          Title: "31. How do you configure settings in Django?",
          answer: "Django settings are configured in the settings.py file, where you can set database credentials, middleware, etc.",
          Sample: "Setting up a database connection in Django.",
          code: `DATABASES = { 'default': { 'ENGINE': 'django.db.backends.sqlite3' } }`
        },
        {
          id: 32,
          Title: "32. What are migrations in Django?",
          answer: "Migrations propagate changes to database schema defined in Django models.",
          Sample: "Creating a migration.",
          code: `python manage.py makemigrations`
        },
        {
          id: 33,
          Title: "33. How does Django handle authentication?",
          answer: "Django's built-in authentication system handles user authentication and authorization.",
          Sample: "Logging in a user in Django.",
          code: `from django.contrib.auth import login`
        },
        {
          id: 34,
          Title: "34. How to use Django forms?",
          answer: "Django forms make it easy to create, validate, and process form data.",
          Sample: "Creating a simple form.",
          code: `class UserForm(forms.Form): name = forms.CharField()`
        },
        {
          id: 35,
          Title: "35. How to use foreign keys in Django?",
          answer: "Foreign keys represent relationships between models in Django.",
          Sample: "Creating a foreign key relationship.",
          code: `author = models.ForeignKey(Author, on_delete=models.CASCADE)`
        },
        {
          id: 36,
          Title: "36. How to use ManyToManyField in Django?",
          answer: "The ManyToManyField represents many-to-many relationships between models.",
          Sample: "Defining a many-to-many relationship in Django.",
          code: `tags = models.ManyToManyField(Tag)`
        },
        {
          id: 37,
          Title: "37. How does Django handle file uploads?",
          answer: "Django handles file uploads via form fields and model fields for FileField or ImageField.",
          Sample: "Defining a file upload model.",
          code: `class Document(models.Model): upload = models.FileField()`
        },
        {
          id: 38,
          Title: "38. How to handle database transactions in Django?",
          answer: "Django provides atomic transactions to ensure all operations within a block succeed or none are applied.",
          Sample: "Using atomic transactions in Django.",
          code: `from django.db import transaction`
        },
        {
          id: 39,
          Title: "39. What is Django's caching framework?",
          answer: "Django has a caching framework that allows caching parts of the application.",
          Sample: "Configuring cache settings.",
          code: `CACHES = { 'default': { 'BACKEND': 'django.core.cache.backends.locmem.LocMemCache' } }`
        },
        {
          id: 40,
          Title: "40. How to handle JSON responses in Django?",
          answer: "Django provides JsonResponse to send JSON data as a response.",
          Sample: "Returning a JSON response.",
          code: `from django.http import JsonResponse return JsonResponse({'message': 'Hello'})`
        },
        {
          id: 41,
          Title: "41. How to use context processors in Django?",
          answer: "Context processors add context to all templates without passing data explicitly.",
          Sample: "Adding a custom context processor.",
          code: `# In settings TEMPLATES = [{ 'OPTIONS': { 'context_processors': [ 'myapp.context_processors.my_processor' ] } }]`
        },
        {
          id: 42,
          Title: "42. How to create reusable templates in Django?",
          answer: "Django allows creating reusable templates by using `{% include %}`.",
          Sample: "Including a header template in a base template.",
          code: `{% include 'header.html' %}`
        },
        {
          id: 43,
          Title: "43. How to manage static files in Django?",
          answer: "Static files such as CSS and JavaScript are stored in `static` directories, and are served with `collectstatic`.",
          Sample: "Collecting static files for deployment.",
          code: `python manage.py collectstatic`
        },
        {
          id: 44,
          Title: "44. How to handle exceptions in Django?",
          answer: "Django provides middleware and custom exception handling in views to handle errors.",
          Sample: "Raising an HTTP 404 error.",
          code: `from django.http import Http404 raise Http404("Page not found")`
        },
        {
          id: 45,
          Title: "45. How to optimize database queries in Django?",
          answer: "Using select_related and prefetch_related to optimize database queries.",
          Sample: "Optimizing queries with select_related.",
          code: `Book.objects.select_related('author').all()`
        },
        {
          id: 46,
          Title: "46. How to set up Django for multiple environments?",
          answer: "Use separate settings files for different environments like development and production.",
          Sample: "Settings configuration for production.",
          code: `# In settings module ALLOWED_HOSTS = ['yourdomain.com']`
        },
        {
          id: 47,
          Title: "47. How to implement pagination in Django?",
          answer: "Django provides a Paginator class for paginating querysets.",
          Sample: "Paginating a list of items in a view.",
          code: `from django.core.paginator import Paginator`
        },
        {
          id: 48,
          Title: "48. How to handle JSON Web Tokens (JWT) in Django?",
          answer: "Using a package like django-rest-framework-jwt to manage JWT authentication.",
          Sample: "Using JWT authentication in Django.",
          code: `from rest_framework_jwt.authentication import JSONWebTokenAuthentication`
        },
        {
          id: 49,
          Title: "49. How to implement custom error handling in Django?",
          answer: "Custom error handling can be implemented by creating custom middleware or views.",
          Sample: "Creating a custom 500 error page.",
          code: `# In templates/500.html`
        },
        {
          id: 50,
          Title: "50. How to send notifications in Django?",
          answer: "Using Django signals, you can send notifications after events, like sending an email after a user signs up.",
          Sample: "Sending an email notification after a user registers.",
          code: `@receiver(post_save, sender=User)`
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
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Django Basics and Concepts</h1>

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

export default Django;
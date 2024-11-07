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

const Jwt: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const array: Question[] = [
    {
      id: 1,
      Title: "1. What is JWT (JSON Web Token)?",
      answer: "JWT is a compact, URL-safe means of representing claims to be transferred between two parties.",
      Sample: "Used for authentication in web applications.",
      code: `const jwt = require('jsonwebtoken');\nconst token = jwt.sign({ userId: 123 }, 'your_secret_key');`
    },
    {
      id: 2,
      Title: "2. What are the components of a JWT?",
      answer: "A JWT consists of three parts: Header, Payload, and Signature.",
      Sample: "Structure of a JWT.",
      code: `const jwt = "header.payload.signature";`
    },
    {
      id: 3,
      Title: "3. How do you create a JWT?",
      answer: "You create a JWT by signing it with a secret key using a library like jsonwebtoken.",
      Sample: "Creating a token for a user.",
      code: `const token = jwt.sign({ username: 'user' }, 'secret_key', { expiresIn: '1h' });`
    },
    {
      id: 4,
      Title: "4. How to verify a JWT?",
      answer: "You can verify a JWT using the same secret key that was used to sign it.",
      Sample: "Verifying a token for user authentication.",
      code: `jwt.verify(token, 'secret_key', (err, decoded) => { if (err) { console.log('Token invalid'); } });`
    },
    {
      id: 5,
      Title: "5. What is Passport.js?",
      answer: "Passport.js is an authentication middleware for Node.js that simplifies the authentication process.",
      Sample: "Integrating Passport.js for user authentication.",
      code: `const passport = require('passport');\napp.use(passport.initialize());`
    },
    {
      id: 6,
      Title: "6. How do you set up Passport.js?",
      answer: "You set it up by configuring strategies, initializing passport, and setting up session management.",
      Sample: "Setting up a local strategy.",
      code: `passport.use(new LocalStrategy((username, password, done) => { ... }));`
    },
    {
      id: 7,
      Title: "7. What is a Passport strategy?",
      answer: "A strategy is a method of authenticating requests, such as local, JWT, or OAuth strategies.",
      Sample: "Using JWT strategy.",
      code: `passport.use(new JwtStrategy({ jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: 'secret_key' }, (jwtPayload, done) => { ... }));`
    },
    {
      id: 8,
      Title: "8. What are sessions in Passport.js?",
      answer: "Sessions are used to persist user authentication state across requests.",
      Sample: "Storing user information in the session.",
      code: `app.use(session({ secret: 'your_secret', resave: false, saveUninitialized: true }));`
    },
    {
      id: 9,
      Title: "9. How to handle user login with Passport.js?",
      answer: "You handle login by using `passport.authenticate()` in your login route.",
      Sample: "Authenticating a user during login.",
      code: `app.post('/login', passport.authenticate('local', { successRedirect: '/dashboard', failureRedirect: '/login' }));`
    },
    {
      id: 10,
      Title: "10. How to protect routes using Passport.js?",
      answer: "You can protect routes by using `passport.authenticate()` as middleware.",
      Sample: "Protecting a dashboard route.",
      code: `app.get('/dashboard', passport.authenticate('jwt', { session: false }), (req, res) => { res.send('Dashboard'); });`
    },
    {
      id: 11,
      Title: "11. What is the purpose of the `passport.serializeUser` method?",
      answer: "This method is used to determine which data of the user should be stored in the session.",
      Sample: "Storing user ID in the session.",
      code: `passport.serializeUser((user, done) => { done(null, user.id); });`
    },
    {
      id: 12,
      Title: "12. What is the purpose of the `passport.deserializeUser` method?",
      answer: "This method is used to retrieve the user information based on the ID stored in the session.",
      Sample: "Finding the user by ID.",
      code: `passport.deserializeUser((id, done) => { User.findById(id, (err, user) => { done(err, user); }); });`
    },
    {
      id: 13,
      Title: "13. How to implement logout with Passport.js?",
      answer: "You can implement logout by using the `req.logout()` method.",
      Sample: "Logging out the user.",
      code: `app.get('/logout', (req, res) => { req.logout(); res.redirect('/'); });`
    },
    {
      id: 14,
      Title: "14. What is the difference between authentication and authorization?",
      answer: "Authentication verifies who you are, while authorization determines what you are allowed to do.",
      Sample: "Example of a user logging in and accessing resources.",
      code: `if (user.isAuthenticated()) { // access resource }`
    },
    {
      id: 15,
      Title: "15. How to set up Google authentication with Passport.js?",
      answer: "You set up Google authentication by using the Google strategy provided by Passport.js.",
      Sample: "Configuring Google OAuth.",
      code: `passport.use(new GoogleStrategy({ clientID: 'GOOGLE_CLIENT_ID', clientSecret: 'GOOGLE_CLIENT_SECRET', callbackURL: '/auth/google/callback' }, (accessToken, refreshToken, profile, done) => { ... }));`
    },
    {
      id: 16,
      Title: "16. How to store JWT in local storage?",
      answer: "You can store JWT in local storage on the client-side for future requests.",
      Sample: "Storing token after successful login.",
      code: `localStorage.setItem('token', token);`
    },
    {
      id: 17,
      Title: "17. How to send JWT in HTTP requests?",
      answer: "You can send JWT in the Authorization header of HTTP requests.",
      Sample: "Setting Authorization header.",
      code: `fetch('/api/protected', { headers: { 'Authorization': 'Bearer ' + token } });`
    },
    {
      id: 18,
      Title: "18. What is token expiration?",
      answer: "Token expiration is a security feature that limits the validity of a JWT.",
      Sample: "Setting token expiration to 1 hour.",
      code: `const token = jwt.sign({ userId: 123 }, 'secret', { expiresIn: '1h' });`
    },
    {
      id: 19,
      Title: "19. How to refresh a JWT?",
      answer: "You can refresh a JWT by issuing a new token when the old one is close to expiration.",
      Sample: "Refreshing token when needed.",
      code: `const newToken = jwt.sign({ userId: 123 }, 'secret', { expiresIn: '1h' });`
    },
    {
      id: 20,
      Title: "20. What is Cross-Site Request Forgery (CSRF)?",
      answer: "CSRF is an attack that tricks the user into submitting a request that they did not intend.",
      Sample: "Preventing CSRF attacks.",
      code: `app.use(csrfProtection);`
    },
    {
      id: 21,
      Title: "21. How to implement CSRF protection in an Express app?",
      answer: "You can implement CSRF protection using the `csurf` middleware.",
      Sample: "Setting up CSRF protection middleware.",
      code: `const csrf = require('csurf');\napp.use(csrf());`
    },
    {
      id: 22,
      Title: "22. What is the purpose of JSON Web Signature (JWS)?",
      answer: "JWS is used to provide integrity and authenticity for JWTs.",
      Sample: "Signing a JWT.",
      code: `const token = jwt.sign(payload, secretKey, { algorithm: 'HS256' });`
    },
    {
      id: 23,
      Title: "23. How to handle authentication errors in Passport.js?",
      answer: "You can handle authentication errors by using custom failure redirects.",
      Sample: "Redirecting on authentication failure.",
      code: `passport.authenticate('local', { failureRedirect: '/login' });`
    },
    {
      id: 24,
      Title: "24. What is the role of the `passport.authenticate()` method?",
      answer: "This method authenticates requests using a specified strategy.",
      Sample: "Authenticating with JWT strategy.",
      code: `app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => { res.send('Protected route'); });`
    },
    {
      id: 25,
      Title: "25. How to check if a user is authenticated in an Express route?",
      answer: "You can check if a user is authenticated using `req.isAuthenticated()`.",
      Sample: "Checking authentication status.",
      code: `if (req.isAuthenticated()) { // user is authenticated }`
    },
    {
      id: 26,
      Title: "26. How to implement role-based access control (RBAC) with Passport.js?",
      answer: "You can implement RBAC by checking user roles in your route handlers.",
      Sample: "Restricting access to admin users.",
      code: `if (req.user.role === 'admin') { // allow access }`
    },
    {
      id: 27,
      Title: "27. How to handle token revocation?",
      answer: "You can handle token revocation by maintaining a blacklist of revoked tokens.",
      Sample: "Revoking a token upon logout.",
      code: `revokedTokens.push(token);`
    },
    {
      id: 28,
      Title: "28. What is the difference between symmetric and asymmetric signing in JWT?",
      answer: "Symmetric signing uses a single secret key, while asymmetric signing uses a public/private key pair.",
      Sample: "Using RSA for asymmetric signing.",
      code: `const privateKey = 'privateKey';\nconst publicKey = 'publicKey';\ntoken = jwt.sign(payload, privateKey, { algorithm: 'RS256' });`
    },
    {
      id: 29,
      Title: "29. How to handle JWT expiration in the client?",
      answer: "You can handle JWT expiration by checking the expiration time before making requests.",
      Sample: "Checking token expiration.",
      code: `if (Date.now() >= exp * 1000) { // token expired }`
    },
    {
      id: 30,
      Title: "30. What are the security best practices for JWT?",
      answer: "Use HTTPS, secure storage, and short expiration times.",
      Sample: "Using HTTPS to secure tokens.",
      code: `const express = require('express');\nconst helmet = require('helmet');\napp.use(helmet());`
    },
    {
      id: 31,
      Title: "31. How to implement password hashing?",
      answer: "You can implement password hashing using libraries like bcrypt.",
      Sample: "Hashing a password before storing it.",
      code: `const bcrypt = require('bcrypt');\nbcrypt.hash(password, 10, (err, hash) => { ... });`
    },
    {
      id: 32,
      Title: "32. What is the role of the `jsonwebtoken` library?",
      answer: "It is a library to sign and verify JWTs.",
      Sample: "Using jsonwebtoken to create a token.",
      code: `const jwt = require('jsonwebtoken');\nconst token = jwt.sign(payload, 'secret');`
    },
    {
      id: 33,
      Title: "33. How to protect against SQL injection when using JWT?",
      answer: "Use prepared statements and ORM libraries to prevent SQL injection.",
      Sample: "Using parameterized queries.",
      code: `db.query('SELECT * FROM users WHERE id = ?', [userId]);`
    },
    {
      id: 34,
      Title: "34. What is the purpose of the `passport.session()` middleware?",
      answer: "It allows Passport to manage user sessions.",
      Sample: "Using session management with Passport.",
      code: `app.use(passport.session());`
    },
    {
      id: 35,
      Title: "35. How to implement user registration with Passport.js?",
      answer: "You can implement registration by hashing passwords and saving user data to the database.",
      Sample: "Registering a new user.",
      code: `app.post('/register', (req, res) => { bcrypt.hash(req.body.password, 10, (err, hash) => { // save user }); });`
    },
    {
      id: 36,
      Title: "36. What is the purpose of `passport.initialize()`?",
      answer: "It initializes Passport for use in your Express application.",
      Sample: "Setting up Passport middleware.",
      code: `app.use(passport.initialize());`
    },
    {
      id: 37,
      Title: "37. What is the difference between `req.user` and `req.session.passport.user`?",
      answer: "`req.user` is populated by Passport with the user object, while `req.session.passport.user` holds the user ID.",
      Sample: "Accessing user information.",
      code: `if (req.isAuthenticated()) { const user = req.user; }`
    },
    {
      id: 38,
      Title: "38. How to implement email verification?",
      answer: "You can implement email verification by sending a verification link to the user's email after registration.",
      Sample: "Sending a verification email.",
      code: `transporter.sendMail({ to: user.email, subject: 'Verify Email', html: '<a href="...">Verify</a>' });`
    },
    {
      id: 39,
      Title: "39. What is the purpose of `passport-remember-me`?",
      answer: "It allows users to stay logged in between sessions by setting a cookie.",
      Sample: "Using remember-me functionality.",
      code: `passport.use(new RememberMeStrategy((token, done) => { ... }));`
    },
    {
      id: 40,
      Title: "40. How to implement two-factor authentication (2FA)?",
      answer: "You can implement 2FA by sending a code to the user's mobile device for verification.",
      Sample: "Sending a 2FA code via SMS.",
      code: `twilioClient.messages.create({ to: phoneNumber, from: twilioNumber, body: 'Your code is: ' + code });`
    },
    {
        id: 41,
        Title: "41. How to implement role-based redirection after login?",
        answer: "You can redirect users based on their roles after successful login.",
        Sample: "Redirecting admins to the admin dashboard.",
        code: `if (req.user.role === 'admin') { res.redirect('/admin'); } else { res.redirect('/dashboard'); }`
      },
      {
        id: 42,
        Title: "42. How to set up CORS for API requests?",
        answer: "Use the cors middleware to allow cross-origin requests.",
        Sample: "Enabling CORS for all routes.",
        code: `const cors = require('cors');\napp.use(cors());`
      },
      {
        id: 43,
        Title: "43. How to implement a logout functionality?",
        answer: "You can implement logout by destroying the session and redirecting the user.",
        Sample: "Logging out a user.",
        code: `app.post('/logout', (req, res) => { req.logout(); res.redirect('/'); });`
      },
      {
        id: 44,
        Title: "44. How to refresh JWT tokens?",
        answer: "You can refresh tokens by issuing a new token when the old one is about to expire.",
        Sample: "Refreshing a token before expiration.",
        code: `if (Date.now() >= exp * 1000 - refreshThreshold) { token = jwt.sign(payload, 'secret', { expiresIn: '1h' }); }`
      },
      {
        id: 45,
        Title: "45. What is the purpose of using environment variables?",
        answer: "Environment variables help to manage sensitive data like API keys securely.",
        Sample: "Using dotenv to load environment variables.",
        code: `require('dotenv').config();\nconst secret = process.env.JWT_SECRET;`
      },
      {
        id: 46,
        Title: "46. How to implement password reset functionality?",
        answer: "You can implement password reset by generating a token and sending it to the user's email.",
        Sample: "Generating a password reset token.",
        code: `const resetToken = jwt.sign({ email: user.email }, 'secret', { expiresIn: '1h' });`
      },
      {
        id: 47,
        Title: "47. How to protect sensitive routes?",
        answer: "You can protect routes by using middleware to check if a user is authenticated.",
        Sample: "Middleware to protect routes.",
        code: `const isAuthenticated = (req, res, next) => { if (req.isAuthenticated()) { return next(); } res.redirect('/login'); };`
      },
      {
        id: 48,
        Title: "48. How to implement user profile updates?",
        answer: "You can implement profile updates by allowing users to edit their information and saving it in the database.",
        Sample: "Updating user profile information.",
        code: `app.post('/profile', (req, res) => { User.findByIdAndUpdate(req.user.id, req.body, (err) => { // handle update }); });`
      },
      {
        id: 49,
        Title: "49. What is the purpose of using HTTPS?",
        answer: "HTTPS secures data in transit by encrypting communication between the client and server.",
        Sample: "Redirecting HTTP to HTTPS.",
        code: `const express = require('express');\napp.use((req, res, next) => { if (req.headers['x-forwarded-proto'] !== 'https') { return res.redirect('https://' + req.headers.host + req.url); } next(); });`
      },
      {
        id: 50,
        Title: "50. How to handle concurrent requests with Passport.js?",
        answer: "You can handle concurrent requests by using sessions and ensuring the session store is set up correctly.",
        Sample: "Handling sessions for concurrent requests.",
        code: `app.use(session({ secret: 'your_secret', resave: false, saveUninitialized: true }));`
      },
      {
        id: 51,
        Title: "51. How to log user activities?",
        answer: "You can log user activities by creating a logging middleware.",
        Sample: "Logging user requests.",
        code: `app.use((req, res, next) => { console.log(req.method + ' ' + req.url); next(); });`
      },
      {
        id: 52,
        Title: "52. What is the purpose of using bcrypt?",
        answer: "Bcrypt is used for hashing passwords to enhance security.",
        Sample: "Hashing a password with bcrypt.",
        code: `const bcrypt = require('bcrypt');\nbcrypt.hash(password, 10, (err, hash) => { // store hash });`
      },
      {
        id: 53,
        Title: "53. How to implement client-side token storage?",
        answer: "You can store tokens in localStorage or sessionStorage on the client side.",
        Sample: "Storing a JWT in localStorage.",
        code: `localStorage.setItem('token', token);`
      },
      {
        id: 54,
        Title: "54. How to set token expiration in JWT?",
        answer: "You can set token expiration by including an expiresIn option when signing the token.",
        Sample: "Setting expiration for a JWT.",
        code: `const token = jwt.sign(payload, 'secret', { expiresIn: '1h' });`
      },
      {
        id: 55,
        Title: "55. How to validate user input during registration?",
        answer: "You can validate user input using libraries like Joi or express-validator.",
        Sample: "Validating registration data.",
        code: `const { body, validationResult } = require('express-validator');\napp.post('/register', [body('email').isEmail(), body('password').isLength({ min: 5 })], (req, res) => { const errors = validationResult(req); if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }); } });`
      },
      {
        id: 56,
        Title: "56. How to implement session expiration?",
        answer: "You can set session expiration by configuring the session store options.",
        Sample: "Setting session expiration.",
        code: `app.use(session({ secret: 'your_secret', cookie: { maxAge: 60000 } }));`
      },
      {
        id: 57,
        Title: "57. What are CSRF tokens, and how to implement them?",
        answer: "CSRF tokens protect against Cross-Site Request Forgery by validating requests.",
        Sample: "Implementing CSRF protection.",
        code: `const csurf = require('csurf');\napp.use(csurf());`
      },
      {
        id: 58,
        Title: "58. How to create a public/private key pair for JWT?",
        answer: "You can generate a key pair using OpenSSL.",
        Sample: "Generating a key pair for signing.",
        code: `openssl genrsa -out private.pem 2048\nopenssl rsa -in private.pem -outform PEM -pubout -out public.pem`
      },
      {
        id: 59,
        Title: "59. How to handle password strength validation?",
        answer: "You can validate password strength using regular expressions.",
        Sample: "Checking password strength.",
        code: `const isValidPassword = (password) => { return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password); };`
      },
      {
        id: 60,
        Title: "60. How to implement account locking after multiple failed login attempts?",
        answer: "You can lock accounts by keeping track of failed login attempts.",
        Sample: "Locking an account after too many failed attempts.",
        code: `if (failedAttempts >= 5) { user.locked = true; user.save(); }`
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
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">JWT Or Passport Session Basics and Concepts</h1>

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

export default Jwt;

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

const Next: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const array: Question[] = [
   
    {
      id: 1,
      Title: "1. What is Mongoose?",
      answer: "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.",
      Sample: "Used for modeling application data.",
      code: `const mongoose = require('mongoose');`
    },
    {
      id: 2,
      Title: "2. How to connect to MongoDB using Mongoose?",
      answer: "You can connect to MongoDB by using the `mongoose.connect()` method.",
      Sample: "Connecting to a MongoDB database.",
      code: `mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });`
    },
    {
      id: 3,
      Title: "3. What is a Mongoose Schema?",
      answer: "A Mongoose schema defines the structure of a document within a collection.",
      Sample: "Defining a user schema.",
      code: `const userSchema = new mongoose.Schema({ name: String, age: Number });`
    },
    {
      id: 4,
      Title: "4. How to create a model from a schema?",
      answer: "You can create a model using `mongoose.model()`.",
      Sample: "Creating a User model.",
      code: `const User = mongoose.model('User', userSchema);`
    },
    {
      id: 5,
      Title: "5. How to save a document to the database?",
      answer: "You can save a document using the `.save()` method on a model instance.",
      Sample: "Saving a new user.",
      code: `const user = new User({ name: 'John', age: 30 });\nuser.save();`
    },
    {
      id: 6,
      Title: "6. How to find documents in a collection?",
      answer: "You can find documents using the `.find()` method.",
      Sample: "Finding all users.",
      code: `User.find({}, (err, users) => { /* Logic */ });`
    },
    {
      id: 7,
      Title: "7. How to update a document in a collection?",
      answer: "You can update a document using the `.updateOne()` method.",
      Sample: "Updating a user's age.",
      code: `User.updateOne({ name: 'John' }, { age: 31 }, (err, res) => { /* Logic */ });`
    },
    {
      id: 8,
      Title: "8. How to delete a document in Mongoose?",
      answer: "You can delete a document using the `.deleteOne()` method.",
      Sample: "Deleting a user.",
      code: `User.deleteOne({ name: 'John' }, (err) => { /* Logic */ });`
    },
    {
      id: 9,
      Title: "9. What are Mongoose Middleware?",
      answer: "Mongoose middleware are functions that are invoked at specific stages of a document's lifecycle.",
      Sample: "Using a pre-save middleware.",
      code: `userSchema.pre('save', function(next) { /* Logic */ next(); });`
    },
    {
      id: 10,
      Title: "10. How to define default values in Mongoose Schema?",
      answer: "You can define default values for fields in a schema.",
      Sample: "Setting a default age.",
      code: `const userSchema = new mongoose.Schema({ name: String, age: { type: Number, default: 18 } });`
    },
    {
      id: 11,
      Title: "11. How to create indexes in Mongoose?",
      answer: "You can create indexes using the `.index()` method in your schema.",
      Sample: "Creating an index on the name field.",
      code: `userSchema.index({ name: 1 });`
    },
    {
      id: 12,
      Title: "12. What is Mongoose population?",
      answer: "Population in Mongoose refers to the ability to reference documents in other collections.",
      Sample: "Populating a user's posts.",
      code: `User.find().populate('posts').exec();`
    },
    {
      id: 13,
      Title: "13. How to implement validation in Mongoose?",
      answer: "You can implement validation using schema properties and built-in validators.",
      Sample: "Validating required fields.",
      code: `const userSchema = new mongoose.Schema({ name: { type: String, required: true } });`
    },
    {
      id: 14,
      Title: "14. What are virtuals in Mongoose?",
      answer: "Virtuals are document properties that are not stored in MongoDB but are computed from other document values.",
      Sample: "Creating a full name virtual.",
      code: `userSchema.virtual('fullName').get(function() { return this.firstName + ' ' + this.lastName; });`
    },
    {
      id: 15,
      Title: "15. How to handle errors in Mongoose?",
      answer: "You can handle errors in Mongoose using callbacks or promises.",
      Sample: "Catching validation errors.",
      code: `user.save().catch(err => { /* Handle error */ });`
    },
    {
      id: 16,
      Title: "16. How to use lean queries in Mongoose?",
      answer: "You can use `.lean()` to return plain JavaScript objects instead of Mongoose documents.",
      Sample: "Performing a lean find operation.",
      code: `User.find().lean().exec((err, users) => { /* Logic */ });`
    },
    {
      id: 17,
      Title: "17. What is the difference between `findOne` and `find`?",
      answer: "`findOne` returns a single document while `find` returns an array of documents.",
      Sample: "Using both methods.",
      code: `User.findOne({ name: 'John' }, (err, user) => { /* Logic */ });`
    },
    {
      id: 18,
      Title: "18. How to paginate results in Mongoose?",
      answer: "You can paginate results using the `skip` and `limit` methods.",
      Sample: "Paginating user results.",
      code: `User.find().skip(10).limit(5).exec();`
    },
    {
      id: 19,
      Title: "19. How to implement soft deletes in Mongoose?",
      answer: "You can implement soft deletes by adding a deleted flag to your schema.",
      Sample: "Soft deleting a user.",
      code: `userSchema.add({ deleted: { type: Boolean, default: false } });`
    },
    {
      id: 20,
      Title: "20. How to use aggregation in Mongoose?",
      answer: "You can use the `.aggregate()` method to perform aggregation operations.",
      Sample: "Aggregating user data.",
      code: `User.aggregate([{ $group: { _id: '$age', count: { $sum: 1 } } }]);`
    },
    {
      id: 21,
      Title: "21. How to create a compound index in Mongoose?",
      answer: "You can create a compound index by passing an object with multiple fields to the `.index()` method.",
      Sample: "Creating a compound index on name and age.",
      code: `userSchema.index({ name: 1, age: 1 });`
    },
    {
      id: 22,
      Title: "22. How to use timestamps in Mongoose?",
      answer: "You can add timestamps to your schema by setting the `timestamps` option to true.",
      Sample: "Adding createdAt and updatedAt fields.",
      code: `const userSchema = new mongoose.Schema({ name: String }, { timestamps: true });`
    },
    {
      id: 23,
      Title: "23. How to define custom validation in Mongoose?",
      answer: "You can define custom validation using a validator function in your schema.",
      Sample: "Validating age.",
      code: `age: { type: Number, validate: { validator: v => v > 18, message: 'Age must be greater than 18' } }`
    },
    {
      id: 24,
      Title: "24. How to handle large datasets in Mongoose?",
      answer: "You can handle large datasets using streaming or the `cursor()` method.",
      Sample: "Streaming user data.",
      code: `User.find().cursor().eachAsync(user => { /* Logic */ });`
    },
    {
      id: 25,
      Title: "25. How to set up a discriminator in Mongoose?",
      answer: "You can use discriminators to create multiple models with different schemas from a single base model.",
      Sample: "Creating an Admin user model.",
      code: `const Admin = User.discriminator('Admin', new mongoose.Schema({ role: String }));`
    },
    {
      id: 26,
      Title: "26. How to use the `populate` method with multiple fields?",
      answer: "You can populate multiple fields in a single query by passing an object to the `populate` method.",
      Sample: "Populating multiple references.",
      code: `User.find().populate('posts comments').exec();`
    },
    {
      id: 27,
      Title: "27. How to work with subdocuments in Mongoose?",
      answer: "You can define subdocuments within a schema to create nested structures.",
      Sample: "Defining a schema with subdocuments.",
      code: `const postSchema = new mongoose.Schema({ title: String, comments: [commentSchema] });`
    },
    {
      id: 28,
      Title: "28. How to use the `lean` option in queries?",
      answer: "Using the `lean` option will return plain JavaScript objects instead of Mongoose documents.",
      Sample: "Performing a lean find operation.",
      code: `User.find().lean().exec();`
    },
    {
      id: 29,
      Title: "29. How to use the `updateMany` method?",
      answer: "You can use the `updateMany` method to update multiple documents that match a query.",
      Sample: "Updating all users' age.",
      code: `User.updateMany({}, { age: 25 });`
    },
    {
      id: 30,
      Title: "30. How to validate on update?",
      answer: "You can validate fields during updates by using the `runValidators` option.",
      Sample: "Running validators on an update.",
      code: `User.updateOne({ name: 'John' }, { age: 15 }, { runValidators: true });`
    },
    {
      id: 31,
      Title: "31. What is the purpose of `set` in Mongoose?",
      answer: "The `set` method is used to set a value for a specific path in a document.",
      Sample: "Setting a user's name.",
      code: `user.set('name', 'Alice');`
    },
    {
      id: 32,
      Title: "32. How to use `findByIdAndUpdate`?",
      answer: "You can use `findByIdAndUpdate` to find a document by its ID and update it.",
      Sample: "Updating a user by ID.",
      code: `User.findByIdAndUpdate(userId, { age: 32 });`
    },
    {
      id: 33,
      Title: "33. What are the benefits of using Mongoose?",
      answer: "Mongoose provides a straightforward way to model and manage data, with built-in validation and middleware.",
      Sample: "Easy data management with Mongoose.",
      code: `const mongoose = require('mongoose');`
    },
    {
      id: 34,
      Title: "34. How to use the `aggregate` method?",
      answer: "You can use the `aggregate` method to perform data aggregation operations.",
      Sample: "Aggregating user data by age.",
      code: `User.aggregate([{ $group: { _id: '$age', total: { $sum: 1 } } }]);`
    },
    {
      id: 35,
      Title: "35. How to implement a unique index?",
      answer: "You can implement a unique index to ensure that a field is unique across all documents.",
      Sample: "Creating a unique index on email.",
      code: `userSchema.index({ email: 1 }, { unique: true });`
    },
    {
      id: 36,
      Title: "36. What is the `timestamps` option in Mongoose?",
      answer: "The `timestamps` option automatically adds `createdAt` and `updatedAt` fields to your schema.",
      Sample: "Using the timestamps option.",
      code: `const userSchema = new mongoose.Schema({}, { timestamps: true });`
    },
    {
      id: 37,
      Title: "37. How to work with transactions in Mongoose?",
      answer: "You can work with transactions in Mongoose when using MongoDB 4.0 or later.",
      Sample: "Using a transaction for multiple operations.",
      code: `const session = await mongoose.startSession();\nsession.startTransaction();`
    },
    {
      id: 38,
      Title: "38. How to enable debugging in Mongoose?",
      answer: "You can enable debugging by setting `mongoose.set('debug', true);`.",
      Sample: "Debugging Mongoose operations.",
      code: `mongoose.set('debug', true);`
    },
    {
      id: 39,
      Title: "39. How to handle circular references?",
      answer: "You can handle circular references by using a reference approach with Mongoose.",
      Sample: "Defining circular references in schemas.",
      code: `const parentSchema = new mongoose.Schema({ children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Child' }] });`
    },
    {
      id: 40,
      Title: "40. How to optimize Mongoose queries?",
      answer: "You can optimize queries by using indexes and lean queries.",
      Sample: "Using lean to optimize queries.",
      code: `User.find().lean().exec();`
    },
    {
      id: 41,
      Title: "41. How to set default values in a schema?",
      answer: "You can set default values for schema paths by using the `default` property.",
      Sample: "Setting a default age.",
      code: `const userSchema = new mongoose.Schema({ age: { type: Number, default: 18 } });`
    },
    {
      id: 42,
      Title: "42. How to use virtuals in Mongoose?",
      answer: "Virtuals are properties that do not get persisted in MongoDB but can be used for computed values.",
      Sample: "Creating a virtual property for full name.",
      code: `userSchema.virtual('fullName').get(function() { return this.firstName + ' ' + this.lastName; });`
    },
    {
      id: 43,
      Title: "43. What is the purpose of middleware in Mongoose?",
      answer: "Middleware allows you to perform actions at certain points in the document's lifecycle.",
      Sample: "Using pre-save middleware to hash a password.",
      code: `userSchema.pre('save', function(next) { this.password = hash(this.password); next(); });`
    },
    {
      id: 44,
      Title: "44. How to handle errors in Mongoose?",
      answer: "You can handle errors using try-catch blocks or the callback function of Mongoose methods.",
      Sample: "Catching validation errors.",
      code: `try { await user.save(); } catch (error) { console.error(error); }`
    },
    {
      id: 45,
      Title: "45. How to implement pagination in Mongoose?",
      answer: "You can implement pagination by using the `skip` and `limit` methods.",
      Sample: "Fetching the second page of users.",
      code: `User.find().skip(10).limit(10);`
    },
    {
      id: 46,
      Title: "46. How to remove a document in Mongoose?",
      answer: "You can remove a document using the `remove` or `deleteOne` method.",
      Sample: "Removing a user by ID.",
      code: `User.deleteOne({ _id: userId });`
    },
    {
      id: 47,
      Title: "47. How to use the `populate` method?",
      answer: "The `populate` method is used to replace the specified path in the document with documents from other collections.",
      Sample: "Populating a user's posts.",
      code: `User.find().populate('posts');`
    },
    {
      id: 48,
      Title: "48. How to use aggregation pipeline in Mongoose?",
      answer: "You can use the aggregation pipeline to process data and return computed results.",
      Sample: "Calculating total posts per user.",
      code: `User.aggregate([{ $lookup: { from: 'posts', localField: '_id', foreignField: 'userId', as: 'posts' } }]);`
    },
    {
      id: 49,
      Title: "49. What are compound indexes?",
      answer: "Compound indexes are indexes on multiple fields, improving the performance of queries that filter on those fields.",
      Sample: "Creating a compound index on name and age.",
      code: `userSchema.index({ name: 1, age: -1 });`
    },
    {
      id: 50,
      Title: "50. How to implement soft deletes in Mongoose?",
      answer: "Soft deletes can be implemented by adding a `deleted` boolean field to your schema.",
      Sample: "Marking a user as deleted instead of removing it.",
      code: `userSchema.add({ deleted: { type: Boolean, default: false } });`
    },
    {
      id: 51,
      Title: "51. How to use the `$in` operator in queries?",
      answer: "The `$in` operator allows you to find documents where a field's value matches any value in a specified array.",
      Sample: "Finding users with specific roles.",
      code: `User.find({ role: { $in: ['admin', 'editor'] } });`
    },
    {
      id: 52,
      Title: "52. How to sort query results?",
      answer: "You can sort query results by using the `sort` method.",
      Sample: "Sorting users by age in descending order.",
      code: `User.find().sort({ age: -1 });`
    },
    {
      id: 53,
      Title: "53. How to handle timestamps manually?",
      answer: "You can manually handle timestamps by adding them to your schema and updating them as needed.",
      Sample: "Manually updating a lastModified timestamp.",
      code: `userSchema.add({ lastModified: Date });\nuser.lastModified = Date.now();`
    },
    {
      id: 54,
      Title: "54. What is the `setDefaultsOnInsert` option?",
      answer: "This option allows you to set default values on insertions when using `update` operations.",
      Sample: "Using `setDefaultsOnInsert` in an update.",
      code: `User.updateOne({ _id: userId }, { $set: { age: 30 }, $setOnInsert: { name: 'New User' } }, { upsert: true, setDefaultsOnInsert: true });`
    },
    {
      id: 55,
      Title: "55. How to implement full-text search in Mongoose?",
      answer: "You can implement full-text search by creating a text index on the desired fields.",
      Sample: "Creating a text index on the name and description fields.",
      code: `userSchema.index({ name: 'text', description: 'text' });`
    },
    {
      id: 56,
      Title: "56. How to use the `aggregate` method for lookup?",
      answer: "You can use the `$lookup` stage in aggregation to perform left outer joins.",
      Sample: "Joining users with their orders.",
      code: `User.aggregate([{ $lookup: { from: 'orders', localField: '_id', foreignField: 'userId', as: 'orders' } }]);`
    },
    {
      id: 57,
      Title: "57. How to define a schema with embedded documents?",
      answer: "You can define embedded documents by using a nested schema.",
      Sample: "Embedding addresses in a user schema.",
      code: `const addressSchema = new mongoose.Schema({ street: String, city: String });\nconst userSchema = new mongoose.Schema({ name: String, address: addressSchema });`
    },
    {
      id: 58,
      Title: "58. How to use the `distinct` method?",
      answer: "The `distinct` method returns an array of distinct values for a specified field.",
      Sample: "Finding distinct user roles.",
      code: `User.distinct('role');`
    },
    {
      id: 59,
      Title: "59. How to use Mongoose with TypeScript?",
      answer: "You can use Mongoose with TypeScript by defining interfaces for your models.",
      Sample: "Defining a User interface.",
      code: `interface IUser extends Document { name: string; age: number; }\nconst UserModel = mongoose.model<IUser>('User', userSchema);`
    },
    {
      id: 60,
      Title: "60. How to create a Mongoose model?",
      answer: "You can create a model by compiling a schema using `mongoose.model()`.",
      Sample: "Creating a user model.",
      code: `const UserModel = mongoose.model('User', userSchema);`
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
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Next.js Basics and Concepts</h1>

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

export default Next;

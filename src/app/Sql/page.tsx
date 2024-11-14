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

const Sql: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const array: Question[] = [
    {
        id: 1,
        Title: "1. What is SQL?",
        answer: "SQL (Structured Query Language) is used to communicate with and manipulate relational databases.",
        Sample: "SELECT * FROM table_name;",
        code: `SELECT * FROM employees;`
      },
      {
        id: 2,
        Title: "2. How does the SELECT statement work?",
        answer: "SELECT is used to retrieve data from a database table or view.",
        Sample: "SELECT column1, column2 FROM table_name;",
        code: `SELECT name, age FROM users;`
      },
      {
        id: 3,
        Title: "3. What is the UPDATE statement?",
        answer: "UPDATE is used to modify existing records in a table.",
        Sample: "UPDATE table_name SET column1 = value1 WHERE condition;",
        code: `UPDATE employees SET salary = 50000 WHERE id = 1;`
      },
      {
        id: 4,
        Title: "4. How does the DELETE statement work?",
        answer: "DELETE removes specific records from a table based on a condition.",
        Sample: "DELETE FROM table_name WHERE condition;",
        code: `DELETE FROM users WHERE age < 18;`
      },
      {
        id: 5,
        Title: "5. What is an INNER JOIN?",
        answer: "INNER JOIN returns rows with matching values in both tables.",
        Sample: "SELECT * FROM table1 INNER JOIN table2 ON table1.column = table2.column;",
        code: `SELECT orders.order_id, customers.name FROM orders INNER JOIN customers ON orders.customer_id = customers.id;`
      },
      {
        id: 6,
        Title: "6. What is a LEFT JOIN?",
        answer: "LEFT JOIN returns all rows from the left table and matched rows from the right table. If no match is found, NULL values are returned.",
        Sample: "SELECT * FROM table1 LEFT JOIN table2 ON table1.column = table2.column;",
        code: `SELECT employees.name, departments.dept_name FROM employees LEFT JOIN departments ON employees.dept_id = departments.id;`
      },
      {
        id: 7,
        Title: "7. What is a RIGHT JOIN?",
        answer: "RIGHT JOIN returns all rows from the right table and matched rows from the left table. If no match is found, NULL values are returned.",
        Sample: "SELECT * FROM table1 RIGHT JOIN table2 ON table1.column = table2.column;",
        code: `SELECT employees.name, departments.dept_name FROM employees RIGHT JOIN departments ON employees.dept_id = departments.id;`
      },
      {
        id: 8,
        Title: "8. What is a FULL JOIN?",
        answer: "FULL JOIN returns all rows when there is a match in either table, and NULLs where no match exists.",
        Sample: "SELECT * FROM table1 FULL JOIN table2 ON table1.column = table2.column;",
        code: `SELECT employees.name, departments.dept_name FROM employees FULL JOIN departments ON employees.dept_id = departments.id;`
      },
      {
        id: 9,
        Title: "9. How does the BETWEEN operator work?",
        answer: "BETWEEN is used to filter records within a specific range.",
        Sample: "SELECT * FROM table_name WHERE column BETWEEN value1 AND value2;",
        code: `SELECT * FROM products WHERE price BETWEEN 100 AND 500;`
      },
      {
        id: 10,
        Title: "10. How does the IN operator work?",
        answer: "IN allows multiple values to be specified in a WHERE clause.",
        Sample: "SELECT * FROM table_name WHERE column IN (value1, value2, ...);",
        code: `SELECT * FROM employees WHERE department_id IN (1, 2, 3);`
      },
      {
        id: 11,
        Title: "11. What is the role of the ON clause in SQL joins?",
        answer: "ON specifies the condition for joining tables in SQL.",
        Sample: "SELECT * FROM table1 JOIN table2 ON table1.column = table2.column;",
        code: `SELECT orders.order_id, customers.name FROM orders INNER JOIN customers ON orders.customer_id = customers.id;`
      },
      {
        id: 12,
        Title: "12. How does the AND operator work in SQL?",
        answer: "AND allows multiple conditions to be combined in a SQL query.",
        Sample: "SELECT * FROM table_name WHERE condition1 AND condition2;",
        code: `SELECT * FROM employees WHERE age > 30 AND department = 'Sales';`
      },
      {
        id: 13,
        Title: "13. What is ORDER BY used for?",
        answer: "ORDER BY sorts the result set in ascending (ASC) or descending (DESC) order.",
        Sample: "SELECT * FROM table_name ORDER BY column1 ASC, column2 DESC;",
        code: `SELECT * FROM employees ORDER BY salary DESC;`
      },
      {
        id: 14,
        Title: "14. How does the GROUP BY clause work?",
        answer: "GROUP BY groups rows that have the same values into summary rows.",
        Sample: "SELECT column, aggregate_function(column) FROM table_name GROUP BY column;",
        code: `SELECT department, COUNT(*) FROM employees GROUP BY department;`
      },
      {
        id: 15,
        Title: "15. What is the WHERE clause used for?",
        answer: "WHERE filters records based on a specific condition.",
        Sample: "SELECT * FROM table_name WHERE condition;",
        code: `SELECT * FROM employees WHERE age > 25;`
      },
      {
        id: 16,
        Title: "16. What is the HAVING clause?",
        answer: "HAVING filters groups based on a specified condition, typically used with aggregate functions.",
        Sample: "SELECT column, aggregate_function(column) FROM table_name GROUP BY column HAVING condition;",
        code: `SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 5;`
      },
      {
        id: 17,
        Title: "17. What is the DISTINCT keyword?",
        answer: "DISTINCT removes duplicate rows from the result set.",
        Sample: "SELECT DISTINCT column1 FROM table_name;",
        code: `SELECT DISTINCT department FROM employees;`
      },
      {
        id: 18,
        Title: "18. How does the LIMIT clause work?",
        answer: "LIMIT restricts the number of rows returned in a query.",
        Sample: "SELECT * FROM table_name LIMIT number;",
        code: `SELECT * FROM employees LIMIT 10;`
      },
      {
        id: 19,
        Title: "19. What is a self join?",
        answer: "A self join is a join in which a table is joined with itself.",
        Sample: "SELECT a.column, b.column FROM table_name a, table_name b WHERE a.column = b.column;",
        code: `SELECT a.name, b.name FROM employees a, employees b WHERE a.manager_id = b.id;`
      },
    {
    id: 20,
    Title: "20. What are aggregate functions?",
    answer: "Aggregate functions perform calculations on a set of values and return a single result, such as SUM, AVG, COUNT.",
    Sample: "How do I find the average value in a SQL table?",
    code: `
    SELECT AVG(column_name)
    FROM table_name;
    `
},

      {
        id: 21,
        Title: "21. What is the function of IS NULL?",
        answer: "IS NULL checks for null (empty) values in a column.",
        Sample: "SELECT * FROM table_name WHERE column IS NULL;",
        code: `SELECT * FROM employees WHERE manager_id IS NULL;`
      },
      {
        id: 22,
        Title: "22. What is the use of COUNT() in SQL?",
        answer: "COUNT() returns the number of rows that match a specified criterion.",
        Sample: "SELECT COUNT(*) FROM table_name;",
        code: `SELECT COUNT(*) FROM employees WHERE department = 'Sales';`
      },
      {
        id: 23,
        Title: "23. What is the SQL syntax to create a new database?",
        answer: "CREATE DATABASE is used to create a new database.",
        Sample: "CREATE DATABASE database_name;",
        code: `CREATE DATABASE CompanyDB;`
      },
      {
        id: 24,
        Title: "24. How do you drop a table in SQL?",
        answer: "DROP TABLE removes a table from the database permanently.",
        Sample: "DROP TABLE table_name;",
        code: `DROP TABLE employees;`
      },
      {
        id: 25,
        Title: "25. What is the ALTER TABLE statement?",
        answer: "ALTER TABLE modifies an existing table by adding, deleting, or modifying columns.",
        Sample: "ALTER TABLE table_name ADD column_name datatype;",
        code: `ALTER TABLE employees ADD birth_date DATE;`
      },
      {
        id: 26,
        Title: "26. How does the UNION operator work?",
        answer: "UNION combines the results of two or more SELECT queries without duplicates.",
        Sample: "SELECT column1 FROM table1 UNION SELECT column1 FROM table2;",
        code: ``
      },
     {
    id: 27,
    Title: "27. What does UNION ALL do?",
    answer: "UNION ALL combines the results of two or more SELECT queries, including duplicates.",
    Sample: "How can I combine two tables and keep all duplicate records?",
    code: `
    SELECT column_name(s)
    FROM table1
    UNION ALL
    SELECT column_name(s)
    FROM table2;
    `
},

      {
        id: 28,
        Title: "28. How does the EXISTS keyword work?",
        answer: "EXISTS checks for the existence of rows in a subquery and returns true if the subquery returns one or more rows.",
        Sample: "SELECT column1 FROM table_name WHERE EXISTS (subquery);",
        code: `SELECT name FROM employees WHERE EXISTS (SELECT * FROM departments WHERE departments.id = employees.dept_id);`
      },
      {
        id: 29,
        Title: "29. What is the function of the NOT EXISTS clause?",
        answer: "NOT EXISTS checks for the absence of rows in a subquery and returns true if the subquery returns no rows.",
        Sample: "SELECT column1 FROM table_name WHERE NOT EXISTS (subquery);",
        code: `SELECT name FROM employees WHERE NOT EXISTS (SELECT * FROM projects WHERE projects.employee_id = employees.id);`
      },
      {
        id: 30,
        Title: "30. How does the CASE statement work?",
        answer: "CASE provides conditional logic within SQL queries and returns specified values based on conditions.",
        Sample: "SELECT column, CASE WHEN condition THEN result ELSE result END AS alias FROM table;",
        code: `SELECT name, CASE WHEN age > 18 THEN 'Adult' ELSE 'Minor' END AS age_group FROM employees;`
      },
      {
        id: 31,
        Title: "31. What is the COALESCE function?",
        answer: "COALESCE returns the first non-null value in a list of arguments.",
        Sample: "SELECT COALESCE(column1, column2, ...) FROM table_name;",
        code: `SELECT COALESCE(middle_name, first_name, 'Unknown') AS name FROM employees;`
      },
      {
        id: 32,
        Title: "32. What does the LIKE operator do?",
        answer: "LIKE is used to search for a specified pattern in a column using wildcards.",
        Sample: "SELECT * FROM table_name WHERE column LIKE pattern;",
        code: `SELECT * FROM employees WHERE name LIKE 'J%';`
      },
      {
        id: 33,
        Title: "33. What is the purpose of the MAX() function?",
        answer: "MAX() returns the largest value of a specified column.",
        Sample: "SELECT MAX(column) FROM table_name;",
        code: `SELECT MAX(salary) FROM employees;`
      },
      {
        id: 34,
        Title: "34. What does the MIN() function do?",
        answer: "MIN() returns the smallest value of a specified column.",
        Sample: "SELECT MIN(column) FROM table_name;",
        code: `SELECT MIN(salary) FROM employees;`
      },
     {
    id: 35,
    Title: "35. What is a primary key?",
    answer: "A primary key uniquely identifies each record in a table and must contain unique values.",
    Sample: "How do I create a primary key in a table?",
    code: `
    CREATE TABLE table_name (
        id INT PRIMARY KEY,
        column_name data_type,
        ...
    );
    `
},
{
    id: 36,
    Title: "36. What is a foreign key?",
    answer: "A foreign key is a field or collection of fields in one table that uniquely identifies a row in another table, creating a link between the two tables.",
    Sample: "How do I create a foreign key in SQL?",
    code: `
    CREATE TABLE table_name (
        column_name data_type,
        other_column INT,
        FOREIGN KEY (other_column) REFERENCES other_table(column)
    );
    `
},

      {
        id: 37,
        Title: "37. What is a subquery?",
        answer: "A subquery is a query nested inside another query, used to perform operations in multiple steps.",
        Sample: "SELECT * FROM table1 WHERE column = (SELECT column FROM table2);",
        code: `SELECT name FROM employees WHERE salary = (SELECT MAX(salary) FROM employees);`
      },
      {
        id: 38,
        Title: "38. What is the TRUNCATE TABLE command?",
        answer: "TRUNCATE TABLE deletes all records in a table without logging each row deletion, making it faster than DELETE.",
        Sample: "TRUNCATE TABLE table_name;",
        code: `TRUNCATE TABLE employees;`
      },
      {
        id: 39,
        Title: "39. How does the SQL DROP DATABASE command work?",
        answer: "DROP DATABASE deletes a database and all its data permanently.",
        Sample: "DROP DATABASE database_name;",
        code: `DROP DATABASE CompanyDB;`
      },
      {
        id: 40,
        Title: "40. What is an index in SQL?",
        answer: "An index is used to speed up searches and queries on a table, and it is created on columns that are frequently searched.",
        Sample: "CREATE INDEX index_name ON table_name(column);",
        code: `CREATE INDEX idx_salary ON employees(salary);`
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
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">SQL Basics and Concepts</h1>

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

export default Sql;

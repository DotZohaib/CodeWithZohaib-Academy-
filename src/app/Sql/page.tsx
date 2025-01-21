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

const Sql: React.FC = () => {
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
      Title: "1. What is SQL?",
      answer:
        "SQL (Structured Query Language) is used to communicate with and manipulate relational databases.",
      Sample: "SELECT * FROM table_name;",
      code: `SELECT * FROM employees;`,
    },
    {
      id: 2,
      Title: "2. How does the SELECT statement work?",
      answer: "SELECT is used to retrieve data from a database table or view.",
      Sample: "SELECT column1, column2 FROM table_name;",
      code: `SELECT name, age FROM users;`,
    },
    {
      id: 3,
      Title: "3. What is the UPDATE statement?",
      answer: "UPDATE is used to modify existing records in a table.",
      Sample: "UPDATE table_name SET column1 = value1 WHERE condition;",
      code: `UPDATE employees SET salary = 50000 WHERE id = 1;`,
    },
    {
      id: 4,
      Title: "4. How does the DELETE statement work?",
      answer:
        "DELETE removes specific records from a table based on a condition.",
      Sample: "DELETE FROM table_name WHERE condition;",
      code: `DELETE FROM users WHERE age < 18;`,
    },
    {
      id: 5,
      Title: "5. What is an INNER JOIN?",
      answer: "INNER JOIN returns rows with matching values in both tables.",
      Sample:
        "SELECT * FROM table1 INNER JOIN table2 ON table1.column = table2.column;",
      code: `SELECT orders.order_id, customers.name FROM orders INNER JOIN customers ON orders.customer_id = customers.id;`,
    },
    {
      id: 6,
      Title: "6. What is a LEFT JOIN?",
      answer:
        "LEFT JOIN returns all rows from the left table and matched rows from the right table. If no match is found, NULL values are returned.",
      Sample:
        "SELECT * FROM table1 LEFT JOIN table2 ON table1.column = table2.column;",
      code: `SELECT employees.name, departments.dept_name FROM employees LEFT JOIN departments ON employees.dept_id = departments.id;`,
    },
    {
      id: 7,
      Title: "7. What is a RIGHT JOIN?",
      answer:
        "RIGHT JOIN returns all rows from the right table and matched rows from the left table. If no match is found, NULL values are returned.",
      Sample:
        "SELECT * FROM table1 RIGHT JOIN table2 ON table1.column = table2.column;",
      code: `SELECT employees.name, departments.dept_name FROM employees RIGHT JOIN departments ON employees.dept_id = departments.id;`,
    },
    {
      id: 8,
      Title: "8. What is a FULL JOIN?",
      answer:
        "FULL JOIN returns all rows when there is a match in either table, and NULLs where no match exists.",
      Sample:
        "SELECT * FROM table1 FULL JOIN table2 ON table1.column = table2.column;",
      code: `SELECT employees.name, departments.dept_name FROM employees FULL JOIN departments ON employees.dept_id = departments.id;`,
    },
    {
      id: 9,
      Title: "9. How does the BETWEEN operator work?",
      answer: "BETWEEN is used to filter records within a specific range.",
      Sample:
        "SELECT * FROM table_name WHERE column BETWEEN value1 AND value2;",
      code: `SELECT * FROM products WHERE price BETWEEN 100 AND 500;`,
    },
    {
      id: 10,
      Title: "10. How does the IN operator work?",
      answer: "IN allows multiple values to be specified in a WHERE clause.",
      Sample: "SELECT * FROM table_name WHERE column IN (value1, value2, ...);",
      code: `SELECT * FROM employees WHERE department_id IN (1, 2, 3);`,
    },
    {
      id: 11,
      Title: "11. What is the role of the ON clause in SQL joins?",
      answer: "ON specifies the condition for joining tables in SQL.",
      Sample:
        "SELECT * FROM table1 JOIN table2 ON table1.column = table2.column;",
      code: `SELECT orders.order_id, customers.name FROM orders INNER JOIN customers ON orders.customer_id = customers.id;`,
    },
    {
      id: 12,
      Title: "12. How does the AND operator work in SQL?",
      answer: "AND allows multiple conditions to be combined in a SQL query.",
      Sample: "SELECT * FROM table_name WHERE condition1 AND condition2;",
      code: `SELECT * FROM employees WHERE age > 30 AND department = 'Sales';`,
    },
    {
      id: 13,
      Title: "13. What is ORDER BY used for?",
      answer:
        "ORDER BY sorts the result set in ascending (ASC) or descending (DESC) order.",
      Sample: "SELECT * FROM table_name ORDER BY column1 ASC, column2 DESC;",
      code: `SELECT * FROM employees ORDER BY salary DESC;`,
    },
    {
      id: 14,
      Title: "14. How does the GROUP BY clause work?",
      answer:
        "GROUP BY groups rows that have the same values into summary rows.",
      Sample:
        "SELECT column, aggregate_function(column) FROM table_name GROUP BY column;",
      code: `SELECT department, COUNT(*) FROM employees GROUP BY department;`,
    },
    {
      id: 15,
      Title: "15. What is the WHERE clause used for?",
      answer: "WHERE filters records based on a specific condition.",
      Sample: "SELECT * FROM table_name WHERE condition;",
      code: `SELECT * FROM employees WHERE age > 25;`,
    },
    {
      id: 16,
      Title: "16. What is the HAVING clause?",
      answer:
        "HAVING filters groups based on a specified condition, typically used with aggregate functions.",
      Sample:
        "SELECT column, aggregate_function(column) FROM table_name GROUP BY column HAVING condition;",
      code: `SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 5;`,
    },
    {
      id: 17,
      Title: "17. What is the DISTINCT keyword?",
      answer: "DISTINCT removes duplicate rows from the result set.",
      Sample: "SELECT DISTINCT column1 FROM table_name;",
      code: `SELECT DISTINCT department FROM employees;`,
    },
    {
      id: 18,
      Title: "18. How does the LIMIT clause work?",
      answer: "LIMIT restricts the number of rows returned in a query.",
      Sample: "SELECT * FROM table_name LIMIT number;",
      code: `SELECT * FROM employees LIMIT 10;`,
    },
    {
      id: 19,
      Title: "19. What is a self join?",
      answer: "A self join is a join in which a table is joined with itself.",
      Sample:
        "SELECT a.column, b.column FROM table_name a, table_name b WHERE a.column = b.column;",
      code: `SELECT a.name, b.name FROM employees a, employees b WHERE a.manager_id = b.id;`,
    },
    {
      id: 20,
      Title: "20. What are aggregate functions?",
      answer:
        "Aggregate functions perform calculations on a set of values and return a single result, such as SUM, AVG, COUNT.",
      Sample: "How do I find the average value in a SQL table?",
      code: `
    SELECT AVG(column_name)
    FROM table_name;
    `,
    },

    {
      id: 21,
      Title: "21. What is the function of IS NULL?",
      answer: "IS NULL checks for null (empty) values in a column.",
      Sample: "SELECT * FROM table_name WHERE column IS NULL;",
      code: `SELECT * FROM employees WHERE manager_id IS NULL;`,
    },
    {
      id: 22,
      Title: "22. What is the use of COUNT() in SQL?",
      answer:
        "COUNT() returns the number of rows that match a specified criterion.",
      Sample: "SELECT COUNT(*) FROM table_name;",
      code: `SELECT COUNT(*) FROM employees WHERE department = 'Sales';`,
    },
    {
      id: 23,
      Title: "23. What is the SQL syntax to create a new database?",
      answer: "CREATE DATABASE is used to create a new database.",
      Sample: "CREATE DATABASE database_name;",
      code: `CREATE DATABASE CompanyDB;`,
    },
    {
      id: 24,
      Title: "24. How do you drop a table in SQL?",
      answer: "DROP TABLE removes a table from the database permanently.",
      Sample: "DROP TABLE table_name;",
      code: `DROP TABLE employees;`,
    },
    {
      id: 25,
      Title: "25. What is the ALTER TABLE statement?",
      answer:
        "ALTER TABLE modifies an existing table by adding, deleting, or modifying columns.",
      Sample: "ALTER TABLE table_name ADD column_name datatype;",
      code: `ALTER TABLE employees ADD birth_date DATE;`,
    },
    {
      id: 26,
      Title: "26. How does the UNION operator work?",
      answer:
        "UNION combines the results of two or more SELECT queries without duplicates.",
      Sample: "How do I combine results from two tables without duplicates?",
      code: `
    SELECT column_name(s)
    FROM table1
    UNION
    SELECT column_name(s)
    FROM table2;
    `,
    },

    {
      id: 27,
      Title: "27. What does UNION ALL do?",
      answer:
        "UNION ALL combines the results of two or more SELECT queries, including duplicates.",
      Sample: "How can I combine two tables and keep all duplicate records?",
      code: `
    SELECT column_name(s)
    FROM table1
    UNION ALL
    SELECT column_name(s)
    FROM table2;
    `,
    },

    {
      id: 28,
      Title: "28. How does the EXISTS keyword work?",
      answer:
        "EXISTS checks for the existence of rows in a subquery and returns true if the subquery returns one or more rows.",
      Sample: "SELECT column1 FROM table_name WHERE EXISTS (subquery);",
      code: `SELECT name FROM employees WHERE EXISTS (SELECT * FROM departments WHERE departments.id = employees.dept_id);`,
    },
    {
      id: 29,
      Title: "29. What is the function of the NOT EXISTS clause?",
      answer:
        "NOT EXISTS checks for the absence of rows in a subquery and returns true if the subquery returns no rows.",
      Sample: "SELECT column1 FROM table_name WHERE NOT EXISTS (subquery);",
      code: `SELECT name FROM employees WHERE NOT EXISTS (SELECT * FROM projects WHERE projects.employee_id = employees.id);`,
    },
    {
      id: 30,
      Title: "30. How does the CASE statement work?",
      answer:
        "CASE provides conditional logic within SQL queries and returns specified values based on conditions.",
      Sample:
        "SELECT column, CASE WHEN condition THEN result ELSE result END AS alias FROM table;",
      code: `SELECT name, CASE WHEN age > 18 THEN 'Adult' ELSE 'Minor' END AS age_group FROM employees;`,
    },
    {
      id: 31,
      Title: "31. What is the COALESCE function?",
      answer:
        "COALESCE returns the first non-null value in a list of arguments.",
      Sample: "SELECT COALESCE(column1, column2, ...) FROM table_name;",
      code: `SELECT COALESCE(middle_name, first_name, 'Unknown') AS name FROM employees;`,
    },
    {
      id: 32,
      Title: "32. What does the LIKE operator do?",
      answer:
        "LIKE is used to search for a specified pattern in a column using wildcards.",
      Sample: "SELECT * FROM table_name WHERE column LIKE pattern;",
      code: `SELECT * FROM employees WHERE name LIKE 'J%';`,
    },
    {
      id: 33,
      Title: "33. What is the purpose of the MAX() function?",
      answer: "MAX() returns the largest value of a specified column.",
      Sample: "SELECT MAX(column) FROM table_name;",
      code: `SELECT MAX(salary) FROM employees;`,
    },
    {
      id: 34,
      Title: "34. What does the MIN() function do?",
      answer: "MIN() returns the smallest value of a specified column.",
      Sample: "SELECT MIN(column) FROM table_name;",
      code: `SELECT MIN(salary) FROM employees;`,
    },
    {
      id: 35,
      Title: "35. What is a primary key?",
      answer:
        "A primary key uniquely identifies each record in a table and must contain unique values.",
      Sample: "How do I create a primary key in a table?",
      code: `
    CREATE TABLE table_name (
        id INT PRIMARY KEY,
        column_name data_type,
        ...
    );
    `,
    },
    {
      id: 36,
      Title: "36. What is a foreign key?",
      answer:
        "A foreign key is a field or collection of fields in one table that uniquely identifies a row in another table, creating a link between the two tables.",
      Sample: "How do I create a foreign key in SQL?",
      code: `
    CREATE TABLE table_name (
        column_name data_type,
        other_column INT,
        FOREIGN KEY (other_column) REFERENCES other_table(column)
    );
    `,
    },

    {
      id: 37,
      Title: "37. What is a subquery?",
      answer:
        "A subquery is a query nested inside another query, used to perform operations in multiple steps.",
      Sample:
        "SELECT * FROM table1 WHERE column = (SELECT column FROM table2);",
      code: `SELECT name FROM employees WHERE salary = (SELECT MAX(salary) FROM employees);`,
    },
    {
      id: 38,
      Title: "38. What is the TRUNCATE TABLE command?",
      answer:
        "TRUNCATE TABLE deletes all records in a table without logging each row deletion, making it faster than DELETE.",
      Sample: "TRUNCATE TABLE table_name;",
      code: `TRUNCATE TABLE employees;`,
    },
    {
      id: 39,
      Title: "39. How does the SQL DROP DATABASE command work?",
      answer: "DROP DATABASE deletes a database and all its data permanently.",
      Sample: "DROP DATABASE database_name;",
      code: `DROP DATABASE CompanyDB;`,
    },
    {
      id: 40,
      Title: "40. What is an index in SQL?",
      answer:
        "An index is used to speed up searches and queries on a table, and it is created on columns that are frequently searched.",
      Sample: "CREATE INDEX index_name ON table_name(column);",
      code: `CREATE INDEX idx_salary ON employees(salary);`,
    },
    {
      id: 41,
      Title: "41. What is a JOIN expression in SQL?",
      answer:
        "JOIN is used to combine rows from two or more tables based on a related column.",
      Sample:
        "SELECT columns FROM table1 JOIN table2 ON table1.column = table2.column;",
      code: `SELECT employees.name, departments.dept_name FROM employees JOIN departments ON employees.dept_id = departments.id;`,
    },
    {
      id: 42,
      Title: "42. What is a View in SQL?",
      answer:
        "A view is a virtual table created by a query, which can simplify complex queries and enhance security.",
      Sample: "CREATE VIEW view_name AS SELECT columns FROM table_name;",
      code: `CREATE VIEW high_salary AS SELECT name, salary FROM employees WHERE salary > 50000;`,
    },
    {
      id: 43,
      Title: "43. What is a Transaction in SQL?",
      answer:
        "A transaction is a sequence of operations performed as a single logical unit of work, ensuring data integrity.",
      Sample: "BEGIN TRANSACTION; SQL statements; COMMIT;",
      code: `BEGIN TRANSACTION;
INSERT INTO accounts (user, balance) VALUES ('John', 1000);
COMMIT;`,
    },
    {
      id: 44,
      Title: "44. What are Integrity Constraints?",
      answer:
        "Integrity constraints enforce rules at the table level to ensure data accuracy and consistency.",
      Sample: "CREATE TABLE table_name (column datatype CONSTRAINT);",
      code: `CREATE TABLE employees (
      id INT PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      salary DECIMAL(10, 2) CHECK (salary > 0)
    );`,
    },
    {
      id: 45,
      Title: "45. What are SQL Data Types and Schemas?",
      answer:
        "SQL data types define the nature of data stored in each column, and schemas organize objects in a database.",
      Sample: "CREATE SCHEMA schema_name;",
      code: `CREATE SCHEMA sales;
CREATE TABLE sales.orders (
  order_id INT PRIMARY KEY,
  customer_name VARCHAR(100)
);`,
    },
    {
      id: 46,
      Title: "46. How is an Index defined in SQL?",
      answer:
        "An index is created to improve the speed of data retrieval on a specific column or set of columns.",
      Sample: "CREATE INDEX index_name ON table_name(column);",
      code: `CREATE INDEX idx_lastname ON employees(last_name);`,
    },
    {
      id: 47,
      Title: "47. What is Authorization in SQL?",
      answer:
        "Authorization grants or restricts users' access to database resources and actions.",
      Sample: "GRANT privileges ON object TO user;",
      code: `GRANT SELECT ON employees TO user1;`,
    },
    {
      id: 48,
      Title: "48. What is the SQL Query Language Overview?",
      answer:
        "SQL is a language used to interact with relational databases through data definition, manipulation, and control commands.",
      Sample: "Basic SQL Commands: SELECT, INSERT, UPDATE, DELETE;",
      code: `SELECT * FROM employees;
INSERT INTO employees (name, salary) VALUES ('Alice', 55000);`,
    },
    {
      id: 49,
      Title: "49. What is SQL Data Definition?",
      answer:
        "SQL Data Definition Language (DDL) manages the structure of database objects such as tables and indexes.",
      Sample: "CREATE, ALTER, DROP statements;",
      code: `CREATE TABLE employees (
      id INT PRIMARY KEY,
      name VARCHAR(100)
    );`,
    },
    {
      id: 50,
      Title: "50. What is the Basic Query Structure of SQL Queries?",
      answer:
        "A basic SQL query structure includes SELECT, FROM, and optional WHERE clauses to filter results.",
      Sample: "SELECT columns FROM table WHERE condition;",
      code: `SELECT name, age FROM users WHERE age > 30;`,
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
            Sql Programming Guide
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

export default Sql;

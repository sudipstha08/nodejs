## Sharding
- Sharding is a type of database partitioning that separates large databases into smaller, faster, more easily managed parts. These smaller parts are called data shards. The word shard means "a small part of a whole.
- https://www.techtarget.com/searchoracle/definition/sharding#:~:text=Sharding%20is%20a%20type%20of,faster%2C%20more%20easily%20managed%20parts.

## Databse View
- A Database View is a virtual table that presents data from one or more tables in a structured and user-friendly format. Database Views are not physically stored in the database but are generated dynamically based on underlying data tables. 
- They are widely used in query optimization, data access control, and data abstraction, enabling businesses to perform complex data analysis with ease.
- Database Views are built on top of the underlying database management system (DBMS). They rely on SQL queries that define the logical structure and relationships between tables and columns. The DBMS takes care of maintaining the consistency between the views and the base tables, ensuring that the views always display the latest data.
  
Functionality and Features
Database Views offer several key features:

Data Abstraction: They simplify data access by providing a single interface for multiple tables or complex queries.
Access Control: Database Views can be used to control access to sensitive data by restricting users to specific columns or rows.
Modular Queries: They provide a more organized and modular approach to queries by encapsulating logic within the view definition.
Query Optimization: Some databases can optimize query execution by using views to minimize the amount of data processed or retrieved.

## MongoDB & Postgres
- Data Model:
  - MongoDB: MongoDB is a NoSQL database, which means it uses a flexible, document-based data model. Data is stored in JSON-like documents, allowing for nested structures and dynamic schemas.
  - PostgreSQL: PostgreSQL is a relational database management system (RDBMS), adhering to the ACID (Atomicity, Consistency, Isolation, Durability) principles. It stores data in tables with predefined schemas and supports complex relationships between tables.
- Query Language:

   - MongoDB: MongoDB uses a query language similar to JSON called MongoDB Query Language (MQL). It provides powerful query capabilities, including support for CRUD operations, aggregation, and indexing.
   - PostgreSQL: PostgreSQL uses SQL (Structured Query Language), a widely adopted language for relational databases. SQL offers extensive functionality for querying, filtering, joining, and aggregating data.

- Scalability:
   - MongoDB: MongoDB is designed to scale horizontally, meaning it can handle large volumes of data by distributing it across multiple servers in a cluster. It is well-suited for applications with rapidly growing datasets or high write loads.
   - PostgreSQL: PostgreSQL traditionally scales vertically, meaning it can be scaled up by adding more resources (CPU, RAM, storage) to a single server. However, PostgreSQL also supports some level of horizontal scaling through techniques like sharding and replication.
  
- Transactions and Consistency:
  - MongoDB: MongoDB supports atomic operations at the document level. While it provides some level of consistency, it may sacrifice strict consistency in favor of scalability and performance.
  - PostgreSQL: PostgreSQL offers full ACID compliance, ensuring data consistency and integrity even in complex transactional scenarios. It is often preferred for applications requiring strong data consistency guarantees.
  
- Use Cases:
  - MongoDB: MongoDB is commonly used in scenarios where flexibility, scalability, and high-performance data access are critical, such as real-time analytics, content management systems, and IoT applications.
  - PostgreSQL: PostgreSQL is well-suited for applications with complex data relationships, strict consistency requirements, and where data integrity is paramount, such as financial systems, e-commerce platforms, and enterprise applications.

### How to choose between Mongodb and Postgres
- Understand Your Data Model:
  Determine whether your data fits better into a relational (tabular) model or a document-based (NoSQL) model.
  If your data has a clear structure with well-defined relationships between entities, a relational database like PostgreSQL might be more suitable.
  If your data is unstructured or semi-structured, or if you need the flexibility to evolve your schema over time, MongoDB's document-oriented model might be a better fit.

- Consider Scalability Requirements:
  Evaluate the scalability needs of your application. Do you anticipate rapid growth in data volume or user base?
  MongoDB is designed for horizontal scalability, making it a good choice for applications requiring distributed databases and high throughput.
  PostgreSQL can scale vertically by adding more resources to the server, but scaling horizontally requires more complex setups like sharding or partitioning.

- Assess Transactional Needs:
  Determine whether your application requires ACID (Atomicity, Consistency, Isolation, Durability) transactions.
  PostgreSQL has robust support for ACID transactions, making it suitable for applications with complex transactional requirements, such as financial systems or e-commerce platforms.
  MongoDB introduced multi-document transactions in recent versions, but they come with some limitations and overhead compared to traditional relational databases.

- Evaluate Query and Indexing Requirements:
  Consider the types of queries your application will perform and whether they are better suited for SQL or NoSQL databases.
  PostgreSQL offers powerful SQL capabilities, including complex queries, joins, and aggregations, which are well-suited for applications with advanced querying needs.
 MongoDB provides a flexible query language and aggregation framework, which is suitable for applications with nested data structures or real-time analytics.

- Factor in Development and Maintenance Considerations:
  Consider the expertise of your development team and the availability of tools and resources for each database.
  PostgreSQL has been around longer and has a mature ecosystem with extensive documentation, libraries, and tools.
  MongoDB has a growing ecosystem and is popular in modern web development, particularly among developers familiar with JavaScript and JSON.

- Prototype and Test:
  If possible, prototype your application with both PostgreSQL and MongoDB to evaluate how well each database meets your requirements.
  Test performance, scalability, ease of development, and maintenance overhead to make an informed decision.




[References]
- https://www.geeksforgeeks.org/introduction-of-object-oriented-programming/
- https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html
- https://www.datacamp.com/tutorial/views-in-sql
- https://aristeksystems.com/blog/database-views-what-you-need-to-know/
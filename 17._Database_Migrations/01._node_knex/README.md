# Hands-on with Knex

This project demonstrates how to use Knex.js for managing database migrations and seeding in a MySQL database. Below is a collection of commands used throughout the project, grouped by their purpose.

---

## Commands Overview

### **Setup and Initialization**

- Initialize a new Node.js project:
  ```bash
  npm init -y
  ```

- Install Knex, MySQL driver, and dotenv:
  ```bash
  npm install knex mysql2 dotenv
  ```

- Initialize Knex to generate a `knexfile.js`:
  ```bash
  npx knex init
  ```

---

### **Knex Migration Commands**

- Create a new migration file:
  ```bash
  npx knex migrate:make <migration_name>
  ```
  Example:
  ```bash
  npx knex migrate:make create_users_products_table
  ```

- Apply all pending migrations:
  ```bash
  npx knex migrate:latest
  ```

- Rollback the last batch of migrations:
  ```bash
  npx knex migrate:rollback
  ```

---

### **Knex Seeding Commands**

- Create a new seed file:
  ```bash
  npx knex seed:make <seed_name>
  ```
  Example:
  ```bash
  npx knex seed:make seed_users
  ```

- Run all seed files to populate the database:
  ```bash
  npx knex seed:run
  ```

---

### **Node.js Commands**

- Run the `index.js` file to test the database connection:
  ```bash
  node index.js
  ```

---

# Knex Cheat Sheet

https://devhints.io/knex

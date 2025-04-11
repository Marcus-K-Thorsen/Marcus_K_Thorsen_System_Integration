# Hands-on with Alembic

This project demonstrates how to use Alembic for managing database migrations and seeding in a MySQL database. Below is a collection of commands used throughout the project, grouped by their purpose.

---

## Commands Overview

### **Setup and Initialization**

- Initialize a new Python project with Poetry:
  ```bash
  poetry init -n
  ```

- Add Alembic, SQLAlchemy, and MySQL client dependencies:
  ```bash
  poetry add alembic sqlalchemy mysqlclient
  ```

- Initialize Alembic to generate the migration environment:
  ```bash
  poetry run alembic init alembic
  ```

- Activate the Poetry virtual environment:
  ```bash
  poetry shell
  ```

---

### **Alembic Migration Commands**

- Create a new migration file:
  ```bash
  alembic revision -m "create accounts table"
  ```

- Apply all migrations to upgrade the database schema to the latest version:
  ```bash
  alembic upgrade head
  ```

- Rollback the last migration:
  ```bash
  alembic downgrade -1
  ```

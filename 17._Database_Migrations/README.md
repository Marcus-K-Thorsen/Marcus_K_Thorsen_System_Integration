# System Integration - Database Migrations

This project contains a `docker-compose.yaml` file that sets up a MySQL database container for use in the "System Integration" class. The database is configured with a persistent volume to store data and environment variables to initialize the database and user credentials.

## Description

The `docker-compose.yaml` file:
- Creates a MySQL container named `mysql_system_integration_migrations_container`.
- Exposes MySQL on port `3305` (mapped to the container's default port `3306`).
- Initializes a database named `mydatabase` with a non-root user (`myuser`) and password (`myuserpassword`).
- Stores MySQL data persistently in a volume named `system_integration_db_migrations_data`.

## Commands Overview

Below is a collection of commands grouped by their purpose. These commands are used throughout the project for managing the database, running migrations, and creating backups.

---

### **Docker and Docker-Compose Commands**

- Start the MySQL container in detached mode:
  ```bash
  docker-compose up -d
  ```

- Stop the running containers:
  ```bash
  docker-compose down
  ```

- Rebuild the containers after making changes to the `docker-compose.yaml` file:
  ```bash
  docker-compose up -d --build
  ```

- Remove the volume to reset the database:
  ```bash
  docker volume rm 17_database_migrations_system_integration_db_migrations_data
  ```

- Stop the running containers and remove associated volumes:
  ```bash
  docker-compose down -v
  ```

- View the logs of the MySQL container:
  ```bash
  docker-compose logs db
  ```

- Check if the container is running:
  ```bash
  docker ps
  ```

- Access the shell of the MySQL container:
  ```bash
  docker exec -it mysql_system_integration_migrations_container bash
  ```

- Connect to the MySQL database from within the container:
  ```bash
  docker exec -it mysql_system_integration_migrations_container mysql -u root -prootpassword
  ```

---

### **Backup and Restore Commands**

- Create a backup of the database using `mysqldump`:
  ```bash
  docker exec -i mysql_system_integration_migrations_container mysqldump --default-character-set=utf8mb4 -u root -prootpassword mydatabase > dumps/mysqldump.sql
  ```

- Restore the database from a dump file:
  - **PowerShell**:
    ```powershell
    Get-Content -Raw dumps/mysqldump.sql | docker exec -i mysql_system_integration_migrations_container mysql -u root -prootpassword mydatabase
    ```
  - **Bash**:
    ```bash
    cat dumps/mysqldump.sql | docker exec -i mysql_system_integration_migrations_container mysql -u root -prootpassword mydatabase
    ```

---

### **MRO Commands**

- Generate migration files from an existing database schema:
  ```bash
  npx mro
  ```

- Generate HTML documentation for the database schema:
  ```bash
  npx mro
  ```
  Follow the prompts and select `HTML Documentation` as the output format.


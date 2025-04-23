import os
from sqlalchemy import create_engine, MetaData, Table, Column
from sqlalchemy.orm import sessionmaker
from sqlalchemy.schema import CreateTable
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Load environment variables
MYSQL_URL = os.getenv("MYSQL_URL")
POSTGRES_URL = os.getenv("POSTGRES_URL")

# Create database engines
mysql_engine = create_engine(MYSQL_URL)
postgres_engine = create_engine(POSTGRES_URL)

# Create sessions
MySQLSession = sessionmaker(bind=mysql_engine)
PostgreSQLSession = sessionmaker(bind=postgres_engine)

mysql_session = MySQLSession()
postgres_session = PostgreSQLSession()

# Reflect tables from MySQL
mysql_metadata = MetaData()
mysql_metadata.reflect(bind=mysql_engine)

# Loop through all tables in the MySQL database
for table_name, mysql_table in mysql_metadata.tables.items():
    print(f"Migrating table: {table_name}")

    # Create the table in PostgreSQL
    postgres_metadata = MetaData()
    postgres_table = Table(
        table_name,
        postgres_metadata,
        *[
            Column(column.name, column.type, primary_key=column.primary_key)
            for column in mysql_table.columns
        ],
    )

    # Generate and execute the CREATE TABLE statement in PostgreSQL
    with postgres_engine.connect() as conn:
        conn.execute(CreateTable(postgres_table))
        conn.commit()  # Ensure the table creation is committed

    # Extract data from MySQL
    data = mysql_session.query(mysql_table).all()

    # Transform data into a list of dictionaries
    transformed_data = [
        {column.name: getattr(row, column.name) for column in mysql_table.columns}
        for row in data
    ]

    # Insert data into PostgreSQL
    with postgres_engine.connect() as conn:
        conn.execute(postgres_table.insert(), transformed_data)
        conn.commit()  # Commit the data insertion

print("Data migration completed successfully!")

# Close sessions
mysql_session.close()
postgres_session.close()
# How to run `main.py` using Poetry

Follow these steps:

1. **Open a terminal and navigate to the project folder:**
   ```
   cd "\05._Python_Virtual_Environments\03._poetry"
   ```

2. **Install Poetry if you don't have it:**
   ```
   pip install poetry
   ```

3. **Install the required dependencies (from `pyproject.toml`):**
   ```
   poetry install
   ```

4. **Run the script using Poetry:**
   ```
   poetry run python main.py
   ```

5. **(Optional) Open a Poetry shell for repeated commands:**
   ```
   poetry shell
   ```
   Then you can run:
   ```
   python main.py
   ```

6. **(Optional) Exit the Poetry shell when done:**
   ```
   exit
   ```

   # Pros and Cons of using Poetry

**Pros:**
- Manages dependencies and virtual environments in one tool.
- Uses `pyproject.toml` and `poetry.lock` for reproducible and consistent installs.
- Handles dependency resolution and prevents version conflicts.
- Easy to publish packages to PyPI.
- Provides simple commands for adding, updating, and removing packages.

**Cons:**
- Not included with Python by default (requires separate installation).
- Can be slower than basic pip/venv for some operations.
- May have compatibility issues with some less common packages or workflows.
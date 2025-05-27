# How to run `main.py` using pipenv

Follow these steps:

1. **Open a terminal and navigate to the project folder:**
   ```
   cd "\05._Python_Virtual_Environments\02._pipenv"
   ```

2. **Install pipenv if you don't have it:**
   ```
   pip install pipenv
   ```

3. **Install the required package (`emoji`) using pipenv:**
   ```
   pipenv install emoji
   ```

4. **Activate the pipenv shell:**
   ```
   pipenv shell
   ```

5. **Run the script:**
   ```
   python main.py
   ```

6. **(Optional) Exit the pipenv shell when done:**
   ```
   exit
   ```

   # Pros and Cons of using pipenv

**Pros:**
- Manages both virtual environments and dependencies in one tool.
- Automatically creates and uses a `Pipfile` and `Pipfile.lock` for reproducible installs.
- Easier to install, update, and remove packages compared to plain venv.
- Handles dependency resolution and prevents version conflicts.

**Cons:**
- Can be slower than using venv and pip directly.
- Not included with Python by default (requires separate installation).
- Sometimes has compatibility issues with the latest Python versions or packages.
# How to run `main.py` using a virtual environment

Follow these steps:

1. **Open a terminal and navigate to the project folder:**
   ```
   cd "\05._Python_Virtual_Environments\01._venv"
   ```

2. **Create a virtual environment (if not already created):**
   ```
   python -m venv venv
   ```

3. **Activate the virtual environment:**
   ```
   .\venv\Scripts\activate
   ```

4. **Install the required packages (for example, emoji):**
   ```
   pip install emoji
   ```

5. **Run the script:**
   ```
   python main.py
   ```

6. **(Optional) Deactivate the virtual environment when done:**
   ```
   deactivate
   ```


   # Pros and Cons of using venv

**Pros:**
- Keeps project dependencies isolated from other Python projects and the system Python.
- Simple to use and included with Python (no extra installation needed).
- Helps avoid version conflicts between packages.

**Cons:**
- Does not manage package versions across projects (no lock file by default).
- Manual activation/deactivation required for each terminal session.
- Lacks some advanced features found in tools like pipenv or poetry (e.g., dependency resolution, easier environment management).
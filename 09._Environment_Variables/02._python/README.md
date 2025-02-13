# How to setup

```bash
$ poetry init -n
$ poetry add python-dotenv
$ poetry shell
$ nodemon --exec python main.py
```

Create a .env file and insert:

API_KEY=somesecret
MY_SECRET=verysecret

Create a .env.template file that can be pushed with;

API_KEY=
MY_SECRET=

## PYTHON: Two ways to use dotenv

```py
from dotenv import load_dotenv
import os

load_dotenv()
print(os.getenv("API_KEY"))
```

Or:

```py
from dotenv import dotenv_values

config = dotenv_values(".env")
print(config["API_KEY"])
```


from dotenv import load_dotenv, dotenv_values
import os

# Does not contain the environment variables from the .env file like "API_KEY" and "SECRET_KEY"
#print(os.environ)

load_dotenv()
# Contains the environment variables from the .env file like "API_KEY" and "SECRET_KEY"
print()

print("os.getenv 'API_KEY':", os.getenv("API_KEY"))


config = dotenv_values(".env")
print("dotenv_values 'MY_SECRET':", config["MY_SECRET"])

print()
from dotenv import load_dotenv, dotenv_values
import os


# OS
#print("os.environ:", os.environ)

print()


print("os.getenv 'API_KEY':", os.getenv("API_KEY", "Not Found in OS"))
# Process
load_dotenv()
print("os.getenv 'API_KEY':", os.getenv("API_KEY"))

# Runtime
config = dotenv_values(".env")
print("dotenv_values 'MY_SECRET':", config["MY_SECRET"])

print()



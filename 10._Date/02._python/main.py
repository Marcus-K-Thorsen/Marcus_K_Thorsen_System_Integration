# import datetime
# print(datetime.datetime.now())

from datetime import datetime, timezone

current_date = datetime.now()
print("Current date locally:")
print(current_date)
print(current_date.strftime('%Y-%m-%dT%H:%M:%S'))

print("--------------------")

# UTC time
current_date_utc = datetime.now(timezone.utc)
print("Current date in UTC:")
print(current_date_utc)
print(current_date_utc.strftime('%Y-%m-%dT%H:%M:%S'))

print("--------------------")

# Save the current UTC date and time as a string for MongoDB
format_I_want_to_save_date_for_mongodb = current_date_utc.isoformat()
print("Formatted date for MongoDB:")
print(format_I_want_to_save_date_for_mongodb)

print("--------------------")

# Convert the string back to a datetime object
date_from_mongodb = datetime.fromisoformat(format_I_want_to_save_date_for_mongodb)
print("Date from MongoDB:")
print(date_from_mongodb)
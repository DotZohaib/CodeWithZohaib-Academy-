import json
import re

# Path to your TypeScript database file
file_path = r"E:\All My Website using Next.js code\dot_zohaib_academic\src\components\Database.ts"

# Read the content of the TypeScript file
with open(file_path, "r", encoding="utf-8") as file:
    content = file.read()

# Extract JSON-like data from the TypeScript file
json_data_match = re.search(r"=\s*\[(.*?)\];", content, re.DOTALL)
if json_data_match:
    json_data = json_data_match.group(1)
    
    # Remove comments, ensure keys are properly quoted, and replace backticks with double quotes
    json_data_clean = re.sub(r"//.*|/\*.*?\*/", "", json_data)  # Remove comments
    json_data_clean = re.sub(r"(\w+):", r'"\1":', json_data_clean)  # Add quotes around keys
    json_data_clean = json_data_clean.replace("`", '"')  # Replace backticks with double quotes
    json_data_clean = f"[{json_data_clean}]"

    # Print out the cleaned JSON data for debugging
    print("Cleaned JSON data:\n", json_data_clean[:500])  # Print the first 500 characters to inspect

    try:
        # Load the cleaned JSON data
        data = json.loads(json_data_clean)
    except json.JSONDecodeError as e:
        print("JSON decoding error:", e)
        exit()
else:
    print("No valid JSON-like data found in the file.")
    exit()

# Add an ID to each object in the data, starting from 1
for index, obj in enumerate(data, start=1):
    obj["id"] = index

# Convert the updated data back to JSON and update the TypeScript file
updated_json_data = json.dumps(data, indent=2)
updated_content = re.sub(r"=\s*\[.*?\];", f"= {updated_json_data};", content, flags=re.DOTALL)

# Write the updated content back to the TypeScript file
with open(file_path, "w", encoding="utf-8") as file:
    file.write(updated_content)

print("IDs added to each object successfully!")

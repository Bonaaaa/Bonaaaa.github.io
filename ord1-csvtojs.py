import csv
import json
import re

def is_valid_identifier(s):
    """Return True if s is a valid JavaScript identifier."""
    return re.match(r'^[_$a-zA-Z][_$a-zA-Z0-9]*$', s) is not None

def csv_to_js(csv_filename, js_filename):
    # Open the CSV file using 'utf-8-sig' to handle BOM.
    with open(csv_filename, 'r', encoding='utf-8-sig') as csvfile:
        reader = csv.DictReader(csvfile, delimiter=',')
        rows = list(reader)
    
    # Open the JS file for writing.
    with open(js_filename, 'w', encoding='utf-8') as jsfile:
        jsfile.write("// --- ordervolume.js ---\n")
        jsfile.write("export const ordervolume = [\n")
        
        for row in rows:
            kv_pairs = []
            for key, value in row.items():
                # Remove BOM from key and extra whitespace.
                key = key.lstrip('\ufeff').strip()
                value = value.strip()
                key_str = key if is_valid_identifier(key) else json.dumps(key)
                value_str = json.dumps(value)
                kv_pairs.append(f"{key_str}: {value_str}")
            jsfile.write("  {" + ", ".join(kv_pairs) + "},\n")
        
        jsfile.write("];\n")

if __name__ == "__main__":
    csv_to_js("ordervolume.csv", "ordervolume.js")
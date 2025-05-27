# Encode/Decode Concepts

Encoding and decoding are processes used to convert data between different formats. Encoding transforms data into a different representation (often for storage or transmission), while decoding reverses the process to retrieve the original data.

## How to use the files

### Node.js (`index.js`)

- This file demonstrates encoding and decoding a string using Base64 in JavaScript.
- To run:
  1. Open a terminal in the `01._node` folder.
  2. Run:  
     ```
     node index.js
     ```
  3. You will see the encoded and then decoded message printed in the terminal.

### Python (`main.py`)

- This file shows how to encode and decode a string using Python's built-in methods.
- To run:
  1. Open a terminal in the `02._python` folder.
  2. Run:  
     ```
     python main.py
     ```
  3. The script prints the encoded bytes and the decoded string.

## Summary

Both files illustrate the basic concept of converting a string to an encoded format and then decoding it back to its original form, using the standard libraries of each language.


# Exam Notes: Encoding, Serializing, and Marshalling

## Encoding
- **Encoding** is the process of converting data (like text) into a specific format (like bytes) for storage or transmission.
- Common encoding types include **Base64** (used for safely transmitting binary data as text), and **character encodings** like UTF-8 or ASCII.
- **Charset** (character set) defines the mapping between characters and their binary representations.  
  - Example: UTF-8 can represent all Unicode characters, while ASCII is limited to basic English characters.
- In code:
  - **JavaScript**: `btoa()` encodes a string to Base64, `atob()` decodes it.
  - **Python**: `.encode()` converts a string to bytes, `.decode()` converts bytes back to a string.

## Serializing
- **Serializing** means converting an object or data structure into a format that can be stored or transmitted and later reconstructed.
- Common formats: **JSON**, **XML**, **YAML**.
- Example: In JavaScript, `JSON.stringify()` serializes an object to a JSON string; in Python, `json.dumps()` does the same.

## Marshalling
- **Marshalling** is similar to serializing, but often refers to preparing data for transmission between different programming environments or systems.
- It may include converting data types or structures so they can be understood by another language or system.
- Example: Python's `pickle` module can marshal (serialize) Python objects for storage or transfer.

## Key Points
- **Encoding** is about converting data to a different representation (often text/binary).
- **Serializing** is about converting complex data (like objects) into a storable/transmittable format.
- **Marshalling** is serializing with the intent of cross-system or cross-language compatibility.
- **Charsets/Encoding types** (like UTF-8, ASCII) are important to ensure data is interpreted correctly across systems.

---

## Difference between Serializing and Marshalling

- **Serializing** is the process of converting an object or data structure into a format (like JSON or XML) that can be stored or transmitted and later reconstructed in the same environment or language.  
  - Example: Saving a JavaScript object as a JSON string and loading it back in JavaScript.

- **Marshalling** is similar to serializing, but it usually refers to preparing data for transmission between different programming environments, languages, or systems. Marshalling may involve additional steps to ensure compatibility, such as converting data types or structures so they can be understood by another system.
  - Example: Converting a Python object into a format that can be sent over a network and reconstructed in a Java application.

**Summary:**  
- Serialization is mainly about saving or transmitting data within the same system or language.
- Marshalling is about making data portable and compatible across different systems or languages.
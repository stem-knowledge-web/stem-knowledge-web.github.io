---
title: "Chapter 1: Python Basics"
subtitle: "Getting started with Python"
weight: 1
---

## Introduction to Python

Python is a high-level, interpreted programming language created by Guido van Rossum and first released in 1991. It emphasizes code readability with its notable use of significant whitespace.

### Why Python?

Python has become one of the most popular programming languages because it is:

- **Easy to learn**: Clean syntax and readability make it accessible to beginners
- **Versatile**: Used in web development, data science, AI, scientific computing, and more
- **Powerful**: Extensive standard library and third-party packages
- **Cross-platform**: Runs on Windows, macOS, Linux, and many other platforms

### Setting Up Python

To get started with Python, you need to install it on your computer:

1. Visit [python.org](https://www.python.org/)
2. Download the latest version for your operating system
3. Run the installer and follow the instructions

### Your First Python Program

Let's create the traditional "Hello, World!" program:

```python
# This is a comment
print("Hello, World!")
```

When you run this program, it will output:

```
Hello, World!
```

### Python Syntax Basics

Python uses indentation (whitespace) to define code blocks, unlike many other languages that use braces:

```python
# Example of indentation
if True:
    print("This is indented")
    print("So is this")
print("This is not indented")
```

### Variables and Data Types

Python is a dynamically typed language, which means you don't need to declare variable types:

```python
# Integer
age = 25

# Float
temperature = 98.6

# String
name = "Alice"

# Boolean
is_student = True

# List
fruits = ["apple", "banana", "cherry"]

# Dictionary
person = {"name": "Bob", "age": 30}
```

### Basic Operations

Python supports standard arithmetic operations:

```python
# Addition
sum = 5 + 3  # 8

# Subtraction
difference = 10 - 4  # 6

# Multiplication
product = 4 * 3  # 12

# Division
quotient = 8 / 2  # 4.0 (note: returns a float)

# Integer division
integer_division = 9 // 2  # 4 (discards remainder)

# Modulus (remainder)
remainder = 9 % 2  # 1

# Exponentiation
power = 2 ** 3  # 8
```

## Practice Exercises

1. Write a program that calculates and prints the area of a rectangle with width 7 and height 5.
2. Create variables to store your name, age, and whether you're a student. Print each variable on a new line.
3. Write a program that converts temperatures from Fahrenheit to Celsius using the formula: C = (F - 32) * 5/9
---
title: "Chapter 3: Data Structures"
subtitle: "Organizing and managing data in Python"
weight: 3
---

## Python Data Structures

Data structures are containers that organize and group data according to their type. Python has several built-in data structures that make it easy to store and manipulate collections of data.

### Lists

Lists are ordered, mutable collections that can contain items of different types.

```python
# Creating a list
fruits = ["apple", "banana", "cherry"]

# Accessing elements (indexing starts at 0)
first_fruit = fruits[0]  # "apple"
last_fruit = fruits[-1]  # "cherry"

# Modifying elements
fruits[1] = "blueberry"  # ["apple", "blueberry", "cherry"]

# Adding elements
fruits.append("date")  # ["apple", "blueberry", "cherry", "date"]
fruits.insert(1, "apricot")  # ["apple", "apricot", "blueberry", "cherry", "date"]

# Removing elements
fruits.remove("cherry")  # ["apple", "apricot", "blueberry", "date"]
popped_fruit = fruits.pop()  # ["apple", "apricot", "blueberry"], popped_fruit = "date"

# List operations
length = len(fruits)  # 3
combined = fruits + ["elderberry", "fig"]  # ["apple", "apricot", "blueberry", "elderberry", "fig"]
repeated = ["a", "b"] * 3  # ["a", "b", "a", "b", "a", "b"]

# Checking if an item exists
if "apple" in fruits:
    print("Yes, apple is a fruit!")
```

### Tuples

Tuples are ordered, immutable collections that can contain items of different types.

```python
# Creating a tuple
coordinates = (10, 20)

# Accessing elements
x = coordinates[0]  # 10
y = coordinates[1]  # 20

# Tuples cannot be modified after creation
# coordinates[0] = 15  # This would cause an error

# Tuple unpacking
x, y = coordinates  # x = 10, y = 20

# Tuple operations
combined = coordinates + (30, 40)  # (10, 20, 30, 40)
repeated = ("a", "b") * 2  # ("a", "b", "a", "b")
```

### Dictionaries

Dictionaries are unordered, mutable collections of key-value pairs.

```python
# Creating a dictionary
person = {
    "name": "Alice",
    "age": 25,
    "is_student": True
}

# Accessing values
name = person["name"]  # "Alice"
age = person.get("age")  # 25
# Using get() prevents errors for non-existent keys
occupation = person.get("occupation", "Unknown")  # "Unknown"

# Modifying and adding key-value pairs
person["age"] = 26
person["occupation"] = "Engineer"

# Removing key-value pairs
del person["is_student"]
occupation = person.pop("occupation")  # Removes key and returns value

# Dictionary operations
keys = person.keys()  # dict_keys(['name', 'age'])
values = person.values()  # dict_values(['Alice', 26])
items = person.items()  # dict_items([('name', 'Alice'), ('age', 26)])

# Checking if a key exists
if "name" in person:
    print("Name is defined!")
```

### Sets

Sets are unordered, mutable collections of unique items.

```python
# Creating a set
fruits = {"apple", "banana", "cherry"}

# Adding elements
fruits.add("date")  # {"apple", "banana", "cherry", "date"}
# Adding a duplicate has no effect
fruits.add("apple")  # {"apple", "banana", "cherry", "date"}

# Removing elements
fruits.remove("banana")  # {"apple", "cherry", "date"}
# discard() doesn't raise an error if the item doesn't exist
fruits.discard("elderberry")  # No change

# Set operations
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union = set1 | set2  # {1, 2, 3, 4, 5}
intersection = set1 & set2  # {3}
difference = set1 - set2  # {1, 2}
symmetric_difference = set1 ^ set2  # {1, 2, 4, 5}
```

## Solutions to Chapter 2 Practice Exercises

1. Check if a number is positive, negative, or zero:
```python
number = float(input("Enter a number: "))

if number > 0:
    print("The number is positive.")
elif number < 0:
    print("The number is negative.")
else:
    print("The number is zero.")
```

2. Print even numbers between 1 and 20:
```python
for num in range(1, 21):
    if num % 2 == 0:
        print(num)
```

3. Password checker:
```python
while True:
    password = input("Enter the password: ")
    if password == "python123":
        print("Access granted!")
        break
    else:
        print("Incorrect password. Try again.")
```

## Practice Exercises

1. Create a list of your favorite foods, then add a new food, remove one, and print the sorted list.
2. Create a dictionary with information about a book (title, author, year) and print each key-value pair.
3. Create two sets of numbers and find their union, intersection, and difference.
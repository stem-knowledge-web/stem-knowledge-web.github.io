---
title: "Chapter 2: Control Flow"
subtitle: "Making decisions and repetition in code"
weight: 2
---

## Control Flow in Python

Control flow refers to the order in which statements are executed in a program. Python provides various control structures that allow you to alter the flow of execution.

### Conditional Statements

Conditional statements allow you to execute code based on whether certain conditions are true or false.

#### If Statement

```python
age = 18

if age >= 18:
    print("You are an adult.")
```

#### If-Else Statement

```python
temperature = 15

if temperature > 25:
    print("It's warm outside.")
else:
    print("It's cool outside.")
```

#### If-Elif-Else Statement

```python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grade is {grade}")
```

### Loops

Loops are used to repeat a block of code multiple times.

#### For Loop

The `for` loop is used to iterate over a sequence (like a list, tuple, dictionary, string, or range).

```python
# Iterating over a range
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)

# Iterating over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

#### While Loop

The `while` loop executes a block of code as long as a condition is true.

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

### Break and Continue

These statements can be used to control the flow of loops:

- `break`: Exits the loop prematurely
- `continue`: Skips the current iteration and moves to the next one

```python
# Using break
for i in range(10):
    if i == 5:
        break
    print(i)  # Prints 0, 1, 2, 3, 4

# Using continue
for i in range(5):
    if i == 2:
        continue
    print(i)  # Prints 0, 1, 3, 4
```

### Combining Conditions

You can combine conditions using logical operators:

- `and`: True if both conditions are true
- `or`: True if at least one condition is true
- `not`: Inverts the condition

```python
age = 25
has_license = True

if age >= 18 and has_license:
    print("You can drive.")

temperature = 30
is_raining = True

if temperature > 25 or is_raining:
    print("Weather is notable.")

is_weekend = False
if not is_weekend:
    print("It's a weekday.")
```

## Solutions to Chapter 1 Practice Exercises

1. Area of rectangle:
```python
width = 7
height = 5
area = width * height
print(f"The area of the rectangle is {area} square units.")
```

2. Variables for personal information:
```python
name = "Alice"
age = 25
is_student = True

print(name)
print(age)
print(is_student)
```

3. Fahrenheit to Celsius converter:
```python
fahrenheit = 98.6
celsius = (fahrenheit - 32) * 5/9
print(f"{fahrenheit}°F is equal to {celsius:.2f}°C")
```

## Practice Exercises

1. Write a program that checks if a number is positive, negative, or zero.
2. Create a program that prints all even numbers between 1 and 20 using a loop.
3. Write a program that asks the user for a password and keeps asking until they enter "python123".
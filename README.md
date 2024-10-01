## JavaScript Tutorial Notes

### 1. Introduction to JavaScript
- JavaScript is a versatile programming language primarily used for creating interactive and dynamic web applications.
- It can be linked in two ways:
  - **Internal Linking**: Adding JavaScript code directly inside an HTML file.
  - **External Linking**: Referencing a separate JavaScript file using the `<script src="file.js"></script>` tag.

### 2. Variables in JavaScript
- JavaScript provides three ways to declare variables: `var`, `let`, and `const`.
  - `var`: Global or function-scoped and can be re-assigned.
  - `let`: Block-scoped and can be re-assigned.
  - `const`: Block-scoped and cannot be re-assigned after initialization.
- Variable naming conventions:
  - camelCase (preferred): `firstName`
  - snake_case: `first_name`
  - PascalCase (usually for classes): `FirstName`

### 3. Data Types and Operators
- **Primitive Data Types**: Numbers, Strings, Booleans, NULL, Undefined.
- **Complex Data Type**: Objects (used to store collections of data and more complex entities).
  
#### Operators in JavaScript
- Arithmetic operators: `+`, `-`, `*`, `/`
- `typeof` operator: Used to determine the data type of a variable (e.g., `typeof 123` returns `"number"`).

### 4. Conditional Statements and Switch Case
- **If-Else Statements**: Used for basic conditional checks.
- **Ternary Operator**: A shorthand for simple if-else conditions. `condition ? trueResult : falseResult`
- **Switch Case**: Useful for handling multiple possible values of a single variable.

```javascript
switch(option){
    case 1: console.log('Option 1');
    break;
    case 2: console.log('Option 2');
    break;
    default: console.log('Invalid Option');
}
```

### 5. Logical Operators
- `&&` (AND): All conditions must be true.
- `||` (OR): Any one condition must be true.
- `!` (NOT): Inverts the value of a boolean.

### 6. Loops
- **For Loop**: Used when the number of iterations is known.
- **While Loop**: Used when the number of iterations is unknown.
- **Do-While Loop**: Similar to a while loop, but executes at least once.

### 7. Functions in JavaScript
- **Function Declaration**: `function name(){...}`
- **Arrow Function**: A more concise way to write functions using `=>`.
  ```javascript
  const add = (a, b) => a + b;
  ```
- **High Order Function**: A function that takes another function as an argument or returns a function.

### 8. Arrays
- Arrays are used to store multiple values in a single variable.
  ```javascript
  const students = ['Ash', 'John', 'James'];
  ```
- Array methods:
  - `.push()`: Adds a new element at the end.
  - `.pop()`: Removes the last element.
  - `.indexOf()`: Finds the index of a value.
  - `.reverse()`: Reverses the order of the elements.
- JavaScript arrays can contain multiple data types (heterogeneous).

### 9. Array High Order Functions
- **forEach**: Iterates over elements in an array and executes a function for each element.
- **map**: Creates a new array with the results of calling a function on every element in the original array.
- **filter**: Creates a new array with elements that pass a test provided by a function.
- **find**: Returns the first element that satisfies a condition.
- **findIndex**: Returns the index of the first element that satisfies a condition.
- **includes**: Checks if an array contains a specific value.
- **slice**: Extracts a section of an array and returns a new array.
- **splice**: Adds/Removes elements from an array.

### 10. Higher-Order Functions and Callbacks
- **Higher-Order Functions**: Functions that take other functions as arguments or return functions.
  ```javascript
  function add(a, b, callback) {
      let result = a + b;
      callback(result);
  }
  add(2, 4, console.log); // Outputs: 6
  ```
- **Callback Hell**: A situation where callbacks are nested within other callbacks, making code hard to read and maintain. Solutions include using Promises or Async/Await.

### 11. Miscellaneous Concepts
- **Hoisting**: Function declarations are moved to the top of their scope before code execution. This allows functions to be called before they are defined.
- **`this` Keyword**: 
  - In a regular function, `this` refers to the object that is calling the function.
  - In an arrow function, `this` retains the value of the enclosing lexical context.
- **Spread Operator (`...`)**: Allows an expression to be expanded in places where multiple elements/variables are expected.

This structure covers the key concepts and syntax explained in the JavaScript tutorial provided in the file.
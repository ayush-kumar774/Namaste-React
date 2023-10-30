# Export/Imports

There are two types of export and imports:

## Default Export

A default export is the most common way to export a function, class, or variable from a module. It can only be one per file. A default export is the only named export in a module. It can be imported using `import name from "module"` syntax. A default export is a single object or function that can be imported by its filename.

### Example

```javascript
// mathOperations.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

export default { add, subtract, multiply, divide };


// mathOperations.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

export default { add, subtract, multiply, divide };

// main.js
import mathOperations from './mathOperations.js';

const sum = mathOperations.add(4, 5);        // Using the add function
const difference = mathOperations.subtract(9, 4);  // Using the subtract function
const product = mathOperations.multiply(2, 3);  // Using the multiply function
const quotient = mathOperations.divide(10, 2);   // Using the divide function

console.log(sum);         // This will output: 9
console.log(difference);  // This will output: 5
console.log(product);     // This will output: 6
console.log(quotient);    // This will output: 5

```

## Name Export

When you want to import multiple items from the same file, use name exports.

### Example

```javascript
// constants.js
export const PI = 3.14159;
export const MAX_VALUE = 1000;
export const MIN_VALUE = -1000;

// main.js
import { PI as circleRatio, MAX_VALUE as max, MIN_VALUE as min } from './constants.js';

console.log(circleRatio); // This will output: 3.14159
console.log(max);         // This will output: 1000
console.log(min);         // This will output: -1000

```

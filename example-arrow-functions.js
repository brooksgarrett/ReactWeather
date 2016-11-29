// ES6 Example using Arrow Functions
// Lecture 39.

var names = ['Brooks', 'Trae', 'Andrew'];

// Traditional ForEach function
names.forEach(function(element) {
    console.log(`ForEach ${element}`);
});

// Same concept using arrow functions.
// Curly braces give multi-line statement bodies
names.forEach((name) => {
    console.log(`ArrowFunction ${name}`);
});

// Shortcut Arrow Function
// You can use single line statements
// Return value is output of statement
names.forEach((name) => console.log(`Shortcut ${name}`));

var returnMe = (name) => `${name}!`;
console.log(returnMe('Bill'));

// Arrow functions take 'this' binding of parent
// Anonymous functions take their own 'this' binding
var person = {
    name: 'Lucy',
    /* This won't work because there is no this.name (no name defined in anon func)
    greet: function () {
        names.forEach(function () {
            console.log(`${this.name} says hi to ${name}`);
        });
    */
    greet: function () {
        names.forEach((name) => console.log(`${this.name} says hi to ${name}`));
    }
  }

person.greet();

// Challenge Area
function add (a, b) {
    return a + b;
}

// Multiline add arrow function
var addStatement = (a, b) => {
    return a + b;
}

// Expression syntax
var addExpression = (a, b) => a + b;

console.log(`1,3 | ${add(1,3)} ${addStatement(1,3)} ${addExpression(1,3)}`);
console.log(`0,9 | ${add(0,9)} ${addStatement(0,9)} ${addExpression(0,9)}`);

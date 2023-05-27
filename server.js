// Importing the necessary modules
const readline = require('readline');

// Creating a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate the perimeter of a rectangle
function calculateRectanglePerimeter() {
  rl.question('Enter the length of the rectangle: ', (length) => {
    rl.question('Enter the width of the rectangle: ', (width) => {
      const perimeter = 2 * (parseFloat(length) + parseFloat(width));
      console.log(`The perimeter of the rectangle is: ${perimeter}`);
      rl.close();
    });
  });
}

// Function to calculate the perimeter of a square
function calculateSquarePerimeter() {
  rl.question('Enter the side length of the square: ', (side) => {
    const perimeter = 4 * parseFloat(side);
    console.log(`The perimeter of the square is: ${perimeter}`);
    rl.close();
  });
}

// Function to calculate the perimeter of a circle
function calculateCirclePerimeter() {
  rl.question('Enter the radius of the circle: ', (radius) => {
    const perimeter = 2 * Math.PI * parseFloat(radius);
    console.log(`The perimeter of the circle is: ${perimeter}`);
    rl.close();
  });
}

// Main function to prompt the user for the shape and call the corresponding perimeter calculation function
function calculatePerimeter() {
  rl.question('Enter the shape (rectangle, square, circle): ', (shape) => {
    if (shape === 'rectangle') {
      calculateRectanglePerimeter();
    } else if (shape === 'square') {
      calculateSquarePerimeter();
    } else if (shape === 'circle') {
      calculateCirclePerimeter();
    } else {
      console.log('Invalid shape entered!');
      rl.close();
    }
  });
}

// Starting the application
calculatePerimeter();

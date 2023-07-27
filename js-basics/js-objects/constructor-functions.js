// Constructor function for creating circle objects
// PascalNotation 

function Circle(radius) {
  this.radius = radius;
  this.area = function() {
    return Math.PI * this.radius ** 2;
  };
}

// Creating instances of Circle using the 'new' keyword
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.area()); // Output: 78.53981633974483
console.log(circle2.area()); // Output: 314.1592653589793

// Factory function to create circle objects
function createCircle(radius) {
    return {
      radius: radius,
      getArea: function() {
        return Math.PI * this.radius ** 2;
      },
      getCircumference: function() {
        return 2 * Math.PI * this.radius;
      }
    };
  }
  
  // Creating circles using the factory function
  const circle1 = createCircle(5);
  const circle2 = createCircle(8);
  
  console.log(circle1.getArea()); // Output: 78.53981633974483
  console.log(circle2.getCircumference()); // Output: 50.26548245743669
  
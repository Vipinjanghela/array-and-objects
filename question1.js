//Q1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
//The inner function should access both the parameter of outerFunction and a variable declared within
//outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
//variables even after outerFunction has finished executing.
//ans:>>
// Define the outerFunction
function outerFunction(param) {
    // Variable declared within outerFunction
    const outerVariable = 'I am an outer variable';
  
    // Define and return the inner function
    return function innerFunction() {
      // The inner function can access both the parameter of outerFunction
      // and the outerVariable declared within outerFunction
      console.log(`Parameter: ${param}`);
      console.log(`Outer Variable: ${outerVariable}`);
    };
  }
  
  // Create an instance of the inner function
  const myInnerFunction = outerFunction('Hello');
  
  // Call the inner function
  myInnerFunction();
  
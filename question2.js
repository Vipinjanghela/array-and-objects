//Q2. Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function
//that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test
//the function with various patterns and strings.
//ans:>>
// Define the function that checks for a regex match
function hasMatch(pattern, str) {
    const regex = new RegExp(pattern);
    return regex.test(str);
  }
  
  // Test cases
  console.log(hasMatch('\\d+', 'There are 123 apples')); // Output: true (matches numbers)
  console.log(hasMatch('apple', 'I have an apple'));    // Output: true (matches 'apple')
  console.log(hasMatch('orange', 'I have an apple'));   // Output: false (does not match 'orange')
  console.log(hasMatch('^There', 'There are 123 apples')); // Output: true (matches 'There' at the beginning)
  console.log(hasMatch('apples$', 'There are 123 apples')); // Output: true (matches 'apples' at the end)
  console.log(hasMatch('a.b', 'aXb')); // Output: true (matches 'aXb', where '.' matches any character)
  console.log(hasMatch('a.*b', 'a123b')); // Output: true (matches 'a123b', where '.*' matches any characters in between)
  
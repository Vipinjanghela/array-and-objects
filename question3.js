//Q3. Write a JavaScript program that demonstrates the use of character classes in regular expressions.
//Create a function that searches for specific character classes in a given string and returns the matches. Test
//the function with patterns for digits, uppercase letters, lowercase letters, and special characters.
//ans:>>
// Define the function that finds matches for character classes
function findMatches(pattern, str) {
    const regex = new RegExp(pattern, 'g'); // 'g' flag for global search
    return str.match(regex) || []; // Returns an array of matches or an empty array if no matches
  }
  
  // Test cases
  const testString = "Hello World! 123 ABC @#$";
  
  // Match digits
  console.log("Digits:", findMatches('\\d', testString)); 
  // Output: Digits: [ '1', '2', '3' ]
  
  // Match uppercase letters
  console.log("Uppercase Letters:", findMatches('[A-Z]', testString)); 
  // Output: Uppercase Letters: [ 'H', 'W', 'A', 'B', 'C' ]
  
  // Match lowercase letters
  console.log("Lowercase Letters:", findMatches('[a-z]', testString)); 
  // Output: Lowercase Letters: [ 'e', 'l', 'l', 'o', 'o', 'r', 'l', 'd', 'a', 'b', 'c' ]
  
  // Match special characters (not alphanumeric)
  console.log("Special Characters:", findMatches('[^a-zA-Z0-9]', testString)); 
  // Output: Special Characters: [ ' ', ' ', '!', ' ', ' ', '@', '#', '$' ]
  
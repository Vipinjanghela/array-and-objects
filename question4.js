//Q4. Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not
//only checks if there is a match but also extracts specific parts of the matched text using groups. Test the
//function with patterns that include groups to capture different parts of a date (e.g., day, month, and year)
//from a given string.
//ans:>>
// Define the function that checks for a match and extracts parts using groups
function extractWithGroups(pattern, str) {
    const regex = new RegExp(pattern);
    const match = regex.exec(str); // Use exec to get detailed match information
  
    if (match) {
      // match[0] is the entire match, and match[1], match[2], etc., are the captured groups
      return match.slice(1); // Return all captured groups, excluding the full match
    } else {
      return null; // Return null if no match is found
    }
  }
  
  // Test cases with date patterns
  const testString1 = "Today's date is 25-08-2024.";
  const testString2 = "The event is scheduled for 12/04/2023.";
  
  // Regex pattern to capture day, month, and year in "dd-mm-yyyy" format
  const datePattern1 = '(\\d{2})-(\\d{2})-(\\d{4})';
  
  // Regex pattern to capture day, month, and year in "dd/mm/yyyy" format
  const datePattern2 = '(\\d{2})/(\\d{2})/(\\d{4})';
  
  // Test the function with different date patterns
  console.log("Extracted Date (dd-mm-yyyy):", extractWithGroups(datePattern1, testString1)); 
  // Output: Extracted Date (dd-mm-yyyy): [ '25', '08', '2024' ]
  
  console.log("Extracted Date (dd/mm/yyyy):", extractWithGroups(datePattern2, testString2)); 
  // Output: Extracted Date (dd/mm/yyyy): [ '12', '04', '2023' ]
  
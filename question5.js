//Q5. You are building a shipping application. Write a program that takes the type of package
// ("standard", "express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time
 //   based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and
 //   "overnight" would be delivered the next day.
 //ans:>>
 // Define the function to calculate and print the estimated delivery time
function getEstimatedDeliveryTime(packageType) {
    let deliveryTime;
  
    switch (packageType.toLowerCase()) {
      case 'standard':
        deliveryTime = '3-5 days';
        break;
      case 'express':
        deliveryTime = '1-2 days';
        break;
      case 'overnight':
        deliveryTime = 'Next day';
        break;
      default:
        deliveryTime = 'Invalid package type';
    }
  
    console.log(`Estimated delivery time for "${packageType}": ${deliveryTime}`);
  }
  
  // Test the function with different package types
  getEstimatedDeliveryTime('standard');  // Output: Estimated delivery time for "standard": 3-5 days
  getEstimatedDeliveryTime('express');   // Output: Estimated delivery time for "express": 1-2 days
  getEstimatedDeliveryTime('overnight'); // Output: Estimated delivery time for "overnight": Next day
  getEstimatedDeliveryTime('international'); // Output: Estimated delivery time for "international": Invalid package type
  
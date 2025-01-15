# MongoDB $inc operator error with non-numeric value
This example demonstrates an incorrect usage of the `$inc` operator in MongoDB, attempting to increment a field with a non-numeric value.  The `$inc` operator is designed to increment numeric values only.  Attempting to use it with strings or other non-numeric data types will result in an error.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the correct solution.
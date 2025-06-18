var customerName = 'bob';

// Function that uppercases the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function that creates a global variable bestCustomer and assigns it 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob'; // Declaring without var/let/const makes it global (not recommended normally)
}
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'Karen';

// Function that attempts to change the value of the constant
function changeLeastFavoriteCustomer() {
  // This will throw a TypeError because you're trying to reassign a const
  leastFavoriteCustomer = 'Not Karen'; 
}

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var validCharaters = [];


// Function to prompt user for password options
function getPasswordOptions() {
  const passwordLength = parseInt(prompt("Password length?"));
  if (passwordLength<8 || passwordLength>126 || isNaN(passwordLength)) {
    alert( "Please enter a valid length");
    getPasswordOptions()
  }
  const lowercase = confirm("Include lowercase characters?");
  const uppercase = confirm("Include uppercase characters?");
  const numeric = confirm("Include numeric characters?");
  const special = confirm("Include special characters?");
  if(lowercase) {
    validCharaters = validCharaters.concat(lowerCasedCharacters);
  }
  if(uppercase) {
    validCharaters = validCharaters.concat(upperCasedCharacters);
  }
  if(numeric) {
    validCharaters = validCharaters.concat(numericCharacters);
  }
  if(special) {
    validCharaters = validCharaters.concat(specialCharacters);
  }
  if(!lowercase && !uppercase && !numeric && !special) {
    alert("Please select atleast one of the options");
    getPasswordOptions();
  }
  return {passwordLength,validCharaters}
}

// Function for getting a random element from an array
function getRandom(arr) {
  var index = Math.floor(Math.random() * arr.length)
  return arr[index];
}

// Function to generate password with user input
function generatePassword() {
  var validResponse = getPasswordOptions()
  console.log(validResponse);
  var password = "";
  for(var i=0; i<validResponse.passwordLength; i++ ) {
    password += getRandom(validResponse.validCharaters);
    console.log(password);
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
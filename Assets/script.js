// Assignment code here
var numberCharacters="0123456789";
var specialCharacters="!#$%&()*+,-./:;<=>?@[]\^_~`{}|";
var upperCaseCharacters="abcdefghijklmnopqrstuvwxyz";
var lowerCaseCharacters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var GeneratedPass="";
var promptInputs=[];
var passLength;
var acceptData= false;



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

// removed variable and turned line 20 into a function 
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = GeneratedPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// added fucntion to generate a password with the use of boolean to 
// determine values are strictly true

function generatePassword() {
  selectLength();
  if (acceptData === true) {
    if (getUserSelections()===false) {
      return;
    }
    passRandomizer();
      return;
  } else {
    console.log(acceptData)
    return;
  }
}

// added function to determine how long users want their password to be generated with booleans
// tested in live server and function is working properly
function selectLength() {
  var UserPassLength =prompt ("Enter how long you would like your password (Minimum 8 characters and maximum 128 characters):", "Enter your number Here.")
  if (UserPassLength < 8 || UserPassLength > 128) {
    alert ("Please enter a valid length.");
    return;
  } else if (UserPassLength >= 8 || UserPassLength <= 128) {
      passLength = UserPassLength;
      acceptData= true;
  } else {
    alert ("Please enter a valid value.");
    return;
  }
}

function getUserSelections() {


// function to determine if users prefer lowercase/uppercase characters
var UserLowerCase= confirm ("Would you like to have lowercase character(s)?");
if (UserLowerCase === true) {
    promptInputs = promptInputs + lowerCaseCharacters;
    console.log(promptInputs);
}


var UserUpperCase= confirm ("Would you like to have uppercase character(s)");
if (UserUpperCase === true) {
    promptInputs =promptInputs + upperCaseCharacters;
    console.log(promptInputs);
}


// function to determine if users prefer numbers

var UserNumbers = confirm ("would you like to have number(s)?");
if (UserNumbers === true) {
    promptInputs= promptInputs + numberCharacters;
    console.log(promptInputs);
}


// function to determine if users prefer special characters

var UserSpecialChars = confirm ("Would you like to have special character(s)? (example: %, $, *, !, ~)")
if (UserSpecialChars === true) {
    promptInputs= promptInputs + specialCharacters;
    console.log(promptInputs);
}



//insert a conditional statement if users selections are false

if (UserLowerCase===false && UserSpecialChars === false && UserNumbers === false && UserUpperCase === false) {
alert ("Please make one valid selection.");
  return false;
}
}
// function to randomize passwords after getting all user preferred inputs
// https://dev.to/nazanin_ashrafi/let-s-create-a-simple-random-password-generator-with-javascript-pdb
// https://www.w3schools.com/jsref/jsref_charat.asp

function passRandomizer () {
  for (var i= 0; i < passLength; i++) {
    GeneratedPass = GeneratedPass + promptInputs.charAt(Math.floor(Math.random() * promptInputs.length))
  }
  console.log(GeneratedPass)
}
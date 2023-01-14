// Assignment code here
var numberCharacters="0123456789";
var specialCharacters="!#$%&()*+,-./:;<=>?@[]\^_~`{}|";
var upperCaseCharacters="abcdefghijklmnopqrstuvwxyz";
var lowerCaseCharacters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var password="";
var passLength;
var acceptData= false;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Assignment code here
var numberCharacters="0123456789";
var specialCharacters="!#$%&()*+,-./:;<=>?@[]\^_~`{}|";
var upperCaseCharacters="abcdefghijklmnopqrstuvwxyz";
var lowerCaseCharacters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var password="";
var promptInputs=[];
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

// added fucntion to generate a password with the use of boolean to 
// determine values are strictly true

function generatePassword() {
  selectLength();
  if (acceptData ===true) {
    if (getUserInput()===false) {
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
  } else if (UserPassLength => 8 || UserPassLength <= 128) {
      passLength = UserPassLength;
      acceptData= true;
  } else {
    alert ("Please enter a valid value.");
    return;
  }
}

// function to determine if users prefer lowercase/uppercase characters





// function to determine if users prefer numbers




// function to determine if users prefer special characters




// function to randomize passwords after getting all user preferred inputs
// https://dev.to/nazanin_ashrafi/let-s-create-a-simple-random-password-generator-with-javascript-pdb
// https://www.w3schools.com/jsref/jsref_charat.asp

function passRandomizer () {
  for (var i= 0; i < passLength; i++) {
    result = result + promptInputs.charAT(Math.floor(Math.random()* promptInputs.length))
  }
  console.log(result)
}
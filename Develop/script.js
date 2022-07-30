// Assignment code here
let passwordParameters = {
  length : 0,
  lowercase : null,
  uppercase : null,
  numbers : null,
  specialCharacters : null,
}


function generatePassword() {
  window.alert("Starting password generation");
  passwordParameters.length = determinePasswordLength();
  determineCharacterTypes();
  //Debugging Stuff
  console.log ("lenght selected - " + passwordParameters.length);
  if (passwordParameters.lowercase) {
    console.log("Lowercase");
  }
  if (passwordParameters.lowercase) {
    console.log("Uppercase");
  }
  if (passwordParameters.lowercase) {
    console.log("Numbers");
  }
  if (passwordParameters.lowercase) {
    console.log("Special characters");
  }

}

function determinePasswordLength() {
  let length = null;
  let confirm = true;
  while (length < 8 || length > 128 || Number.isNaN(length) || !confirm) {
    length = parseInt(window.prompt("Enter the length of desired password. Must be between 8 and 128. Decimals will be rounded down"));
    if (length < 8 || length > 128 || Number.isNaN(length)) {
      window.alert("Please input an whole number value between 8 and 128");
    }
    confirm = (window.confirm("Are you sure a length of " + length + " is okay?"))
  }
  return length
}
function determineCharacterTypes() {
  let confirm = false;
  while (!confirm) {S
    passwordParameters.lowercase = window.confirm("include lowercase characters?");
    passwordParameters.uppercase = window.confirm("include uppercase characters?");
    passwordParameters.numbers = window.confirm("include numeric characters?");
    passwordParameters.specialCharacters = window.confirm("include special characters?");
    confirm = (window.confirm("Are you sure your selection is okay? " + 
    passwordParameters.lowercase + passwordParameters.uppercase + passwordParameters.numbers + passwordParameters.specialCharacters));
  }

}


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


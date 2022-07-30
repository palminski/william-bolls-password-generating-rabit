// Assignment code here
let passwordParameters = {
  length : 0,
  lowercase : null,
  uppercase : null,
  numbers : null,
  specialCharacters : null,
}
let arrayLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let arrayUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let arrayNumbers = [1,2,3,4,5,6,7,8,9,0];
let arraySpecialCharacters = [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","}","|","~"];


function generatePassword() {
  window.alert("Starting password generation");
  passwordParameters.length = determinePasswordLength();
  determineCharacterTypes();
  //Debugging Stuff
  console.log ("lenght selected - " + passwordParameters.length);
  if (passwordParameters.lowercase) {
    console.log("Lowercase");
  }
  if (passwordParameters.uppercase) {
    console.log("Uppercase");
  }
  if (passwordParameters.numbers) {
    console.log("Numbers");
  }
  if (passwordParameters.specialCharacters) {
    console.log("Special characters");
  }
  return assemblePassword();
}

function determinePasswordLength() {
  let length = null;
  let confirm = true;
  while (length < 8 || length > 128 || Number.isNaN(length) || !confirm) {
    length = parseInt(window.prompt("Enter the length of desired password. Must be between 8 and 128. Decimals will be rounded down"));
    if (length < 8 || length > 128 || Number.isNaN(length)) {
      window.alert("Please input an whole number value between 8 and 128");
    }
    if (!Number.isNaN(length)){
      confirm = (window.confirm("Are you sure a length of " + length + " is okay?"))
    }
  }
  return length
}
function determineCharacterTypes() {
  let confirm = false;
  let selectedCharacterTypes = "";
  while (!confirm) {
    passwordParameters.lowercase = window.confirm("include lowercase characters?");
    passwordParameters.uppercase = window.confirm("include uppercase characters?");
    passwordParameters.numbers = window.confirm("include numeric characters?");
    passwordParameters.specialCharacters = window.confirm("include special characters?");

    if (passwordParameters.lowercase) {
      selectedCharacterTypes += "[Lowercase], ";
    }
    if (passwordParameters.uppercase) {
      selectedCharacterTypes += "[Uppercase], ";
    }
    if (passwordParameters.numbers) {
      selectedCharacterTypes += "[Numbers], ";
    }
    if (passwordParameters.specialCharacters) {
      selectedCharacterTypes += "[Special Characters], ";
    }
    confirm = (window.confirm("You have selected " + selectedCharacterTypes + "correct?"));
  }

}

function assemblePassword() {
  let finalPassword = "";
  let arrayPasswordElements = [];
  if (passwordParameters.lowercase) {
    arrayPasswordElements.push(arrayLowercase);
  }
  if (passwordParameters.uppercase) {
    arrayPasswordElements.push(arrayUppercase);
  }
  if (passwordParameters.numbers) {
    arrayPasswordElements.push(arrayNumbers);
  }
  if (passwordParameters.specialCharacters) {
    arrayPasswordElements.push(arraySpecialCharacters);
  }

  console.log (arrayPasswordElements);

  for (i=1;i<=passwordParameters.length;i++) {
    finalPassword += "0";
  }
  return finalPassword;
}

function randomRange() {
  
}


//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
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


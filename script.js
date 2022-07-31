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
let arrayPasswordElements = [];


function generatePassword() {
  window.alert("Starting password generation");
  passwordParameters.length = determinePasswordLength();
  determineCharacterTypes();
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
    if (!Number.isNaN(length) && length>=8 && length<= 128){
      confirm = (window.confirm("Are you sure a length of " + length + " is okay?"))
    }
  }
  return length
}
function determineCharacterTypes() {
  let confirm = false;
  let selectedCharacterTypes = "";
  arrayPasswordElements = [];

  while (!confirm || arrayPasswordElements.length<1) {
    passwordParameters.lowercase = window.confirm("include lowercase characters?");
    passwordParameters.uppercase = window.confirm("include uppercase characters?");
    passwordParameters.numbers = window.confirm("include numeric characters?");
    passwordParameters.specialCharacters = window.confirm("include special characters?");
    selectedCharacterTypes = "";
    arrayPasswordElements = [];
    if (passwordParameters.lowercase) {
      selectedCharacterTypes += "[Lowercase], ";
      arrayPasswordElements.push(arrayLowercase);
    }
    if (passwordParameters.uppercase) {
      selectedCharacterTypes += "[Uppercase], ";
      arrayPasswordElements.push(arrayUppercase);
    }
    if (passwordParameters.numbers) {
      selectedCharacterTypes += "[Numbers], ";
      arrayPasswordElements.push(arrayNumbers);
    }
    if (passwordParameters.specialCharacters) {
      selectedCharacterTypes += "[Special Characters], ";
      arrayPasswordElements.push(arraySpecialCharacters);
    }
    if (arrayPasswordElements <= 1) {
      window.alert("You must include at least one character type to procede.");
    }
    else{
      confirm = (window.confirm("You have selected " + selectedCharacterTypes + "correct?"));
    }
  }
}

function assemblePassword() {
  let finalPassword = "";
  let currentArray = [];

  for (i=1;i<=passwordParameters.length;i++) {
    currentArray = arrayPasswordElements[randomRange(0,arrayPasswordElements.length-1)];
    finalPassword += currentArray[randomRange(0,currentArray.length-1)];
  }
  return finalPassword;
}

function randomRange(min,max) {
  let randomValue = Math.floor( Math.random() * (max - min +1) + min);
  return randomValue;
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


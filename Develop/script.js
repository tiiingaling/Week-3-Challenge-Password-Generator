// Assignment Code
var generateBtn = document.querySelector("#generate");

//character arrays
var lowerCaseChar = ["a", "b", "c", "d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specialChar = ["!","@","#","$","%","^","&","*","(",")"]
var numbersChar = ["1","2","3","4","5","6","7","8","9","0"]


var password=document.getElementById("password");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
    var options = {
      numberOfChars:0,
      hasLowerChars: false,
      hasUpperChars: false,
      hasSpecialChars: false,
      hasNumberChars: false,
    };
 

  //Prompts on length
var length = window.prompt ("Choose between 8 and 128 characters for your password.");
//If value entered is not a number
if (isNaN(length)) {
  window.alert("You must enter a valid number.");
  return;
}
//If value entered is not between 8 and 128
 else if (length < 8 || length > 128) {
  window.alert ("You must choose a password length between 8 and 128 characters.");
  return;
};

//sets the length of password
options.numberOfChars = length;

//Criteria prompts for password
options.hasLowerChars = window.confirm (
  "Click ok to include lower case characters."
);
options.hasUpperChars = window.confirm (
  "Click ok to include upper case characters."
);
options.hasSpecialChars = window.confirm (
  "Click ok to include special characters."
);
options.hasNumberChars = window.confirm (
  "Click ok to include numerical characters."
);

//if password has xx element
var charList = []
      
    if (option.hasLowerChars) {
      lowerCaseChar.forEach((element) => charList.push(element));
    }

    if (option.hasUpperChars) {
      upperCaseChar.forEach((element) => charList.push(element));
    }

    if (option.hasSpecialChars) {
      specialChar.forEach((element) => charList.push(element));
    }

    if (option.hasNumberChars) {
      numbersChar.forEach((element) => charList.push(element));
    }

console.log(charList)

var randomPassword =[];
for (var i = 0; i < options.numberOfChars; i++) {
  var randomIndex = Math.floor(Math.random() * charList.length);
  
  randomPassword.push(charList[randomIndex])
}

return randomPassword.join("")
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);












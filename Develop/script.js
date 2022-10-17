// Assignment Code
var generateBtn = document.querySelector("#generate");

//character arrays
var lowerCase = ["a", "b", "c", "d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var special = ["!","@","#","$","%","^","&","*","(",")"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]


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
var length = window.prompt (
  "Choose between 8 and 128 characters for your password."
);
//If value entered is not a number
if (isNaN(length)) {
  window.alert("You must enter a valid number.");
  return;
//If value entered is not between 8 and 128
} else if (length < 8 || length > 128) {
  window.alert (
    "You must choose a password length between 8 and 128 characters."
  )
  return;
}

//Criteria prompts for password

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

document.getElementById("password").value = password;











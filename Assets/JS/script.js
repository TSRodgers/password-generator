// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength = ""

// Prompts user for length of password and checks if valid input
function findLength() {
    passLength = parseInt(window.prompt("How long would you like your password to be? Enter a number from 8 - 128."))
    if (isNaN(passLength) || passLength > 128 || passLength < 8) {
      window.alert("Invalid input, please enter a valid number.");
      findLength(); 
    } else {
      console.log(passLength)
      return passLength
    }
}


// Write password to the #password input
function writePassword() {
  findLength();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

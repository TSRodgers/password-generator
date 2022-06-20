// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength = ""
var charTypes = ""

// Prompts user for length of password and checks if valid input
function findLength() {
    passLength = ""
    passLength = parseInt(window.prompt("How long would you like your password to be? Enter a number from 8 - 128."))
    if (isNaN(passLength) || passLength > 128 || passLength < 8) {
      window.alert("Invalid input, please enter a valid number.");
      findLength(); 
    } else {
      console.log(passLength)
      return passLength
    }
}

// Prompts the user to decide what character types they want to use in pass
function findTypes() {
    charTypes = ""

    lowerConfirm = window.confirm("Click OK if you would you like your password to include lowercase letters.");
    if (lowerConfirm) {
      charTypes += "abcdefghijklmnopqrstuvwxyz"
      upperConfirm = window.confirm("Click OK if you ould you like your password to include uppercase letters.")
    } else {
      upperConfirm = window.confirm("Click OK if you would you like your password to include uppercase letters.")
    }

    if (upperConfirm) {
      charTypes += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      numberConfirm = window.confirm("Click OK if you would you like your password to include numbers.")
    } else {
      numberConfirm = window.confirm("Click OK if you would you like your password to include numbers.")
    }

    if (numberConfirm) {
      charTypes += "1234567890"
      specialConfirm = window.confirm("Click OK if you would you like your password to include special characters.")
    } else {
      specialConfirm = window.confirm("Click OK if you would you like your password to include special characters.")
    }

    if (specialConfirm) {
      charTypes += " !#$%&'()*+,-./;:<=>?@[]^_`{}|~" + '"'
    } else {
    }

    if (charTypes === "") {
      window.alert("You must select at least one character type, try again.")
      findTypes(); 
    } else {
      console.log(charTypes)
      return charTypes
    }
}

// function that chooses a random character from the charset created by findTypes() and loops a set amount of times decided by findLength()
function generatePassword() {
  var pass = ""
  // used stack overflow for this, for loop partially borrowed from user csharptest.net
  for (var i = 0; i < passLength; i++) {
    pass += charTypes.charAt(Math.floor(Math.random() * charTypes.length))
  }
  console.log(pass)
  return pass
}


// Write password to the #password input
function writePassword() {
  var passLength = ""
  var charTypes = ""
  findLength();
  findTypes();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

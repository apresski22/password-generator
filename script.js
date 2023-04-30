// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// logical comparisons to use

// does expression below take into account decimals ie 7.01 or does it go by integers?
// password.length > 7
// how do you do greater than or equal to?
// password.length < 8

// uppercase = "A", "B", "C"...
// lowercase = "a", "b", "c"...
// specialCharacter = "!", "@", "#", "$", "%", "&", "?"
// numeric = 1, 2, 3, 4, 5, 6, 7, 8, 9, 0

// can more than two comparisons be evaluated at once?
// uppercase && lowercase && specialCharacter && numeric

// how do you prevent a space from being used in the password?

/* if password.length < 8 {
    then alert "Password does not meet minimum length."
}*/

/* if != uppercase {
    then alert "Password must contain an uppercase character."
}*/

/* if != lowercase {
    then alert "Password must contain a lowercase character."
}*/

/* if != specialCharacter {
    then alert "Password must contain a special character."
}*/

/* if != numeric {
    then alert "Password must contain a numeric character."
}*/

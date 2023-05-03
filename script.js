// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordMin = 0;

var passwordMax = 0;

var uppercase = ["A", "B", "C", "D", "E", "F"];

var randomUppercase = Math.floor(Math.random() * uppercase.length);

//console.log(uppercase[randomUppercase]);

var lowercase = ["a", "b", "c", "d", "e", "f"];

var randomLowercase = Math.floor(Math.random() * lowercase.length);

//console.log(lowercase[randomLowercase]);

var special = ["!", "@", "#", "$", "%", "&", "?"];

var randomSpecial = Math.floor(Math.random() * special.length);

//console.log(special[randomSpecial]);

var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var randomNumeric = Math.floor(Math.random() * numeric.length);

//console.log(numeric[randomNumeric]);

var characters = [
  uppercase[randomUppercase],
  lowercase[randomLowercase],
  special[randomSpecial],
  numeric[randomNumeric],
];

console.log(characters);

//write a for loop to iterate through characters multiple times

//write function that tests for password length

function writePassword() {
  var password = "";
  characters.forEach(generatePassword);
  document.getElementById("password").innerHTML = password;
  function generatePassword(value) {
    password += value;
  }
}

// Write password to the #password input
/*function writePassword() {
  var password = generatePassword(characters);
  var passwordText = document.querySelector("#password");
  // console.log("Your password is " + password);
  passwordText.value = password;
}
*/
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//use array method function to run through all objects in the array

//displays password
/*let txt = "";
characters.forEach(generatePassword);
document.getElementById("password").innerHTML = txt;

function generatePassword(value, index, array) {
  txt += value;
}
*/

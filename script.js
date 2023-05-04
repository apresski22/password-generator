// Assignment Code
var generateBtn = document.querySelector("#generate");

var text = "";

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
//when we ask the user if they want it
var characters = [];
var userWantsUppercase = confirm("Do you want an uppercase character?");
if (userWantsUppercase == true) {
  characters = characters.concat(uppercase);
}
console.log(characters);
var userWantsLowercase = confirm("Do you want lowercase character?");

if (userWantsLowercase == true) {
  characters = characters.concat(lowercase);
}
console.log(characters);
var userWantsSpecial = confirm("Do you want a special character?");

if (userWantsSpecial == true) {
  characters = characters.concat(special);
}
console.log(characters);
var userWantsNumeric = confirm("Do you want a numeric character?");

if (userWantsNumeric == true) {
  characters = characters.concat(numeric);
}
console.log(characters);

var passwordLength = 8;
var password = "";
//function generatePassword(characters) {
for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  password += characters[randomIndex];
}

console.log(password);

/*function writePassword(password) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("Your password is " + password);
  passwordText.value = password;
}
*/

/*function writePassword() {
  var finalPassword = "";
  password.forEach(generatePassword);
  document.getElementById("password").innerHTML = finalPassword;
  function generatePassword(value) {
    password += value;
  }
}
*/
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//displays password

/*let txt = "";
finalPassword.forEach(generatePassword);
document.getElementById("password").innerHTML = txt;

function generatePassword(value) {
  txt += value;
}

*/

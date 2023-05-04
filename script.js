// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordMin = 0;

var passwordMax = 0;

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
var userWantsUppercase = confirm("Do you want uppercase");
if (userWantsUppercase == true) {
  characters = characters.concat(uppercase);
}
console.log(characters);
var userWantsLowercase = confirm("Do you want lowercase");

if (userWantsLowercase == true) {
  characters = characters.concat(lowercase);
}
console.log(characters);
var userWantsSpecial = confirm("Do you want special");

if (userWantsSpecial == true) {
  characters = characters.concat(special);
}
console.log(characters);
var userWantsNumeric = confirm("Do you want numeric");

if (userWantsNumeric == true) {
  characters = characters.concat(numeric);
}
console.log(characters);

var passwordLength = 8;

var finalPassword = "";
for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  finalPassword += characters[randomIndex];
}
console.log(finalPassword);
//code below just shows one element and not a list of four random elements
/*var randomCharacters = Math.floor(Math.random() * characters.length);
console.log(characters[randomCharacters]);
*/

/*
var uppercase = ["A", "B", "C", "D", "E", "F"];
var lowercase = ["a", "b", "c", "d", "e", "f"];
var special = ["!", "@", "#", "$", "%", "&", "?"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var text = "";
for (var i = 0; i < uppercase.length; i++) {
  text += uppercase[i];
}

for (var i = 0; i < lowercase.length; i++) {
  text += lowercase[i];
}

for (var i = 0; i < special.length; i++) {
  text += special[i];
}

for (var i = 0; i < numeric.length; i++) {
  text += numeric[i];
}
console.log(text);
*/

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

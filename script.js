// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = prompt("Select the length of the password 8-128.");

var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var special = ["!", "@", "#", "$", "%", "&", "?"];

var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var characters = [];

// for code below cannot get it to prompt again for different password length after two incorrect attempts
// cannot get chosen password length input between 8 and 128 to populate in var passwordLength = in line 105

if (passwordLength < 8) {
  prompt("Please choose a length between 8-128");
} else if (passwordLength > 128) {
  prompt("Please choose a length between 8-128");
} else passwordOptions;

function passwordOptions() {
  var userWantsUppercase = confirm("Do you want uppercase characters?");
  if (userWantsUppercase == true) {
    characters = characters.concat(uppercase);
  }
  console.log(characters);

  var userWantsLowercase = confirm("Do you want lowercase characters?");

  if (userWantsLowercase == true) {
    characters = characters.concat(lowercase);
  }
  console.log(characters);
  var userWantsSpecial = confirm("Do you want special characters?");

  if (userWantsSpecial == true) {
    characters = characters.concat(special);
  }
  console.log(characters);
  var userWantsNumeric = confirm("Do you want numeric characters?");

  if (userWantsNumeric == true) {
    characters = characters.concat(numeric);
  }
}
console.log(characters);
var passwordLength = 8;
var password = "";
function generatePassword() {
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
console.log(password);

function writePassword() {
  passwordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("Your password is " + password);
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

// Add event listener for generate button to also clear the field if an existing password is stored
/*
function clearField(); {
  localstorage.removeItem("password", "");
}
generateBtn.addEventListener("click", clearField);
*/

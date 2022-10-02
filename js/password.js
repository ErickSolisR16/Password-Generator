// Place where we are going to put the password
var btnGenerate = document.getElementById("generate");
// Password
var finalPassword = "";
// Input where you put the created password
var inputPassword = document.getElementById("password");
// Parts of the final password are saved
var temporalPassword;

/**
 * * Function that redirects to the type and size that the passwords should be
 */
function password() {
    var typePassword = document.getElementById("type").value;
    var lenghtPassword = document.getElementById("lenght").value;
    inputPassword.value = "";
    finalPassword = "";
    if (typePassword == 0) {
        lettersPassword(lenghtPassword);
    } else if (typePassword == 1) {
        numbersPassword(lenghtPassword);
    } else if (typePassword == 2) {
        lettersNumbersPassword(lenghtPassword);
    } else {
        allCaractersPassword(lenghtPassword);
    }
}

/**
 * * Create letter password function
 * 
 * @param {*} lenght of the password
 */
function lettersPassword(lenght) {
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    temporalPassword = "";
    for (var i = 0; i < lenght; i++) {
        temporalPassword = Math.floor(Math.random() * str.length + 1);
        finalPassword += str.charAt(temporalPassword);
    }
    inputPassword.value = finalPassword;
}

/**
 * * Create numbers password function
 * 
 * @param {*} lenght of the password
 */
function numbersPassword(lenght) {
    for (var i = 0; i < lenght; i++) { 
        finalPassword += Math.floor(Math.random() * 10);
    }
    inputPassword.value = finalPassword;
} 

/**
 * * Create numbers and letters password function
 * 
 * @param {*} lenght of the password
 */
function lettersNumbersPassword(lenght) {
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    temporalPassword = "";
    for (var i = 0; i <  lenght; i++) {
        temporalPassword = Math.floor(Math.random() * str.length + 1); 
        finalPassword += str.charAt(temporalPassword);
    }
    inputPassword.value = finalPassword;
}

/**
 * * Create all caracters password function
 * 
 * @param {*} lenght of the password
 */
function allCaractersPassword(lenght) {
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789¡!¿?#$%^&*()_-+=[]''|/<>,.";
    temporalPassword = "";
    for (var i = 0; i < lenght; i++) {
        temporalPassword = Math.floor(Math.random() * str.length + 1); 
        finalPassword += str.charAt(temporalPassword);
    }
    inputPassword.value = finalPassword;
}
// Place where we are going to put the password
var btnGenerate = document.getElementById("generate");
// Password
var finalPassword = "";

var inputPassword = document.getElementById("password");

// Create letter password function
function lettersPassword() {
    inputPassword.value = "";
    finalPassword = "";
    var lenghtPassword = document.getElementById("lenght").value;
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var temporalPassword = "";
    for (var i = 0; i < lenghtPassword; i++) {
        temporalPassword = Math.floor(Math.random() * str.length + 1);
        finalPassword += str.charAt(temporalPassword);
    }
    inputPassword.value = finalPassword;
    console.log(finalPassword);
}

// Create numbers password function
function numbersPassword() {
    inputPassword.value = "";
    finalPassword = "";
    var lenghtPassword = document.getElementById("lenght").value;
    for (var i = 0; i < lenghtPassword; i++) { 
        finalPassword += Math.floor(Math.random() * 10);
    }
    inputPassword.value = finalPassword;
    console.log(finalPassword);
} 

// Create numbers and letters password function
function lettersNumbersPassword() {
    inputPassword.value = "";
    finalPassword = "";
    var lenghtPassword = document.getElementById("lenght").value;
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var temporalPassword = "";
    for (var i = 0; i <  lenghtPassword; i++) {
        temporalPassword = Math.floor(Math.random() * str.length + 1); 
        finalPassword += str.charAt(temporalPassword);
        console.log(finalPassword);
    }
    inputPassword.value = finalPassword;
    console.log(finalPassword);
}

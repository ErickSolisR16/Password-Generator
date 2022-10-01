// Place where we are going to put the password
var btnGenerate = document.getElementById("generate");
// Password
var finalPassword = "";

var inputPassword = document.getElementById("password");

// Create letter password function
function lettersPassword() {
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
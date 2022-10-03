var txt = document.getElementById("text");
var str = txt.innerHTML; 
txt.innerHTML = ""; 
var speed = 150;
var i = 0;

/**
 * * Typewriter effect to a text
 */
function typeWritter() {
    if (i < str.length) {
        txt.innerHTML += str.charAt(i);
        i++;
        setTimeout(typeWritter, speed);
    }
}

setTimeout(typeWritter, speed);
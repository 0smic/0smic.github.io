let text1 = "click me";
let colors = [
    "#FF0000",  // Bright Red
    "#39FF14",  // Neon Green
    "#00BFFF",  // Electric Purple
    "#BF00FF",  // Neon Pink
    "#FF10F0",  // Aqua
    "#00FFFF",  // Lime
    "#FF69B4",  // Hot Pink
    "#FFA500",  // Bright Orange
    "#58A6FF",
    "#FFD700",
    "#1E1E1E",
    "black"  // Black
    ];
let idx1 = 0;
let idx2 = 0;
let idx3 = 0;
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let body = document.querySelector("body");
let mainh1 = document.getElementById("mainhead");
btn1.addEventListener("click", function() {
    mainh1.style.color = colors[idx1];
    idx1++;
    if(idx1 === 12){
        idx1 = 0;
    }
});
btn2.addEventListener("click", function() {
    body.style.color = colors[idx2];
    idx2++;
    if(idx2 === 12){
        idx2 = 0;
    }
});
btn3.addEventListener("click", function() {
    body.style.backgroundColor = colors[idx3];
    idx3++;
    if(idx3 === 12){
        idx3 = 0;
    }
});

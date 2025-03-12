document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded!");
});
let position = 0;
function moveBox() {
    position += 5;
    document.getElementById("box").style.left = position + "px";
    if (position < window.innerWidth - 50) {
        requestAnimationFrame(moveBox);
    }
}
moveBox();

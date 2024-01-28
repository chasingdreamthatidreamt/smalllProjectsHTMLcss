document.addEventListener("DOMContentLoaded", function() {
    let audio = document.querySelector("audio");
    let boxes = document.querySelectorAll(".box");

    boxes.forEach(function(box) {
        box.addEventListener("hover", function() {
            audio.play();
        });
    });
});
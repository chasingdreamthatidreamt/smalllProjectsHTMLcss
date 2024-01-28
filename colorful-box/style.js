document.addEventListener("DOMContentLoaded", function() {
    let audio = document.querySelector("audio");
    let boxes = document.querySelectorAll(".box");
    let playbackPositions = {};

    boxes.forEach(function(box) {
        box.addEventListener("mouseover", function() {
            if (playbackPositions[box.id]) {
                audio.currentTime = playbackPositions[box.id];
            }
            audio.play();
        });

        box.addEventListener("mouseout", function() {
            playbackPositions[box.id] = audio.currentTime;
            audio.pause();
        });
    });
});

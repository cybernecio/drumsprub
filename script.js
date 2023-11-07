document.addEventListener("keydown", playSound);

const drumPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

drumPads.forEach((pad) => {
    pad.addEventListener("click", () => {
        playSound(pad.id);
    });
});

function playSound(key) {
    const audio = document.getElementById(`audio-${key}`);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        display.textContent = key;
    }
}

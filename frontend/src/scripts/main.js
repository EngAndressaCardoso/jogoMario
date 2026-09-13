const character = document.getElementById("character");
const pipe = document.getElementById("pipe");
const ground = document.getElementById("ground");
const pointsCounter = document.getElementById("points");

let hasScored = false;
let counter = 0;

const jump = (e) => {
    if (e.code === "Space" && !character.classList.contains("jumping")) {
        character.classList.toggle("jumping");
        setTimeout(() => {
            character.classList.toggle("jumping");
        }, [800]);
    }
}

const verifyLoop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    if (pipePosition <= 120) {
        if (!character.classList.contains("jumping")) {
            character.classList.add("died");
            pipe.classList.add("animation-stoped");
            ground.classList.add("animation-stoped");
        } else if (!hasScored) {
            counter += 100;
            pointsCounter.innerText = counter;
            hasScored = true;
        }
    }

    if (pipePosition > 120) {
        hasScored = false;
    }
}, 10)

document.addEventListener("keypress", jump)
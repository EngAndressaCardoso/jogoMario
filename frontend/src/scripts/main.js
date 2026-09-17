const character = document.getElementById("character");
const pipe = document.getElementById("pipe");
const ground = document.getElementById("ground");
const pointsCounter = document.getElementById("points");
const gameOver = document.getElementById("game-over");
const restart= document.getElementById("restartbutton")

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
            gameOver.classList.add("show");
            restart.classList.add("show");

    } else if (!hasScored) {
            counter += 100;s
            pointsCounter.innerText = counter;
            hasScored = true;
        }
    }

    if (pipePosition > 120) {
        hasScored = false;
    }
}, 10)


document.addEventListener("keypress", jump)

restart.addEventListener("click",() => {
    location.reload();
}
)

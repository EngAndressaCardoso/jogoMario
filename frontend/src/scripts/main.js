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
    // Captura a altura exata do Mario na tela em pixels (sem o "px" no final)
    const characterPosition = +window.getComputedStyle(character).bottom.replace("px", "");

    // Verifica se o cano chegou à margem de 120px e se o Mario está abaixo de 140px (ou seja, não pulou)
    if (pipePosition <= 120 && pipePosition > 0 && characterPosition < 140) {

        // Congela o cano exatamente onde a colisão ocorreu
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        // Congela o Mario na altura atual e aplica o estado de morte
        character.style.animation = "none";
        character.style.bottom = `${characterPosition}px`;
        character.classList.add("died");

        // Para as animações de cenário e exibe a tela de Game Over
        ground.classList.add("animation-stoped");
        gameOver.classList.add("show");
        restart.classList.add("show");    

        // Para o loop de verificação após a colisão
        clearInterval(verifyLoop); 
       

    } else if (pipePosition <= 120 && pipePosition > 0 && !hasScored) {
        // Pontua apenas se ele passou com segurança pelo cano
            counter += 100;
            pointsCounter.innerText = counter;
            hasScored = true;
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

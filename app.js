const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJump = false;
let position = 0;

function handleKeyUp(event){
    // Verifica se a tecla pressionada é o space
    if(event.keyCode === 32) {
        if(!isJump){
            jump();
        }
        
    }
}

function jump() {
    isJump = true;
    let upInterval = setInterval( () => {
        if (position >= 150){
            // Limpando o intervalo
            clearInterval(upInterval);
            // Descendo
            let downInterval = setInterval( () => {
                if(position <= 0) {
                    clearInterval(downInterval);
                    isJump = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                    
                }
                
            }, 20);
        } else {
            // Subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }
        
    }, 20);
}

function createdCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        // Verifica se o cactu saiu da tela se sim remove ele se não continua o movimento
        if(cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if(cactusPosition > 0  && cactusPosition < 60 && position < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    // Recursividade para gerar mais cactus 
    setTimeout(createdCactus, randomTime);
}

createdCactus();
// Keyup captura uma tecla apertada
document.addEventListener('keyup', handleKeyUp);
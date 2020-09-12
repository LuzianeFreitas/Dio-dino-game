const dino = document.querySelector('.dino');

function handleKeyUp(event){
    // Verifica se a tecla pressionada é o space
    if(event.keyCode === 32) {
        jump();
    }
}

function jump() {
    let position = 0;

    let upInterval = setInterval( () => {
        if (position >= 150){
            // Limpando o intervalo
            clearInterval(upInterval);
            // Descendo
            let downInterval = setInterval( () => {
                if(position <= 0) {
                    clearInterval(downInterval);
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

// Keyup captura uma tecla apertada
document.addEventListener('keyup', handleKeyUp);
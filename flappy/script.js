document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const bird = document.querySelector(".bird"),
          gameDisplay = document.querySelector('.game-container'),
          ground = document.querySelector('.ground');

    let birdLeft = 220,
        birdBottom = 200,
        gravity = 2,
        isGameOver = false,
        gap = 430;

    function startGame() {
        birdBottom -= gravity;
        bird.style.bottom = birdBottom + 'px';
        bird.style.left = birdLeft + 'px';
    }
    let gameTimerId = setInterval(startGame, 20);

    function control(e) {
        if (e.keyCode === 32) {
            jump();
        }
    }

    function jump() {
        if (birdBottom < 500) {
            birdBottom += 50;
        }
        bird.style.bottom = birdBottom + 'px';
    }
    document.addEventListener('keyup', control);

    function generateObstacle() {
        let obstacleLeft = 450,
            randomHeight = Math.random() * 60,
            obstacleBottom = randomHeight;
        
        const obstacle = document.createElement('div'),
              topObstacle = document.createElement('div');

        if (!isGameOver) {
            obstacle.classList.add('obstacle');
            topObstacle.classList.add('topObstacle');
        }
        gameDisplay.appendChild(obstacle);
        gameDisplay.appendChild(topObstacle);
        obstacle.style.left = obstacleLeft + 'px';
        topObstacle.style.left = obstacleLeft + 'px';
        obstacle.style.bottom = obstacleBottom + 'px';
        topObstacle.style.bottom = obstacleBottom + gap + 'px';
        
        function moveObstacle() {
            obstacleLeft -= 2;
            obstacle.style.left = obstacleLeft + 'px';
            topObstacle.style.left = obstacleLeft + 'px';
        
            if (obstacleLeft === 0) {
                clearInterval(timerId);
                gameDisplay.removeChild(obstacle);
                gameDisplay.removeChild(topObstacle);
            }
            if (
                obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 &&
                (birdBottom < obstacleBottom + 81 || birdBottom > obstacleBottom + gap - 269) ||
                birdBottom === 0
                ) {
                gameOver();
                clearInterval(timerId);
            }
        }
        let timerId = setInterval(moveObstacle, 20);
        if (!isGameOver) {
            setTimeout(generateObstacle, 3000);    
        }
    }
    generateObstacle();

    function gameOver() {
        clearInterval(gameTimerId);
        console.log('game over');
        isGameOver = true;
        document.removeEventListener('keyup', control);
    }
});
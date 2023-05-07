const gameContainer = document.getElementById('gameContainer');
const paddle = document.getElementById('paddle');
const object = document.getElementById('object');

let paddlePosition = gameContainer.clientWidth / 2 - paddle.clientWidth / 2;
let objectPosition = 0;
let objectSpeed = 2;

paddle.style.left = `${paddlePosition}px`;
object.style.top = `${objectPosition}px`;

function movePaddle(event) {
    if (event.key === "ArrowLeft") {
        paddlePosition = Math.max(paddlePosition - 5, 0);
    } else if (event.key === "ArrowRight") {
        paddlePosition = Math.min(paddlePosition + 5, gameContainer.clientWidth - paddle.clientWidth);
    }
    paddle.style.left = `${paddlePosition}px`;
}

function moveObject() {
    objectPosition += objectSpeed;
    object.style.top = `${objectPosition}px`;

    if (objectPosition + object.clientHeight > gameContainer.clientHeight) {
        objectPosition = 0;
        object.style.left = `${Math.random() * (gameContainer.clientWidth - object.clientWidth)}px`;
    }

    if (collisionCheck()) {
        objectPosition = 0;
        object.style.left = `${Math.random() * (gameContainer.clientWidth - object.clientWidth)}px`;
    }

    requestAnimationFrame(moveObject);
}

function collisionCheck() {
    const paddleRect = paddle.getBoundingClientRect();
    const objectRect = object.getBoundingClientRect();

    return (
        objectRect.left < paddleRect.left + paddleRect.width &&
        objectRect.left + objectRect.width > paddleRect.left &&
        objectRect.top < paddleRect.top + paddleRect.height &&
        objectRect.height + objectRect.top > paddleRect.top
    );
}

document.addEventListener('keydown', movePaddle);
moveObject();

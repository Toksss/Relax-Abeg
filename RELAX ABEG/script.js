const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
    text.innerText = 'Breathe In One Time!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Wait Oh! Dont Beh';

        setTimeout(() => {
            text.innerText = 'Oya Breathe Out Now!';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

setInterval(breathAnimation, totalTime);

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for (let btns of buttons) {
    btns.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = randomColor();
    this.innerText = randomColor();
}

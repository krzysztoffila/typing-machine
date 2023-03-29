const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor')
const txt = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla facere odio, perspiciatis deleniti quidem error. Voluptatum, nesciunt veniam corrupti modi deserunt ipsa, est quasi veritatis placeat quas eligendi molestias voluptate.';

let indexText = 0;
const time = 50;

const addLetter = () => {
    spnText.textContent += txt[indexText];
    indexText++
    if (indexText == txt.length) clearInterval(indexTyping);
}
const indexTyping = setInterval(addLetter, time);

const cursorTime = 500
const cursorAnimation = () => {
    spnCursor.classList.toggle("active")
}

setInterval(cursorAnimation, cursorTime)
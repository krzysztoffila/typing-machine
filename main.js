const spnText = document.querySelector('.text');
const txt = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla facere odio, perspiciatis deleniti quidem error. Voluptatum, nesciunt veniam corrupti modi deserunt ipsa, est quasi veritatis placeat quas eligendi molestias voluptate.';

let indexText = 0;

const addLetter = () => {
    spnText.textContent += txt[indexText];
    indexText++
    if (indexText == txt.length) clearInterval(indexTyping);
    // console.log('Koniec')
}
const indexTyping = setInterval(addLetter, 50);
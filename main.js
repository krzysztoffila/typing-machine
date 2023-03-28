const spnText = document.querySelector('.text');
const txt = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla facere odio, perspiciatis deleniti quidem error. Voluptatum, nesciunt veniam corrupti modi deserunt ipsa, est quasi veritatis placeat quas eligendi molestias voluptate.';

let number = 0;

const addLetter = () => {

    number++;
    console.log(`${number}`);
    if (number == 50) clearInterval(indexTyping);
}
const indexTyping = setInterval(addLetter, 50);
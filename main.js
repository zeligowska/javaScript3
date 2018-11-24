
const btn = document.querySelector('.btn');
btn.setAttribute('disabled', '');
btn.setAttribute('id', 'button');
btn.removeAttribute('disabled');

const colors = ['red', 'blue', 'green', 'yellow', 'white'];

var i = 0;

function changeColors() {
    btn.style.background = colors[i];
    i++;
    if(i === colors.length)
        i = 0;
}

btn.addEventListener(
    'click',
    changeColors
);
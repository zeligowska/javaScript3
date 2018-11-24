
const btn = document.querySelector('.btn');
btn.setAttribute('disabled', '');
btn.setAttribute('id', 'button');
btn.removeAttribute('disabled');
btn.style.cssText = `
    border-radius: 5px;
    color: white
`;

const colors = ['red', 'blue', 'green', 'yellow', 'white', 'pink'];

let i = 0;

btn.addEventListener(
    'click',
    () => {
        btn.style.background = colors[i++];
        if(i === colors.length)
            i = 0;
        alert(input.value);
    }
);

const h1 = document.createElement('h1');
const input = document.createElement('input');

document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener(
    'input',
    () => {
        h1.innerText = input.value
    }
)
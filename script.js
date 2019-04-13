const container = document.querySelector('#container');

function changeColor () {
    this.style.backgroundColor = 'black';
    console.log('mouseover!')
}

//add squares to the container
for (i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', changeColor);
    container.appendChild(square);
}
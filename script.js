
function makeGrid (squaresPerSide){
    let totalSquares = squaresPerSide * squaresPerSide;
    let sideLength = (600 / squaresPerSide) + 'px';
    for (i = 0; (i < totalSquares); i++) {
        const container = document.querySelector('#container')
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = sideLength;
        square.style.height = sideLength;
        square.addEventListener('mouseover', changeColor);
        container.appendChild(square);
    }
}

function changeColor(){
    this.style.backgroundColor = chooseColor();
}

function chooseColor(){
    switch(colorScheme){
        case 'black':
            return 'black';
            break;
        case 'rainbow':
            return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
    }
}

function removeOldSquares(){
    oldSquares = document.getElementsByClassName('square');
    while (oldSquares[0]){
        oldSquares[0].remove();
    }
}

//Buttons
document.getElementById("btnStart").addEventListener("click", function(){
    squaresPerSide = prompt('How many squares per side?', '');
    removeOldSquares();
    makeGrid(squaresPerSide);
});

document.getElementById("btnPen").addEventListener("click", function(){
    switch (colorScheme){
        case 'black':
            colorScheme = 'rainbow'
            document.getElementById("btnPen").innerHTML = 'Black pen';
            document.getElementById("btnPen").style.backgroundImage = 'url(https://bit.ly/2UGeRFe)'
            document.getElementById("btnPen").style.color = 'white';
            break;
        case 'rainbow':
            colorScheme = 'black';
            document.getElementById("btnPen").innerHTML = 'Rainbow pen';
            document.getElementById("btnPen").style.backgroundImage = 'url(https://bit.ly/2UiPO5U)'
            document.getElementById("btnPen").style.color = 'black';
    }
    changeColor;
});

//runs at start
let squaresPerSide = 16;
let colorScheme = 'black';
makeGrid(squaresPerSide);

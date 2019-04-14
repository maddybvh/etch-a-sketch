function changeColor(){
    this.style.backgroundColor = chooseColor();
}

function chooseColor(){
    switch(colorScheme){
        case 'black':
            return 'black';
            break;
        case 'rainbow':
            return makeRandomColor();
    }
}

function makeRandomColor() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}



//Make the grid by adding squares to the container
function makeGrid (squaresPerSide){
    //create new grid
    let totalSquares = squaresPerSide * squaresPerSide;
    let sideLength = (600 / squaresPerSide) + 'px';
    console.log(sideLength)
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


//Buttons and actions

document.getElementById("a").addEventListener("click", function(){
    //remove old squares
    oldSquares = document.getElementsByClassName('square');
    while (oldSquares[0]){
        oldSquares[0].remove();
    }
    
    squaresPerSide = prompt('How many squares per side?', '');
    makeGrid(squaresPerSide);
    });

document.getElementById("b").addEventListener("click", function(){
    switch (colorScheme){
        case 'black':
            colorScheme = 'rainbow'
            document.getElementById("b").innerHTML = 'Change to black';
            break;
        case 'rainbow':
            colorScheme = 'black';
            document.getElementById("b").innerHTML = 'Change to rainbow';
    }
    changeColor;
});

let squaresPerSide = 16;
let colorScheme = 'black';
makeGrid(squaresPerSide);

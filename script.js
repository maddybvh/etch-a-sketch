function changeColor () {
    this.style.backgroundColor = 'black';
    console.log('mouseover!')
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

document.getElementById("1").addEventListener("click", function(){
    //remove old squares
    oldSquares = document.getElementsByClassName('square');
    while (oldSquares[0]){
        oldSquares[0].remove();
    }
    
    squaresPerSide = prompt('How many squares per side?', '');
    makeGrid(squaresPerSide);
  });

let squaresPerSide = 16;
makeGrid(squaresPerSide);

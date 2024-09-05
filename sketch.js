// Initilize grid and add event listeners to it and to input
function initGrid() {
    const mainDiv = document.querySelector("#grid");
    const inputGrid = document.querySelector("#grid-input");
    const inputColor = document.querySelector("#color-input");
    const btnRainbow = document.querySelector("#rainbow-mode");
    const value = document.querySelector("#value");
    appendGrid(mainDiv, inputGrid.value);
    mouseMoveAndMouseDown(mainDiv, randomColor);
    listenInputChangeColor(inputColor, mainDiv);
    listenInputChangeGridValue(inputGrid, value, mainDiv);
    listenRainbowMode(btnRainbow, mainDiv);
}

function listenInputChangeGridValue (input, value, grid) {
    input.addEventListener("input", (event) => {
        let inputVal = event.target.value;
        value.textContent = `${inputVal} X ${inputVal}`;
        changeGrid(inputVal, grid);
    })
}

function listenRainbowMode (btn, target) {
    btn.addEventListener("click", () => {
        mouseMoveAndMouseDown(target, randomColor);
    })
}

// Parse input-color value and change pen to a new chosen color
function listenInputChangeColor (inputColor, mainDiv) {
    inputColor.addEventListener("input", (event) => {
        let color = event.target.value;
        let red = parseInt(color.substr(1, 2), 16);
        let green = parseInt(color.substr(3, 2), 16);
        let blue = parseInt(color.substr(5, 2), 16);
        let colorFunc = (r, g, b) => function (event) {
            event.target.style.background = `rgb(${r}, ${g} ,${b})`;
        }
        mouseMoveAndMouseDown(mainDiv, colorFunc(red, green, blue));
    })
}

function changeGrid(num, grid) {
    clearGrid(grid)
    appendGrid(grid, num);
}

function clearGrid(grid) {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

function appendGrid(parentNode, squareNumber) {
    for (let i = 0; i < squareNumber; i++) {
        let column = document.createElement("div");
        column.setAttribute("class", "column");
        parentNode.appendChild(column);
        for (let j = 0; j < squareNumber; j++) {
            let square = document.createElement("div");
            square.setAttribute("class", "square");
            column.appendChild(square);
        }
    }
}

function randomColor(event) {
    let x = Math.floor(Math.random() * 255 + 1);
    let y = Math.floor(Math.random() * 255 + 1);
    let z = Math.floor(Math.random() * 255 + 1);
    event.target.style.background = `rgb(${x}, ${y} ,${z})`; 
}

// Handle the event by whileMove() only when mousedown and move over inside the target
function mouseMoveAndMouseDown(target, whileMove) {
    let endMove = function () {
        console.log(`work end move. Whilemove = ${whileMove}`)
        target.removeEventListener('mouseover', whileMove);
        //target.removeEventListener('mousedown', applyWhenMouseDown);
        target.removeEventListener('mouseup', endMove);
    };

    let applyWhenMouseDown = function(event) {
        event.preventDefault()  // prevent drag
        whileMove(event);
        target.addEventListener('mouseover', whileMove);
        target.addEventListener('mouseup', endMove);
    }

    target.addEventListener('mousedown', applyWhenMouseDown);
}



initGrid();
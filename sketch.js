// Initilize grid and add event listeners to it and to input
function initGrid() {
    const mainDiv = document.querySelector("#grid");
    const input = document.querySelector("input");
    const value = document.querySelector("#value");
    appendGrid(mainDiv, input.value);
    mouseMoveAndMouseDown(mainDiv, color);
    listenInputChangeGridValue(input, value, mainDiv);
}

function listenInputChangeGridValue (input, value, grid) {
    input.addEventListener("input", (event) => {
        let inputVal = event.target.value;
        value.textContent = `${inputVal} X ${inputVal}`;
        changeGrid(inputVal, grid);
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

function color(event) {
    event.target.style.background = "green"; 
}

// Handle the event by whileMove() only when mousedown and move over inside the target
function mouseMoveAndMouseDown(target, whileMove) {
    let endMove = function () {
        target.removeEventListener('mouseover', whileMove);
    };

    target.addEventListener('mousedown', function (event) {
        event.preventDefault()  // prevent drag
        whileMove(event);
        target.addEventListener('mouseover', whileMove);
        target.addEventListener('mouseup', endMove);   
    });
}

initGrid();
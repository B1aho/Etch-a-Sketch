const gridSize = 560;
const gridInitSize = 32;
const mainDiv = document.querySelector("#grid");
const menu = document.querySelector("#menu");


const input = document.querySelector("input");
const value = document.createElement("p");
menu.appendChild(value);

input.addEventListener("input", (event) => {
    let inputVal = event.target.value;
    value.textContent = inputVal;
    changeGrid(+inputVal);
})

function initGrid() {
    appendGrid(gridInitSize);
    mouseMoveAndMouseDown(mainDiv, color);
}

function changeGrid(num) {
    clearGrid()
    appendGrid(num);
}

function clearGrid() {
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.lastChild);
    }
}

function appendGrid(squareNumber) {
    for (let i = 0; i < squareNumber; i++) {
        let column = document.createElement("div");
        column.setAttribute("class", "column");
        mainDiv.appendChild(column);
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

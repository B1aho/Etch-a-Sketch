const gridSize = 560;
const mainDiv = document.querySelector("#grid");
const btn = document.querySelector("button");

function createGrid() {
    appendGrids();
    mouseMoveAndMouseDown(mainDiv, color);
    btn.addEventListener("click", () => {
        while (mainDiv.firstChild) {
            mainDiv.removeChild(mainDiv.lastChild);
        }
    });
}

function countSquareSize(squareNumber) {
    let length = (gridSize / squareNumber).toFixed(2);
    return let;
}

function changeGrid() {
    
}

function appendGrids(squareSize) {
    for (let i = 0; i < 50; i++) {
        let column = document.createElement("div");
        column.setAttribute("class", "column");
        mainDiv.appendChild(column);
        for (let j = 0; j < 50; j++) {
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

createGrid();

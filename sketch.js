const gridSize = 560;

function createGrid() {
    const mainDiv = document.querySelector("#grid");
    const btn = document.querySelector("button");
    appendGrids(mainDiv);
    mouseMoveAndMouseDown(mainDiv, color);
    btn.addEventListener("click", () => {
        mainDiv.textContent = "";
    })
}

function countSquareSize(squareNumber) {

}

function changeGrid() {
    
}

function appendGrids(mainDiv, squareSize) {
    for (let i = 0; i < 50; i++) {
        let column = document.createElement("div");
        column.setAttribute("class", "column");
        mainDiv.appendChild(column);
        for (let j = 0; j < 50; j++) {
            let square = document.createElement("div");
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

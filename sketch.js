function createGrid() {
    const mainDiv = document.querySelector("#grid");
    appendGrids(mainDiv);
    mouseMoveAndMouseDown(mainDiv, color);
}

function appendGrids(mainDiv) {
    for (let i = 0; i < 100; i++) {
        let column = document.createElement("div");
        column.setAttribute("class", "column");
        mainDiv.appendChild(column);
        for (let j = 0; j < 100; j++) {
            let miniDiv = document.createElement("div");
            column.appendChild(miniDiv);
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

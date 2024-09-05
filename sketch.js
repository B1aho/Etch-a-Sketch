function createGrid() {
    const mainDiv = document.querySelector("#grid");
    mouseMoveAndMouseDown(mainDiv, color);
    appendGrids(mainDiv);
}

function appendGrids(mainDiv) {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let miniDiv = document.createElement("div");
            mainDiv.appendChild(miniDiv);
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
        target.removeEventListener('mouseup', endMove);
    };

    target.addEventListener('mousedown', function (event) {
        event.preventDefault()  // prevent drag
        target.addEventListener('mouseover', whileMove);
        target.addEventListener('mouseup', endMove);   
    });
}

createGrid();

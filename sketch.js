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

// Эта функция работает пока неправильно, она после нажатия все красит, даже если поднимается мышка
function mouseMoveAndMouseDown(target, whileMove) {
    let endMove = function () {
        target.removeEventListener('mousemove', whileMove);
        target.removeEventListener('mouseup', endMove);
    };

    target.addEventListener('mousedown', function (event) {
        target.addEventListener('mouseover', whileMove);
        target.addEventListener('mouseup', endMove);   
    });
}

createGrid();

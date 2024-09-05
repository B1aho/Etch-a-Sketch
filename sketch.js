// Initilize grid and add event listeners to it and to input
function initGrid() {
    const mainDiv = document.querySelector("#grid");
    const inputGrid = document.querySelector("#grid-input");
    const inputColor = document.querySelector("#color-input");
    const value = document.querySelector("#value");
    appendGrid(mainDiv, inputGrid.value);
    // Будем передвать тот цвет или раудугу по выбору пользователя
    mouseMoveAndMouseDown(mainDiv, randomColor);
    listenInputChangeColor(inputColor, mainDiv);
    listenInputChangeGridValue(inputGrid, value, mainDiv);
}

function listenInputChangeGridValue (input, value, grid) {
    input.addEventListener("input", (event) => {
        let inputVal = event.target.value;
        value.textContent = `${inputVal} X ${inputVal}`;
        changeGrid(inputVal, grid);
    })
}

function listenInputChangeColor (inputColor, mainDiv) {
    inputColor.addEventListener("input", (event) => {
        // Преобразовать строку в функцию и передать
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
        target.removeEventListener('mouseover', whileMove);
        target.removeEventListener('mouseup', endMove);
    };

    target.addEventListener('mousedown', function (event) {
        event.preventDefault()  // prevent drag
        whileMove(event);
        target.addEventListener('mouseover', whileMove);
        target.addEventListener('mouseup', endMove);   
    });
}

initGrid();
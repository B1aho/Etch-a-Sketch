const mainDiv = document.querySelector("#grid");
let currenFunction = randomColor;

// Initilize grid
function initGrid() {
    const inputGrid = document.querySelector("#grid-input");
    const tools = document.querySelector(".tools");
    const value = document.querySelector("#value");
    appendGrid(inputGrid.value);
    setListenersForGrid();
    setListenersForTools(tools);
    listenInputChangeGridValue(inputGrid, value);
}

function setListenersForGrid() {
    mainDiv.addEventListener("mousedown", (event) => {
        event.preventDefault();
        currenFunction(event);
        mainDiv.addEventListener("mouseover", currenFunction)
    });
    mainDiv.addEventListener("mouseup", () => {
        mainDiv.removeEventListener("mouseover", currenFunction);
    })
}

function setListenersForTools(tools) {
    tools.addEventListener("click", (event) => {
        console.log("tool press");
        switch(event.target.id) {
            case "color-input":
            setListenersForInputColor(event.target);
            break;

            case "clear":
            let num = mainDiv.children.length;
            clearGrid();
            appendGrid(num);
            break;

            case "no-grid":
            let length = mainDiv.children.length;
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length; j++) {
                    let square = mainDiv.children[i].children[j];
                    square.classList.toggle("square-no-outline");
                }
            }
            break;

            case "rainbow-mode":
            currenFunction = randomColor;
            break;

            default:
            break;
        }
    })
}

function listenInputChangeGridValue (input, value) {
    input.addEventListener("input", (event) => {
        let inputVal = event.target.value;
        value.textContent = `${inputVal} X ${inputVal}`;
        changeGrid(inputVal);
    })
}

function changeGrid(num) {
    clearGrid();
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

function randomColor(event) {
    let x = Math.floor(Math.random() * 255 + 1);
    let y = Math.floor(Math.random() * 255 + 1);
    let z = Math.floor(Math.random() * 255 + 1);
    event.target.style.background = `rgb(${x}, ${y} ,${z})`; 
}

function setListenersForInputColor(input) {
    input.addEventListener("input", (event) => {
        let color = event.target.value;
        let red = parseInt(color.substr(1, 2), 16);
        let green = parseInt(color.substr(3, 2), 16);
        let blue = parseInt(color.substr(5, 2), 16);
        let colorFunc = (r, g, b) => function (event) {
            event.target.style.background = `rgb(${r}, ${g} ,${b})`;
        }
        currenFunction = colorFunc(red, green, blue);
    })
}

initGrid();
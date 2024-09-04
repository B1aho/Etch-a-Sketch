function createGrid() {
    const mainDiv = document.querySelector("#grid");
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let miniDiv = document.createElement("div");
            mainDiv.appendChild(miniDiv);
        }
    }
}
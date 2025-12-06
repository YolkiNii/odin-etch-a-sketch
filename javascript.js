const grid = document.getElementById("grid-container");

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        // create a row div for each row
        const row = document.createElement("div");
        row.classList.add("row")
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        grid.appendChild(row);
    }

    return;
}

createGrid(16);

grid.addEventListener("mouseover", (event) => {
    const square = event.target;

    if (square.classList.contains("square")) {
        square.classList.add("hover-color");
    }
});

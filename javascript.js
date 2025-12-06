const grid = document.getElementById("grid-container");
const sizeButton = document.querySelector("button");

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

function generateRandomBackground() {
    // exclude white: rgb(255, 255, 255)
    const r = Math.floor(Math.random() * 254)
    const g = Math.floor(Math.random() * 254)
    const b = Math.floor(Math.random() * 254)

    return `rgb(${r} ${g} ${b} / 10%)`
}

createGrid(16);

grid.addEventListener("mouseover", (event) => {
    const square = event.target;

    if (square.classList.contains("square")) {
        const background = square.style["background"];
        
        if (!background)
            square.style["background"] = generateRandomBackground();
        else {
            // extract the rgb values
            const rgba = background.slice(background.indexOf("(") + 1, -1).split(", ");
            let opacity = +rgba[3];

            if (opacity < 1)
                opacity += 0.1;

            square.style["background"] = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${opacity})`
        }
    }
});

sizeButton.addEventListener("click", (event) => {
    let chosenSize = 0;

    while (chosenSize < 1 || chosenSize > 100 || isNaN(chosenSize)) {
        chosenSize = prompt("Select a size between 1 and 100.");

        chosenSize = parseInt(chosenSize);
    }

    // clear grid
    while (grid.firstChild)
        grid.removeChild(grid.firstChild);

    createGrid(chosenSize)
});
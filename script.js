function init() {
    createGrid();
    checkMouseEnter();
    buttonPress();
}

function createGrid(row = 16, col = 16) {
    const containerDiv = document.querySelector("#container");
    
    containerDiv.style.cssText = 
    `grid-template-columns: repeat(${col}, 1fr);` +
    `grid-template-columns: repeat(${row}, 1fr);`;
    
    for (let i = 0; i < row * col; i++) {
        const gridDivs = document.createElement("div");
        gridDivs.className = "innerDiv";
        containerDiv.appendChild(gridDivs);
    }
}

function checkMouseEnter() {
    const gridDivs = document.querySelectorAll(".innerDiv");
    gridDivs.forEach(button => {
        button.addEventListener("mouseenter", changeColor);
    });
}

function changeColor(e) {
    e.target.style.cssText = 
    `background-color: rgba(${generateColor()}, ${generateColor()}, 
    ${generateColor()}, ${generateOpacity()});`;
   
}

function buttonPress() {
    const container = document.querySelector("#container");
    const button = document.getElementById("button-grid");
    button.addEventListener("click", () => {
        let answer = prompt("Please enter a number between 1 and 100");
        if (answer >= 1 && answer <= 100) {
            while (container.hasChildNodes()) {
                container.removeChild(container.firstChild);
            }
            createGrid(answer, answer);
            checkMouseEnter();
        }
        else {
            alert("Please enter a number between 1 and 100");
        }

    });
}

function generateColor() {
    const color = Math.floor(Math.random() * 256);
    return color;
}

function generateOpacity() {
    const opacity = Math.random(); 
    return opacity;
}

init();
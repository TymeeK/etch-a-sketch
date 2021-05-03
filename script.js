function init() {
    createGrid();
}

function createGrid(row = 16, col = 16) {
    const containerDiv = document.querySelector("#container");
    
    containerDiv.style.cssText = "display: grid;"
    + `grid-template-columns: repeat(${col}, 1fr); grid-template-columns: repea`
    + `t(${row}, 1fr);`;
    
    for (let i = 0; i < row * col; i++) {
        const gridDivs = document.createElement("div");
        gridDivs.innerText = i + 1;
        gridDivs.className = "innerDiv";
        containerDiv.appendChild(gridDivs);
    }
}

init();
window.onload = function () {
    const gridContainer = document.createElement('div');
    for (let i = 1; i <= 256; i++) {
        const block = document.createElement('div');
        block.style.backgroundColor = "pink";
        // block.style.margin = "0px";
        // block.style.padding = "0px";
        // block.style.width = "5vw";
        // block.style.height = "5vw";
        gridContainer.appendChild(block);
    }; 
    document.body.appendChild(gridContainer);
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = "repeat(16, 7vw)";
    gridContainer.style.gridTemplateRows = "repeat(16, 7vw)";
    // gridContainer.style.gap = "5px";
    // gridContainer.style.alignItems = "center";
    // gridContainer.style.justifyContent = "center";
    // gridContainer.style.alignContent = "center";

};

window.onload = function () {
    const gridContainer = document.createElement('div');
    for (let i = 1; i <= 256; i++) {
        const block = document.createElement('div');
        block.style.backgroundColor = "pink";
        // block.style.margin = "0px";
        // block.style.padding = "0px";
        block.style.width = "auto";
        block.style.height = "auto";
        gridContainer.appendChild(block);
    }; 
    document.body.appendChild(gridContainer);
    gridContainer.style.width = "800px";
    gridContainer.style.height = "800px";
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = "repeat(16, auto)";
    gridContainer.style.gridTemplateRows = "repeat(16, auto)";
    // gridContainer.style.gap = "5px";
    // gridContainer.style.alignItems = "center";
    // gridContainer.style.justifyContent = "center";
    // gridContainer.style.alignContent = "center";

};

window.onload = function () {
    // set default game size
    let gridSide = 16;

    // input button space
    const headerContainer = document.createElement('div');
    document.body.appendChild(headerContainer);
    headerContainer.style.width = "800px";
    headerContainer.style.height = "50px";
    headerContainer.style.backgroundColor = "pink";

    //  create input button
    const inputBtn = document.createElement('button');
    inputBtn.textContent = "Make your own field";
    headerContainer.appendChild(inputBtn);
    inputBtn.addEventListener("click", popUp);
    function popUp() {
        gridSide = prompt("Type a number from 10 to 100");
        if (gridSide < 10 || gridSide > 100){
            alert ("Type a number from 10 to 100");
            gridSide = prompt("Type a number from 10 to 100");
            return gridSide;
     } else if (gridSide != null) {
            return gridSide;
        };
        console.log(gridSide);
    };
    gridSide = popUp();

    // create the game field
    const gridContainer = document.createElement('div');
    // make squares 

    for (let i = 1; i <= (gridSide*gridSide); i++) {
        console.log(i)
        const block = document.createElement('div');
        block.style.backgroundColor = "teal";
        gridContainer.appendChild(block);
        block.setAttribute('id', 'block');
        // adds hover effect to draw with the mouse 
        // block.addEventListener("mouseenter", changeColor);
        // function changeColor() {
        //     block.style.backgroundColor = "black";
        // };
    };

    document.body.appendChild(gridContainer);
    gridContainer.setAttribute('id', 'container');
    gridContainer.style.width = "800px";
    gridContainer.style.height = "800px";
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = "repeat(gridSide, auto)";
    gridContainer.style.gridTemplateRows = "repeat(gridSide, auto)";
};

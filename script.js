window.onload = function () {
    // set default game size
    let gridSide = 22;

    // input button space
    const headerContainer = document.createElement('div');
    document.body.appendChild(headerContainer);
    headerContainer.style.width = "800px";
    headerContainer.style.height = "20px";
    headerContainer.style.backgroundColor = "pink";

    // create the game field
    let gridContainer = document.createElement('div');
    document.body.appendChild(gridContainer);
    gridContainer.setAttribute('id', 'container');
    gridContainer.style.width = "800px";
    gridContainer.style.height = "800px";
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplate = `repeat(${gridSide}, 1fr) / repeat(${gridSide}, 1fr)`;

    // make squares 
    for (let i = 1; i <= (gridSide * gridSide); i++) {
        //  console.log(i);
        const block = document.createElement('div');
        block.style.backgroundColor = "teal";
        gridContainer.appendChild(block);
        block.setAttribute('id', 'block');

        // adds hover effect to draw with the mouse 
        block.addEventListener("mouseenter", changeColor);
        function changeColor() {
            block.style.backgroundColor = "black";
        };
    };

    //  create input button
    const inputBtn = document.createElement('button');
    inputBtn.textContent = "Make your own field";
    headerContainer.appendChild(inputBtn);
    inputBtn.addEventListener("click", create);

    // making user specified grid
    function create() {
        gridContainer.remove();
        gridSide = prompt("Type a number from 10 to 100");
        if (gridSide < 10 || gridSide > 100) {
            alert("From 10 to 100");
            gridSide = prompt("Type a number from 10 to 100");
        } else if (gridSide != null) {
            // prompt value is a string so need to convert into number
            gridSide = parseInt(gridSide, 10);
        };

        gridContainer = document.createElement('div');
        document.body.appendChild(gridContainer);
        gridContainer.setAttribute('id', 'container');
        gridContainer.style.width = "800px";
        gridContainer.style.height = "800px";
        gridContainer.style.display = "grid";

        // to pass variable as value into repeat function use template literal
        gridContainer.style.gridTemplate = `repeat(${gridSide}, 1fr) / repeat(${gridSide}, 1fr)`;

        for (let i = 1; i <= (gridSide * gridSide); i++) {
            const block = document.createElement('div');
            block.style.backgroundColor = "teal";
            gridContainer.appendChild(block);
            block.setAttribute('id', 'block');

            // adds hover effect to draw with the mouse 
            block.addEventListener("mouseenter", changeColor);
            function changeColor() {
                block.style.backgroundColor = "black";
            };
        };
    };
};

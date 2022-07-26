window.onload = function () {
    // set default game size
    let gridSide = 16;

    // main game space
    const mainDiv = document.createElement('div');
    document.body.appendChild(mainDiv);
    mainDiv.style.width = "100%";
    mainDiv.style.height = "100%";
    mainDiv.style.backgroundImage = "linear-gradient(180deg, rgb(0, 87, 183) 50%, rgb(255, 215, 0) 50%)";
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "column";
    mainDiv.style.alignItems = "center";
    mainDiv.style.justifyContent = "space-evenly";

    // input button space
    const headerContainer = document.createElement('div');
    mainDiv.appendChild(headerContainer);
    headerContainer.setAttribute('id', 'headerContainer');
    headerContainer.style.width = "500px";
    headerContainer.style.height = "100px";
    headerContainer.style.display = "flex";
    headerContainer.style.flexDirection = "column";
    headerContainer.style.alignItems = "center";
    headerContainer.style.justifyContent = "space-around";

    //create game name
    const gameName = document.createElement('div');
    headerContainer.appendChild(gameName);
    gameName.style.width = "fit-content";
    gameName.textContent = "Etch-A-Sketch";
    gameName.style.fontFamily = "monospace";
    gameName.style.color = "rgb(255, 215, 0)";
    gameName.style.fontSize = "xx-large";

    //  create input button
    const inputBtn = document.createElement('button');
    headerContainer.appendChild(inputBtn);
    inputBtn.style.backgroundColor = "rgb(255, 215, 0)";
    inputBtn.style.width = "max-content";
    inputBtn.style.fontFamily = "monospace";
    inputBtn.style.fontSize = "larger";
    inputBtn.style.display = "block";
    inputBtn.textContent = "Make your own grid";

    inputBtn.addEventListener("click", create);

    // create the game field
    let gridContainer = document.createElement('div');
    mainDiv.appendChild(gridContainer);
    gridContainer.setAttribute('id', 'gridContainer');
    gridContainer.style.width = "500px";
    gridContainer.style.height = "500px";
    gridContainer.style.border = "solid";
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplate = `repeat(${gridSide}, 1fr) / repeat(${gridSide}, 1fr)`;

    // make squares 
    for (let i = 1; i <= (gridSide * gridSide); i++) {
        const block = document.createElement('div');
        block.style.backgroundColor = "white";
        gridContainer.appendChild(block);
        block.setAttribute('id', 'block');

        // adds hover effect to draw with the mouse 
        block.addEventListener("mouseenter", changeColor);
        function changeColor() {
            block.style.backgroundColor = "black";
        };
    };

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
        mainDiv.appendChild(gridContainer);
        gridContainer.setAttribute('id', 'gridContainer');
        gridContainer.style.width = "500px";
        gridContainer.style.height = "500px";
        gridContainer.style.border = "solid";
        gridContainer.style.display = "grid";

        // to pass variable as value into repeat function use template literal
        gridContainer.style.gridTemplate = `repeat(${gridSide}, 1fr) / repeat(${gridSide}, 1fr)`;

        for (let i = 1; i <= (gridSide * gridSide); i++) {
            const block = document.createElement('div');
            block.style.backgroundColor = "white";
            gridContainer.appendChild(block);
            block.setAttribute('id', 'block');

            // adds hover effect to draw with the mouse 
            block.addEventListener("mouseenter", changeColor);
            function changeColor() {
                block.style.backgroundColor = "black";
            };
        };
        document.getElementById("headerContainer").style.order = "1";
        document.getElementById("gridContainer").style.order = "2";
        document.getElementById("footerContainer").style.order = "3";
    };

    // footer
    let footerContainer = document.createElement('div');
    mainDiv.appendChild(footerContainer);
    footerContainer.setAttribute('id', 'footerContainer');
    footerContainer.style.width = "500px";
    footerContainer.style.height = "70px";
    footerContainer.style.display = "flex";
    footerContainer.style.flexDirection = "row";
    footerContainer.style.justifyContent = "center";

    // footer note
    let badge = document.createElement('div');
    footerContainer.appendChild(badge);
    badge.style.width = "fit-content";
    badge.setAttribute('style', 'white-space: pre;');
    badge.textContent = "Glory to Ukraine! \r\nCopyright Maria Martinkous 2022";
    badge.style.textAlign = "center";
    badge.style.fontFamily = "monospace";
    badge.style.color = "rgb(0, 87, 183)";
    badge.style.fontSize = "larger";
};

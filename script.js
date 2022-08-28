/**
 *  @type HTMLCanvasElement
 */

const DEFAULT_RESOLUTION = 32;
const pixelCanvas = document.getElementById('pixel-canvas');
let canvasPixelResolution = DEFAULT_RESOLUTION; // Number of pixels on each side => The actual resolution of the image
let pixelRatio = pixelCanvas.clientWidth / canvasPixelResolution;
const ctx = pixelCanvas.getContext('2d');
let isDrawing = false;

function randomColor() {
    return [Math.floor((Math.random()) * 255), Math.floor((Math.random()) * 255), Math.floor((Math.random()) * 255)];
}

function drawPixel(e) {
    const canvasBoundingClientRect = pixelCanvas.getBoundingClientRect();
    const mousePosition = [e.clientX - canvasBoundingClientRect.left, e.clientY - canvasBoundingClientRect.top]; // mousePosition[0] == canvasX, mousePosition[1] == canvasY
    const pixelCoordX = Math.floor(mousePosition[0] / pixelRatio);
    const pixelCoordY = Math.floor(mousePosition[1] / pixelRatio);

    if (drawingMode == 'brush') {
        switch (brushSize) {
            case '1b':
                ctx.fillRect(pixelCoordX, pixelCoordY, 1, 1);
                break;
            case '2b':
                ctx.fillRect(pixelCoordX, pixelCoordY, 2, 2);
                break;
            case '3b':
                ctx.fillRect(pixelCoordX, pixelCoordY, 1, 1);
                ctx.fillRect(pixelCoordX - 1, pixelCoordY + 1, 1, 1);
                ctx.fillRect(pixelCoordX, pixelCoordY + 1, 1, 1);
                ctx.fillRect(pixelCoordX + 1, pixelCoordY + 1, 1, 1);
                ctx.fillRect(pixelCoordX + 1, pixelCoordY, 1, 1);
                ctx.fillRect(pixelCoordX - 1, pixelCoordY, 1, 1);
                ctx.fillRect(pixelCoordX - 1, pixelCoordY - 1, 1, 1);
                ctx.fillRect(pixelCoordX, pixelCoordY - 1, 1, 1);
                ctx.fillRect(pixelCoordX + 1, pixelCoordY - 1, 1, 1);
                break;
            case '3c':
                ctx.fillRect(pixelCoordX, pixelCoordY, 1, 1);
                ctx.fillRect(pixelCoordX, pixelCoordY + 1, 1, 1);
                ctx.fillRect(pixelCoordX + 1, pixelCoordY, 1, 1);
                ctx.fillRect(pixelCoordX - 1, pixelCoordY, 1, 1);
                ctx.fillRect(pixelCoordX, pixelCoordY - 1, 1, 1);
                break;
        }
    }

    else if (drawingMode == 'eraser') {
        switch (brushSize) {
            case '1b':
                ctx.clearRect(pixelCoordX, pixelCoordY, 1, 1);
                break;
            case '2b':
                ctx.clearRect(pixelCoordX, pixelCoordY, 2, 2);
                break;
            case '3b':
                ctx.clearRect(pixelCoordX, pixelCoordY, 1, 1);
                ctx.clearRect(pixelCoordX - 1, pixelCoordY + 1, 1, 1);
                ctx.clearRect(pixelCoordX, pixelCoordY + 1, 1, 1);
                ctx.clearRect(pixelCoordX + 1, pixelCoordY + 1, 1, 1);
                ctx.clearRect(pixelCoordX + 1, pixelCoordY, 1, 1);
                ctx.clearRect(pixelCoordX - 1, pixelCoordY, 1, 1);
                ctx.clearRect(pixelCoordX - 1, pixelCoordY - 1, 1, 1);
                ctx.clearRect(pixelCoordX, pixelCoordY - 1, 1, 1);
                ctx.clearRect(pixelCoordX + 1, pixelCoordY - 1, 1, 1);
                break;
            case '3c':
                ctx.clearRect(pixelCoordX, pixelCoordY, 1, 1);
                ctx.clearRect(pixelCoordX, pixelCoordY + 1, 1, 1);
                ctx.clearRect(pixelCoordX + 1, pixelCoordY, 1, 1);
                ctx.clearRect(pixelCoordX - 1, pixelCoordY, 1, 1);
                ctx.clearRect(pixelCoordX, pixelCoordY - 1, 1, 1);
                break;
        }
    }

    else if (drawingMode == 'rainbow') {
        let randomRGB = randomColor();
        ctx.fillStyle = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`
        switch (brushSize) {
            case '1b':
                ctx.fillRect(pixelCoordX, pixelCoordY, 1, 1);
                break;
            case '2b':
                ctx.fillRect(pixelCoordX, pixelCoordY, 2, 2);
                break;
            case '3b':
                ctx.fillRect(pixelCoordX, pixelCoordY, 1, 1);
                randomRGB = randomColor();
                ctx.fillStyle = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`
                ctx.fillRect(pixelCoordX - 1, pixelCoordY + 1, 1, 1);
                randomRGB = randomColor();
                ctx.fillStyle = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`
                ctx.fillRect(pixelCoordX, pixelCoordY + 1, 1, 1);
                randomRGB = randomColor();
                ctx.fillStyle = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`
                ctx.fillRect(pixelCoordX + 1, pixelCoordY + 1, 1, 1);
                randomRGB = randomColor();
                ctx.fillStyle = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`
                ctx.fillRect(pixelCoordX + 1, pixelCoordY, 1, 1);
                randomRGB = randomColor();
                ctx.fillStyle = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`
                ctx.fillRect(pixelCoordX - 1, pixelCoordY, 1, 1);
                randomRGB = randomColor();
                ctx.fillStyle = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`
                ctx.fillRect(pixelCoordX - 1, pixelCoordY - 1, 1, 1);
                randomRGB = randomColor();
                ctx.fillStyle = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`
                ctx.fillRect(pixelCoordX, pixelCoordY - 1, 1, 1);
                randomRGB = randomColor();
                ctx.fillStyle = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`
                ctx.fillRect(pixelCoordX + 1, pixelCoordY - 1, 1, 1);
                break;
            case '3c':
                ctx.fillRect(pixelCoordX, pixelCoordY, 1, 1);
                randomRGB = randomColor();
                ctx.fillStyle = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`
                ctx.fillRect(pixelCoordX, pixelCoordY + 1, 1, 1);
                randomRGB = randomColor();
                ctx.fillStyle = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`
                ctx.fillRect(pixelCoordX + 1, pixelCoordY, 1, 1);
                randomRGB = randomColor();
                ctx.fillStyle = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`
                ctx.fillRect(pixelCoordX - 1, pixelCoordY, 1, 1);
                randomRGB = randomColor();
                ctx.fillStyle = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`
                ctx.fillRect(pixelCoordX, pixelCoordY - 1, 1, 1);
                break;
        }
    }

}

pixelCanvas.addEventListener('mousedown', (e) => {
    isDrawing = true;

    pixelCanvas.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;
        drawPixel(e);
    })

    drawPixel(e);

    document.addEventListener('mouseup', () => {
        isDrawing = false;
    })

    window.oncontextmenu = function () {
        isDrawing = false;
    }
})

const gridColors = document.querySelectorAll('.color');
const currentColor = document.getElementById('current-color');

function updateCurrentColor() {
    currentColor.style.backgroundColor = ctx.fillStyle;
}

gridColors.forEach(color => {
    color.addEventListener('click', () => {
        ctx.fillStyle = window.getComputedStyle(color).backgroundColor;
        drawingMode = 'brush';
        updateCurrentColor();
    })
})

const colorPicker = document.getElementById('color-picker');

let hexColors = ['#FFFFFF', '#FFFFFF', '#FFFFFF'];

colorPicker.addEventListener('change', () => {
    ctx.fillStyle = colorPicker.value;
    drawingMode = 'brush';
    updateCurrentColor();
    updateAndShiftColorHistory();
})


function updateAndShiftColorHistory() {
    let colorHistory = document.getElementsByClassName('saved-color');
    let foundColor = false;

    hexColors.forEach(color => {
        if (colorPicker.value == color) foundColor = true;
    })

    if (foundColor) return;

    colorHistory[2].style.backgroundColor = colorHistory[1].style.backgroundColor;
    hexColors[2] = hexColors[1];
    colorHistory[1].style.backgroundColor = colorHistory[0].style.backgroundColor;
    hexColors[1] = hexColors[0];
    colorHistory[0].style.backgroundColor = colorPicker.value;
    hexColors[0] = colorPicker.value;
}

const savedColors = document.querySelectorAll('.saved-color');
savedColors.forEach(savedColor => {
    savedColor.addEventListener('click', () => {
        ctx.fillStyle = window.getComputedStyle(savedColor).backgroundColor;
        drawingMode = 'brush';
        updateCurrentColor();
    })
})


const brushSlider = document.getElementById('brush-range');
const brushDisplayText = document.getElementById('brush-size');
let brushSize = '1b';


brushSlider.addEventListener('input', () => {
    switch (brushSlider.value) {
        case '0':
            brushSlider.value = 1;
            break;
        case '1':
            brushDisplayText.textContent = '1 x 1 BLOCK';
            brushSize = '1b';
            break;

        case '2':
            brushDisplayText.textContent = '2 x 2 BLOCK';
            brushSize = '2b';
            break;

        case '3':
            brushDisplayText.textContent = '3 x 3 BLOCK';
            brushSize = '3b';
            break;

        case '4':
            brushDisplayText.textContent = '3 x 3 CROSS';
            brushSize = '3c';
            break;
    }
})

const brushButton = document.getElementById('brush-button');
const eraserButton = document.getElementById('eraser-button');

let drawingMode = 'brush';

brushButton.addEventListener('click', () => {
    drawingMode = 'brush';
})

eraserButton.addEventListener('click', () => {
    drawingMode = 'eraser';
})


const clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', () => {
    if (confirm(`Do you wish to clear the canvas? \nClearing the canvas will remove all your drawings.`)) ctx.clearRect(0, 0, pixelCanvas.width, pixelCanvas.height);
})

const rainbowButton = document.getElementById('rainbow-button');
rainbowButton.addEventListener('click', () => {
    drawingMode = 'rainbow';
})

const infoButton = document.getElementById('info-button');
const infoText = document.getElementById('info-text');
infoText.style.display = 'none';

function clamp(val, min, max) {
    return val > max ? max : val < min ? min : val;
}

pixelCanvas.addEventListener('mousemove', (e) => {
    const canvasBoundingClientRect = pixelCanvas.getBoundingClientRect();
    const mousePosition = [e.clientX - canvasBoundingClientRect.left, e.clientY - canvasBoundingClientRect.top]; // mousePosition[0] == canvasX, mousePosition[1] == canvasY
    const pixelCoordX = Math.floor(mousePosition[0] / pixelRatio);
    const pixelCoordY = Math.floor(mousePosition[1] / pixelRatio);
    if (pixelCoordX > 32) {

    }
    infoText.textContent = `Coordinates: [${clamp((pixelCoordX + 1), 1, canvasPixelResolution)}, ${clamp((pixelCanvas.height - pixelCoordY), 1, canvasPixelResolution)}]`
    pixelCanvas.addEventListener('mouseleave', () => {
        infoText.textContent = `Coordinates: Out of Bounds`;
    })
})
infoButton.addEventListener('click', () => {
    if (infoText.style.display == 'none') {
        infoText.style.display = 'block';
    }
    else infoText.style.display = 'none';

})

const exportButton = document.getElementById('export-button');

exportButton.addEventListener('click', (e) => {
    if (confirm(`Do you wish to export your canvas to a .png file?`)) {
        const downloadLink = document.createElement('a');
        const exportedCanvas = document.getElementById('pixel-canvas');
        downloadLink.href = exportedCanvas.toDataURL();
        downloadLink.download = 'drawing_export.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
})

const resolutionSettings = document.getElementById('resolution');


resolutionSettings.addEventListener('change', () => {
    if (confirm(`Changing the resolution will clear the whole canvas and delete your drawing. \nDo you wish to proceed?`)) {
        if(gridStatus == 'on' || gridStatus == 'hidden') destroyGrid();
        ctx.clearRect(0, 0, pixelCanvas.width, pixelCanvas.height);
        canvasPixelResolution = parseInt(resolutionSettings.value);
        pixelRatio = pixelCanvas.clientWidth / canvasPixelResolution;
        pixelCanvas.width = canvasPixelResolution;
        pixelCanvas.height = canvasPixelResolution;
        updateCurrentColor();
    } else {
        resolutionSettings.selectedIndex = resToIndex(canvasPixelResolution);
    }
})

function resToIndex(res) {
    switch (res) {
        case 8:
            return 0;
            break;
        case 16:
            return 1;
            break;

        case 32:
            return 2;
            break;

        case 64:
            return 3;
            break;

    }
}

const gridButton = document.getElementById('grid-button');
let gridOverlay = document.getElementById('grid');
let gridStatus = 'off';

gridButton.addEventListener('click', () => {
    switch(gridStatus) {
        case 'off':
            createGrid();
            gridStatus = 'on';
            console.log(gridStatus);
            break;
        case 'hidden':
            gridOverlay.style.visibility = 'visible';
            console.log('grid was hidden, turning it on');
            gridStatus = 'on';
            console.log(gridStatus);
            break;
        case 'on':
            gridOverlay.style.visibility = 'hidden';
            gridStatus = 'hidden';
            console.log(gridStatus);

    }
})


function createGrid() {
    gridOverlay.style.gridTemplateColumns = `repeat(${canvasPixelResolution}, 1fr)`;
    gridOverlay.style.gridTemplateRows = `repeat(${canvasPixelResolution}, 1fr)`;
    let amountOfSquares = canvasPixelResolution * canvasPixelResolution;
    for (i = 1; i <= amountOfSquares; i++) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('grid-pixel');
        newSquare.style.width = `${pixelRatio-2}px`;
        newSquare.style.height = `${pixelRatio-2}px`;
        gridOverlay.appendChild(newSquare);
    }
}

function destroyGrid() {
    gridStatus = 'off';
    let gridPixels = document.querySelectorAll('.grid-pixel');
    gridPixels.forEach(pixel => {
        pixel.remove();
    })
}

const settingsButton = document.getElementById('settings-button');
const miscPanel = document.getElementById('misc-panel');
let miscSlide = false;

settingsButton.addEventListener('click', () => {
    if(miscSlide) {
        miscPanel.classList.remove('expand-from-bot');
        miscPanel.classList.add('hide-from-bot');
        miscPanel.addEventListener('animationend', ()=>{
            miscSlide = false;
        })
    }
    else {
        miscPanel.classList.add('expand-from-bot');
        miscPanel.classList.remove('hide-from-bot');
        miscPanel.addEventListener('animationend', ()=>{
            miscSlide = true;
        })
    }
})



/**
 *  @type HTMLCanvasElement
 */

const pixelCanvas = document.getElementById('pixel-canvas');
const PIXEL_COUNT = 32; // Number of pixels on each side => The actual resolution of the image
const pixelRatio = pixelCanvas.clientWidth / PIXEL_COUNT;
const ctx = pixelCanvas.getContext('2d');
let isDrawing = false;

function randomColor () {
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
    if(confirm(`Do you wish to clear the drawing board? \nClearing the drawing board will remove all your progress.`)) ctx.clearRect(0, 0, pixelCanvas.width, pixelCanvas.height);
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
    if(pixelCoordX > 32) {

    }
    infoText.textContent = `Coordinates: [${clamp((pixelCoordX + 1), 1, 32)}, ${clamp((pixelCanvas.height - pixelCoordY), 1, 32)}]`
    pixelCanvas.addEventListener('mouseleave', () => {
        infoText.textContent = `Coordinates: Out of Bounds`;
    })
})
infoButton.addEventListener('click', () => {
    if(infoText.style.display =='none') {
        infoText.style.display = 'block';
    }
    else infoText.style.display = 'none';

})


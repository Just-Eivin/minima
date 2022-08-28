/**
 *  @type HTMLCanvasElement
 */

const pixelCanvas = document.getElementById('pixel-canvas');
const PIXEL_COUNT = 32; // Number of pixels on each side => The actual resolution of the image
const pixelRatio = pixelCanvas.clientWidth / PIXEL_COUNT;
const ctx = pixelCanvas.getContext('2d');
let isDrawing = false;

function drawPixel(e) {
    const canvasBoundingClientRect = pixelCanvas.getBoundingClientRect();
    const mousePosition = [e.clientX - canvasBoundingClientRect.left, e.clientY - canvasBoundingClientRect.top]; // mousePosition[0] == canvasX, mousePosition[1] == canvasY
    const pixelCoordX = Math.floor(mousePosition[0] / pixelRatio);
    const pixelCoordY = Math.floor(mousePosition[1] / pixelRatio);
    ctx.fillRect(pixelCoordX, pixelCoordY, 1, 1);
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

function updateCurrentColor () {
    currentColor.style.backgroundColor =  ctx.fillStyle;
}


gridColors.forEach(color => {
    color.addEventListener('click', () => {
        ctx.fillStyle = window.getComputedStyle(color).backgroundColor;
        updateCurrentColor();
    })
})



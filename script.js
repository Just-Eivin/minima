/**
 *  @type HTMLCanvasElement
 */

// Pixel Resolution
    // 512px x 512px => 8x8, 16x16, 32x32, 64x64 (, 128x128)
    // Calculate pixel length
//---

// Paint 1 pixel with click
    // Event listener for click
        // Translate clientPOS to canvasPOS
        // Paint Rect on translated position
    //---
//---

const pixelCanvas = document.getElementById('pixel-canvas');
const PIXEL_COUNT = 32; // Number of pixels on each side => The actual resolution of the image
const pixelRatio = pixelCanvas.clientWidth / PIXEL_COUNT;
const ctx = pixelCanvas.getContext('2d');
const canvasBoundingClientRect = pixelCanvas.getBoundingClientRect();
let isDrawing = false;

function drawPixel (e) {
    const mousePosition = [e.clientX - canvasBoundingClientRect.left, e.clientY - canvasBoundingClientRect.top]; // mousePosition[0] == canvasX, mousePosition[1] == canvasY
    const pixelCoordX = Math.floor(mousePosition[0] / pixelRatio);
    const pixelCoordY = Math.floor(mousePosition[1] / pixelRatio);
    ctx.fillRect(pixelCoordX, pixelCoordY, 1, 1);
}

pixelCanvas.addEventListener('click', (e) => {
    drawPixel(e);
})

pixelCanvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    pixelCanvas.addEventListener('mousemove', (e) => {
        if(!isDrawing) return;
        drawPixel(e);
    })
    document.addEventListener('mouseup', () => {
        isDrawing = false;
    })
})

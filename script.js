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

pixelCanvas.addEventListener('click', (e) => {
    ctx.fillRect(0, 0, 1, 1);
})

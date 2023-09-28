const SQUARE_SIZE_PX = 30

class Drawer {
    constructor(canvas){
        /** @type {HTMLCanvasElement} */
        this.canvas = canvas

        /** @type {CanvasRenderingContext2D} */
        this.context = this.canvas.getContext("2d")
    }

    /**
     * 指定したマスを指定した色で塗りつぶす
     * @param {number} x 
     * @param {number} y 
     * @param {string} color 
     */
    drawSquare(x,y,color){
        this.context.fillStyle = color
        this.context.fillRect(
            x * SQUARE_SIZE_PX,
            y * SQUARE_SIZE_PX,
            SQUARE_SIZE_PX,
            SQUARE_SIZE_PX
        )

        this.context.strokeStyle = "black"
        this.context.strokeRect(
            x * SQUARE_SIZE_PX,
            y * SQUARE_SIZE_PX,
            SQUARE_SIZE_PX,
            SQUARE_SIZE_PX
        )
    }
}
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

    /**
     * 指定したマスを透明にする
     * @param {number} x 
     * @param {number} y 
     */
    clearSquare(x,y){
        this.context.clearRect(
            x * SQUARE_SIZE_PX,
            y * SQUARE_SIZE_PX,
            SQUARE_SIZE_PX,
            SQUARE_SIZE_PX
        )
    }

    /**
     * @param {Field} field 
     */
    drawField(field){
        for (let y = 0; y < Field.ROWS ; y++) {
            for (let x = 0; x < Field.COLS ; x++) {
                let square = field.field[y][x]
                if ( square === null ){
                    this.clearSquare(x,y)
                }else{
                    this.drawSquare(x,y,square)
                }
            }
        }
    }

    /**
     * @param {number} dx 基点
     * @param {number} dy 基点
     * @param {Tetromino} tetromino 
     */
    drawTetromino(dx,dy,tetromino){
        for (let y = 0; y < Tetromino.SIZE; y++) {
            for (let x = 0; x < Tetromino.SIZE; x++) {
                if ( tetromino.isBlock(x,y) === false){
                    continue;
                }

                this.drawSquare(
                    dx + x,
                    dy + y,
                    tetromino.color
                )
            }
        }
    }
}

/** @type {HTMLCanvasElement} */
const can = document.getElementById("can")

const ROWS = 22;
const COLS = 10;

can.width = SQUARE_SIZE_PX * COLS
can.height = SQUARE_SIZE_PX * ROWS

const drawer = new Drawer(can)

drawer.drawTetromino(0,0,Tetromino.I())
drawer.drawTetromino(4,0,Tetromino.T())
drawer.drawTetromino(0,4,Tetromino.S())
drawer.drawTetromino(4,4,Tetromino.O())
drawer.drawTetromino(0,8,Tetromino.L())
drawer.drawTetromino(4,8,Tetromino.L().rotate())
drawer.drawTetromino(0,12,Tetromino.L().rotate().rotate())
drawer.drawTetromino(4,12,Tetromino.S().rotate())
drawer.drawTetromino(0,16,Tetromino.S().rotate().rotate())
drawer.drawTetromino(4,16,Tetromino.S().rotate().rotate().rotate())


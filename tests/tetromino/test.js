
/** @type {HTMLCanvasElement} */
const can = document.getElementById("can")

const ROWS = 22;
const COLS = 10;

can.width = SQUARE_SIZE_PX * COLS
can.height = SQUARE_SIZE_PX * ROWS

const drawer = new Drawer(can)

drawer.drawTetromino(1,1,Tetromino.I())
drawer.drawTetromino(4,1,Tetromino.T())
drawer.drawTetromino(7,10,Tetromino.S())
drawer.drawTetromino(3,11,Tetromino.O())
drawer.drawTetromino(4,17,Tetromino.L())
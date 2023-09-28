
/** @type {HTMLCanvasElement} */
const can = document.getElementById("can")

const ROWS = 22;
const COLS = 10;

can.width = SQUARE_SIZE_PX * COLS
can.height = SQUARE_SIZE_PX * ROWS

const drawer = new Drawer(can)

for (let x = 0; x < COLS ; x++) {
    for (let y = 0; y < ROWS; y++) {
        drawer.drawSquare(x,y,"red")
    }
}

drawer.drawSquare(2,3,"yellow")
drawer.drawSquare(1,2,"blue")
drawer.drawSquare(3,4,"white")
drawer.drawSquare(5,10,"green")
drawer.drawSquare(5,20,"rgb(100,100,100)")
drawer.drawSquare(7,20,"#ccc")

drawer.clearSquare(4,10)
drawer.clearSquare(9,21)
drawer.clearSquare(5,5)

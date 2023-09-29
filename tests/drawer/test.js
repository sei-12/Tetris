
/** @type {HTMLCanvasElement} */
const can = document.getElementById("can")

const fcan = new FieldCanvas(can)
const drawer = new Drawer(fcan)

for (let x = 0; x < Field.COLS ; x++) {
    for (let y = 0; y < Field.ROWS; y++) {
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

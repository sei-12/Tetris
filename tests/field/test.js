
/** @type {HTMLCanvasElement} */
const can = document.getElementById("can")

const ROWS = 22;
const COLS = 10;

can.width = SQUARE_SIZE_PX * Field.COLS
can.height = SQUARE_SIZE_PX * Field.ROWS

const drawer = new Drawer(can)
const field = Field.createNew()

field.putBlock(1,1,"red")

drawer.drawField(field)

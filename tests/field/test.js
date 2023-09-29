
/** @type {HTMLCanvasElement} */
const can = document.getElementById("can")
const drawer = new Drawer(new FieldCanvas(can))
const field = Field.createNew()

field.putBlock(1,1,"red")

// ブロックと重なって置けない
let result1 = field.canPutTetromino(0,0,Tetromino.O())
console.log('result1',result1)
// 置ける
let result2 = field.canPutTetromino(1,1,Tetromino.O())
console.log('result2',result2)

// 範囲外で置けない
let result3 = field.canPutTetromino(100,100,Tetromino.I())
console.log('result3',result3)

// ギリギリ置ける
let result4 = field.canPutTetromino(7,10,Tetromino.O())
console.log('result4',result4)

// ギリギリ置ける
let result5 = field.canPutTetromino(-1,4,Tetromino.O())
console.log('result5',result5)

// ギリギリ置ける
let result6 = field.canPutTetromino(4,-1,Tetromino.O())
console.log('result6',result6)


for (let x = 0; x < Field.COLS; x++) {
    field.putBlock(x,20,"yellow")
}
field.putBlock(1,21,"green")
field.putBlock(1,19,"green")
drawer.drawField(field)


const can2 = document.getElementById('can2')
const drawer2 = new Drawer(new FieldCanvas(can2))

let clearFilledRowResult = field.clearFilledRow()
console.log(clearFilledRowResult)
drawer2.drawField(field)
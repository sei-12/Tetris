class TetrominoPos {
    static new(){
        return new TetrominoPos(
            (Field.COLS - Tetromino.SIZE) / 2 ,
            0
        )
    }

    constructor(x,y){
        this.x = x
        this.y = y
    }

    moveLeft(){
        return new TetrominoPos(this.x - 1,this.y)
    }

    moveRight(){
        return new TetrominoPos(this.x + 1,this.y)
    }

    moveDown(){
        return new TetrominoPos(this.x,this.y + 1)
    }
}


/**
 * キーボードで左右に動かすキーを押した時の処理
 * @param {Field} field 
 * @param {Tetromino} tetromino 
 * @param {TetrominoPos} tetrominoPos 
 * @param {"ArrowLeft" | "ArrowRight" } e_key 
 * @returns {TetrominoPos} 移動が成功する場合は移動後の座標を返す.移動が成功しない場合は移動前の座標をそのまま返す
 */
function handleMoveTetromino(field,tetromino,tetrominoPos,e_key){
    let moved = e_key === "ArrowLeft" ? tetrominoPos.moveLeft() : tetrominoPos.moveRight()

    let canput = field.canPutTetromino(
        moved.x,
        moved.y,
        tetromino
    )

    if ( canput ){
        return moved
    }else{
        return tetrominoPos
    }
}

/**
 * キーボードで回転するキーを押した時の処理
 * @param {Field} field 
 * @param {Tetromino} tetromino 
 * @param {TetrominoPos} tetrominoPos 
 * @returns {Tetromino} 回転が成功する場合は回転後の値を返す。失敗する場合は何もせずに返す
 */
function handleRotateTetromino(field,tetromino,tetrominoPos){
    let rotated = tetromino.rotate()
    let canput = field.canPutTetromino(
        tetrominoPos.x,
        tetrominoPos.y,
        rotated
    )

    if ( canput ){
        return rotated
    }else{
        return tetromino
    }
}

/**
 * キーボードで一番下まで移動するキーを押した時の処理
 * @param {Field} field 
 * @param {Tetromino} tetromino 
 * @param {TetrominoPos} tetrominoPos 
 * @returns {TetrominoPos} 
 */
function handleDownTetromino(field,tetromino,tetrominoPos){
    let prev = tetrominoPos
    let next = tetrominoPos.moveDown()
    while (field.canPutTetromino(next.x,next.y,tetromino)) {
        prev = next
        next = next.moveDown()   
    }
    return prev
}

/**
 * 
 * @param {Drawer} drawer 
 * @param {ScoreViewer} scoreViewer 
 * @returns スコア
 */
async function game(drawer,scoreViewer){
    const handleKeydown = (e) => {
        if ( e.key === "ArrowLeft" || e.key === "ArrowRight" ){
            tetrominoPos = handleMoveTetromino(field,tetromino,tetrominoPos,e.key)
        }
        else if ( e.key === "ArrowDown"){
            tetrominoPos = handleDownTetromino(field,tetromino,tetrominoPos)
        }
        else if ( e.key === " " ){
            tetromino = handleRotateTetromino(field,tetromino,tetrominoPos)
        }
        
        else{
            return
        }

        drawer.drawField(field)
        drawer.drawGameoverLine()
        drawer.drawTetromino(tetrominoPos.x,tetrominoPos.y,tetromino)
    }

    const putTetromino = async () => {
        return new Promise(resolve => {
            let id = setInterval(() => {
    
                if ( field.canPutTetromino(tetrominoPos.x,tetrominoPos.y + 1,tetromino) === false){
                    field.putTetromino(tetrominoPos.x,tetrominoPos.y,tetromino)
                    clearInterval(id)
                    resolve(null)
                }else{
                    tetrominoPos.y += 1
                }
    
                drawer.drawField(field)
                drawer.drawGameoverLine()
                drawer.drawTetromino(tetrominoPos.x,tetrominoPos.y,tetromino)
            },500)
        })
    }

    let score = 0
    scoreViewer.view(score)
    let field = Field.createNew()
    let calculator = new ScoreCalculator()
    let tetromino = Tetromino.random()
    let tetrominoPos = TetrominoPos.new()

    window.addEventListener("keydown",handleKeydown)


    while (true) {
        tetromino = Tetromino.random()
        tetrominoPos = TetrominoPos.new()
        drawer.drawField(field)
        drawer.drawGameoverLine()
        drawer.drawTetromino(tetrominoPos.x,tetrominoPos.y,tetromino)
        
        await putTetromino()
        let result = field.clearFilledRow()
        score += calculator.calcClearFilledRowResult(result)
        scoreViewer.view(score)
        if ( field.gameover() ){
            break
        }
    }

    window.removeEventListener("keydown",handleKeydown)
    

    return score
}

async function main(){
    let canvas = document.getElementById("can")
    let scoreViewer = new ScoreViewer(document.getElementById("score"))
    let drawer = new Drawer(new FieldCanvas(canvas))

    let score = await game(drawer,scoreViewer)

    alert(score)
}

window.addEventListener("load",main)
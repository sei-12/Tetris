
class Field {
    static COLS = 10
    static ROWS = 22

    static createNew(){
        let ary = []
        for (let y = 0; y < this.ROWS ; y++) {
            let row_ary = []
            for (let x = 0; x < this.COLS; x++) {
                row_ary.push(null)
            }
            ary.push(row_ary)
        }

        return new Field(ary)
    }

    /**
     * 外部からの呼び出し禁止
     */
    constructor(ary){
        /**@type {(string|null)[][]} ary[y][x] */
        this.field = ary
    }

    /**
     * @param {number} x 
     * @param {number} y 
     * @param {string} block_color 
     */
    putBlock(x,y,block_color){
        this.field[y][x] = block_color
    }

    /**
     * 指定した座標にテトロミノをおけるなら true
     * すでにブロックがある場合は false
     * @param {*} x 基点
     * @param {*} y 基点
     * @param {Tetromino} tetromino 
     */
    canPutTetromino(px,py,tetromino){
        for (let y = 0; y < Tetromino.SIZE; y++) {
            for (let x = 0; x < Tetromino.SIZE; x++) {

                // ブロックではないマスだから飛ばしてOK
                if ( tetromino.isBlock(x,y) === false){
                    continue
                }

                // ブロックが範囲外に飛び出てしまっている
                if (
                    x + px >= Field.COLS ||
                    y + py >= Field.ROWS ||
                    x + px < 0 ||
                    y + py < 0
                ){
                    return false
                }

                // 何もないマスだから飛ばしてOK
                if ( this.field[py + y][px + x] === null){
                    continue
                }

                return false
            }
        }
        return true
    }
}
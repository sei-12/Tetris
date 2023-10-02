class ClearFilledRowResult {
    constructor(){
        /** @type {{row:string[],index:number}[]} */
        this.rows = []
    }

    /**
     * @param {string[]} row 取り出した配列
     * @param {number} index 取り出した配列の添字 (y座標)
     */
    push(row,index){
        this.rows.push({
            row,
            index
        })
    }

    pop(){
        return this.rows.pop()
    }
}

class Field {
    static COLS = 10
    static ROWS = 22

    static #emptyRow(){
        return Array(this.COLS).fill(null)
    }

    static createNew(){
        let ary = []
        for (let y = 0; y < this.ROWS ; y++) {
            ary.push(this.#emptyRow())
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

    /**
     * 埋まっている行のブロックを削除する
     * 削除した行の情報を返す
     */
    clearFilledRow(){
        let result = new ClearFilledRowResult()
        let num_filledRows = 0

        for (let y = Field.ROWS - 1; y >= 0; y--) {
            if ( this.isFilledRow(this.field[y]) === false ){
                continue
            }
            
            let filledRow = this.field.splice(y,1)
            result.push(filledRow,y)
            num_filledRows += 1;
        }

        for (let _ = 0; _ < num_filledRows; _++) {
            this.field.unshift(Field.#emptyRow())
        }

        return result
    }

    isFilledRow(row){
        return row.every( square => typeof square === "string" )
    }

    gameover(){
        return this.field[0].every( s => s === null ) === false
    }
}
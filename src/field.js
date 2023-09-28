
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

}
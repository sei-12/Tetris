class Tetromino {

    static SIZE = 4;
    
    static O(){
        let map = [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ]
        let color = "yellow"
        return new Tetromino(map,color)
    }
    static L(){
        let map = [
            [0,1,0,0],
            [0,1,0,0],
            [0,1,1,0],
            [0,0,0,0]
        ]
        let color = "orange"
        return new Tetromino(map,color)
    }
    static S(){
        let map = [
            [0,1,0,0],
            [0,1,1,0],
            [0,0,1,0],
            [0,0,0,0]
        ]
        let color = "green"
        return new Tetromino(map,color)
    }
    static I(){
        let map = [
            [1,0,0,0],
            [1,0,0,0],
            [1,0,0,0],
            [1,0,0,0]
        ]
        let color = "blue"
        return new Tetromino(map,color)
    }
    static T(){
        let map = [
            [0,0,0,0],
            [1,1,1,0],
            [0,1,0,0],
            [0,0,0,0]
        ]
        let color = "red"
        return new Tetromino(map,color)
    }

    constructor(map,color){
        this.map = map
        this.color = color
    }
    
    isBlock(x,y){
        return this.map[y][x] === 1
    }
    
    /**
     * 90度回転させる (時計回り)
     */
    rotate(){
        let rotatedMap = []
        for (let x = 0; x < Tetromino.SIZE; x++) {
            let colMap = []
            for (let y = Tetromino.SIZE - 1; y >= 0; y--) {
                colMap.push(this.map[y][x])
            }
            rotatedMap.push(colMap)
        }

        return new Tetromino(rotatedMap,this.color)
    }
}
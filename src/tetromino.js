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
}
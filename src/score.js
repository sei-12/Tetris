
class ScoreCalculator {

    /**
     * @param {ClearFilledRowResult} result 
     */
    calcClearFilledRowResult(result){
        let score = 100
        return score * result.rows.length
    }
}

class ScoreViewer {
    constructor(div){
        /** @type {HTMLDivElement} */
        this.div = div
    }

    view(score){
        this.div.innerText = score + "点"
    }
}
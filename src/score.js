
class ScoreCalculator {

    /**
     * @param {ClearFilledRowResult} result 
     */
    calcClearFilledRowResult(result){
        let score = 100
        return score * result.rows.length
    }
}
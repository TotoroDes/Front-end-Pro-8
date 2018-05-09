var game = function (num) {
    var cols = num;
    var rows = num;

    var matrix = [];
    for (var i = 0; i < rows; i++){
        matrix[i] = [];
        for (var j = 0; j < cols; j++){
            matrix[i][j] = '';
        }}
    return matrix;


}

var matrixNew = game(7);

var result = null;
var coord;

var getWinner = function (gameBoard) {

    var cols = gameBoard.length;
    var rows = gameBoard[0].length;


  var checkRows = function (gameBoard) {
    for (var i = 0; i < rows; i++) {
       coord = gameBoard[0][i];
        var resultRows = true;
        for(var j = 0; j < cols; j++){
            if (coord !== gameBoard[j][i]) {
                resultRows = false;
                break;
            }
        }
if(resultRows){
    result = gameBoard[0][0];
}

    }

    return result;

}

var checkCols = function (gameBoard) {
    for (var i = 0; i < cols; i++) {
        coord = gameBoard[i][0];
        var resultCols = true;
        for(var j = 0; j < rows; j++){
            if (coord !== gameBoard[i][j]) {
                resultCols = false;
                break;
            }
        }
        if(resultCols){
            result = gameBoard[0][0];
        }

    }

   return result;

}

var checkDiagonal = function (gameBoard) {
    coord = gameBoard[0][0];
    var resultDiag = true;
    for (var i = 0; i < cols; i++) {
          if (coord !== gameBoard[i][i]) {
              resultDiag = false;
            break;
        }

        if(resultDiag){
            result = gameBoard[0][0];
        }
    }
    return result;
    }

var checkInverseDiagonal = function (gameBoard) {
    coord = gameBoard[cols-1][cols-1];
    var resultDiag = true;
    for (var i = 0; i < cols; i++) {
        if (coord !== gameBoard[cols-1-i][cols-1-i]) {
            resultDiag = false;
            break;
        }

        if(resultDiag){
            result = gameBoard[cols-1][cols-1];
        }
    }
    return result;
}
    return result;
}

var winner = getWinner(matrixNew);

console.log(winner);

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

var getWinner = function (gameBoard) {
  var checkRows = function (gameBoard) {
    for (var i = 0; i < rows; i++) {
        var coordRow = gameBoard[0][i];
        var resultRows = true;
        for(var j = 0; j < cols; j++){
            if (coordRow !== gameBoard[i][j]) {
                resultRows = false;
                break;
            }
        }
if(resultRows){
    result = gameBoard[0][i];
}

    }

    return result;

}

var checkCols = function (gameBoard) {
    for (var i = 0; i < cols; i++) {
        var coordCol = gameBoard[i][0];
        var resultCols = true;
        for(var j = 0; j < rows; j++){
            if (coordCol !== gameBoard[j][i]) {
                resultCols = false;
                break;
            }
        }
        if(resultCols){
            result = gameBoard[i][0];
        }

    }

   return result;

}

var checkDiagonal = function (gameBoard) {
    var coordDiag = gameBoard[0][0];
    var resultDiag = true;
    for (var i = 0; i < cols; i++) {
          if (coordDiag !== gameBoard[i][i]) {
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
    var coordDiag = gameBoard[cols-1][cols-1];
    var resultDiag = true;
    for (var i = 0; i < cols; i++) {
        if (coordDiag !== gameBoard[cols-1-i][cols-1-i]) {
            resultDiag = false;
            break;
        }

        if(resultDiag){
            result = gameBoard[cols-1][cols-1];
        }
    }
    return result;
}

}

var winner = getWinner(matrixNew);

console.log(winner);

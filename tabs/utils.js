function mergeSettings(){
    var result = {};
    for (var i = 0; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            result[key] =  arguments[i][key];
        }
    }
    return  result;
}

window.every = function (array, callback) {
	var result = true;
	for(var i = 0; i < array.length; i++){
if(!callback(array[i], i, array)){
	result = false;
	break;
}

}
return result;

	};
window.some = function (array, callback) {
	var result = false;
	for(var i = 0; i < array.length; i++){
if(callback(array[i], i, array)){
	result = true;
	break;
}

}
return result;

	};
window.forEach = function (array, callback) {
	for(var i = 0; i < array.length; i++){
	callback(array[i], i, array);
	}
};
window.filter = function () {};
window.map = function () {};

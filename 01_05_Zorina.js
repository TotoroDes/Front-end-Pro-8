var arr = [1,47,6,81,19,'66',5,14,53,45,67,56];
console.log(arr);


///every 

function everyArr(inputArray){
var result = true;
for (var i = 0; i < inputArray.length; i++){
if(typeof inputArray[i] !== "number"){

result = false;
break;
	}

}


return result;

}


console.log(everyArr(arr));


///some 

function someArr(inputArray){
var result = false;
for (var i = 0; i < inputArray.length; i++){
if(typeof inputArray[i] === "number"){

result = true;
break;
	}

}


return result;

}


console.log(someArr(arr));


///forEach 

function forEachArr(inputArray){

for (var i = 0; i < inputArray.length; i++){
console.log(inputArray[i])
	

}

}


forEachArr(arr);


//filter

function filterArr(inputArray){
var result = [];
for (var i = 0; i < inputArray.length; i++){
if(inputArray[i] > inputArray[i+1]){

result.push(inputArray[i]);

	}
	
}


return result;

}


console.log(filterArr(arr));


//map

function mapArr(inputArray){
var result = [];
for (var i = 0; i < inputArray.length-1; i++){
var newArrElement = inputArray[i]+inputArray[i+1]
result.push(newArrElement);


	
}


return result;

}



console.log(mapArr(arr));


//reduce

function reduceArr(inputArray){
var result = [];
for (var i = 0; i < inputArray.length-1; i++){


if(inputArray[i]-inputArray[i+1] < 0){
	result.push(inputArray[i]);
}


	
}


return result;

}



console.log(reduceArr(arr));

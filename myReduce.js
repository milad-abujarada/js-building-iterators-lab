// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {

	let accumulator;
	if (!initialValue) {
		let curr, index;
		accumulator = arr[0];
		for (let i = 0; i < arr.length -1; i++) {
			curr = arr[i + 1];
			index = i+1;
			accumulator = callback(accumulator,  curr, index, arr);
		}

	} else{
		accumulator = initialValue;
		for (let i = 0; i < arr.length -1; i++) {
		accumulator = callback(accumulator,  arr[0], i, arr);
	}
	}
return accumulator;	
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;

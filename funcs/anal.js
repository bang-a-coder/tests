export function anal(arr){
	console.log(arr.lenght)
	return {
		average: avg(arr),
		min: Math.min.apply(Math, arr),
		max: Math.max.apply(Math, arr),
		length: arr.length,
	}
}

function avg(array) {
	let sum = 0
	array.forEach(element => {
		console.log(sum, element)
		sum += element		
	});

	let res = sum / array.length

	console.log(res)
	return res
}
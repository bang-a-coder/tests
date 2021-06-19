export function reverseString(str){
	let res = str.toLowerCase()

	return res.split("").reverse().join("")
}
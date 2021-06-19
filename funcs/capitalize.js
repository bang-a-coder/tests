export function capitalise(str){
	let res = str.toLowerCase()

	return res[0].toUpperCase() + res.slice(1)
}
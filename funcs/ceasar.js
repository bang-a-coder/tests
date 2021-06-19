export function ceaser(mode, str, shift){
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'
	if (mode === 'en'){
		let result = '';

		[...str].forEach((ch)=>{
			result += alphabet[alphabet.indexOf(ch)+shift]
		})

		return result
	}

	if (mode === 'de'){
		let result = '';

		[...str].forEach((ch)=>{
			result += alphabet[alphabet.indexOf(ch)-shift]
		})

		return result
	}
}
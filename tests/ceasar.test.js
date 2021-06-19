import { ceaser } from "../funcs/ceasar"

test('encrypt, abcdefg, 5', ()=>{
	expect(ceaser('en', 'abcdefg', 5)).toBe('fghijkl')
})

test('decrypt, abcdefg, 5', ()=>{
	expect(ceaser('de', 'fghijkl', 5)).toBe('abcdefg')
})


import { reverseString } from "../funcs/reverseString"

let correct = 'gfedcba' 

test('all letter case', ()=>{
	expect(reverseString('abcdefg')).toBe(correct)
})

test('all capital case', ()=>{
	expect(reverseString('ABCDEFG')).toBe(correct)
})

test('messed up', ()=>{
	expect(reverseString('AbCDefG')).toBe(correct)
})

test ('sentence', ()=>{
	expect(reverseString('dont go gentle into the night')).toBe('thgin eht otni eltneg og tnod')
})
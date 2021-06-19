import { capitalise } from "./capitalize"

let correct = 'Abcdefg' 

test('all letter case', ()=>{
	expect(capitalise('abcdefg')).toBe(correct)
})

test('all capital case', ()=>{
	expect(capitalise('ABCDEFG')).toBe(correct)
})

test('messed up', ()=>{
	expect(capitalise('AbCDefG')).toBe(correct)
})

test ('sentence', ()=>{
	expect(capitalise('dont go gentle into the night')).toBe('Dont go gentle into the night')
})
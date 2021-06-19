import { calculator } from "../funcs/calculator"

test('5, 5', ()=>{
	expect(calculator(5,5)).toMatchObject({
		sum: 10,
		diff: 0,
		quotient: 1,
		product: 25
	})
})

test('5, -5', ()=>{
	expect(calculator(5,-5)).toMatchObject({
		sum: 0,
		diff: 10,
		quotient: -1,
		product: -25
	})
})

test('2, 10', ()=>{
	expect(calculator(2,10)).toMatchObject({
		sum: 12,
		diff: -8,
		quotient: 0.2,
		product: 20
	})
})

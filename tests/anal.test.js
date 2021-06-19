import { anal } from "../funcs/anal";

let object = {
	average: 4,
	min: 1,
	max: 8,
	length: 6
      };

test('base test', ()=>{
	expect(anal([1,8,3,4,2,6])).toMatchObject(object)
})

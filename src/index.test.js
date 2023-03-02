import {getPercents}  from './index.js';

test ('вычислить процент от числа', () => {
	expect(getPercents(10, 500)).toBe(50);
}); 

test ('вычислить процент от числа', () => {
	expect(getPercents(10, 500)).toBe(51);
}); 

describe('вычислить процент от числа', () => {
	it('функция считает проценты', () => {
	  expect(getPercents(5, 100)).toBe(5);
	  expect(getPercents(10,100)).toBe(10);
	  expect(getPercents(100,200)).toBe(200);
	});
  }); 

test ('не число', () => {
	expect(getPercents('а', 400)).toBe('введите число');
}); 

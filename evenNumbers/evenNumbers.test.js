const evenNumbers = require('./evenNumbers')

test('evenNumbers returns 3 when given 5', () => {
  // 0,2,4
  expect(evenNumbers(5)).toBe(3)
})

test('evenNumbers returns 6 when given 10', () => {
  // 0,2,4,6,8,10
  expect(evenNumbers(10)).toBe(6)
})

test('evenNumbers returns 1 when given 0', () => {
  // 0
  expect(evenNumbers(0)).toBe(1)
})

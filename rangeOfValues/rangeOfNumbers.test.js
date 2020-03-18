const rangeOfNumbers = require('./rangeOfNumbers')

test('rangeOfNumbers returns a range of possible values', () => {
  expectedValues = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
  
  expect(rangeOfNumbers(['x','y','z'])(1)(6)).toEqual(expectedValues)
})

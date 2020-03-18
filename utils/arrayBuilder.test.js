const arrayBuilder = require('./arrayBuilder')

test('arrayBuilder returns the correct array', () => {
  expectedValues = [1,2,3,4,5]

  expect(arrayBuilder(1)(5)).toEqual(expectedValues)
})

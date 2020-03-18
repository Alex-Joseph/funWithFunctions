const printNumbers = require('./printNumbers')

test('printNumbers returns an array of 100 objects', () => {
  expect(printNumbers().length).toBe(100)
})

test('printNumbers returns Foo for a multiple of 3', () => {
  expect(printNumbers()[2]).toEqual('Foo')
})

test('printNumbers returns Bar for a multiple of 5', () => {
  expect(printNumbers()[4]).toEqual('Bar')
})

test('printNumbers returns FooBar for a multiple of 3 and 5', () => {
  expect(printNumbers()[14]).toEqual('FooBar')
})

test('printNumbers returns the correct first 15 objects', () => {
  expectedValues = [
    1, 2, 'Foo', 4, 'Bar', 'Foo', 7, 8, 'Foo', 'Bar', 11, 'Foo', 13, 14, 'FooBar'
  ]
  expect(printNumbers().slice(0,15)).toEqual(expectedValues)
})

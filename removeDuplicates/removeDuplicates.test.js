const removeDuplicates = require('./removeDuplicates')

test('removeDuplicates returns an array of unique values', () => {
  testValues = ['one','one','two','three','three', 'two']
  expectedValues = ['one', 'two', 'three']

  expect(removeDuplicates(testValues)).toEqual(expectedValues)
})

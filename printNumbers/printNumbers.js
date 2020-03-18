const arrayBuilder = require('../utils/arrayBuilder')

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

const multipleOf = num => x => x % num === 0

const multipleOf3 = x => multipleOf(3)(x) ? 'Foo' : x

const multipleOf5 = x => multipleOf(5)(x) ? 'Bar' : x

const multipleOf3and5 = x => {
  if (multipleOf(3)(x) && multipleOf(5)(x)) {
    return 'FooBar'
  }
  return x
}

const printNumbers = () => {
  arr = arrayBuilder(1)(100)
  return arr.map(
    pipe(
      multipleOf3and5,
      multipleOf5,
      multipleOf3,
    )
  )
}

module.exports = printNumbers

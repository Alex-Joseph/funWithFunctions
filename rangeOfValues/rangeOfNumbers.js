const arrayBuilder = require('../utils/arrayBuilder')

const rangeOfNumbers = arr =>
  min =>
    max => arrayBuilder(min*arr.length)(max*arr.length)

module.exports = rangeOfNumbers

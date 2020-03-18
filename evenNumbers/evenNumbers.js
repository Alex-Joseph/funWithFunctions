const arrayBuilder = require('../utils/arrayBuilder')

const evenNumbers = num => arrayBuilder(0)(num).filter(isEven).length

const isEven = num => num % 2 === 0

module.exports = evenNumbers

const arrayBuilder = start => end => {
  arr = []
  for (var i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr
}

module.exports = arrayBuilder

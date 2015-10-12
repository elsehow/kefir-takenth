function takeNth (stream, n) {
  var count = 0
  return stream.filter(function () {
    count+=1
    return count % n == 0
  })
}

module.exports = takeNth


function takeNth (stream, n) {

  function count (acc, _) {
    return acc+=1
  }

  function isNth (count) {
    if (count % n == 0) return true
  }

  var everyNth = stream.scan(count,0).filter(isNth)

  // return everyNth
  return stream.sampledBy(everyNth)
}

module.exports = takeNth


var takeNth = require('..')
var Kefir = require('kefir')

// var n = Kefir.sequentially(250, [1,2,3,4,5])
// takeNth(n, 2).log()

var a = Kefir.sequentially(1, ['a','b','c','d','e','f'])
takeNth(a, 3).log()

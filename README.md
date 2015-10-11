# kefir-takenth

take every nth element of a [kefir](https://rpominov.github.io/kefir/) stream!

## installation

`npm install kefir-takenth`

## usage

```javascript
var Kefir = require('kefir')
var takeNth = require('kefir-takenth')
var a = Kefir.sequentially(1, ['a','b','c','d','e','f'])
takeNth(a, 3).log()
> c
> f
```

## API

### takeNth(stream, n)

returns a kefir stream of every `n`th element from `stream`

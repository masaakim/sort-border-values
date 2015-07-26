var test = require('tape')
var sort = require('..')

var value = '#ddd 1px solid'

test('default', function (t) {
    var actual = sort(value)
    var expected = [
        { width: '1px' },
        { style: 'solid' },
        { color: '#ddd' }
    ]
    t.same(actual, expected)
    t.end()
})

test('default', function (t) {
    var actual = sort(value, 'swc')
    var expected = [
        { style: 'solid' },
        { width: '1px' },
        { color: '#ddd' }
    ]
    t.same(actual, expected)
    t.end()
})

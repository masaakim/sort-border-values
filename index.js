var border = require('css-border-property')
var parse = border.parse
var stringify = border.stringify

function getKey (obj) {
    return Object.keys(obj)[0]
}

module.exports = function (values, fmt) {
    var result = parse(values)
    var width, style, color

    result.forEach(function (decl, i) {
        var prop = getKey(decl)
        switch (prop) {
            case 'width':
                width = result[i]
                break
            case 'style':
                style = result[i]
                break
            case 'color':
                color = result[i]
                break
        }
    })

    if (!fmt) fmt = 'wsc'

    switch (fmt) {
        case 'wsc':
            return [width, style, color]
        case 'wcs':
            return [width, color, style]
        case 'swc':
            return [style, width, color]
        case 'scw':
            return [style, color, width]
        case 'cws':
            return [color, width, style]
        case 'csw':
            return [color, style, width]
    }
}

var helpers = require('./helpers')
module.exports =
{
    formatData: function (lines, limit, offset) {
        offset = parseInt(offset)
        limit = parseInt(limit)
        var linesPaginated = []
        var marker = ( offset + limit) - 1

        var data = {
            lastPageOffset: calculateLastPageOffset(lines, limit, offset),
            lines: []
        }

        for (var x = (offset - 1); x < marker; x++) {

            if (typeof  lines[x] != 'undefined') {
                linesPaginated.push(
                    {
                        number: x + 1,
                        text: lines[x]
                    }
                )
            }
        }

        data.lines = linesPaginated
        data.status = "success"
        return data
    }
}


function calculateLastPageOffset(lines, limit, offset) {
    let result = 1

    if ((lines.length % limit) > 0) {
        result = ((Math.floor((lines.length / limit)) * limit) + 1)
    } else {
        result = offset
    }

    return result
}
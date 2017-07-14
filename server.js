const helpers = require('./helpers');
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.set("port", process.env.PORT || 3001);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.get('/logs', function (req, res) {
    let fs = require('fs');
    let lines = []
    let data = {}
    let readline = require('readline')
    let filePath = req.query.filePath


    fs.stat(filePath, function (err, stats) {
        if (err) {
            res.status(400).send({status: "error", message: "File not found"});
        } else {

            let rl = readline.createInterface({
                input: fs.createReadStream(filePath)
            })

            rl.on('line', (line) => {
                lines.push(line)
            })

            rl.on('close', () => {
                data = helpers.formatData(lines, req.query.limit, req.query.offset)
                res.send(JSON.stringify(data))
            })
        }
    });


})

app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
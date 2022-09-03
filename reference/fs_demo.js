const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, '/test'), {}, err => { if (err) throw err })

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => { if (err) throw err })
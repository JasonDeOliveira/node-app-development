const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.send('hello world'))
  //.listen(PORT, () => console.log(`Listening on ${ PORT }`))
  let server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

  function stop() {
    server.close();
  }

module.exports = server;
module.exports.stop = stop;

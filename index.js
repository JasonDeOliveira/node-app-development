const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  let server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

  function stop() {
    server.close();
  }

var time = new Date().getHours();
var test = 0;
if (time < 20) {
  test=1;
}
else
{
  test=2;
}

module.exports = server;
module.exports.stop = stop;

var request = require('supertest');
var app = require('../index.js');

describe('GET /', function () {
  it('respond with 200 and text content-type', function (done) {
      request(app)
          .get('/')
          .expect('Content-Type', /text/)
          .expect(200, done);
  });
});

describe('GET /', function() {
 it('respond with Hello World', function(done) {
 request(app)
    .get('/test')
    .expect('Hello World', done);
 });
 
 app.stop();
});


var app = require('../index.js'),
  chai = require('chai'),
  request = require('supertest');
var expect = chai.expect;

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
    .get('/')
      .end(function(err, res) { 
        expect(res.statusCode).to.equal(200); 
        expect(res.text.indexOf('Hello World')).to.not.equal(-1); 
        done(); 
      });
 });
 
 app.stop();
});


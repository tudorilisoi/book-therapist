const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const {app, runServer, closeServer} = require('../server');

chai.use(chaiHttp);

describe('login url is returning 200 status code', function() {
  before (function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  it('should return login page on GET', function() {
    return chai.request(app)
    .get('/api/login')
    .then(function(res) {
      expect(res).to.have.status(200);
    })
  });
});

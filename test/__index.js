const expect = require('chai').expect;
const request = require('supertest');
const server = require('../src/server.js');

// Unit Test

describe('API Routes', () => {
  /* eslint no-undef: "error" */
  afterEach(() => {
    server.close();
  });

  it('/ should return specified JSON object', (done) => {
    request(server)
    .get('/')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, { main: 'Main route hit!' }, done);
  });

  it('/status should return specified JSON object', (done) => {
    request(server)
    .get('/status')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, { healthy: true }, done);
  });

  // Test for go shortURL
  it('/go/:shortURL should redirect user to long URL', (done) => {
    request(server)
  .get('/go/Cn1bTPv') // This shortURL needs to be in the database
  .expect(302, done);
  });
});

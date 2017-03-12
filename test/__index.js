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

  // Update test
  it('POST /api/v1/url/:id  Update url based on id', (done) => {
    const body = {
      original_url: 'http://www.nextdesignz.com',
      shortened_url: 'XrhbZqP',
    };
    request(server)
        .put('/api/v1/url/' + this.url.id)
        .send(body)
        .expect(() => {
          expect(this.url).to.have.property('id');
          expect(this.url).to.have.property('original_url');
          expect(this.url).to.have.property('shortened_url');
          expect(this.url).to.have.property('createdAt');
          expect(this.url).to.have.property('updatedAt');
        })
      .end(done);
  });

  // Test for go shortURL
  it('/go/:shortURL should redirect user to long URL', (done) => {
    const shortUrl = {
      shortened_url: 'XrhbZqP',
    };
    request(server)
  .get(shortUrl)
  .expect(302, done);
  });
});

const express = require('express');
const expect = require('chai').expect;
const request = require('supertest');
const genShortenUrl = require('../src/modules/short_url');
const app = express();


describe('URL Routes', () => {
  let server;

  beforeEach(() => {
    server = require('../src/server.js');
  });

  afterEach(() => {
    server.close();
  });

  // Test for Multiple
  it('GET /api/v1/url returns all', (done) => {
    request(server)
    .get('/api/v1/url')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect((res) => {
      const url = res.body;

      // Save one single url
      this.url = url[0];

      expect(url.length).to.be.above(0);
    })
    .end(done);
  });

// Test for creating shortened url
  it('POST returns generated shortened URL of 7 characters', (done) => {
    request(server)
      .post('/api/v1/url')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((req) => {
        const id = genShortenUrl.genShortenUrl();
        expect(id).to.have.length('7');
      })
      .end(done);
  });

  // Testing for a single url
  it('GET /api/v1/url/:id returns an url obj with id,', (done) => {
    request(server)
      .get('/api/v1/url/' + this.url.id)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const url = res.body;
        expect(url).to.have.property('id');
        expect(url).to.have.property('original_url');
        expect(url).to.have.property('shortened_url');
        expect(url).to.have.property('createdAt');
        expect(url).to.have.property('updatedAt');
      })
    .end(done);
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

  // Delete based on id
  it('DELETE deletes one URL based on id', (done) => {
    request(server)
   .get('/api/v1/url' + this.url.id)
   .set('Accept', 'application/json')
   .expect('Content-Type', /json/);
    app.delete('/api/v1/url/' + this.url.id, (req, res) => {
      res.status(200);
    });
    done();
  });
});

const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello World');
  });
});

describe('GET /health', () => {
  it('responds with healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('healthy');
  });
});
const request = require('supertest');
const app = require('../../app');

describe('GET /api/posts', () => {
  it('returns a list of posts', async () => {
    const res = await request(app).get('/api/posts');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThan(0);
  });
});

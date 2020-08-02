const request = require('supertest');
const app = require('../server')
var env = require('../api/env');
var connection = env.connection;

 
describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  })



describe('User Endpoints', () => {
    it('User/getallUser', async () => {
      const res = await request(app)
        .get('/user/getAllUser/2');
        expect(res.statusCode).toEqual(200);
    })
  })

  
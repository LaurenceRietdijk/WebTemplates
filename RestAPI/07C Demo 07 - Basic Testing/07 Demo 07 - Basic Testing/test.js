const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./apps.js'); // Assuming your Express app is in apps.js
const expect = chai.expect;

chai.use(chaiHttp);

describe('API Endpoints', () => {
  it('should return a list of items on GET /items', async () => {
    const res = await chai.request(app).get('/items');
    expect(res).to.have.status(200);
    expect(res.body).to.be.an('array');
  });

  it('should add a new item on POST /items', async () => {
    const newItem = { name: 'New Item', cost: 30, category: 'D' };
    const res = await chai.request(app).post('/items').send(newItem);
    expect(res).to.have.status(201);
    expect(res.body).to.have.property('id');
  });

  // Add more test cases for other endpoints...
});

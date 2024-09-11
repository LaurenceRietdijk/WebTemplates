const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./apps.js'); // Assuming your Express app is in apps.js
const expect = chai.expect;

chai.use(chaiHttp);

describe('API Endpoints', () => {
  // Test for GET /items
  it('should return a list of items on GET /items', async () => {
    const res = await chai.request(app).get('/items');
    expect(res).to.have.status(200);
    expect(res.body).to.be.an('array');
  });

  // Test for POST /items
  it('should add a new item on POST /items', async () => {
    const newItem = { name: 'New Item', cost: 30, category: 'D' };
    const res = await chai.request(app).post('/items').send(newItem);
    expect(res).to.have.status(201);
    expect(res.body).to.have.property('id');
  });

  // Test for PUT /items/:id
  it('should update an item on PUT /items/:id', async () => {
    // Assuming there's an item with id 1
    const itemId = 1;
    const updatedItem = { name: 'Updated Item', cost: 35, category: 'F' };
    const res = await chai.request(app).put(`/items/${itemId}`).send(updatedItem);
    expect(res).to.have.status(200);
    expect(res.body).to.have.property('name', updatedItem.name);
  });

  // Test for PATCH /items/:id
  it('should partially update an item on PATCH /items/:id', async () => {
    // Assuming there's an item with id 1
    const itemId = 1;
    const updatedFields = { cost: 40 };
    const res = await chai.request(app).patch(`/items/${itemId}`).send(updatedFields);
    expect(res).to.have.status(200);
    expect(res.body).to.have.property('cost', updatedFields.cost);
  });

  // Test for DELETE /items/:id
  it('should delete an item on DELETE /items/:id', async () => {
    // Assuming there's an item with id 1
    const itemId = 1;
    const res = await chai.request(app).delete(`/items/${itemId}`);
    expect(res).to.have.status(204);

    // Verify that the item is no longer in the list
    const getRes = await chai.request(app).get('/items');
    const deletedItem = getRes.body.find(item => item.id === itemId);
    expect(deletedItem).to.be.undefined;
  });

 // Test for handling errors (GET /items/:invalidId)
 it('should return an error for invalid item id on GET /items/:invalidId', async () => {
    const invalidId = 50;
    const res = await chai.request(app).get(`/items/${invalidId}`);
    expect(res).to.have.status(400);
    expect(res.body).to.have.property('error');
    expect(res.body.error).to.equal('Invalid item id');
  })

  // Add more test cases for other scenarios...
});

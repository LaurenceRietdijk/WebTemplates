/*
Setting up unit tests for your API endpoints is a great practice to ensure that your code functions 
as expected and to catch bugs early in the development process. 
procedre on how you can set up basic testing using the Mocha testing framework along with 
the Chai assertion library:

Step 1: Install Dependencies:
Install Mocha and Chai as development dependencies in your project:
*/
npm install --save-dev mocha chai supertest

/*
mocha: The testing framework.
chai: The assertion library for writing test expectations.
supertest: A library for testing HTTP requests and responses.

Step 2: Create a Test Folder:
Create a folder named test in your project directory to store your test files.

Step 3: Write Test Cases:
Inside the test folder, create a file (e.g., api.test.js) and write test cases for your API endpoints. 
Here's a basic example:
*/

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Assuming your Express app is in app.js
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

/*
Step 4: Run Tests:
In your terminal, run Mocha to execute the tests:
*/

npx mocha test

/*


Mocha will discover and execute the test files in the test directory.

Additional Testing Tips:

For more complex APIs, consider using tools like nock to mock external services or sinon for 
mocking function behavior.

Separate your test environment from your development environment by using a separate database or mocking data.

Use descriptive test names to easily understand the purpose of each test case.

Aim for comprehensive coverage of your API endpoints by testing different scenarios, 
including edge cases and error conditions.

Continuously run tests as part of your development process to catch regressions early.

Consider integrating your tests with continuous integration (CI) tools like Travis CI or GitHub Actions.
*/
/* note on teting tools:
there are several testing libraries and frameworks available for Node.js that you can use to test REST APIs. 
Some of the popular ones include:

Jest: Jest is a widely used testing framework that offers a simple and intuitive API for writing tests. 
It comes with built-in assertion libraries and mocking capabilities, 
making it suitable for testing various aspects of your application, including REST APIs.

Mocha: Mocha is another popular testing framework that provides a flexible testing structure. 
It doesn't include built-in assertions or mocking, but it can be easily combined with assertion 
libraries like Chai and mocking libraries like Sinon.

Supertest: Supertest is a testing library specifically designed for testing HTTP endpoints. 
It works well with libraries like Mocha and Chai and provides a fluent API for making HTTP requests 
and asserting responses.

Chai-HTTP: Chai-HTTP is an extension for the Chai assertion library that provides HTTP assertions. 
It can be used in combination with Mocha or other testing frameworks to write expressive and 
readable API tests.

Postman/Newman: Postman is a popular tool for manually testing APIs, but it also provides 
a testing feature called Newman. With Newman, you can automate API testing using scripts 
written in JavaScript. While not a traditional testing framework, it can be a
useful tool for automating API tests.

AVA: AVA is a testing framework known for its fast test execution and parallelization. 
It's designed to be minimalistic and easy to use. Although it doesn't come with assertions 
or mocking out of the box, you can integrate it with libraries like Chai and Sinon.
*/

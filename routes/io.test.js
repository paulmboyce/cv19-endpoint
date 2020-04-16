const app = require('../endpoint'); // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

// This passes because 1 === 1
it('Testing to see if Jest works', () => {
    expect(1).toBe(1);
});

it('Async test', async () => {
    return new Promise(resolve => {
    // Do your async tests here
        expect(2).toBe(2);
        resolve();
    });
});

it('Gets the test endpoint (Async, returns a Promise).', async () => {
    // Sends GET Request to /test endpoint
    return request.get('/io/summary').then(res => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ oneWeek: 83, twoWeeks: 348 });
    });
});

it('Updates status, receives back status. (Async, returns a Promise).', async () => {
    // ARRANGE:
    const DATA = { tested: 1, positive: 0, recovered: 1 };
    // ACT:
    return request.post('/io/status')
        .send(DATA)
        .then(res => {
            console.log(`RESPONSE.BODY: ${JSON.stringify(res.body)}`);
            // ASSERT:
            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual(DATA);
        });
});

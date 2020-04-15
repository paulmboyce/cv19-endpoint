// This passes because 1 === 1
it('Testing to see if Jest works', () => {
    expect(1).toBe(1);
  })


it('Async test', async done => {
    // Do your async tests here
    expect(2).toBe(2);
    
    done()
  })
var supertest = require("supertest")
const request = supertest("http://localhost:4000/")


test('post call to check user exists', async () => {
    let user={
        "username":"karthikeyan",
        "password":"zse45rdx"
    }
    const response= await request.post("users/signin").send(user)
    console.log(response)
    expect(response.status).toBe(200);
  });
const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("respond with 'App is working'", (done) => {
    request(app).get("/").expect("App is working", done);
  });
});

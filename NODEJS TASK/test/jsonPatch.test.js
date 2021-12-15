import request from 'supertest';
import app from '../src/index.js';
import { expect } from 'chai';


describe ('PATCH /api/v1/json-patch/:id', ()=> {
it('Should jsonpatch user profile', async()=> {
    request(app)
      .patch('/api/v1/json-patch/:id')
      .set('Accept','application/json')
      .set('Authorization', 'Bearer Token')
      .send({
         "username":"femil",
         "phonenumber":"12345678",
         "address":"femilaa",
         "occupation":"work"
      })
      .expect('Content-Type', 'application/json')
      .expect(200)

    });
   it('Json patching should fail if no token', async(done) => {
     request(app)
       .patch('/api/v1/json-patch/:id')
       .expect('Content-Type', 'application/json')
       .set('Authorization', '')
       .send({
         "username":"femil",
         "phonenumber":"12345678",
         "address":"femilaa",
         "occupation":"work"
      })
       .end((err, res) => {
         expect(res.statusCode).to.equal(401)   
       })
       done()
   }) 
})


import request from 'supertest';
import app from '../src/index.js';
import { expect } from 'chai';


describe ('POST /api/v1/auth/login', ()=> {
    it('Should create user session', async(done)=> {
        request(app)
          .post('/api/v1/auth/login')
          .set('Accept','application/json')
          .send({"email": "user_test@example.com", "password": "123"})
          .expect('Content-Type', 'application/json')
          .expect(200)
          .end((err, res) => {
            if (err) done(err);
            expect(res.status).to.equal(200);
            expect(res.body).to.equal({message: 'successful'});     
         });
         done()
      });
  
})


   
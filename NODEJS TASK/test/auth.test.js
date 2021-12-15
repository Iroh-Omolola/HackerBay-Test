import request from 'supertest';
import app from '../src/index.js';
import { expect } from 'chai';


let token;

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
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.equal({message: 'successful'});     
         });
         done()
      });

      it('Login should not be successful if fields are not filled', async(done)=> {
        request(app)
          .post('/api/v1/auth/login')
          .set('Accept','application/json')
          .send({"email": "", "password": ""})
          .end((err, res) => {
            if (err) done(err);
            expect(res.statusCode).to.equal(400)    
         });
         done()
      });
      it('Creation of token', async(done) => {
        request(app)
        .post('/api/v1/auth/login')
          .send({"email": "user_test@example.com", "password": "123"})
          .end((err, res) => {
            expect(res.statusCode).to.equal(200)
            expect(res.body.authorized).to.equal(true)
            token = res.body.token
          
          })
          done()
      })
})


   
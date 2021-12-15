import request from 'supertest';
import app from '../src/index.js';
import { expect } from 'chai';


describe ('POST /api/v1/thumbnail', ()=> {
it('Should upload image', async()=> {
    request(app)
      .patch('/api/v1/thumbnail')
      .set('Content-Type','application/json')
      .set('Authorization', 'Bearer Token')
      .send({
        "imageUrl":"https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg"
    })
      .expect('Content-Type', 'application/json')
      .expect(200)

    });
   it('Should not upload image if no token', async(done) => {
     request(app)
       .patch('/api/v1/json-patch/:id')
       .set('Content-Type', 'application/json')
       .set('Authorization', '')
       .send({
        "imageUrl":"https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg"
     })
       .end((err, res) => {
         expect(res.statusCode).to.equal(401)   
       })
       done()
   });
   it('Image upload should fail if no token', async(done) => {
    request(app)
      .patch('/api/v1/json-patch/:id')
      .set('Authorization', '')
      .send({
        "imageUrl":"https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg"
     })
      .end((err, res) => {
        expect(res.statusCode).to.equal(401)  
      })
      done()
  })
})


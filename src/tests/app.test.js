const app = require('../index');
const request = require('supertest');
const {uuid, isUuid } = require("uuidv4");
const { response } = require('express');


/*

describe("Teste 1 - Criar nova Pessoa", () =>{
    it("POST - teste metodo POST pessoa", async () => {
       const response = await request(app).post("/").send({
            "name" : "lucas honorioo silva",
            "cpf" : "111.222.333-44",
	        "email" : "lucas@hotmail.com"
	        
        })
        .expect(200);
         expect(isUuid(response.body.newPerson.id)).toBe(true);
         expect(response.body).toMatchObject({
             "newPerson":{
                "name" : "lucas honorioo silva",
                "cpf" : "111.222.333-44",
                "email" : "lucas@hotmail.com"
               
            }
       });
   });
});

describe("Teste 2 - deletar uma pessoa que nao existe", () =>{
    it("DELETE - pessoa 123 que nao existe", async () => {
       await request(app).delete('/123')
        .expect(404);
    });
});

describe("Teste 3 - atualizacao de um estudande", () => {
    it("POST e PUT - teste metodo atualizar pessoa", async () => {
        const response = await request(app).post("/").send({
             "name" : "lucas honorioo silva",
             "cpf" : "111.222.333-44",
             "email" : "lucas@hotmail.com"
            
         })
         .expect(200);
          expect(isUuid(response.body.newPerson.id)).toBe(true);
          expect(response.body).toMatchObject({
              "newPerson":{
                 "name" : "lucas honorioo silva",
                 "cpf" : "111.222.333-44",
	             "email" : "lucas@hotmail.com"
                
             }
        });
   

   
        const responseUpd = await request(app)
        .put(`/${response.body.newPerson.id}`)
        .send({
            "name" : "luan honorioo silva",
            "cpf" : "111.222.333-44",
	        "email" : "lucas@hotmail.com"
          
        })
        .expect(200);
        expect(responseUpd.body).toMatchObject({
            "name" : "luan honorioo silva",
            "cpf" : "111.222.333-44",
	        "email" : "lucas@hotmail.com"
          
        });


    });

});



afterAll(done => {
    app.close();
    done();
});


*/
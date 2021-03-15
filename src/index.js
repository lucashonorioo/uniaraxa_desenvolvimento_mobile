const { request, response } = require('express');
const express = require('express');
const {uuid} = require('uuidv4');
const {validate : isUuid} = require("uuid");

const app = express();
app.use(express.json());

const repositories = [];

app.get('/', (request , response) => {
    return response.send(repositories);
});

function calcularImc(peso, altura){
  return peso/(altura*altura);
}

function classificaIMC(vlrIMC){
  if(vlrIMC < 18.5)
    return "Peso baixo";

  if(vlrIMC >= 18.5 && vlrIMC < 24.9)
  return "Peso normal";

  if(vlrIMC >= 25.0 && vlrIMC < 29.9)
  return "Sobrepeso";

  if(vlrIMC >= 30.0 && vlrIMC < 34.9)
  return "Obesidade Grau 1";

  if(vlrIMC >= 35.0 && vlrIMC < 39.99)
  return"Obesidade Severa Grau 2";

  if(vlrIMC >= 40.0)
  return "Obesidade Morbida Grau 3";
}

app.post('/',(request, response) => {

  const { name, email, cpf, peso, altura }  = request.body;

  let imc = calcularImc(peso, altura);
  let classificicacao = classificaIMC(imc);

  const newPerson = {id:uuid(), name, email, cpf, peso, altura, imc ,  classificicacao};
  repositories.push({newPerson});
  return response.json({ newPerson });

});

app.put('/:id',(request, response) => {

  const {id} =  request.params;
  const { name, email, cpf, peso, altura }  = request.body;
  const personResearch = repositories.findIndex(personindex => personindex.newPerson.id == id );

  console.log(id);
  console.log(request.body);
  console.log(personResearch);
  console.log(repositories);
  

  if(personResearch < 0 ){
    return response.status(404).json({"error" : "Person not found"});
  }
  const newPerson = {id, name, email, cpf, peso, altura};
  repositories[personResearch] = newPerson;
  return response.json(newPerson);

})

app.delete('/:id', (request,response) =>{

  const {id} = request.params;
  const personResearch = repositories.findIndex(personindex => personindex.newPerson.id == id );
  
  if(personResearch < 0 ){
    return response.status(404).json({"error" : `Person ${id} not found`});
  }
  repositories.splice(personResearch, 1);
  return response.json({"Massage" : `Person ${id} removed`});

});

module.exports = app.listen(3333, () => {
    console.log("Server running");
})


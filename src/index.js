const { request } = require('express');
const express = require('express');
const {uuid} = require('uuidv4');
const {validate : isUuid} = require("uuid");
const cors = require('cors');
const mongoose = require('mongoose');
const AlunoRepositorio = require('./models/Aluno');

const app = express();
app.use(express.json());
app.use(cors());

const repositories = [];

mongoose.connect('mongodb+srv://lucashonorioo:5279874lu@cluster0.bkvsy.mongodb.net/alunoAula?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/', async (request , response) => {
    const retornoAluno = await AlunoRepositorio.find();
    return response.json(retornoAluno);
});


app.post('/', async (request, response) => {

  const { name, cpf, email }  = request.body;

  const retornoAluno = await AlunoRepositorio.create({
    id:uuid(), name, cpf, email
  });

  return response.json({ retornoAluno });

});

app.put('/:id',(request, response) => {

  const {id} = request.params;
  const { name, cpf, email }  = request.body;
  const personResearch = repositories.findIndex(personindex => personindex.newPerson.id == id );

  console.log(id);
  console.log(request.body);
  console.log(personResearch);
  console.log(repositories);
  

  if(personResearch < 0 ){
    return response.status(404).json({"error" : "Person not found"});
  }
  const newPerson = {id, name, cpf, email};
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

module.exports = app.listen(process.env.PORT || 3333, () => {
    console.log("Server running");
})


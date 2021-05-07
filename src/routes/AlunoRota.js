const {Router} = require('express');
const AlunoServico = require('../services/AlunoServico');
const rotas = Router();



rotas.get('/', async (request , response) => {
    const retornoAluno = await AlunoServico.buscarTodosAlunos();
    return response.json(retornoAluno);
});


rotas.post('/', async (request, response) => {

  const { name, cpf, email }  = request.body;
  const novoAluno = {name, cpf, email};
  const retornoAluno = await AlunoServico.criarAluno(novoAluno);

  return response.json({ retornoAluno });

});

module.exports = rotas;
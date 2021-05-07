const AlunoRepositorio = require('../Data/AlunoRepositorio');

module.exports.buscarTodosAlunos = async function(){

  return AlunoRepositorio.buscarTodosAlunos();
}

module.exports.criarAluno = async function(novoAluno){

   return AlunoRepositorio.criarAluno(novoAluno);
}


const AlunoRepositorio = require('../models/Aluno');


module.exports.buscarTodosAlunos = async function(){

   return await AlunoRepositorio.find();

}

module.exports.criarAluno = async function(novoAluno){

    const{nome, cpf, email} = novoAluno;
    const retornoAluno = await AlunoRepositorio.create({
        nome, cpf, email
      });
      return retornoAluno;
}




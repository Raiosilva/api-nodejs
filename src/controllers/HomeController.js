import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Raimundo',
      sobrenome: 'Oliveira',
      email: 'raimundo@gmail.com',
      idade: 40,
      peso: 23,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();

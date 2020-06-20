import User from '../models/Users';

class UserController {
  async store(req, res) {
    const { email } = req.body;
    const checKEmail = await User.findOne({ where: { email } });
    if (checKEmail) {
      return res.status(400).json({ error: 'Este email já existe' });
    }
    const user = await User.create(req.body);
    return res.json(user);
  }
}

export default new UserController();

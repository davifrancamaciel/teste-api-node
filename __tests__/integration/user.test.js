import request from 'supertest';
import bcryptjs from 'bcryptjs';

import app from '../../src/app';
import factory from '../factories';
import truncate from '../utils/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('verifica se a senha do usuario foi cripografada', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const compareHash = await bcryptjs.compare('123456', user.password_hash);
    expect(compareHash).toBe(true);
  });

  it('Deve ser possivel se cadastrar', async () => {
    const user = await factory.attrs('User');
    const response = await request(app)
      .post('/users')
      .send(user);
    expect(response.body).toHaveProperty('id');
  });

  it('O usuario não pode se cadastrar com email duplicado', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/users')
      .send(user);

    const response = await request(app)
      .post('/users')
      .send(user);
    expect(response.status).toBe(400);
  });
});

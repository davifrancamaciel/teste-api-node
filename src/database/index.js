import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import User from '../app/models/Users';

const models = [User];
// falta 9 e meio  da aula 5
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();

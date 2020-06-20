require('../bootstrap');
// const dotenv = require('dotenv');

// dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });
// console.log(process.env.DB_DIALECT, 'database file');
module.exports = {
  dialect: process.env.DB_DIALECT || 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  storage: './__tests__/database.sqlite',
  loggind: false, // para nao exibir os logs de consulta no banco no terminal
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

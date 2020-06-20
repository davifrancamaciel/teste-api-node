// import dotenv from 'dotenv';

// console.log(process.env.NODE_ENV, 'bootstrap file');

// dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });

const dotenv = require('dotenv');

dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });

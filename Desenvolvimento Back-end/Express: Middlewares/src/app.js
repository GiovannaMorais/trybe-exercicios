const express = require('express');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');
const generateToken = require('./utils/generateToken');
const authication = require('./middlewares/authication');

const app = express();

app.use(express.json());

app.post(
  '/activities',
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  authication,
  (req, res) => {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
  },
);

app.post('/signup', (req, res) => {
    const { email, password, firstname, phone } = req.body;

    if ([email, password, firstname, phone].includes(undefined)) {
        return res.status(401).json({ message: 'Campos ausentes!' });
    }
    const token = generateToken();

    res.status(200).json(`Token: ${token}`);
});

module.exports = app;

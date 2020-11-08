const express = require('express');
const router = express.Router();
const { Employee } = require('../db');

router.get('/', async (req, res) => {
  const employees = await Employee.findAll();
  res.json(employees);
});

router.post('/', async (req, res) => {
  // @todo skipping data validation
  const newEmployee = await Employee.create(req.body);
  res.json(newEmployee.toJSON());
});

module.exports = router;

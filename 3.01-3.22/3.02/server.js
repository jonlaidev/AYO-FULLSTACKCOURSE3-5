const express = require('express');
const app = express();

const persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122"
  }
];

// get_persons
app.get('/api/persons', (req, res) => {
  res.json(persons);
});

// get_info
app.get('/info', (req, res) => {
  const numberOfPersons = persons.length;
  const currentDate = new Date();

  res.send(`
    <p>Phonebook has info for ${numberOfPersons} people</p>
    <p>${currentDate}</p>
  `);
});

//killed_first_3001_to_start_new
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
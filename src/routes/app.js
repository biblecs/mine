const express = require('express');
const app = express();
app.use(express.json());
let users = [
  { id: 1, name: 'John', email: 'john@example.com' },
  { id: 2, name: 'Jane', email: 'jane@example.com' }
];
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
app.get('/api/users', (req, res) => {
    res.json(users);
  });
  
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }
    const newId = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
    const newUser = { id: newId, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
  });
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }
  
    user.name = name;
    user.email = email;
    res.json(user);
  });
app.delete('/api/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    users.splice(userIndex, 1);
    res.status(204).send(); 
  });
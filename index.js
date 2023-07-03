const express = require('express');
const server = express();

server.use(express.json());

const cursos = ['Caio em node', 'Desenvolvimento de apis', 'teste'];

//return one course
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
});

//return all of courses
server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

//create new one
server.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

//update
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

//delete
server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;
    cursos.splice(index, 1);
    return res.json({ message: "Curso deletado" });
});

server.listen(process.env.port || 3000);
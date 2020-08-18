const express = require('express');
const { uuid } = require('uuidv4');

const app = express();
app.use(express.json());

const Projects = [];

app.get('/projects', (request, response) =>{
  // const {title, owner} = request.query;

  // console.log(title);
  // console.log(owner);
  
  return response.json(Projects);
});

app.post('/projects', (request, response) =>{
  const {title, owner} = request.body;

  const project = { id: uuid(), title, owner}
  
  Projects.push(project)

  return response.json(project);
});

app.put('/projects/:id', (request, response) =>{
  const {id} = request.params;

  const projectIndex = projects.findIndex(project => project.id === id); 

  if (projectIndex < 0) {
    return response.json({error: "Project not fund"});
  };
  return response.json({ok: "OK"});
});

app.delete('/projects/:id', (request, response) =>{
  const {id} = request.params;

  console.log(id);
  return response.json([
    'projeto 2',
    'projeto 3'
  ]);
});

app.listen(3333, () =>{
  console.log('🚀 Back-end started!')  
});
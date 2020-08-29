import { Response, Request  } from 'express';
import createUser from './services/CreateUser'; 


export function helloWorld (request : Request, response : Response) {
  const user = createUser({
    email: 'joao@any.com',
    password: '123456',
    techs:[
      'Node.js', 
      'ReactJS', 
      'React Native',
      {title: 'JavaScript', experience: 100},
    ]
  });

  return response.json({ message: 'Hello world'});
}
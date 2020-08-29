import {Router} from 'express';
import appoitmentsRouter from './appointments.routes'

const routes = Router();

routes.use('/appointments', appoitmentsRouter);

export default routes;

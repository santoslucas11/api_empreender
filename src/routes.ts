
import { Router }from 'express';
import EmpreendedoresController from './controllers/EmpreendedoresController';
const routes = Router();


routes.post('/empreendedores', EmpreendedoresController.create);

export default routes;
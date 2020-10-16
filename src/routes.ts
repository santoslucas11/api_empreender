
import { Router }from 'express';
import EmpreendedoresController from './controllers/EmpreendedoresController';
const routes = Router();

routes.get('/empreendedores', EmpreendedoresController.index);
routes.post('/empreendedores', EmpreendedoresController.create);

export default routes;
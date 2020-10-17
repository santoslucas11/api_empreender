
import { Router }from 'express';
import EmpreendedoresController from './controllers/EmpreendedoresController';
import multer from 'multer';

import  uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/empreendedores', EmpreendedoresController.index);
routes.get('/empreendedores/:id', EmpreendedoresController.show);
routes.post('/empreendedores', upload.array('images') ,EmpreendedoresController.create);

export default routes;
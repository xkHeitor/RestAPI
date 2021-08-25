import { Router }   	from 'express';

import DevCtrl			from './app/controllers/DeveloperCtrl';
import authMiddleware	from './app/middlewares/auth';
import fieldsMiddleware	from './app/middlewares/fieldsValidation';

const routes = new Router();

routes.use(authMiddleware); // authentication middleware

// API routes Developer
routes.get('/developers',				DevCtrl.index);
routes.get('/developers/:id',			DevCtrl.getOne);
routes.delete('/developers/:id',    	DevCtrl.delete);

routes.use(fieldsMiddleware); // field type validation middleware

routes.post('/developers',              DevCtrl.store);
routes.put('/developers/:id',           DevCtrl.update);

export default routes;
import { Router }  from  'express';
import routerClientsBanco from './clientsBanco';

const routes = Router();

routes.use("/clientes", routerClientsBanco);

export default routes;


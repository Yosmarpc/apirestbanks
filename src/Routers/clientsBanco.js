import  { Router } from 'express';
import { getDatosCliete } from '../Controllers/clientsBanco';



const routerClientsBanco  = Router();

    routerClientsBanco.get("/datoscliente", getDatosCliete);


export default routerClientsBanco;
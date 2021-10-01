import { Router } from "express";
import AssinaturasController from "./controllers/AssinaturasController";
import PlanosController from "./controllers/PlanosController"

const routes = Router()

routes.post('/planos', PlanosController.create)
routes.put('/planos', PlanosController.update)
routes.get('/planos', PlanosController.list)

routes.post('/assinaturas', AssinaturasController.create)
routes.get('/assinaturas', AssinaturasController.list)
routes.put('/assinaturas', AssinaturasController.update)

export default routes
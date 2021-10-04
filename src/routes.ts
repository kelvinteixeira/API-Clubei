import { Router } from "express";
import AssinaturasController from "./controllers/AssinaturasController";
import PlanosController from "./controllers/PlanosController"

const routes = Router()

routes.post('/api-clubei/planos', PlanosController.create)
routes.put('/api-clubei/planos', PlanosController.update)
routes.get('/api-clubei/planos', PlanosController.list)

routes.post('/api-clubei/assinaturas', AssinaturasController.create)
routes.get('/api-clubei/assinaturas', AssinaturasController.list)
routes.put('/api-clubei/assinaturas/:id', AssinaturasController.update)
routes.get('/api-clubei/assinaturas/:id', AssinaturasController.find)
routes.delete('/api-clubei/assinaturas/:id', AssinaturasController.delete)

export default routes
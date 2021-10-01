import { Router } from "express";
import PlanosController from "./controllers/PlanosController"

const routes = Router()

routes.post('/planos', PlanosController.create)
routes.put('/planos', PlanosController.update)
routes.get('/planos', PlanosController.list)

export default routes
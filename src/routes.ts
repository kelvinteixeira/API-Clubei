import { Router } from "express";
import multer from 'multer'

import AssinaturasController from "./controllers/AssinaturasController";
import CategoriasController from "./controllers/CategoriasController";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

const routes = Router()

routes.post('/assinaturas', upload.single('assinatura_img'), AssinaturasController.create)
routes.get('/assinaturas', AssinaturasController.list)
routes.get('/assinaturas/:id', AssinaturasController.find)
routes.put('/assinaturas/:id', AssinaturasController.update)
routes.delete('/assinaturas/:id', AssinaturasController.delete)

routes.post('/categorias', CategoriasController.create)
routes.get('/categorias', CategoriasController.list)
routes.get('/categorias/:id_categoria/assinaturas', CategoriasController.find)
routes.put('/categorias/:id_categoria/', CategoriasController.update)
routes.delete('/categorias/:id_categoria', CategoriasController.delete)

export default routes
import { Request, Response } from "express";
import knex from "../database/connection";


export default {
  async find(req: Request, res: Response) {
    const { id_categoria } = req.params
    let assinaturaCategoria = await knex('assinaturas').select('id', 'titulo', 'descricao').where({ id_categoria })
    return res.status(200).json(assinaturaCategoria)
  },

  async list(req: Request, res: Response) {
    const categorias = await knex('categorias').select('categoria').orderBy('id_categoria')
    return res.status(200).json(categorias)
  },
}
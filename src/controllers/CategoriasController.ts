import { Request, Response } from "express";
import knex from "../database/connection";


export default {
  async create(req: Request, res: Response) {
    const { id_categoria, categoria } = req.body 
    const data = { id_categoria, categoria }
    await knex('categorias').insert(data)
    return res.status(201).json({
      message: "Categoria criada com sucesso!", 
      data: data
    })
  },

  async list(req: Request, res: Response) {
    const categorias = await knex('categorias').orderBy('id_categoria')
    return res.status(200).json(categorias)
  },

  async update(req: Request, res: Response) {
    const { id_categoria } = req.params
    const { categoria } = req.body
    const data = { categoria }
    await knex('categorias').update(data).where({ id_categoria })
    const categorias = await knex('categorias').where({ id_categoria })
    return res.status(200).json({
      message: 'Categoria alterada com sucesso em ' + new Date().toISOString(), 
      data: categorias
    })
  },

  async delete(req: Request, res: Response) {
    const { id_categoria } = req.params
    await knex('categorias').delete().where({ id_categoria })
    return res.status(200).json({ message: "Categoria excluida com sucesso!"})
  }
}
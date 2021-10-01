import { Request, Response } from "express";
import knex from '../database/connection'

export default {

  async create(req: Request, res: Response) {
    const { titulo, descricao, valor } = req.body
    const id = 1
    const data = { id, titulo, descricao, valor }
    return res.status(201).json({ data: data })
  },

  async list(req: Request, res: Response) {
    let planos = await knex('tab_planos').orderBy('id')
    return res.status(200).json({ data: planos })
  },
   async update(req: Request, res: Response) {
    const { titulo, descricao, valor } = req.body
    const dataAlteracao = '01/10/2021 16:00'
    const plano = { titulo, descricao, valor, dataAlteracao }
    plano.titulo = "Plano X"
    return res.status(200).json({data: plano})
  }
}
  
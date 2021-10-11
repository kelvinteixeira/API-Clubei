import { Request, Response } from "express";
import knex from "../database/connection";

export default {
  async create(req: Request, res: Response) {
    const assinatura_img = req.file?.path 
    const { titulo, descricao, id_categoria } = req.body 
    const data = { titulo, descricao, id_categoria, assinatura_img }
    await knex('assinaturas').insert(data)
    return res.status(201).json({
      message: "Criado com sucesso!", 
      data: data
    })
  },

  async list(req: Request, res: Response) {
    let assinaturas =  await knex('assinaturas').orderBy('id')
    return res.status(200).json({ data: assinaturas })
  },

  async find(req: Request, res: Response) {
    const { id } = req.params
    const assinatura = await knex('assinaturas').where({ id })
    return res.status(200).json({ data: assinatura })
  },

  async findCategory(req: Request, res: Response) {
    const { id_categoria } = req.params
    let assinaturaCategoria = await knex('assinaturas').select('id', 'titulo', 'descricao', 'assinatura_img').where({ id_categoria })
    switch (id_categoria) {
      case "1":
        return res.status(200).json({
          Categoria: "Alimentos",
          data: assinaturaCategoria
        })
        break
      
      case "2":
        return res.status(200).json({
          Categoria: "Arte e Culturas",
          data: assinaturaCategoria
        })
        break
      
      case "3":
        return res.status(200).json({
          Categoria: "Bebidas",
          data: assinaturaCategoria
        })
        break
      
      case "4":
        return res.status(200).json({
          Categoria: "Fitness",
          data: assinaturaCategoria
        })
        break
      
      case "5":
        return res.status(200).json({
          Categoria: "LIvros",
          data: assinaturaCategoria
        })
        break
      default:
        return res.status(404).json({ message: "Categoria inexistente ou não encontrada" })
    }
  },

  async update(req: Request, res: Response) {
    const { id } = req.params
    const assinatura_img = req.file?.path
    const { titulo, id_categoria, descricao } = req.body
    const data = { titulo, id_categoria, descricao, assinatura_img }
    await knex('assinaturas').update(data).where({ id })
    const assinatura = await knex('assinaturas').where({ id })
    return res.status(200).json({
      message: 'Alterado com sucesso em ' + new Date().toISOString(), 
      data: assinatura
    })
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params
    await knex('assinaturas').delete().where({ id })
    return res.status(200).json({ message: "Registro excluido com sucesso!"})
  }
}


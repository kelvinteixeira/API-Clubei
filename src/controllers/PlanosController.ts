import { Request, Response } from "express";

export default {

  async create(req: Request, res: Response) {
    const { titulo, descricao, valor } = req.body
    const id = 1
    const data = { id, titulo, descricao, valor }
    return res.status(201).json({ data: data })
  },

  async list(req: Request, res: Response) {
    let planos = [
      {
        id: 1,
        titulo: "Plano A",
        descricao: "Direito a 1 assinatura mensal",
        valor: 49.90
      },
      {
        id: 2,
        titulo: "Plano B",
        descricao: "Direito a 2 assinaturas mensal",
        valor: 89.90
      },
      {
        id: 3,
        titulo: "Plano C",
        descricao: "Direito a 3 assinaturas mensal",
        valor: 129.90
      },
    ]
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
  
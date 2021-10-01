import { Request, Response } from "express";

export default {
  async create(req: Request, res: Response) {
    const { titulo, descricao, categoria, imagem } = req.body
    const id = 1
    const data = { id, titulo, descricao, categoria, imagem }
    return res.status(201).json({ data: data })
  },

  async list(req: Request, res: Response) {
    let assinaturas = [
      {
        id: 1,
        titulo: "Assinatura A",
        categoria: "Categoria 1",
        descricao: "Assinatura top...",
        valor: 49.90
      },
      {
        id: 1,
        titulo: "Assinatura B",
        categoria: "Categoria 2",
        descricao: "Assinatura top...",
        imagem: "link"
      },
      {
        id: 3,
        titulo: "Assinatura C",
        categoria: "Categoria 3",
        descricao: "Assinatura top...",
        imagem: "link"
      },
    ]
    return res.status(200).json({data: assinaturas})
  },
  async update(req: Request, res: Response) {
    const { titulo, categoria, descricao, imagem  } = req.body
    const dataAlteracao = '01/10/2021 16:00'
    const assinatura = { titulo, descricao, categoria, imagem, dataAlteracao }
    assinatura.titulo = "Assinatura X"
    return res.status(200).json({data: assinatura})
  }
}
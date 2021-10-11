import express from 'express'
import routes from './routes'

const app = express()
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000

app.use(express.json())
app.use('/v1', routes)
app.use('/uploads/', express.static('uploads'))

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
  return res.json({
    message: "Bem vindo, a REST-API de consulta do Clubei, para mais informações acesse nossa documentação digitando na barra de pesquisa /api-docs"
  })
})
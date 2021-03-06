import express from 'express'
import routes from './routes'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json'


const app = express()
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000


app.use(cors())
app.use(express.json())
app.use('/v1', routes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/uploads/', express.static('uploads'))

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
  return res.json({
    message: 'Bem vindo a REST-API de consulta do Clubei, está API foi desenvolvida para o site Clubei, projeto final do Gama Xp 38ª edição. Para consultar mais informações e os endpoints, acesse nossa documentação digitando ao fim da barra de pesquisa api-docs'
  })
})
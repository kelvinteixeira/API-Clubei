import express from 'express'

const app = express()
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
  return res.json({
    Status: "Okay"
  })
})
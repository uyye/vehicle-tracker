import express from "express"
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

export default app
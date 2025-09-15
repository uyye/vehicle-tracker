import express from "express"
import 'dotenv/config'
import router from "./routes"
import cors from 'cors'
import errorHandler from "./middlewares/errorHandler"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)
app.use(errorHandler)

export default app
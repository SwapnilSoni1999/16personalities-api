import express, { Request, Response, NextFunction } from "express"
import cors from "cors"
import morgan from "morgan"
import routes from "./routes"
import { PORT } from "@/config"
import { HttpError } from "./utils/httpError"
import path from "path"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))

app.use("/api", routes)

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/api-doc.html"))
})

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`)
})

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    message: err.message,
  })
})

export default app

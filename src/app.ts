import express, { Request, Response, NextFunction } from "express"
import cors from "cors"
import morgan from "morgan"
import "./redis"
import routes from "./routes"
import { PORT } from "@/config"
import personalityService from "./services/personality.service"
import redisClient from "./redis"
import { HttpError } from "./utils/httpError"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))

app.use("/api", routes)

app.listen(PORT, async () => {
  await redisClient
    .on("error", (err) => {
      console.log("Error " + err)
    })
    .connect()
    .then(() => {
      console.log("Redis client connected")
    })
  console.log(`Server running on port ${PORT}`)
})

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    message: err.message,
  })
})

export default app

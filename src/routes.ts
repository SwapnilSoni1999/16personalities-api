import { Router } from "express"

import personalityRoutes from "./routes/personality.routes"

const router = Router()

router.use("/personality", personalityRoutes)

export default router

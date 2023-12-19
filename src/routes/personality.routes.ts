import personalityController from "@/controllers/personality.controller"
import { catchAsync } from "catch-async-express"
import { Router } from "express"

const router = Router()

router.get("/session", catchAsync(personalityController.getSession))
router.get("/random", catchAsync(personalityController.getRandom))

export default router

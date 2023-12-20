import personalityController from "@/controllers/personality.controller"
import validator from "@/middlewares/validator.middleware"
import testValidator from "@/validators/test.validator"
import { catchAsync } from "catch-async-express"
import { Router } from "express"

const router = Router()

router.get("/questions", catchAsync(personalityController.getQuestions))

router.post(
  "/submit",
  validator({ body: testValidator.submission }),
  catchAsync(personalityController.submit)
)

export default router

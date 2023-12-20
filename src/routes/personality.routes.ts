import personalityController from "@/controllers/personality.controller"
import validator from "@/middlewares/validator.middleware"
import testValidator from "@/validators/test.validator"
import { catchAsync } from "catch-async-express"
import { Router } from "express"

const router = Router()

/**
 * @swagger
 * /api/personality/questions:
 *   get:
 *     summary: Get personality test questions
 *     description: Get personality test questions
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/questions", catchAsync(personalityController.getQuestions))

/**
 * @swagger
 * /api/personality/submit:
 *   post:
 *     summary: Submit personality test
 *     description: Submit personality test
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               answers:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     text:
 *                       type: string
 *                     answer:
 *                       type: number
 *               gender:
 *                 type: string
 *     responses:
 *       200:
 *         description: OK
 */
router.post(
  "/submit",
  validator({ body: testValidator.submission }),
  catchAsync(personalityController.submit)
)

export default router

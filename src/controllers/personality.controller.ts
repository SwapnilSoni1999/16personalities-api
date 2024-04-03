import personalityService from "@/services/personality.service"
import { Gender, Submission } from "@/types"
import testValidator from "@/validators/test.validator"
import { Request, Response } from "express"
import { z } from "zod"

const getQuestions = async (req: Request, res: Response) => {
  const questions = await personalityService.getPersonalityTest()
  res.json(questions)
}

const submit = async (
  req: Request<any, any, z.infer<typeof testValidator.submission>>,
  res: Response
) => {
  const { answers, gender } = req.body
  const result = await personalityService.getTestResults(
    answers as Submission[],
    gender as Gender
  )
  res.json(result)
}

export default {
  getQuestions,
  submit,
}

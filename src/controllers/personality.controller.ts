import redisClient from "@/redis"
import personalityService from "@/services/personality.service"
import { Gender, Submission } from "@/types"
import { Request, Response } from "express"

const authenticate = async (req: Request, res: Response) => {
  const ipAddress = req.ip

  if (!ipAddress) {
    return res.status(400).json({
      message: "IP address not found",
    })
  }

  await personalityService.startSession(ipAddress)
  return res.json({
    message: "Authenticated",
  })
}

const getSession = async (req: Request, res: Response) => {
  const ipAddress = req.ip

  if (!ipAddress) {
    return res.status(400).json({
      message: "IP address not found",
    })
  }

  const session = await personalityService.getSession(ipAddress)

  res.json(session)
}

const getRandom = async (req: Request, res: Response) => {
  const ipAddress = req.ip

  if (!ipAddress) {
    return res.status(400).json({
      message: "IP address not found",
    })
  }

  const questions = await personalityService.getPersonalityTest(ipAddress)

  const answers: Submission[] = questions.map((question) => {
    const randomOption =
      question.options[Math.floor(Math.random() * question.options.length)]

    return {
      answer: randomOption.value,
      text: question.text,
    }
  })

  const results = await personalityService.getTestResults(
    ipAddress,
    answers,
    Gender.Male
  )

  res.json(results)
}

export default {
  authenticate,
  getSession,
  getRandom,
}

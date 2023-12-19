import personalityService from "./services/personality.service"
import { Gender, Submission } from "./types"

const start = async () => {
  await personalityService.startSession()

  const questions = await personalityService.getPersonalityTest()

  const answers: Submission[] = questions.map((question) => ({
    text: question.text,
    answer:
      question.options[Math.floor(Math.random() * question.options.length)]
        .value,
  }))

  const res = await personalityService.getTestResults(answers, Gender.Male)
  console.dir({ res }, { depth: 10 })
}

start()

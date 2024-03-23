import { BASE_URL, routes } from "@/config"
import {
  Gender,
  GetTestResultsPayload,
  Question,
  QuestionOption,
  Submission,
} from "@/types"
import { replaceMap } from "@/utils/replaceMap"
import session from "@/utils/session"
import fs from "fs"
import { HttpError } from "@/utils/httpError"

const startSession = async (ip: string) => {
  await session.get(BASE_URL)
  const res = await session.get(routes["api.session"])

  if (!res.config.jar) {
    throw new HttpError(500, "No cookies found")
  }

  return res.data
}

const getSession = async (ip: string) => {
  const res = await session.get(routes["api.session"])

  return res.data
}

const getPersonalityTest = async (): Promise<Array<Question>> => {
  const res = await session.get(`${BASE_URL}/free-personality-test`)
  fs.writeFileSync("test.html", res.data)
  const regex = new RegExp(/(:questions=")+([[\S\s]*])(")/, "gm")
  const matches = regex.exec(res.data)

  if (!matches) throw new Error("No matches found")

  // console.log(matches[2])
  const unparsedQuestions = matches[2]

  const replacedQuestions = Object.entries(replaceMap).reduce(
    (acc, [key, value]) => acc.replaceAll(key, value),
    unparsedQuestions
  )
  const questions = JSON.parse(replacedQuestions)

  const defaultOptions: QuestionOption[] = [
    { text: "Disagree strongly", value: -3 },
    { text: "Disagree moderately", value: -2 },
    { text: "Disagree a little", value: -1 },
    { text: "Neither agree nor disagree", value: 0 },
    { text: "Agree a little", value: 1 },
    { text: "Agree moderately", value: 2 },
    { text: "Agree strongly", value: 3 },
  ]

  return questions.map((question: any) => ({
    id: Buffer.from(question.text).toString("base64url"),
    text: question.text,
    options: defaultOptions,
  }))
}

const getTestResults = async (submissionData: Submission[], gender: Gender) => {
  const questions: Array<Omit<Submission, "id"> & { text: string }> =
    submissionData.map((s) => ({
      text: Buffer.from(s.id, "base64url").toString(),
      answer: s.answer,
    }))

  const payload = {
    extraData: [],
    gender,
    questions,
    teamInviteKey: "",
    inviteCode: "",
  }

  const res = await session.post<GetTestResultsPayload>(
    routes["test-results"],
    payload
  )
  const res2 = await session.post(res.data.redirect, payload)

  // console.log(res2.data)
  // fs.writeFileSync("test-results.html", res2.data)

  const regex = new RegExp(/(:test-results=")+({[\S\s]*})(")/, "gm")

  const matches = regex.exec(res2.data)

  if (!matches) throw new Error("No matches found")

  const unparsedResults = matches[2]

  const replacedResults = Object.entries(replaceMap).reduce(
    (acc, [key, value]) => acc.replaceAll(key, value),
    unparsedResults
  )

  const results = JSON.parse(replacedResults)

  return results
}

export default {
  startSession,
  getPersonalityTest,
  getTestResults,
  getSession,
}

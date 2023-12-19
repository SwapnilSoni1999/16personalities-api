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

const startSession = async () => {
  await session.get(BASE_URL)
  const res = await session.get(routes["api.session"])
  //   console.log(res)
}

const getPersonalityTest = async (): Promise<Question[]> => {
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
    text: question.text,
    options: defaultOptions,
  }))
}

const getSessionData = async () => {
  const res = await session.get(routes["api.session"])
  return res.data
}

const getTestResults = async (submissionData: Submission[], gender: Gender) => {
  const payload = {
    extraData: [],
    gender,
    questions: submissionData,
    teamInviteKey: "",
    inviteCode: "",
  }

  const res = await session.post<GetTestResultsPayload>(
    routes["test-results"],
    payload
  )
  const res2 = await session.post(res.data.redirect, payload)

  console.log(res2.data)
  fs.writeFileSync("test-results.html", res2.data)

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
}

export interface QuestionOption {
  text: string
  value: number
}

export interface Question {
  id: string
  text: string
  options: QuestionOption[]
}

export interface Submission {
  id: string
  answer: number
}

export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

export interface TestResult {
  niceName: string
  fullCode: string
  avatarSrc: string
  avatarAlt: string
  avatarSrcStatic: string
  snippet: string
  scales: string[]
  traits: Trait[]
}

export interface Trait {
  key: string
  label: string
  color: string
  score: number
  pct: number
  trait: string
  link: string
  reverse: boolean
  titles: null[]
  description: string
  snippet: string
  imageAlt: string
  imageSrc: string
}

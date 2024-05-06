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
  value: number
}

export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

export interface TestResult {
  niceName: string
  personality: string
  variant: string
  role: string
  strategy: string

  avatarSrc: string
  avatarAlt: string
  avatarSrcStatic: string
  traits: Trait[]
  profileUrl: string
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
  titles: string[]
  description: string
  snippet: string
  imageAlt: string
  imageSrc: string
}

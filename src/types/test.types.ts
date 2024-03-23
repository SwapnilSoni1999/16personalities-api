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
}

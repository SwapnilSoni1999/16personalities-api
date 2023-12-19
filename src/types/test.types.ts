export interface QuestionOption {
  text: string
  value: number
}

export interface Question {
  text: string
  options: QuestionOption[]
}

export interface Submission {
  text: string
  answer: number
}

export enum Gender {
  Male = "Male",
  Female = "Female",
}

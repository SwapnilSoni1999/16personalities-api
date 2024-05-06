export interface GetTestResultsPayload {
  redirect: string
}

export interface SessionData {
  user: User
  notifications: any[]
  updates: any[]
  messages: any[]
}

export interface User {
  activated: boolean
  age: null
  authType: string
  availablePremiumSuites: any[]
  avatar: string
  avatarAlt: string
  avatarFull: string
  canAccessPremiumContent: boolean
  canAccessPremiumTools: boolean
  email: null
  gender: string
  id: null
  inviteCode: null
  isBlockedFromInsights: null
  joinedInTheLastWeek: null
  loggedIn: boolean
  name: null
  newsletter: null
  profilePublic: boolean
  profileUrl: null
  publicUrl: string
  registrationDate: null
  showUpgradeCta: boolean
  subscribedToTeams: null
  teamAutorenew: null
  upgradeUrl: string
  personality: string
  variant: string
  score1: number
  score2: number
  score3: number
  score4: number
  score5: number
  scores: number[]
  role: string
  strategy: string
  traits: Traits
  localized: Localized
}

export interface Localized {
  avatarAlt: string
  niceType: string
  typeUrl: string
  fullTypeHtml: string
  profileUrl: string
}

export interface Traits {
  energy: string
  mind: string
  nature: string
  tactics: string
  identity: string
}

export interface TraitsResponse {
  description: string
  cards: Cards
  traits: Trait[]
  traitsTitle: string
  lastTestAt: null
}

export interface Cards {
  personality: Personality
  role: Personality
  strategy: Personality
}

export interface Personality {
  key: string
  animationSrc: string
  imageSrc: string
  imageAlt: string
  snippetHtml: string
  groupSnippetHtml?: string
  color: string
  link: string
  title: string
  subtitleHtml: string
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
  reversed: boolean
  titles: string[]
  description: string
  snippet: string
  imageAlt: string
  imageSrc: string
}

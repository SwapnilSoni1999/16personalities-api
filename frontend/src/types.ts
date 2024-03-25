export interface RouteInfo {
  method: string
  path: string
  description: string

  request: {
    body?: string
  }
  response: {
    status: number
    body: unknown
  }
}

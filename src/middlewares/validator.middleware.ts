import { AnyZodObject } from "zod"
import { NextFunction, Request, RequestHandler, Response } from "express"
import { HttpError } from "@/utils/httpError"

type RequestPayloadIn = "body" | "query" | "params"

const validator =
  (args: Partial<Record<RequestPayloadIn, AnyZodObject>>): RequestHandler =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const keys = Object.keys(args) as RequestPayloadIn[]

      for (const key of keys) {
        const payload = req[key]
        const validator = args[key]
        console.log({ payload })

        if (validator) {
          const result = validator.safeParse(payload)
          if (!result.success) {
            console.log(result.error.flatten())

            return next(new HttpError(422, "Unprocessable Entity Error"))
          }

          if (result.data) {
            req[key] = result.data
          }
        }
      }
      return next()
    } catch (err) {
      next(new HttpError(500, (err as Error).stack ?? (err as Error).message))
    }
  }

export default validator

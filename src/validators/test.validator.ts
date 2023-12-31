import { Gender } from "@/types"
import { z } from "zod"

const submission = z.object({
  answers: z.array(
    z.object({
      text: z.string(),
      answer: z.number(),
    })
  ),
  gender: z.nativeEnum(Gender),
})

export default {
  submission,
}

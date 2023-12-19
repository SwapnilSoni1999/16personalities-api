import redisClient from "@/redis"
import { CookieJar } from "tough-cookie"

const saveCookies = async (ip: string, jar: CookieJar) => {
  const cookies = jar.toJSON()
  // expire after 1hr
  await redisClient.set(ip, JSON.stringify(cookies), { EX: 3600 })
}

const getCookies = async (ip: string): Promise<CookieJar | null> => {
  const cookies = await redisClient.get(ip)

  if (!cookies) return null

  const jar = CookieJar.fromJSON(JSON.parse(cookies))

  return jar
}

export default {
  saveCookies,
  getCookies,
}

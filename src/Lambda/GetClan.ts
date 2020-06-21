import { Handler } from '../Utils/Handler'
import { Ok } from '../Utils/Response'
import { GetClan } from '../ClashRoyale/Api'

export const handler = Handler(async ({ pathParameters }) => {
  const { clanId } = pathParameters || {}
  const clan = await GetClan(clanId)

  return Ok(clan)
})
